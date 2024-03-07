import { createRouter, createWebHistory } from "vue-router";


const routes = [
 {  
    path:"/",
    name:"login",
    component: ()=>import("../components/LoginView.vue")
   },
 { 
    path:"/Register",
    name:"register",
    component: ()=> import("../components/RegisterView.vue")
  },
  { 
   path:"/forgotpassword",
   name:"forgotpassword",
   component: ()=>import("../components/ForgotpasswordView.vue")
 },

]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL), routes: routes
})

export default router