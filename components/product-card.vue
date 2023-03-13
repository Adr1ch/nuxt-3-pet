<template>
    <li
      class="bg-white shadow-lg shadow-indigo-500/50 p-15 rounded-9 flex flex-col"
    >
      <div class="overflow-hidden relative" style="padding-bottom: calc(480 / 720 * 100%);">
        <img :src="product.image" class="absolute top-0 left-0 h-full w-full object-cover" :alt="product.title" />
      </div>
      <NuxtLink class="heading-5 text-center truncate mt-10" :to="`${product.slug}`">{{ product.title }}</NuxtLink>
      <p class="truncate text-center mt-10">{{ product.description }}</p>
      <p class="text-center mt-10">{{ product.price }}</p>
      <button class="w-full border-none bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white hover:bg-indigo-600 inline-flex items-center justify-center gap-[10px] mt-10">
        <svg width="16px" height="16px" viewBox="0 0 16 16">
          <path fill="white" d="M14 13.1v-1.1h-9.4l0.6-1.1 9.2-0.9 1.6-6h-12.3l-0.7-3h-3v1h2.2l2.1 8.4-1.3 2.6v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5h7.5v1.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5c0-0.7-0.4-1.2-1-1.4zM4 5h10.7l-1.1 4-8.4 0.9-1.2-4.9z"/>
        </svg>
        Add to card
      </button>
    </li>
</template>

<script setup>
defineProps({
    product: {
        type: Object,
        default: () => ({
            image: '',
            title: 'lorem ipsum amet',
            slug: '',
            description: '',
            price: '',
        })
    },
})
</script>
  