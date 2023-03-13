<template>
    <header>
        <div class="container">
            <div class="pt-30 pb-30 flex items-center justify-between">
                <div>
                    <span class="heading-fifth"> Header custom widget </span>
                </div>
                <nav>
                    <ul class="flex">
                        <li>
                            <NuxtLink to="/"> Home page </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/products/lorem-1">Product by slug - lorem-1</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/about"> About page </NuxtLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
  </header>
</template>
