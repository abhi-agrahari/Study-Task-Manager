import { useState } from "react"
import './TaskForm.css'

function TaskForm({ addTask }){

    const [formData, setFormData] = useState({
        title: "",
        subject: "",
        estimatedTime: ""
    })

    const handleChange = ((event) => {
        const {name, value} = event.target

        setFormData({
            ...formData,
            [name] : value
        })
    })

    const handleSubmit = ((event) => {
        event.preventDefault()

        if(formData.title.trim() === "" ||
            formData.subject.trim() === "" ||
            formData.estimatedTime.trim() === ""){
                return
        }

        const now = new Date();

        const createdAt = now.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }) + ', ' + now.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
        })

        addTask({
            ...formData,
            key : crypto.randomUUID(),
            status : "pending",
            createdAt : createdAt
        })

        setFormData({
            title: "",
            subject: "",
            estimatedTime: ""
        })
    })

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
            />
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
            />
            <input
                type="text"
                name="estimatedTime"
                placeholder="Estimated Time"
                value={formData.estimatedTime}
                onChange={handleChange}
            />

            <button type="submit"> Add Task </button>
        </form>
    )
}

export default TaskForm