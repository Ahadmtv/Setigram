import { useState } from 'react';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import { Title } from './components/Title'
import UploadForm from './components/UploadForm';

function App() {
  const [selectedImage, setSelectedImage] = useState();
  const openModal = (url) => {
    setSelectedImage(url);
  }
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid openModall={openModal} />
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
      
    </div>
  );
}

export default App;
