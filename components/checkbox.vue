<template>
    <label
        class="relative inline-flex items-center select-none cursor-pointer transition-all duration-300"
    >
        <input
          type="checkbox"
          class="absolute top-0 left-0 m-0 w-0 h-0 appearance-none"
          :value="inputValue"
          :checked="modelValue.includes(inputValue)"
          name=""
          @change="onChange"
        />
        <span
          class="controll w-30 h-30 relative inline-block transition-all duration-300 rounded-5 mr-20 border-2 border-indigo-500 border-solid"
        >
          <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="7"
              class="ico w-20 h-20 absolute transition-all duration-150 top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 opacity-0 invisible"
              viewBox="0 0 10 7"
              fill="none"
          >
              <path
              class="fill-indigo-500"
              d="M9.47334 0.306696C9.41136 0.24421 9.33763 0.194614 9.25639 0.160768C9.17515 0.126922 9.08802 0.109497 9.00001 0.109497C8.912 0.109497 8.82486 0.126922 8.74362 0.160768C8.66238 0.194614 8.58865 0.24421 8.52667 0.306696L3.56001 5.28003L1.47334 3.1867C1.40899 3.12454 1.33303 3.07566 1.2498 3.04286C1.16656 3.01006 1.07768 2.99397 0.988222 2.99552C0.898768 2.99706 0.810495 3.01622 0.728443 3.05188C0.646391 3.08754 0.572166 3.13902 0.510007 3.20336C0.447848 3.26771 0.398972 3.34367 0.36617 3.42691C0.333367 3.51014 0.31728 3.59903 0.318828 3.68848C0.320375 3.77793 0.339527 3.86621 0.375189 3.94826C0.410852 4.03031 0.462326 4.10454 0.526674 4.1667L3.08667 6.7267C3.14865 6.78918 3.22238 6.83878 3.30362 6.87262C3.38486 6.90647 3.472 6.92389 3.56001 6.92389C3.64802 6.92389 3.73515 6.90647 3.81639 6.87262C3.89763 6.83878 3.97137 6.78918 4.03334 6.7267L9.47334 1.2867C9.54101 1.22427 9.59502 1.1485 9.63195 1.06417C9.66889 0.979834 9.68796 0.888764 9.68796 0.796696C9.68796 0.704628 9.66889 0.613558 9.63195 0.529225C9.59502 0.444892 9.54101 0.369124 9.47334 0.306696Z"
              fill="white"
              />
          </svg>
        </span>
        <span class="fuel-type-content">
          {{ label }}
        </span>
    </label>
</template>

<style scoped>
input {
  clip: rect(0 0 0 0);
}
input:checked + span.controll {
  border: 2px solid rgba(99, 102, 241, 1);
  background-color: rgba(99, 102, 241, 1);
}
input:checked + span.controll .ico {
  opacity: 1;
  visibility: visible;
}
input:checked + span.controll .ico path {
  fill: white;
}
</style>

<script setup>
const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    inputValue: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Array,
      required: true,
    }
})

const emit = defineEmits(['update:modelValue'])

const onChange = (e) => {
      let currentValue = [...props.modelValue]
      if (e.target.checked) {
        currentValue.push(e.target.value)
      } else {
        currentValue = currentValue.filter((item) => item !== e.target.value)
      }
      emit('update:modelValue', currentValue)
}
</script>