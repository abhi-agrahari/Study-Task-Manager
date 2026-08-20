function TaskCard(props){

    const { title, subject, estimatedTime, status, taskKey, deleteTask, markComplete } = props

    const handleDelete = (() => {
        deleteTask(taskKey)
    })

    const handleStaus = (() => {
        markComplete(taskKey)
    })

    return (
        <div>
            <div>
                <h3>{title}</h3>
                <p> {subject} </p>
                <p> {estimatedTime} </p>
                <p> {status} </p>
            </div>
            <div>
                <button onClick={handleStaus} > Completed </button>
                <button onClick={handleDelete}> Deleted </button>
            </div>
        </div>
    )
}

export default TaskCard