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
 { 
  path:"/userdashboard",
  name:"userdashboard",
  component: ()=>import("../components/Dashboard/UserDashboardMain.vue")
},
{ 
  path:"/admindashboard",
  name:"admindashboard",
  component: ()=>import("../components/Dashboard/AdminDashBoardMain.vue")
},

]

const router = createRouter({
history: createWebHistory(import.meta.env.BASE_URL), routes: routes
})

export default router