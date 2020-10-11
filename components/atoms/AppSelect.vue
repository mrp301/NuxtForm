<template>
  <div class="c-selectContainer">
    <validation-provider
      :rules="rules"
      :tag="tag"
      :name="name"
    >
      <select
        :value="value"
        @change="$emit('input', $event.target.value)"
        :id="name"
        class="c-select"
      >
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >{{ option.text }}</option>
      </select>
    </validation-provider>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      required: true,
      type: [String, Number],
    },
    name: {
      required: true,
      type: String,
    },
    options: {
      required: true,
      type: Array,
    },
    rules: {
      type: String,
      default: '',
    },
    tag: {
      type: String,
      default: '',
    }
  },
};
</script>
