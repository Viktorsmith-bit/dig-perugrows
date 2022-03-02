import React from 'react';

export default function Resumen(props){
    return(
        <div className='absolute h-screen top-0 z-40 w-full'>
            <div onClick={props.closeModalResumen} className='fixed flex justify-center items-center h-screen w-full opacity p-4 md:p-8 lg:p-10'> 
                <img className='flex-1 w-56 lg:max-w-xl cover-contain animate__animated animate__bounceInDown' src='/logos/perugrows/Objetivos_PeruGROWS_v4.png'/>
            </div>
        </div>
    );
}