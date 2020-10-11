<template>
  <div>
    <label class="c-label">{{ label }}</label>
    <app-confirm :value="value" />
  </div>
</template>

<script>
import AppConfirm from '~/components/atoms/AppConfirm.vue';

export default {
  components: {
    AppConfirm,
  },
  props: {
    value: {
      required: true,
      type: String,
    },
    label: {
      required: true,
      type: String,
    },
  },
};
</script>
