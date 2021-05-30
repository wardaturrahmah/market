import "bootstrap/dist/css/bootstrap.min.css";
import Textk from "../components/atoms/text";
import Buttonk from "../components/atoms/button";
import Inputk from "../components/molecules/input";
import Link from "next/link";
import { useRouter } from "next/router";
import { user,check_login,set_login } from "../components/variables/user";
import { useState } from "react";
import { fetch_data } from "../components/variables/api";
export default function signIn() {
  const router = useRouter();
  const [luser, setLuser] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
     let json={
        "action": "list",
        "table": "tx_hdr_user",
        "where" :[
                [
                "user_name","=",username            
                ],
                [
                "user_password","=",password
                ]
        ],
        "first" : "true",
        "join" : ""
    };
    fetch_data("POST","http://localhost/bootcamp-api/list",json).then(function(check){
      //console.log(check.count);
      //console.log(check);
      if(check.count>0)
      {
        alert("Login Success");
        localStorage.setItem("useradmin",JSON.stringify(check.data));
        var user=localStorage.getItem("useradmin");
        //console.log(user);
        router.push("/");
      }
      else
      {
        alert("Incorrect username/password");

      }
    });
    /*
    let check = user.filter(
      (data) => data.username == username && data.password == password
    );

    if (check.length) {
      set_login(username);
      //alert("Login Success");
      router.push("/");
    } else if (username.length == 0) {
      //alert("Username Empty");
    } else {
      //alert("Username/Password Wrong");
    }
    */
  };

  return (
    <>
      <center>
        <div className="templateLogin p-5">
          <div className="row">
            <div className="col-md-6 pl-4 pr-4">
                <img src="/home/login_image.svg" />
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
              <Textk size="36px" weight="bold" value="Sign In" />
              <Inputk
                onChange={handleChangeUsername}
                value="Username / Email"
                height="61px"
                customClass="mt-5"
                border={username.length == 0 ? "solid thin red" : ""}
              />
              <Inputk
                border={password.length == 0 ? "solid thin red" : ""}
                onChange={handleChangePassword}
                value="Password"
                type="password"
                height="61px"
                customClass="mt-3"
              />
              <div className="row mt-2 mb-3">
                <div className="col-1">
                  <Inputk height="20px" type="checkbox" />
                </div>
                <div className="col">
                  <Textk
                    value="Remember Me"
                    size="18px"
                    color="#9D9D9D"
                    marginTop="10px"
                  />
                </div>
              </div>
              <Buttonk
                click={handleLogin}
                value="Login"
                color="#FFF"
                width="100%"
                bg="#024aca"
                height="52px"
              />
              <p className="mt-5">
                Don’t have account
                <Link href="/signup">
                  <span style={{ color: "#024aca" }}> Sign Up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}
