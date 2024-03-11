<template>
    <div class="">
      <NavBar @toggleEmit="sidebartoggle" />
         <div class="flex">
           <div :class="{ 'sidebar-open': isToggle, 'sidebar-closed': !isToggle }" class="sidebar h-screen bg-gray-800 overscroll-auto text-gray-400 ">
             <div class="m-8">
          <label class=""><i class="fa-solid fa-briefcase"></i> Admin Dashboard</label>
       </div>
     </div>
     <div class="DashboardBody bg-gray-300 h-screen w-screen flex pt-[100px]  items-center flex-col ">
        
        <h3>welcome admin</h3>  
  
       
        </div>
       </div>   
     </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import NavBar from "../NavBar/NavBar.vue"

  
  const isToggle = ref(false);
  const activeModal = ref(false);
  
  const Modaltogglefunction =()=>{
    activeModal.value = !activeModal.value
  }
  
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
  