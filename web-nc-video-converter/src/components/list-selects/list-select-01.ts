
import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js'

@customElement('list-select-01')
export class ListSelect01 extends LitElement {

    @state()
    selectedOption: string = '';

    handleSelectChange(event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        this.selectedOption = selectElement.value;
    }

    render() {
        return html`
            <div>
                <label for="options">Choose an option:</label>
                <select id="options" class="select-estilo" @change="${this.handleSelectChange}">
                    <option value="">--Please choose an option--</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>

                ${this.selectedOption ? html`<p>You selected: ${this.selectedOption}</p>` : ''}
            </div>
        `;
    }

    static styles = css`
            .select-estilo {
                padding: 8px;
                border-radius: 5px;
                border: 1px solid #ccc;
                background-color: #f9f9f9;
                cursor: pointer;
            }

            .select-estilo:hover {
                background-color: #e0e0e0;
            }

            .select-estilo:focus {
                outline: none;
                border-color: #007BFF;
                box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
            }

            p {
                margin-top: 10px;
                color: #333;
                font-size: 1rem;
            }
    `;
}

