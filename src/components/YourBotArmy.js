import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ party, releaseBot }) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {
            party.map((bot) => {
              return(
                <div onClick={()=>{releaseBot(bot)}} >
                  <BotCard bot={bot}/>
                  {/* could also just add the img of bot with <img src={bot.avatar_url} */}
                  {/* realized in the gif, they wanted the card though */}
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
