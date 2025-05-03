import { PolymerElement, html } from '@polymer/polymer';

class DemoElement extends PolymerElement {
  static get properties() {
    return {
      innerHTML: {
        type: String,
        observer: '_htmlChanged'
      }
    };
  }

  _htmlChanged(newVal) {
    // Dangerous: injecting unsanitized HTML into the DOM
    this.shadowRoot.querySelector('#content').innerHTML = newVal;
  }

  static get template() {
    return html`
      <div id="content">Safe default content</div>
    `;
  }
}

customElements.define('demo-element', DemoElement);

// Inject element from URL hash
window.addEventListener('DOMContentLoaded', () => {
  const hash = decodeURIComponent(location.hash.slice(1));
  document.body.insertAdjacentHTML('beforeend', hash);
});