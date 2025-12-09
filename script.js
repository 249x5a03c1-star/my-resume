document.addEventListener('DOMContentLoaded', (event) => {
    // 1. Creative Alert on Form Submission
    const contactForm = document.querySelector('form');
    
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Check if essential fields are filled (basic client-side validation)
            const name = document.querySelector('input[name="name"]').value;
            const email = document.querySelector('input[name="email"]').value;
            const message = document.querySelector('textarea[name="message"]').value;

            if (name && email && message) {
                // A creative alert to confirm the action
                alert("🚀 Message sent! Surendra will get back to you soon. Thanks for connecting!");
            } else {
                // Simple warning for missing fields
                alert("Please fill in all the fields before submitting.");
            }
            // Note: The form will still attempt to submit to formspree.io as defined in the HTML action.
        });
    }

    // 2. Simple console log for tracking
    console.log("Resume website loaded successfully. Surendra Manukrindi, Mechanical Student.");
});
