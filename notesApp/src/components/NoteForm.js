import api from '../api/notes-api.js';
import { renderNotes } from './NoteList.js';

export default function renderNoteForm() {
  const form = document.createElement('form');
  form.innerHTML = `
    <input type="text" id="title" placeholder="Title" required />
    <textarea id="body" placeholder="Note content" required></textarea>
    <button type="submit">Add Note</button>
  `;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const newNote = {
      title: form.querySelector('#title').value,
      body: form.querySelector('#body').value
    };

    await api.createNote(newNote);
    const notes = await api.getNotes();
    renderNotes(notes);
  });

  return form;
}
