import { useState } from "react"

function TaskForm({ formData, setFormData, addTask }){

    //const [formData, setFormData] = useState({})

    const handleChange = ((event) => {
        const {name, value} = event.target

        setFormData({
            ...formData,
            [name] : value
        })
    })

    const handleSubmit = ((event) => {
        event.preventDefault()

        addTask()

        console.log(formData)
    })

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                onChange={handleChange}
            />
            <input
                type="text"
                name="subject"
                placeholder="Subject"
                onChange={handleChange}
            />
            <input
                type="text"
                name="estimatedTime"
                placeholder="Estimated Time"
                onChange={handleChange}
            />

            <button type="submit"> Add Task </button>
        </form>
    )
}

export default TaskForm