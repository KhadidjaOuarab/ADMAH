import React from "react";
import cardCSS from "./Card.css";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import axios from 'axios'
import {Routes, Route, Link} from 'react-router-dom'
import PageTest from '../../Pages/TestPages.jsx'
import { useNavigate } from "react-router-dom";
function Card() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: username,
    password: password
  });

  const getValueUsername = (e) => {
    setUsername(e.target.value);  
    setUser({username : e.target.value,password :password});
  };
 /* console.log("====================================");
  console.log(username);
  console.log("====================================");*/
  
  const getValuePassword = (ee) => {
    setPassword(ee.target.value);  
    setUser({username : username,password : ee.target.value})
  };
/*  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  console.log(password);
  console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");*/

  const loginFunction = (e,target) => {
    console.log('111111111111111111111111111111111111');
    console.log(username);
    console.log('111111111111111111111111111111111111');

   /* axios.get('http://localhost:4000/Users/AllUsers')
        .then((res) => {
            console.log("fff")
            console.log(res.data)
        }).catch((error) => {
            console.log(error.value)
        });*/

  /*  axios.post('http://localhost:4000/Users/create',user)
        .then((res) => {
            console.log("fff")
            console.log(res.data)
        }).catch((error) => {
            console.log(error.value)
        });*/

 axios.post('http://localhost:4000/Users/login',user)
        .then((req) => {
          setLogin(true);
          navigate(target);
        }).catch((error) => {
            console.log(error.value)
            
        });   
// Verifier si login et send another page


  };

  return (
    <div className="Card">
      <Label labelClass="LabelPurple" label="Login" />
      <div>
        <Label labelClass="Defaultlabel" label="User Name" />
        <Input
          type="text"
          classname="InputCss"
          inplace="Enter Username"
          valueInput={username}
          onChangeFunction={getValueUsername}
          icon="fa-solid fa-user"
        />
      </div>
      <div>
        <Label labelClass="Defaultlabel" label="Password " />
        <Input
          type="password"
          classname="InputCss"
          inplace="Enter Password"
          icon="fa-solid fa-eye"
          valueInput={password}
          onChangeFunction={getValuePassword}
        />
      </div>
  <Link to="/next">
  <Button button="button" ButtonLabel="Login" onClickFunction={e => loginFunction(e, "/next ")} />
  </Link>
     
      <Label labelClass="LabelPurpleMedium" label="Forgot Password?" />

      {login ? (
          <p className="text-success">You Are Logged in Successfully</p>
        ) : (
          <p className="text-danger">You Are Not Logged in</p>
        )}
    </div>
  );
}

export default Card;
