<template>
  <div>
    <el-submenu v-if="!item.hidden && item.children"
                :index="item.path">
      <template slot="title">
        <svg-icon v-if="item.meta.icon"
                  :icon-class="item.meta.icon"></svg-icon>
        <span slot="title">{{ item.meta.title }}</span>
      </template>
      <slidebar-item v-for="(child, index) in item.children"
                     :key="index"
                     :item="child"></slidebar-item>
    </el-submenu>

    <el-menu-item v-if="!item.hidden && !item.children"
                  :index="item.path">
      <svg-icon v-if="item.meta.icon"
                :icon-class="item.meta.icon"></svg-icon>
      <span slot="title">{{ item.meta.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'slidebarItem',

  props: {
    item: Object
  }
}
</script>