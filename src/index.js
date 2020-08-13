module.exports = {
    install(Vue) {
        Vue.directive('click-outside-element', {
            bind(element, binding, vnode) {
                element.clickOutside = event => {
                    if (!(element == event.target || element.contains(event.target))) {
                        if(vnode.context[binding.expression]) {
                            vnode.context[binding.expression](event)
                        } else {
                            console.warn('v-click-outside-element directive needs a function inside <methods> object to run correctly')
                        }
                    }
                }
                document.body.addEventListener('click', element.clickOutside)
            },
            unbind(element) {
                document.body.removeEventListener('click', element.clickOutside)
            }
        })
    }
}