import { useState } from "react"
import Header from "./components/Header"
import Tasks from "./components/Tasks"


const  App = () =>{
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

  const deleteTask = (id) => {
   setTasks(tasks.filter((task) => task.id !==id))
  }
  return (
    <div className="container">
      <Header/>
      <Tasks tasks = {tasks} onDelete=
      {deleteTask}/>
    </div>
  )
}

export default App;
