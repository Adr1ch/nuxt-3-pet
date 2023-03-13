<template>
  <div class="container">
    <div style="display: flex">
      <div style="width: 25%">
        <slot name="aside"></slot>
      </div>
      <div style="width: 75%">
        <slot name="main"></slot>
      </div>
    </div>
  </div>
</template>