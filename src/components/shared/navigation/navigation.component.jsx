import "./navigation.styles"
import { NAV_LINKS } from "../../../utils/constants/shared.constants"

const NavigationBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark m-3 p-3">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Chat Sigma</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href={`${NAV_LINKS.paths.home}`}>About</a>
            </li>

            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href={`${NAV_LINKS.paths.chat}`}>Chat</a>
            </li>

            <li class="nav-item">
              <a class="nav-link disabled" aria-current="page" href={`${NAV_LINKS.paths.export}`}>Export</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href={`${NAV_LINKS.paths.github.url}`}><ion-icon name="logo-github"></ion-icon></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={`${NAV_LINKS.paths.medium.url}`}><ion-icon name="logo-medium"></ion-icon></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={`${NAV_LINKS.paths.linkedin.url}`}><ion-icon name="logo-linkedin"></ion-icon></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={`${NAV_LINKS.paths.portfolio.url}`}>tahmidsajin.com</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar