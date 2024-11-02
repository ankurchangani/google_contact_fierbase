    
import { setDoc, deleteDoc, getDocs, doc, collection } from "firebase/firestore";
import { db } from "../../fierbase"; // Correct path to Firebase config
import { SET_LOADING } from "../../Service/Action/authAcionType";

const generateNumericId = () => {
    return Math.floor(Math.random() * 10000);
};

const addContactDatasuc = (contact) => {
    return {
        type: 'ADD_CONTACT',
        payload: contact, // Include the new contact in the action payload
    };
}

const editContactDatasuc = (contact) => {
    return {
        type: 'EDIT_CONTACT',
        payload: contact, // Include the edited contact in the action payload
    };
}

const removeContactDatasuc = (id) => {
    return {
        type: 'REMOVE_CONTACT',
        payload: id, // Include the ID of the removed contact in the action payload
    };
}

const setLoading = (isLoading) => {
    return {
        type: SET_LOADING,
        payload: isLoading,
    };
};


export const addContactData = (contact) => async (dispatch) => {
    try {
        const id = generateNumericId();
        await setDoc(doc(db, "Contact", id.toString()), { ...contact, id });
        dispatch(addContactDatasuc({ ...contact, id }));
        dispatch(fetchContacts());
    } catch (error) {
        console.error("Error adding contact:", error.message);
    }
};

export const editContactData = (id, contact) => async (dispatch) => {
    try {
        await setDoc(doc(db, "Contact", id.toString()), { ...contact, id });

        dispatch(editContactDatasuc({ ...contact, id })); // Dispatch the success action with the edited contact
        dispatch(fetchContacts()); // Fetch updated contacts
    } catch (error) {
        console.error("Error editing contact:", error.message);
    }
};

export const removeContactData = (id) => async (dispatch) => {
    try {
        await deleteDoc(doc(db, "Contact", id.toString()));

        dispatch(removeContactDatasuc(id)); // Dispatch the success action with the removed contact ID
        dispatch(fetchContacts()); // Fetch updated contacts
    } catch (error) {
        console.error("Error removing contact:", error.message);
    }
};

export const fetchContacts = () => async (dispatch) => {
    dispatch(setLoading(true)); // Start loading
    try {
        const querySnapshot = await getDocs(collection(db, "Contact"));
        const contacts = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        dispatch({ type: "FETCH_CONTACT", payload: contacts });
    } catch (error) {
        console.error("Error fetching contacts:", error.message);
    } finally {
        dispatch(setLoading(false)); // Stop loading
    }
};

