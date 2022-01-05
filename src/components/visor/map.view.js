import React from 'react';
import {useState} from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import Creditos from './components/creditos';
import Geoportal from './components/geoportal';
import LeftAside from './components/leftAside';
import Aside from './components/capas/aside';
import Coordenadas360 from './components/panoramicas/coordenadas360';
import Panoramicas from './components/panoramicas/panoramicas';
import Cordilleras from './dataBase/cordilleras/cordilleras';
import UhCordilleraBlanca from './dataBase/uh_perugrows/uh_cordillerablanca';
import UhCordilleraNegra from './dataBase/uh_perugrows/uh_cordilleranegra';
import CuencaRioSanta from './dataBase/uh_perugrows/cuenca_rio_santa';
import AreaModelamientoCuencaSanta from './dataBase/uh_perugrows/area_modelamiento_santa';

export default function MapViewer(){
    const [map, setMap] = useState({open:"1"});

    const [state, setState] = useState({open:""});
    const [stateOpen, setStateOpen] = useState(true);
    const [panam , setPanam] = useState(true)
    const [corblanca, setCorblanca] = useState(true);
    const [corchila, setCorchila] = useState(true);
    const [cor, setCor] = useState(true);

    const [cuencaSanta, setCuencaSanta] = useState(true);
    const [areaModel, setAreaModel] = useState(true);

    const openMap = (e)=>{
        e.preventDefault();
        setMap({open:e.target.id})
    }

    const hundleClicOpen360 = (e)=>{
        e.preventDefault()
        setState({open:e.target.id})
        setStateOpen(false)
    }
    const hundleClicClose360 = (e)=>{
        e.preventDefault()
        setStateOpen(true)}

    const hundleClickOpenPanam = (e)=>{e.preventDefault(), setPanam(false)}
    const hundleClickClosePanam = (e)=>{e.preventDefault(), setPanam(true)}

    const hundleClickOpen = (e)=>{e.preventDefault(), setCorblanca(true)}
    const hundleClickClose = (e)=>{e.preventDefault(), setCorblanca(false)}
    const hundleClickOpenChila = (e)=>{e.preventDefault(), setCorchila(true)}
    const hundleClickCloseChila = (e)=>{e.preventDefault(), setCorchila(false)}
    const hundleClickOpenCor = (e)=>{e.preventDefault(), setCor(true)}
    const hundleClickCloseCor = (e)=>{e.preventDefault(), setCor(false)}
    const hundleClickOpenSanta = (e)=>{e.preventDefault(), setCuencaSanta(true)}
    const hundleClickCloseSanta = (e)=>{e.preventDefault(), setCuencaSanta(false)}
    const hundleClickOpenModel = (e)=>{e.preventDefault(), setAreaModel(true)}
    const hundleClickCloseModel = (e)=>{e.preventDefault(), setAreaModel(false)}

    return(
        <div className='h-screen border'>
            <Aside 
                openMap={openMap}
                hundleClickClosePanam={hundleClickClosePanam} hundleClickOpenPanam={hundleClickOpenPanam} panam={panam}
                hundleClickOpen={hundleClickOpen} hundleClickClose={hundleClickClose} estado={corblanca} 
                hundleClickOpenChila={hundleClickOpenChila} hundleClickCloseChila={hundleClickCloseChila} corchila={corchila}
                hundleClickOpenCor={hundleClickOpenCor} hundleClickCloseCor={hundleClickCloseCor} cor={cor}
                hundleClickOpenSanta={hundleClickOpenSanta} hundleClickCloseSanta={hundleClickCloseSanta} cuencaSanta={cuencaSanta}
                hundleClickOpenModel={hundleClickOpenModel} hundleClickCloseModel={hundleClickCloseModel} areaModel={areaModel}
             />
             {stateOpen?null:<Panoramicas hundleClicClose360={hundleClicClose360} state={state.open} />}
            <MapContainer center={[-9.114974922615183, -78.142071978681196]} zoom={8} scrollWheelZoom={true} >
                {
                    map.open === "1"?<TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    />:null
                }
                {
                    map.open === "2"?<TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                    />:null
                }
                {
                    map.open === "3"?<TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />:null
                }
                {
                    map.open === "4"?<TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                    />:null
                }
                {
                    map.open === "5"?<TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tile.osm.ch/switzerland/{z}/{x}/{y}.png"
                    />:null
                }

                {
                    map.open === "1"?<TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}"
                        ext='png'
                    />:null
                }
                {
                    map.open === "1"?<TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}"
                        ext='png'
                    />:null
                }
                <Geoportal />
                <Creditos />
                <LeftAside />
                {panam?null:<Coordenadas360 hundleClicOpen360={hundleClicOpen360} />}
                
                {cuencaSanta?<CuencaRioSanta />:null}
                {corchila?<UhCordilleraNegra />:null}
                {corblanca?<UhCordilleraBlanca />:null}
                {areaModel?<AreaModelamientoCuencaSanta />:null}
                
                {cor?<Cordilleras />:null}
            </MapContainer>
        </div>
    );
}