import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState('a new note...');
  const [showAll, setShowAll] = useState(true);

  const handleNoteChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setNewNote(event.target.value);
  } 

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notes.length + 1, 
    }
    setNotes(notes.concat(noteObject));
    setNewNote('')
  }

  const noteToShow = showAll?notes: notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div><button onClick={()=>setShowAll(!showAll)}>show { showAll?'important':'all'}</button></div>
      <ul>
        {noteToShow.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App
