class home extends HTMLElement 
        {
            connectedCallback() 
            {
              
                this.innerHTML= ` <div class="container">
          <section class="home" id="home">
    <div class="social">
        <a href="https://github.com/garima7780"><i class='bx bxl-github'></i></a>
        <a href="https://instagram.com/tanupriya__sharma/"><i class='bx bxl-instagram'></i></a>
        <a href="https://snapchat.com/kashish7780"><i class='bx bxl-snapchat'></i></a>
    </div>
    <div class="home-img">
        <img src="tanu.jpg" alt="">
    </div>
    <div class="home-text">
        <span>Hello, I'm</span>
        <h1>TANUPRIYA SHARMA</h1>
        <h2>CLOUD COMPUTING Developer</h2>

    </div>
</section>
</div>`
}
};


customElements.define('app-home', home);