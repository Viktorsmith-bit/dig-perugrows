import React from 'react';

export default function Header(){
    return(
        <div className='image'>
            <div className='flex items-center lg:h-screen lg:justify-start px-4 lg:px-20 py-36'>
                <div className='flex-1 w-full md:max-w-2xl lg:max-w-3xl p-4 lg:p-8 opacity-image mb-0 lg:mb-48'>
                    <h1 className='text-white font-bold ml-1'>PROYECTO</h1>
                    <h1 className='font-extrabold text-4xl lg:text-7xl text-white'>PERÚ GROWS</h1>
                    <h1 className='text-white ml-1'>RETROCESO GLACIAR Y SU IMPACTO EN LA SEGURIDAD HÍDRICA EN EL PERÚ</h1>
                </div>
            </div>
        </div>
    );
}