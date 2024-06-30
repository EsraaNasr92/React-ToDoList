import { useState } from 'react';
import './App.css';

function App() {
  const data = [
    { id: 1, note: 'Hyper Markup Language' },
    { id: 2, note: 'Jog around the park 3x' },
    { id: 3, note: 'Scripting Language' },
    { id: 4, note: 'JavaScript Framework' },
  ];

  const [notes, setNotes] = useState(data);
  const [count, setCount] = useState(4);
  const [note, setNote] = useState('');

  // To add new Note
  function addNote() {
    if (note.trim() !== '') {
      setNotes([...notes, { id: count + 1, note: note }]);
      setCount(count + 1);
      setNote('');
    }
  }
  
  return (
    <div className="app">
      <div className='container'>
        <div className='header'>
          <h1>ToDo</h1>
          <input
            type="text"
            placeholder="Create a new todo..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                addNote();
              }
            }}
          />
        </div>
      </div>
      <div className='notes-container'>
        {notes.map((e) => (
          <div className='notes' key={e.id}>
            <h5>{e.note}</h5>
          </div>
        ))}
        <div className='footer'>
          <div className='counter'>{count} items left</div>
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
