import { initializeApp} from "firebase/app";
import { getAuth} from "firebase/auth"; 
import { getFirestore} from "firebase/firestore"; 
import { firebaseConfig } from "./config/firebaseConfig";

// import firebase from "firebase/compat/app"
// import "firebase/compat/auth"
// import "firebase/compat/database"

const firebaseapp = initializeApp (firebaseConfig);

const auth = getAuth(firebaseapp);
const db = getFirestore(firebaseapp);

export { auth, db };