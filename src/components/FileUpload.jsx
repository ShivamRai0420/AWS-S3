import { useState } from "react";
import { uploadFile,downloadFile } from "../api/fileApi";

function FileUpload(){
    const [file,setFile]=useState(null);
    const[docId,setDocId]=useState("");
    const[message,setMessage]=useState("");

    const handleUpload=async()=>{
        if(!file){
            alert("Please select file");
            return;
        }

        try{
            const response=await uploadFile(file);
            setMessage(response.data);
        }
        catch(error){
            setMessage(error.response?.data || "Upload failed");
        }
    };

    const handleDownload=async()=>{
        if(!docId){
            alert("Enter doc Id");
            return;
        }

        try {
    const response = await downloadFile(docId);

    // 👇 Extract filename from header
    const contentDisposition = response.headers["content-disposition"];
    let fileName = "downloaded-file";

    if (contentDisposition) {
      const match = contentDisposition.match(/filename="(.+)"/);
      if (match && match[1]) {
        fileName = match[1];
      }
    }

    const blob = new Blob([response.data], {
      type: response.headers["content-type"],
    });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();

    window.URL.revokeObjectURL(url);
  } catch (error) {
    alert("Download Failed");
  }
};

    return(
        <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>S3 File Upload</h2>

      <input
        type="file"
        accept=".pdf,.png,.jpg,.jpeg"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={handleUpload}>Upload</button>

      <p>{message}</p>

      <hr />

      <h3>Download File</h3>

      <input
        type="number"
        placeholder="Enter File ID"
        value={docId}
        onChange={(e) => setDocId(e.target.value)}
      />

      <br /><br />

      <button onClick={handleDownload}>Download</button>
    </div>
  );
}

export default FileUpload;
