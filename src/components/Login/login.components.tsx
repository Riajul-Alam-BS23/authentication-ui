
import { useForm } from "react-hook-form";
import { useState } from "react";

export interface FormField {
  fieldLabel: string;
  fieldType: string;
  fieldName: string;
  placeholder?: string;
  validators?: {
    type: string;
    value?: string | number | RegExp;
    message?: string;
  }[];
}

interface LoginProps {
  formName: string;
  buttonColor: string;
  buttonSize: string;
  buttonName: string;
  buttonPosition: string;
  formField: FormField[];
  dispatchEvent: (event: CustomEvent) => void;
  rememberMe?: boolean;
}

const LoginForm = ({
  formName,
  buttonColor,
  buttonSize,
  buttonName,
  buttonPosition,
  formField,
  dispatchEvent,
  rememberMe = false,
}: LoginProps) => {
  const [tooltipMessage, setTooltipMessage] = useState<string | null>(null);
  const [isRemembered, setIsRemembered] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    reset,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = (values: Record<string, string | number | boolean | null>) => {
    try {
      const event = new CustomEvent("login-submit", {
        detail: { ...values, rememberMe: isRemembered },
        bubbles: true,
        composed: true,
      });
      dispatchEvent(event);
      setTooltipMessage("Form submitted successfully!");
      reset();
      setIsRemembered(false);
    } catch {
      setTooltipMessage("Submission failed. Please try again.");
    }

    setTimeout(() => setTooltipMessage(null), 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl space-y-6 relative bg-white border border-gray-300 shadow-lg p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-700">
          {formName}
        </h2>

        {tooltipMessage && (
          <div className="absolute top-0 right-0 p-2 mt-2 mr-2 text-sm font-semibold text-white bg-green-500 rounded-md shadow-md">
            {tooltipMessage}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {formField.map((item, index) => (
            <div key={`${item.fieldLabel}-${index}`} className="flex flex-col">
              {item.fieldLabel && (
                <label className="block text-sm font-medium text-gray-600 mb-1 text-left">
                  {item.fieldLabel}
                </label>
              )}
              <input
                type={item.fieldType}
                placeholder={
                  item.placeholder ||
                  `Enter your ${item.fieldLabel?.toLowerCase()}`
                }
                {...register(item.fieldName, {
                  required:
                    item.validators?.find((v) => v.type === "required")
                      ?.message ?? "This field is required",
                  minLength: {
                    value:
                      (item.validators?.find((v) => v.type === "minLength")
                        ?.value as number) || 0,
                    message:
                      item.validators?.find((v) => v.type === "minLength")
                        ?.message ?? "Minimum length not met",
                  },
                  maxLength: {
                    value:
                      (item.validators?.find((v) => v.type === "maxLength")
                        ?.value as number) || 100,
                    message:
                      item.validators?.find((v) => v.type === "maxLength")
                        ?.message ?? "Maximum length exceeded",
                  },
                  validate: (value) => {
                    if (
                      item.fieldType === "email" &&
                      item.validators?.some((v) => v.type === "email")
                    ) {
                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                      if (!emailRegex.test(value)) {
                        return "Invalid email format";
                      }
                    }

                    const regexValidators = item.validators?.filter(
                      (v) => v.type === "regex"
                    );
                    for (const regexValidator of regexValidators ?? []) {
                      const regexPattern = new RegExp(
                        regexValidator.value as string
                      );
                      if (!regexPattern.test(value)) {
                        return regexValidator.message;
                      }
                    }
                    return true;
                  },
                })}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none transition-all duration-200 ${
                  errors[item.fieldName]
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-blue-400"
                }`}
              />
              {errors[item.fieldName]?.message && (
                <div className="text-xs text-red-600 mt-1">
                  {String(errors[item.fieldName]?.message)}
                </div>
              )}
            </div>
          ))}

          {rememberMe && (
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
                checked={isRemembered}
                onChange={(e) => setIsRemembered(e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label
                htmlFor="rememberMe"
                className="ml-2 block text-sm text-gray-600"
              >
                Remember Me
              </label>
            </div>
          )}

          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={`font-semibold ${buttonSize} text-white rounded-md ${buttonPosition} ${
              isValid && !isSubmitting
                ? `${buttonColor} hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400`
                : "bg-gray-600 cursor-not-allowed"
            }`}
            style={{
              backgroundColor: buttonColor,
            }}
          >
            {buttonName}
          </button>
        </form>
      </div>
    </div>
  );
};

export { LoginForm };
