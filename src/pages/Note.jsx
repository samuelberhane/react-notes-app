import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Note = () => {
  const params = useParams();
  const [noteData, setNoteData] = useState({});
  const { id } = params;

  // get single note data
  const getNoteData = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/notes/${id}/`
    );
    setNoteData(data);
  };

  // fetch data
  useEffect(() => {
    getNoteData();
  }, []);

  return <div>{noteData.body}</div>;
};

export default Note;