const API_URL = "https://notes-api.dicoding.dev/v2/notes";


const api = {
  async getNotes() {
    try {
      const response = await fetch(`${BASE_URL}/notes`);
      if (!response.ok) {
        throw new Error("Gagal mengambil data dari API");
      }
      const result = await response.json();
      return result.data;
    } catch (error) {
      console.error("Error fetching notes:", error);
      return [];
    }
  },

  async createNote(title, body) {
    try {
      const response = await fetch(`${BASE_URL}/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, body })
      });

      if (!response.ok) {
        throw new Error("Gagal membuat catatan baru");
      }

      return await response.json();
    } catch (error) {
      console.error("Error creating note:", error);
      return null;
    }
  },

  async deleteNote(noteId) {
    try {
      const response = await fetch(`${BASE_URL}/notes/${noteId}`, {
        method: "DELETE"
      });

      if (!response.ok) {
        throw new Error("Gagal menghapus catatan");
      }

      return await response.json();
    } catch (error) {
      console.error("Error deleting note:", error);
      return null;
    }
  },

  async archiveNote(noteId) {
    try {
      const response = await fetch(`${BASE_URL}/notes/${noteId}/archive`, {
        method: "POST"
      });

      if (!response.ok) {
        throw new Error("Gagal mengarsipkan catatan");
      }

      return await response.json();
    } catch (error) {
      console.error("Error archiving note:", error);
      return null;
    }
  },

  async unarchiveNote(noteId) {
    try {
      const response = await fetch(`${BASE_URL}/notes/${noteId}/unarchive`, {
        method: "POST"
      });

      if (!response.ok) {
        throw new Error("Gagal mengembalikan catatan dari arsip");
      }

      return await response.json();
    } catch (error) {
      console.error("Error unarchiving note:", error);
      return null;
    }
  }
};

export default api;
