// src/components/LoadingIndicator.js

class LoadingIndicator extends HTMLElement {
  connectedCallback() {
      this.innerHTML = '<div class="loading-indicator"><p>Loading...</p></div>';
  }
}

customElements.define('loading-indicator', LoadingIndicator);







