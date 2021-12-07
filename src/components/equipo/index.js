import Link from 'next/link';
import { useState } from 'react';
import Nacionales from './nacional/nacional';
import Extranjeros from './extranjero/extranjero';
import React from 'react';

export default function Equipo(){
    const [ state, setState] = useState({openNacional: false, openExtranjero:false});

    const openNacional = (e)=>{
        e.preventDefault();
        setState({openNacional: false, openExtranjero:false})
    }
    const openExtranjero = (e)=>{
        e.preventDefault();
        setState({openNacional: true, openExtranjero:true})
    }
    return(
        <div className='flex justify-center px-4 lg:px-0'>
            <div className='flex-1 lg:max-w-7xl py-8 lg:py-16'>
                <Link href='/'>
                    <div className='flex items-center gap-1 w-20 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        <h1 className='text-base text-color'>Volver</h1>
                    </div> 
                </Link>         
                <h1 className='font-bold text-4xl lg:text-6xl mt-5 text-color'>EQUIPO CIENTÍFICO</h1>
                <div className='flex items-center mt-10 gap-2'>
                    <h1 onClick={openNacional} className={`flex items-center h-10 px-8 cursor-pointer rounded-md ${ !state.openNacional ? 'background-color text-white': 'bg-white text-color border border-gray-300'} `}>Nacional</h1>
                    <h1 onClick={openExtranjero} className={`flex items-center h-10 px-8 cursor-pointer rounded-md ${!state.openExtranjero ? 'bg-white text-color border border-gray-300': 'background-color text-white'} `}>Extranjero</h1>
                </div> 
                { !state.openNacional ? <Nacionales />: <Extranjeros />}
            </div>
        </div>
    );
}