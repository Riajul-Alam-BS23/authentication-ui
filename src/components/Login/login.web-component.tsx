import ReactDOM, { Root } from "react-dom/client";
import { FormField, LoginForm } from "./login.components";

class LoginWebComponent extends HTMLElement {
  private shadow: ShadowRoot;
  private root: Root | null;
  private buttonColor: string = "bg-blue-500";
  private buttonSize: string = "px-6 py-3";
  private formField: FormField[] = [];
  private formName: string = "Login";
  private buttonName: string = "Login";
  private buttonPosition: string = "";
  private rememberMe: boolean = false;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `
      @import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
    `;
    this.shadow.appendChild(style);
    this.root = null;
  }

  static get observedAttributes() {
    return [
      "button-color",
      "button-size",
      "form-field",
      "form-name",
      "button-name",
      "button-position",
      "remember-me",
    ];
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      switch (name) {
        case "button-size":
          this.buttonSize = newValue;
          break;
        case "button-color":
          this.buttonColor = newValue;
          break;
        case "form-field":
          this.formField = JSON.parse(newValue);
          break;
        case "form-name":
          this.formName = newValue;
          break;
        case "button-name":
          this.buttonName = newValue;
          break;
        case "button-position":
          this.buttonPosition = newValue;
          break;
        case "remember-me":
          this.rememberMe = newValue === "true";
          break;
      }
    }
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  disconnectedCallback() {
    if (this.root) {
      this.root.unmount();
    }
  }

  private render() {
    if (!this.root) {
      this.root = ReactDOM.createRoot(this.shadow!);
    }

    this.root.render(
      <LoginForm
        formName={this.formName}
        buttonName={this.buttonName}
        buttonPosition={this.buttonPosition}
        buttonColor={this.buttonColor}
        buttonSize={this.buttonSize}
        rememberMe={this.rememberMe}
        formField={this.formField}
        dispatchEvent={(event: CustomEvent) => this.dispatchEvent(event)}
      />
    );
  }
}

customElements.define("custom-form", LoginWebComponent);
export { LoginWebComponent };
