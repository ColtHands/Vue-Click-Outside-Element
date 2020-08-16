module.exports = {
    install(Vue) {
        Vue.directive('click-outside-element', {
            bind(el, bind, vn) {
                el.cO = event => {
                    if (!(el == event.target || el.contains(event.target))) {
                        if(vn.context[bind.expression]) {
                            vn.context[bind.expression](event)
                        }
                    }
                }
                document.body.addEventListener('click', el.cO)
            },
            unbind(el) {
                document.body.removeEventListener('click', el.cO)
            }
        })
    }
}