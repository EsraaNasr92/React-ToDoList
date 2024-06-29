import { useState } from 'react';
import './App.css';

function App() {
  const data = [
    {
      id: 1,
      title: 'HTML',
      note: 'Hyper Markup Language'
    },
    {
      id: 2,
      title: 'CSS',
      note: 'Stylesheet'
    },
    {
      id: 3,
      title: 'JavaScript',
      note: 'Scripting Lanaguage'
    },
    {
      id: 4,
      title: 'ReactJS',
      note: 'JavaScript Framework'
    },
  ];

  const [notes, setNotes] = useState(data);
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [count, setCount] = useState(4);

  // To add new Note
  function addNote(){
    setNotes([...notes, {id: count, title: title, note: note}]);
    setCount(count + 1);
    setTitle("");
    setNote("");
    console.log(notes);
  }
  //To remove Note
  function removeItem(id) {
    setNotes(notes.filter((e) => e.id !== id));
  }
  return (
    <div className="app">
      <div className='header'>
        <h1>ToDo</h1>
        <input
          type="text"
          placeholder="add title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="submit"
          onClick={addNote}
        >
          Submit
        </button>
      </div>
        {notes.map((e) => (
          <div className='notes' key={e.id}>
            <h5>Title: {e.title}</h5>
            <button
              type="input"
              onClick={() => removeItem(e.id)}
            >
              X
            </button>
          </div>
        ))}
    </div>
  );
}

export default App;
