import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Login.vue'
import routesConfig from "./config";
import { UserStore } from '../store/user'


const routes = [
    {
        path: "/login",
        name: "login",
        component: Home,
    },
    {
        path: "/mainbox",
        name: "mainbox",
        component: () =>
            import('../views/MainBox.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

// 路由守卫
router.beforeEach((to, from, next) => {
    if (to.name == 'login') {
        next();
    } else {
        //如果授权(已经登录过了) next()
        //未授权, 重定向到login
        if (!localStorage.getItem('token')) {
            next({
                path: '/login'
            })
        } else {
            if (!UserStore().isGetterRouter) {
                //删除所有的嵌套路由
                //mainbox
                router.removeRoute("mainbox")
                configRouter();
                next({
                    path: to.fullPath
                })
            } else {
                next();
            }
        }
    }
})

const configRouter = () => {
    if (!router.hasRoute("mainbox")) {
        router.addRoute({
            path: "/mainbox",
            name: "mainbox",
            component: () =>
                import('../views/MainBox.vue')
        })
    }

    routesConfig.forEach(item => {
        checkPermission(item) && router.addRoute("mainbox", item);
    })

    //改变isGetterRouter =  true
    UserStore().changeGetterRouter(true);
}

const checkPermission = (item) => {
    if (item.requireAdmin) {
        return UserStore().userInfo.role === 1
    }
    return true
}

export default router;