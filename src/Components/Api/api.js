import React, {useState, useEffect, createContext, useContext} from 'react';

const ApiContext = createContext();

export function ApiProvider({children}){
    //Exercise page state
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        async function getExercises(){
            const response = await fetch('data.json');
            const result = await response.json();
            //console.log(result.data);
            setExercises(result.data)
        }
        getExercises()
    }, [])
    //Routine page state
    const [savedRoutines, setSavedRoutines] = useState([
        /*{
            id:'1',
            name:'routine one',
            exerciseList:['one', "two", "three"]
        },
        {
            id:'2',
            name:'routine two',
            exerciseList:['one', "two", "three"]
        },
        {
            id:'3',
            name:'routine three',
            exerciseList:['one', "two", "three"]
        }*/
    ]);
    const [types, setTypes] = useState([]);
    useEffect(() => {
        async function getTypes(){
            const response = await fetch(`types.json`);
            const result = await response.json();
            setTypes(result)
        }
        getTypes()
    }, [])
    const [routineList, setRoutineList] = useState([]);
    const [routineTitle, setRoutineTitle] = useState('');
    const [timer, setTimer] = useState(0);
    const [timeSum, setTimeSum] = useState(0);
    //Workout Page State
    const [repCount, setRepCount] = useState(0);
    const [setCount, setSetCount] = useState(0);
    //History Page State
    const [minutes, setMinutes] = useState(0);

    return(
        <ApiContext.Provider
            value={{repCount, setRepCount, setCount, setSetCount, exercises, savedRoutines, setSavedRoutines, types, routineList, setRoutineList, routineTitle, setRoutineTitle, minutes, setMinutes, timer, setTimer, timeSum, setTimeSum}}    
        >
            {children}
        </ApiContext.Provider>
    )
}

export function useApi(){
    return useContext(ApiContext);
}