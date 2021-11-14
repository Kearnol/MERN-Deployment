import React from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import styles from '../views/Pirates.module.css'

export default (props) => {
    const {id, successCallBack} = props
    const history = useHistory();

    const deletePirate = (id) => {
        let result = window.confirm("You are about to make this pirate walk the plank. Their hands will be bound and the all mighty sea will hold their final fate... there is a slim chance they survive this. Do you wish to continue?")
        if(result){
            axios.delete(`http://localhost:8000/pirates/${id}`)
            .then(
                deletedPirate => {console.log(deletedPirate);
                history.push('/pirates');
                }
            )
            .catch(err => console.log(err))
        } else{return}

    }

    const click = () =>{
        deletePirate(id);
        successCallBack();
    }

    return(
        <button className={styles.woodBtn} onClick={ click } >Walk the Plank</button>
    )
}