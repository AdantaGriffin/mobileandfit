import React from 'react';
import styles from './history.module.scss';
import { useApi } from '../../Components/Api/api';

function History(){
    const {timeSum, setCount, repCount} = useApi();
    return(
        <>
            <div className={styles.history}>
                <div className={styles.historyResults}>
                    <div>
                        <div>workouts</div>
                        <div>{setCount}</div>
                    </div>
                    <div>
                        <div>minutes</div>
                        <div>{timeSum/60 < 1 ? 0 :( Math.floor(timeSum / 60))}:{timeSum%60 < 10 ? "0" + timeSum%60 : timeSum%60}</div>
                    </div>
                    <div>
                        <div>sets</div>
                        <div>{repCount}</div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default History;
