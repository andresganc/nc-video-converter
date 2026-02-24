
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/header/section-about-header-desk'
import './sections/body/section-about-body-desk'
import './sections/footer/section-about-footer-desk'

@customElement('page-about-mobile')
export class PageAboutMobile extends LitElement {

    render() {
        return html`
                <p>Page About Mobile</p>
        `
    }
}