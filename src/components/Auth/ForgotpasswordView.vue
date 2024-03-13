<template>
    <div>
        <main class="bg-blue-500 h-screen flex justify-center items-center ">
            <div class="bg-white h-4/7 w-2/5 rounded-md "  >   
                   <div class="bg-green-50	flex justify-center items-center h-24 text-3xl font-sans rounded-md border-2 ring-gray-400 " >
                    Password Recovery 
                   </div>
                  
                   <form class="h-80 flex justify-between flex-wrap p-10" >
                   <p class="text-sm text-gray-500"	>Enter your email address and we will send you a link to reset your password.</p>
                    
                    <div class="flex flex-col w-full">
                    <label class="text-gray-700  text-sm mb-1"> Email</label>
                    <input type="text" class="block w-full rounded-md focus:border-2 ease-in-out duration-100 focus:border-sky-600/[.30] outline-none py-2.5  pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600/[.40] sm:text-sm sm:leading-6" placeholder="Enter first name" >
                    </div>
                   
                    <div class=" w-full flex justify-between ">
                        <a href="/" class="underline text-blue-500 hover:underline-offset-4 hover:text-blue-700 text-sm	"  >Return to login</a>
                       <button class="bg-blue-500 hover:bg-blue-600 text-white w-40 h-10 rounded-md "> Reset password</button>
                    </div>
                    
                   </form>
                   <div class="flex justify-center items-center h-10 rounded-md border-2 ring-gray-400">
                    <a  href="/register" class="underline text-blue-500 hover:underline-offset-4 hover:text-blue-700	"> Need an account ? signup</a>
                   </div>
                  
            </div>
        </main>
    </div>
</template>

<script setup>

</script>

<style  scoped>

    
</style>