import  ReactDOM  ,{ Root } from "react-dom/client";
import { FormField, LoginForm } from "./login.components";


class LoginWebComponent extends HTMLElement {
  private shadow: ShadowRoot;
  private root: Root | null;
  private buttonColor: string = "bg-blue-500";
  private buttonSize: string = "px-6 py-3";
  private formField:FormField[]=[];
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `
      @import 'https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css';
    `;
    this.shadowRoot?.appendChild(style);
    this.root = null;
  }
  static get observedAttributes(){
    return ['button-color', 'button-size','form-field'];
  }
 

  attributeChangedCallback(name:string,oldValue:string,newValue:string){
    if(oldValue!=newValue){
      if(name==='button-size'){
        this.buttonSize=newValue;
      }
      if(name==='button-color'){
        this.buttonColor=newValue;
      }
      if(name==='form-field'){
        this.formField=JSON.parse(newValue);
      }
    }
    console.log('name=> ',name,'oldValue=> ',oldValue,'new Value=> ',newValue);
    this.render();
  }
  connectedCallback(){
    this.render();
  }
  disconnectedCallback(){
    if(this.root){
      this.root.unmount();
    }
  }
  private render(){
    if(!this.root){
      this.root=ReactDOM.createRoot(this.shadow!)
    }
    console.log("button color=> ",this.buttonColor,"\n button size",this.buttonSize,"\n form field", this.formField);
    this.root.render(
      <LoginForm
      buttonColor={this.buttonColor}
      buttonSize={this.buttonSize}
      dispatchEvent={(event:CustomEvent)=>this.dispatchEvent(event)}
      formField={this.formField}
      />
    )
  }
}
customElements.define("custom-form", LoginWebComponent);
export { LoginWebComponent };