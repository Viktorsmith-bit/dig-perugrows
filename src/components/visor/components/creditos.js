import React from 'react';

export default function Creditos(){
    return(
        <div className='flex items-center justify-center absolute bottom-0 left-0 z-20 bg-white gap-2 px-3 py-1 rounded-r-sm' style={{zIndex:"1000"}}>
            <a href='http://portal.concytec.gob.pe/index.php' target='_blank'><img className='h-8 cursor-pointer' src='/logos/perugrows/Concytec.PNG'/></a>
            <a href='https://prociencia.gob.pe/' target='_blank'><img className='h-10 cursor-pointer' src='/logos/perugrows/ProCiencia.jpg'/></a>
            <a href="https://nerc.ukri.org/" target="_blank"><img className='h-8 cursor-pointer' src='/logos/organizaciones/LogoNERC_UK_Sf.png'/></a>
        </div>
    );
}