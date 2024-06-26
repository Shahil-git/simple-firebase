import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.init";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { GithubAuthProvider } from "firebase/auth/web-extension";
import { FaGithub } from "react-icons/fa6";

const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [visitor, setVisitor] = useState(null);

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                console.log("User signed in with GitHub:", user);
                setVisitor(user);
            })
            .catch((error) => {
                console.error("Error during GitHub sign-in:", error);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                console.log("User signed in with Google:", user);
                setVisitor(user);
            })
            .catch((error) => {
                console.error("Error during Google sign-in:", error);
            });
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                console.log("User signed out");
                setVisitor(null);
            })
            .catch((error) => {
                console.error("Error during sign-out:", error);
            });
    };

    return (
        <div className="login-container">
            {visitor ? (
                <button onClick={handleSignOut} className="btn">
                    Sign out
                </button>
            ) : (
                <>
                    <button onClick={handleGoogleSignIn} className="btn mt-3 hover:border-[3px] hover:border-black">
                        <FcGoogle /> Google Login
                    </button>
                    <button onClick={handleGithubSignIn} className="btn mt-3 hover:border-[3px] hover:border-black">
                        <FaGithub /> GitHub
                    </button>
                </>
            )}
        </div>
    );
};

export default Login;
