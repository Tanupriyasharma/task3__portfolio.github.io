class contact extends HTMLElement 
{
    connectedCallback() 
    {
      
        this.innerHTML=    `<div class="container">
   <section class="contact" id="contact">
    <div class="heading">
        <h2>Contact</h2>
        <span>Connect With Us</span>
    </div>
    <div class="contact-form">
        <form action="/contact_form" method="post">
            <input type="text" name="name" placeholder="Your Name">
            <input type="email" name="email" id="" placeholder="Your Email">
            <textare name="message" id="" cols="30" rows="10" placeholder="Write Message Here..."></textare>
            <input type="button" name="submit" value="Send" class="contact-button">
        </form>
        </div>
           </section>
           </div>  `
        }
        };

         customElements.define('app-contact', contact);     
