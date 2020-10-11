<template>
  <div class="l-inner">
    <h2 class="c-heading__primary">基本情報入力</h2>
    <validation-observer
      tag="form"
      ref="observer"
      v-slot="{ invalid }"
      @submit.prevent="handleSubmit()"
    >
      <AppCard class="u-margin-bottom--large">
        <template #header>
          基本情報
        </template>
        <template>
          <user-info-forms
          :value="userInfo"
          @input="$emit('input', $event)"
          />
        </template>
      </AppCard>
      <div class="u-text--center">
        <app-button
          :type="invalid ? 'disabled' : 'primary'"
          :disabled="invalid">確認画面へ
        </app-button>
      </div>
    </validation-observer>
  </div>
</template>

<script>
import AppButton from '~/components/atoms/AppButton.vue';
import UserInfoForms from '~/components/organisms/form/UserInfoForms.vue';
import AppInputWithLabel from '~/components/molecules/AppInputWithLabel.vue';

export default {
  model: {
    prop: 'userInfo',
  },
  components: {
    AppButton,
    UserInfoForms,
    AppInputWithLabel,
  },
  props: {
    userInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    handleSubmit() {
      this.$router.push({ name: 'form-confirm' });
    },
  },
}
</script>
