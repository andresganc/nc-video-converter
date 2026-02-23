
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/section-videos--desktop'
import './sections/section-videos-mobile'

@customElement('page-videos-desktop')
export class PageVideosDesktop extends LitElement {

    render() {
        return html`
                <p>Page videos desktop</p>
        `
    }
}