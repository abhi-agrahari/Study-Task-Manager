function TaskCard(props){

    const {title, subject, estimatedTime, status} = props

    return (
        <div>
            <div>
                <h3>{title}</h3>
                <p> {subject} </p>
                <p> {estimatedTime} </p>
                <p> {status} </p>
            </div>
            <div>
                <button> Completed </button>
                <button> Deleted </button>
            </div>
        </div>
    )
}

export default TaskCard