<template>
  <div>
    <!-- 遮罩层 -->
    <div class="mask" @click.self="handleClick" :class="{visible}">
      <div class="container" :class="{visible}" :style="{top,width}">
        <div class="head">
          <slot name="title">
            <div class="title">{{title}}</div>
          </slot>
          <div class="close" @click="handleClick">
            <icon-close-small theme="outline" size="24" fill="#333" />
          </div>
        </div>
        <div class="content">内容</div>
        <div class="footer">
          <slot name="footer">
            <n-button @click="handleClick">取消</n-button>
            <n-button type="primary">确认</n-button>
          </slot>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "NDialog2",
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "提示",
    },
    top: {
      type: String,
      default: "15vh"
    },
    width: {
      type: String,
      default: "446px"
    },
  },
  methods: {
    handleClick() {
      this.$emit('update:visible', !this.visible)
    }
  }
}
</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  z-index: 99;
}
.mask.visible {
  visibility: visible;
}
.container.visible {
  visibility: visible;
  opacity: 1;
}

.container {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  padding: 16px 28px 20px;
  border-radius: 5px;
  visibility: hidden;
  transition: all 0.3s;
  opacity: 0;
  .head {
    position: relative;
    display: flex;
    .title {
      font-size: 18px;
    }
    .close {
      position: absolute;
      right: 0;
      transform: translateX(-50%);
      cursor: pointer;
    }
  }
  .content {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
