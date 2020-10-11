<template>
  <nuxt-child
    :userInfo="userInfo"
    @input="onChangeInput"
  />
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        lastName: '',
        firstName: '',
        birthady: this.$dayjs().format('YYYY-M-D'),
        tel: '',
        email: '',
      },
    };
  },
  methods: {
    onChangeInput(value) {
       this.userInfo = { ...this.userInfo, ...value };
    },
  },
};
</script>
