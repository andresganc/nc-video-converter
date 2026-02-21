
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
        render: () => html`<main-layout page="home"></main-layout>`,
        },
        {
        path: '/about',
        render: () => html`<home-layout page="about"></home-layout>`,
        },
        {
        path: '/components/:name',
        render: ({ params }) =>
            html`<components-layout component=${params.name}></components-layout>`,
        },
    ]);

    render() {
        return html`${this.router.outlet()}`;
    }
    
}