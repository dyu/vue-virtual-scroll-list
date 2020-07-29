<template>
  <div class="item">
    <div class="inner" v-bind:style="{width: source.size + 'px'}">
      <div class="index"># {{ source.index }}</div>
      <div class="size">{{ source.size }}</div>
    </div>
  </div>
</template>

<script>
import { Wrapper, ItemProps } from '../../../../src/index'

export default {
  name: 'horizontal-item',
  mixins: [Wrapper],
  props: Object.assign({
    source: {
      type: Object,
    }
  }, ItemProps)
}
</script>

<style lang="less" scoped>
.item {
  border-right: 1px solid #dfdfdf;
  .inner {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2em 0;
    .index {
      width: 100%;
      text-align: center;
    }
    .size {
      text-align: right;
      color: darkgray;
      font-size: 16px;
    }
  }
}
</style>