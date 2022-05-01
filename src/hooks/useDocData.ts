import { db } from "../firebase";
import { collection, doc } from "firebase/firestore";
import { useDocumentData } from "react-firebase-hooks/firestore";

const ref = (collection: string, id: string) => {
  return doc(db, collection, id);
};

const useDocData = (collection: string, document: string) => {
  return useDocumentData(ref(collection, document));
};

export default useDocData;
