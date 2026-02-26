
import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

@customElement('section-converter-desktop')
export class SectionConverterDesktop extends LitElement {

    render() {
        return html`
            <div>
                <div>
                    <h4>VIDEO SELECTED</h4>
                </div>
                
                <div class="section__footer--infoleft infoleft">
                        <div class="video-info">
                            <p>Nombre: </p> <p></p>
                        </div>
                        <div class="video-info">
                            <p>Tamaño: </p> <p></p>
                        </div>
                        <div class="video-info">
                            <p>Formato: </p> <p></p>
                        </div>
                        <div class="video-info">
                            <p>Ultima modificación: </p> <p></p>
                        </div>
                </div>
            </div>
        `
    }

    static get styles() {
        return css`

            :host {
                margin: 0;
                padding: 0;
            }

            /* GENERALES */
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
                font-size: 0.9rem;
            }

            .icon {
                width: 1.5rem;
                fill: #e1e1e1;
            }

            .section {
                display: grid;
                gap: 1rem;
            }

            .l-vertical {
                width: .2px;
                height: 3rem;
                background-color: #ccc;
            }
    `}      

}