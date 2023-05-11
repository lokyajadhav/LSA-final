import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./mineblock.css";
// import {Redirect} from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MineBlock = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [randomNumbers, setRandomNumbers] = useState();
  const [duplicateNumbers, setDuplicateNumbers] = useState();
  const [freezedMiners, setFreezedMiners] = useState();
  const [priorityqueue, setPriorityQueue] = useState([]);
  const [miner, setMiner] = useState("");
  const [count, setCount] = useState(0);
  const [displayData, setDisplayData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mined, setMined] = useState(false);
  const handleChange = (e) => {
    setData(e.target.value);
  };

  useEffect(() => {
    if (randomNumbers != undefined) {
      randomNumbers.sort((a, b) => a.randomNumber - b.randomNumber);
      setPriorityQueue(randomNumbers.slice(0, 4));
    }
  }, [randomNumbers]);

  useEffect(() => {
    if (priorityqueue[0] != null) {
      setMiner(priorityqueue[0].nameName);
    }
  }, [priorityqueue]);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <div className="timer timerMessage">Stay Active</div>;
    }

    return (
      <div className="timer text-center">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

  const changePQ = () => {
    priorityqueue.shift();
    console.log(priorityqueue);
    setCount(count + 1);
    console.log("count in changepq " + count);
  };

  const changeMiner = () => {
    if (priorityqueue[0] != null) {
      setMiner(priorityqueue[0].nameName);
      console.log("Miner changed");
    }
  };

  const handleMine = (e) => {
    //hit mine api here...
    // e.preventDefault();
    setLoading(true);
    const form = new FormData();
    const url = "http://192.168.88.149:4000/mining/generateRandom";
    form.append("data", data);
    console.log("formdata is " + form.get("data"));
    if (data) {
      axios
        .post(url, {
          BlockData: form.get("data"),
        })
        .then((res) => {
          console.log(
            "server response for random num generation " + res.data.minermaps
          );
          setRandomNumbers(res.data.minermaps);
          setDuplicateNumbers(res.data.duplicateminers);
          setFreezedMiners(res.data.frozenMiners);
          setCount(0);
          setDisplayData(true);
          // console.log("random numbers stored: "+randomNumbers);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.warning("Please fill required details");
    }
  };

  const successMine = (e) => {
    e.preventDefault();
    const form = new FormData();
    const url = "http://192.168.88.149:4000/mining/addNewBlock";
    form.append("miner", miner);
    console.log("miner is " + form.get("miner"));
    axios
      .post(url, {
        minerName: form.get("miner"),
      })
      .then((res) => {
        setMined(true);
        console.log(res);
        window.alert("block added");
      })
      .catch((err) => {
        console.log(err);
        window.alert("error");
      });
  };

  const failMine = (e) => {
    // e.preventDefault();
    const form = new FormData();
    const url = "http://192.168.88.149:4000/mining/getresponse";
    form.append("miner", miner);
    console.log("failed miner " + miner);
    axios
      .post(url, {
        minerName: form.get("miner"),
      })
      .then((res) => {
        console.log(res);
        if (count < 3) {
          changePQ();
          changeMiner();
          console.log("count= " + count);
        } else {
          setDisplayData(false);
          setTimeout(() => {
            handleMine();
          }, 5000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  if (mined) {
    navigate("/chain");
  }
  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="container mt-5">
        <div className="mine-data-section text-center">
          <h4 className="data-title">Data</h4>
          <textarea rows={20} cols={40} onChange={handleChange} required />
          <br />
          <div className="buttonContainer">
            <button
              className="mine-button mt-5"
              onClick={() => {
                setLoading(true);
                setTimeout(() => {
                  handleMine();
                }, 5000);
              }}
            >
              Mine
            </button>
          </div>
        </div>
        {/* display generated random numbers after clicking mine.
                    display the Selected miner.
                    display yes or no for mine.
                */}
        {displayData ? (
          <div className="randomNumberSection mt-4">
            {/* display random numbers here */}
            {/* display priority queue here */}
            {/* display miner and */}
            <div className="row">
              <div className="col">
                <h3 className="randomTitle text-center">Random Numbers</h3>
                <div className="randsection mt-4">
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <td>
                          <b>Name</b>
                        </td>
                        <td>
                          <b>Random Number</b>
                        </td>
                      </tr>
                      {randomNumbers?.map((Miner) => {
                        return (
                          <tr>
                            <td className="Minernames">{Miner.nameName}</td>
                            <td>{Miner.randomNumber}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="timer-wrapper col">
                <CountdownCircleTimer
                  isPlaying
                  duration={15}
                  colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                  colorsTime={[10, 6, 3, 0]}
                  onComplete={() => {
                    // do your stuff here
                    failMine();
                    return { shouldRepeat: true, delay: 2 }; // repeat animation in 1.5 seconds
                  }}
                >
                  {renderTime}
                </CountdownCircleTimer>
              </div>
            </div>

            {duplicateNumbers.length > 0 ? (
              <>
                <div className="row mt-4">
                  <div className="col-sm-6">
                    <h3 className="randomTitle mt-2">
                      Duplicate/Eliminated Miners
                    </h3>
                    <div className="randsection mt-4 pq-section">
                      <table className="table table-striped">
                        <tbody>
                          <tr>
                            <td>
                              <b>Name</b>
                            </td>
                            <td>
                              <b>Random Number</b>
                            </td>
                          </tr>
                          {duplicateNumbers?.map((Miner) => {
                            return (
                              <tr>
                                <td className="Minernames">{Miner.nameName}</td>
                                <td>{Miner.randomNumber}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="row mt-4">
                  <div className="col-sm-6">
                    <h3 className="randomTitle mt-2">
                      Duplicate/Eliminated Miners
                    </h3>
                  </div>
                  <h5>No duplicate miners present</h5>
                </div>
              </>
            )}

            {freezedMiners.length > 0 ? (
              <>
                <div className="row mt-4">
                  <div className="col-sm-6">
                    <h3 className="randomTitle mt-2">Freezed Miners</h3>
                    <div className="randsection mt-4 pq-section">
                      <table className="table table-striped">
                        <tbody>
                          <tr>
                            <td>
                              <b>Name</b>
                            </td>
                            <td>
                              <b>Freeze count</b>
                            </td>
                          </tr>
                          {freezedMiners?.map((Miner) => {
                            return (
                              <>
                                <tr>
                                  <td className="Minernames">{Miner.name}</td>
                                  <td>{Miner.freazeCount}</td>
                                </tr>
                              </>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="row mt-4">
                  <div className="col-sm-6">
                    <h3 className="randomTitle mt-2">Freezed Miners</h3>
                  </div>
                  <h5>No Freezed miners present</h5>
                </div>
              </>
            )}

            <div className="row mt-4">
              <div className="col">
                <h3 className="randomTitle mt-2">Priority Queue</h3>
                <div className="randsection mt-4 pq-section">
                  <table className="table table-striped">
                    <tbody>
                      <tr>
                        <td>
                          <b>Name</b>
                        </td>
                        <td>
                          <b>Random Number</b>
                        </td>
                      </tr>
                      {priorityqueue?.map((Miner) => {
                        return (
                          <tr>
                            <td className="Minernames">{Miner.nameName}</td>
                            <td>{Miner.randomNumber}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col selected-section">
                <h3 className="randomTitle mt-6">Selected Miner</h3>
                <h3 className="MinerTitle text-center">{miner}</h3>
                <div className="row">
                  <div className="col mb-4">
                    <button
                      className="btn btn-success mineButton"
                      onClick={successMine}
                    >
                      Mine
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : loading && data ? (
          <div className="mt-4 text-center">
            <h3 className="loadingBox">Generating Random Numbers...</h3>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MineBlock;