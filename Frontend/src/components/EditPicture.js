import React, { useState, useEffect } from 'react';
import { CardImg, Input, FormGroup } from "reactstrap";
import deleteImage from "../API/deleteImage.js";
import uploadImage from "../API/uploadImage.js";
import "./CreateProduct.css";

function EditPicture({product, newProduct, setNewProduct}) {
    
        const [showImage, setShowImage] = useState(true);
        const[image, setImage] = useState(product.image);
        const styleEdit = { 
            display: showImage? "block" : "none"
        }
        useEffect (()=> {
            setNewProduct({...newProduct, image: image});
            console.log("newProduct", newProduct);
        }, [image])

        const removePicture = async () =>{
            const imagePublicId = {public_id:product.image.public_id};
            const data = await deleteImage(imagePublicId);
            console.log("data result:",data); 
            setShowImage(false)    
    
        }

        const handleImage = async(e) => {
            e.preventDefault();

            const file = e.target.files[0];
            let formData = new FormData();
            formData.append('file', file);
    
            
            const data = await uploadImage(formData);
            setImage(data);
            setShowImage(true);
            // console.log("data", data);
            // console.log("image id:", data.public_id);
            
            return data;
        }
            console.log("chosenpictureProduct", product.image.public_id);
       
    console.log("newImage", image);


    return (

        <>  
            <FormGroup className="upload1" style={{height: "100%", position: "relative", width:"50%", maxWidth:"450px"}}> 
            <Input onChange={handleImage} type="file" name="file" id="file_up"/>
            <div id="file_img" style={styleEdit}>
            <CardImg src={showImage? image["url"] : ""} alt="Card image cap" />
            <span onClick={removePicture}>X</span>
            </div>
            </FormGroup>
        </>
    )
}

export default EditPicture
