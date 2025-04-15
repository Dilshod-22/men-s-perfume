<template>
  <div :class="widex">
    <label :for="label">{{ label }}</label>
    <input
      :id="label"
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      class="form-control"
    />
  </div>
</template>

<script>
export default {
  name: 'DynamicInput',
  props: {
    label: String,
    type: {
      type: String,
      default: 'text',
    },
    widex: {
      type: String,
      default: 'w-1/2',
    },
    placeholder: String,
    modelValue: [String, Number], // required for v-model
  },
};
</script>
