class Tapbar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =   `
            <div class="tab-bar">
                <div class="tab">
                    <img src="/assets/icon & Logo/dashboard.svg" alt="">
                </div>
                <div class="tab list-button">
                    <img src="/assets/icon & Logo/list.svg" alt="">
                </div>
                <div class="tab add-button">
                    <img src="/assets/icon & Logo/add-icon.svg" alt="">
                </div>
                <div class="tab">
                    <img src="/assets/icon & Logo/notification-icon.svg" alt="">
                </div>
                <div class="tab">
                    <img src="/assets/icon & Logo/setting-icon.svg" alt="">
                </div>
            </div>
        `
    }
}
customElements.define('tapbar-component', Tapbar)