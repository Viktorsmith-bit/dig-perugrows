import {useState} from 'react';
import Resumen from '../shared/proyecto/resumen.modal';
import React from 'react';

export default function Proyectos(){
    const [state, setState] = useState(false);

    const openModalResumen = (e)=>{
        e.preventDefault();
        setState(true)
        const x = document.getElementsByTagName('BODY')[0];
        x.style.overflow = 'hidden';
    }
    const closeModalResumen = (e)=>{
        e.preventDefault();
        setState(false)
        const x = document.getElementsByTagName('BODY')[0];
        x.style.overflow = 'visible';
    }

    return(
        <div id='proyecto'>
            {!state?null:<Resumen closeModalResumen={closeModalResumen} />}
            <div className='flex items-center py-10 lg:py-0 bg-gray-100 height-section'>
                <div className='flex w-full lg:flex-1 justify-center px-4 lg:px-0'>
                    <div className='w-full md:max-w-2xl lg:max-w-xl'>
                        <h1 className='text-2xl lg:text-4xl font-bold text-color'>Resumen</h1>
                        <h1 className='mt-5 text-justify text-color'>En la cuenca del río Santa, ancestralmente, se vienen practicando diferentes actividades económicas (agricultura, crianza de truchas, generación de energía eléctrica, etc.), donde, muchas de ellas dependen de las aguas provenientes de los glaciares. Resultado de estas actividades, se cuenta con grandes áreas de cultivo disponibles para el comercio y exportación a nivel regional y nacional. Sin embargo, el aumento de la población, las inadecuadas medidas de gestión pública y una reglamentación limitada sobre el uso y derecho del agua han incrementado los conflictos sociales, desestabilizando las sociedades peruanas, reduciendo el crecimiento económico y afectando negativamente la distribución igualitaria del recurso hídrico.</h1>
                        <h1 className='mt-5 text-justify text-color'>En ese contexto, el proyecto Perú GROWS tuvo como objetivo principal mejorar la resiliencia de las comunidades y los ecosistemas andinos del Perú ante la inseguridad hídrica generada por los cambios en los glaciares y el clima. La investigación se centró en la cuenca alta del río Santa buscando cubrir la brecha de información actual para lograr una eficiente gestión del recurso hídrico tomando en cuenta los cambios generados por los impactos del retroceso glaciar y el cambio climático. </h1>
                        <button onClick={openModalResumen} className='p-3 border-color bg-color mt-5 rounded-md text-color font-bold'>Paquetes de trabajo</button>
                    </div>
                </div>
                <div className='flex-1'>
                    <img className='height-section cover hidden lg:block w-full' src='/fondos/Lag_Llaca_20.jpeg' />
                </div>
            </div>
        </div>
    );
}
