class skills extends HTMLElement 
{
    connectedCallback() 
    {
      
        this.innerHTML= `
<div class="container">
<section class="skills" id="skills">
    <div class="heading">
        <h2>Skills</h2>
        <span>My Skills</span>
    </div>

    <div class="skills-container">
        <div class="bars">

            <div class="bars-box">
                <h3>HTML</h3>
                <span>80%</span>
                <div class="light-bar"></div>
                <div class="percent-bar html-bar"></div>
            </div>

            <div class="bars-box">
                <h3>CSS</h3>
                <span>70%</span>
                <div class="light-bar"></div>
                <div class="percent-bar css-bar"></div>
            </div>

            <div class="bars-box">
                <h3>C LANGUAGE</h3>
                <span>90%</span>
                <div class="light-bar"></div>
                <div class="percent-bar c-bar"></div>
            </div>

            <div class="bars-box">
                <h3>PYTHON</h3>
                <span>75%</span>
                <div class="light-bar"></div>
                <div class="percent-bar python-bar"></div>
            </div>
        </div>
        <div class="skills-img">
            <img src="skill4.png"alt="Skill"></img>
        </div>
    </div>
</section>
</div> `
}
};


customElements.define('app-skills', skills);
