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
            <div className='flex items-center py-10 lg:py-0 bg-gray-100 height-section'>
                <div className='flex-1'>
                    <img className='height-section cover hidden lg:block w-full' src='/fondos/CanalBajo_Yanayacu_19.jpeg' />
                    <h1></h1>
                </div>
                <div className='flex w-full lg:flex-1 justify-center px-4 lg:px-0'>
                    <div className='w-full md:max-w-2xl lg:max-w-xl'>
                        <h1 className='text-2xl lg:text-4xl font-bold text-color'>Ámbito de estudio</h1>
                        <h1 className='mt-5 text-justify text-color'>La investigación se centrará en la cuenca alta del río Santa, donde se buscará cubrir la brecha de información actual para lograr una eficiente gestión del recurso hídrico asociado a los cambios generados por los impactos del retroceso glaciar y el cambio climático. A nivel de modelamiento (climático, hidrológico y glaciológico), el proyecto se desarrollará en la parte alta de la cuenca del río Santa.</h1>
                        <h1 className='mt-5 text-justify text-color'>Los trabajos de campo (basados en la recopilación de la información base
                                socioeconómica, cartográfica, hidrológica, meteorológica, glaciológica,
                                geofísica, biológica y fisicoquímica) se realizarán sobre las unidades
                                hidrográficas de Llullán, Ranrahirca, Ancash, Casca, Quillcay y Yanayacu en la
                                cordillera Blanca. En el caso del modelamiento hidrológico se recopiló
                                información general de las unidades hidrográficas Urpay, Huata, Santo Toribio y
                                Utcuyacu en la cordillera Negra.</h1>
                        <div className='flex flex-wrap gap-3 mt-5'>
                            <button onClick={openModalModelamiento} className='border-color bg-color px-3 py-2 lg:py-3 text-base rounded-md text-color font-bold'>Área de modelamiento</button>
                            <button onClick={openModalCampo} className='border-color bg-color px-3 py-2 lg:py-3 text-base rounded-md text-color font-bold'>Área de trabajos de campo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}