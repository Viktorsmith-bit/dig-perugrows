import React from 'react';

export default function Financiamiento(){
    return(
        <div className='flex items-center py-10 lg:h-screen px-4 height-section' id='financiamiento'>
            <div className='flex flex-col items-center w-full md:max-w-2xl lg:max-w-6xl mx-auto'>
                <div className='flex flex-col items-center w-full lg:max-w-3xl'>
                    <h1 className='font-bold text-2xl lg:text-4xl text-color'>Financiamiento</h1>
                    <h1 className='mt-5 text-base text-center text-color'>Esta investigación ha sido financiada por el Concytec/ProCiencia, la Embajada Británica, el NERC y el Fondo Newton-Paulet en el marco de la convocatoria E031-2018-01-NERC “Círculos de Investigación en Glaciares”. [Contrato N°08-2019-FONDECYT].</h1>
                </div>
                <div className='flex flex-wrap justify-center gap-3 mt-5'>
                    <img className='w-24 md:w-36 lg:w-48 cover-contain' src='/logos/perugrows/Concytec.PNG'/>
                    <img className='w-24 md:w-36 lg:w-40 cover-contain ml-8' src='/logos/perugrows/ProCiencia.jpg'/>
                    <img className='w-24 md:w-36 lg:w-56 cover-contain ml-8' src='/logos/organizaciones/LogoNERC_UK_Sf.png'/>
                </div>
            </div>
        </div>
    );
}