import App from "./App";
import { ContentRole } from "./Components/ContentRole";
import {NotFoundPage} from './Pages/NotFoundPage/NotFoundPage.jsx'

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
    }
]