
const initialState = {
    contacts: [],
    loading: false,
    error: null,
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

            case "SET_ERROR": // New case for handling errors
            return {
                ...state,
                error: action.payload,
            };
            
    

        
         
        default:
            return state;
    }
};



export default contactReducer;

