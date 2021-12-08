import Link from 'next/link';
import React, { Fragment } from 'react';
import { useState } from 'react';
import Footer from '../shared/footer/footer';
import Sistema from './components/sistema';
import Modelamiento from './components/modelamiento';
import Impactos from './components/impactos';
import Adaptacion from './components/adaptacion';
import Todo from './components/todo';

export default function Galeria(){ 
    const [state, setState] = useState({todo: true, socios:true, modelamiento:true, impactos:true, adaptacion:true, paisaje:true});
    
    const todo = (e)=>{
        e.preventDefault();
        setState({todo: true, socios:true, modelamiento:true, impactos:true, adaptacion:true, paisaje:true})
    }
    const socios = (e)=>{
        e.preventDefault();
        setState({todo: false, socios:false, modelamiento:true, impactos:true, adaptacion:true, paisaje:true})
    }
    const modelamiento = (e)=>{
        e.preventDefault();
        setState({todo: false, socios:true, modelamiento:false, impactos:true, adaptacion:true, paisaje:true})
    }
    const impactos = (e)=>{
        e.preventDefault();
        setState({todo: false, socios:true, modelamiento:true, impactos:false, adaptacion:true, paisaje:true})
    }
    const adaptacion = (e)=>{
        e.preventDefault();
        setState({todo: false, socios:true, modelamiento:true, impactos:true, adaptacion:false, paisaje:true})
    }
    const paisaje = (e)=>{
        e.preventDefault();
        setState({todo: false, socios:true, modelamiento:true, impactos:true, adaptacion:true, paisaje:false})
    }
    return(
        <div className='pt-8 lg:pt-16'>
            <div className='flex-1 lg:max-w-7xl mx-auto px-4 lg:px-0 '>
                <Link href='/'>
                    <div className='flex items-center gap-1 cursor-pointer w-20'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        <h1 className='text-base text-color'>Volver</h1>
                    </div> 
                </Link>         
                <h1 className='font-bold text-4xl lg:text-6xl mt-5 text-color'>GALERÍA DE IMÁGENES</h1>
            </div>
            <div className='flex justify-center items-center py-3 lg:py-0 lg:h-14 mt-10 gray-color'>
                <div className='flex-1 w-full lg:max-w-7xl px-4 lg:px-0 '>
                    <div className='flex flex-wrap gap-4'>
                        <div className='flex items-center gap-2'>
                            <div onClick={todo} className={`h-4 w-4 cursor-pointer rounded-sm border-color ${state.todo?'background-color':'bg-white'}`}></div>
                            <label className='flex items-center text-base lg:h-14 text-color'>Todo</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div onClick={socios} className={`h-4 w-4 cursor-pointer rounded-sm border-color ${!state.socios?'background-color':'bg-white'}`}></div>
                            <label className='flex items-center text-base lg:h-14 text-color'>Objetivo específico 1</label>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div onClick={modelamiento} className={`h-4 w-4 cursor-pointer rounded-sm border-color ${!state.modelamiento?'background-color':'bg-white'}`}></div>
                            <h1 className='flex items-center text-base lg:h-14 text-color'>Objetivo específico 2</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div onClick={impactos} className={`h-4 w-4 cursor-pointer rounded-sm border-color ${!state.impactos?'background-color':'bg-white'}`}></div>
                            <h1 className='flex items-center text-base lg:h-14 text-color'>Objetivo específico 3</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <div onClick={paisaje} className={`h-4 w-4 cursor-pointer rounded-sm border-color ${!state.paisaje?'background-color':'bg-white'}`}></div>
                            <h1 className='flex items-center text-base lg:h-14 text-color'>Paisajes</h1>
                        </div>
                        {/*<div className='flex items-center gap-2'>
                            <div onClick={paisaje} className={`h-4 w-4 cursor-pointer rounded-sm border border-gray-400 ${!state.paisaje?'bg-blue-500':'bg-white'}`}></div>
                            <h1 className='flex items-center text-base h-14'>PAISAJES</h1>
                        </div>**/}
                    </div>
                </div>
            </div>
            {
                state.todo?<Fragment>
                    <Todo />
                </Fragment>:null
            }
            {
                !state.socios?<Fragment>
                    <Sistema />
                </Fragment>:null
            }
            {
                !state.modelamiento?<Fragment>
                    <Modelamiento />
                </Fragment>:null
            }
            {
                !state.impactos?<Fragment>
                    <Impactos />
                </Fragment>:null
            }
            {
                !state.paisaje?<Fragment>
                    <Adaptacion />
                </Fragment>:null
            }
            <Footer />
        </div>
    );
}