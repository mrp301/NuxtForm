<template>
  <validation-provider
    v-slot="{ errors }"
    :rules="rules"
    tag="div"
    ref="validationProvider"
    :name="label"
  >
    <label
      :for="name"
      :class="errors[0] || !value ? 'is-required' : 'is-success'"
      class="c-label"
    >{{ label }}</label>
    <app-input
      :value="value"
      @input="$emit('input', $event)"
      :name="name"
      :input-type="inputType"
      :placeholder="placeholder"
    />
    <p v-show="errors[0]" class="c-label__errorText">
      {{ errors[0] }}
    </p>
    {{ classList }}
  </validation-provider>
</template>

<script>
import AppInput from '~/components/atoms/AppInput.vue';

export default {
  components: {
    AppInput,
  },
  props: {
    value: {
      required: true,
      type: String
    },
    name: {
      required: true,
      type: String
    },
    label: {
      required: true,
      type: String
    },
    inputType: {
      required: true,
      type: String
    },
    placeholder: {
      type: String,
      default: ''
    },
    isRequired: {
      type: Boolean,
      default: false
    },
    rules: {
      type: String,
      default: ''
    },
  },
  computed: {
    classList() {
      return this.$refs.validationProvider;
    },
  },
};
</script>
