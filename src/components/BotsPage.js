import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import {useEffect, useState} from 'react'

function BotsPage() {
  //start here with your code for step one

  const [allBots, setAllBots] = useState([])
  const [party, setParty] = useState([])

  useEffect (()=> {
    const request = async() => {
      let req = await fetch("http://localhost:8002/bots")
      let res = await req.json()
      setAllBots(res)
    }
    request()
  },[])

  const addBots = (bots) => {
    //console.log('clicked')
    if (party.includes(bots)) return
    setParty([...party, bots])
  }

  const releaseBot = (bots) => {
    console.log('released')
    setParty((prevState) => {
      return([...prevState.filter((p)=> p.id !== bots.id)])
    })
  }

  return (
    <div>
      <YourBotArmy party={party} releaseBot={releaseBot} />
      <BotCollection allBots={allBots} addBots={addBots} setAllBots={setAllBots} setParty={setParty}/>
    </div>
  )
}

export default BotsPage;
