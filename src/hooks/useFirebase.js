import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializations from "../Pages/Login/Firebase/firebase.init";

initializations();
const useFirebase = () => {
    const [user, setUsers] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUsers(result.user);

            })
            .finally(() => {setIsLoading(false)})
    }
    //observe user state change
    useEffect(() => {
        const unSubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUsers(user)
            } else {
                setUsers({})
            }
            setIsLoading(false)
        });
        return () => unSubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInWithGoogle,
        logOut
    }
}

export default useFirebase;
