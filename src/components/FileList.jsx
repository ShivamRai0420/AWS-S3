import { useEffect, useState } from "react";
import { fetchFiles } from "../api/fileApi";

function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetchFiles().then(res => setFiles(res.data));
  }, []);
console.log("Files state:", files);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Uploaded Files</h3>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Size (KB)</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {files.map(file => (
            <tr key={file.id}>
              <td>{file.fileName}</td>
              <td>{file.fileType}</td>
              <td>{(file.fileSize / 1024).toFixed(2)}</td>
              <td>
                <a href={file.downloadUrl} target="_blank">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FileList;
