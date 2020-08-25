import { DirectiveOptions } from 'vue/types'

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

// TODO add Vue type, if it exists
module.exports = {
    install(Vue: any): void {
        Vue.directive('click-outside-element', directive)
    }
}