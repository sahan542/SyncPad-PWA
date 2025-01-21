import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "@/redux/Notes/note.actions";
import { IoMdAdd } from "react-icons/io";
import NoteCard from "@/components/NotePage/Notecards/NoteCard";

export default function AllNotes() {
  const dispatch = useDispatch();
  const [notes, setNotes] = useState([]);
  const { loading, error, data } = useSelector((state) => state.noteReducer);

  useEffect(() => {
    const response = dispatch(getNotes());
  }, [dispatch]);

  useEffect(()=>{
    if (data && Array.isArray(data)) {
      setNotes(data); 
    }
  },[data]);

console.log("Notes : ",data);
  return (
<div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ul>
        {notes?.map((note, index) => (
            <NoteCard title={note.title} _id={note._id} user={note.user} body={note.body}/>
        ))}
      </ul>
    </div>
  );
}
