
import { LitElement, css, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('main-layout')
export class MainLayout extends LitElement {

    render() {
        return html`
            <div>
                <h1>Main Layout</h1>
            </div>
        `
    }

    static styles = css`
        :host {
            display: block;
            padding: 1rem;
            background-color: #f0f0f0;
        }
    `
}