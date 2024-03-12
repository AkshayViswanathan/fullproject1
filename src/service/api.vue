<template>
    <div>
      <button @click="fetchData">Fetch Data</button>
      <ul>
        <li v-for="item in data" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import axios from 'axios';
  
  const data = ref([]);
  
  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.example.com/data');
      data.value = response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  </script>
  