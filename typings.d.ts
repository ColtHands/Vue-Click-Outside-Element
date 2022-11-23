declare module 'vue-click-outside-element' {
  import { ObjectDirective, Plugin } from '@vue/runtime-core';
  interface ExtendedHTMLElement extends HTMLElement {
    clickOutside: (event: MouseEvent) => void;
  }
  const directive: ObjectDirective<ExtendedHTMLElement, Function>;
  const plugin: Required<Plugin>;
  export default plugin;
  export { directive };
}