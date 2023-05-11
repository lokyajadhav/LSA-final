/*
Join the MINING
    - Needs to put minimum stake
    - Add to owners array
l
Mining Mechanism
    - Miners(3) will be selected randomly from owners
    - First miner calculates Block hash,verifies data and broadcasts.
    (If first is not available or does any mistake, next subsequent miner will mine the block)

Verification Mechanism
    - Validators will verify the broadcasted block(by miner) by verifying the previous block hash 
        and re-calculating the broadcasted block's hash.
*/

//code : 

//imports 
const prompt = require("prompt-sync")();
const SHA256 = require("crypto-js/sha256");

//varibles
let owners = [];
let miners = [];
let blockMiner;

//classes
class Block{
    constructor(index,timestamp,data,blockMiner,previousHash=" ")
    {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.computeHash();
        this.miner = blockMiner;
    }

    computeHash() {
        return SHA256(
            this.index +
            this.previousHash +
            this.timestamp +
            JSON.stringify(this.data)
        ).toString();
    }
}

let chainSize = 0;

class Blockchain{
    constructor()
    {
        this.blockchain = [this.startGenesisBlock()];
    }

    startGenesisBlock() 
    {
        return new Block(0, "01/10/2022", "Initial Block in the Chain", "0");
    }

    obtainLatestBlock() 
    {
        return this.blockchain[this.blockchain.length - 1];
    }
 
    addNewBlock(blockMiner,newBlock) 
    {
        if(blockMiner==this.blockMiner)
        {
            chainSize = chainSize+1;
            newBlock.previousHash = this.obtainLatestBlock().hash;
            newBlock.hash = newBlock.computeHash();
            this.blockchain.push(newBlock);
        }        
    }

    printChain()
    {
        let i=0;
        while(i<=chainSize)
        {
            console.log(this.blockchain[i]);
            i++;
        }
    }

    checkChainValidity() 
    {
        for (let i = 1; i < this.blockchain.length; i++) 
        {
            const currentBlock = this.blockchain[i];
            const previousBlock = this.blockchain[i - 1];

            if (currentBlock.hash !== currentBlock.computeHash()) {
                return false;
            }
            if (currentBlock.previousHash !== previousBlock.hash) 
                return false;
        }
        return true;
    }
}

let Chain = new Blockchain();

const JoinMining = () => {
    // console.log("join mining function");
    let ownersLength = prompt("Enter no.of miners: ");
    let i=0;
    while(ownersLength>0)
    {
        i=i+1;
        let minerName = prompt(`Enter owner ${i} name: `);
        let stakedAmount = prompt(`Enter owner ${i} stake: `);
        // console.log("you staked " + stakedAmount);
        if(stakedAmount>100 && minerName!=null)
        {
            owners.push(minerName);
        }
        ownersLength--;
    }
}
JoinMining();

const selectMiners = () =>{
    console.log("selecting miners...");
    let randomNumber1 = Math.floor(Math.random() * 10);
    let randomNumber2 = Math.floor(Math.random() * 10);
    let randomNumber3 = Math.floor(Math.random() * 10);
    let randomNumber4 = Math.floor(Math.random() * 10);
    miners.push(owners[randomNumber1]);
    miners.push(owners[randomNumber2]);
    miners.push(owners[randomNumber3]);
    miners.push(owners[randomNumber4]);
}

const broadcastBlock = (blockHash) =>{
    console.log("broadcasted blockhash is "+ blockHash);
}

const startMining = (miners) =>{
    if(miners.length>0)
    {
        blockMiner = miners[0];
        Chain.addNewBlock(blockMiner,
            new Block(1, "01/06/2020", {
            sender: "Iris Ljesnjanin",
            recipient: "Cosima Mielke",
            quantity: 50
            },blockMiner)
        );
        let blockHash = Chain.obtainLatestBlock().hash;
        broadcastBlock(blockHash);
    }
}

const Mine = () => {
    //select 4 miners randomly
    selectMiners();
    console.log("selected miners are : ");
    console.log(miners);
    startMining(miners);
}
Mine();

const PrintChain = () =>{
    // let chainId=0;
    // while(chainId<chainSize)
    // {
    //     console.log(Chain.obtainLatestBlock());
    //     chainId=chainId+1;
    // }
    console.log("printing chain...");
    Chain.printChain();
}
PrintChain();

//day 2 ended here