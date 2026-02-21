
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Router } from '@lit-labs/router'

// LAYOUTS
import '@layouts/main-layout'
import '@layouts/home-layout'

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
        path: '/main',
        render: () => html`<main-layout main="converter"></main-layout>`,
        },

        {
        path: '/main/converter',
        render: () => html`<main-layout main="converter"></main-layout>`,
        },

        {
        path: '/main/finished',
        render: () => html`<main-layout main="finished"></main-layout>`,
        },

        {
        path: '/main/:name',
        render: ({ params }) =>
            html`<main-layout main=${params.name}></main-layout>`,
        },
    ]);

    render() {
        return html`${this.router.outlet()}`;
    }
    
}