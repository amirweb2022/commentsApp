import NewComment from './pages/NewComments'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
const routes = [
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