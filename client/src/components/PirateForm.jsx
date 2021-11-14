import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import styles from '../views/Pirates.module.css'

export default (props) => {
    const {initPirate, onSubmitProp, errors} = props
    const [nameError, setNameError] = useState(null);
    const [imgError, setImgError] = useState(null);
    const [phraseError, setPhraseError] = useState(null);
    const [chestError, setChestError] = useState(null);
    const [piratedata, setPirateData] = useState(initPirate)

    const onChangeHandler = (e) => {
        console.log(e.target.name)
        if(e.target.name=="name"){
            if(e.target.value.length > 2 || e.target.value.length == 0){setNameError("")
                }
            else{setNameError("Name must be longer than two characters")}
        }
        if(e.target.name=="img"){
            console.log(imgError)
            if(e.target.value.length > 2 || e.target.value.length == 0){setImgError("")
                }
            else{setImgError("Image URL must be longer than two characters")}
        }
        if(e.target.name=="chests"){
            if(e.target.value >= 0 ){setChestError("")
                }
            else{setChestError("Does this pirate really owe someone chests?")}
        }
        if(e.target.name=="phrase"){
            if(e.target.value.length > 2 || e.target.value.length == 0){setPhraseError("")
                }
            else{setPhraseError("Image URL must be longer than two characters")}
        }
            
        
        if(e.target.type == "checkbox"){
            setPirateData({...piratedata, [e.target.name]: e.target.checked})
        }
        else{
            setPirateData({...piratedata, [e.target.name]: e.target.value})
        }
    }

    const submit = (e) => {
        e.preventDefault();
        onSubmitProp(piratedata);
    }

    return(
        <form onSubmit={ submit }>
            {nameError? <p style={{color:"red"}}>{nameError}</p>:""}
            <label htmlFor="name">Pirate Name: </label>
            <input type="text" onChange={onChangeHandler} name={'name'} value={piratedata.name}/>
            <br/>
            {imgError? <p style={{color:"red"}}>{imgError}</p>:""}
            <label htmlFor="img">Image URL: </label>
            <input type="text" onChange={onChangeHandler} name={'img'} value={piratedata.img}/>
            <br/>
            {chestError? <p style={{color:"red"}}>{chestError}</p>:""}
            <label htmlFor="chests"># of Treasure Chests: </label>
            <input type="number" onChange={onChangeHandler} name={'chests'} value={piratedata.chests}/>
            <br/>
            {phraseError? <p style={{color:"red"}}>{phraseError}</p>:""}
            <label htmlFor="phrase">Pirate Catch Phrase: </label>
            <input type="text" onChange={onChangeHandler} name={'phrase'} value={piratedata.phrase}/>
            <br/>
            <label htmlFor=""></label>
            <select name="position" id="position" value={piratedata.position}onChange={onChangeHandler}>
                <option value="" selected disabled hidden>Choose Position</option>
                <option value="Powder Monkey">Powder Monkey</option>
                <option value="Boatswain">Boatswain</option>
                <option value="Quarter Master">Quarter Master</option>
                <option value="First Mate">First Mate</option>
                <option value="Captain">Captain</option>
            </select>
            <br/>
            <label className={styles.select}>Select Features: </label><br/>
            <input type="checkbox" name="pegLeg" checked={piratedata.pegLeg} onChange={onChangeHandler} />
            <label htmlFor="pegLeg">Peg Leg</label><br/>
            <input type="checkbox" name="eyePatch" checked={piratedata.eyePatch} onChange={onChangeHandler} />
            <label htmlFor="eyePatch">Eye Patch</label><br/>
            <input type="checkbox" name="hook" checked={piratedata.hook} onChange={onChangeHandler} />
            <label htmlFor="hook">Hook Hand</label>
            <br/><br/>
            <input type="submit" value={"Submit"}/>
            {errors.map((err, i) => <p key={i} style={{color:"red"}}>{err}</p>)}
        </form>
    )
}