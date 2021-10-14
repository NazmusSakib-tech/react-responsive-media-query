import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializations = () => {
    initializeApp(firebaseConfig);
}

export default initializations;