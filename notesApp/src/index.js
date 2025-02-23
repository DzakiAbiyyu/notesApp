import renderNoteForm from './components/NoteForm.js';
import { renderNotes } from './components/NoteList.js';
import api from './api/notes-api.js';

document.addEventListener('DOMContentLoaded', async () => {
  // Render form input
  document.getElementById('list-notes').appendChild(renderNoteForm());

  try {
    // Ambil data dari API dan tampilkan daftar catatan
    const notes = await api.getNotes();
    renderNotes(notes);
  } catch (error) {
    console.error("Gagal mengambil catatan:", error);
  }
});
