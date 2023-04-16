class services extends HTMLElement 
{
    connectedCallback() 
    {
      
        this.innerHTML= `<div class="container">
<section class="services" id="services">
    <div class="heading">
        <h2>Services</h2>
        <span>Our Services</span>
    </div>
    <div class="services-content">

        <div class="services-box">
            <i class='bx bx-code-alt'></i>
            <h3>CLOUD Development</h3>
            <a href="#">Learn More</a>
        </div>

        <div class="services-box">
            <i class='bx bx-brush'></i>
            <h3>CLOUD APPLICATION Design</h3>
            <a href="#">Learn More</a>
        </div>
          </div>
     </section>
     </div>`
    }
      };

        customElements.define('app-services', services);
        