import { Fragment } from 'react';
import React from 'react';
import { useState } from 'react';
import Capas from './components/capas';
import Leyenda from './components/leyenda';

export default function Aside(props){
    const [state, setState] = useState({capas:false, leyenda:false})

    const handleClickOpen = (e)=>{e.preventDefault(), setState({capas:true})}
    const handleClickClose = (e)=>{e.preventDefault(), setState({capas:false})}
    const handleClickOpenLey = (e)=>{e.preventDefault(), setState({leyenda:true})}
    const handleClickCloseLey = (e)=>{e.preventDefault(), setState({leyenda:false})}

    return(
        <Fragment>
            {
                !state.capas?<div onClick={handleClickOpen} className='flex items-center justify-center w-10 h-10 absolute z-20 top-3 right-3 rounded-sm bg-white cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="325" fill="#434040" className="bi bi-stack" viewBox="0 0 16 16">
                        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                    </svg>
                </div>:<div onClick={handleClickClose}  className='flex items-center justify-center w-10 h-10 absolute z-20 top-3 right-3 rounded-sm bg-white cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#434040" className="bi bi-stack" viewBox="0 0 16 16">
                        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z"/>
                        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z"/>
                    </svg>
                </div>
            }
            {
                !state.leyenda?<div onClick={handleClickOpenLey} className='flex items-center justify-center w-10 h-10 rounded-sm bg-white absolute z-20 top-14 right-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="#434040" className="cursor-pointer bi bi-card-list" viewBox="0 0 16 16">
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                        <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                    </svg>
                </div>:<div onClick={handleClickCloseLey} className='flex items-center justify-center w-10 h-10 rounded-sm bg-white absolute z-20 top-14 right-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="#434040" className="cursor-pointer bi bi-card-list" viewBox="0 0 16 16">
                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                        <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                    </svg>
                </div>
            }
            {/**
             * <div className='flex items-center justify-center w-10 h-10 rounded-sm bg-white absolute z-20 top-24 right-4 mt-1'>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#434040" className="cursor-pointer bi bi-globe2" viewBox="0 0 16 16">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
                </svg>
            </div>
             */}
            {!state.capas?null:<Capas 
                hundleClickClosePanam={props.hundleClickClosePanam} hundleClickOpenPanam={props.hundleClickOpenPanam} panam={props.panam}
                hundleClickOpen={props.hundleClickOpen} hundleClickClose={props.hundleClickClose} estado={props.estado} 
                hundleClickOpenChila={props.hundleClickOpenChila} hundleClickCloseChila={props.hundleClickCloseChila} corchila={props.corchila}
                hundleClickOpenCor={props.hundleClickOpenCor} hundleClickCloseCor={props.hundleClickCloseCor} cor={props.cor}
                hundleClickOpenInv={props.hundleClickOpenInv} hundleClickCloseInv={props.hundleClickCloseInv} inv={props.inv}
                hundleClickOpenPer30={props.hundleClickOpenPer30} hundleClickClosePer30={props.hundleClickClosePer30} per30={props.per30}
                hundleClickOpenPer90={props.hundleClickOpenPer90} hundleClickClosePer90={props.hundleClickClosePer90} per90={props.per90}
                hundleClickOpenScp2002={props.hundleClickOpenScp2002} hundleClickCloseScp2002={props.hundleClickCloseScp2002} scp2002={props.scp2002}
                hundleClickOpenScp2003={props.hundleClickOpenScp2003} hundleClickCloseScp2003={props.hundleClickCloseScp2003} scp2003={props.scp2003}
                hundleClickOpenScp2004={props.hundleClickOpenScp2004} hundleClickCloseScp2004={props.hundleClickCloseScp2004} scp2004={props.scp2004}
                hundleClickOpenScp2005={props.hundleClickOpenScp2005} hundleClickCloseScp2005={props.hundleClickCloseScp2005} scp2005={props.scp2005}
                hundleClickOpenScp2006={props.hundleClickOpenScp2006} hundleClickCloseScp2006={props.hundleClickCloseScp2006} scp2006={props.scp2006}
                hundleClickOpenScp2007={props.hundleClickOpenScp2007} hundleClickCloseScp2007={props.hundleClickCloseScp2007} scp2007={props.scp2007}
                hundleClickOpenScp2008={props.hundleClickOpenScp2008} hundleClickCloseScp2008={props.hundleClickCloseScp2008} scp2008={props.scp2008}
                hundleClickOpenScp2009={props.hundleClickOpenScp2009} hundleClickCloseScp2009={props.hundleClickCloseScp2009} scp2009={props.scp2009}
                hundleClickOpenScp2010={props.hundleClickOpenScp2010} hundleClickCloseScp2010={props.hundleClickCloseScp2010} scp2010={props.scp2010}
                hundleClickOpenScp2011={props.hundleClickOpenScp2011} hundleClickCloseScp2011={props.hundleClickCloseScp2011} scp2011={props.scp2011}
                hundleClickOpenScp2012={props.hundleClickOpenScp2012} hundleClickCloseScp2012={props.hundleClickCloseScp2012} scp2012={props.scp2012}
                hundleClickOpenScp2013={props.hundleClickOpenScp2013} hundleClickCloseScp2013={props.hundleClickCloseScp2013} scp2013={props.scp2013}
                hundleClickOpenScp2014={props.hundleClickOpenScp2014} hundleClickCloseScp2014={props.hundleClickCloseScp2014} scp2014={props.scp2014}
                hundleClickOpenScp2015={props.hundleClickOpenScp2015} hundleClickCloseScp2015={props.hundleClickCloseScp2015} scp2015={props.scp2015}
                hundleClickOpenScp2016={props.hundleClickOpenScp2016} hundleClickCloseScp2016={props.hundleClickCloseScp2016} scp2016={props.scp2016}
                hundleClickOpenScp2017={props.hundleClickOpenScp2017} hundleClickCloseScp2017={props.hundleClickCloseScp2017} scp2017={props.scp2017}
                hundleClickOpenScp2018={props.hundleClickOpenScp2018} hundleClickCloseScp2018={props.hundleClickCloseScp2018} scp2018={props.scp2018}
                hundleClickOpenScp2019={props.hundleClickOpenScp2019} hundleClickCloseScp2019={props.hundleClickCloseScp2019} scp2019={props.scp2019}
                hundleClickOpenScp2020={props.hundleClickOpenScp2020} hundleClickCloseScp2020={props.hundleClickCloseScp2020} scp2020={props.scp2020}
            />}
            {!state.leyenda?null:<Leyenda />}
        </Fragment>
    );
}