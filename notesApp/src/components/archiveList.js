import './NoteItem.js';
// import api from '../api/notes-api.js';

export class ArchiveList extends HTMLElement {
    set notes(notes) {
        this._notes = notes;
        this.render();
    }
    
    render() {
        this.innerHTML = '';
        if (this._notes && this._notes.length > 0) {
            this._notes.forEach(note => {
                const noteItem = document.createElement('note-item');
                noteItem.note = note;
                this.appendChild(noteItem);
            });
        } else {
            this.innerHTML = '<p>Tidak ada catatan yang diarsipkan</p>';
        }
    }
}

customElements.define('archive-list', ArchiveList);