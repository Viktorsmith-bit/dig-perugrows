import React, { useState } from 'react';

export default function Resumen(){
    const [state, setTsate] = useState(1)

    const continueCount = (e)=>{
        e.preventDefauelt
        setTsate(state + 1)
    } 
    const continueDecrement = (e)=>{
        e.preventDefauelt
        setTsate(state - 1)
    }     
    return(
        <div className='flex items-center justify-center lg:h-screen px-4 py-10 height-section'>
            <div className='flex flex-col flex-1 items-center w-full md:max-w-2xl lg:max-w-7xl'>
                <h1 className='font-bold text-2xl lg:text-4xl text-color'>Instituciones participantes</h1>
                <div className='flex flex-col md:flex-row lg:flex-row items-center gap-5 justify-between mt-10 lg:mt-20 w-full'>
                    <svg onClick={state === 1?null:continueDecrement} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#4f4e50" className="cursor-pointer bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
                    </svg>
                    {state === 1?<Naional />:null}
                    {state === 2?<Extranjero />:null}
                    {state === 3?<ExtranjeroFinal />:null}
                    {state === 4?<Care />:null}
                    <svg onClick={state === 4?null:continueCount} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#4f4e50" className="cursor-pointer bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                        <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                    </svg>
                </div>
                <a href='#organizaciones'><button className='rounded-md border-color px-4 py-4 mt-10 bg-color text-color font-bold'>Ver organizaciones</button></a>
            </div>
        </div>
    );
}

function Naional(){
    return(
        <div className='flex flex-wrap gap-2 lg:gap-0 md:justify-center lg:justify-between w-full animate__animated animate__bounceInLeft'>
            <div className='w-full md:w-96 lg:w-96 lg:h-72 border-color p-4 rounded-md'>
                <h1 className='font-bold text-color'>Instituto Nacional de Investigaci??n en Glaciares y Ecosistemas de Monta??a</h1>
                <h1 className='text-sm mt-1 text-color'>INAIGEM</h1>
                <h1 className='text-sm mt-1 text-color'>Entidad ejecutora peruana</h1>
                <h1 className='mt-5 text-color text-justify'>Estudio de demanda hidr??ca, modelamiento hidrol??gico, glaciol??gico y sus impactos sobre los ecosistemas.</h1>
            </div>
            <div className='w-full md:w-96 lg:w-96 lg:h-72 border-color p-4 rounded-md'>
                <h1 className='font-bold text-color'>Pontificia Universidad Cat??lica del Per?? </h1>
                <h1 className='text-sm mt-1 text-color'>PUCP</h1>
                <h1 className='text-sm mt-1 text-color'>Entidad asociada peruana</h1>
                <h1 className='mt-5 text-color text-justify'>Informaci??n social, mapeo de ecosistemas terrestres, y propuestas de las medidas de adaptaci??n y mitigaci??n.</h1>
            </div>
            <div className='w-full md:w-96 lg:w-96 lg:h-72 border-color p-4 rounded-md'>
                <h1 className='font-bold text-color'>Servicio Nacional de Meteorolog??a e Hidrolog??a del Per?? </h1>
                <h1 className='text-sm mt-1 text-color'>SENAMHI</h1>
                <h1 className='text-sm mt-1 text-color'>Entidad asociada peruana</h1>
                <h1 className='mt-5 text-color text-justify'>Modelamiento clim??tico.</h1>
            </div>
        </div>
    );
}

function Extranjero(){
    return(
        <div className='flex flex-wrap gap-2 lg:gap-0 md:justify-center lg:justify-between w-full animate__animated animate__bounceInLeft'>
            <div className='w-full md:w-96 lg:w-96 lg:h-72 border-color p-4 rounded-md'>
                <h1 className='font-bold text-color'>Universidad de Northumbria</h1>
                <h1 className='text-sm mt-1 text-color'>UN</h1>
                <h1 className='text-sm mt-1 text-color'>Entidad ejecutora brit??nica</h1>
                <h1 className='mt-5 text-color text-justify'>Modelamiento hidroglaciol??gico y sus impactos sobre los ecosistemas.</h1>
            </div>
            <div className='w-full md:w-96 lg:w-96 lg:h-72 border-color p-4 rounded-md'>
                <h1 className='font-bold text-color'>Universidad de Leeds</h1>
                <h1 className='text-sm mt-1 text-color'>UoL</h1>
                <h1 className='text-sm mt-1 text-color'>Entidad asociada brit??nica</h1>
                <h1 className='mt-5 text-color text-justify'>Relaci??n de la biodiversidad en ecosistemas acu??ticos y el retroceso glaciar.</h1>
            </div>
            <div className='w-full md:w-96 lg:w-96 lg:h-72 border-color p-4 rounded-md'>
                <h1 className='font-bold text-color'>British Antarctic Survey</h1>
                <h1 className='text-sm mt-1 text-color'>BAS</h1>
                <h1 className='text-sm mt-1 text-color'>Entidad asociada brit??nica</h1>
                <h1 className='mt-5 text-color text-justify'>Modelamiento clim??tico.</h1>
            </div>
        </div>
    );
}

function ExtranjeroFinal(){
    return(
        <div className='flex flex-wrap gap-2 lg:gap-0 md:justify-center lg:justify-between w-full animate__animated animate__bounceInLeft'>
            <div className='w-full md:w-96 lg:w-96 lg:h-72 border-color p-4 rounded-md'>
                <h1 className='font-bold text-color'>Universidad Heriot-Watt</h1>
                <h1 className='text-sm mt-1 text-color'>HWU</h1>
                <h1 className='text-sm mt-1 text-color'>Entidad asociada brit??nica</h1>
                <h1 className='mt-5 text-color text-justify'>Modelamiento hidrol??gico.</h1>
            </div>
            <div className='w-full md:w-96 lg:w-96 lg:h-72 border-color p-4 rounded-md'>
                <h1 className='font-bold text-color'>Universidad de Cranfield</h1>
                <h1 className='text-sm mt-1 text-color'>CU</h1>
                <h1 className='text-sm mt-1 text-color'>Entidad asociada brit??nica</h1>
                <h1 className='mt-5 text-color text-justify'>Modelamiento hidrol??gico y seguridad alimentaria.</h1>
            </div>
            <div className='w-full md:w-96 lg:w-96 lg:h-72 border-color p-4 rounded-md'>
                <h1 className='font-bold text-color'>Instituto de Investigaci??n y Conservaci??n de las Monta??as</h1>
                <h1 className='text-sm mt-1 text-color'>IIGM</h1>
                <h1 className='text-sm mt-1 text-color'>Entidad colaboradora peruana</h1>
                <h1 className='mt-5 text-color text-justify'>Asistencia t??cnica en la validaci??n de los talleres, modelos y mapas socioambientales realizados, procesamiento de datos ambientales y apoyo log??stico en el evento de cierre y difusi??n del proyecto.</h1>
            </div>
        </div>
    );
}

function Care(){
    return(
        <div className='flex flex-wrap gap-2 lg:gap-0 md:justify-center lg:justify-between w-full animate__animated animate__bounceInLeft'>
            <div className='w-full md:w-96 lg:w-96 lg:h-72 border-color p-4 rounded-md'>
                <h1 className='font-bold text-color'>Grupo de Investigaci??n Cri??sfera, Clima y Seguridad H??drica</h1>
                <h1 className='text-sm mt-1 text-color'>CCSH</h1>
                <h1 className='text-sm mt-1 text-color'>Entidad colaboradora peruana</h1>
                <h1 className='mt-5 text-color text-justify'>Asistencia t??cnica y acad??mica en la redacci??n cient??fica y la obtenci??n de datos meteorol??gicos del CIAD-UNASAM.</h1>
            </div>
            <div className='w-full md:w-96 lg:w-96 lg:h-72 border-color p-4 rounded-md'>
                <h1 className='font-bold text-color'>Instituto de Monta??a</h1>
                <h1 className='text-sm mt-1 text-color'>TMI</h1>
                <h1 className='text-sm mt-1 text-color'>Entidad colaboradora peruana</h1>
                <h1 className='mt-5 text-color text-justify'></h1>
            </div>
            <div className='w-full md:w-96 lg:w-96 lg:h-72 border-color p-4 rounded-md'>
                <h1 className='font-bold text-color'>CARE Per??</h1>
                <h1 className='text-sm mt-1 text-color'>CARE Per??</h1>
                <h1 className='text-sm mt-1 text-color'>Entidad colaboradora peruana</h1>
                <h1 className='mt-5 text-color text-justify'></h1>
            </div>
        </div>
    );
}