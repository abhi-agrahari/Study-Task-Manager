import './TaskCard.css'

function TaskCard(props){

    const { title, subject, estimatedTime, status, taskKey, deleteTask, markComplete } = props

    const handleDelete = (() => {
        deleteTask(taskKey)
    })

    const handleStaus = (() => {
        markComplete(taskKey)
    })

    return (
        <div className='task-card-container'>
            <div className='task-info'>
                <h3>{title}</h3>
                <p>Subject : {subject} </p>
                <p>Estimated Time : {estimatedTime} </p>
                <p>Status : {status} </p>
            </div>
            <div className='task-buttons'>
                <button onClick={handleStaus} className='complete-btn' > Completed </button>
                <button onClick={handleDelete} className='delete-btn'> Delete </button>
            </div>
        </div>
    )
}

export default TaskCard