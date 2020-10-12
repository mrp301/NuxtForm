<template>
  <div class="l-inner">
    <h2 class="c-heading__primary">インデックス</h2>
    <app-input :value="text"
      @input="onChangeInput"
      name="インプット"
      input-type="text" />
    {{ text }}
  </div>
</template>

<script>
import AppInput from '~/components/atoms/AppInput.vue';

export default {
  components: {
    AppInput,
  },
  data() {
    return {
      text: '',
    }
  },
  methods: {
    onChangeInput(value) {
       this.text = value;
    },
  },
}
</script>
