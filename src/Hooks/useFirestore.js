import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../firebase/config"

export const useFirestore = (collectionName) => {

    const [docs, setDocs] = useState();

    useEffect(() => {
const collectionRef=collection(db,collectionName);
const q=query(collectionRef,orderBy("createTime","desc"));

       const unsub= onSnapshot(q,(snapshot) => {
            let document = [];
            if(snapshot){
                snapshot.forEach((doc) => {
                    document.push({...doc.data(), id: doc.id })
                })
                setDocs(document);
            }
        })
        return ()=> unsub();
    }, [collectionName])
    return {docs};
}