<template>
  <validation-observer
    tag="div"
    ref="observer"
    v-slot="{ invalid }"
    @submit.prevent="handleSubmit()"
  >
    <label
      :class="invalid ? 'is-required' : 'is-success'"
      class="c-label">生年月日
    </label>
    <ul class="u-formList">
      <li>
        <app-select
          v-model="year"
          name="year"
          :options="optionYears"
          rules="required"
          tag="div"
        />
        <app-select
          v-model="month"
          @change="onChangeMonth(month)"
          name="month"
          :options="optionMonths"
          rules="required"
          tag="div"
        />
        <app-select
          v-model="date"
          @change="onChangeMonth(date)"
          name="date"
          :options="optionDays"
          rules="required"
          tag="div"
        />
      </li>
    </ul>
  </validation-observer>
</template>

<script>
import AppSelect from '~/components/atoms/AppSelect.vue';

export default {
  components: {
    AppSelect,
  },
  props: {
    value: { type: [String, Date], default: '' },
  },
  data() {
    const [year, month, date] = this.value.split('-');
    return { year, month, date };
  },
  watch: {
    year() { this.date = '' },
    month() { this.date = '' },
    date(value) {
      if (!value) return;

      this.$emit('input', this.formatDate(this.year, this.month, this.date));
    },
  },
  computed: {
    optionYears() {
      const currentYear = Number(this.$dayjs().format('YYYY'));
      const options = Array(50)
        .fill({ value: currentYear, text: '' })
        .map(({ value, text }, index) => {
          value = value - index;
          text = `${value}年`;
          return { value, text };
        });
      return options;
    },
    optionMonths() {
      return this.createOptions(12, '月');
    },
    optionDays() {
      const days = Number(this.$dayjs(`${this.year}-${this.month}`)
        .endOf('month')
        .format('D'));
      return this.createOptions(days, '日');
    },
  },
  methods: {
    createOptions(length, unit) {
      const options = Array(length)
        .fill({ value: 1, text: '' })
        .map(({ value, text }, index) => {
          value = value + index;
          text = `${value}${unit}`;
          return { value, text };
        });
      options.unshift({ value: '', text: '-' });
      return options;
    },
    formatDate(year, month, date) {
      return this.$dayjs(`${year}-${month}-${date}`).format('YYYY-M-D');
    },
  },
}
</script>
