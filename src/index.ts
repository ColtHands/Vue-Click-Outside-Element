import {
    type ObjectDirective,
    type Plugin,
    type DirectiveBinding
} from '@vue/runtime-core'

type ClickOutside = (event: MouseEvent) => void

interface ExtendedHTMLElement extends HTMLElement {
    clickOutside: ClickOutside
}

function clickOutside(this: ExtendedHTMLElement, bind: DirectiveBinding<Function>): ClickOutside {
    return event => {
        if(event.target instanceof Element) {
            if(!(this === event.target || this.contains(event.target))) {
                bind.value(event)
            }
        }
    }
}

export const directive: ObjectDirective<ExtendedHTMLElement, Function> = {
    beforeMount(element, bind, vn): void {
        const isDirectiveValueFunction = bind?.value?.constructor.name === 'Function'

        if(!isDirectiveValueFunction) {
            throw Error('[v-click-outside-element] Function should be provided in the directive')
        }

        element.clickOutside = clickOutside.bind(element)(bind)

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

export default plugin