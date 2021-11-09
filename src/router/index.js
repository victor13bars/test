import Main from "../pages/Main";
import Setting from "../pages/Setting";
import MapSettings from "../pages/MapSettings";
import Timer from "../pages/Timer";

export const routes = [
    {path: '/main', exact: true, component: Main},
    {path: '/settings', exact: true, component: Setting},
    {path: '/mapSettings', exact: true, component: MapSettings},
    {path: '/timer', exact: true, component: Timer}
]