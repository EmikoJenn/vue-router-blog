<template>
  <label>
    {{ title }}
    <input
      type="checkbox"
      :checked="checked"
      @change="$emit('update:checked', $event.target.checked)"
    />
    <span />
  </label>
</template>

<script>
export default {
  name: "v-checkbox",
  props: {
    title: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
label {
  @extend .text-bold;
  @extend .text-lg;
  position: relative;
  left: -1rem;
  padding-left: 2.5rem;
  cursor: pointer;
  font-size: 1.5rem;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ span {
      background-color: $emphasis-color;
    }

    &:checked ~ span:after {
      display: block;
      left: 0.8rem;
      top: 0.3rem;
      width: 0.6rem;
      height: 1.2rem;
      border: solid white;
      border-width: 0 0.25rem 0.25rem 0;
      transform: rotate(45deg);
    }
  }

  span {
    height: 3rem;
    width: 3rem;
    position: absolute;
    top: -1rem;
    left: -1rem;
    border-radius: 0.5rem;
    background-color: inherit;
    border: 0.2rem solid $emphasis-color;

    &:after {
      content: "";
      position: absolute;
      display: none;
    }
  }

  &:hover input ~ span {
    background-color: rgba($emphasis-color, 0.6);

    &:after {
      display: block;
    }
  }
}
</style>
