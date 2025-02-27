import api from '../api/notes-api';

export class NoteItem extends HTMLElement {
  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  addEventListeners() {
    this.querySelector('.delete-btn').addEventListener('click', async () => {
      const noteId = this.getAttribute('note-id');
      await api.deleteNote(noteId);
      this.dispatchEvent(new CustomEvent('update-notes', { bubbles: true }));
    });

    this.querySelector('.archive-btn').addEventListener('click', async () => {
      const noteId = this.getAttribute('note-id');
      await api.archiveNote(noteId);
      this.dispatchEvent(new CustomEvent('update-notes', { bubbles: true }));
    });

    this.querySelector('.unarchive-btn').addEventListener('click', async () => {
      const noteId = this.getAttribute('note-id');
      await api.unarchiveNote(noteId);
      this.dispatchEvent(new CustomEvent('update-notes', { bubbles: true }));
    });
  }

  render() {
    this.innerHTML = `
      <div class="note-item">
        <h3>${this.getAttribute('title')}</h3>
        <p>${this.getAttribute('body')}</p>
        <button class="delete-btn">Hapus</button>
        <button class="archive-btn">Arsipkan</button>
        <button class="unarchive-btn">Kembalikan</button>
      </div>
    `;
  }
}

customElements.define('note-item', NoteItem);
