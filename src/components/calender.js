class Calender extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =   `
            <div class="calender">
                <div class="show-current-date">
                    <button class="exit-button" id="prev-week">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M21 11H4.414l2.293-2.293a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L4.414 13H21a1 1 0 0 0 0-2Z"/>
                        </svg>
                    </button>
                    <div class="today-date ">17 July, 2024</div>
                    <button class="exit-button rotate" id="next-week">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M21 11H4.414l2.293-2.293a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L4.414 13H21a1 1 0 0 0 0-2Z"/>
                        </svg>
                    </button>
                </div>
                <div class="box-date">
                    <div class="days">
                        <div>MON</div>
                        <div>TUE</div>
                        <div>WED</div>
                        <div>THU</div>
                        <div>FRI</div>
                        <div>SAT</div>
                        <div>SUN</div>
                    </div>
                    <div class="dates" id="dates-container"> 
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('calender-component', Calender)