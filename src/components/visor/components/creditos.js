import React from 'react';

export default function Creditos(){
    return(
        <div className='flex absolute items-end bottom-0 left-0 z-20' style={{zIndex:"1000"}}>
            <div className='flex flex-wrap items-center gap-3 pl-3 py-1 bg-white'>
                <a href='http://portal.concytec.gob.pe/index.php' target='_blank'><img className='h-7 cursor-pointer' src='/logos/perugrows/Concytec.PNG'/></a>
                <a href='https://prociencia.gob.pe/' target='_blank'><img className='h-7 cursor-pointer' src='/logos/perugrows/ProCiencia.jpg'/></a>
                <a href="https://nerc.ukri.org/" target="_blank"><img className='h-7 cursor-pointer' src='/logos/organizaciones/LogoNERC_UK_Sf.png'/></a>
            </div>
            <div className='flex flex-wrap items-center gap-3 py-1 px-3 bg-white rounded-r-sm'>
                <a href='https://www.northumbria.ac.uk/' target='_blank'><img className='h-6 cursor-pointer' src='/logos/visor/NorthumbriaUniversity_Logo_Sf.png'/></a>
                <a href='https://www.pucp.edu.pe/' target='_blank'><img className='h-7 cursor-pointer' src='/logos/visor/PUCLogo_Sf.png'/></a> 
                <a href='https://www.senamhi.gob.pe/?p=pronostico-meteorologico' target='_blank'><img className='h-7 cursor-pointer' src='/logos/visor/SenamhiLogo_Sf.png'/></a>  
                <a href='https://www.leeds.ac.uk/' target='_blank'><img className='h-7 cursor-pointer' src='/logos/visor/UnivsityLeeds_Logo_Sf.png'/></a>  
                <a href='https://www.bas.ac.uk/' target='_blank'><img className='h-7 cursor-pointer' src='/logos/visor/BAS_Logo_Sf.png'/></a>
                <a href='https://www.hw.ac.uk/' target='_blank'><img className='h-6 cursor-pointer' src='/logos/visor/HeriotWattUniversity_logo_Sf.svg.png'/></a>   
                <a href='https://www.cranfield.ac.uk/' target='_blank'><img className='h-7 cursor-pointer' src='/logos/visor/Cranfield_Logo_Sf2.png'/></a>   
                <img className='h-7' src='/logos/visor/IICMLogo_Sf.png'/>
                <a href='https://es-la.facebook.com/InstitutoDeMontana/' target='_blank'><img className='h-7 cursor-pointer' src='/logos/visor/TMILogo.png'/></a>    
                <a href='https://www.care.org.pe/' target='_blank'><img className='h-7 cursor-pointer' src='/logos/visor/CareLogo2_Sf.png'/></a>       
                <img className='h-6' src='/logos/visor/CCSHLogo_Sf.png'/>     
            </div>
        </div>
    );
}