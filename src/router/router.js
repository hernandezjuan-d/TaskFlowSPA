import {notFoundComponents, routes} from "./routes/"

export function renderRoute(path) {
    const app = document.getElementById("app")

    if (!app) {
        return
    }


    const currentPath = window.location.pathname
    const route = routes[currentPath] ?? {render: notFoundComponents.renderNotFound}  }
    
    app.innerHTML = route.renderView()