import React from 'react';
import Link from 'next/link';
import { listTeamInternacional } from "../lista/lista.team.internacional";

export default function Cranfield(){
    return(
        <div className='northumbria'>
            <div className='flex items-center gap-3 py-10'>
                <h1 className='font-bold text-base lg:text-xl text-color'>EQUIPO CRANFIELD UNIVERSITY</h1>
                <div className='flex-1 h-0.5 bg-gray-300'></div>
            </div>
            <div className='flex flex-wrap justify-start gap-4 md:gap-2 lg:gap-4 pb-10'>
                {
                    listTeamInternacional.map((item)=>{
                        if(item.id >= 7 & item.id <= 8){
                            return <div key={item.id} className='flex items-center h-32 width-perfil'>
                                        <Link href={`/equipo-cientifico/internacional/${item.ruta}`}><div className='h-32 w-48 rounded-full'><img className='w-48 h-32 rounded-full cursor-pointer cover-image' src={`${item.foto}`}/></div></Link>
                                        <div className='w-full flex h-32 flex-col justify-center px-4'>
                                        <Link href={`/equipo-cientifico/internacional/${item.ruta}`}><h1 className='text-sm lg:text-base text-color font-bold cursor-pointer'>{item.name}</h1></Link>
                                        <h1 className='text-sm text-color'>{item.profesion}</h1>
                                    <h1 className='text-sm text-color'>{item.cargo}</h1>
                                </div>
                            </div>
                        }
                    })
                }
            </div>
        </div>
    );
}