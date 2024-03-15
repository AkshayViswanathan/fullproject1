<template>
    <Transition name="outer" >  
         <div v-show="addUserModalOpen" class="absolute w-full bg-black bg-opacity-50 h-screen top-0 left-0 flex justify-center px-8">
             <div v-if="addUserModalOpen" class="p-4 bg-white w-[600px] mt-32  h-[530px] rounded-xl ">
               
      <slot />          <!-- via slot form has been used in adminDashboardMain -->

 
             </div>
         </div>
 
     </Transition>
</template>
<script setup>


defineEmits(["closeModal"])

defineProps({
    addUserModalOpen:{
       type: Boolean,
       default: false
   }
})

 </script>
 
 <style scoped>
 
 .outer-enter-from, .outer-leave-from{
     opacity: 0;
 }
 
 .outer-enter-active, .outer-leave-active{
 
     transition:all 0.5s;
 }
 .outer-enter-to, .outer-leave-to{
     transition: 1;
 }
 
 
 </style>