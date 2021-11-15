import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import styles from './Pirates.module.css'
import Delete from '../components/Delete';
import pin from '../components/imgs/pin.png'

export default () => {
    const [ pirates, setPirates ] = useState([])
    const [ updated, setUpdated ] = useState(false)
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pirates`)
        .then(res=> {console.log(res); setPirates(res.data)})
        .catch(err=> console.log(err));
    }, [updated]);

    const removeFromDom = () => {
        console.log("this ran")
        setUpdated(!updated);
    }
    
    const alphabetize = (pirates) => {
        return pirates.sort( function (a, b) {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if(nameA < nameB){ 
                return -1;
            }
            if(nameA > nameB) {
                return 1;
            }
            return 0
        })
}

    return (
        <div>
            <div className={styles.header}>
                <h2>Pirate Crew</h2>
                <div className={styles.fixedNav}>
                    <Link to={`/pirates/new`}>
                        <button> Add Pirate 🏴‍☠️</button> 
                    </Link>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.noFlexcontainer}>
                    {alphabetize(pirates).map((pirate, i) =>
                        <div className={styles.center}>
                            <img className={styles.pin} src={pin} alt="pin" />
                            <div className={styles.pirateCard}>
                                <div className={styles.cardLeft}>
                                    <img className={styles.mainImg} src={pirate.img} alt={`${pirate.name}'s profile picture`}/>
                                </div>
                                <div className={styles.cardRight}>
                                    <div className={styles.cardContent}>
                                        
                                        <h2>{pirate.name}</h2>
                                        <Link to={`/pirates/view/${pirate._id}`}>
                                            <button>View Pirate</button>
                                        </Link>
                                        <Delete id={pirate._id} successCallBack={removeFromDom}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>    
        </div>
    )
}