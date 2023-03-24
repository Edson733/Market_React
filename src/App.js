import React, {useEffect, useReducer} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {AuthContext} from "./components/auth/authContext";
import {AppRouter} from "./components/routes/AppRouter";
import {AuthReducer} from "./components/auth/authReducer";

const init = () => {
    return JSON.parse(localStorage.getItem("user")) || {logged: false};
}

const App = () => {
    const [user, dispatch] = useReducer(AuthReducer, {}, init);

    useEffect(() => {
        if (!user) return;
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{dispatch, user}}>
            <AppRouter/>
        </AuthContext.Provider>
    );
};

export default App;