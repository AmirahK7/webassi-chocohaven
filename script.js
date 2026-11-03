document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Interactive Form Handling & Validation
    // ==========================================
    const orderForm = document.getElementById('order-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const formMessage = document.getElementById('form-message');

    if (orderForm) {
        orderForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Stop page refresh

            const username = usernameInput.value;
            const email = emailInput.value;

            if (username && email) {
                formMessage.textContent = `Thank you for visiting, ${username}! We will contact you at ${email}.`;
            }
        });
    }


    // ==========================================
    // 2. Table Row Highlighting (Menu Table)
    // ==========================================
    const tableRows = document.querySelectorAll('tbody tr');

    tableRows.forEach(row => {
        row.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#f0e0d0'; // Highlight color
        });

        row.addEventListener('mouseout', function () {
            this.style.backgroundColor = ''; // Restore default CSS
        });
    });


    // ==========================================
    // 3. Theme / Style Switcher
    // ==========================================
    const themeBtn = document.getElementById('theme-toggle');

    if (themeBtn) {
        themeBtn.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
        });
    }


    // ==========================================
    // 4. Interactive Order Total Calculator (Lists)
    // ==========================================
    const itemCheckboxes = document.querySelectorAll('.menu-item-checkbox');
    const totalDisplay = document.getElementById('total');

    function calculateTotal() {
        let total = 0;
        itemCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseFloat(checkbox.value);
            }
        });
        totalDisplay.textContent = `$${total.toFixed(2)}`;
    }

    itemCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });


    // ==========================================
    // 5. Type Converter - Age Verification for Special Discount
    // ==========================================
    const birthYearInput = document.getElementById('birth-year');
    const discountMessage = document.getElementById('discount-message');

    if (birthYearInput) {
        birthYearInput.addEventListener('change', function () {
            const birthYear = parseInt(birthYearInput.value);
            const currentYear = 2026;
            const age = currentYear - birthYear;

            if (!isNaN(age) && (age <= 22 || age >= 65)) {
                discountMessage.textContent = "You qualify for a student/senior special discount!";
            } else {
                discountMessage.textContent = "";
            }
        });
    }


    // ==========================================
    // 6. "Read More" Toggle for Cafe Article
    // ==========================================
    const readMoreBtn = document.getElementById('read-more-btn');
    const extraParagraph = document.getElementById('extra-content');

    if (readMoreBtn && extraParagraph) {
        readMoreBtn.addEventListener('click', function () {
            if (extraParagraph.style.display === 'none') {
                extraParagraph.style.display = 'block';
                readMoreBtn.textContent = 'Read Less';
            } else {
                extraParagraph.style.display = 'none';
                readMoreBtn.textContent = 'Read More';
            }
        });
    }


    // ==========================================
    // 7. Live Category Filter for Menu Items
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedCategory = this.getAttribute('data-category');

            menuItems.forEach(item => {
                if (selectedCategory === 'All' || item.classList.contains(selectedCategory)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });


    // ==========================================
    // 8. Dynamic Opening Status (Headings & Dates)
    // ==========================================
    const statusBanner = document.getElementById('status-banner');

    if (statusBanner) {
        const currentHour = new Date().getHours();

        // Open between 8 AM (8) and 8 PM (20)
        if (currentHour >= 8 && currentHour < 20) {
            statusBanner.textContent = "We are Open";
            statusBanner.style.color = "lightgreen";
        } else {
            statusBanner.textContent = "Closed - Open at 8 AM";
            statusBanner.style.color = "#ff6b6b";
        }
    }


    // ==========================================
    // 9. Character Counter for Special Request Box (Forms)
    // ==========================================
    const textarea = document.getElementById('special-notes');
    const charCounter = document.getElementById('char-count');
    const maxLength = 100;

    if (textarea && charCounter) {
        textarea.addEventListener('input', function () {
            const remaining = maxLength - textarea.value.length;
            charCounter.textContent = `${remaining} characters remaining`;
        });
    }

});