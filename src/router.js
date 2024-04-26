import {createRouter,createWebHistory} from "vue-router";
import Home from "./pages/HomePage.vue";
import Users from "./pages/UserPage.vue";
import ShowUser from "./pages/ShowUser.vue";
import Posts from "./pages/PostPage.vue";
import ShowPost from "./pages/ShowPost.vue";
import CreatePost from "./pages/CreatePost.vue";
import EditPost from "./pages/EditPost.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
    {path:"/",name:"homepage",component:Home},
    {path:"/users",name:"userpage",component:Users},
    {path:"/users/:id",name:"showuser",component:ShowUser},
    {path:"/posts",name:"postpage",component:Posts},
    {path:"/posts/:id",name:"showpost",component:ShowPost},
    {path:"/CreatePost",name:"createpost",component:CreatePost},
    {path:"/EditPost/:id",name:"editpost",component:EditPost},
    {path:"/:pathMatch(.*)*",name:"not found",component:NotFound}
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;