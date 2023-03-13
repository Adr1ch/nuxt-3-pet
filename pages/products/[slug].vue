<template>
        <ProductLayout>
            <template #aside>
                <div>Product single page
                    <Checkbox
                        v-model="selected"
                        label="Choose shoes"
                        input-value="shoes"
                    />
                    <br />
                    <Checkbox
                        v-model="selected"
                        label="Choose t-shirt"
                        input-value="t-shirt"
                    />
                    <span>{{ selected }}</span>
                </div>
            </template>
            <template #main>
                <ul class="flex flex-wrap">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </ul>
            </template>
        </ProductLayout>
</template>

<style scoped>
:deep(li) {
    width: calc(100% / 3);
}
</style>

<script setup>
const ProductCard = resolveComponent('product-card')
const ProductLayout = resolveComponent('product-layout')
const Checkbox = resolveComponent('checkbox')
const selected = ref([])
</script>