import dynamic from 'next/dynamic';
import { Fragment } from "react";
import { listaCoordenadas } from "./lista/listaJSON";
import {customMarkerIcon} from '../iconLocation';

const Marker = dynamic(()=>import('react-leaflet').then((mod)=>mod.Marker), {ssr: false});
const Popup = dynamic(()=>import('react-leaflet').then((mod)=>mod.Popup), {ssr: false});

export default function(props){
    return(
        <Fragment>
            {
                listaCoordenadas.map((item)=>{
                    return <Marker position={item.coordinates} icon={customMarkerIcon} >
                            <Popup>
                                <h1 id={item.id} onClick={props.hundleClicOpen360} className='cursor-pointer'>{item.titulo}</h1>
                        </Popup>
                    </Marker>
                })
            }
        </Fragment>
    );
}