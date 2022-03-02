import React from 'react';

export default function Resumen(props){
    return(
        <div className='absolute h-screen left-0 top-0 z-40'>
            <div onClick={props.closeModal} className='fixed flex justify-center items-center h-screen w-full opacity'> 
                <img className='cover border border-gray-300 height animate__animated animate__bounceInDown' src='/AmbitoEstudio/Mapa_TrabajoCampo_PeruGROWS_v2.jpg'/>
            </div>
        </div>
    );
}