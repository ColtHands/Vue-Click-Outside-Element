module.exports = {
    install(Vue) {
        Vue.directive('click-outside-element', {
            bind(e, b, vn) {
                e.cO = event => {
                    if (!(e == event.target || e.contains(event.target))) {
                        if(vn.context[b.expression]) {
                            vn.context[b.expression](event)
                        }
                    }
                }
                document.body.addEventListener('click', e.cO)
            },
            unbind(e) {
                document.body.removeEventListener('click', e.cO)
            }
        })
    }
}