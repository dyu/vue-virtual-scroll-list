/**
 * item and slot component both use similar wrapper
 * we need to know their size change at any time
 */

import Vue from 'vue'
import { ItemProps, SlotProps } from './props'

function getOffsetWidth (el) {
  return el.offsetWidth
}
function getOffsetHeight (el) {
  return el.offsetHeight
}
/* function getRowHeight (tr) {
  let height = tr.getBoundingClientRect().height
  const table = tr.closest('table')
  const style = window.getComputedStyle(table)
  const collapse = style.getPropertyValue('border-collapse')
  if (collapse === 'separate') {
    const space = parseFloat(
      style.getPropertyValue('border-spacing').split(' ')[1].replace(/[^\d.]/g, '')
    )
    if (table.rows.length === 1) {
      height += space * 2
    } else if (tr.rowIndex === 0 || tr.rowIndex === table.rows.length - 1) {
      height += space + space / 2
    } else {
      height += space
    }
  }
  return height
  // return tr.getBoundingClientRect().height
}
function getRowWidth (tr) {
  return tr.getBoundingClientRect().width
} */

export const Wrapper = {
  created () {
    this.fnCurrentSize = this.horizontal ? getOffsetWidth : getOffsetHeight
  },

  mounted () {
    /* if (this.$el.tagName === 'TR') {
      this.fnCurrentSize = this.horizontal ? getRowWidth : getRowHeight
    } */
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        this.dispatchSizeChange()
      })
      this.resizeObserver.observe(this.$el)
    }
  },

  // since componet will be reused, so disptach when updated
  updated () {
    this.dispatchSizeChange()
  },

  beforeDestroy () {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect()
      this.resizeObserver = null
    }
  },

  methods: {
    getCurrentSize () {
      const el = this.$el
      return !el ? 0 : this.fnCurrentSize(el)
    },

    // tell parent current size identify by unqiue key
    dispatchSizeChange () {
      this.$parent.$emit(this.event, this.uniqueKey, this.getCurrentSize(), this.hasInitial)
    }
  }
}

// wrapping for item
export const Item = Vue.component('virtual-list-item', {
  mixins: [Wrapper],

  props: ItemProps,

  render (h) {
    const { tag, component, extraProps = {}, index, scopedSlots = {}, uniqueKey } = this
    extraProps.source = this.source
    extraProps.index = index

    return h(tag, {
      key: uniqueKey,
      attrs: {
        role: 'listitem'
      }
    }, [h(component, {
      props: extraProps,
      scopedSlots: scopedSlots
    })])
  }
})

// wrapping for slot
export const Slot = Vue.component('virtual-list-slot', {
  mixins: [Wrapper],

  props: SlotProps,

  render (h) {
    const { tag, uniqueKey } = this

    return h(tag, {
      key: uniqueKey,
      attrs: {
        role: uniqueKey
      }
    }, this.$slots.default)
  }
})
