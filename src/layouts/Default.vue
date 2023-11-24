<template>
 <div :data-theme="theme">
  <div class="navbar bg-transparent z-40">
    <div class="navbar-start"></div>
    <div class="flex items-center space-x-1 lg:space-x-.10">
      <img src="../assets/images/easy-joey-logo-yellow.png" alt="Your Logo" class="h-8 w-8">
      <nuxt-link class="btn btn-ghost md:text-2xl font-luciole mt-3 text-yellow-500" to="/">EasyJoey</nuxt-link>
    </div>
    <div class="navbar-end">
      <!-- <select v-model="theme" class="select select-primary md:w-full md:max-w-xs">
        <option disabled selected>Select Theme</option>
        <option v-for="theme in themes" :value="theme" :key="theme">
          <span class="uppercase">{{ theme }}</span>
        </option>
      </select> -->
    </div>
  </div>
  <slot />
</div>

</template>

<script>
import { ref, watch, onMounted } from 'vue';
const THEMES = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
];
export default {
  setup () {
    const theme = ref('light');
    watch(theme, (value) => {
      localStorage.setItem('daisyui-theme', value);
    });
    onMounted(() => {
      // theme.value = 'light'
      theme.value = localStorage.getItem('daisyui-theme') || 'light';
    });
    return {
      theme,
      themes: THEMES,
    };
  },
};
</script>

