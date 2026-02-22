
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('section-home-footer-desk')
export class SectionHomeFooterDesk extends LitElement {
    render() {
        return html`
            <div class="footer">
                <a class='menu__nav--nav--item item' href='/videos'>
                    <div>
                        <svg class="icon" viewBox="0 0 24 24"><title>videos</title><path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" /></svg>
                    </div>
                    <div><p>CHOOSE VIDEO TO CONVERT --></p></div>
                </a>
                <!-- <p>&copy; 2024 NC Video Converter. All rights reserved.</p>
                <p>Contact us: <a href="mailto: home@nc-colombia.com">home@nc-colombia.com</a></p> -->
            </div>
        `
    }   

    static get styles() {
        return css`

            :host {
                display: flex;
                align-items: center;
                justify-content: center;
            }

            a {
                text-decoration: none;
                font-size: 0.8rem;
            }

            a:link {
                color: #d6d6d6;
            }

            a:visited {
                color: #d6d6d6;
                text-decoration: none;
            }

            p {
                margin: 0;
                font-size: 0.8rem;
                color: #d6d6d6;
                cursor: pointer;
            }

            .item {
                display: flex;
                align-items: center;
                padding: .5rem;
                gap: 0.5rem;
            }

            .icon {
                width: 1.8rem;
                fill: #e1e1e1;
            }
    
        `
    }

}