<template>
  <div class="item-inner">
    <span># {{ source.index }}</span>
    <span>{{ source.name }}</span>
  </div>
</template>

<script>
import { Wrapper, ItemProps } from '../../../../src/index'

export default {
  name: 'fix-size-item',
  mixins: [Wrapper],
  props: Object.assign({
    source: {
      type: Object,
    }
  }, ItemProps)
}
</script>

<style lang="less" scoped>
.item-inner {
  span:first-child {
    margin-right: 1em;
  }
}
</style>