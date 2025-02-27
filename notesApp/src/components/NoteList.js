import './NoteItem';

export class NoteList extends HTMLElement {
  set notes(notes) {
    this._notes = notes;
    this.render();
  }

  render() {
    this.innerHTML = '';

    if (!this._notes || this._notes.length === 0) {
      this.innerHTML = '<p>Tidak ada catatan.</p>';
      return;
    }

    this._notes.forEach(note => {
      const noteItem = document.createElement('note-item');
      noteItem.setAttribute('note-id', note.id); 
      noteItem.setAttribute('title', note.title);
      noteItem.setAttribute('body', note.body);
      this.appendChild(noteItem);
    });
  }
}

customElements.define('note-list', NoteList);
