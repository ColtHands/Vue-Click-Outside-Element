import { mount } from '@vue/test-utils'
import vueClickOutsideElement, { directive } from '../src/index.ts'

describe('v-click-outside-element', () => {
    describe('vue test utils', () => {
        describe('mounts correctly', () => {
            beforeAll(() => {
                window.addEventListener = jest.fn()
                window.removeEventListener = jest.fn()
            })

            test('has correct object structure', () => {
                expect(vueClickOutsideElement).toStrictEqual({
                    directive: {
                        beforeMount: expect.any(Function),
                        beforeUnmount: expect.any(Function)
                    },
                    install: expect.any(Function)
                })
            })

            test('adds and removes event listeners', () => {
                const el = document.createElement('div')
                const mockBindingValueFn = jest.fn()

                directive.beforeMount(el, { value: mockBindingValueFn })
                
                expect(window.addEventListener).toHaveBeenCalledTimes(1)
                expect(window.removeEventListener).not.toHaveBeenCalled()

                directive.beforeUnmount(el)
                expect(window.removeEventListener).toHaveBeenCalledTimes(1)
            })
        })

        describe('correct usage', () => {
            const spyMethod = jest.fn()
            const wrapper = mount({
                methods: {
                    spyMethod
                },
                template: `<div>
                    <div class="div-with-directive" v-click-outside-element="spyMethod">div with directive</div>
                    <div class="div-without-directive">div without directive</div>
                </div>`
            }, {
                global: {
                    plugins: [vueClickOutsideElement]
                },
                attachTo: document.body
            })
        
            const divWithDirective = wrapper.find('.div-with-directive')
            const divWithoutDirective = wrapper.find('.div-without-directive')
        
            test('component mounts correctly', () => {
                expect(wrapper.exists()).toBe(true)
                expect(divWithDirective.exists()).toBe(true)
                expect(divWithoutDirective.exists()).toBe(true)
            })
    
            test('triggers click', async () => {
                await divWithoutDirective.trigger('click')
                expect(spyMethod).toHaveBeenCalledTimes(1)
            })
        })

        describe('incorrect usage', () => {
            test.each([
                123,
                123.456,
                'hello world',
                {},
                { bind: () => {} },
                { value: () => {} },
                new Date(),
                Symbol()
            ])('throws error if directive binding value is a %p', value => {
                expect(() => directive.beforeMount(document.createElement('div'), { value }))
                    .toThrowError('[v-click-outside-element] Function should be provided in the directive')
            })
        })
    })

    describe('VTL', () => {
        test.todo('consider adding vue-testing-library')
    })

    describe('vitest', () => {
        test.todo('consider adding vitest')
    })
})
