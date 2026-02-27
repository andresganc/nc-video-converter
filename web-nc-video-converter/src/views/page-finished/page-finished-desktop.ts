
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/section-finished-desktop'

@customElement('page-finished-desktop')
export class PageFinishedDesktop extends LitElement {

    render() {
        return html`
                <section-finished-desktop></section-finished-desktop>
        `
    }
}