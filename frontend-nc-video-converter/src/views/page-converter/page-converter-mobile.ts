
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/header/section-converter-header-desk'
import './sections/body/section-converter-body-desk'
import './sections/footer/section-converter-footer-desk'

@customElement('page-converter-mobile')
export class PageConverterMobile extends LitElement {

    render() {
        return html`
                <p>Page converter mobile</p>
        `
    }
}