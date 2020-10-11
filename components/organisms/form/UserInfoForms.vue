<template>
  <ul class="u-formList">
    <li>
      <app-input-with-label
        :value="value.lastName"
        @input="onChangeInput({lastName: $event})"
        name="lastName"
        inputType="text"
        placeholder="田中"
        label="姓（漢字）"
        :is-required="true"
        rules="required"
      />
      <app-input-with-label
        :value="value.firstName"
        @input="onChangeInput({firstName: $event})"
        name="firstName"
        inputType="text"
        placeholder="太郎"
        label="名（漢字）"
        :is-required="true"
        rules="required"
      />
    </li>
    <li>
      <birthday-form
        :value="value.birthady"
        @input="onChangeInput({birthady: $event})"
      />
    </li>
    <li>
      <app-input-with-label
        :value="value.tel"
        @input="onChangeInput({tel: $event})"
        name="tel"
        inputType="tel"
        placeholder="090111122222"
        label="電話番号"
        :is-required="true"
        rules="required|tel"
      />
    </li>
    <li>
      <app-input-with-label
        :value="value.email"
        @input="onChangeInput({email: $event})"
        name="email"
        inputType="text"
        placeholder="hogehoge@gmai.com"
        label="メールアドレス"
        :is-required="true"
        rules="required|email"
      />
    </li>
  </ul>
</template>

<script>
import AppInputWithLabel from '~/components/molecules/AppInputWithLabel.vue';
import BirthdayForm from '~/components/organisms/form/BirthdayForm.vue';

export default {
  components: {
    AppInputWithLabel,
    BirthdayForm,
  },
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onChangeInput(value) {
      this.$emit('input', value);
    },
  }
}
</script>
