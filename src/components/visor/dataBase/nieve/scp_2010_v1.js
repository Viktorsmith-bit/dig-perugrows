import React from 'react';
import dynamic from 'next/dynamic';
import {useState, useEffect} from 'react';
import { Fragment } from "react";
import {app} from '../../../../../firebase.config';
import {ref, onValue} from "firebase/database";
import Loading from '../../components/loading';

const GeoJSON = dynamic(()=>import('react-leaflet').then((mod)=>mod.GeoJSON), {ssr: false});

function Scp2010V1(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountRef = ref(app, "scp_2010_v1");
            return new Promise((resolve)=>{
                onValue(starCountRef, (snapshot) => {
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

    const colorOptions = (atribute)=>{
        return atribute === "10 - 81" ? '#d6d6ff':
               atribute === "81 - 152" ? '#8f97e3':
               atribute === "152 - 223" ? '#556cc9':
               atribute === "223 - 294" ? '#244ead':
               atribute === "294 - 365" ? '#003994':null
    }
    
    return(
        <Fragment>
            {
                data === undefined?<Loading />:<GeoJSON data={data}  style={(feature)=>{
                    return {
                            color:colorOptions(feature.properties.Rangos)
                        }
                    }
                } />
            }
        </Fragment>
    );
}

export default Scp2010V1;