import { LitElement, css, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// ROUTER
import '@router/router'

@customElement('my-element')
export class MyElement extends LitElement {


  render() {
    return html`
      <div>
        <main-router></main-router>
      </div>
    `
  }

  static styles = css`
    :host {
      /* display: block; */
      /* max-width: 1280px; */
      margin: 0 auto;
      padding: .5rem;
      text-align: center;
      background-color: aqua;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement
  }
}
