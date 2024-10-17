import * as React from "react";
import { useEffect, useState } from "react";

const FileUploadComponent = ({ id, name, value, placeholder, setState }) => {
    const [file, setFile] = useState(null);

    useEffect(() => {
        if (file) {
            console.log(file);
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setState(function (prevState) {
                    return { ...prevState, [name]: { src: reader.result, title: file.name } }
                })
            }


        }

        // setState(function (prevState) {
        //     return { ...prevState, [name]: e. e.target.pic }
        // })
    }, [file, name, setState]);

    return (
        <React.Fragment>
            <input
                id={id}
                name={name}
                value={value}
                type="file"
                placeholder={placeholder}
                // onChange={(e) => setFile(e.target.files[0])}
                onChange={(e) => setFile(e.target.files[0])}
            />
        </React.Fragment>
    )
};

export default FileUploadComponent