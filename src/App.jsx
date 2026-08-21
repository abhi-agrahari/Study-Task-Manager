import { useEffect, useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard'
import TaskForm from './components/TaskForm'

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks")

    if(savedTasks){
      return JSON.parse(savedTasks)
    }

    return []
  })

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

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

  const handleTheme = (() => {
    let prev = darkMode;
    setDarkMode(!prev)
  })
 
  return (
    <>
      <div className={darkMode?'dark-mode':'light-mode'}>
        <div className='nav-bar'>
          <h1> Study Task Manager </h1>

          <button className='theme-btn' onClick={handleTheme}> {darkMode ? "Light Mode" : "Dark Mode"} </button>
        </div>

        <TaskForm addTask={addTask} />

        <div  className='task-cards'>
          {
            tasks.map((task) => (
              <TaskCard
                title = {task.title}
                subject = {task.subject}
                estimatedTime = {task.estimatedTime}
                status = {task.status}
                createdAt = {task.createdAt}
                key = {task.key}
                taskKey = {task.key}
                deleteTask = {deleteTask}
                markComplete = {markComplete}
              />
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
