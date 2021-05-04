class Footer extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    this.innerHTML = `
<div class="footer">
    <div class="footer-content">
      <div class="autor-copyright">
        <p class="autor-abraham-calsin">©ABRAHAM CALSIN</p>
        <span class="frontend-developer">Frontend Developer</span>
      </div>
      <!-- LINE - AUTOR AND SOCIAL -->
      <div class="divide-autor-social"><div></div></div>
      <!-- BTN IR ARRIBA -->
      <a href="javascript:void(0);" id="scroll" style="display: none"
        ><img src="Recursos/Icons/arrow-up-icon.svg" alt=""
      /></a>
      <!-- SOCIAL MEDIA -->
      <div class="social-media">
        <a
          href="https://github.com/abrahamcalsin"
          target="_blank"
          rel="noreferrer"
          ><img src="Recursos/Social-media/fa-github.svg" alt=""
        /></a>
        <a
          href="https://twitter.com/abraham_calsin"
          target="_blank"
          rel="noreferrer"
          ><img src="Recursos/Social-media/fa-twitter.svg" alt=""
        /></a>
        <a
          href="https://www.instagram.com/abrahamcalsin"
          target="_blank"
          rel="noreferrer"
          ><img src="Recursos/Social-media/fa-instagram.svg" alt=""
        /></a>
        <a
          href="https://www.facebook.com/abrahamcalsin"
          target="_blank"
          rel="noreferrer"
          ><img src="Recursos/Social-media/fa-facebook.svg" alt=""
        /></a>
        <a
          href="https://www.linkedin.com/in/abrahamcalsin"
          target="_blank"
          rel="noreferrer"
          ><img src="Recursos/Social-media/fa-linkedin.svg" alt=""
        /></a>
      </div>
    </div>
  </div>
        `
  }
}

customElements.define('footer-component', Footer)
