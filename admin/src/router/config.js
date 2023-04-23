import Home from '../views/home/Home.vue'
import Center from '../views/center/Center.vue'
import NewsAdd from '../views/news-manage/NewsAdd.vue'
import NewsList from '../views/news-manage/NewsList.vue'
import NewsEdit from '../views/news-manage/NewsEdit.vue'
import UserList from '../views/user-manage/UserList.vue'
import UserAdd from '../views/user-manage/UserAdd.vue'
import ProductAdd from '../views/product-manage/ProductAdd.vue'
import ProductList from '../views/product-manage/ProductList.vue'
import ProductEdit from '../views/product-manage/ProductEdit.vue'
import NotFound from '../views/notfound/NotFound.vue'

const routesConfig = [
    {
        path: '/index',
        component: Home
    },
    {
        path: '/center',
        component: Center
    },
    {
        path: '/user-manage/UserAdd',
        component: UserAdd,
        requireAdmin: true
    },
    {
        path: '/user-manage/UserList',
        component: UserList,
        requireAdmin: true
    },
    {
        path: '/news-manage/NewsList',
        component: NewsList
    },
    {
        path: '/news-manage/NewsAdd',
        component: NewsAdd
    },
    {
        path: "/news-manage/NewsEdit/:id",
        component: NewsEdit
    },
    {
        path: '/product-manage/ProductAdd',
        component: ProductAdd
    },
    {
        path: '/product-manage/ProductList',
        component: ProductList
    },
    {
        path: "/product-manage/ProductEdit/:id",
        component: ProductEdit
    },
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'Notfound',
        component: NotFound
    }
]

export default routesConfig