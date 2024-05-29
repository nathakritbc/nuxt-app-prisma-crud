<script setup lang="ts">
import { ref, defineProps } from "vue"; 
import { createDialog } from "~/hooks/products.js";
</script>
<template>
  <v-dialog v-model="createDialog" max-width="500" persistent>
    <v-card>
      <v-card-title class="d-flex align-center">
        <div class="text-h5 text-medium-emphasis ps-2">
          Invite John to connect
        </div>
      </v-card-title>

      <v-divider class="mb-4"></v-divider>

      <v-card-text>
        <div class="text-medium-emphasis mb-4">
          Invite collaborators to your network and grow your connections.
        </div>

        <div class="mb-2">Message (optional)</div>

        <v-textarea
          :counter="300"
          class="mb-2"
          rows="2"
          variant="outlined"
          persistent-counter
        ></v-textarea>

        <div class="text-overline mb-2">💎 PREMIUM</div>

        <div class="text-medium-emphasis mb-1">
          Share with unlimited people and get more insights about your network.
          Try Premium Free for 30 days.
        </div>

        <v-btn
          class="text-none font-weight-bold ms-n4"
          color="primary"
          text="Retry Premium Free"
          variant="text"
        ></v-btn>
      </v-card-text>

      <v-divider class="mt-2"></v-divider>
      <template v-slot:actions>
        <v-spacer></v-spacer>
        <v-btn @click="createDialog = false"> ปิด </v-btn>
        <v-btn class="text-primary" @click="createDialog = false">
          บันทึก
        </v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>
