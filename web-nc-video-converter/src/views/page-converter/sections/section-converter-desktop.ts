
import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'
import { useVideoStore } from '@contexts/store-video-seleted';

@customElement('section-converter-desktop')
export class SectionConverterDesktop extends LitElement {

    @state()
    selectedVideo = useVideoStore.getState().selectedVideo;

    unsubscribe?: () => void;

    connectedCallback() {
        super.connectedCallback();

        this.unsubscribe = useVideoStore.subscribe((state) => {
        this.selectedVideo = state.selectedVideo;
        });
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.unsubscribe?.();
    }

    render() {

        if (!this.selectedVideo) {
            return html`<p>No hay video seleccionado</p>`;
        }

        return html`
            <div>
                <div>
                    <h4>VIDEO SELECTED</h4>
                </div>

                <!-- <div>
                    <p><strong>Nombre:</strong> ${this.selectedVideo.name}</p>
                    <p><strong>Ruta:</strong> ${this.selectedVideo.path}</p>
                    <p><strong>Tipo:</strong> ${this.selectedVideo.type}</p>
                    <p><strong>Tamaño:</strong> ${(this.selectedVideo.size / 1024 / 1024).toFixed(2)} MB</p>
                </div> -->
                
                <div class="section__footer--infoleft infoleft">
                        <div class="video-info">
                            <p>Nombre: ${this.selectedVideo.name}</p>
                        </div>
                        <div class="video-info">
                            <p>Tamaño: ${(this.selectedVideo.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                        <div class="video-info">
                            <p>Formato: ${this.selectedVideo.type}</p>
                        </div>
                        <div class="video-info">
                            <p>Ultima modificación: ${new Date(this.selectedVideo.size).toLocaleDateString()}</p>
                        </div>
                        <div class="video-info">
                            <p>Ruta: ${this.selectedVideo.path}</p>
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