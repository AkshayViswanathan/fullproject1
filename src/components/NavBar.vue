<template>
    <div>
      <div class="w-full bg-zinc-800 text-white h-[65px] flex justify-between pr-[70px] pt-4 pl-10" >
        <div>
          <p>UMS</p>
        </div>
  
        <div class="dropdown w-20 h-4">
    <button @click="toggleDropdown" class="dropbtn"><i class="fa-solid fa-user"></i><i class="fa-solid fa-caret-down"></i></button>
    <div v-show="showDropdown" class="w-20 h-10 m-3 mr-20">
      <div class="bg-white ">
        <a href="#">Settings</a>
      </div> 
      <div  class="bg-white text-black" >
        <a href="/">Logout</a>
      </div>
    </div>
  </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
//   import { useRouter } from 'vue-router';

//   const router =useRouter()

const showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}
  </script>
  