import React from "react";
import { auth, provider } from "../firebase";
import { useStateValue } from "../components/StateProvider";
import { actionTypes } from "../components/reducer";
import Footer from "../components/layout/Footer";
import GoogleButton from "react-google-button";

function Login() {
  const [, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png"
          alt="facebook"
        />
      </div>
      <GoogleButton onClick={signIn} />
      <Footer />
    </div>
  );
}

export default Login;
