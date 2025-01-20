import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotes } from "@/redux/Notes/note.actions";

export default function AllNotes() {
  const dispatch = useDispatch();
  const [notes, setNotes] = useState([]);

  // Use useSelector to get the state
  const { loading, error, data } = useSelector((state) => state.userReducer);

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  useEffect(() => {
    setNotes(data);
  }, [data]);

  return (
    <div>
      {/* {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {data && (
        <ul>
          {data.map((note) => (
            <li key={note.id}>{note.title}</li>
          ))}
        </ul>
      )} */}

      <div className="flex flex-row">
            {/* One */}
            <div className="max-w-sm p-6 bg-blue-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-[15px]">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so
                far, in reverse chronological order.
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

            {/* Two */}
            <div className="max-w-sm p-6 bg-blue-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-[15px]">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so
                far, in reverse chronological order.
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

            {/* Three */}
            <div className="max-w-sm p-6 bg-blue-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-[15px]">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so
                far, in reverse chronological order.
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

            {/* Four */}
            <div className="max-w-sm p-6 bg-blue-500 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-[15px]">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so
                far, in reverse chronological order.
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
    </div>
  );
}
