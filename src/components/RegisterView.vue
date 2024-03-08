<template>
    <div>
        <main class="bg-blue-500 h-screen flex justify-center items-center ">
            <div class="bg-white h-4/5 w-3/5 rounded-md "  >   
                   <div class="bg-green-50	flex justify-center items-center h-24 text-3xl font-sans rounded-md border-2 ring-gray-400 " >
                    Create Account 
                   </div>
                  
                   <Form class="h-96 flex justify-between flex-wrap p-10" >
                    <div class=" flex flex-col">
                    <label for="firstname" class="text-gray-700  text-sm mb-1"> First Name</label>
                    <input v-model="firstname" v-bind="firstnameAttrs" type="text" class="block w-full rounded-md focus:border-2 ease-in-out duration-100 focus:border-sky-600/[.30] outline-none py-2.5  pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600/[.40] sm:text-sm sm:leading-6" placeholder="Enter first name" />
                    <span class="text-red-600 ">{{ errors.firstname }}</span> 
                   </div>
                    <div class="flex flex-col">
                    <label class="text-gray-700  text-sm mb-1"> Last Name</label>
                    <input v-model="lastname" v-bind="lastnameAttrs" type="text" class="block w-full rounded-md border focus:border-blue-600 outline-none py-2.5  pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600/[.55] sm:text-sm sm:leading-6" placeholder="Enter last name" />
                    <span class="text-red-600 ">{{ errors.lastname }}</span> 
                    </div>
                    <div class="flex flex-col w-full">
                    <label class="text-gray-700  text-sm mb-1"> Email</label>
                    <input v-model="email" v-bind="emailAtt" type="text" class="block w-full rounded-md focus:border-2 ease-in-out duration-100 focus:border-sky-600/[.30] outline-none py-2.5  pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600/[.40] sm:text-sm sm:leading-6" placeholder="Enter email" />
                    <span class="text-red-600 ">{{ errors.email }}</span>    
                    </div>
                    <div class="flex flex-col">
                    <label class="text-gray-700 text-sm mb-1" > Password</label>
                    <input v-model="password" v-bind="passwordAtt" type="text" class="block w-full rounded-md focus:border-2 ease-in-out duration-100 focus:border-sky-600/[.30] outline-none py-2.5  pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600/[.40] sm:text-sm sm:leading-6" placeholder="Enter password" />
                    <span class="text-red-600 ">{{ errors.password }}</span>     
                    </div >
                    <div class="flex flex-col">
                    <label class=" text-gray-700 text-sm mb-1">Confirm Password</label>
                    <input v-model="confirmpass" v-bind="confirmpassAtt" type="text" class="block w-full rounded-md focus:border-2 ease-in-out duration-100 focus:border-sky-600/[.30] outline-none py-2.5  pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600/[.40] sm:text-sm sm:leading-6" placeholder="Confirm password " />
                    <span class="text-red-600 ">{{ errors.confirmpass }}</span> 
                   </div>
                    <div class=" w-full flex justify-center	">
                       <button class="bg-blue-500 hover:bg-blue-600 text-white w-full rounded-md ">Create Acccount</button>
                   
                    </div>
                    
      
                </Form>

                   <div class="flex justify-center items-center h-10 rounded-md border-2 ring-gray-400">
                    <a href="/" class="underline text-blue-500 hover:underline-offset-4 hover:text-blue-700	"> Have an account ? go to login</a>
                   </div>
                  
            </div>
        </main>
    </div>
</template>

<script setup>
// import { Form, Field } from 'vee-validate';
import * as yup from 'yup';
import { useForm } from 'vee-validate';


const schema = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email('E-mail is not valid!').required('E-mail is required!'),
    password: yup.string().required(),
    confirmpass: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match'),
    checkbox:yup.boolean().oneOf([true], "You must accept the terms and conditions")
}); 


const {  defineField, errors } = useForm({  validationSchema: schema, })

const [firstname, firstnameAttrs] = defineField('firstname');
const [lastname, lastnameAttrs] = defineField('lastname');
const [email, emailAtt] = defineField('email' )
const [password, passwordAtt] = defineField('password');
const [confirmpass, confirmpassAtt] = defineField("confirmpass")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        



</script>

<style  scoped>

    
</style>