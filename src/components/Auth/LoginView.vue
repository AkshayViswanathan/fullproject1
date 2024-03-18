<template>
    <div>
      <main class="bg-blue-500 h-screen flex justify-center items-center">
        <div class="bg-white h-4/5 w-2/5 rounded-md">
          <div class="bg-green-50 flex justify-center items-center h-24 text-3xl font-sans rounded-md border-2 ring-gray-400">
            Login
          </div>
  
          <form @submit.prevent="fetchApi" class="h-96 flex justify-between flex-wrap p-10">
            <div class="flex flex-col w-full">
              <label class="text-gray-700 text-sm mb-1">Email</label>
              <input v-model="email" type="text" class="block w-full rounded-md focus:border-2 ease-in-out duration-100 focus:border-sky-600/[.30] outline-none py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600/[.40] sm:text-sm sm:leading-6" placeholder="Enter email"> 

            </div>
            <div class="flex flex-col w-full">
              <label class="text-gray-700 text-sm mb-1">Password</label>
              <input v-model="password" type="password" class="block w-full rounded-md focus:border-2 ease-in-out duration-100 focus:border-sky-600/[.30] outline-none py-2.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600/[.40] sm:text-sm sm:leading-6" placeholder="Enter password">
            </div>
            <span v-show="validationfailmssg" class="w-full text-red-600"> Incorrect user email or password</span>


            <div>
              <input id="RememberPassword" type="checkbox">
              <label for="RememberPassword" class="text-gray-700">Remember Password</label>
            </div>
            <div class="w-full flex justify-between">
              <a href="/forgotpassword" class="underline text-blue-500 hover:underline-offset-4 hover:text-blue-700 text-sm">Forgot Password?</a>
              <button class="bg-blue-500 hover:bg-blue-600 text-white w-20 h-10 rounded-md">Login</button>
            </div>
          </form>
          <div class="flex justify-center items-center h-10 rounded-md border-2 ring-gray-400">
            <a href="/register" class="underline text-blue-500 hover:underline-offset-4 hover:text-blue-700">Need an account? Signup</a>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { ref } from "vue";
  import { useRouter } from 'vue-router';

  
  const email = ref('');
  const password = ref('');
  const datafetch = ref(null);
  const validationfailmssg = ref(false)
  const router = useRouter();

// adim login api call
  
  const fetchApi = async () => {
    try {
      const apiData = await axios.post('http://localhost:3000/api/auth/login', { email: email.value, password: password.value }).then(response => response.data);
      datafetch.value = apiData;
      console.log(apiData);
      conditionalNavigate()
      localStorage.setItem('accessToken', apiData.data.user.accessToken);
    } catch (error) {
      console.error("fetch failed:", error);
      validationfailmssg.value = true;

    }
  };
  

  const conditionalNavigate = () => {
  if (datafetch.value.data.user.role === 'admin') {
    console.log(datafetch.value)
    router.push('/admindashboard');
    validationfailmssg.value = false;
  } else if (datafetch.value.data.user.role == "agent"){
    console.log( "agent called");
    router.push('/userdashboard');
    console.log(datafetch.value)
    validationfailmssg.value = false; 
  }
   else if (datafetch.value.data.user.role === "supervisor"){
    router.push('/admindashboard');
    validationfailmssg.value = false;
  } 

  
};



  </script>
  
  <style scoped>
  
  </style>
  