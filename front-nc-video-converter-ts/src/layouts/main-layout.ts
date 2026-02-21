
import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js'

// MENUS
import '@views/menus/horizontal-menu'
import '@views/menus/vertical-menu'

// PAGES
import '@views/page-converter/page-converter-desktop'
import '@views/page-finished/page-finished-desktop'

@customElement('main-layout')
export class MainLayout extends LitElement {

    @property({ type: String })
    main = "home";

    renderMain() {
        switch (this.main) {
        case 'converter':
            return html`<page-converter-desktop></page-converter-desktop>`;
        case 'finished':
            return html`<page-finished-desktop></page-finished-desktop>`;
        case 'home':
        default:
            return html`<page-converter-desktop></page-converter-desktop>`;
        }
    }

    render() {
        return html`
            <div class='layout'>
                <div class='layout__menu menu'>
                    <horizontal-menu></horizontal-menu>
                </div>
                <div class='layout__body body'>
                    <div class='layout__body--nav nav'>
                        <vertical-menu></vertical-menu>
                    </div>
                    <main class='layout__body--main main'>
                        ${this.renderMain()}
                    </main>
                </div>     
            </div>
        `
    }

    static get styles() {
        return css`
            :host {
                display: inline-block;
                margin: 0;
                padding: 0;
            }

            .layout {
                display: inline-block;
                padding: .5rem;
                /* background-color: #424242; */
            }

            .body {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
            }


        `
    }
}
