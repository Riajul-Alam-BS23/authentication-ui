// using formik

import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

export interface FormField {
  fieldLabel: string;
  fieldType: string;
  fieldName: string;
  placeholder?: string;
  validators?: { type: string; value?: any; message?: string }[];
}

interface LoginProps {
  buttonColor: string;
  buttonSize: string;
  formField: FormField[];
  dispatchEvent: (event: CustomEvent) => void;
}

const LoginForm = ({
  buttonColor,
  buttonSize,
  formField,
  dispatchEvent,
}: LoginProps) => {
  const [tooltipMessage, setTooltipMessage] = useState<string | null>(null);

  const validationSchema = Yup.object(
    formField.reduce((acc, field) => {
      let schema = Yup.string();

      field.validators?.forEach((validator) => {
        switch (validator.type) {
          case "required":
            schema = schema.required(validator.message || `${field.fieldLabel} is required`);
            break;
          case "minLength":
            schema = schema.min(
              validator.value,
              validator.message || `${field.fieldLabel} must be at least ${validator.value} characters`
            );
            break;
          case "maxLength":
            schema = schema.max(
              validator.value,
              validator.message || `${field.fieldLabel} must be at most ${validator.value} characters`
            );
            break;
          case "email":
            schema = schema.email(validator.message || "Invalid email format");
            break;
          case "regex":
            schema = schema.matches(
              new RegExp(validator.value),
              validator.message || `Invalid format for ${field.fieldLabel}`
            );
            break;
          default:
            break;
        }
      });

      acc[field.fieldName] = schema;
      return acc;
    }, {} as Record<string, Yup.AnySchema>)
  );

  const formik = useFormik({
    initialValues: formField.reduce((acc, field) => {
      acc[field.fieldName] = "";
      return acc;
    }, {} as Record<string, string>),
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      try {
        const event = new CustomEvent("login-submit", {
          detail: values,
          bubbles: true,
          composed: true,
        });
        dispatchEvent(event);
        setTooltipMessage("Form submitted successfully!");
        resetForm();
      } catch (error) {
        setTooltipMessage("Submission failed. Please try again.");
      }

      setTimeout(() => setTooltipMessage(null), 3000);
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl space-y-6 relative bg-white border border-gray-300 shadow-lg p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

        {tooltipMessage && (
          <div className="absolute top-0 right-0 p-2 mt-2 mr-2 text-sm font-semibold text-white bg-green-500 rounded-md shadow-md">
            {tooltipMessage}
          </div>
        )}

        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          {formField.map((item, index) => (
            <div key={`${item.fieldLabel}-${index}`} className="flex flex-col">
              {item.fieldLabel && (
                <label className="block text-sm font-medium text-gray-600 mb-1 text-left">
                  {item.fieldLabel}
                </label>
              )}
              <input
                type={item.fieldType}
                name={item.fieldName}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none transition-all duration-200 ${
                  formik.errors[item.fieldName] && formik.touched[item.fieldName]
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-400"
                }`}
                placeholder={item.placeholder || `Enter your ${item.fieldLabel?.toLowerCase()}`}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[item.fieldName]}
              />
              {formik.errors[item.fieldName] && formik.touched[item.fieldName] && (
                <div className="text-xs text-red-600 mt-1">{formik.errors[item.fieldName]}</div>
              )}
            </div>
          ))}
          <button
            type="submit"
            disabled={!formik.isValid || formik.isSubmitting}
            className={`w-full py-2 mt-4 font-semibold ${buttonSize} text-white ${buttonColor} rounded-md transition-all duration-200 ${
              formik.isValid && !formik.isSubmitting
                ? "hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export { LoginForm };