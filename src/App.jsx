import { useEffect, useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard'
import TaskForm from './components/TaskForm'

function App() {

  const [tasks, setTasks] = useState([])

  const [formData, setFormData] = useState({})

  const addTask = () => {
    setTasks((prev) => [
      ...prev,
      formData
    ])

    console.log(tasks)
  }
 
  return (
    <>
      <h1> Study Task Manager </h1>

      <TaskForm formData={formData} setFormData={setFormData} addTask={addTask} />

      {
        tasks.map((task) => (
          <TaskCard
            title = {task.title}
            subject = {task.subject}
            estimatedTime = {task.estimatedTime}
            status = {task.status}
            key = {crypto.randomUUID()}
          />
        ))
      }
    </>
  )
}

export default App
