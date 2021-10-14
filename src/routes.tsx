import Home from '../src/pages/Home';
import MainLayout from '../src/layouts/MainLayout'

const routes = [
    {
        path: '/',
        element: <MainLayout><Home /></MainLayout>,
    }
];

export default routes;
