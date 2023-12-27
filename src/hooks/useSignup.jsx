import { useState } from "react";
import { auth, storage,db } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuthContext } from "./useAuthContext";
import {setDoc,doc} from 'firebase/firestore'

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, userName, thumbnail) => {
    setError(null);
    setIsPending(true);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      //console.log(response.user);

      if (!response) {
        throw new Error("Membership process could not be completed");
      }

      const filePath = `thumbnails/${response.user.uid}/${thumbnail.name}`;
      const storageRef = ref(storage, filePath);
      await uploadBytes(storageRef, thumbnail);

      const imgUrl = await getDownloadURL(storageRef);

      updateProfile(response.user, {
        displayName: userName,
        photoURL: imgUrl,
      });

      const docRef = doc(db,'users',response.user.uid)
      await setDoc(docRef,{
        online:true,
        usersName:userName,
        fotoUrl:imgUrl
      })

      dispatch({ type: "LOGIN", payload: response.user });

      setIsPending(false);
      setError(null);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};
