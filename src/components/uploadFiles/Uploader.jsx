import React, { useState } from "react";
import UploadFirebaseService from "../../services/firebase";
import ToolService from "../../services/tool-service"

function Uploader({ acceptedTypes, errorMessage, handleFileName, onUpload }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!file) {
        setError("Por favor selecciona un archivo.");
        return;
      }

      const fileName = ToolService.formatFilename(handleFileName(file.name)); 
      if (!acceptedTypes.test(fileName)) {
        setError(errorMessage);
        return;
      }

      const firebaseService = UploadFirebaseService.getInstance();
      const result = await firebaseService.uploadFile(file, fileName);
      onUpload(result); // Llama a la función de devolución de llamada con la URL de la imagen
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name=""
          accept={acceptedTypes.toString()} 
          onChange={(e) => {
            setFile(e.target.files[0]);
            setError("");
          }}
        />
        <button>Subir</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Uploader;