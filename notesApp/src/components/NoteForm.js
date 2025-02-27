
import api from '../api/notes-api.js';

export class NoteForm extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Tambahkan HTML setelah elemen masuk ke dalam DOM
        this.innerHTML = `
        <form id="note-form">
            <input type="text" id="title" placeholder="Title" required minlength="3">
            <textarea id="body" placeholder="Write your note..." required></textarea>
            <button type="submit">Add Note</button>
        </form>
        `;

        // Ambil elemen setelah innerHTML diperbarui
        const form = this.querySelector('#note-form');
        const titleInput = this.querySelector('#title');
        const bodyInput = this.querySelector('#body');

        // Pastikan elemen tidak null sebelum digunakan
        if (!form || !titleInput || !bodyInput) {
            console.error('Element not found in NoteForm');
            return;
        }

        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            if (!titleInput.value.trim() || !bodyInput.value.trim()) return;

            // Tampilkan loading indicator
            const loadingIndicator = document.createElement('loading-indicator');
            document.body.appendChild(loadingIndicator);

            try {
                // Tambahkan catatan ke API
                await api.createNote({ 
                    title: titleInput.value, 
                    body: bodyInput.value 
                });

                // Reset input
                titleInput.value = '';
                bodyInput.value = '';

                // Trigger event untuk memperbarui daftar catatan
                document.body.dispatchEvent(new Event('update-notes'));
            } catch (error) {
                console.error('Gagal menambahkan catatan:', error);
            } finally {
                // Hapus loading indicator setelah selesai
                document.body.removeChild(loadingIndicator);
            }
        });
    }
}

customElements.define('note-form', NoteForm);
