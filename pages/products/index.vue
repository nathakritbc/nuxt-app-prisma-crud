<script setup lang="ts">
import CreateDialog from "~/components/products/CreateDialog.vue";
import { useToast } from "vue-toastification";
import { onMounted, ref } from "vue";
const toast = useToast();
const search = ref("");
const selected = ref([]);
const headers = ref([
  {
    title: "ชื่อสินค้า",
    key: "p_name",
    align: "end",
  },
]);
const products = ref([]);

const getColor = (num: number) => {
  if (num > 100) return "red";
  if (num > 50) return "orange";
  return "green";
};

const fetchAllProducts = async () => {
  try {
    products.value = await $fetch("/api/products");
  } catch (error) {
    console.error(error);
    toast.error("Fetch all products failed!");
  }
};
onMounted(() => {
  fetchAllProducts();
});
</script>

<style scoped></style>

<template>
  <div>
    <v-card>
      <v-card-title>
        <h1 class="text-2xl font-semibold">Products</h1>
      </v-card-title>

      <v-card-text>
        <v-text-field
          lable="ค้นหา"
          v-model="search"
          append-inner-icon="mdi-magnify"
        ></v-text-field>
        <v-data-table
          :search="search"
          :headers="headers"
          v-model="selected"
          :items="products"
          item-value="name"
          show-select
        ></v-data-table>
      </v-card-text>
    </v-card>
    <CreateDialog />
  </div>
</template>
