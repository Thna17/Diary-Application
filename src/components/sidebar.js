class Sidebar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =   `
            <div class="sidebar">
                <div class="tab profile">
                    <img src="../assets/images/msg909395067-175984.jpg" alt="">
                    <h2>Brathna</h2>
                </div>
                <div class="tab">
                    <img src="/assets/icon & Logo/dashboard.svg" alt="">
                    Dashboard
                </div>
                <div class="tab list-button">
                    <img src="/assets/icon & Logo/list.svg" alt="">
                    List
                </div>
                <div class="tab add-button">
                    <img src="/assets/icon & Logo/add-icon.svg" alt="">
                    Add
                </div>
                <div class="tab">
                    <img src="/assets/icon & Logo/notification-icon.svg" alt="">
                    Notification
                </div>
                <div class="tab">
                    <img src="/assets/icon & Logo/setting-icon.svg" alt="">
                    Setting
                </div>
            </div>
        `
    }
}
customElements.define('sidebar-component', Sidebar)