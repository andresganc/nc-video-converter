
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Router } from '@lit-labs/router'

// LAYOUTS
import '@layouts/main-layout'

@customElement('main-router')
export class MainRouter extends LitElement {

    private router = new Router(this, [

        {
        path: '/',
        render: () => html`<home-layout page="home"></home-layout>`,
        },

        {
        path: '/about',
        render: () => html`<home-layout page="about"></home-layout>`,
        },

        {
        path: '/main/converter',
        render: () => html`<main-layout page="converter"></main-layout>`,
        },

        {
        path: '/main/:name',
        render: ({ params }) =>
            html`<main-layout component=${params.name}></main-layout>`,
        },
    ]);

    render() {
        return html`${this.router.outlet()}`;
    }
    
}