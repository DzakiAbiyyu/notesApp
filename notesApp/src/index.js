// import './components/NoteForm.js';
// import './components/NoteList.js';
// import './components/archiveList.js';
// import './components/LoadingIndicator.js';
// import api from './api/notes-api.js';
// import './style/style.css'
// 
// src/index.js

import './components/NoteList.js';
import './components/NoteForm.js';
import './components/LoadingIndicator.js'
import api from './api/notes-api.js';
import './style/style.css';

document.addEventListener('DOMContentLoaded', async () => {
    const noteList = document.querySelector('note-list');

     // Tambahkan loading indicator
     const loadingIndicator = document.createElement('loading-indicator');
     document.body.appendChild(loadingIndicator);
 
     try {
         const notes = await api.getNotes();
 
         // Tambahkan delay 1.5 detik agar loading terlihat
         setTimeout(() => {
             noteList.notes = notes;
             document.body.removeChild(loadingIndicator);
         }, 4000);
     } catch (error) {
         console.error('Gagal mengambil catatan:', error);
     }

    document.body.addEventListener('update-notes', async () => {
        noteList.notes = await api.getNotes();
    });
});



















// document.addEventListener('DOMContentLoaded', async () => {
    // const noteList = document.querySelector('note-list');
    // const archiveList = document.querySelector('archive-list');
    // const loadingIndicator = document.createElement('loading-indicator');
    // document.body.appendChild(loadingIndicator);
// 
    // try {
        // noteList.notes = await api.getNotes();
        // archiveList.notes = await api.getArchivedNotes();
    // } catch (error) {
        // console.error("Gagal mengambil data:", error);
    // } finally {
        // loadingIndicator.remove();
    // }
// });
// 
// document.addEventListener('update-notes', async () => {
    // noteList.notes = await api.getNotes();
    // archiveList.notes = await api.getArchivedNotes();
// });
