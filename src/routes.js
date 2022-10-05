import NewComment from './pages/NewComment/NewComment'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import FullComment from "./pages/FullComment/FullComment"
const routes = [
    {
        path: "/comment/:id",
        component: FullComment,
    },
    {
        path: "/new-comment",
        component: NewComment,
    },
    {
        path: "/",
        component: HomePage,
    },
    {
        component: NotFound,
    },
];

export default routes;