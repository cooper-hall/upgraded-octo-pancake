import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, setAllBots, setParty }) {

   const dischargeBot = async (bot) => {
     let req = await fetch(`http://localhost:8002/bots/${bot.id}`, {
       method: "DELETE",
     });
     // in the directions it says Delete just from YourArmy, but 
     // below is how to delete robot from Collection as well (since we are getting rid of them forever)
     
    //  setAllBots((prevState) => {
    //    return [...prevState.filter((k) => k.id !== bot.id)];
    //  });
    
     setParty ((currentState)=> {
      return [...currentState.filter((m)=> m.id !== bot.id)]
     })
   };

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        // onClick={() => console.log("add code to connect event listener")}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={() => { dischargeBot (bot)}
                  // console.log("im ready to die")
                }
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
