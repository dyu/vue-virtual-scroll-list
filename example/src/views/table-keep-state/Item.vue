<template>
  <tr class="item-inner">
    <td>
      <span class="index"># {{ source.index }}</span>
    </td>
    <td>
      <input class="checkbox" v-bind:checked="source.checked" @change="onChange" type="checkbox" />
    </td>
    <td>
      <span class="name" @click="onClickName">{{ source.name }}</span>
    </td>
  </tr>
</template>

<script>
import mixins from '../../mixins'
import { Wrapper, ItemProps } from '../../../../src/index'

export default {
  name: 'keep-state-item',

  mixins: [Wrapper, mixins],

  props: Object.assign({
    source: Object
  }, ItemProps),

  methods: {
    onChange (e) {
      this.dispatch('table-keep-state', 'checkBoxValueChange', this.source.id, e.target.checked)
    },

    onClickName () {
      this.dispatch('table-keep-state', 'checkBoxValueChange', this.source.id, !this.source.checked)
    }
  }
}
</script>

<style lang="less" scoped>
.item-inner {
  .name {
    cursor: pointer;
    user-select: none;
  }
}
</style>
