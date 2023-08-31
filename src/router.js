import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import BookSelectorPage from "./components/pages/bookSelectorPage/bookSelectorPage";
import DetailSection from "./components/pages/detailSection";
import HousesSelectorPage from "./components/pages/housesSelectorPage/housesSelectorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: "/books/",
                element: <BookSelectorPage/>
            },
            {
                path: "/books/:id",
                element: <DetailSection/>
            }
        ]
    },

]);

export {router}