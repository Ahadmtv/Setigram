import { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function UploadForm() {
    const availableTypes = ["image/jpeg", "image/png"];
    const [file, setFile] = useState(null);
    const [error, setError] = useState(false);
    const handleChange = (e) => {
        const selected = e.target.files[0];
        if (selected && availableTypes.includes(selected.type)) {
            setError(false);
            setFile(selected);
        } else {
            setFile(null);
            setError("لطفا فقط یک فایل عکس را انتخاب کنید")
        }
    }
    return (
        <form>
            <label>
                <input type="file" onChange={handleChange}></input>
                <span>+</span>
            </label>
            {error && <p>{error}</p>}
            {file && <p> {file.name} </p>}
            {file && <ProgressBar file={file} setFile={setFile}/>}
        </form>
    )
}
