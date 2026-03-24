import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './routines.module.scss';
import { useApi } from '../../Components/Api/api';

function Routines(){
    const {savedRoutines, setSavedRoutines, exercises, types, routineList, setRoutineList, routineTitle, setRoutineTitle} = useApi();
    const [popUp, setPopUp] = useState(false);
    const [filter, setFilter] = useState('all');
    const filtered = filter === 'all' ? exercises : exercises.filter(x => x.part === filter);
    
  //console.log(exercises)
    const add = (exercise) => {
      setSavedRoutines(prev => {
        if (prev.length === 0) {
          return [
            {
              id: exercise.id,
              name: "temp routine",
              exercise: [exercise]
            }
          ];
        }
    
        const routine = prev[0];
    
        return [
          {
            ...routine,
            exercise: [...routine.exercise, exercise]
          }
        ];
      });
    };
    const done = () => {
      if (savedRoutines.length === 0) return;

      const routine = savedRoutines[0];

      setRoutineList(prev => [
        ...prev,
        {
          id: prev.id,
          name: routineTitle,
          exercise: routine.exercise
        }
      ]);

      setSavedRoutines([]);
      setRoutineTitle('');
      setPopUp(false);
    };
    return (
        <>
            <div className={styles.routines}>
                {routineList?.length > 0 ? routineList?.map((x,i) => (
                    <article className={styles.routineArticle} key={i}>
                        <details>
                            <summary>{x.name}</summary>
                            <p key={x.id}>{x.exercise.map(e => e.name).join(' ⏐ ')}</p>
                        </details>
                        <Link to={`/${i}`}>Start</Link>
                    </article>
                    
                )) : 
                    <article  key={1} className={styles.createFirst}>
                            <p>create your first routine</p>
                            <button onClick={() => setPopUp(true)}>tap to get started</button>
                    </article>
                }

                {routineList?.length > 0 ? <button className={styles.createNewButton} onClick={() => setPopUp(true)}>create new</button> : ""}

                {popUp && (
                    <div className={styles.popUp}>
                      
                        <div className={styles.popUpHeader}>
                          <input type="text" placeholder="routine name" value={routineTitle} onChange={(e) => setRoutineTitle(e.target.value)}/>
                          <button onClick={done} className={styles.close} >Add Routine</button>
                        </div>

                        <nav>
                            <ul className={styles.popUpNav}>
                                {types?.types?.map(x => (
                                    <li key={x.type}>
                                        <button onClick={() => setFilter(x.type)}>{x.type}</button>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <ul className={styles.popUpList}>
                            {filtered?.map(x => (
                                <li key={x.id}>
                                    <img alt={x.name} src={x.image} height="30px"/>
                                    {x.name}
                                    
                                    <button onClick={(e) => {add(x); e.target.innerText = '-'}} className={styles.add}>+</button></li>
                            ))}
                        </ul>

                    </div>
                )}


            </div>
        </>
    )
};

export default Routines;
