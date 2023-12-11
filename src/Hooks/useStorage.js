import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../firebase/config"
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage"
import { useEffect, useState } from "react" // You can combine these imports

export const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [url, setUrl] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Create a reference to the file to upload
        const storageRef = ref(storage, `files/${file.name}`); // Added a path for organization, you can change it as needed


        const collectionRef = collection(db, "images");
        // Starts the file upload
        const uploadTask = uploadBytesResumable(storageRef, file); // Use the created reference, not the storage object

        const unsub = uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(percent);
            },
            (err) => {
                // Handle unsuccessful uploads
                setError(err);
            },
            async () => {
                // Handle successful uploads on complete
                try {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    addDoc(collectionRef, { url: downloadURL, createTime: serverTimestamp() });
                    setUrl(downloadURL);
                } catch (err) {
                    setError(err);
                }
            }
        );
        return () => unsub();
    }, [file]); // Dependency array for useEffect

    return { url, error, progress };
}
