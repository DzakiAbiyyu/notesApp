import api from '../api/notes-api.js';


export default function renderNoteItem(note) {
  const div = document.createElement('div');
  div.classList.add('note-item');
  div.innerHTML = `
    <h3>${note.title}</h3>
    <p>${note.body}</p>
    <button class="archive-btn">Archive</button>
    <button class="delete-btn">Delete</button>
  `;

  div.querySelector('.archive-btn').addEventListener('click', async () => {
    await api.archiveNote(note.id);
    div.remove();
  });

  div.querySelector('.delete-btn').addEventListener('click', async () => {
    await api.deleteNote(note.id);
    div.remove();
  });

  return div;
}
