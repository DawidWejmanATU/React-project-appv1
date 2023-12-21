import { useEffect, useState } from "react";
import axios from "axios";
import Films from "./films";


function Reading(){
    const {data, setData} = useState([]);

    useEffect(
        ()=>{
            axios.get('http://localhost:4000/api/films')
            .then(
                (response)=>{
                    setData(response.data)
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                }
            )
        }, []
    );

        const ReloadData = (e)=>{
            axios.get('http://localhost:4000/api/films')
            .then(
                (response)=>{
                    setData(response.data)
                }
            )
            .catch(
                (error)=>{
                    console.log(error);
                }
            )
        }
        return(
            <div>
                <h2>Reading</h2>
                <Films myfilms={data} Reload={ReloadData}></Films>
            </div>
        );

}

export default Reading;