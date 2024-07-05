class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =   `

        <!-- Navigation Bar -->
         <nav class="nav-bar">

            <!-- Hamburger Menu Icon -->
            <div>
                <img src="/assets/icon & Logo/hamburger-icon.svg" alt="">
            </div>

            <!-- Application Title -->
            <h2>Diary Application</h2>

            <!-- User Avatar or Notification Icon -->
            <div>
                <img src="../assets/images/msg909395067-175984.jpg" alt="">
            </div>
        </nav>
        `
    }
}
customElements.define('navbar-component', Navbar)