import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    // to set email 
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    // to set password
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    // to set name
    const handleName = e => {
        setName(e.target.value);
    }

    // update profile 
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {

            })
    }
    // create accout with email and password
    const createUserWithEmail = (e) => {
        // avoid default browser reloads 
        e.preventDefault();
        setIsLoading(true);
        if (password.length < 6) {
            setError("Your password length should be 6 or more than 6 charecter long ");
            return;
        }
        if (!/(?=.*?[A-Z])/.test(password)) {
            setError("At least use one upper case in your password");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password, name)
            .then((result) => {
                setUser(result.user);
                setError("");
                setUserName();
            })
            .catch(error => {
                setError(error.massage);
            })
            .finally(() => {
                setIsLoading(false);;
            });
    }

    // sign in with email and password 
    const signInWithEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password, name)
            .then((result) => {
                setUser(result.user);
                setError("");
                setUserName();
            })
            .catch(error => {
                setError(error.massage);
            })
            .finally(() => {
                setIsLoading(false);;
            });
    }

    // sign in with google 
    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
            })
            .finally(() => {
                setIsLoading(false);;
            });
    }

    // user state change 
    useEffect(() => {
        const unsubsribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }

            setIsLoading(false);;

        });
        return () => unsubsribed;
    }, [])

    // log out 
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {

            })
            .finally(() => {
                setIsLoading(false);;
            });
    }
    return {
        user,
        error,
        handleName,
        createUserWithEmail,
        signInWithEmail,
        handleEmail,
        handlePassword,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;