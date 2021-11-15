import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useHistory, Link} from 'react-router-dom';
import styles from './Pirates.module.css'
import PirateForm from '../components/PirateForm';


export default () => {
    const history = useHistory();
    const [errors, setErrors] = useState([])
    const [ initPirate, setInitPirate ] = useState({
        name: "",
        img: "https://i.pinimg.com/originals/a0/ed/e9/a0ede949858e13e0abd61d74747b1526.jpg",
        chests: "",
        phrase: "",
        position: null,
        pegLeg: true,
        eyePatch: true,
        hook: true,
    })
    
    const createPirate = (pirate) => {
        axios.post(`http://localhost:8000/api/pirates/new`, pirate)
        .then(res => {
            console.log(res);
            history.push('/pirates')
        })
        .catch(err => {
            console.log(err)
            const errorResponse = err.response.data.errors
            const errorArr = [];
            for(const key in errorResponse){
                errorArr.push(errorResponse[key].message)
                console.log("errorArr", errorArr)
            }
            setErrors(errorArr)});
    }

    
    return (
        <>
            <div className={styles.header}>
                <h2>Add Pirate</h2>
                <div className={styles.fixedNav}>
                    <Link to={`/pirates`}>
                        <button>
                            Home
                        </button>
                    </Link>
                </div>
            </div>
            <div className={styles.main}>
                
                <div className={styles.container}>
                    <PirateForm initPirate={initPirate} onSubmitProp={createPirate} errors={errors}/>
                </div>
            </div>

        </>
    )
}