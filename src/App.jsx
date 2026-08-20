import { useEffect, useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard'
import TaskForm from './components/TaskForm'

function App() {

  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks((prev) => [
      ...prev,
      task
    ])
  }

  const deleteTask = (key => 
    setTasks((prev) =>
      prev.filter(task => task.key !== key)
    )
  )

  const markComplete = ((key) => {
    setTasks((prev) => {
      const updatedTasks = prev.map((task) => {
        if(task.key === key){
          const updatedTask = {
            ...task,
            status : "completed"
          }

          return updatedTask
        }

        return task
      })

      return updatedTasks
    })
  })
 
  return (
    <>
      <h1> Study Task Manager </h1>

      <TaskForm addTask={addTask} />

      {
        tasks.map((task) => (
          <TaskCard
            title = {task.title}
            subject = {task.subject}
            estimatedTime = {task.estimatedTime}
            status = {task.status}
            key = {task.key}
            taskKey = {task.key}
            deleteTask = {deleteTask}
            markComplete = {markComplete}
          />
        ))
      }
    </>
  )
}

export default App
