class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =   `
          <div class="footer-container">
            <div class="footer-inner">
                <div class="logo-icon">
                    <div class="logo">
                        <img src="/assets/images/anb-logo.png" alt="">
                    </div>
                    <div class="icon">
                         <a href="https://www.facebook.com/profile.php?id=100011506560297&mibextid=LQQJ4d">
                            <img src="/assets/icon & Logo/facebook-icon.svg" alt="">
                         </a>
                         <a href="https://www.facebook.com/profile.php?id=100011506560297&mibextid=LQQJ4d">
                            <img src="/assets/icon & Logo/instagram-icon.svg" alt="">
                         </a>
                         <a href="https://www.tiktok.com/@hangbrathna?_t=8nWDcIlPKWP&_r=1">
                            <img src="/assets/icon & Logo/tiktok-icon.svg" alt="">
                         </a>
                    </div>
                </div>
                <div class="line"></div>
                <div class="copyright">
                    <h4>©2024 Diary Application. Created by Hong Than Brathna. All rights reserved.</h4>
                </div>
            </div>
        </div>
        `
    }
}
customElements.define('footer-component', Footer)