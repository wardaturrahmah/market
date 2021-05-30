import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Textk from "../components/atoms/text";
import Buttonk from "../components/atoms/button";
import { user } from "../components/variables/user";
import Inputk from "../components/molecules/input";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { fetch_data } from "../components/variables/api";
export default function signUp() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
  };

  const handleRegistration = () => {
    console.log(username);
    if (password == passwordConfirmation) {
      let json={
        "action": "list",
        "table": "tx_hdr_user",
        "where" :[
            [
                "user_name","=",username            ]
        ],
        "first" : "true",
        "join" : ""
    };
    fetch_data("POST","http://localhost/bootcamp-api/list",json).then(function(check){
        if (check.count==0) {
        let newUser=    {
            "action" : "save",
            "table_hdr" : "tx_hdr_user",
            "data_hdr" : [
                {
                    "user_name" : username,
                    "user_password" :password
                }
            ],
            "table_dtl" : "",
            "join_column_hdr" : "",
            "join_column_dtl" :"",
            "data_dtl" :""
        };
        fetch_data("POST","http://localhost/bootcamp-api/list",newUser).then(function(result){
          
          if(result.success==true)
          {
            alert("Register success");
            router.push("/signin");
          }
          else
          {
            alert(result.message);
          }
        });
      } else {
        alert("User Already Registered");
        console.log(user);
      }
      });
    } else {
      alert("Check Password Confirmation");
    }
  };

  return (
    <>
      <center>
        <div className="templateLogin p-5">
          <div className="row">
            <div className="col-md-6 pl-4 pr-4">
                <img
                  src="/home/signup_image.svg"
                  style={{ width: "100%", marginTop: "40px" }}
                />
              <Textk
                value="Start your New Journey With Us"
                size="24px"
                weight="bold"
                margin="20px 0px 0px 0px"
              />
              <Textk
                value="Build your own shop using peduli digital Marketplace You can sell all your favorite item and get easy money"
                size="16px"
                color="#9D9D9D"
              />
            </div>
            <div className="col-md-6 text-left pl-3 pr-3">
              <Textk size="36px" weight="bold" value="Sign Up" />
              <Inputk
                onChange={handleChangeUsername}
                value="Username / Email"
                height="61px"
                customClass="mt-2"
              />
              <Inputk
                onChange={handleChangePassword}
                value="Password"
                type="password"
                height="61px"
                customClass="mt-3"
              />
              <Inputk
                onChange={handleChangePasswordConfirmation}
                value="Confirm Password"
                type="password"
                height="61px"
                customClass="mt-3"
                border={
                  password !== passwordConfirmation ? "solid thin red" : ""
                }
              />
              <Buttonk
                click={handleRegistration}
                value="Register"
                color="#FFF"
                width="100%"
                bg="#0086CF"
                height="52px"
                name="mt-4"
              />
              <p className="mt-4">
                Already Have An Account{" "}
                <Link href="/signin">
                  <span style={{ color: "#0086CF" }}> Sign In</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}