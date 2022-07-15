<template>
  <transition name="el-message-fade" @after-leave="handleAfterLeave">
    <div
      class="toast-wrap"
      v-show="visible"
      :style="getTop"
      @mouseenter="stopTimeout"
      @mouseleave="startTimeout"
    >
      <span>
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="typeMap[type]"></use>
        </svg>
      </span>
      <span class="toast-content">{{ message }}</span>
    </div>
  </transition>
</template>

<script>
import "@/assets/icons/iconfont";

export default {
  name: "ToastComponent",
  data() {
    return {
      message: "",
      visible: false,
      duration: 3000,
      verticalOffset: 20,
      timer: null,
      typeMap: Object.freeze({
        success: "#icon-chenggong",
        warning: "#icon-jinggaoxuanzhong",
        info: "#icon-xinxi",
        error: "#icon-cuowu",
      }),
      type: "info",
    };
  },
  computed: {
    getTop() {
      return {
        top: `${this.verticalOffset}px`,
      };
    },
  },
  mounted() {
    this.visible = true;
    this.startTimeout();
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    startTimeout() {
      const { duration, onClose } = this;
      if (duration > 0) {
        this.timer = setTimeout(() => {
          onClose();
        }, duration);
      }
    },
    stopTimeout() {
      clearTimeout(this.timer);
    },
    onClose() {
      this.visible = false;
      if (typeof this.onCloseFn === "function") this.onCloseFn();
      this.$emit("close");
    },
  },
};
</script>

<style scope>
.el-message-fade-enter,
.el-message-fade-leave-active {
  opacity: 0;
  transform: translate(-50%, -100%);
}
.toast-wrap {
  padding: 10px 16px;
  transform: translateX(-50%);
  font-size: 14px;
  text-align: center;
  background: #fff;
  border-radius: 4px;
  position: fixed;
  z-index: 1000;
  top: 20px;
  left: 50%;
  box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014,
    0 9px 28px 8px #0000000d;
  transition: opacity 0.3s, transform 0.4s, top 0.4s;
}
.toast-content {
  margin-left: 4px;
}
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
