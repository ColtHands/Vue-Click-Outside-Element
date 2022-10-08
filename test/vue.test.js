import { mount } from '@vue/test-utils'
import vueClickOutsideElementDirective from './../dist/vue-click-outside-element.js'

describe("v-click-outside-element directive", () => {
	const mockMethod = jest.fn()

	const wrapper = mount({
		name: "app",
		directives: {
			'click-outside-element': vueClickOutsideElementDirective
		},
		methods: {
			mockMethod
		},
		template: `<div>
			<div class="div-with-directive" v-click-outside-element="mockMethod">div with directive</div>
			<div class="div-without-directive">div without directive</div>
		</div>`
	})

	const divWithDirective = wrapper.get('.div-with-directive')
	const divWithoutDirective = wrapper.get('.div-without-directive')

	test('should work correctly', async () => {
		// console.log('wrapper', wrapper)
		// console.log('divWithDirective', divWithDirective)
		// console.log('divWithoutDirective', divWithoutDirective)

		expect(wrapper.exists()).toBe(true)
		expect(divWithDirective.exists()).toBe(true)
		expect(divWithoutDirective.exists()).toBe(true)

		await divWithoutDirective.trigger('click')

		expect(mockMethod).toBeCalled()
	})
})