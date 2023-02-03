import { useState } from "react"

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'doctor appointment',
      day: 'feb 5th at 2pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'metting at school',
      day: 'feb 6th at 2pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'food shopping',
      day: 'feb 5th at 4pm',
      reminder: false,
    }
  ])
  return (
    <>
      {tasks.map((task) => (
      <h3 key={task.id}>{task.text}</h3>)
      )}
    </>
  )
}

export default Tasks
