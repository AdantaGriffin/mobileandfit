import styles from './workout.module.scss';
import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import { useApi } from '../../Components/Api/api';

function Workout(){
    const navigate = useNavigate();
    const {setCount, repCount, setSetCount, setRepCount, routineList, setMinutes, timer, setTimer, setTimeSum} = useApi();
    const {i} = useParams();
    //console.log(routineList[i].exercise)
    const [on, setOn] = useState(false);

    console.log("set count" + setCount, "rep Count" + repCount)
    useEffect(() => {
        if(!on) {
            return
        };
        const interval = setInterval(() => {
            setTimer(prev => prev + 1);
        }, [1000]);
        return () => clearInterval(interval);
    }, [on, setTimer])
    const start = (e) => {
        setOn(prev => !prev);
        if(!on){
            e.target.innerText = "pause";
        } else{
            e.target.innerText = 'start'
        }
    }
    const done = () => {
        setOn(false);
        setMinutes(prev => prev + timer);
        setTimeSum(prev => prev + timer)
        setTimer(0);
        setSetCount(prev => prev + 1);
        navigate('/')
    }
    const rep = (e) => {
        setRepCount(prev => prev + Number(e.target.value));
        e.target.style.border = "2px solid green";
    }
    return(
        <>
         <div className={styles.workoutContainer}>
            <div className={styles.workoutListContainer}>
                <header>
                    <h2>{routineList[i]?.name}</h2>
                    <div>{timer/60 < 1 ? 0 : Math.floor(timer / 60)}:{timer%60 < 10 ? "0" + timer%60 : timer%60}</div>
                </header>

                <div className={styles.quote}>
                    <i>"Today is just another day one, keep grinding!"</i>
                </div>

                <ul className={styles.workoutList}>
                    {routineList[i]?.exercise?.map(x => (
                        <li key={x.id}>
                            {x.name}
                            <div className={styles.workoutListButtons}>
                                <div className={styles.repNumberCount}>
                                    <button value={10} onClick={rep}>10</button>
                                    <button value={15} onClick={rep}>15</button>
                                    <button value={20} onClick={rep}>20</button>
                                    <button value={25} onClick={rep}>25</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                
                <div className={styles.workoutButtons}>
                    <button onClick={start}><img alt='play/pause button' src='./play-button.png'/></button>
                    <button onClick={done}><img alt='stop button' src='./stop.png'/></button>
                </div>
            </div>

         </div>
        </>
    )
};

export default Workout;