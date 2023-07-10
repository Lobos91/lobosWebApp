import React from 'react'
import "../index.css"
import googleDriveLogo from "../assets/googledrivelogo.png";
import moddbLogo from "../assets/moddb.png";
import { useEffect } from 'react';


export const Modal = ({closeModal, moddb, googleDrive, version}) => {

    useEffect(() => {
        const handleOutsideClick = (event) => {
          const modalContainer = document.querySelector('.modalContainer');
          if (modalContainer && !modalContainer.contains(event.target)) {
            closeModal(false);
          }
        };
      
        document.addEventListener('click', handleOutsideClick);
      
        return () => {
          document.removeEventListener('click', handleOutsideClick);
        };
      }, []);

  return (
    <div className='modalBackground'>
        <div className='modalContainer space-y-4'>
            <button onClick={() => closeModal(false)} className='hover:bg-red-700 font-bold bg-red-600 rounded-2xl pr-2 pl-2 border-2 border-white self-end' >X</button>
            <h1 className='text-lg text-orange-200 font-semibold'>Pobierasz {version}</h1>
            <br/>
            <h2>Pobierz na Moddb</h2>
            <a href={moddb} target="_blank" rel="noopener noreferrer">
                <img src={moddbLogo}  className='rounded-md max-w-xs hover:opacity-75' alt="Image Description" />
            </a>
            <h2>Pobierz na Google Drive</h2>
            <a href={googleDrive} target="_blank" rel="noopener noreferrer">
                <img src={googleDriveLogo} className='max-w-xs hover:opacity-75' alt="Image Description" />
            </a>
        </div>
    </div>
  )
}
