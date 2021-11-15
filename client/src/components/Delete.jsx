import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import styles from '../views/Pirates.module.css'

export default (props) => {
    const {id, successCallBack} = props
    const history = useHistory();

    const deletePirate = (id) => {
            axios.delete(`http://localhost:8000/api/pirates/${id}`)
            .then(
                deletedPirate => {console.log(deletedPirate);
                successCallBack();
                history.push('/pirates');
                }
            )
            .catch(err => console.log(err))
    }

    const click = () =>{
        deletePirate(id);
        successCallBack();
    }

    return(
        <button className={styles.woodBtn} onClick={ click } >Walk the Plank</button>
    )
}