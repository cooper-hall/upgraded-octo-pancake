import React from "react";
import BotCard from "./BotCard";

function BotCollection({allBots, addBots, setAllBots, setParty}) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        Collection of all bots
        {
          allBots.map((units) =>{
            return(
              <div onClick={()=> {addBots(units)}}>
                <BotCard bot={units} setAllBots={setAllBots} setParty={setParty}/>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default BotCollection;
