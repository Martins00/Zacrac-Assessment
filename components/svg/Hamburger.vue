<template>
  <svg
    fill="none"
    height="20"
    viewBox="0 0 37 20"
    width="37"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      :fill="color"
      height="3.28595"
      rx="1.64297"
      transform="matrix(-1 0 0 1 37 0.325195)"
      width="36.1454"
    />
    <rect
      :fill="color"
      height="3.28595"
      rx="1.64297"
      transform="matrix(-1 0 0 1 37 7.99219)"
      width="25.1922"
    />
    <rect
      :fill="color"
      height="3.28595"
      rx="1.64297"
      transform="matrix(-1 0 0 1 37 16.3896)"
      width="31.399"
    />
  </svg>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    color?: string;
  }>(),
  {
    color: "#0B150F",
  }
);
</script>
