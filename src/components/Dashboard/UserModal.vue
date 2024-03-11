<template>
  <Transition name="outer" >  
        <div v-show="activeModal" class="absolute w-full bg-black bg-opacity-50 h-screen top-0 left-0 flex justify-center px-8">
            <div v-if="activeModal" class="p-4 bg-white w-[600px] mt-32  h-[450px]">
     <slot />
    <button class="text-white rounded-md bg-blue-600 py-2 px-6" @click="$emit('closeModal')"> close </button>
            </div>
        </div>

    </Transition>
</template>

<script setup>

defineEmits(["closeModal"])

defineProps({
    activeModal:{
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