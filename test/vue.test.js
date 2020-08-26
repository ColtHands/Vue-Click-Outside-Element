import { mount } from '@vue/test-utils'
import MyComponent from './../example/App.vue'

const MessageComponent = {
		template: '<p>{{ msg }}</p>',
		props: ['msg']
	}
	test('displays message', () => {
		// mount() returns a wrapped Vue component we can interact with
		const wrapper = mount(MessageComponent, {
			propsData: {
				msg: 'Hello world'
			}
		})
		const MyComponentMounted = mount(MyComponent)
		// Assert the rendered text of the component
		expect(wrapper.text()).toContain('Hello world')
		expect(MyComponentMounted.text()).toContain('this button is showing, but if you click outside of it...')
	})

// import exampleComponent from './../example/App.vue'

// test('displays message', () => {
//     const componentMount = mount(exampleComponent)
// })