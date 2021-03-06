<template>
  <div class="example">
    <github-corner />
    <introduction description="The property `:padding-via-css-prop` is set to true which sets `--padding-before` and `--padding-after` as a css property to be applied by the element's before/after selectors." />
    <div class="example-content">
      <tab v-on:tab-change="onTabChange" />

      <div class="selects" v-show="isShowView">{{ selectNames }}</div>

      <div class="scroller" v-show="isShowView">
        <virtual-list
          :root-tag="'table'"
          :header-tag="'thead'"
          :wrap-tag="'tbody'"
          :padding-via-css-prop="true"
          :page-mode="'div.scroller'"
          :data-key="'id'"
          :data-sources="items"
          :data-component="itemComponent"
          :item-class="'list-item-keep'"
        >
          <tr slot="header">
            <th>Index</th>
            <th>Input</th>
            <th>Name</th>
          </tr>
        </virtual-list>
      </div>

      <codeblock v-show="!isShowView" />
    </div>
  </div>
</template>

<script>
import Item from './Item'
import Code from './Code'

import { Random } from '../../common/mock'
import genUniqueId from '../../common/gen-unique-id'
import { TAB_TYPE, DEFAULT_TAB } from '../../common/const'

const TOTAL_COUNT = 1000

const DataItems = []
let count = TOTAL_COUNT
while (count--) {
  const index = TOTAL_COUNT - count
  DataItems.push({
    index,
    name: Random.name(),
    id: genUniqueId(index),
    checked: false
  })
}

export default {
  name: 'table-keep-state',

  components: {
    codeblock: Code
  },

  data () {
    return {
      items: DataItems,
      itemComponent: Item,
      isShowView: DEFAULT_TAB === TAB_TYPE.VIEW
    }
  },

  computed: {
    selectNames () {
      return this.items.map((item) => {
        if (item.checked) {
          return item.name
        }
      }).filter((item) => !!item)
    }
  },

  created () {
    // detecting change checked value from item component event.
    this.$on('checkBoxValueChange', (id, value) => {
      const targetItem = this.items.find((item) => item.id === id)
      if (targetItem) {
        targetItem.checked = value
      }
    })
  },

  methods: {
    onTabChange (type) {
      this.isShowView = type === TAB_TYPE.VIEW
    }
  }
}
</script>

<style lang="less">
.selects {
  margin-bottom: 1em;
  font-size: 14px;
}
.scroller {
  width: 100%;
  height: 500px;
  border: 2px solid;
  border-radius: 3px;
  overflow-y: auto;
  overflow-anchor: none;
  border-color: dimgray;
  padding: 0 10px;

  table {
    &:before {
      height: var(--padding-before, "0px");
    }
    &:after {
      height: var(--padding-after, "0px");
    }
    &:before, &::after {
      display: block;
      content: "";
    }
    table-layout: fixed;
  }
}
</style>
