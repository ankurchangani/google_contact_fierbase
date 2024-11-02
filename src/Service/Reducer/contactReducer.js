
const initialState = {
    contacts: [],
    loading: false, // Initial loading state
};


const contactReducer = (state = initialState, action) => {
    switch (action.type) {
      
        case "FETCH_CONTACT":
            return {
                ...state,
                contacts: Array.isArray(action.payload) ? action.payload : [],
                loading: false, // Set loading to false after fetching
            };
            case "SET_LOADING":
                return {
                    ...state,
                    loading: action.payload, // Update loading state
                };
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };
     
        case "EDIT_CONTACT":
            return {
                ...state,
                contacts : action.payload,
            };
      
        case "REMOVE_CONTACT":

            return {
                ...state,
            }
            
        break ;

        
         
        default:
            return state;
    }
};

/******  40188d7e-3b18-4df6-a1da-abe0d4f3dc65  *******/

export default contactReducer;

