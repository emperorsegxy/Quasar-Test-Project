<template>
  <div class="text-field-wrap">
    <label>{{ props.field.label }} <span class="optional-label" v-if="props.field.optional">(Optional)</span></label>
    <q-select
      v-bind="{ ...$props, ...attrs }"
      v-model="value"
      :placeholder="props.field.placeholder"
      :rules="rules"
      :options="props.field.items"
      outlined
    >
<!--      <template v-for="(index, name) in $slots" #[name]>-->
<!--        <slot :name="name" />-->
<!--      </template>-->
      <template #prepend>
        <img :src="props.field.icon" v-if="props.field.icon" alt="icon" />
      </template>
    </q-select>
  </div>
</template>

<script setup lang="ts">
import {computed, ref, useAttrs} from 'vue';
import Field from 'src/interfaces/Field';

interface Props {
  field: Field
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const {label, ...attrs} = useAttrs()

const props = defineProps<Props>()

const value = ref('')

const rules = computed(() => {
  const _rules = []
  if (!props.field.optional) {
    _rules.push((v: string) => !!v || 'Field cannot be empty')
  }
  return _rules
})

</script>

<style scoped lang="scss">
@import "src/css/text__field.scss";
</style>
