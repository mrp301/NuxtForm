<template>
  <div class="c-confirm">
    {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: String,
    },
  },
};
</script>
