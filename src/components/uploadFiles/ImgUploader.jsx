import React from "react";
import Uploader from "./Uploader";

function ImgUploader({ onUpload }) {

  // Función para obtener el nombre del archivo
  const handleFileName = (fileName) => {
    return fileName;
  };

  // Función para manejar la carga de la imagen
  const handleUpload = (url) => {
    onUpload(url);
  };

  return (
    <Uploader
      acceptedTypes={/\.(jpg|jpeg|png)$/i}
      errorMessage="Por favor selecciona un archivo de imagen (JPEG, PNG o JPG)."
      handleFileName={handleFileName}
      onUpload={handleUpload} 
    />
  );
}

export default ImgUploader;