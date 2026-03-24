import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './exercises.module.scss';
import { useApi } from '../../Components/Api/api';

function Exercises(){
    const {exercises} = useApi();
    const [selectedType, setSelectedType] = useState('calisthenic');
    
    console.log(selectedType)
    console.log(exercises)
    return (
        <>
            <div className={styles.exercises}>
                <header className={styles.exercisesHeader}>
                    <h2>Exercises</h2>
                    <p>browse and explore</p>
                </header>
                <nav className={styles.searchNav}>
                    <ul>
                        <li><button onClick={() => setSelectedType('calisthenic')} className={selectedType === 'calisthenic' ? styles.active : styles.inactive}>all</button></li>
                        <li><button onClick={() => setSelectedType('arms')} className={selectedType === 'arms' ? styles.active : styles.inactive}>arms</button></li>
                        <li><button onClick={() => setSelectedType('chest')} className={selectedType === 'chest' ? styles.active : styles.inactive}>chest</button></li>
                        <li><button onClick={() => setSelectedType('neck-shoulder')} className={selectedType === 'neck-shoulder' ? styles.active : styles.inactive}>neck/shoulder</button></li>
                        <li><button onClick={() => setSelectedType('core')} className={selectedType === 'core' ? styles.active : styles.inactive}>core</button></li>
                        <li><button onClick={() => setSelectedType('back')} className={selectedType === 'back' ? styles.active : styles.inactive}>back</button></li>
                        <li><button onClick={() => setSelectedType('thighs')} className={selectedType === 'thighs' ? styles.active : styles.inactive}>thighs</button></li>
                        <li><button onClick={() => setSelectedType('glutes')} className={selectedType === 'glutes' ? styles.active : styles.inactive}>glutes</button></li>
                        <li><button onClick={() => setSelectedType('calves')} className={selectedType === 'calves' ? styles.active : styles.inactive}>calves</button></li>
                        <li><button onClick={() => setSelectedType('full')} className={selectedType === 'full' ? styles.active : styles.inactive}>full</button></li>
                    </ul>
                </nav>
                <div className={styles.exercisesList}>
                    <ul>
                        {exercises?.map(x => {
                            if(x.type === selectedType){
                                return <li key={x.id}>
                                            <Link>
                                                <img alt={x.name} src={x.image} width="50px" height="50px"/>
                                                <p>{x.name}</p>
                                            </Link>
                                        </li>
                            } else{
                                if(x.part === selectedType){
                                    return <li key={x.id}>
                                                <Link>
                                                    <img alt={x.name} src={x.image} width="50px" height="50px"/>
                                                    <p>{x.name}</p>
                                                </Link>
                                            </li>
                                }
                            }
                            return null;
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
};

export default Exercises
