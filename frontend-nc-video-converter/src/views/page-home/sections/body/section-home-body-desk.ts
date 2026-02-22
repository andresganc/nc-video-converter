
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import logo from '@assets/img/logo/logo300px.webp'

@customElement('section-home-header-desk')
export class SectionHomeHeaderDesk extends LitElement {
    render() {
        return html`
            <div class="header-desk">
                <img class='header__logo' src="${logo}" alt="Logo" width="150">
                <h4 class="header-desk-title">Convert your videos with ease</h4>
                <p class="header-desk-description">
                    Our video converter allows you to effortlessly convert your videos to various formats, ensuring compatibility across all your devices. With a user-friendly interface and lightning-fast conversion speeds, you can easily transform your media files without any hassle.
                </p>
            </div>
        `
    }

    static styles = css`
        .header-desk {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 2rem;
        }

        .header__logo {
            border-radius: 50%;
        }

        .header-desk-title {
            font-size: 1.2rem;
            margin-bottom: .5rem;
        }

        .header-desk-description {
            font-size: 1rem;
            color: #666;
            max-width: 600px;
        }
    ` 

}