<template>
  <ul class="u-formList">
    <li>
      <app-confirm-with-label :value="value.lastName" label="姓（漢字）" />
      <app-confirm-with-label :value="value.firstName" label="名（漢字）" />
    </li>
    <li>
      <app-confirm-with-label :value="formatDate(value.birthady)" label="生年月日" />
    </li>
    <li>
      <app-confirm-with-label :value="value.tel" label="電話番号" />
    </li>
    <li>
      <app-confirm-with-label :value="value.email" label="メールアドレス" />
    </li>
  </ul>
</template>

<script>
import AppConfirmWithLabel from '~/components/molecules/AppConfirmWithLabel.vue';

export default {
  components: {
    AppConfirmWithLabel,
  },
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    formatDate(value) {
      return this.$dayjs(value).format('YYYY年M月D日');
    }
  }
}
</script>
