import jwtDecode from "jwt-decode";
import React, { useReducer, createContext } from "react";

const initialState = {
    user: null
}

if (localStorage.getItem("token")) {
    const decodedToken = jwtDecode(localStorage.getItem("token")!);

    // checks if token is expired, compares current time to token expiry time
    //@ts-ignore as it's not a string
    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
    } else {
        //@ts-ignore as I know it won't be null
        initialState.user = decodedToken;
    }
}


// create context for auth
const AuthContext = createContext({
    user: null,
    login: (userData: any) => {},
    logout: () => {}
});

// in the case of logging in, we want to return the current state, and change the state of the user to the payload of the action
// in the case of logging out, we want to return the current state, and change the state of the user to null
function authReducer(state: any, action: any) {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user: action.payload
            }
        case "LOGOUT":
            return {
                ...state,
                user: null
            }
        default:
            return state;
    }
}

// react hook that has a state and a dispatch that comes from useReducer
// dispatch lets us dispatch actions to the reducer
function AuthProvider(props: any) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    // when this login function is called it means we have what we need from the server to log in
    const login = (userData: any) => {
        localStorage.setItem("token", userData.token);
        // dispatch the action to the reducer, user is then set to the payload which is userData
        dispatch({
            type: "LOGIN",
            payload: userData
        });
    }

    // logs out by dispatching the logout action and removing token
    function logout() {
        localStorage.removeItem("token");
        dispatch({ type: "LOGOUT" });
    }

    // returns the provider, which is the context, and the value is the state and the login and logout functions
    // we pass in the props because they are coming from the props that are intially passed into the AuthProvider
    return (
        <AuthContext.Provider
            value={{ user: state.user, login, logout }}
            {...props}
        />
    )
}

export { AuthContext, AuthProvider };