class Header extends HTMLElement {
  constructor() {
    super()
  }

  connectedCallback() {
    const homeHref = this.getAttribute('brand-href')

    this.innerHTML = `
    <div class="header">
          <div class="container header-container">
            <a href="${homeHref}" class="logotype-abrahamcalsin"
              ><img
                src="Recursos/Img - Logotype/logotype-vector.svg"
                alt=""
                class="img-lo-ac"
            /></a>
            <div class="menu_navbar">
              <input type="checkbox" id="btn_menu" />
              <label for="btn_menu" class="btn_menu"
                ><i class="fa fa-bars active"></i
              ></label>
              <nav class="navbar">
                <ul>
                  <li>
                    <a
                      href="index.html"
                      class="navbar-inicio"
                      style="color: #ff7f2aff"
                      >Inicio</a
                    >
                  </li>
                  <li>
                    <a href="Pages/motivation.html" class="navbar-motivacion"
                      >motivación</a
                    >
                  </li>
                  <li><a href="#" class="sobre-mi">sobre mi</a></li>
                  <li class="contact-abrahamcalsin"><a href="#">contacto</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
    `
  }
}

customElements.define('header-component', Header)
