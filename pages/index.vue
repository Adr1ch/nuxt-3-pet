<template>
    <div class="home-page">
        <Hero />
        <section>
            <Popup
                v-slot="{ isOpened }"
                :opened="open"
                :exclude="['#id-open-popup']"
                @close="open = false"
            >
                <div v-if="isOpened">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
                    nulla ut quae veniam ducimus odit voluptate, architecto voluptas
                    suscipit obcaecati mollitia hic asperiores dignissimos, natus aut.
                </div>
            </Popup>
            <button
                id="id-open-popup"
                @click="open = !open"
            >
                click 1 {{ open }}
            </button>
        </section>
        <component
            v-for="(widget, index) in ['hero', 'products']"
            :is="widget"
            :key="index" 
        />
    </div>
</template>

<script setup>
import { useHomeStore } from '~/stores/home';
const homeStore = useHomeStore();
const nuxtApp = useNuxtApp();
// await homeStore.fetchHome();
let open = ref(false)
const Popup = resolveComponent('popup')
</script>