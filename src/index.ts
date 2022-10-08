interface ExtendedHTMLElement extends HTMLElement {
    clickOutside: (event: any) => void
}

const directive = {
    bind(el: any, bind: any, vn: any): void {
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
    unbind(element: ExtendedHTMLElement): void {
        document.body.removeEventListener('click', element.clickOutside)
    }
}

const plugin = {
    install(Vue: any): void {
        Vue.directive('click-outside-element', directive)
    }
}

export default plugin