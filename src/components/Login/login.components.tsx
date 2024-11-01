// import  { useState, ChangeEvent, FormEvent } from "react";

// export interface FormField {
//   fieldLabel: string;
//   fieldType: string;
//   fieldName: string; // Unique identifier for the field state
//   placeholder?: string; // Optional placeholder customization
// }

// interface LoginProps {
//   buttonColor: string;
//   buttonSize: string;
//   formField: FormField[];
//   dispatchEvent: (event: CustomEvent) => void;
// }

// const LoginForm = ({
//   buttonColor,
//   buttonSize,
//   formField,
//   dispatchEvent,
// }: LoginProps) => {
//   // Initialize the state dynamically based on the formField array
//   const initialState = formField.reduce((acc, field) => {
//     acc[field.fieldName] = ""; // Initialize all fields with empty strings
//     return acc;
//   }, {} as Record<string, string>);

//   const [formData, setFormData] = useState<Record<string, string>>(initialState);
//   const [error, setError] = useState<string>("");

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value, // Update the relevant field dynamically
//     }));
//   };

//   const handleSubmit = (e: FormEvent) => {
//     e.preventDefault();

//     // Check for empty required fields
//     const emptyFields = formField.some((field) => !formData[field.fieldName]);
//     if (emptyFields) {
//       setError("All fields are required!");
//       return;
//     }
//     setError("");

//     // Dispatch custom event with form data
//     const event = new CustomEvent("login-submit", {
//       detail: formData,
//       bubbles: true,
//       composed: true,
//     });
//     dispatchEvent(event);
//   };
// console.log('form data=> ',formField)
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
//         {error && (
//           <div className="p-4 text-sm text-red-700 bg-red-100 rounded-md">
//             {error}
//           </div>
//         )}
//         <form className="space-y-4" onSubmit={handleSubmit}>
//           {formField.map((item, index) => (
//             <div key={`${item.fieldLabel}-${index}`}>
//               <label className="block text-sm font-medium text-gray-600">
//                 {item.fieldLabel}
//               </label>
//               <input
//                 type={item.fieldType}
//                 name={item.fieldName}
//                 className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//                 placeholder={item.placeholder || `Enter your ${item.fieldLabel.toLowerCase()}`}
//                 value={formData[item.fieldName]}
//                 onChange={handleChange}
//               />
//             </div>
//           ))}
//           <button
//             type="submit"
//             className={`font-semibold ${buttonSize} text-white ${buttonColor} rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400`}
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export { LoginForm };

// import { useFormik } from "formik";
// import { useState } from "react";
// import * as Yup from "yup";

// export interface FormField {
//   fieldLabel: string;
//   fieldType: string;
//   fieldName: string;
//   placeholder?: string;
//   validators?: { type: string; value?: any; message?: string }[];
// }

// interface LoginProps {
//   buttonColor: string;
//   buttonSize: string;
//   formField: FormField[];
//   dispatchEvent: (event: CustomEvent) => void;
// }

// const LoginForm = ({
//   buttonColor,
//   buttonSize,
//   formField,
//   dispatchEvent,
// }: LoginProps) => {
//   const [tooltipMessage, setTooltipMessage] = useState<string | null>(null);

//   // Dynamically generated validation schema
//   const validationSchema = Yup.object(
//     formField.reduce((acc, field) => {
//       let schema = Yup.string();
      
//       // Apply validators based on type and value
//       field.validators?.forEach((validator) => {
//         switch (validator.type) {
//           case "required":
//             schema = schema.required(validator.message || `${field.fieldLabel} is required`);
//             break;
//           case "minLength":
//             schema = schema.min(
//               validator.value,
//               validator.message || `${field.fieldLabel} must be at least ${validator.value} characters`
//             );
//             break;
//           case "maxLength":
//             schema = schema.max(
//               validator.value,
//               validator.message || `${field.fieldLabel} must be at most ${validator.value} characters`
//             );
//             break;
//           case "email":
//             schema = schema.email(validator.message || "Invalid email format");
//             break;
//           case "regex":
//             schema = schema.matches(
//               new RegExp(validator.value),
//               validator.message || `Invalid format for ${field.fieldLabel}`
//             );
//             break;
//           default:
//             break;
//         }
//       });

//       acc[field.fieldName] = schema;
//       return acc;
//     }, {} as Record<string, Yup.AnySchema>)
//   );

//   const formik = useFormik({
//     initialValues: formField.reduce((acc, field) => {
//       acc[field.fieldName] = "";
//       return acc;
//     }, {} as Record<string, string>),
//     validationSchema,
//     onSubmit: (values, { resetForm }) => {
//       try {
//         const event = new CustomEvent("login-submit", {
//           detail: values,
//           bubbles: true,
//           composed: true,
//         });
//         dispatchEvent(event);
//         setTooltipMessage("Form submitted successfully!");
//         resetForm();
//       } catch (error) {
//         setTooltipMessage("Submission failed. Please try again.");
//       }

//       setTimeout(() => setTooltipMessage(null), 3000); // Hide tooltip after 3 seconds
//     },
//   });

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg relative">
//         <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>

//         {tooltipMessage && (
//           <div className="absolute top-0 right-0 p-2 mt-2 mr-2 text-sm font-semibold text-white bg-green-500 rounded-md shadow-md">
//             {tooltipMessage}
//           </div>
//         )}

//         <form className="space-y-4" onSubmit={formik.handleSubmit}>
//           {formField.map((item, index) => (
//             <div key={`${item.fieldLabel}-${index}`}>
//               <label className="block text-sm font-medium text-gray-600 mb-1">
//                 {item.fieldLabel}
//               </label>
//               <input
//                 type={item.fieldType}
//                 name={item.fieldName}
//                 className={`w-full px-4 py-2 mt-1 border rounded-md focus:outline-none transition-all duration-200 ${
//                   formik.errors[item.fieldName] && formik.touched[item.fieldName]
//                     ? "border-red-500 focus:ring-red-500"
//                     : "border-gray-300 focus:ring-blue-400"
//                 }`}
//                 placeholder={item.placeholder || `Enter your ${item.fieldLabel.toLowerCase()}`}
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values[item.fieldName]}
//               />
//               {formik.errors[item.fieldName] && formik.touched[item.fieldName] && (
//                 <div className="text-xs text-red-600 mt-1">{formik.errors[item.fieldName]}</div>
//               )}
//             </div>
//           ))}
//           <button
//             type="submit"
//             disabled={!formik.isValid || formik.isSubmitting}
//             className={`w-full py-2 mt-4 font-semibold ${buttonSize} text-white ${buttonColor} rounded-md transition-all duration-200 ${
//               formik.isValid && !formik.isSubmitting
//                 ? "hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
//                 : "bg-gray-400 cursor-not-allowed"
//             }`}
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export { LoginForm };



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

  // Dynamically generated validation schema
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
      <div className="w-full max-w-md space-y-6 relative bg-white border border-gray-300 shadow-lg p-8 rounded-lg">
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
