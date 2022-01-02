import React from 'react';
import {GeoJSON} from "react-leaflet";
import {useState, useEffect} from 'react';
import { Fragment } from "react";
import {app} from '../../../../../firebase.config';
import {ref, onValue} from "firebase/database";
import Loading from '../../components/loading';

function CuencaRioSanta(){
    const [state, setState] = useState();
    useEffect(()=>{
        async function PromiseDB(){
            const starCountCor = ref(app, "cuenca_rio_santa");
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

    const blackOptionsPermafrost = {color:"#D7DBDD"}
    
    return(
        <Fragment>
            {
                data === undefined?<Loading />:<GeoJSON data={data}  style={blackOptionsPermafrost} />
            }
        </Fragment>
    );
}

export default React.memo(CuencaRioSanta);