<template>


<div class="hero bg-white" style="height: 48vh; background-size: cover;">
  <div class="hero-content text-center">
    <div class="max-w-2xl">
      <h1 class="text-5xl lg:text-6xl mb-2 -mt-12" data-aos="zoom-in">
  <span class="text-yellow-500">Easy</span> Health Records Access for Every 
  <span class="text-yellow-500">Joey</span>
</h1>

<p class="text-2xl lg:text-3xl mb-5 text-gray-600">Open Source, Secure, Interoperable, Private, Record-Centric, and Fortified with AI </p>

      <p>We are actively seeking skilled and passionate developers <br> to join and contribute to this open-source project.</p>
      <button class="btn btn-neutral text-white text-lg lg:text-xl mt-3">
  <a href="https://39orqvxdkdz.typeform.com/to/X5WZCFEG" target="_blank" rel="noopener noreferrer">I want to support this worthy cause!</a>
</button>

    </div>
  </div>
</div>



<!-- background image section -->
  <section class="background">
    <div class="hero" :style="'background-image: url(' + backgroundImage + '); height: 55vh;'">
      <div class="hero-overlay bg-opacity-0"></div>
    </div>
  </section>


 

</template>

<script>
import { useHead } from '#app';
import { definePageMeta } from '#imports';
import GenericPanel from '~/components/commons/GenericPanel';
import { ref } from 'vue';
import ogBanner from '../assets/images/nuxtwind-daisy-og-banner.jpg';

export default {
  components: {
    GenericPanel,
  },
  setup() {
    definePageMeta({
      layout: 'default',
    });

    useHead({
      title: 'EasyJoey',
      description: 'EasyJoey is an Open Source Patient Records Organizer.',
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
      meta: [
        {
          hid: 'og:image',
          name: 'og:image',
          property: 'og:image',
          content: ogBanner,
        },
      ],
    });

    
  },
};
</script>


<style scoped>
.background {
  width: 100vw;
  height: 50vh;
  background-image: url('../assets/images/easy-joey-people.png');
  background-size: 100% auto;
  background-repeat: no-repeat;
  filter: none;
}

/* Add other styling as needed */
</style>