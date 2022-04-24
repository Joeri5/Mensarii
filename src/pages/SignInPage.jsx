import firebase from "firebase/compat";

import { auth } from "../firebase";

const SignInPage = () => {
  return (
    <div className="h-screen bg-white">
      <div id="login-card" className="flex justify-center w-4/5">
        <div className="login-button">
          <button
            onClick={() =>
              auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
            }
            className="flex text-center items-center w-full text-xl border-2 justify-center h-10"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
