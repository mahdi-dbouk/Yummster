import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '../../base/Button';

const CreateRecipeModal = ({isOpen, onRequestClose}) => {
    const [data, setData] = useState({
        name: '',
        cuisine: '',
        ingredients: [],
        images: []
    });

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [base64Images, setBase64Images] = useState([]);

    const style = {
        overlay: {
            backgroundColor: 'rgba(21,21,21,0.335)'
        },
        content:{
            margin: 'auto',
            width: '600px',
            height: '600px'
        }
    }

    const handleFileChange = (event) => {
        const files = event.target.files;
        const pictureArray = Array.from(files);
        setSelectedFiles(pictureArray);
    }

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
        });
      } 

      const handleUpload = async () => {
        try {
          const base64Array = [];
          for (const picture of selectedFiles) {
            const base64Image = await convertToBase64(picture);
            base64Array.push(base64Image);
          }
          setBase64Images(base64Array);
        } catch (error) {
          console.error(error);
        }
      };
      
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={style}
        contentLabel='Add a Recipe'
    >
        <div className='flex flex-row justify-center items-center w-full'>
        <input 
            type="text"
            value={data.first_name}
            className='border-2 w-4/5 h-10 rounded-md focus:outline-rose-300 p-2'
            onChange={(event)=>setData({...data, first_name: event.target.value})}
            placeholder='Recipe Name'
        />
        </div>
        <div className='flex flex-row justify-center items-center w-full'>
        <textarea
            type="textarea"
            value={data.first_name}
            className='border-2 w-4/5 h-30 rounded-md focus:outline-rose-300 p-2'
            onChange={(event)=>setData({...data, first_name: event.target.value})}
            placeholder='Ingredients ... '
        />

        </div>
        <input type="file" multiple name="upload" id="upload" onChange={handleFileChange}/>

        <Button 
        text={'upload'} 
        style={'w-40 h-10 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold rounded-md'}
        action={handleUpload}
        />


    </Modal>
  )
}

export default CreateRecipeModal;