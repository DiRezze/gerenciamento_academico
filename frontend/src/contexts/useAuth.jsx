import React, { createContext, useState } from "react";

const AuthContext = createContext(undefined);

export const AuthProvider = ({children}) => {
    
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoadingAuth, SetIsLoadingAuth] = useState(false);

    const signIn = async (user, password) => {
        try {
            setIsLoading(true);

            // authentication req logic
            
        } catch (err) {
            setIsAuthenticated(false);
            setCurrentUser(null);
            
        } finally {
            setIsLoading(false);
        }

    }

    const signOut = async () => {
        try {
            setIsLoading(true);

            // authentication req logic

        } catch (err) {
            
        } finally{
            setIsLoading(false);
        }
    }

    return(
        <AuthContext.Provider value={{ isAuthenticated, currentUser,  isLoadingAuth, signIn, signOut }}>
            { children }
        </AuthContext.Provider>
    );
    
}

export const useAuth = () => React.useContext(AuthContext);
