
import { LitElement, css, html} from 'lit'
import { customElement } from 'lit/decorators.js'
import logo from '@assets/img/logo/logo300px.webp'

@customElement('top-bar-desktop')
export class TopBarDesktop extends LitElement {

    render() {
        return html`
            <div class='menu'>

                <div class='menu__home'>
                    <!-- <div>
                        <img class='logo' src="${logo}" alt="Logo" width="70">
                    </div> -->
                    <div>
                        <h3>NC</h3>
                    </div>
                </div>

                <div class='menu__nav'>
                    <nav class='menu__nav--nav nav'>

                        <a class='menu__nav--nav--item item' href='/videos'>
                            <div>
                                <svg class="icon" viewBox="0 0 24 24"><title>videos</title><path d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" /></svg>
                            </div>
                        </a>

                        <a class='menu__nav--nav--item item' href='/converter'>
                            <div>
                                <svg class="icon" viewBox="0 0 24 24"><title>video-converter</title><path d="M13,15.5V13H7V15.5L3.5,12L7,8.5V11H13V8.5L16.5,12M18,9.5V6A1,1 0 0,0 17,5H3A1,1 0 0,0 2,6V18A1,1 0 0,0 3,19H17A1,1 0 0,0 18,18V14.5L22,18.5V5.5L18,9.5Z" /></svg>
                            </div>
                        </a>

                        <a class='menu__nav--nav--item item' href='/finished'>
                            <div>
                                <svg class="icon" viewBox="0 0 24 24"><title>video-check</title><path d="M17 10.5V7C17 6.45 16.55 6 16 6H4C3.45 6 3 6.45 3 7V17C3 17.55 3.45 18 4 18H16C16.55 18 17 17.55 17 17V13.5L21 17.5V6.5L17 10.5M8.93 15L6 11.8L7.24 10.56L8.93 12.26L12.76 8.43L14 9.93L8.93 15Z" /></svg>
                            </div>
                        </a>

                        <a class='menu__nav--nav--item item' href='/about'>
                            <div>
                                <svg class="icon" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>
                            </div>
                        </a>
                    </nav>

                    <hr class="l-vertical" />

                    <div class='menu__footer'>
                        <a class='menu__footer--item fitem'>
                            <div>
                                <svg class="ficon" viewBox="0 0 24 24"><title>responsive</title><path d="M4,6V16H9V12A2,2 0 0,1 11,10H16A2,2 0 0,1 18,12V16H20V6H4M0,20V18H4A2,2 0 0,1 2,16V6A2,2 0 0,1 4,4H20A2,2 0 0,1 22,6V16A2,2 0 0,1 20,18H24V20H18V20C18,21.11 17.1,22 16,22H11A2,2 0 0,1 9,20H9L0,20M11.5,20A0.5,0.5 0 0,0 11,20.5A0.5,0.5 0 0,0 11.5,21A0.5,0.5 0 0,0 12,20.5A0.5,0.5 0 0,0 11.5,20M15.5,20A0.5,0.5 0 0,0 15,20.5A0.5,0.5 0 0,0 15.5,21A0.5,0.5 0 0,0 16,20.5A0.5,0.5 0 0,0 15.5,20M13,20V21H14V20H13M11,12V19H16V12H11Z" /></svg>
                            </div>
                        </a>

                        <a class='menu__footer--item fitem'>
                            <div>
                                <svg class="ficon" viewBox="0 0 24 24"><title>close-circle</title><path d="M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z" /></svg>
                            </div>
                        </a>
                    </div>

                </div>

            </div>
            
        `
    }

    static get styles() {
        return css`
            :host {
                margin: 0;
                padding: .5rem;
                text-align: center;
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

            .l-vertical {
                width: 1px;
                height: 1.5rem;
                background-color: #ccc;
            }

            .logo {
                border-radius: 50%;
            }

            .icon {
                width: 1.8rem;
                fill: #e1e1e1;
            }

            .ficon {
                width: 1.8rem;
                fill: #e1e1e1;
            }

            ul {
                text-align: center;
                list-style: none;
                margin: 0 0.3rem;
                padding: 0.2rem 0.8rem;
                border-radius: 0.5rem;
            }

            .menu {
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding: .5rem;
            }

            .menu__home {
                display: flex;
            }

            .menu__title {
                display: inline-block;
            }

            .menu__nav {
                display: flex;
                justify-content: space-around;
                justify-content: center;
                align-items: center;  
            }

            .nav {
                display: flex;
                justify-content: space-around;
                justify-content: center;
                align-items: center;                
            }

            .item {
                display: flex;
                align-items: center;
                padding: .5rem;
                gap: 0.5rem;
            }

            .menu__footer {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0.5rem;
                gap: 0.8rem;
            }
            
        `
    }
}