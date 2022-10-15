import {
    type ObjectDirective,
    type Plugin
} from '@vue/runtime-core'

interface ExtendedHTMLElement extends HTMLElement {
    clickOutside: (event: MouseEvent) => void
}

const directive: ObjectDirective<ExtendedHTMLElement, Function> = {
    beforeMount(element, bind, vn): void {
        const isDirectiveValueFunction = bind?.value?.constructor.name === 'Function'

        if(!isDirectiveValueFunction) {
            throw Error('[v-click-outside-element] Function should be provided in the directive')
        }

        element.clickOutside = event => {
            if(event.target instanceof Element) {
                if(!(element === event.target || element.contains(event.target))) {
                    bind.value(event)
                }
            }
        }

        window.addEventListener('click', element.clickOutside)
    },
    beforeUnmount(element): void {
        window.removeEventListener('click', element.clickOutside)
    }
}

const plugin: Required<Plugin> = {
    install(Vue, name: string = 'click-outside-element'): void {
        Vue.directive(name, directive)
    }
}

module.exports = plugin
exports = module.exports
exports.directive = directive