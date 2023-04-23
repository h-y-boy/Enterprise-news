import { defineStore } from "pinia";
export const UserStore = defineStore({
    id: 'user',
    state: () => {
        return {
            isGetterRouter: false,
            isCollapsed: false,
            userInfo: {}
        }
    },
    actions: {
        changeGetterRouter(value) {
            this.isGetterRouter = value;
        },
        changeCollapsed() {
            this.isCollapsed = !this.isCollapsed;
        },
        changeUserInfo(value) {
            this.userInfo = {
                ...this.userInfo,
                ...value
            }
        },
        clearUserInfo() {
            this.userInfo = {}
        }

    },
    persist: {
        enabled: true,
        strategies: [{
            key: 'qf_admin',
            storage: localStorage,
            paths: ['isCollapsed', 'userInfo'] //控制是否持久化

        }]
    }
})