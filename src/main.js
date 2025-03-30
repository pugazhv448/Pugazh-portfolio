import '../styles/style.css';
import '../styles/component/header.css';
import '../styles/component/hero.css';
import '../styles/component/about.css';
import '../styles/component/project.css';
import '../styles/component/contact.css';
import '../styles/component/cont.css';
import '../styles/component/footer.css';
import '../styles/component/mobile.css';

import mobilenav from './utils/mobile-nav';
mobilenav();
import darkmode from './utils/dark-mode';

darkmode();
import lazyLoading from'./utils/lazyloading';
lazyLoading();



document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const statusMessage = document.getElementById('statusMessage');
  
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show loading state
      statusMessage.textContent = 'Sending message...';
      statusMessage.className = 'status-message';
      statusMessage.style.display = 'block';
      
      // Collect form data
      const formData = new FormData(contactForm);
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });
      
      // Using FormSubmit.co service
      fetch('https://formsubmit.co/ajax/pugazhv1509@gmail.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formObject)
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          statusMessage.textContent = 'Message sent successfully! I will get back to you soon.';
          statusMessage.className = 'status-message success';
          contactForm.reset();
        } else {
          throw new Error('Failed to send message');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        statusMessage.textContent = 'There was an error sending your message. Please try again later or contact me directly at pugazhv1509@gmail.com';
        statusMessage.className = 'status-message error';
      });
    });
  });