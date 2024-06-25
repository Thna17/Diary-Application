class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =   `
         <div class="nav-bar">
            <div>
                <img src="/assets/icon & Logo/hamburger-icon.svg" alt="">
            </div>
            <h2>Diary Application</h2>
            <div>
                <img src="/assets/images/photo1718259086.jpeg" alt="">
            </div>
        </div>
        `
    }
}
customElements.define('navbar-component', Navbar)