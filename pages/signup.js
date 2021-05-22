import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Textk from "../components/atoms/text";
import Buttonk from "../components/atoms/button";
import { list_users } from "../components/variables/user";
import Inputk from "../components/molecules/input";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
    if (password == passwordConfirmation) {
      let check = list_users.filter(
        (data) => data.username == username && data.password == password
      );
      if (!check.length) {
        let newUser = {
          username:username,
          password:password
        }
        alert("Success Register User");
        list_users.push(newUser);
        console.log(list_users);
      } else {
        alert("User Already Registered");
        console.log(list_users);
      }
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
                marginTop="20px"
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
                onClick={handleRegistration}
                value="Register"
                color="#FFF"
                width="100%"
                background="#0086CF"
                height="52px"
                customClass="mt-4"
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