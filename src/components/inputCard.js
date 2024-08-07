class InputCard extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =   `

            <!-- View Card Component -->
            <article class="view-card">

                 <!-- Button Container -->
                <div class="button-container">

                    <!-- Exit Button -->
                    <button class="exit-button" id="exit-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M21 11H4.414l2.293-2.293a1 1 0 0 0-1.414-1.414l-4 4a1 1 0 0 0 0 1.414l4 4a1 1 0 0 0 1.414-1.414L4.414 13H21a1 1 0 0 0 0-2Z"/>
                        </svg>
                    </button>

                     <!-- Edit Button -->
                    <button class="edit-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M19.06 3.58988L20.41 4.93988C21.2 5.71988 21.2 6.98988 20.41 7.76988L7.18 20.9999H3V16.8199L13.4 6.40988L16.23 3.58988C17.01 2.80988 18.28 2.80988 19.06 3.58988ZM5 18.9999L6.41 19.0599L16.23 9.22988L14.82 7.81988L5 17.6399V18.9999Z"/>
                        </svg>
                    </button>

                    <!-- Delete Button -->
                    <button class="delete-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M18.3405 12.875H9.65921C9.17999 12.875 8.7915 13.2635 8.7915 13.7427V20.6875C8.7915 22.1257 9.95743 23.2917 11.3957 23.2917H16.604C17.2947 23.2917 17.9571 23.0173 18.4454 22.5289C18.9338 22.0405 19.2082 21.3782 19.2082 20.6875V13.7427C19.2082 13.2635 18.8197 12.875 18.3405 12.875ZM17.125 10.7917L17.0146 10.5719C16.4436 9.42974 15.2764 8.70825 13.9995 8.70825C12.7226 8.70825 11.5553 9.42974 10.9844 10.5719L10.875 10.7917H17.125ZM13.0134 16.347C13.0134 15.9327 12.6776 15.597 12.2634 15.597C11.8492 15.597 11.5134 15.9327 11.5134 16.347H13.0134ZM11.5134 19.8188C11.5134 20.233 11.8492 20.5688 12.2634 20.5688C12.6776 20.5688 13.0134 20.233 13.0134 19.8188H11.5134ZM16.4863 16.347C16.4863 15.9327 16.1505 15.597 15.7363 15.597C15.3221 15.597 14.9863 15.9327 14.9863 16.347H16.4863ZM14.9863 19.8188C14.9863 20.233 15.3221 20.5688 15.7363 20.5688C16.1505 20.5688 16.4863 20.233 16.4863 19.8188H14.9863ZM17.1248 10.0417C16.7106 10.0417 16.3748 10.3775 16.3748 10.7917C16.3748 11.206 16.7106 11.5417 17.1248 11.5417V10.0417ZM19.2082 11.5417C19.6224 11.5417 19.9582 11.206 19.9582 10.7917C19.9582 10.3775 19.6224 10.0417 19.2082 10.0417V11.5417ZM10.8748 11.5417C11.2891 11.5417 11.6248 11.206 11.6248 10.7917C11.6248 10.3775 11.2891 10.0417 10.8748 10.0417V11.5417ZM8.7915 10.0417C8.37729 10.0417 8.0415 10.3775 8.0415 10.7917C8.0415 11.206 8.37729 11.5417 8.7915 11.5417V10.0417ZM11.5134 16.347V19.8188H13.0134V16.347H11.5134ZM14.9863 16.347V19.8188H16.4863V16.347H14.9863ZM17.1248 11.5417H19.2082V10.0417H17.1248V11.5417ZM10.8748 10.0417H8.7915V11.5417H10.8748V10.0417Z" fill="#003554"/>
                        </svg>
                    </button>
                </div>

                 <!-- Heading Section -->
                <div class="heading" id="heading">
                    <h2>
                        <input type="text" placeholder="Untitled" class="input-title" id="input-title">
                    </h2>
                </div>

                <!-- Metadata Information -->
                <div class="meta-info">
                    <div class="created-date">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.50001 15C11.6021 15 15 11.6094 15 7.49998C15 3.39787 11.6021 0 7.49275 0C3.39062 0 0 3.39787 0 7.49998C0 11.6094 3.39788 15 7.50001 15ZM7.50001 13.5261C4.16022 13.5261 1.48113 10.8398 1.48113 7.49998C1.48113 4.1602 4.15296 1.48112 7.49275 1.48112C10.8325 1.48112 13.5261 4.1602 13.5261 7.49998C13.5261 10.8398 10.8398 13.5261 7.50001 13.5261ZM3.82624 8.40028H7.49275C7.81947 8.40028 8.07359 8.14616 8.07359 7.8267V3.06389C8.07359 2.74442 7.81947 2.49032 7.49275 2.49032C7.17329 2.49032 6.91917 2.74442 6.91917 3.06389V7.25313H3.82624C3.49952 7.25313 3.25267 7.49998 3.25267 7.8267C3.25267 8.14616 3.49952 8.40028 3.82624 8.40028Z" fill="#4C6B73"/>
                        </svg>
                        <span>Created:</span>
                        <div class="date-mob">
                           <input type="date" id="input-mob" name="input-mob">
                        </div>

                    </div>
                    <div class="date">
                          <input type="date" id="input-dsk" name="input-dsk">
                    </div>

                    <!-- Tag Section -->
                    <div class="tag">
                        <h3>Tag:</h3>
                        <h3>
                            <input type="text" placeholder="Empty" class="input-tag" id="input-tag">
                        </h3> 
                    </div>
                </div>

                <!-- Mood Section -->
                <div class="mood">
                    <span>Mood:</span>
                    <div class="mood-icons">
                        <!-- Add mood icons or symbols here -->
                    </div>
                </div>

                <!-- Separator Line -->
                <hr class="line">

                <!-- Body Text Section -->
                <div class="body-text">
                    <textarea placeholder="Write Something..." class="input-body-text" id="input-body-text"></textarea>
                </div>

                 <!-- Accept Button -->
                <button class="accept-button" id="accept-button">
                       Save
                </button>
            </article>
        `
    }
}
customElements.define('input-card-component', InputCard)