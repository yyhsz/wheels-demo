import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group'
import chai from 'chai'
import spies from 'chai-spies'

chai.use(spies)

Vue.component('g-button', Button)
Vue.component('g-button-group', ButtonGroup)
new Vue({
    el: '#app',
    data() {
        return {
            loading: false,
        }
    }
})


// 单元测试
const expect = chai.expect
try {
    {
        //测试按钮含有icon
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting'
            }
        })
        vm.$mount()//挂载到内存
        expect(vm.$el.querySelector('use').getAttribute('xlink:href')).to.eq('#i-setting')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                loading: true,
            }
        })
        vm.$mount()
        expect(vm.$el.querySelector('use').getAttribute('xlink:href')).to.eq('#i-loading')
        vm.$el.remove()
        vm.$destroy()
    }

    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                loading: true,
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                loading: true,
                iconPosition: 'right',
            }
        })
        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} = window.getComputedStyle(svg)
        expect(order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    }
    {
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
                loading: false,
            }
        })
        vm.$mount()
        //函数的mock
        let spy = chai.spy(() => {
        })
        vm.$on('click', spy)
        vm.$el.click()
        expect(spy).to.have.been.called()
    }
} catch (error) {
    window.errors = [error]
} finally {
   window.errors && window.errors.forEach((error) => {
        console.error(error.message)
    })
}

