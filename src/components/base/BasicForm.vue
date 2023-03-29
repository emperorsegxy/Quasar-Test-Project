<template>
  <div class="basic-form-wrap">
    <div
      v-for="(field, i) in fields"
      :key="i"
      class="basic-field"
      :class="[{ 'grid-span': !field.doesNotSpan }]"
    >
      <select-field
        v-if="field.type === 'select'"
        :field="field"
      />
      <text-field
        v-else
        :field="field"
        @input="onInput(field.name, $event)"
        />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Field from 'src/interfaces/Field';
import TextField from 'components/base/TextField.vue';
import SelectField from 'components/base/SelectField.vue';

interface Props {
  fields: Field[]
}
const props = defineProps<Props>()
const emit = defineEmits(['input'])

function onInput (name: string, value: InputEvent) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  emit('input', {name, value: value.target?.value})
}
</script>

<style scoped lang="scss">
.basic-form-wrap :deep {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  min-width: 400px;

  @media (max-width: 485px) {
    min-width: 100%;
  }

  .grid-span {
    grid-column: 1/3;
  }

  .basic-field {
    @media (max-width: 485px) {
      grid-column: 1/3;
    }
  }
}
</style>
