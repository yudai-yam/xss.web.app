import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class DemoElement extends PolymerElement {
    // static getter
    static get properties() {
        return {
            innerHTML: {
                type: String,
                observer: '_htmlChanged'
            }
        };
    }

    // instance method, used dynamically
    _htmlChanged(newVal) {
        // dangerous: injecting unsanitized HTML into the DOM
        this.shadowRoot.querySelector('#content').innerHTML = newVal;
    }

    // static getter
    static get template() {
        return html`
            <div id="content">Safe default content</div>
        `;
    }
}

customElements.define('demo-element', DemoElement);