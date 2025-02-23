import api from '../api/notes-api.js';
import { formatDate } from '../helpers.js';
import renderNoteItem from './NoteItem.js';

export function renderNotes(notes) {
  const noteContainer = document.getElementById('note-list');
  noteContainer.innerHTML = '';

  notes.forEach(note => {
    const noteElement = renderNoteItem(note);
    noteContainer.appendChild(noteElement);
  });
}
