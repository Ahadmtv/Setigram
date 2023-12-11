
export default function Modal({ selectedImage, setSelectedImage }) {

  const handleClose = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImage(null);

    }
  }
  return (

    <div className="backdrop" onClick={handleClose}>
      <img src={selectedImage}></img>
    </div>
  )
}
