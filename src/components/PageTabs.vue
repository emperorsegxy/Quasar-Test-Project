<template>
  <div class="page-tabs-wrap flex">
    <div
      v-for="(tab, i) in props.tabs"
      :key="i"
      class="flex page-tab items-center"
      :class="[{ 'page-tab--active': active === i, 'page-tab--completed': active > i }]"
    >
      <div class="tab--number flex items-center justify-center">
        <span v-if="active <= i">
          {{ i + 1 }}
        </span>
        <svg v-else width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.46894 0H8.6498C8.53496 0 8.42597 0.0527343 8.35566 0.142969L3.52402 6.26367L1.20722 3.32812C1.17217 3.28363 1.1275 3.24765 1.07656 3.22289C1.02561 3.19812 0.969723 3.18522 0.91308 3.18516H0.0939396C0.015424 3.18516 -0.0279355 3.27539 0.0201114 3.33633L3.22988 7.40273C3.37988 7.59258 3.66816 7.59258 3.81933 7.40273L9.54277 0.15C9.59082 0.0902344 9.54746 0 9.46894 0Z" fill="#000034"/>
        </svg>
      </div>
      <span class="actual__content">{{ tab }}</span>
      <div class="divider" v-if="i !== props.tabs.length - 1" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(['tabs', 'active'])
</script>
<style scoped lang="scss">
.page-tabs-wrap :deep {
  .page-tab {
    margin-right: 12px;
    .tab--number {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 1px solid var(--dark_5);
      background: transparent;
      margin-right: 8px;
      color: var(--dark_6);
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
    }

    .actual__content {
      color: var(--dark_3);
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
    }

    .divider {
      width: 20px;
      border: 1px solid var(--dark_5);
      height: 0px;
      margin-left: 12px;
    }

    &--active {
      .tab--number {
        background: var(--q-primary) !important;
        border-color: var(--q-primary);
        color: #FFF
      }

      .actual__content {
        color: var(--q-primary);
      }
    }

    &--completed {
      .tab--number {
        border-color: var(--q-primary);
      }
      .actual__content {
        color: var(--q-primary);
      }
    }
  }
}
</style>
