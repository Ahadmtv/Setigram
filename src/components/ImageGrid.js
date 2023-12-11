import { deleteDoc, doc } from "firebase/firestore";
import { useFirestore } from "../Hooks/useFirestore"
import { db, storage } from "../firebase/config";
import { deleteObject, ref } from "firebase/storage";
import { useState } from "react";

export default function ImageGrid({ openModall }) {
    const { docs } = useFirestore("images");
    const [showDeleteBtn, setShowDeleteBtn] = useState(false);

    const handleDelete = async (e, docID, docURL) => {
        e.stopPropagation();
        await deleteDoc(doc(db, "images", docID));
        const refrence = ref(storage, docURL);
        await deleteObject(refrence);
    }
    return (

        <div className="img-grid">
            {docs && docs.map((doc) => {
                return (
                    <div
                        key={doc.id}
                        className="img-wrap"
                        onClick={() => openModall(doc.url)}
                        onMouseEnter={()=>setShowDeleteBtn(true)}
                        onMouseLeave={()=>setShowDeleteBtn(false)}
                    >
                        <img src={doc.url}></img>
                        {showDeleteBtn &&
                            <button className="delete-button" onClick={(e) => handleDelete(e, doc.id, doc.url)}>Delete</button>
                        }
                    </div>
                )
            })}
        </div>

    )
}
