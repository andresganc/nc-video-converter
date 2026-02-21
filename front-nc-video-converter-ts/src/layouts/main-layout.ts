
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'

// MENUS
import '@views/menus/vertical-menu'

// PAGES
import '@views/page-home/index'
import '@views/page-videos/index'
import '@views/page-converter/index'
import '@views/page-finished/index'
import '@views/page-about/index'

@customElement('main-layout')
export class MainLayout extends LitElement {

    @property({ type: String })
    main = "home";

    renderMain() {
        switch (this.main) {
        case 'videos':
            return html`<index-page-videos></index-page-videos>`;
        case 'converter':
            return html`<index-page-converter></index-page-converter>`;
        case 'finished':
            return html`<index-page-finished></index-page-finished>`;
        case 'about':
            return html`<index-page-about></index-page-about>`;
        case 'home':
        default:
            return html`<index-page-home></index-page-home>`;
        }
    }

    render() {
        return html`
            <div class='layout'>
                <div class='layout__nav nav'>
                    <vertical-menu></vertical-menu>
                </div>
                <main class='layout__main main'>
                        ${this.renderMain()}
                </main>    
            </div>
        `
    }

    static get styles() {
        return css`
            :host {
                margin: 0;
                padding: 0;
            }

            .layout {
                display: flex;
            }

            /* .nav {
                display: inline-block;
                padding: .5rem;
            } */

            /* .main {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
            } */


        `
    }
}
