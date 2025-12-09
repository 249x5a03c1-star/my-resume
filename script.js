document.addEventListener('DOMContentLoaded', (event) => {
    // Select the form using its ID
    const contactForm = document.getElementById('contactForm');
    
    if(contactForm) {
        // Add event listener for form submission
        contactForm.addEventListener('submit', function(e) {
            // Basic client-side check to enhance UX
            const name = document.querySelector('input[name="name"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const message = document.querySelector('textarea[name="message"]').value;

            if (name && email && message) {
                // Creative confirmation alert (will execute before the form submits to formspree)
                alert("🚀 Message sent! Surendra will get back to you soon. Thank you for reaching out.");
            } else {
                // The browser's 'required' attribute should handle this, but this is a fallback.
                console.warn("Form submission attempted with missing required fields.");
            }
        });
    }

    // Console log for tracking deployment success
    console.log("Resume website scripts loaded successfully.");
});
