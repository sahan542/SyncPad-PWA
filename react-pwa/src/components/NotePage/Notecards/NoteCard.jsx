import { updateNotes } from "@/redux/Notes/note.actions";
import React from "react";
import NotePadImage from "../../../assets/bg-note-pad.avif";

export default function NoteCard({ title, body, user, _id }) {
  return (
    <div>
      <div
        className="w-[300px] h-[300px] max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-[15px] bg-cover bg-center"
        style={{ backgroundImage: `url(${NotePadImage})` }}
      >
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {body}
        </p>
        <div className="flex items-center justify-between">
        <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
            Update
          </a>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}
