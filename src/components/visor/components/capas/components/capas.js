import React, {Fragment} from 'react';
import { useState } from 'react';

export default function ListCapas(props){
    const[amb, setAmb] =useState(true);
    const[glacLagu, setGlacLagu] =useState(true);

    const hundleOpenAmbito = (e)=>{e.preventDefault(), setAmb(true)}
    const hundleCloseAmbito = (e)=>{e.preventDefault(), setAmb(false)}
    const hundleOpenGlacLagu = (e)=>{e.preventDefault(), setGlacLagu(false)}
    const hundleCloseGlacLagu = (e)=>{e.preventDefault(), setGlacLagu(true)}

    return(
        <div className='absolute-capas bg-white w-full md:w-96 lg:w-96 rounded-sm border border-gray-400 height-visor ' style={{zIndex:"1000"}}>
            <div className='flex items-center justify-between bg-green-700 px-4 h-10 rounded-t-sm'>
                <div className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-stack" viewBox="0 0 16 16">
                        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                    </svg>
                    <h1 className='text-white text-base'>Lista de capas</h1>
                </div>
                <Close handleClickClose={props.handleClickClose} />
            </div>
            <div className='overFlow-hidden h-96'>
                <div className='overflow-auto overscroll-auto h-96 py-3 px-4'>
                    <h1 className='text-base text-color border-b-2 border-gray-600 pb-1'>Capas</h1>
                    <div className='flex gap-2 pt-2'>
                        <div className='flex items-center gap-2'>
                            {props.state.corPeru === "openCorPeru" ?<div className='flex items-center gap-2'><InputOpen/><h1 id="closeCorPeru" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Límites de cordilleras glaciares del Perú</h1></div>:
                            <div className='flex items-center gap-2'><InputClose/><h1 id="openCorPeru" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Límites de cordilleras glaciares del Perú</h1></div>}
                        </div>
                    </div>
                    <div className='box -ml-1 pt-2'>
                        {amb?<div className='flex items-center gap-2'>
                                <svg onClick={hundleCloseAmbito} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#434040" className="cursor-pointer mt-0.5 bi bi-caret-down" viewBox="0 0 16 16">
                                    <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                </svg>
                                <h1 className='text-sm text-color cursor-pointer -ml-0.5' onClick={hundleCloseAmbito}>Ámbitos de intervención</h1>
                                </div>:<div className='flex items-center gap-2'>
                                    <svg onClick={hundleOpenAmbito} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#434040" className="cursor-pointer mt-0.5 bi bi-caret-right-fill" viewBox="0 0 16 16">
                                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                    </svg>
                                    <h1 className='text-sm text-color cursor-pointer -ml-0.5' onClick={hundleOpenAmbito}>Ámbitos de intervención</h1>
                                </div>
                        }
                        {
                            amb?<div className='px-7 pt-1'>
                                {props.state.cuencaSanta === "openCuencaSanta" ?<div className='flex items-center gap-1'><InputOpen /><h1 id="closeCuencaSanta" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cuenca del río Santa</h1></div>:
                                <div className='flex gap-1'><InputClose /><h1 id="openCuencaSanta" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cuenca del río Santa</h1></div>}
                                {props.state.cuencaSantaCorte === "openCuencaSantaCorte" ?<div className='flex gap-1'><InputOpen /><h1 id="closeCuencaSantaCorte" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cuenca alta del río Santa</h1></div>:
                                <div className='flex gap-1'><InputClose/><h1 id="openCuencaSantaCorte" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Cuenca alta del río Santa</h1></div>}
                                {props.state.corBlanca === "openCorBlanca" ?<div className='flex items-center gap-1'><InputOpen /><h1 id="closeCorBlanca" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Unidades hidrográficas de cordillera Blanca</h1></div>:
                                <div className='flex items-center gap-1'><InputClose /><h1 id="openCorBlanca" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Unidades hidrográficas de cordillera Blanca</h1></div>}
                                {props.state.corNegra === "openCorNegra"?<div className='flex items-center gap-1'><InputOpen /><h1 id="closeCorNegra" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Unidades hidrográficas de cordillera Negra</h1></div>:
                                <div className='flex items-center gap-1'><InputClose /><h1 id="openCorNegra" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Unidades hidrográficas de cordillera Negra</h1></div>}
                                {props.state.puntosTrabajo === "closePuntosTrabajo"?<div className='flex items-center gap-1'><InputClose /><h1 id="openPuntosTrabajo" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Puntos de trabajo</h1></div>:
                                <div className='flex items-center gap-1'><InputOpen /><h1 id="closePuntosTrabajo" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Puntos de trabajo</h1></div>}
                                
                            </div>:null
                        }
                    </div>
                    <div className='box -ml-1 pt-2'>
                        {glacLagu?<div className='flex items-center gap-2'>
                                <svg onClick={hundleOpenGlacLagu} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#434040" className="cursor-pointer mt-0.5 bi bi-caret-right-fill" viewBox="0 0 16 16">
                                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                                </svg>
                                <h1 className='text-sm text-color cursor-pointer -ml-0.5' onClick={hundleOpenGlacLagu}>Inventario de glaciares y lagunas</h1>
                                </div>:<div className='flex items-center gap-2'>
                                    <svg onClick={hundleCloseGlacLagu} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#434040" className="cursor-pointer mt-0.5 bi bi-caret-down" viewBox="0 0 16 16">
                                        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                                    </svg>
                                    <h1 className='text-sm text-color cursor-pointer -ml-0.5' onClick={hundleCloseGlacLagu}>Inventario de glaciares y lagunas</h1>
                                </div>
                        }
                        {
                            glacLagu?null:<div className='px-7 pt-1'>
                                {props.state.glaciares === "closeGlaciares" ?<div className='flex items-center gap-1'><InputClose /><h1 id="openGlaciares" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Glaciares en la cordillera Blanca</h1></div>:
                                <div className='flex gap-1'><InputOpen /><h1 id="closeGlaciares" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Glaciares en la cordillera Blanca</h1></div>}
                                {props.state.lagunas === "closeLagunas" ?<div className='flex gap-1'><InputClose /><h1 id="openLagunas" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Lagunas glaciares en la cordillera Blanca</h1></div>:
                                <div className='flex gap-1'><InputOpen /><h1 id="closeLagunas" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Lagunas glaciares en la cordillera Blanca</h1></div>}
                            </div>
                        }
                        {
                            glacLagu?null:<Fragment>
                                <h1 className='px-7 pt-2 text-color text-xs'><span className='font-bold'>Fecha de los datos:</span> Año 2016</h1>
                                <h1 className='px-7 text-color text-xs'><span className='font-bold'>Fecha de publicación:</span> Año 2020</h1>
                                <h1 className='px-7 text-color text-xs'><span className='font-bold'>Fuente:</span> INAIGEM-SDIG</h1>
                                <h1 className='px-7 text-color text-xs'><span className='font-bold'>Link:</span> <a className='text-green-700 font-bold' target="_blank" href="https://visor.inaigem.gob.pe/">Abrir</a></h1>
                            </Fragment>
                        }
                    </div>

                    <div className='flex gap-2 py-2'>
                        <div className='flex items-center gap-2'>
                            {props.state.panam === "closePanam" ?<div className='flex items-center gap-2'><InputClose /><h1 id="openPanam" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Fotografías panorámicas</h1></div>:
                            <div className='flex items-center gap-2'><InputOpen /><h1 id="closePanam" onClick={props.hundleClickEstadoVisor} className='text-sm cursor-pointer text-color'>Fotografías panorámicas</h1></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

function InputClose(){
    return(
        <Fragment>
            <input type="checkbox" checked={false} className='h-4 w-4 rounded-sm mt-0.5'/>
        </Fragment>
    );  
}

function InputOpen(){
    return(
        <Fragment>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#047857" className="mt-0.5 bi bi-check-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
            </svg>
        </Fragment>
    );
}  

function Close(props){
    return(
        <Fragment>
            <svg onClick={props.handleClickClose} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="-mr-2 cursor-pointer bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </Fragment>
    );
}