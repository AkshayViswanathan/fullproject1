<template>

  <div class="">
    <NavBar @toggleEmit="sidebartoggle" />

<!--  user edit modal opening -->
        <EditModal :activeModal="activeModal" @closeModal="Modaltogglefunction"  >
    
          <div class=" m-2 "  >
            
            <div class=" flex flex-col m-2">
             <label for="firstname" class="text-gray-700  text-sm mb-1">First Name </label>
             <input v-model="singleUser.firstName"  type="text" class="block w-full rounded-md focus:border-2 ease-in-out duration-100 focus:border-sky-600/[.30] outline-none py-2.5  pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600/[.40] sm:text-sm sm:leading-6" placeholder="Enter first name" />
            
            </div>
             <div class="flex flex-col m-2">
             <label class="text-gray-700  text-sm mb-1"> Last Name</label>
             <input v-model="singleUser.lastName" type="text" class="block w-full rounded-md border focus:border-blue-600 outline-none py-2.5  pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600/[.55] sm:text-sm sm:leading-6" placeholder="Enter last name" />
             </div>
    
             <div class="flex flex-col w-full m-2 mb-4">
             <label class="text-gray-700  text-sm mb-1"> Email</label>
             <input v-model="singleUser.email"  type="text" class="block w-full rounded-md focus:border-2 ease-in-out duration-100 focus:border-sky-600/[.30] outline-none py-2.5  pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600/[.40] sm:text-sm sm:leading-6" placeholder="Enter email" />
             </div>
             <div class="flex flex-col w-full m-2 mb-4">
                <label class="text-gray-700 text-sm mb-1">Role</label>
                <select  class="block w-full rounded-md focus:border-2 ease-in-out duration-100 focus:border-sky-600/[.30] outline-none py-2.5 pl-2 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600/[.40] sm:text-sm sm:leading-6">
                    <option value="" disabled selected>{{ singleUser.role }}</option>
                    <option value="role1">admin</option>
                    <option value="role2">agent</option>
                    <option value="role2">supervisor</option>
                    <option value="role3">QA</option>
                    <option value="role3">QC</option>
                    <!-- Add more options as needed -->
                </select>
              </div>
    
               <div class="flex justify-between m-2">
                <button class="text-white rounded-md bg-blue-600 py-2 px-6" @click="Modaltogglefunction"> close </button>
                <button class="text-white rounded-md bg-emerald-600 py-2 px-6" @click="editUserDetailByAdminAPI(singleUser.id)" >Save</button>
             </div>
           </div>     
        </EditModal> 
<!--  user edit modal closing -->

<!-- add user modal opening -->
         <AddUser :addUserModalOpen="addUserModalOpen" @closeModal="Modaltogglefunction"  >

            <div class=" m-2 "  >
              
              <div class=" flex flex-col m-2">
               <label for="firstname" class="text-gray-700  text-sm mb-1">First Name </label>
               <input v-model="addUserStore.firstName"  type="text" class="block  rounded-md focus:border-2 ease-in-out duration-100 focus:border-sky-600/[.30] outline-none py-2.5  pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600/[.40] sm:text-sm sm:leading-6" placeholder="Enter first name" />
              
              </div>
               <div class="flex flex-col m-2">
               <label class="text-gray-700  text-sm mb-1"> Last Name</label>
               <input v-model="addUserStore.lastName" type="text" class="block rounded-md border focus:border-blue-600 outline-none py-2.5  pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600/[.55] sm:text-sm sm:leading-6" placeholder="Enter last name" />
               </div>
            
               <div class="flex flex-col w-full m-2 mb-4">
               <label class="text-gray-700  text-sm mb-1"> Email</label>
               <input v-model="addUserStore.email"  type="text" class="block w-full rounded-md focus:border-2 ease-in-out duration-100 focus:border-sky-600/[.30] outline-none py-2.5  pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600/[.40] sm:text-sm sm:leading-6" placeholder="Enter email" />
               </div>
               <div class="flex flex-col w-full m-2 mb-4">
                  <label class="text-gray-700 text-sm mb-1">Role</label>
                  <select v-model="addUserStore.role" class="block w-full rounded-md focus:border-2 ease-in-out duration-100 focus:border-sky-600/[.30] outline-none py-2.5 pl-2 pr-8 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600/[.40] sm:text-sm sm:leading-6">
                      <option value="" disabled selected> {{ addUserStore.role }}</option>
          
                      <option value="agent">agent</option>
                      <option value="supervisor">supervisor</option>
                      <option value="qa">QA</option>
                      <option value="qc">QC</option>
                      <!-- Add more options as needed -->
                  </select>
               </div>

               <div class="flex flex-col w-full m-2 mb-4">
               <label class="text-gray-700  text-sm mb-1"> Password</label>
               <input v-model="addUserStore.password"  type="text" class="block w-full rounded-md focus:border-2 ease-in-out duration-100 focus:border-sky-600/[.30] outline-none py-2.5  pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600/[.40] sm:text-sm sm:leading-6" placeholder="password" />
               </div>
            
              <div class="flex justify-between m-2" >
                  <button class="text-white rounded-md bg-blue-600 py-2 px-6" @click="addUserOpenModal"> close </button>
                  <button class="text-white rounded-md bg-emerald-600 py-2 px-6" @click="registerNewAgentByAdminAPI" >Create</button>
              </div>
            </div>     
        </AddUser>  
<!-- add user modal closing -->
 
  
      <div class="flex">
        <div :class="{ 'sidebar-open': isToggle, 'sidebar-closed': !isToggle }" class="sidebar h-screen bg-gray-800 overscroll-auto text-gray-400 ">
          <div class="m-8">
        <label class=""><i class="fa-solid fa-briefcase"></i> Admin Dashboard</label>
    </div>
  </div>
  
  <div class="DashboardBody bg-gray-300 h-screen w-screen flex pt-[100px] items-center flex-col border-2	border-gray-300">
      
  <div class="bg-white w-[1100px] rounded-md border-2	border-gray-300">
    <div class="w-full bg-green-50 h-[60px] text-gray-900 p-3 text-xl rounded-md flex justify-between">
     <div>  <i class="fa-solid fa-table"></i> Data Table  </div>
      <button v-if="!isButtonDisabled" @click="addUserOpenModal" class="bg-green-800 w-[100px] h-[35px] text-white rounded-md"> <i class="fa-solid fa-user-plus"> Add</i></button>
    </div>
   
    <div class="flex gap-4 h-16 border-t-2 border-gray-300	">
      <p class="pl-6 pt-3">Search:</p>                     
      <input  type="text" class="mt-2 h-10 rounded-md border focus:border-blue-600 outline-none py-2.5  pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600/[.55] sm:text-sm sm:leading-6" placeholder="Enter last name" /> 
    </div>

<table class="table">
<thead>
  <tr>
    <th>#</th>
    <th>User name</th>
    <th>Email</th>
    <th>Role</th>
    <th>Edit</th>
    <th>Delete</th>
  </tr>
</thead>
<tbody>
  <tr v-for="(userlist, index) in listedUser" :key="index">
    <td>{{ userlist?.id }}</td>
    <td>{{ userlist?.firstName }} {{ userlist?.lastName  }}</td>
    <td>{{ userlist?.email }}</td>
    <td>{{ userlist?.role }}</td>
    <td><button class="text-white rounded-md max-w-24 bg-blue-600 py-2 px-6" :class="{ 'bg-blue-600': !isButtonDisabled, 'bg-gray-400': isButtonDisabled }"  @click="singleserApi(userlist.id)">Edit</button></td>
    <td><button class="text-white rounded-md max-w-24 bg-red-600 py-2 px-6" :class="{ 'bg-blue-600': !isButtonDisabled, 'bg-gray-400': isButtonDisabled }"  @click="deleteUserDetailByAdminAPI(userlist.id)" >Delete</button></td>
  </tr>
  <!-- Add more rows here if needed -->
</tbody>
</table>
  </div>
      </div>
    </div>   
  </div>
</template>



<script setup>
import { ref, onMounted } from "vue";
import NavBar from "../NavBar/NavBar.vue"
import axios from 'axios';
import EditModal from './AdminEditModal.vue'
import AddUser from './AddUsers.vue'

const addUserModalOpen = ref(false)
const listedUser =ref([]) 
const isToggle = ref(false);
const activeModal = ref(false);
const isButtonDisabled = ref(false);

const singleUser =ref(
 {
  id:"",  
 firstName: "",
  lastName:"",
  role:"",
  email:"",
 }
)

const addUserStore = ref({
  id:"",  
firstName: "",
  lastName:"",
  role:"",
  email:"",
  password: ""
})


const addUserOpenModal =()=>{
  addUserModalOpen.value = !addUserModalOpen.value
console.log(addUserModalOpen);
}



const sidebartoggle = (value) => {
  isToggle.value = value;

};

const Modaltogglefunction =()=>{
activeModal.value = !activeModal.value}

                                                            // all Listed user api call
const ListUserApi = async () => {
  const accessToken = localStorage.getItem('accessToken')
  console.log(accessToken);


try {
  const apiData = await axios.get('http://localhost:3000/api/admin/users', {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
} ).then(response => response.data);  
listedUser.value = apiData.data.users;



} catch (error) {
  console.error("adim get userlist fetch failed:", error);

  ListUserApisuperviors()
}
};

                                                            // singleuser api call

const singleserApi = async (userId) => {
  const accessToken  = localStorage.getItem('accessToken')

try {
  const apiData = await axios.get(`http://localhost:3000/api//admin/users/${userId}`, {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
} ).then(response => response.data);  
  singleUser.value.id = apiData.data.user.id;
  singleUser.value.firstName = apiData.data.user.firstName;
  singleUser.value.lastName = apiData.data.user.lastName;
  singleUser.value.role = apiData.data.user.role;
  singleUser.value.email = apiData.data.user.email;
  
  
  Modaltogglefunction()

} catch (error) {
  console.error("fetch failed:", error);
}
};

                                             // edit user deatil API

const editUserDetailByAdminAPI = async (userId) => {
  const accessToken  = localStorage.getItem('accessToken')

try {
   await axios.patch(`http://localhost:3000/api//admin/users/${userId}`, {
            "firstName": singleUser.value.firstName ,
            "lastName": singleUser.value.lastName,
            "email": singleUser.value.email,
            "role": singleUser.value.role,
            "password": singleUser.value.password,
           
        },{
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
} ).then(response => response.data);  


activeModal.value= false
location.reload();

} catch (error) {
  console.error("Patch edit api fetch failed:", error);
}
};


                                           //  delete userlist api call

const deleteUserDetailByAdminAPI = async (userId) => {
  const accessToken  = localStorage.getItem('accessToken')

try {
   await axios.delete(`http://localhost:3000/api//admin/users/${userId}`, {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
} ).then(response => response.data);  

activeModal.value= false
location.reload();addUserStore

} catch (error) {
  console.error("delete api method failed:", error);
}
};


                                 // register a new agent by Admin

const registerNewAgentByAdminAPI = async () => {
  const accessToken  = localStorage.getItem('accessToken')
  console.log("hallo");
try {
   await axios.post(`http://localhost:3000/api/admin/users`,{
    "firstName": addUserStore.value.firstName,
  "lastName": addUserStore.value.lastName,
  "email": addUserStore.value.email,
  "role": addUserStore.value.role,
  "password": addUserStore.value.password,
   } ,{
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
} ).then(response => response.data);  
console.log(addUserStore.value.email);

location.reload();
ListUserApi();

} catch (error) {
  console.error("registering new user api failed:", error);
}
};

// superviors

const ListUserApisuperviors = async () => {
  const accessToken = localStorage.getItem('accessToken')
  console.log(accessToken);


try {
  const apiData = await axios.get('http://localhost:3000/api/supervisor/users', {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
} ).then(response => response.data);  
listedUser.value = apiData.data.users;
  
isButtonDisabled.value = true
} catch (error) {
  console.error("supervisor get user list fetch failed:", error);
}
};


onMounted(()=>{ListUserApi()} )

</script>






<style scoped>
.sidebar {
  transition: width 0.5s ease-in-out;
}

.sidebar-open {
  width: 250px;
  max-width: 250px;
}

.sidebar-closed {
  width: 0px;
  /* display: none; */
}
</style>
