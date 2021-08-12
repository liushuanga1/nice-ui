import Vue from "vue"
import { install as iconInstall } from "@icon-park/vue/es/all"
import "@icon-park/vue/styles/index.css"
iconInstall(Vue)
import Button from "./Button.vue"
import Input from "./Input.vue"
import Switch from "./Switch.vue"
import Radio from "./Radio.vue"
import Dialog from "./Dialog.vue"
import RadioGroup from "./RadioGroup.vue"
import Checkbox from "./Checkbox.vue"
import CheckboxGroup from "./CheckboxGroup.vue"
import Form from "./Form.vue"
import FormItem from "./FormItem.vue"

const components = [Button, Input, Switch, Radio, Dialog, RadioGroup, Checkbox, CheckboxGroup, Form, FormItem]
function install() {
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}
//script标签的形式直接引入文件
if(typeof window !=='undefined' && window.Vue){
  install(window.Vue)
}
export default install
