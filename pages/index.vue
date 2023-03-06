<template>
    <div class="home-page">
        <Hero />
    </div>
</template>

<script setup>
import { useHomeStore } from '~/stores/home';
const homeStore = useHomeStore();
await homeStore.fetchHome();
</script>