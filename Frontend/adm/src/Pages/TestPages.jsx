import React from "react";
import Input from "../Components/Input/Input";
import Label from "../Components/Label/Label";
import Button from "../Components/Button/Button";
import Card from "../Components/Card/Card";
import HeaderLogin from "../Components/HeaderLogin/HeaderLogin";
function Login() {
  return (
    <div>
       <br></br>
      <Label labelClass="LabelRed" label="hhhhhhhhhhhhh" />
       <br></br>
      <Label labelClass="Defaultlabel" label="hhhhhhhhhhhhh" />
      <br></br> 
      <Label labelClass="LabelPurple" label="hhhhhhhhhhhhh" />
      <br></br>
      <Label labelClass="LabelPurpleMedium" label="hhhhhhhhhhhhh" />
      <br></br>
      <Button button="button" />
      <br></br>
      <Input type="text" classname="InputCss" inplace="Enter Username" />
      <br></br><br></br><br></br>
      <Card />
     
      <HeaderLogin />
    </div>
  );
}

export default Login;
