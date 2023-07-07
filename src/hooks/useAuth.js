import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

function useAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem("token"));
        if (token) {
            if (isTokenExpired(token)) {
                logout();
            } else {
                setUser(jwtDecode(token));
            }
        }
    }, []);

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    const isAuthenticated = () => {
        return !!user;
    };

    const isTokenExpired = (token) => {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;
        return decodedToken.exp < currentTime;
    };

    return { user, logout, isAuthenticated };
}

export default useAuth;
