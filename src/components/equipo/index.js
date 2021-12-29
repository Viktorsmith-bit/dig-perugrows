import Link from 'next/link';
import { useState } from 'react';
import Nacionales from './nacional/nacional';
import Extranjeros from './extranjero/extranjero';
import React from 'react';

export default function Equipo(){
    const [ state, setState] = useState({openTeam: true});

    const openNacional = (e)=>{
        e.preventDefault();
        setState({openTeam: true})
    }
    const openExtranjero = (e)=>{
        e.preventDefault();
        setState({openTeam: false})
    }
    return(
        <div className='index'>
            <div className='flex justify-center'>
                <div className='flex-1 lg:max-w-7xl px-4 lg:px-0 py-10 lg:py-16'>
                    <Link href='/'>
                        <div className='flex items-center gap-1 w-20 cursor-pointer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                            <h1 className='text-base text-color'>Volver</h1>
                        </div> 
                    </Link>         
                    <h1 className='font-bold text-4xl lg:text-6xl mt-5 text-color'>EQUIPO CIENTÍFICO</h1>
                </div>
            </div>
            <div className='flex justify-center items-center py-3 lg:py-0 lg:h-14 gray-color'>
                <div className='flex-1 w-full lg:max-w-7xl px-4 lg:px-0'>
                    <div className='flex flex-wrap gap-4'>
                        <div className='flex items-center gap-2'>
                            <div onClick={openNacional} className={`h-4 w-4 cursor-pointer rounded-sm border-color ${state.openTeam?'background-color':'bg-white'}`}></div>
                            <label onClick={openNacional} className='flex items-center text-base lg:h-4 text-color cursor-pointer'>Equipo nacional</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div onClick={openExtranjero} className={`h-4 w-4 cursor-pointer rounded-sm border-color ${!state.openTeam?'background-color':'bg-white'}`}></div>
                            <label onClick={openExtranjero} className='flex items-center text-base lg:h-4 text-color cursor-pointer'>Equipo internacional</label>
                        </div>
                    </div>
                </div>
            </div>
            { state.openTeam ? <Nacionales />: <Extranjeros />}
        </div>
    );
}