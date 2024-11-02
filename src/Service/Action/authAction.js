import { auth, db } from '../../fierbase'; // Ensure correct spelling of 'firebase'
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import {
    SIGN_IN_START,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_OUT_SUCCESS,
} from '../../Service/Action/authAcionType'; // Ensure this path is correct

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => async (dispatch) => {
    dispatch({ type: SIGN_IN_START });
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
        });

        dispatch({ type: SIGN_IN_SUCCESS, payload: user });
    } catch (error) {
        dispatch({ type: SIGN_IN_FAILURE, payload: error.message });
    }
};

export const logout = () => async (dispatch) => {
    try {
        await signOut(auth);
        dispatch({ type: SIGN_OUT_SUCCESS });
    } catch (error) {
        console.error("Error during sign out: ", error);
    }
};
