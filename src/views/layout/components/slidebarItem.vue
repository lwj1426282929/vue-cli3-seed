<template>
  <div>
    <el-submenu :index="item.path"
                v-if="item.children">
      <template slot="title">
        <!-- <i class="el-icon-location"></i> -->
        <svg-icon icon-class="plant-09"></svg-icon>
        <span slot="title">{{ item.meta.title }}</span>
      </template>
      <slidebar-item v-for="(child, index) in item.children"
                     :key="index"
                     :item="child"></slidebar-item>
    </el-submenu>

    <el-menu-item v-else
                  :index="item.path">
      <!-- <i class="el-icon-document"></i> -->
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