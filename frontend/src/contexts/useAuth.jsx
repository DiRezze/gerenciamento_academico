import React, { createContext, useState } from "react";

const AuthContext = createContext(undefined);

export const AuthProvider = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, SetIsLoading] = useState(false);

    const signIn = async (user, password) => {
        try {
            SetIsLoading(true);

            // authentication req logic
            
        } catch (err) {
            setIsAuthenticated(false);
            setCurrentUser(null);
            
        } finally {
            SetIsLoading(false);
        }

    }

    const signOut = async () => {
        try {
            SetIsLoading(true);

            // authentication req logic

        } catch (err) {
            
        } finally{
            SetIsLoading(false);
        }
    }
    
}