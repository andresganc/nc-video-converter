
import { LitElement, css, html } from 'lit'
import { customElement, state } from 'lit/decorators.js'

interface VideoFile {
  file: File;
  url: string;
}

@customElement('section-videos-desktop')
export class SectionVideosDesktop extends LitElement {

    @state() videos: VideoFile[] = [];

    handleFolderSelect(e: Event) {
        const input = e.target as HTMLInputElement;
        if (!input.files) return;

        this.videos = Array.from(input.files)
        .filter(file => file.type.startsWith('video/'))
        .map(file => ({
            file,
            url: URL.createObjectURL(file),
        }));
    }

    async uploadFiles() {
        const formData = new FormData();
        this.videos.forEach(v => {
        formData.append('videos', v.file);
        });

        const res = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
        });

        const result = await res.json();
        console.log('📦 Backend recibió:', result);
    }


    render() {
        return html`
            <div class="section">
                <div class="section__header">
                    <div class='section__header--title title'>
                        <h4>Search video</h4>                      
                    </div>

                    <div class='section__header--actions actions'>
                        <div class='menu__footer--item fitem'>
                            <div>
                                <svg class="icon" viewBox="0 0 24 24"><title>folder-search</title><path d="M16.5,12C19,12 21,14 21,16.5C21,17.38 20.75,18.21 20.31,18.9L23.39,22L22,23.39L18.88,20.32C18.19,20.75 17.37,21 16.5,21C14,21 12,19 12,16.5C12,14 14,12 16.5,12M16.5,14A2.5,2.5 0 0,0 14,16.5A2.5,2.5 0 0,0 16.5,19A2.5,2.5 0 0,0 19,16.5A2.5,2.5 0 0,0 16.5,14M9,4L11,6H19A2,2 0 0,1 21,8V11.81C19.83,10.69 18.25,10 16.5,10A6.5,6.5 0 0,0 10,16.5C10,17.79 10.37,19 11,20H3C1.89,20 1,19.1 1,18V6C1,4.89 1.89,4 3,4H9Z" /></svg>
                            </div>
                            <!-- <div><small>Notifications</small></div> -->
                        </div>

                        <div>
                            <input class='search-input' type="file" multiple @change=${this.handleFolderSelect} placeholder="Search folder videos..." />
                            <!-- <input class='search-input' type="file" webkitdirectory multiple @change=${this.handleFolderSelect} placeholder="Search folder videos..." /> -->
                        </div>

                        <div class='menu__footer--item fitem'>
                            <a @click=${this.uploadFiles}>
                                <div>
                                    <svg class="icon" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
                                </div>
                                
                            </a>
                            <!-- <button @click=${this.uploadFiles}>
                                Subir videos
                            </button> -->
                        </div>
                    </div>
                    
                </div>
                
                    
                <div class="section__body body">
                    <table>
                        <thead>
                            <tr>
                                <th>Vista previa</th>
                                <th>Nombre</th>
                                <th>Tamaño (MB)</th>
                                <th>Formato</th>
                            </tr>
                        </thead>

                        <tbody>
                            ${this.videos.map(v => html`
                                <tr>
                                    <td>
                                        <video src=${v.url} muted></video>
                                    </td>
                                    <td>${v.file.name}</td>
                                    <td>${(v.file.size / 1024 / 1024).toFixed(2)}</td>
                                    <td>${v.file.type}</td>
                                </tr>
                            `)}
                        </tbody>
                        
                    </table>
                </div>

                <div class="section__footer">
                    <div class="section__footer--infoleft infoleft">
                        ${this.videos.map(v => html`
                            <div class="video-info">
                                <p>Nombre: </p> <p>${v.file.name}</p>
                            </div>
                            <div class="video-info">
                                <p>Tamaño: </p> <p>${(v.file.size / 1024 / 1024).toFixed(2)}</p>
                            </div>
                            <div class="video-info">
                                <p>Formato: </p> <p>${v.file.type}</p>
                            </div>
                            <div class="video-info">
                                <p>Ultima modificación: </p> <p>${new Date(v.file.lastModified).toLocaleDateString()}</p>
                            </div>
                        `)}
                    </div>

                    <hr class="l-vertical" />

                    <div class="section__footer--inforight inforight">
                        <p>Resolucion: </p>
                        <p>FPS: </p>
                        <p>Lut: </p>
                        <p>Otro: </p>
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


                /* HEADER */
                .section__header {
                    display: block;
                    justify-content: center;
                    align-items: center;
                    text-align: center; 
                }

                .actions {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 0.5rem;
                }

                .search-input {
                    padding: 0.5rem;
                    border-radius: 0.5rem;
                    border: none;
                    background-color: #242424;
                    color: #e1e1e1;
                }

                /* BODY */
                .section__body {
                    display: block;
                    justify-content: center;
                    align-items: center;
                    text-align: center; 
                    /* width: 45rem;
                    height: 15rem; */
                    padding: 1rem;

                    border-style: solid;
                    border-width: 0.1rem;
                    border-radius: 1rem;
                    border-color: #242424;
                }

                /* Table*/
                table {
                    width: 100%;
                    border-collapse: collapse;
                }
                th, td {
                    padding: 8px;
                    border-bottom: 1px solid #ccc;
                }
                video {
                    width: 120px;
                }

                /* FOOTER */
                .section__footer {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: .3rem 1rem;
                    gap: 0.5rem;

                    border-style: solid;
                    border-width: 0.1rem;
                    border-radius: 1rem;
                    border-color: #242424;
                }

                .infoleft {
                    display: grid;
                    /* background-color: yellow; */
                }

                .inforight {
                    text-align: left;
                    /* background-color: violet; */
                }

                .video-info {
                    display: flex;
                    gap: 1rem;
                }

            `
    }
}