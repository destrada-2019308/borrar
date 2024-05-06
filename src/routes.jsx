import App from "./App";
import { ContentRole } from "./Components/ContentRole";
import {NotFoundPage} from './Pages/NotFoundPage/NotFoundPage.jsx'
//Rutas de cliente
import { RoomsClient } from "./Pages/HomePages/ClientPage/RoomsClient";
import { HotelsClient } from "./Pages/HomePages/ClientPage/HotelsClient";

export const routes = [
    {
        path: '/',
        element: <App />
    }, 
    {
        path: '/home/*',
        element: <ContentRole/>
    }, 
    {
        path: '*', 
        element: <NotFoundPage/>
    },
    //Parte de Cliente (Pampichi)
    {
        path:'/home/zaru/rooms',
        element: <RoomsClient/>
    },
    {
        path: '/home/zaru/hotels',
        element: <HotelsClient/>
    }
]