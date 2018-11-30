<template>
  <el-container :class="$style.container">
    <el-header :class="$style.header">
      <!-- TODO: add nav top -->
    </el-header>
    <el-container>
      <el-aside :class="$style['a-side']">
      <!-- TODO: add nav a-side -->
      </el-aside>
      <el-container :class="$style['container-main']">
        <el-main>
          <slot />
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'AppLayout',
};
</script>

<style module>
.container {
  height: 100vh;
}

.container-main {
  margin-top: 1px;
}

.a-side {
  background-color: rgb(238, 241, 246);
  color: #333;
  margin-top: 1px;
}

.header {
  padding: 0;
}
</style>
