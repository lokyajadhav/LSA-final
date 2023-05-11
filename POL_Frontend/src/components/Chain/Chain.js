import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./chain.css";

const Chain = () =>{

    const [chain,setChain] = useState([]);

    useEffect(()=>{
        const url = "http://localhost:4000/getchain";
        axios.get(url)
        .then(res=>{
            console.log(res);
            setChain(res.data.data);
        })
    },[]);
    return(
        <div>
            <Navbar/>
            <div className="container chain-container mt-4">
                {chain.map(chain=>{
                    return(
                        <div className="dataBlock mb-4">
                            <table className="table">
                                <tbody>
                                    
                                <tr scope="row">
                                    <td className="heading-side">Block Height</td>
                                    <td>{chain.BlockNumber}</td>
                                </tr>
                                <tr scope="row">
                                    <td className="heading-side">Block Hash</td>
                                    <td>{chain.BlockHash}</td>
                                </tr>
                                <tr>
                                    <td className="heading-side">Prev Block Hash</td>
                                    <td>{chain.PreBlockHash}</td>
                                </tr>
                                <tr>
                                    <td className="heading-side">Data</td>
                                    <td>{chain.data}</td>
                                </tr>
                                <tr>
                                    <td className="heading-side">TimeStamp</td>
                                    <td>{chain.timestamp}</td>
                                </tr>
                                <tr >
                                    <td className="heading-side">Miner</td>
                                    <td>{chain.miner}</td>
                                </tr>
                                </tbody>
                            </table>                            
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Chain;