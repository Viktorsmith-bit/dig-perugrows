import React from 'react';
import dynamic from 'next/dynamic';
import {useState, useEffect} from 'react';
import { Fragment } from "react";
import {app} from '../../../../../firebase.config';
import {ref, onValue} from "firebase/database";
import Loading from '../../components/loading';

const GeoJSON = dynamic(()=>import('react-leaflet').then((mod)=>mod.GeoJSON), {ssr: false});

function CordilleraBlancaGrows(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "uh_cordillera_blanca");
            return new Promise((resolve)=>{
                onValue(starCountCor, (snapshot) => {
                    const dbRef = snapshot.val();
                    resolve(dbRef)
                })
            })
            .then((result)=>{
                setState(result)
            }).catch(()=>{
                console.log("Error al cargar los datos")
            })
        } 
        PromiseDB();
    }, [])

    const [data, setData] = useState();
    useEffect(()=>{
        function getStatic(){
            return setData(state)
        }
        getStatic();
    })

    const blackOptionsPermafrost = {color:"rgba(147, 197, 253)"}
    
    return(
        <Fragment>
            {
                data === undefined?<Loading />:<GeoJSON data={data}  style={blackOptionsPermafrost} />
            }
        </Fragment>
    );
}

export default React.memo(CordilleraBlancaGrows);