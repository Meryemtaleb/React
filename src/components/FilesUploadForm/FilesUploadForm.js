import React, { useState } from 'react'
import axios from 'axios'

function FilesUploadForm() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const handelFilesChange = (event) => {
        setSelectedFiles(Array.from(event.target.files));
    }
    const handelSubmit = (event) => {
        event.preventDefault();
        if (selectedFiles.length > 0) {
            const formData = new FormData();
            selectedFiles.forEach((file) => {
                formData.append('images', file)
            })

            axios.post(`http://localhost:5000/uploadFiles/`, formData)
                .then((response) => {
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error);
                });

        }
    }
        ;
    return (

        <form onSubmit={handelSubmit} >
            <input type="file" multiple onChange={handelFilesChange} />
            <button type="submit " >Upload images</button>
        </form>

    )
}

export default FilesUploadForm