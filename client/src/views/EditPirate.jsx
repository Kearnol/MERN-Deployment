import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useParams, useHistory, Link} from 'react-router-dom';
import styles from './Pirates.module.css'
import PirateForm from '../components/PirateForm';


export default () => {
    const history = useHistory();
    const [ initPirate, setInitPirate ] = useState([])
    const {id} = useParams();
    const [ updated, setUpdated ] = useState(false)
    const [errors, setErrors] = useState([])
    

    useEffect(()=>{
        axios.get(`http://localhost:8000/pirates/${id}`)
        .then(res => {
            console.log(res.data);
            setInitPirate(res.data);
            setUpdated(true);
        })
        .catch(err=> console.log(err))
    },[])

    const updatePirate = (pirate) => {
        axios.put(`http://localhost:8000/pirates/${id}`, pirate)
        .then(res => {
            console.log(res);
            history.push(`/pirates/view/${id}`)
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
            {updated?
            <>
                <div className={styles.header}>
                    <h2>Edit Pirate</h2>
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
                    <PirateForm initPirate={initPirate} onSubmitProp={updatePirate} errors={errors}/>
                </div>
            </div>
            </>:""
                
            }

        </>
    )
}