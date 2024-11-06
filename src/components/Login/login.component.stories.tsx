/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { LoginWebComponent } from "../Login/login.web-component";

export default {
  title: "Components/LoginWebComponent",
  component: LoginWebComponent as unknown,
  argTypes: {
    buttonColor: { control: "color" },
    buttonSize: { control: "text" },
    buttonName: { control: "text" },
    buttonPosition: { control: "text" },
    formName: { control: "text" },
    formField: { control: "object" },
    rememberMe: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn = (args: any) => {
  const container = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const element = document.createElement("custom-form");
    element.setAttribute("button-color", args.buttonColor);
    element.setAttribute("button-size", args.buttonSize);
    element.setAttribute("button-name", args.buttonName);
    element.setAttribute("button-position", args.buttonPosition);
    element.setAttribute("form-name", args.formName);
    element.setAttribute("form-field", JSON.stringify(args.formField));
    element.setAttribute("remember-me", args.rememberMe ? "true" : "false");

    container.current?.appendChild(element);

    return () => {
      if (container.current) {
        container.current.innerHTML = "";
      }
    };
  }, [args]);

  return <div ref={container} />;
};

export const Default = Template.bind({});
Default.args = {
  formName: "Login",
  buttonColor: "bg-blue-500",
  buttonSize: "px-6 py-3",
  buttonName: "Login",
  buttonPosition: "self-center",
  rememberMe: true, 
  formField: [
    {
      fieldLabel: "Username",
      fieldType: "text",
      fieldName: "username",
      placeholder: "Enter your username",
      validators: [
        { type: "required", message: "Username is required" },
        { type: "minLength", value: 3, message: "Minimum 3 characters" },
      ],
    },
    {
      fieldLabel: "Password",
      fieldType: "password",
      fieldName: "password",
      placeholder: "Enter your password",
      validators: [
        { type: "required", message: "Password is required" },
        { type: "minLength", value: 6, message: "Minimum 6 characters" },
      ],
    },
  ],
};

export const CustomButtonStyle = Template.bind({});
CustomButtonStyle.args = {
  formName: "Login",
  buttonColor: "bg-green-500",
  buttonSize: "px-8 py-4",
  buttonName: "Sign In",
  buttonPosition: "self-start",
  rememberMe: true,
  formField: [
    {
      fieldLabel: "Email",
      fieldType: "email",
      fieldName: "email",
      placeholder: "Enter your email",
      validators: [
        { type: "required", message: "Email is required" },
        { type: "email", message: "Invalid email format" },
      ],
    },
    {
      fieldLabel: "Password",
      fieldType: "password",
      fieldName: "password",
      placeholder: "Enter your password",
      validators: [
        { type: "required", message: "Password is required" },
        { type: "minLength", value: 8, message: "Minimum 8 characters" },
      ],
    },
  ],
};

export const LargeForm = Template.bind({});
LargeForm.args = {
  formName: "Sign Up",
  buttonColor: "bg-purple-500",
  buttonSize: "px-10 py-4",
  buttonName: "Register",
  buttonPosition: "self-end",
  rememberMe: false,
  formField: [
    {
      fieldLabel: "Username",
      fieldType: "text",
      fieldName: "username",
      placeholder: "Enter your username",
      validators: [
        { type: "required", message: "Username is required" },
        { type: "minLength", value: 3, message: "Minimum 3 characters" },
      ],
    },
    {
      fieldLabel: "Email",
      fieldType: "email",
      fieldName: "email",
      placeholder: "Enter your email",
      validators: [
        { type: "required", message: "Email is required" },
        { type: "email", message: "Invalid email format" },
      ],
    },
    {
      fieldLabel: "Password",
      fieldType: "password",
      fieldName: "password",
      placeholder: "Enter your password",
      validators: [
        { type: "required", message: "Password is required" },
        { type: "minLength", value: 8, message: "Minimum 8 characters" },
      ],
    },
    {
      fieldLabel: "Confirm Password",
      fieldType: "password",
      fieldName: "confirmPassword",
      placeholder: "Confirm your password",
      validators: [
        { type: "required", message: "Confirmation is required" },
        { type: "minLength", value: 8, message: "Minimum 8 characters" },
      ],
    },
  ],
};
