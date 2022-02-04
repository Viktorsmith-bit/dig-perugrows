import React, {Fragment} from 'react';

export default function ListCapas(props){

    return(
        <div className='absolute-leyenda bg-white w-full md:w-96 lg:w-96 rounded-sm z-20 border border-gray-400 height-visor' style={{zIndex:"1000"}}>
            <div className='flex items-center justify-between bg-green-700 px-4 h-10 rounded-t-sm'>
                <div className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="cursor-pointer bi bi-card-list" viewBox="0 0 16 16">
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                        <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                    </svg>
                    <h1 className='text-white text-base'>Leyenda</h1>
                </div>
                <Close handleClickClose={props.handleClickClose} />
            </div>
            <div className='overFlow-hidden h-96'>
                <div className='overflow-auto overscroll-auto h-96'>
                    <div className='px-4 pt-2'>
                        <h1 className='text-sm'>Cordilleras glaciares del Perú</h1>
                        <div className='flex items-center gap-2 px-4 mt-2'>
                            <div className='h-4 w-4 bg-gray-900 rounded-sm'></div>
                            <h1 className='text-sm'>Límites de las cordilleras</h1>
                        </div>
                    </div>
                    <div className='px-4 pt-2'>
                        <h1 className='text-sm'>Ámbitos de intervención</h1>
                        <div className='px-4 pt-2'>
                            <div className='flex items-center gap-2'>
                                <div className='h-4 w-4 bg-blue-300 rounded-sm'></div>
                                <h1 className='text-sm'>Unidades hidrográficas de cordillera Blanca</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='h-4 w-4 rounded-sm' style={{backgroundColor:"#2874A6"}} ></div>
                                <h1 className='text-sm'>Unidad hidrográfica de cordillera Negra</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='h-4 w-4 rounded-sm' style={{backgroundColor:"#D7DBDD"}} ></div>
                                <h1 className='text-sm'>Cuenca del río Santa</h1>
                            </div>
                            <div className='flex gap-2'>
                                <div className='h-4 w-4 rounded-sm mt-1' style={{backgroundColor:"#E74C3C"}} ></div>
                                <h1 className='text-sm'>Área de modelamiento de la cuenca del río Santa</h1>
                            </div>
                        </div>
                    </div>
                    <div className='px-4 pt-2'>
                        <h1 className='text-sm'>Inventario nacional de glaciares y lagunas de origen glaciar</h1>
                        <div className='px-4 pt-2'>
                            <div className='flex items-center gap-2'>
                                <div className='h-4 w-4 rounded-sm' style={{backgroundColor:"#d5ecfd"}}></div>
                                <h1 className='text-sm'>Glaciares</h1>
                            </div>
                            <div className='flex items-center gap-2'>
                                <div className='h-4 w-4 rounded-sm' style={{backgroundColor:"#499285"}} ></div>
                                <h1 className='text-sm'>Lagunas de origen glaciar</h1>
                            </div>
                        </div>
                    </div>
                    <div className='px-4 py-2'>
                        <h1 className='text-sm'>Fotografías panorámicas</h1>
                        <div className='px-2.5 pt-2'>
                            <div className='flex items-center gap-1.5'>
                                <img className='h-6 w-6' src='/camera.png' />
                                <h1 className='text-sm'>Fotografías 360</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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