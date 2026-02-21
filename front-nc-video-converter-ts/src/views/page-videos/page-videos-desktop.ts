
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// SECTIONS
import './sections/header/section-videos-header-desk'
import './sections/body/section-videos-body-desk'
import './sections/footer/section-videos-footer-desk'

@customElement('page-videos-desktop')
export class PageVideosDesktop extends LitElement {

    render() {
        return html`
                <p>Page videos desktop</p>
        `
    }
}