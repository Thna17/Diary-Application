class Sidebar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =   `

            <!-- Sidebar -->
            <div class="sidebar">

                <!-- Profile Tab -->
                <div class="tab profile">
                    <img src="../assets/images/msg909395067-175984.jpg" alt="">
                    <h2>Brathna</h2>
                </div>

                 <!-- Dashboard Tab -->
                <div class="tab">
                    <img src="/assets/icon & Logo/dashboard.svg" alt="">
                    Dashboard
                </div>

                <!-- List Tab -->
                <div class="tab list-button">
                    <img src="/assets/icon & Logo/list.svg" alt="">
                    List
                </div>

                 <!-- Add Tab -->
                <div class="tab add-button">
                    <img src="/assets/icon & Logo/add-icon.svg" alt="">
                    Add
                </div>

                <!-- Notification Tab -->
                <div class="tab">
                    <img src="/assets/icon & Logo/notification-icon.svg" alt="">
                    Notification
                </div>

                  <!-- Setting Tab -->
                <div class="tab">
                    <img src="/assets/icon & Logo/setting-icon.svg" alt="">
                    Setting
                </div>
            </div>
        `
    }
}
customElements.define('sidebar-component', Sidebar)