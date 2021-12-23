import React from 'react';
import Northumbria from './components/northumbria';
import Leeds from './components/leeds'; 
import British from './components/british';
import Cranfield from './components/cranfield';

export default function Equipo(){
    return(
        <div className='flex justify-center'>
            <div className='flex-1 w-full lg:max-w-7xl px-4 lg:px-0'>           
                <Northumbria />
                <Leeds />
                <British />
                <Cranfield />
            </div>
        </div>
    );
}