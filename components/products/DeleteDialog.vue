<script setup lang="ts">
import { ref, defineProps } from "vue";
import { deleteDialog } from "~/hooks/products.js";
</script>
<template>
  <v-dialog v-model="deleteDialog" max-width="500" persistent>
    <v-card>
      <div class="flex flex-row align-center justify-center w-full pt-10">
        <v-icon size="150" color="warning">mdi-alert-circle</v-icon>
      </div>
      <v-divider class="mb-4"></v-divider>
      <v-card-text>
        <div class="">
          <h1 class="text-2xl font-semibold text-center text-[#555]">
            คุณต้องการลบสินค้าหรือไม่?
          </h1>
          <h1 class="text-xl mt-3 font-medium text-center">
            คุณต้องการลบสินค้าหรือไม่
          </h1>
        </div>
      </v-card-text>
      <v-divider class="mt-2"></v-divider>
      <template v-slot:actions>
        <v-spacer></v-spacer>
        <v-btn @click="deleteDialog = false"> ปิด </v-btn>
        <v-btn class="text-error" @click="deleteDialog = false">
          <span class="font-semibold">ลบ</span>
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
