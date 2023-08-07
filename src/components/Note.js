import { FaTrashAlt } from "react-icons/fa";

const Note = ({ id, title, content, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <h1>{title}</h1>
      <span>{content}</span>
      <div className="note-footer">
        <small>{date}</small>
        <FaTrashAlt
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
