import { useState } from "react";
import { GrAddCircle, GrPowerReset } from "react-icons/gr";
// import { GrPowerReset } from "react-icons/"
const AddNote = ({ handleAddNote }) => {
  const [titleText, setTitleText] = useState("");
  const [noteText, setNoteText] = useState("");
  const titlim = 20;
  const charlim = 500;
  const handleTitleChange = (event) => {
    if (titlim - event.target.value.length >= 0) {
      setTitleText(event.target.value);
    }
  };
  const handleNoteChange = (event) => {
    if (charlim - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(titleText, noteText);
      setTitleText("");
      setNoteText("");
    }
  };
  const handleReset = () => {
    setNoteText("");
  };
  return (
    <div className="note new">
      <input
        placeholder="Title here..."
        type="text"
        value={titleText}
        onChange={handleTitleChange}
        className="input-note input-text"
      />

      <textarea
        rows="8"
        cols="10"
        placeholder="Type here to add a content"
        value={noteText}
        onChange={handleNoteChange}
        className="input-note input-textarea"
      ></textarea>
      <div className="note-footer">
        <small>{charlim - noteText.length} remaining</small>
        <GrPowerReset onClick={handleReset} className="delete-icon" />
        <GrAddCircle onClick={handleSaveClick} className="save" size="1.4em" />
      </div>
    </div>
  );
};

export default AddNote;
