<template>
  <div>
    <el-row
      :gutter="10"
      justify="center"
      align="middle"
      type="flex"
      style="height: 100vh"
    >
      <el-col :span="12">
        <h1>NotFound</h1>
        <blockquote :class="$style['message']">{{ getMsg() }}</blockquote>
        <el-button
          type="primary"
          @click="handleHome"
        >Take me home!</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { APP_HOME } from '@/plugins/router/appRoutes';

const msgs = [
  "There's nothing here.",
  'How did we get here?',
  "That's a Four-Oh-Four.",
  "Looks like we've got some broken links.",
];

export default {
  name: 'NotFound',

  methods: {
    getMsg() {
      return msgs[Math.floor(Math.random() * msgs.length)];
    },

    handleHome() {
      this.$router.push({ name: APP_HOME });
    },
  },
};
</script>

<style module>
.message {
  background: #f9f9f9;
  border-left: 10px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  quotes: '\201C' '\201D' '\2018' '\2019';
}

.message:before {
  color: #ccc;
  content: open-quote;
  font-size: 4em;
  line-height: 0.1em;
  margin-right: 0.25em;
  vertical-align: -0.4em;
}

.message p {
  display: inline;
}
</style>
