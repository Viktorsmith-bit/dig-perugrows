import { useState } from 'react';
import ModalCampo from '../shared/ambito/modal.campo';
import ModalModelamiento from '../shared/ambito/modal.modelamiento';
import React from 'react';

export default function Ambito(){
    const [state, setState] = useState({
        openCampo:false, 
        openModelamiento:false, 
    });

    const openModalCampo = (e)=>{
        e.preventDefault();
        setState({openCampo:true})
        const x = document.getElementsByTagName('BODY')[0];
        x.style.overflow = 'hidden';
    }
    const openModalModelamiento = (e)=>{
        e.preventDefault();
        setState({openModelamiento:true})
        const x = document.getElementsByTagName('BODY')[0];
        x.style.overflow = 'hidden';
    }

    const closeModal = (e)=>{
        e.preventDefault();
        setState({open:false})
        const x = document.getElementsByTagName('BODY')[0];
        x.style.overflow = 'visible';
    }
    return(
        <div id='ambito'>
            { !state.openCampo ? null: <ModalCampo closeModal={closeModal} />}
            { !state.openModelamiento ? null: <ModalModelamiento closeModal={closeModal} />}
           <div className='flex justify-center items-center py-10 lg:h-screen px-4 lg:px-0 bg-gray-100'>
               <div className='flex items-center'>
                   <div className='flex-1'>
                       <img className='cover h-screen hidden lg:block' src='/fondos/TrabajosModelamiento_Permafrost.jpeg' />
                   </div>
                   <div className='flex w-full lg:flex-1 justify-center'>
                        <div className='w-full md:max-w-2xl lg:max-w-xl'>
                            <h1 className='text-2xl lg:text-4xl font-bold text-color'>Ámbito de estudio</h1>
                            <h1 className='text-base mt-5 text-justify text-color'>El área de estudio del proyecto Permafrost son las 18 cordilleras glaciares y las 02 cordilleras glaciares extintas del Perú. Así mismo, los trabajos de campo se desarrollarón en las cordilleras Blanca y Chila, sobre glaciares limpios, cubiertos y rocosos analizando los distintos componentes climáticos y topográficos presentes para validar el modelamiento del permafrost a nivel nacional.</h1>
                            <h1 className='text-base mt-5 text-justify text-color'>En la primera (Blanca), dentro de las unidades hidrográficas Llullán, Ranrahirca, Casca, Quillcay y Yanayacu, donde se instalaron sensores de paredes de roca. Así mismo, en el glaciar cubierto de Kinzl y en la quebrada Quilcayhuanca se instalaron estaciones meteorológicas prototipos. En la segunda (Chila), dentro del glaciar rocoso San Félix, se han realizado trabajos de levantamiento de información base (climática, hidrológica, geofísica y cartográfica), y la instalación de sensores y equipos meteorológicos.</h1>
                            <div className='flex flex-wrap gap-3 mt-5'>
                                <button onClick={openModalModelamiento} className='border-color bg-color px-3 py-2 lg:py-3 text-base rounded-md text-color'>Área de modelamiento</button>
                                <button onClick={openModalCampo} className='border-color bg-color px-3 py-2 lg:py-3 text-base rounded-md text-color'>Área de trabajos de campo</button>
                            </div>
                        </div>
                    </div>
               </div>
           </div>
        </div>
    );
}