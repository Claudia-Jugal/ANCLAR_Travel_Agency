

   

   
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const serviceID = 'service_bne225s'; 
            const templateID = 'template_mv4pejr'; 

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    alert('Email sent successfully!');
                }, (err) => {
                    alert('Failed to send email. Please try again.');
                    console.error('Error:', err);
                });
        });
    