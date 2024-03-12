<template>
    <div class="">
      <NavBar @toggleEmit="sidebartoggle" />
         <div class="flex">
           <div :class="{ 'sidebar-open': isToggle, 'sidebar-closed': !isToggle }" class="sidebar h-screen bg-gray-800 overscroll-auto text-gray-400 ">
             <div class="m-8">
          <label class=""><i class="fa-solid fa-briefcase"></i> Admin Dashboard</label>
       </div>
     </div>
     
     <div class="DashboardBody bg-gray-300 h-screen w-screen flex pt-[100px] items-center flex-col border-2	border-gray-300">
        
     <div class="bg-white w-[1100px] rounded-md border-2	border-gray-300">
       <div class="w-full bg-green-50 h-[60px] text-gray-900 p-3 text-xl rounded-md"><i class="fa-solid fa-table"></i> Data Table </div>
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
    <tr v-for="(item, index) in people" :key="index">
      <td>1</td>
      <td>{{ item?.peoplename }}</td>
      <td>{{ item?.email }}</td>
      <td>{{ item?.role }}</td>
      <td><button class="text-white rounded-md max-w-24 bg-blue-600 py-2 px-6">Edit</button></td>
      <td><button class="text-white rounded-md max-w-24 bg-red-600 py-2 px-6">Delete</button></td>
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
  import { ref } from "vue";
  import NavBar from "../NavBar/NavBar.vue"
  
  const people =ref([
    { id:1,
      peoplename:"sonu",
      email:"sonu@gmail.com",
      role: "Agent"

    },   { id:1,
      peoplename:"raju",
      email:"raju@gmail.com",
      role: "Agent"

    },
 
  ]) 
  
  const isToggle = ref(false);


  
  const sidebartoggle = (value) => {
    isToggle.value = value;
  
  };
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
  