<template>
  <q-btn
    v-bind="{ ...$props, ...$attrs }"
    :color="$attrs.color || 'primary'"
    :no-caps="$attrs.noCaps || true"
  >
    <template v-for="(index, name) in $slots" #[name]>
      <slot :name="name" />
    </template>
  </q-btn>
</template>

<script lang="ts" setup>
const props = defineProps(['width'])
// eslint-disable-next-line vue/no-setup-props-destructure
const width = props.width || '117px'
</script>

<style scoped lang="scss">
:deep {

}
.q-btn {
  width: v-bind(width);
  border-radius: 8px;
  &:before {
    box-shadow: none !important;
  }
}
</style>
