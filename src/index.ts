import { DirectiveOptions } from 'vue/types'

interface HTMLElement {
    clickOutside: (event: any) => void
}

const directive:DirectiveOptions = {
    bind(elem: HTMLElement, bind, vn): void {
        elem.clickOutside = (event:any):void => {
            if (!(elem == event.target || elem.contains(event.target))) {
                if(vn.context[bind.expression]!) {
                    vn.context[bind.expression](event)
                }
            }
        }
        document.body.addEventListener('click', elem.clickOutside)
    },
    unbind(elem): void {
        document.body.removeEventListener('click', elem.clickOutside)
    }
}

module.exports = {
    install(Vue: any):void {
        Vue.directive('click-outside-element', directive)
    }
}