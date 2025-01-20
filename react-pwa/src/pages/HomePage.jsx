import React from 'react';
import NoteImg from "../assets/noteImg.webp";



const HomePage = () => {
  return (
    <>
    <div className='flex justify-between'>
        <div className='text-[14px] w-[55%] mx-[10px] my-[20px]'> 
            <h1 className='text-red-700  text-[30px]'>Note APP</h1>
            <p>
                A collaborative note-keeping application is a powerful tool designed to streamline teamwork, organization, and productivity. It allows multiple users to create, edit, and share notes in real-time, fostering seamless collaboration across teams and projects. With features like shared workspaces, version history, and user access control, it ensures that all collaborators can contribute and stay on the same page.
                These applications typically include options for categorizing and organizing notes using tags, folders, or labels, making it easy to retrieve information when needed. Real-time synchronization ensures that changes made by one user are instantly visible to others, reducing the risk of miscommunication or outdated information. Many also offer integration with popular productivity tools like calendars, task managers, or project management platforms to provide a comprehensive workflow solution.
                Advanced collaborative note-taking apps often include features like multimedia support (images, videos, and audio), markdown formatting, and offline accessibility. They are also equipped with robust security measures, including encrypted data storage and customizable permissions, to protect sensitive information.
                Ideal for students, teams, and professionals, a collaborative note-keeping application fosters a unified approach to knowledge sharing and enhances overall efficiency. Whether brainstorming ideas or managing detailed project notes, these tools simplify the process of working together effectively.
            </p>

        </div>
        <div className=''>
            <img 
                src={NoteImg}
                alt="Note-Icon" 
                className="h-auto max-w-full"
            />
        </div>


    </div>

    </>

  )
}

export default HomePage