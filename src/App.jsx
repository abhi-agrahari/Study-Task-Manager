import { useState } from 'react'
import './App.css'
import TaskCard from './components/TaskCard'

function App() {

  const tasks = [
    {
      "title" : "task1",
      "subject" : "react",
      "estimatedTime" : "2hr",
      "status" : "pending"
    },
    {
      "title" : "task2",
      "subject" : "javascript",
      "estimatedTime" : "3hr",
      "status" : "pending"
    }
  ]

  return (
    <>
      <h1> Study Task Manager </h1>

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
