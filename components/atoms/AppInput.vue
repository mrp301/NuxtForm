<template>
  <input
    :value="value"
    @input="$emit('input', $event.target.value)"
    :id="name"
    :input-type="inputType"
    :placeholder="placeholder"
    class="c-input"
  />
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    inputType: {
      required: true,
      type: String,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
};
</script>
