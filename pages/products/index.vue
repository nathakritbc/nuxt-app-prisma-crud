<script lang="ts" setup>
const items: any = ref([]);
const headers = ref([
  {
    text: "Id",
    align: "start",
    value: "id",
  },
  {
    text: "Title",
    align: "start",
    value: "title",
  },
]);

const { data: todoData, error } = await useFetch("/api/todos");

const getTodos = async () => {
  try {
    const dataPost = await $fetch("/api/todos");
    // items.value = dataPost;
    console.log(dataPost);
    console.log("getTodos");
  } catch (error) {
    console.error(error);
  }
};
// const dataList = await asyncData();
onMounted(() => {
  getTodos();
});
</script>

<template>
  <v-container>
    <h1>{{ todoData }}</h1>
    <ol v-if="todoData">
      <li v-for="item in todoData" :key="item.id">{{ item.title }}</li>
    </ol>
    <!-- <h1>{{ dataList }}</h1> -->
    <v-btn>Btn</v-btn>
    <!-- <v-data-table
      :headers="headers"
      :items="items"
      item-key="name"
      items-per-page="5"
    ></v-data-table> -->
  </v-container>
</template>
