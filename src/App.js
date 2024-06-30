import { useState } from 'react';
import './App.css';

function App() {
  const data = [
    {
      id: 1,
      note: 'Hyper Markup Language'
    },
    {
      id: 2,
      note: 'Jog arounf the park 3x'
    },
    {
      id: 3,
      note: 'Scripting Lanaguage'
    },
    {
      id: 4,
      note: 'JavaScript Framework'
    },
  ];

  const [notes, setNotes] = useState(data);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [count, setCount] = useState(4);

  // To add new Note
  function addNote(){
    setNotes([...notes, {id: count,  note: note}]);
    setCount(count + 1);
    setNote("");
    console.log(notes);
  }
  //To remove Note
  function removeItem(id) {
    setNotes(notes.filter((e) => e.id !== id));
  }
  return (
    <div className="app">
      <div className='container'>
        <div className='header'>
          <h1>ToDo</h1>
          <input
            type="text"
            placeholder="Create a new todo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyUp={(e) => (e.target.value)}
          />
        </div>
      </div>
      <div className='notes-container'>
        {notes.map((e) => (
            <div className='notes' key={e.id}>
              <h5>{e.note}</h5>
{/*               <button
                type="input"
                onClick={() => removeItem(e.id)}
              >
                X
              </button> */}
            </div>
          ))}
          <div className='footer'>
            <div className='counter'>items left</div>
            <div className='footer-menu'>
                  <a>All</a>
                  <a>Active</a>
                  <a>Completed</a>
            </div>
            <div className='clear'>Clear Completed</div>
          </div>
      </div>
    </div>
  );
}

export default App;
