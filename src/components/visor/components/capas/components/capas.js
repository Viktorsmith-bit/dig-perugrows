import React from 'react';
import { useState } from 'react';

export default function ListCapas(props){
    const[amb, setAmb] =useState(false);

    const hundleOpenAmbito = (e)=>{e.preventDefault(), setAmb(true)}
    const hundleCloseAmbito = (e)=>{e.preventDefault(), setAmb(false)}

    return(
        <div className='absolute-capas bg-white w-full md:w-96 lg:w-96 rounded-sm border border-gray-400 height-visor ' style={{zIndex:"1000"}}>
            <div className='flex items-center gap-2 bg-green-700 px-4 h-10 rounded-t-sm'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-stack" viewBox="0 0 16 16">
                    <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                    <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                </svg>
                <h1 className='text-white text-base'>Lista de capas</h1>
            </div>
            <div className='overFlow-hidden h-96'>
                <div className='overflow-auto overscroll-auto h-96 py-3 px-4'>
                    <h1 className='text-base text-color border-b-2 border-gray-600 pb-1'>Capas</h1>
                    <div className='flex gap-2 px-1 py-2'>
                        <div className='flex items-center gap-2'>
                            {props.cor?<div className='flex items-center gap-2'><div className='h-3 w-3 rounded-sm bg-gray-300 border border-gray-400'></div><h1 onClick={props.hundleClickCloseCor} className='text-sm cursor-pointer text-color'>Límites de cordilleras glaciares del Perú</h1></div>:
                            <div className='flex items-center gap-2'><div className='h-3 w-3 rounded-sm border border-gray-400'></div><h1 onClick={props.hundleClickOpenCor} className='text-sm cursor-pointer text-color'>Límites de cordilleras glaciares del Perú</h1></div>}
                        </div>
                    </div>
                    <div className='box'>
                        {!amb?<div className='flex gap-2'>
                                <svg onClick={hundleOpenAmbito} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#434040" className="cursor-pointer mt-0.5 bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                </svg>
                                <h1 className='text-sm text-color cursor-pointer' onClick={hundleOpenAmbito}>Ámbitos de intervención</h1>
                            </div>:<div className='flex gap-2'>
                                <svg onClick={hundleCloseAmbito} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#434040" className="cursor-pointer mt-0.5 bi bi-caret-down" viewBox="0 0 16 16">
                                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                </svg>
                                <h1 className='text-sm text-color cursor-pointer' onClick={hundleCloseAmbito}>Ámbitos de intervención</h1>
                            </div>
                        }
                        {
                            !amb?null:<div className='px-6 mt-2'>
                                {props.estado?<div className='flex items-center gap-1'><div className='h-3 w-3 rounded-sm bg-gray-300 border border-gray-400'></div><h1 onClick={props.hundleClickClose} className='text-sm cursor-pointer text-color'>Unidades hidrográficas de cordillera Blanca</h1></div>:
                                <div className='flex items-center gap-1'><div className='h-3 w-3 rounded-sm border border-gray-400'></div><h1 onClick={props.hundleClickOpen} className='text-sm cursor-pointer text-color'>Unidades hidrográficas de cordillera Blanca</h1></div>}
                                {props.corchila?<div className='flex items-center gap-1'><div className='h-3 w-3 rounded-sm bg-gray-300 border border-gray-400'></div><h1 onClick={props.hundleClickCloseChila} className='text-sm cursor-pointer text-color'>Unidad hidrográfica de cordillera Negra</h1></div>:
                                <div className='flex items-center gap-1'><div className='h-3 w-3 rounded-sm border border-gray-400'></div><h1 onClick={props.hundleClickOpenChila} className='text-sm cursor-pointer text-color'>Unidad hidrográfica de cordillera Negra</h1></div>}
                                {props.cuencaSanta?<div className='flex items-center gap-1'><div className='h-3 w-3 rounded-sm bg-gray-300 border border-gray-400'></div><h1 onClick={props.hundleClickCloseSanta} className='text-sm cursor-pointer text-color'>Cuenca del Río Santa</h1></div>:
                                <div className='flex items-center gap-1'><div className='h-3 w-3 rounded-sm border border-gray-400'></div><h1 onClick={props.hundleClickOpenSanta} className='text-sm cursor-pointer text-color'>Cuenca del Río Santa</h1></div>}
                                {props.areaModel?<div className='flex gap-1'><div className='h-3 w-3 rounded-sm bg-gray-300 border border-gray-400 mt-1'></div><h1 onClick={props.hundleClickCloseModel} className='text-sm cursor-pointer text-color'>Área de modelamiento de la cuenca del Santa</h1></div>:
                                <div className='flex gap-1'><div className='h-3 w-3 rounded-sm border border-gray-400 mt-1'></div><h1 onClick={props.hundleClickOpenModel} className='text-sm cursor-pointer text-color'>Área de modelamiento de la cuenca del Santa</h1></div>}
                            </div>
                        }
                    </div>
                    <div className='flex gap-2 px-1 py-2'>
                        <div className='flex items-center gap-2'>
                            {!props.panam?<div className='flex items-center gap-2'><div className='h-3 w-3 rounded-sm bg-gray-300 border border-gray-400'></div><h1 onClick={props.hundleClickClosePanam} className='text-sm cursor-pointer text-color'>Fotografías panorámicas</h1></div>:
                            <div className='flex items-center gap-2'><div className='h-3 w-3 rounded-sm border border-gray-400'></div><h1 onClick={props.hundleClickOpenPanam} className='text-sm cursor-pointer text-color'>Fotografías panorámicas</h1></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}