import { mount, createLocalVue } from '@vue/test-utils'
import MyComponent from './../example/App.vue'
import vueClickOutsideElementDirective from './../src/index.js'

const localVue = createLocalVue()
localVue.use(vueClickOutsideElementDirective)

const mountOpts = { localVue }
const wrapper = mount(MyComponent, mountOpts)

test('displays message', () => {
	// console.log(wrapper)
	// console.log(wrapper.vm._vnode)
	console.log(wrapper.vm._vnode)
	// console.log(wrapper.vm.showButton)
	// console.log(wrapper.vm.close)
	// console.log(wrapper.vm.foo)
	// expect(wrapper.vm.foo).toBe(true)
	// expect(MyComponentMounted.text()).toContain('this button is showing, but if you click outside of it...')
})