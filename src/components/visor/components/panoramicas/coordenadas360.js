import dynamic from 'next/dynamic';
import { Fragment } from "react";
import {listaCoordenadas} from "./lista/listaJSON";

const CircleMarker = dynamic(()=>import('react-leaflet').then((mod)=>mod.CircleMarker), {ssr: false});
const Popup = dynamic(()=>import('react-leaflet').then((mod)=>mod.Popup), {ssr: false});

export default function(props){
    const redOptions = { color: 'white' }
    return(
        <Fragment>
            {
                listaCoordenadas.map((item)=>{
                    return <CircleMarker center={item.coordinates} pathOptions={redOptions} radio={20} >
                            <Popup>
                                <h1 id={item.id} onClick={props.hundleClicOpen360} className='cursor-pointer'>{item.titulo}</h1>
                        </Popup>
                    </CircleMarker>
                })
            }
        </Fragment>
    );
}