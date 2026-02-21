
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/header/section-home-header-desk'
import './sections/body/section-home-body-desk'
import './sections/footer/section-home-footer-desk'

@customElement('page-home-mobile')
export class PageHomeMobile extends LitElement {

    render() {
        return html`
                <p>Page home mobile</p>
        `
    }
}