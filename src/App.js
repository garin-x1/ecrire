import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NoteList from "./components/NoteList";
import Header from "./components/Header";

const App = () => {
  const date = new Date();
  const [notes, setNotes] = useState([
    {
      id: nanoid(10),
      title: "Note for Today!",
      content: "Do somehing good today!",
      date: date.toLocaleDateString(),
    },
  ]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("ecrire-data"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      "ecrire-data",
      JSON.stringify(notes)
    );
  }, [notes])

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem("ecrire-theme"));
    if (savedTheme !== undefined) {
      setDarkMode(savedTheme);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      "ecrire-theme",
      darkMode
    );
  }, [darkMode])

  const addNote = (title, text) => {
    let newNote = {
      id: nanoid(10),
      title: title,
      content: text,
      date: date.toLocaleDateString(),
    };
    newNote = [...notes, newNote];
    setNotes(newNote);
  };

  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };
  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <NoteList
          notes={notes}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};
export default App;
