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

  // delete Task
  const deleteTask = (id) => {
   setTasks(tasks.filter((task) => task.id !==id))
  }

//Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, reminder : ! task.reminder } :task
    )
  )
}

  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? (
        <Tasks 
          tasks = {tasks} 
          onDelete={deleteTask} 
          onToggle = {toggleReminder}/>
      ) : ( 
          'No Tasks to show'
      )}
    </div>
  )
}

export default App;
