import React, { Fragment } from 'react';
import Image from 'next/image';

export default function Geoportal(){
    return(
        <div className='flex absolute top-3 left-12 z-20 hidden md:flex lg:flex' style={{zIndex:"1000"}}>
            <div className='py-2 bg-green-700 rounded-l-sm' >
                <Image src='/logos/INAIGEM.svg' height={39} width={180}/>
            </div>
            <div className='flex items-center px-2 bg-white rounded-r-sm'>
                <div>
                    <h1 className='text-sm text-color'>Visor de mapas</h1>
                    <h1 className='text-xl font-bold -mt-1 text-color'>Proyecto Permafrost</h1>
                </div>
            </div>
        </div>
    );
}