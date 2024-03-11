<template>
    <div class="flex w-full bg-zinc-800 justify-between h-[65px] ">
      
      <div class=" flex mt-3 ml-6 gap-24" >
          <div class="text-white ">
             <p class="text-xl	">UMS</p>
            </div>
  
                <div class="text-gray-400 text-xl ">
                  <button @click="toggleFunction" class=" p-1 focus:ring-2	ring-blue-900	">
                    <!-- font awesome icon -->
                    <i class="fa-solid fa-bars "></i></button>
          </div>
        </div>
  
      <div class="flex  mt-2 mr-14  ">
  
        <div class="dropdown text-white justify-items-end ">
         <button @click="toggleDropdown" class="p-2 focus:ring-2	ring-blue-900		">
           <i class="fa-solid fa-user"></i>
           <i class="fa-solid fa-caret-down"></i>
           </button>
            <div v-if="showDropdown" class="glass divide-y divide-gray-400 gap-4 w-[200px] h-40 m-3 flex flex-col justify-center text-center rounded-md absolute right-0">
        <!-- Dropdown content -->
             <a class="text-gray-900  " href="#">Settings</a>
             <a class="text-gray-900 " href="">Activity log</a>
             <a class="text-gray-900 " href="/">Logout</a>
              </div>
           </div>
  
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';
  
  const showDropdown = ref(false);
  const isToggle = ref(false);
  
  const toggleFunction = () => {
    isToggle.value = !isToggle.value;
    emit("toggleEmit", isToggle.value);
  };
  const emit = defineEmits(["toggleEmit"]);
  
  
  const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
  };
  
  </script>
  
  <style scoped>
  .glass{
    background: rgba(255, 251, 251, 0.92);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(255, 255, 255, 0.596);
    backdrop-filter: blur(10.5px);
    -webkit-backdrop-filter: blur(5.5px);
    border: 1px solid rgba(255, 255, 255, 0.478);
  }
  </style>