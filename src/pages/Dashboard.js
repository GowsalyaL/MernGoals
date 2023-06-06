import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import GoalForm from '../components/GoalForm'
import Spinner from '../components/Spinner'
import { getGoal, reset } from '../features/goal/goalSlice'
import GoalItem from '../components/GoalItem'

const Dashboard = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const { user } = useSelector((state) => state.auth)

  const { goals, isLoading, isError, message } = useSelector((state) => state.goals)

  console.log(goals)
  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    if (user == null) {
      navigate('/')
    }

    dispatch(getGoal());

    return () => dispatch(reset())

  }, [user, isError, dispatch, message, navigate])
  if (isLoading) {
    <Spinner />
  }
console.log(goals.length)
  return (
    <div>
      <section className="heading">
        {
          user ? <h1>Welcome {user.name} </h1> : ""
        }
      </section>
      <GoalForm />
      <section className='content'>
        {
          goals.length === 0 ? <h1> No goals is created</h1> : goals.map((goal) => { return <GoalItem key={goal._id} goal={goal} /> })
        }

      </section>
    </div>
  )
}

export default Dashboard