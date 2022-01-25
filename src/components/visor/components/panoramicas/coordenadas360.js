import { Fragment } from "react";
import {listaCoordenadas} from "./lista/listaJSON";
import {Marker, Popup} from "react-leaflet";
import {customMarkerIcon} from "../iconLocation";

export default function(props){

    return(
        <Fragment>
            {
                listaCoordenadas.map((item)=>{
                    return <Marker key={item.id} position={item.coordinates} icon={customMarkerIcon}>
                            <Popup>
                                <div className="flex items-center gap-2 h-4">
                                    <h1 id={item.id} onClick={props.hundleClicOpen360} className='cursor-pointer text-color'>{item.nombre}</h1>
                                    <svg id={item.id} onClick={props.hundleClicOpen360} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#434040" className="cursor-pointer bi bi-arrows-fullscreen" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707zm4.344 0a.5.5 0 0 1 .707 0l4.096 4.096V11.5a.5.5 0 1 1 1 0v3.975a.5.5 0 0 1-.5.5H11.5a.5.5 0 0 1 0-1h2.768l-4.096-4.096a.5.5 0 0 1 0-.707zm0-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707zm-4.344 0a.5.5 0 0 1-.707 0L1.025 1.732V4.5a.5.5 0 0 1-1 0V.525a.5.5 0 0 1 .5-.5H4.5a.5.5 0 0 1 0 1H1.732l4.096 4.096a.5.5 0 0 1 0 .707z"/>
                                    </svg>
                                </div>
                        </Popup>
                    </Marker>
                })
            }
        </Fragment>
    );
}