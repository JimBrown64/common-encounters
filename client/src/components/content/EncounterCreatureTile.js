import React, { useState } from "react"

const EncounterCreatureTile = (props) => {
  const creature = props.creature

  const [visible, setVisible] = useState("hide")

  const clickHandler = () => {
    if (visible === "hide") {
      setVisible("show")
    } else {
      setVisible("hide")
    }
  }

  const removeHandler = () => {
    props.removeEncounterCreature(creature.id)
  }

  return (
    <div className="container">
      <h3 onClick={clickHandler} >
        CR:{creature.CR}  {creature.name}
      </h3>
      <div className={`encounterStatBlock ${visible}`}>
        <div className="topStats">
          <p className="gap">
            HP:{creature.HP}
          </p>
          <p className="gap">
            AC:{creature.AC}
          </p>
          <p className="gap">
            speed:{creature.speed}
          </p>
        </div>
        <div className="statList">
          <div className="statList">
            <div className="half">
              <p>
                Str:{creature.str}
              </p>
              <p>
                Dex:{creature.dex}
              </p>
              <p>
                Con:{creature.con}
              </p>
            </div>
            <div className="half">
              <p>
                Int:{creature.int}
              </p>
              <p>
                Wis:{creature.wis}
              </p>
              <p>
                Cha:{creature.cha}
              </p>
            </div>
          </div>
          <div className="statList">
            <div className="half">
              <p>
                Str save:{creature.strSave}
              </p>
              <p>
                Dex save:{creature.dexSave}
              </p>
              <p>
                Con save:{creature.conSave}
              </p>
            </div>
            <div className="half">
              <p>
                Int save:{creature.intSave}
              </p>
              <p>
                Wis save:{creature.wisSave}
              </p>
              <p>
                Cha save:{creature.chaSave}
              </p>
            </div>
          </div>
        </div>
        <p className="actions">
          actions:{creature.actions}
        </p>
        <button className="encounterSubmit" type="button" onClick={removeHandler}>Remove from Encounter</button>
      </div>
    </div>
  )
}

export default EncounterCreatureTile