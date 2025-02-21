import api from '../api/notes-api.js';
import { renderNotes } from '../components/NoteList.js';

document.addEventListener('DOMContentLoaded', async () => {
  const notes = await api.getNotes();
  renderNotes(notes);
});
