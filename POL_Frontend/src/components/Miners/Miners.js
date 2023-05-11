import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./miners.css";

const Miners = () => {
  const [miners, setMiners] = useState([]);
  useEffect(() => {
    const url = "http://192.168.88.149:4000/miner/getminers";
    axios.get(url).then((response) => {
      setMiners(response.data.data);
      console.log("miners:" + miners);
      console.log(response.data.data);
      // console.log(miners[0].n)
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="miner-section">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>
                <b>Name</b>
              </td>
              <td>
                <b>Stake</b>
              </td>
              <td>
                <b>Reward</b>
              </td>
              <td>
                <b>Balance</b>
              </td>
              <td>
                <b>Blocks</b>
              </td>
              <td>
                <b>Freeze count</b>
              </td>
            </tr>
            {miners.map((miner) => {
              return (
                <>
                  <tr>
                    <td className="Minernames">{miner.name}</td>
                    <td>{miner.stake}</td>
                    <td>{miner.reward}</td>
                    <td>{miner.balance}</td>
                    <td>
                      {miner.BlocksMined.map((block) => {
                        return (
                          <>
                            {block ? (
                              <span className="blocks-no">{block},</span>
                            ) : (
                              <span className="blocks-no">none</span>
                            )}
                          </>
                        );
                      })}
                    </td>
                    <td className="text-center">{miner.freazeCount}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Miners;