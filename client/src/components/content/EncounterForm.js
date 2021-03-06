import React, { useState } from "react";
import ErrorList from "../layout/ErrorList"
import translateServerErrors from "../../services/translateServerErrors"
import { Link } from "react-router-dom";

import fractionConversion from "../converters/fractionConversion.js";

const EncounterForm = (props) => {
  const [encounterName, setEncounterName] = useState("")
  const [errors, setErrors] = useState([])
  const encounterArray = props.encounterArray
  const challengeRating = props.challengeRating
  const convertedCR = fractionConversion(challengeRating)

  const handleInputChange = event => {
    setEncounterName(event.currentTarget.value)
  }

  const submitForm = async (name, encounter, user) => {
    try {
      const response = await fetch("/api/v1/encounters", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json"
        }),
        body: JSON.stringify({ name: name, encounter: encounter, user: user })
      })
      if (!response.ok) {
        if (response.status === 422) {
          const body = await response.json()
          const newErrors = translateServerErrors(body.errors)
          return setErrors(newErrors)
        } else {
          const errorMessage = `${response.status} (${response.statusText})`
          const error = new Error(errorMessage)
          throw (error)
        }
      }
      else {
        const body = await response.json()
        location.href = "/encounters"
      }
    } catch (error) {
      console.error("Error in Form: ", error)
    }
  }

  const clearForm = () => {
    setEncounterName("")
    encounterArray = null
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    submitForm(encounterName, props.encounterCreatures, props.user)
    clearForm()
  }

  let submitButton = <Link className="link" to="/user-sessions/new"><p className="encounterSubmit">Log in to save Encounter</p></Link>
  if (props.user) {
    submitButton = <input type='submit' />
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="cr">
          Total CR: {convertedCR}
        </div>
        <label className="formName" htmlFor='name'>Encounter Name:</label>
        <input
          className="field"
          type='text'
          name='name'
          id='name'
          onChange={handleInputChange}
          value={encounterName}
        />
        {encounterArray}
        {submitButton}
      </form>
    </div>
  )
}

export default EncounterForm