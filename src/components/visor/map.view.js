import React, { Component } from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import Creditos from './components/creditos';
import Geoportal from './components/geoportal';
import LeftAside from './components/leftAside';
import Aside from './components/capas/aside';
import Coordenadas360 from './components/panoramicas/coordenadas360';
import Panoramicas from './components/panoramicas/panoramicas';
import CordillerasPeru from './dataBase/cordilleras/cordillera_peru';
import CuencaSanta from './dataBase/cuencas/cuencaSanta';
import CuencaSantaCorte from './dataBase/cuencas/cuencaSantaCorte';
import UhCordilleraBlanca from './dataBase/uh_perugrows/uh_cordillerablanca';
import UhCordilleraNegra from './dataBase/uh_perugrows/uh_cordilleranegra';
import UhPuntosTrabajo from './dataBase/uh_perugrows/uh_puntos_trabajo';
import Glaciares from "./dataBase/glaciaresLagunas/glaciares_cordilleraBlanca";
import Lagunas from "./dataBase/glaciaresLagunas/lagunas_cordilleraBlanca";

export default class MapViewer extends Component{
    constructor(props){
        super(props);
        this.state={
            map:"1",
            state:"",
            stateOpen:true,
            panam:"closePanam",
            corBlanca:"openCorBlanca",
            corNegra:"openCorNegra",
            corPeru:"openCorPeru",
            cuencaSanta:"openCuencaSanta",
            cuencaSantaCorte:"openCuencaSantaCorte",
            glaciares:"closeGlaciares",
            lagunas:"closeLagunas",
            puntosTrabajo:"openPuntosTrabajo"
        }
        this.openMap = this.openMap.bind(this);
        this.hundleClicOpen360 = this.hundleClicOpen360.bind(this);
        this.hundleClicClose360 = this.hundleClicClose360.bind(this);
        this.hundleClickEstadoVisor = this.hundleClickEstadoVisor.bind(this);
    }

    openMap(e){e.preventDefault(), this.setState({map:e.target.id})}
    hundleClicOpen360(e){e.preventDefault(), this.setState({state:e.target.id}), this.setState({stateOpen:false})}
    hundleClicClose360 (e){e.preventDefault(), this.setState({stateOpen:true})}
    
    hundleClickEstadoVisor(e){
        e.preventDefault()
        return e.target.id === "openPanam" || e.target.id === "closePanam"?this.setState({panam:e.target.id}):
        e.target.id === "openCorPeru" || e.target.id === "closeCorPeru"?this.setState({corPeru:e.target.id}):
        e.target.id === "openCorBlanca" || e.target.id === "closeCorBlanca"?this.setState({corBlanca:e.target.id}):
        e.target.id === "openCorNegra" || e.target.id === "closeCorNegra"?this.setState({corNegra:e.target.id}):
        e.target.id === "openCuencaSanta" || e.target.id === "closeCuencaSanta"?this.setState({cuencaSanta:e.target.id}):
        e.target.id === "openCuencaSantaCorte" || e.target.id === "closeCuencaSantaCorte"?this.setState({cuencaSantaCorte:e.target.id}):
        e.target.id === "openGlaciares" || e.target.id === "closeGlaciares"?this.setState({glaciares:e.target.id}):
        e.target.id === "openLagunas" || e.target.id === "closeLagunas"?this.setState({lagunas:e.target.id}):
        e.target.id === "openPuntosTrabajo" || e.target.id === "closePuntosTrabajo"?this.setState({puntosTrabajo:e.target.id}):null
    }

    render(){
        return(
            <div className='h-screen border'>
                <Geoportal />
                <Creditos />
                <LeftAside />
                <Aside state={this.state} openMap={this.openMap} hundleClickOpen={this.hundleClickOpen} hundleClickClose={this.hundleClickClose}
                    hundleClickEstadoVisor={this.hundleClickEstadoVisor}
                />
                {this.state.stateOpen?null:<Panoramicas hundleClicClose360={this.hundleClicClose360} state={this.state.state} />}
                <MapContainer center={[-9.114974922615183, -78.142071978681196]} zoom={8} scrollWheelZoom={true} >
                    {
                        this.state.map === "1"?<TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        />:null
                    }
                    {
                        this.state.map === "2"?<TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                        />:null
                    }
                    {
                        this.state.map === "3"?<TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />:null
                    }
                    {
                        this.state.map === "4"?<TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                        />:null
                    }
                    {
                        this.state.map === "5"?<TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://tile.osm.ch/switzerland/{z}/{x}/{y}.png"
                        />:null
                    }

                    {
                        this.state.map === "1"?<TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-hybrid/{z}/{x}/{y}{r}.{ext}"
                            ext='png'
                        />:null
                    }
                    {
                        this.state.map === "1"?<TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}{r}.{ext}"
                            ext='png'
                        />:null
                    }
                    
                    {this.state.panam === "closePanam"?null:<Coordenadas360 hundleClicOpen360={this.hundleClicOpen360} />}
                    {this.state.corPeru === "openCorPeru"?<CordillerasPeru />:null}
                    {this.state.cuencaSanta === "openCuencaSanta"?<CuencaSanta />:null}
                    {this.state.cuencaSantaCorte === "openCuencaSantaCorte"?<CuencaSantaCorte />:null}
                    {this.state.corNegra === "openCorNegra"?<UhCordilleraNegra />:null}
                    {this.state.corBlanca === "openCorBlanca"?<UhCordilleraBlanca />:null}
                    {this.state.puntosTrabajo === "openPuntosTrabajo"?<UhPuntosTrabajo />:null}
                    {this.state.lagunas === "closeLagunas"?null:<Lagunas />}
                    {this.state.glaciares === "closeGlaciares"?null:<Glaciares />}

                </MapContainer>
            </div>
        );
    }
}