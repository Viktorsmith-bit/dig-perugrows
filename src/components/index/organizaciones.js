import React from 'react';

export default function Organizaciones(){
    return(
        <div className='flex' id='organizaciones'>
            <div className='flex flex-1 justify-center items-center py-10' style={{backgroundColor:'#5b5b5f'}}>
                <div className='flex-1 w-full md:max-w-2xl lg:max-w-2xl px-4 md:px-0 lg:px-0'>
                    <h1 className='text-white text-2xl lg:text-4xl font-bold'>Organizaciones</h1>
                    <h1 className='text-white font-bold mt-10 text-center'>Entidades ejecutoras</h1>
                    <div className='flex flex-wrap items-center justify-center gap-5 lg:gap-10 mt-5'>
                        <img className='w-36 md:w-48 lg:w-48' src='/logos/organizaciones/INAIGEMBN.svg'/>
                        <img className='w-32 md:w-40 lg:w-40' src='/logos/organizaciones/NorthumbriaBN.svg'/>
                    </div>
                    <h1 className='text-white font-bold mt-10 text-center'>Entidades asociadas peruanas</h1>
                    <div className='flex flex-wrap items-center justify-center gap-5 lg:gap-10 mt-5'>
                        <img className='w-24 md:w-32 lg:w-32 ' src='/logos/organizaciones/PUCPBN.svg'/>
                        <img className='w-24 md:w-24 lg:w-24 ' src='/logos/organizaciones/SenamhiLogo_monoinv.png'/>
                    </div>
                    <h1 className='text-white font-bold mt-10 text-center'>Entidades asociadas extranjeras</h1>
                    <div className='flex flex-wrap items-center justify-center gap-5 mt-5'>
                        <img className='w-36 md:w-40 lg:w-40' src='/logos/organizaciones/LeedsBN.svg'/>
                        <img className='w-48 md:w-48 lg:w-56 ' src='/logos/organizaciones/BAS-full-logo-white.png'/>
                        <img className='w-20 md:w-20 lg:w-20' src='/logos/organizaciones/HeriotWattBN.svg'/>
                        <img className='w-12 md:w-14 lg:w-14' src='/logos/organizaciones/CranfieldUniversity_Logo_MonoInv.png'/>
                    </div>
                    <h1 className='text-white font-bold mt-10 text-center'>Entidades colaboradoras</h1>
                    <div className='flex flex-wrap items-center justify-center gap-5 lg:gap-10 mt-5'>
                        <img className='w-20 md:w-20 lg:w-20' src='/logos/organizaciones/IICMLogo_Sf_monoinv.png'/>
                        <img className='w-14 md:w-14 lg:w-14' src='/logos/organizaciones/TMILogo_monoinv.png'/>
                        <img className='w-12 md:w-12 lg:w-12' src='/logos/organizaciones/CareLogo2_monoinv.png'/>
                        <img className='w-20 md:w-20 lg:w-20' src='/logos/organizaciones/CCSHLogo_Sf_monoinv.png'/>
                    </div>
                </div>
            </div>
            <div className='flex-1 image-organizaciones hidden lg:block'></div>
        </div>
    );
}