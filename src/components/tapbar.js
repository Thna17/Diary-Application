class Tapbar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =   `
            <!-- Tab Bar -->
            <div class="tab-bar">

                 <!-- Dashboard Tab -->
                <div class="tab">
                    <img src="/assets/icon & Logo/dashboard.svg" alt="">
                </div>

                <!-- List Tab -->
                <div class="tab list-button">
                    <img src="/assets/icon & Logo/list.svg" alt="">
                </div>

                <!-- Add Tab -->
                <div class="tab add-button">
                    <img src="/assets/icon & Logo/add-icon.svg" alt="">
                </div>

                <!-- Notification Tab -->
                <div class="tab">
                    <img src="/assets/icon & Logo/notification-icon.svg" alt="">
                </div>

                <!-- Setting Tab -->
                <div class="tab">
                    <img src="/assets/icon & Logo/setting-icon.svg" alt="">
                </div>
            </div>
        `
    }
}
customElements.define('tapbar-component', Tapbar)