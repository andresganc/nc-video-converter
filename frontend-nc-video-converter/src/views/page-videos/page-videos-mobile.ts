
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/section-videos-mobile'

@customElement('page-videos-mobile')
export class PageVideosMobile extends LitElement {

    render() {
        return html`
                <p>Page converter mobile</p>
        `
    }
}