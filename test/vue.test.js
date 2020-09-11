import { shallowMount, createLocalVue } from '@vue/test-utils'
import vueClickOutsideElementDirective from './../dist/vue-click-outside-element.js'

const localVue = createLocalVue()
localVue.use(vueClickOutsideElementDirective)

const testMethod = jest.fn()

const wrapper = shallowMount({
	name: "app",
	directives: {
		'click-outside-element': vueClickOutsideElementDirective
	},
	methods: {
		testMethod
	},
	template: `<div>
		<div class="div-with" v-click-outside-element="testMethod">div with directive</div>
		<div class="div-without">div without directire</div>
	</div>`
}, {
	localVue,
})

test('2', () => {
	const div = wrapper.find('.div-without')
	div.trigger('click')
	expect(div.exists()).toBe(true)
	expect(testMethod).toBeCalled()
})