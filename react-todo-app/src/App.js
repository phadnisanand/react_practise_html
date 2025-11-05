import { useEffect, useState } from 'react';
import '../src/App.css';
import '../src/Style.css';

function App() {
   const [task, setTask] = useState('');
   const [text, setText] = useState('');
   const [tasks, setTasks] = useState([]);
   const [taskAddForm, setTaskAddForm]= useState(true);
   const [taskEditForm, setTaskEditForm]= useState(false);

   // add form
    const addForm = async (e) => {
      e.preventDefault();
      if(!text)  {
        alert('Task can not be blank');
        return;
      }

      const formData = {
        title: text,
        status: 'active'
      }
      
      const res= await fetch('http://localhost:3000/task' , {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      });

      const data = await res.json();
        setTasks([...tasks, data]);
        setText('');
    }

  // update form
  const updateForm = async (e) => {
    e.preventDefault();
     if(!text)  {
      alert('Task can not be blank');
    }
    const formData = {
      title: text,
      status: task.status
    }
    
    const res= await fetch('http://localhost:3000/task/'+ task.id  , {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    const data = await res.json();
    setTasks(tasks.map( (task)  => task.id === data.id? {...task, title: data.title, status: data.status}  : task ));
    setTaskAddForm(true);
    setTaskEditForm(false);
    setText('');
  }

   const deleteTask = async (taskid) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
       const res= await fetch('http://localhost:3000/task/' + taskid , {
            method: 'DELETE'
        });
      setTasks(tasks.filter((task) => task.id != taskid));
    }
  }
  
  const fetchTasks= async () => {
    const res= await fetch('http://localhost:3000/task');
    const data = await res.json();
    setTasks(data);
  }


  const fetchTask= async (id) => {
      const res= await fetch('http://localhost:3000/task/' +id );
      const data = await res.json();
      return data;
  }


  const toggleTaskForm = async (id) => {
      setTaskAddForm(false);
      setTaskEditForm(true);
      const pdata = await fetchTask(id);
      setText(pdata.title);
      setTask(pdata);
  }

  const updateTaskStatus = async (e, taskObj) => {
      const statusObj = (e.target.checked) ? 'completed' : 'active';
      const formDataObjData = {
        title: taskObj.title,
        status: statusObj
      }

      const res= await fetch('http://localhost:3000/task/'+ taskObj.id, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formDataObjData)
       });

       const data = await res.json();
       setTasks(tasks.map( (taskIt)  => taskIt.id === taskObj.id ? {...taskIt, status: data.status}  : taskIt ));
  }


  const filterTasks = async (status) => {

      if(status == 'all') {
        fetchTasks();
        return;
      }
      const res= await fetch('http://localhost:3000/task/?status='+ status );
      const data = await res.json();
      setTasks(data)

  }

  useEffect(() => {
      fetchTasks();
  },[]);

  return (
      <div className="container">
        <div className="row justify-content-center my-5">
          <div className="col-5">
            <div className='text-center mb-4'>
              <h3>TODO APP</h3>
            </div>
            <div className="card bg-white p-4">
              <div className="card-body">
                {
                  taskAddForm &&  <form method='post' action="" className='row g-2 mt-3' onSubmit= { addForm }>
                  <div className='col-12'>
                    <input value= {text} onChange= {(e) => setText(e.target.value) } type="text" className="form-control" placeholder="New Task..." />
                  </div>
                  <div className='col-6'>
                    <button className='btn mt-2 px-5 py-2 btn-primary'>ADD Todo</button>
                  </div>
                </form>
                }
 
                {
                  taskEditForm && <form method='post' action="" className='row g-2 mt-3' onSubmit= { updateForm} >
                    <div className='col-12'>
                      <input value= {text} onChange= {(e) => setText(e.target.value) } type="text" className="form-control" placeholder="New Task..." />
                    </div>
                    <div className='col-6'>
                      <button className='btn mt-2 px-5 py-2 btn-primary'>Update Todo</button>
                    </div>
                  </form>
                }
              <br />
               <div className="btn-group" role="group">
                <button onClick= {(e) => filterTasks('all')}  type="button" className="btn btn-secondary">All</button>
                <button onClick= {(e) => filterTasks('active')}  type="button" className="btn btn-secondary">Active</button>
                <button onClick= {(e) => filterTasks('completed')} type="button" className="btn btn-secondary">Completed</button>
              </div>
          
                <br />
                
                <div className="todo-list">
                  {
                    tasks.map((task) => {
                      return (<div key={task.id} className="todo-item  mb-3 shadow-sm d-flex align-items-center justify-content-between p-3">
                          <div className={`d-flex align-items-center ${task.status === 'completed' ? 'text-completed' : ''}`}>
                            <span className="checkbox">
                              <input defaultChecked={task.status == 'completed'} type="checkbox" onClick= {(e) => updateTaskStatus(e, task) }   />
                            </span>
                            <span> { task.title } </span>
                          </div>
                          <div>
                            <button className="btn btn-primary btn-sm ms-2" onClick= {(e) => toggleTaskForm(task.id) } >
                              Edit
                            </button>
                            <button className="btn btn-danger btn-sm ms-2" onClick= {(e) => deleteTask(task.id) } > 
                              Delete
                            </button>
                          </div>
                      </div>);
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
