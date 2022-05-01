import React, { useContext, useState, useEffect } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut, UserInfo } from "firebase/auth";
import { useNavigate } from "react-router-dom";
type Props = {
  children: React.ReactNode;
};

export interface AuthContextInterface {
  currentUser: UserInfo;
  loading: boolean;
  logout: () => void;
  signIn: () => void;
}

export const authContextDefaults: AuthContextInterface = {
  currentUser: {
    displayName: "",
    email: "",
    phoneNumber: "",
    photoURL: "",
    providerId: "",
    uid: "",
  },
  loading: false,
  logout: () => null,
  signIn: () => null,
};

export const AuthContext =
  React.createContext<AuthContextInterface>(authContextDefaults);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: Props) {
  const [currentUser, setCurrentUser] = useState<any>({
    displayName: "",
    email: "",
    phoneNumber: "",
    photoURL: "",
    providerId: "",
    uid: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  function logout() {
    signOut(auth);
    navigate("/");
  }

  function signIn() {
    console.log("Clicked.");
    signInWithPopup(auth, provider)
      .then((result) => {
        //   const credential = GoogleAuthProvider.credentialFromResult(result);
        //   const token = credential?.accessToken;
        const user = result.user;
        setCurrentUser(user);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      console.log(user);
      if (user) {
        navigate("/dashboard");
      }
    });

    return unsubscribe;
  }, []);

  // useEffect(() => {
  //   const user = auth.currentUser;
  //   if(user){
  //     navigate("/dashboard")
  //   }
  // }, [])

  const value = {
    currentUser,
    loading,
    logout,
    signIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
