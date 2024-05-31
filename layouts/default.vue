<script setup lang="ts">
import { ref } from "vue";
import { useDisplay } from "vuetify";
const drawer = ref(true);
const rail = ref(false);
const { name } = useDisplay();
watchEffect(() => {
  rail.value = false;
  if (name.value == "xs" || name.value == "sm") {
    rail.value = true;
  }
});
</script>

<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      temporary
      permanent
      @click="rail = false"
    >
      <v-list-item
        prepend-avatar="../assets/images/profile.png"
        title="John Leider"
        :class="['px-3 py-4 ', name !== 'xs' ? 'border-b' : '']"
        nav
      >
        <template v-slot:append>
          <v-btn
            icon="mdi-chevron-left"
            variant="text"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>
      </v-list-item>

      <v-list density="compact" nav class="px-2 mt-1">
        <v-list-item
          prepend-icon="mdi-home-city"
          title="Home"
          @click="$router.push('/')"
          value="home"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account"
          title="My Account"
          value="account"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-list-box"
          @click="$router.push('/products')"
          title="Stock"
          value="stock"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-group-outline"
          title="Users"
          value="users"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="">
      <template v-slot:prepend v-if="name === 'xs'">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <!-- <v-app-bar-title>Title</v-app-bar-title> -->

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="ma-6">
      <slot />
    </v-main>
  </v-app>
</template>
