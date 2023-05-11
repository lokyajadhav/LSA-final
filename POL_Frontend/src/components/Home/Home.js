import Navbar from "../Navbar/Navbar";
import "./home.css";
import chart from "./chart.jpeg";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <div className="container home-container mt-4">
                <div className="objective-container">
                    <h4 className="objective-title">Objective</h4>
                    <ul className="objectives">
                        <li className="objective">Quick and deterministic confirmations. </li>
                        <li className="objective">Energy and network communication efficient protocol.</li>
                        <li className="objective">Low latency transaction validation. </li>
                        <li className="objective">Less energy consumption with moderate difficulty. </li>
                        <li className="objective">Equitably distributed mining. </li>
                    </ul>
                </div>
                <div className="algorithm-container">
                    <h4 className="alg-title">Algorithm</h4>
                    <ul className="alg">
                        <li className="alg-step">Join as a Miner by investing a fixed amount.</li>
                        <li className="alg-step">Miners generate Random Numbers using TEE.</li>
                        <li className="alg-step">Top 4 Miners will be added to Priority queue.</li>
                        <li className="alg-step">First Miner in the Priority queue gets the chance to mine the block and broadcasts it.</li>
                        <li className="alg-step">Upon successful creation and validation of block, the block will be added to the Chain.</li>
                        <li className="alg-step">If Miner is unable to generate a block or the block gets invalidated:</li>
                        <ul>
                        <li className="alg-pre-step">Next Miner from the Priority queue will be selected as miner.</li>
                        <li className="alg-pre-step">Miner's stake will be sent to unspendable address.</li>
                        <li className="alg-pre-step">If all Miner's in the Priority queue are not able to mine the block, all the Miners generate the Random Numbers again and the process repeats.</li>
                        </ul>
                    </ul>                
                </div>
            </div> */}
      <div className="container home-container">
        <div className="blockchainSection">
          <h4 className="homeTitle">Blockchain</h4>
          <p className="blockchainPara">
            A Blockchain is a distributed database or ledger that is shared
            among the nodes of a computer network. As a database, a blockchain
            stores information electronically in digital format.Blockchains are
            best known for their crucial role in crytocurrency systems, such as
            Bitcoin, for maintaining a secure and decentralised record of
            transactions. The innovation with a blockchain is that it guarantees
            the security of a record of data and generates trust without need
            for trusted third party.
          </p>
          {/* <p className="blockchainPara">
            One key difference between typical database and blockchain is how
            the data is structured. A blockchain collects information together
            in groups,known as Blocks, that hold sets of information. Blocks
            have certain storage capacities and when filled, are closed and
            linked to the previous filled block, forming a chain of data known
            as the blockchain. As the new data comes in, it is entered into a
            fresh block. Once the block is filled with data, it is chained onto
            the previous block, which makes the data chained together in
            chronological order.
          </p> */}
          <p className="blockchainInfo">
            More details about{" "}
            <span className="blockchainTitle">Blockchain: </span>
            <br />
            <ul className="blockchainLinks">
              <li className="blockchainLink">
                <a href="https://en.m.wikipedia.org/wiki/Blockchain">
                  Blockchain Wiki
                </a>
              </li>
              <li className="blockchainLink">
                <a href="https://www.investopedia.com/terms/b/blockchain.asp">
                  Blockchain Facts: Investopedia
                </a>
              </li>
              <li className="blockchainLink">
                <a href="https://blockgeeks.com/guides/what-is-blockchain-technology/">
                  Blockchain for Beginners: BlockGeeks
                </a>
              </li>
            </ul>
          </p>
        </div>
        <div className="consensusSection">
          <h4 className="homeTitle">Consensus</h4>
          <p className="consensusPara">
            We know that Blockchain is a distributed decentralised network that
            provides immutability, privacy, security and transparency. There is
            no central authority present to validate and verify the
            transactions, yet every transaction in the Blockchain is considered
            to be completely secured and verifed. This is possible only because
            of the consensus protocol which is a core part of any Blockchain
            network.
          </p>
          <p className="consensusPara">
            A consensus algorithm is a procedure through which all the peers of
            the Blockchain network reach a common agreement. In this way,
            consensus algorithms achieve reliability in the Blockchain network
            and establish trust between unknown peers in a distributed computing
            environment.
          </p>
        </div>
        <div className="lsaSection">
          <h4 className="homeTitle">
            LuckyStake Hybrid Consensus Algorithm(LSA)
          </h4>
          <p className="lsaPara">
            <span className="lsaMain">
              LSA is a combination of Proof of Stake and Proof of Luck
              algorithms.
            </span>
            <br />
            Our is goal is to design a consensus algorithm with:
            <br />
            <ul className="lsaGoals">
              <li className="lsaGoal">
                Energy and network communication efficient protocol.
              </li>
              <li className="lsaGoal">Low latency transaction validation.</li>
              <li className="lsaGoal">
                Less energy consumption with moderate difficulty.
              </li>
              <li className="lsaGoal">Equitably distributed mining.</li>
            </ul>
          </p>
        </div>
        <div className="flowchart">
          <img
            src={chart}
            alt="flow chart"
            width="500"
            height="600"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
