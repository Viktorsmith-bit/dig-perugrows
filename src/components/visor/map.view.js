import React from 'react';
import dynamic from 'next/dynamic';
import Capas from './capas';
import Creditos from './components/creditos';
import Geoportal from './components/geoportal';
import LeftAside from './components/leftAside';

const MapContainer = dynamic(()=>import('react-leaflet').then((mod)=>mod.MapContainer), {ssr: false});
const TileLayer = dynamic(()=>import('react-leaflet').then((mod)=>mod.TileLayer), {ssr: false});

export default function MapViewer(){

    return(
        <div className='h-screen border'>
            <MapContainer center={[-14.414974922615183, -72.242071978681196]} zoom={7} scrollWheelZoom={true} >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}"
                    ext='png'
                />
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}"
                    ext='png'
                />
           
                <Capas />
                <Geoportal />
                <Creditos />
                <LeftAside />
                
            </MapContainer>
        </div>
    );
}