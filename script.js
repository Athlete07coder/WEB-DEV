document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = mobileMenu.querySelectorAll('a');

    // 1. Mobile Menu Toggle Logic
    mobileMenuBtn.addEventListener('click', () => {
        const isExpanded = mobileMenu.classList.contains('hidden');
        if (isExpanded) {
            mobileMenu.classList.remove('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', 'true');
        } else {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // 2. Simple Contact Form Submission Handling
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data (mock submission)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation check (client-side)
        if (!name || !email || !message) {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.className = 'mt-4 text-center font-medium text-red-600 block';
            return;
        }

        // Simulate API call delay (2 seconds)
        formMessage.textContent = 'Sending message...';
        formMessage.className = 'mt-4 text-center font-medium text-indigo-600 block';

        setTimeout(() => {
            // Successful submission simulation
            console.log('Form Submitted:', { name, email, message });
            formMessage.textContent = 'Thank you! Your message has been sent successfully.';
            formMessage.className = 'mt-4 text-center font-medium text-green-600 block';

            // Clear form
            contactForm.reset();
        }, 2000);
    });
});