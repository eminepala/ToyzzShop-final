<template>
  <div class="column">
    <h3 class="title">{{ title }}</h3>
    <ul>
      <li v-for="(item, i) in items" :key="i">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  items: Array
})
</script>

<style scoped>
.column {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.title {
  font-weight: 700;
  font-size: 16px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  font-size: 15px;
  color: #666;
  cursor: pointer;
}
li:hover {
  color: #000;
}
</style>
