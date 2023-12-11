import { useStorage } from "../Hooks/useStorage"


export default function ProgressBar({ file, setFile }) {

  const { url, progress } = useStorage(file);
  if (url) {
    setFile(null);
  }



  return (
    <div className="progress-bar" style={{ width: progress + "%" }}></div>
  )
}
