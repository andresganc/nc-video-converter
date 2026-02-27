
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/section-finished-mobile'

@customElement('page-finished-mobile')
export class PageFinishedMobile extends LitElement {

    render() {
        return html`
                <section-finished-mobile></section-finished-mobile>
        `
    }
}