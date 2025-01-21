import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "@/redux/Notes/note.actions";
import { IoMdAdd } from "react-icons/io";
import NoteCard from "@/components/NotePage/Notecards/NoteCard";
// import Popup from "./Popup";

export default function AllNotes() {
  const dispatch = useDispatch();
  const [notes, setNotes] = useState([]);
  const { loading, error, data } = useSelector((state) => state.noteReducer);
  const [showPopup, setShowPopup] = useState(true);  

  useEffect(() => {
    const response = dispatch(getNotes());
  }, [dispatch]);

  useEffect(() => {
    if (data && Array.isArray(data)) {
      setNotes(data);
    }
  }, [data]);

  console.log("Notes : ", data);
  return (
    <div className="my-auto mt-6 items-center bg-yellow-500">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-yellow-500">
        {notes?.map((note, index) => (
          <NoteCard
            key={index + 0}
            title={note.title}
            _id={note._id}
            user={note.user}
            body={note.body}
          />
        ))}

        {/* {showPopup && (<Popup />)} */}
      </div>
      <div className="flex items-right justify-end mb-2 mr-2">
        <IoMdAdd size={50} className="absolute bg-green-500 " />
      </div>
    </div>
  );
}
