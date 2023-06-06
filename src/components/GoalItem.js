import React from 'react'
import { deleteGoal} from '../features/goal/goalSlice';
import { useDispatch } from 'react-redux';

const GoalItem = ({ goal }) => {

    const dispatch = useDispatch()  

    return (
        <div className='goal'>
            
                    <div>
                        <div>{new Date(goal.createdAt).toLocaleString("en-US")}</div>
                        <div><h1>{goal.text}</h1></div>
                        <button className='close' onClick={() => dispatch(deleteGoal(goal._id))}>X</button>
                    </div>
            
        </div>
    )
}

export default GoalItem