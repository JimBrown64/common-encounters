import React, { useState } from "react"

const CreatureTile = (props) => {
  const creature = props.creature
  const id = creature.id

  const [visible, setVisible] = useState("hide")

  const clickHandler = () => {
    if (visible === "hide") {
      setVisible("show")
    } else {
      setVisible("hide")
    }
  }

  const addHandler = () => {
    props.addEncounterCreature(id)
  }

  return (
    <div className="container">
      <h3 onClick={clickHandler} >
        CR:{creature.CR}  {creature.name}
      </h3>
      <div className={`stat-block ${visible}`}>
        <div className="stats">
          <p>
            HP:{creature.HP}
          </p>
          <p>
            AC:{creature.AC}
          </p>
          <p>
            speed:{creature.speed}
          </p>
        </div>
        <div className="stats">
          <div className="stats">
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
          <div className="stats">
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
        <button type="button" onClick={addHandler}>Add to Encounter</button>
      </div>
    </div>
  )
}

export default CreatureTile