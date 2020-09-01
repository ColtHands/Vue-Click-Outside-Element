import { VueConstructor, PluginObject, DirectiveOptions } from 'vue/types'

interface ExtendedHTMLElement extends HTMLElement {
    clickOutside: (event: any) => void
}

const directive:DirectiveOptions = {
    bind(el, bind, vn): void {
        const elem = el as ExtendedHTMLElement

        elem.clickOutside = (event) => {
            if (!(elem == event.target || elem.contains(event.target))) {
                if(vn.context && vn.context[bind.expression]) {
                    vn.context[bind.expression](event)
                }
            }
        }
        document.body.addEventListener('click', elem.clickOutside)
    },
    unbind(el): void {
        const elem = el as ExtendedHTMLElement

        document.body.removeEventListener('click', elem.clickOutside)
    }
}

const plugin: PluginObject<any> = {
    install(Vue: VueConstructor): void {
        Vue.directive('click-outside-element', directive)
    }
}

module.exports = plugin