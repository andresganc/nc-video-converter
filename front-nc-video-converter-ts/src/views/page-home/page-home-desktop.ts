
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/header/section-home-header-desk'
import './sections/body/section-home-body-desk'
import './sections/footer/section-home-footer-desk'

@customElement('page-home-desktop')
export class PageHomeDesktop extends LitElement {

    render() {
        return html`
                <p>Page home desktop</p>
        `
    }
}