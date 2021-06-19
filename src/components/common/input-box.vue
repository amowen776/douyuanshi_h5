<template>
  <div class="input-box">
    {{label}}: <input
      :type="type"
      class="input-content"
      :style="{'width': inputWidth}"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: "姓名",
    },
    type: {
      type: String,
      default: "text",
    },
    inputWidth: {
      type: String,
      default: "3rem",
    },
    value: String,
    error: String
  },
  methods: {},
};
</script>
<style lang='scss' scoped>
.input-box {
  margin-right: .5rem;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  .input-content {
    border-bottom: 1px solid #999;
    text-indent: .3rem;
  }
}
</style>
