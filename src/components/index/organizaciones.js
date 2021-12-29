import React from 'react';

export default function Organizaciones(){
    return(
        <div className='flex' id='organizaciones'>
            <div className='flex flex-1 justify-center items-center lg:h-screen py-10 lg:py-0 height-section' style={{backgroundColor:'#5b5b5f'}}>
                <div className='flex-1 w-full md:max-w-2xl lg:max-w-xl px-4 md:px-0 lg:px-0'>
                    <h1 className='text-white text-2xl lg:text-4xl font-bold'>Organizaciones</h1>
                    <div className='flex flex-wrap items-center justify-between gap-10 mt-12 lg:mt-20'>
                        <img className='w-36 md:w-48 lg:w-48' src='/logos/organizaciones/INAIGEMBN.svg'/>
                        <img className='w-32 md:w-40 lg:w-40 ' src='/logos/organizaciones/PUCPBN.svg'/>
                        <img className='w-32 md:w-40 lg:w-40' src='/logos/organizaciones/CranfielBN.svg'/>
                        <img className='w-20 md:w-24 lg:w-24' src='/logos/organizaciones/HeriotWattBN.svg'/>
                        <img className='w-32 md:w-40 lg:w-40' src='/logos/organizaciones/NorthumbriaBN.svg'/>
                        <img className='w-36 md:w-48 lg:w-48' src='/logos/organizaciones/LeedsBN.svg'/>
                    </div>
                </div>
            </div>
            <div className='flex-1 h-screen image-organizaciones hidden lg:block height-section'></div>
        </div>
    );
}