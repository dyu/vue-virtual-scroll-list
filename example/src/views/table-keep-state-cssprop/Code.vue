<template>
  <div>
    <div class="title">This example source code please refer to:</div>
    <p><a v-bind:href="href" target="_blank">{{ href }}</a></p>

    <div>Here the code for padding via css prop:</div>
    <code-high-light type="js" :code="mixin" />
  </div>
</template>

<script>
import getCodeUrl from '../../common/get-code-url'

const mixinCode =
`
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
`

export default {
  name: 'table-code',

  data () {
    return {
      href: '',
      mixin: mixinCode
    }
  },

  mounted () {
    this.href = getCodeUrl()
  }
}
</script>

<style lang="less" scoped>
.title {
  margin: 3em 0 2em 0;
}
</style>

