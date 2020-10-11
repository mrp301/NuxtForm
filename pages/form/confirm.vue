<template>
  <div class="l-inner">
    <h2 class="c-heading__primary">基本情報確認</h2>
    <AppCard class="u-margin-bottom--large">
      <template #header>
        基本情報
      </template>
      <template>
        <user-info-confirms :value="userInfo" />
      </template>
    </AppCard>
    <div class="u-text--center">
      <div>
        <app-button
          @click="onSubmit()"
          class="u-margin-bottom--large">基本情報を保存
        </app-button>
      </div>
      <nuxt-link :to="{ name: 'form' }">
        <app-button type="prev">入力画面に戻る</app-button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import AppButton from '~/components/atoms/AppButton.vue';
import UserInfoConfirms from '~/components/organisms/form/UserInfoConfirms.vue';

export default {
  model: {
    prop: 'userInfo',
  },
  components: {
    AppButton,
    UserInfoConfirms,
  },
  props: {
    userInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  created() {
    const keys = Object.keys(this.userInfo);
    if (keys.every(key => !!this.userInfo[key] )) return;

    this.$router.push({ name: 'form' });
  },
  methods: {
    onSubmit() {
      const params = this.userInfo;
      // 送信処理
      alert('送信処理');
    },
  },
}
</script>
