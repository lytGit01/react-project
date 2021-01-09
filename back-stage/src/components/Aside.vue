<template>
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item v-for="item in listAside" :index="item.url" @click="route(item.url)" :key="item.url">{{item.url}}</el-menu-item>
          <!-- <el-menu-item index="1-2" @click="route('drag')">drag</el-menu-item> -->
        </el-menu-item-group>
        </el-submenu>
    </el-menu>
</template>
<script>
export default {
  data () {
    return {
      listAside: [
        {
          url: 'h5'
        },
        {
          url: 'drag'
        },
         {
          url: 'websocket'
        },
        {
          url: 'c3'
        },
        {
          url: 'null'
        },
        {
          url: 'extend'
        }
      ]
    }
  },
  methods: {
    route(name) {
      this.$store.commit('setUrl', name)
    }
  }
}
</script>