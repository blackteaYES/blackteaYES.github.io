---
date: 2023-07-10
title: Vue3学习
categories:
  - vue
tag:
  - Vue
  - Vue3
  - js
footer: Vue3学习

---


# ![Vue](/assets/img/icons/vue.svg) Vue3学习

## 二、常用Composition API

### 1. 初识setup

#### 1.1 setup的描述

1. 理解：vue3.0中一个新的配置项，值为一个函数。
2. setup是所有<span style="color:#f20004">Composition API(组合API)</span> "表演的舞台"。
3. 组件中所用到的：数据、方法等等，均要配置在stup中。
4. setupi函数的两种返回值：
   1. **若返回一个对象，则对像中的属性、方法，在模板中均可以直接使用。（重点关注！）**
   2. <span style="color: #d3d3d3">若返回一个渲染函数：则可以自定义渲染内容。（了解）</span>
5. 注意点：
   1. 尽量不要与vue2.x配置混用
      - Vue2.X配置(data、methos、computed.)中<span style="color:#f20004">可以访问</span>到setup中的属性.、方法。
      - 但在setup中<span style="color:#f20004">不能访问</span>到vue2.x配置(data、methos、computed.)。
      - 如果有重名，setup优先。
   2. setup不能是一个async函数，因为返回值不再是return的对象，而是promise,模板看不到return对象中的同性。



#### 1.2 setup如何使用？

##### 1.2.1 setup的两种返回方式

1. setup返回对象使用。

   ```vue
   <template>
     <img alt="Vue logo" src="./assets/logo.png" />
     <h1>名称:{{ name }}</h1>
     <h1>年龄:{{ age }}</h1>
     <button @click="sayHello">打招呼</button>
   </template>
   
   <script>
   export default {
     name: 'App',
     setup() {
       // 数据
       let name = 'blacktea'
       let age = 20
   
       /**
        * 打招呼
        */
        function sayHello(){
         alert(`你好啊，我是${name}`)
       }
   
       return {
         name, age, sayHello
       }
     }
   
   }
   </script>
   
   ```

   最终效果，如图:setup返回对象使用

   ![setup返回对象使用](/assets/img/vue3/setup返回对象使用.png)

   

2. setup返回渲染函数使用。

   ```vue
   <template>
     <img alt="Vue logo" src="./assets/logo.png" />
     <h1>名称:{{ name }}</h1>
     <h1>年龄:{{ age }}</h1>
     <button @click="sayHello">打招呼</button>
   </template>
   
   <script>
   import { h } from 'vue'
   export default {
     name: 'App',
     setup() {
       // 数据
       let name = 'blacktea'
       let age = 20
   
       /**
        * 打招呼
        */
       function sayHello() {
         alert(`你好啊，我是${name}`)
       }
         
       return () => h('h1', 'hello')
     }
   
   }
   </script>
   ```

   最终效果，如图（返回渲染函数）：

   ![返回渲染函数](/assets/img/vue3/返回渲染函数.png)

##### 1.2.2 在vue3中使用vue2

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>name:{{ name }}</h1>
  <h1>version:{{ version }}</h1>
  <button @click="printInfo">vue2的点击事件</button>
  <button @click="getInfo">vuee的点击事件</button>
</template>

<script>
export default {
  name: 'App',
  // vue2使用
  data() {
    return {
      name: 'vue',
      version: '2', // 这个如果不存在，但是vue3中存在也是可以的。
    }
  },
  methods: {
    printInfo() {
      console.log(`当前${this.name}的版本是${this.version}`);
    }
  },
  // vue3 使用
  setup() {
    // 数据
    let version = '3'

    function getInfo() {
     console.log(this.name);
      this.printInfo()
    }

    return {
      version, getInfo
    }
  }

}
</script>

```

最终效果，如图（在vue3中使用vue2）:

![在vue3中使用vue2](/assets/img/vue3/在vue3中使用vue2.png)



### 2. ref函数

#### 2.1 ref函数的描述

1. 作用：定义一个响应式的数据。
2. 语法：`const xxx = ref(initValue)`
   1. 创建一个包含响应式数据的<span style="color:#f20004">引用对像(reference对象，简称ref对象)</span>。
   2. JS中操作数据：xxx.value。
   3. 模板中读取数据：不需要.value，直接：<div>{xxx}}</div>
3. 备注：
   1. 接收的数据可以是：基本类型、对象类型。
   2. 基本类型的数据：响应式依然是靠`Object.defineProperty()`的`get`与`set`完成的。
   3. 对象类型的数据：内部“求助“了vue3.0中的一个新函数一`reactive`函数.



#### 2.2 ref函数的使用

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>name:{{ name }}</h1>
  <h1>version:{{ version }}</h1>
  <h1>工作:{{ job.type }}</h1>
  <h1>薪水:{{ job.salary }}</h1>
  <button @click="updateInfo">修改信息</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    // 数据
    let version = ref('3')
    let name = ref('vue')
    let job = ref({
      type: '前端工程师',
      salary: '10k'
    })

    function updateInfo() {

      console.log(version, name); 
      // RefImpl {__v_isShallow: false, dep: Set(1), __v_isRef: true, _rawValue: 'vue', _value: 'vue'}
      version.value = '2015'
      name.value = 'javascript'

      // console.log(job.value);
      // Proxy(Object) {type: '前端工程师', salary: '10k'}
      job.value.type = '全干工程师'

    }

    return {
      name, version, updateInfo, job
    }
  }

}
</script>
 
```

最终效果，如图（使用ref函数）：

![使用ref函数](/assets/img/vue3/使用ref函数.png)





### 3.reactive函数

#### 3.1 reactive函数的描述

1. 作用：定义一个<span style="color:#f20004">对象类型</span>的响应式数据（基本类型不要用它，要用`ref`函数）。
2. 语法：`const 代理对象 = reactive(源对象)`接收一个对象（或数组），返回一个<span style="color:#f20004">代理对象(Proxy的实例对象，简称proxy对象)</span>。
3. reactive定义的响应式数据是“深层次的"。
4. 内部基于ES6的Proxy实现，通过代理对象操作源对象内部数据进行操作。



#### 3.2reactive函数的使用

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>name:{{ name }}</h1>
  <h1>version:{{ version }}</h1>
  <h1>工作:{{ job.type }}</h1>
  <h1>薪水:{{ job.salary }}</h1>
  <h1>爱好:{{ job.hobby }}</h1>
  <button @click="updateInfo">修改信息</button>
</template>

<script>
import { ref,reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    // 数据
    let version = ref('3')
    let name = ref('vue')
    let job = reactive({
      type: '前端工程师',
      salary: '10k',
      hobby: ['看小说', '看视频', '运动']
    })

    function updateInfo() {

      console.log(version, name); 
      // RefImpl {__v_isShallow: false, dep: Set(1), __v_isRef: true, _rawValue: 'vue', _value: 'vue'}
      version.value = '2015'
      name.value = 'javascript'

      console.log(job);
      // Proxy(Object) {type: '前端工程师', salary: '10k'}
      job.type = '全干工程师'
      job.hobby[1] = '吃美食'

    }

    return {
      name, version, updateInfo, job
    }
  }

}
</script>
 
```

最终效果，如图（使用reactive函数）：

![使用reactive函数](/assets/img/vue3/使用reactive函数.png)



### 4. Vue3.0中的响应式原理

#### 4.1 Vue2.x的响应式

1. 实现原理：

   - 对象类型：通过`Object.defineProperty()`对属性的读取、修改进行拦截（数据劫持）。

   - 数组类型：通过重写更新数组的一系列方法来实现拦截（对数组的变更方法进行了包裹）。

     ```javascript
     Object.defineProperty(data, 'count', {
     	get(){},
     	set(){}
     })
     ```

     

2. 存在问题：

   - 新增属性、删除属性，界面不会更新。
   - 直接通过下标修改数组，界面不会自动更新。



#### 4.2 Vue3.0的响应式

1. 实现原理：

   - 通过Proxy（代理）：拦截对象中任意属性的变化，包括：属性值得读写、属性的添加、属性的删除等。

   - 通过Reflect（反射）：对被代理对象的属性进行操作。

   - MDN文档中描写的Proxy与Reflect：

     - Prox:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy

     - Reflect:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect

       

2. 模拟Vue中实现响应式(含2.x、3)

   ```javascript
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   
   <body>
   
       <script type="text/javascript">
           let person = {
               name: 'blacktea',
               age: 20
           }
   
           // 模拟Vue2中实现响应式
           // let p = {}
           // Object.defineProperty(p, 'name', {
           //     get(){
           //         console.log('有人读取了name属性');
           //         return person.name
           //     },
           //     set(value){
           //         console.log(`有人修改了name属性，值为:${value}`);
           //         person.name = value
           //     }
           // })
   
           // 模拟Vue3中实现响应式，通过Reflect进行处理，才是Vue内部使用的方式
           const p = new Proxy(person, {
               // 读取属性时调用
               get(target, propName){
                   console.log(`有人读取属性：${propName}`);
                   // return target[propName]
                   return Reflect.get(target, propName)
               },
               // 修改属性或者添加属性时调用
               set(target, propName, value){
                   console.log(`有人修改属性：${propName}，传入的值是：${value}`);
                   target[propName] = value
                   Reflect.set(target, propName, value)
               },
               // 删除属性调用
               deleteProperty(target, propName){
                   console.log(`有人删除属性：${propName}`);
                   // return delete target[propName]
                   return Reflect.deleteProperty(target, propName)
               }
           })
   
       </script>
   </body>
   
   </html>
   ```



### 5. reactive对比ref

1. 从定义数据角度对比：
   - ref用来定义：<span style="color:#f20004">基本类型数据</span>。
   - reactive用来定义：<span style="color:#f20004">对象（或数组）类型属性</span>。
   - 备注：ref也可以用来定义<span style="color:#f20004">对象（或数组）类型数据</span>，它内部会自动通过`reactive`转为<span style="color:#f20004">代理对象</span>。
2. 从原理角度对比：
   - ref通过`Object.defineProperty()`的`get`与`set`来实现响应式（数据劫持）。
   - reactive通过<span style="color:#f20004">Proxy</span>来实现响应式（数据劫持），并通过<span style="color:#f20004">Reflect</span>操作<span style="color:#f5c800">源对象</span>内部的数据。
3. 从使用角度对比：
   - ref定义的数据：操作数据<span style="color:#f20004">需要</span>`.value`，读取数据时模板中直接读取，<span style="color:#f20004">不需要</span>`.value`。
   - reactive定义的数据：操作数据与读取数据<span style="color:#f20004">均不需要</span>`.value`。



### 6. setup的两个注意点

#### 6.1 两个注意点的描述

1. setup执行的时机。

   - 在beforeCreate之前执行一次，this是`undefined`,

2. setup的参数。

   - props：值为对象，包含：组件外部传递过来，且组件内部声明接收了的属性。

   - context:上下文对象。

     - attrs：值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性，相当于`this.$attrs`。

     - slots：收到的插槽内容，相当于`this.$s1ots`。

     - emit:分发自定义事件的函数，相当于`this.$emit`。

       

#### 6.2 两个注意点的使用

1. `App.vue`的代码。

   ```vue
   <template>
     <img alt="Vue logo" src="./assets/logo.png" />
     <Hello name="blacktea" age="20" @hello="sayHello">
       <template v-slot:abc>
         <h1>插槽1</h1>
       </template>
       <template v-slot:bcd>
         <h1>插槽2</h1>
       </template>
     </Hello>
     <h1>学校</h1>
     <h2>学校名称:{{ school.name }}</h2>
     <h2>学校描述:{{ school.description }}</h2>
   </template>
   
   <script>
   import Hello from './components/Hello.vue'
   import { reactive } from 'vue';
   export default {
     name: 'App',
     components: {
       Hello
     },
     setup() {
       let school = reactive({
         name: 'vue-school',
         description: '学习vue的学校'
       })
   
       function sayHello(name) {
         alert(`你好，我是${name}`)
       }
       return {
         school, sayHello
       }
     }
   
   }
   </script>
    
   ```

   

2. `Hello.vue`的代码。

   ```vue
   <template>
       <div>
           <slot name="abc"></slot>
           <h1>学生信息</h1>
           <h2>姓名:{{ name }}</h2>
           <h2>年龄:{{ age }}</h2>
           <button @click="hello">打招呼</button>
           <slot name="bcd"></slot>
       </div>
   </template>
   
   <script>
   export default {
       name: 'Hello',
       props: ['name', 'age'],
       emits: ['hello'],
       beforeCreate() {
           console.log('----beforeCreate----');
       },
       setup(props, context) {
           console.log('---setup---');
           console.log('setup--props', props);
           console.log('setup--context', context);
           // 只有 props 未声明时才会存在未声明的属性，与Vue2中的$attrs一样
           console.log('props', context.attrs);
           // 触发自定义事件
           console.log('emit', context.emit);
           // 返回插槽
           console.log('slots', context.slots);
   
           function hello(){
               context.emit('hello', props.name)
           }
   
           return {
               hello
           }
       }
   }
   </script>
   ```



### 7. 计算属性与监视

#### 7.1 computed函数

1. 与Vue2.x中的computed配置功能一致。

2. 写法：

   ```vue
   <template>
       <div>
           <h1>学生信息</h1>
           姓：<input type="text" v-model="person.firstName"> <br>
           名：<input type="text" v-model="person.lastName"> <br>
           姓名:{{ person.fullName }} <br>
           修改姓名: <input type="text" v-model="person.fullName">
       </div>
   </template>
   
   <script>
   import { reactive, computed } from 'vue'
   export default {
       name: 'Computed',
       // Vue2.x的写法，不建议使用
       // computed: {
       //     fullName() {
       //         return this.person.firstName + '-' + this.person.lastName;
       //     }
       // },
       setup() {
           let person = reactive({
               firstName: '张',
               lastName: '三'
           })
           // Vue3计算属性写法(简写，没有考虑属性被修改的情况)
           // person.fullName = computed(() => {
           //     return person.firstName + '-' + person.lastName;
           // })
   
           // Vue3计算属性的完整写法（考虑读和写）
           person.fullName = computed({
               get() {
                   return person.firstName + '-' + person.lastName;
               },
               set(value) {
                   const nameArr = value.split('-')
                   person.firstName = nameArr[0]
                   person.lastName = nameArr[1]
                }
           })
   
           return {
               person
           }
       }
   }
   </script>
   ```



#### 7.2watch函数

1. 与Vue2.x中的watch配置功能一致。

2. 两个小坑：

   - 监视reactive定义的响应式数据时：oldValue无法正确获取，且强制开启了深度监视（deep置失效）。
   - 监视reactive定义的响应式数据中某个属性时：deep配置有效。

3. 写法：

   ```vue
   <template>
       <div>
           <h1>监视属性</h1>
           <h2>当前求和为:{{ sum }}</h2>
           <button @click="add">点我+1</button>
           <br>
           <span>------------------------------------------------------------------------</span>
           <h2>当前的信息为：{{ msg }}</h2>
           <button @click="updateMsg">修改信息</button>
           <br>
           <span>------------------------------------------------------------------------</span>
           <h2>姓名:{{ person.name }}</h2>
           <h2>年龄:{{ person.age }}</h2>
           <h2>薪资:{{ person.job.info.salary }}</h2>
           <button @click="person.name += '~'">修改姓名</button>
           <button @click="person.age++">增长年龄</button>
           <button @click="person.job.info.salary++">增加薪资</button>
       </div>
   </template>
   
   <script>
   import { ref, watch, reactive } from 'vue'
   
   export default {
       name: 'watch',
       // Vue2.x的监视属性
       // watch: {
       //     // 简写
       //     // sum(newValue, oldValue){
       //     //     console.log('Vue2（简写）-sum的值变化了', newValue, oldValue);
       //     // }
   
       //     // 完整写法
       //     sum: {
       //         immediate: true,
       //         handler(newValue, oldValue) {
       //             console.log('Vue2（完整写法）-sum的值变化了', newValue, oldValue);
       //         }
       //     }
       // },
       setup() {
           let sum = ref(0)
           let msg = ref(`你好啊`)
           let person = reactive({
               name: 'blacktea',
               age: 20,
               job: {
                   info: {
                       salary: 11
                   }
               }
           })
   
           function add() {
               sum.value++;
           }
   
           function updateMsg() {
               msg.value += '!'
           }
   
           // Vue3的监视属性
   
           // 情况1：监视ref所定义的一个响应式数据
           // watch(sum, (newValue, oldValue) => {
           //     console.log('Vue3-sum的值变化了', newValue, oldValue);
           // },{immediate: true})
   
           // 情况2：监视ref所定义的多个响应式数据
           // watch([sum, msg], (newValue, oldValue) => {
           //     console.log('Vue3-值变化了', newValue, oldValue);
           // })
   
           /**
            * 情况3：监视reactive所定义的一个响应式数据
            *  注意：
            *      1. 此处无法正确的获取 oldValue 的值
            *      2. 强制开启深度监视，且无法关闭，{deep: false} 无效
            */
           // watch(person, (newValue, oldValue) => {
           //     console.log('Vue3-person-值变化了', newValue, oldValue);
           // })
   
           /**
            * 情况4：监视reactive所定义的一个响应式数据中的某个属性
            * 注意：
            *      1. 直接定义属性，无法监视
            *      2. 需要通过函数返回才可以监视
            */
           // watch(person.age, (newValue, oldValue) => {
           //     console.log('Vue3-person.age-值变化了', newValue, oldValue);
           // })
           // watch((() => person.age), (newValue, oldValue) => {
           //     console.log('Vue3-person.age-值变化了', newValue, oldValue);
           // })
   
           // 情况5：监视reactive所定义的一个响应式数据中的某些属性
           // watch(([() => person.name, () => person.age]), (newValue, oldValue) => {
           //     console.log('Vue3-person.[name, age]-值变化了', newValue, oldValue);
           // })
   
           /**
            * 特殊情况： 监视reactive所定义的一个响应式数据中的一个对象属性
            * 注意：
            *      1. 需要开启深度监视
            *      2. 无法正确的获取 oldValue
            */
           // watch((() => person.job), (newValue, oldValue) => {
           //     console.log('Vue3-person.job-值变化了', newValue, oldValue);
           // }, {deep: true})
   
           return { sum, add, msg, updateMsg, person }
       } 
   }
   </script>
   ```



#### 7.3 watchEffect函数

1. watch的套路是：既要指明监视的属性，也要指明监视的回调。

2. watchEffect的套路是：不用指明监视那个属性，监视的回调中用到那个属性，就监视那个属性。

3. watchEffecti有点像computed:

   - 但computed注重计算出来的值（回调函数的返回值），所以必须要写返回值。
   - 而watchEffect更注重的是过程（回调函数的函数体），所以不用写返回值。

4. 使用代码：

   ```vue
   <template>
       <div>
           <h1>WatchEffect</h1>
           <h2>当前求和为:{{ sum }}</h2>
           <button @click="add">点我+1</button>
           <br>
           <span>------------------------------------------------------------------------</span>
           <h2>姓名:{{ person.name }}</h2>
           <h2>年龄:{{ person.age }}</h2>
           <h2>薪资:{{ person.job.info.salary }}</h2>
           <button @click="person.name += '~'">修改姓名</button>
           <button @click="person.age++">增长年龄</button>
           <button @click="person.job.info.salary++">增加薪资</button>
       </div>
   </template>
   
   <script>
   import { ref, watch, reactive, watchEffect } from 'vue'
   
   export default {
       name: 'watchEffect',
       setup() {
           let sum = ref(0)
           let person = reactive({
               name: 'blacktea',
               age: 20,
               job: {
                   info: {
                       salary: 11
                   }
               }
           })
   
           function add() {
               sum.value++;
           }
   
           watchEffect(() => {
               const x1 = sum.value
               const x2 = person.job.info.salary
               console.log('watchEffect 执行了');
           })
   
           return { sum, add, person }
       }
   }
   </script>
   ```



### 8. 生命周期

#### 8.1 生命周期的变化

1. Vue2.x的生命周期

   ![vue2.x的生命周期](/assets/img/vue3/vue2.x的生命周期.png)

2. Vue3的生命周期

   ![Vue3的生命周期](/assets/img/vue3/Vue3的生命周期.png)

#### 8.2 CompositionAPI对比（Vue2.x和Vue3）

1. `beforeCreate` ======>  `setup()`
2. `created` ======> `setup()`
3. `beforeMount`  ===> `onBeforeMount`
4. `mounted`  =======>  `onMounted`
5. `beforeUpdate` ======> `onBeforeUpdate`
6. `update` ======> `onUpdate`
7. `beforeUnmount` ======> `onBeforeUnmount`
8. `unmounted` ======> `onUnmounted`



#### 8.3 如何使用CompositionAPI形式的生命周期钩子

1. `App.vue`的代码。

   ```vue
   <template>
     <img alt="Vue logo" src="./assets/logo.png" />
     <br>
     <button @click="isOpenDemo = !isOpenDemo">切换Demo组件开关</button>
     <Demo v-if="isOpenDemo"></Demo>
   </template>
   
   <script>
   import Demo from './components/Demo.vue'
   import { ref } from 'vue'
   
   export default {
     name: 'App',
     components: {
       Demo
     },
     setup() {
       let isOpenDemo = ref(true)
   
       return {
         isOpenDemo
       }
     }
   }
   </script>
    
   ```

   

2. `Demo.vue`的代码

   ```vue
   <template>
       <div>
           <h1>监视属性</h1>
           <h2>当前求和为:{{ sum }}</h2>
           <button @click="add">点我+1</button>
           <br>
       </div>
   </template>
   
   <script>
   import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'
   
   export default {
       name: 'demo',
       setup() {
           let sum = ref(0)
   
           function add() {
               sum.value++;
           }
   
           onBeforeMount(() => {
               console.log('---onBeforeMount--');
           })
           onMounted(() => {
               console.log('---onMounted--');
           })
           onBeforeUpdate(() => {
               console.log('---onBeforeUpdate--');
           })
           onUpdated(() => {
               console.log('---onUpdated--');
           })
           onBeforeUnmount(() => {
               console.log('---onBeforeUnmount--');
           })
           onUnmounted(() => {
               console.log('---onUnmounted--');
           })
   
           return { sum, add }
       },
       // 通过配置项的形式使用生命周期钩子
       // beforeCreate(){
       //     console.log('---beforeCreate---');
       // },
       // created(){
       //     console.log('---created---');
       // },
       // beforeMount(){
       //     console.log('---beforeMount---');
       // },
       // mounted(){
       //     console.log('---mounted---');
       // },
       // beforeUpdate(){
       //     console.log('---beforeUpdate---');
       // },
       // updated(){
       //     console.log('---updated---');
       // },
       // beforeUnmount(){
       //     console.log('---beforeUnmount---');
       // },
       // unmounted(){
       //      console.log('---unmounted---');
       // }
   }
   </script>
   ```



### 9. 自定义hook函数

#### 9.1 自定义hook函数的描述

1. 什么是hook？

   本质是一个函数，把setup函数中使用的Composition API 进行了封装。

2. 类似于Vue2.x中demixin。

3. 自定义hook的优势：复用代码，让setup中的逻辑更清楚易懂。



#### 9.2 自定义hook函数的使用

1. `usePont.js`，在src/hooks/下创建`usePont.js`。

   自定义的hook函数，建议以`use`开头。

   ```javascript
   import { reactive, onMounted, onBeforeUnmount } from 'vue'
   
   export default function () {
   
       let point = reactive({
           x: 0,
           y: 0
       })
   
       function savePoint(event) {
           point.x = event.pageX
           point.y = event.pageY
           console.log(event.pageX, event.pageY);
       }
   
       onMounted(() => {
           window.addEventListener('click', savePoint)
       })
   
       onBeforeUnmount(() => {
           window.removeEventListener('click', savePoint)
       })
   
       return point
   }
   ```

   

2. `App.vue`

   ```vue
   <template>
     <img alt="Vue logo" src="./assets/logo.png" />
     <br>
     <button @click="isOpenDemo = !isOpenDemo">切换Demo组件开关</button>
     <Demo v-if="isOpenDemo"></Demo>
     <hr>
     <Test></Test>
   </template>
   
   <script>
   import Demo from './components/Demo.vue'
   import Test from './components/Test.vue'
   import { ref } from 'vue'
   
   export default {
     name: 'App',
     components: {
       Demo, Test
     },
     setup() {
       let isOpenDemo = ref(true)
   
       return {
         isOpenDemo
       }
     }
   }
   </script>
    
   ```

   

3. `Demo.vue`

   ```vue
   <template>
       <div>
           <h1>Demo组件</h1>
           <h2>当前求和为:{{ sum }}</h2>
           <button @click="add">点我+1</button>
           <br>
           <span>当前点击的x坐标是：{{ point.x }}，y坐标是：{{ point.y }}</span>
       </div>
   </template>
   
   <script>
   import { ref } from 'vue'
   import usePoint from '../hooks/usePoint';
   
   export default {
       name: 'demo',
       setup() {
           let sum = ref(0)
   
           function add() {
               sum.value++;
           }
   
           let point = usePoint()
   
           return { sum, add, point }
       }
   }
   </script>
   ```

   

4. `Test.vue`

   ```vue
   <template>
       <div>
           <h1>Test组件</h1>
           <span>当前点击的x坐标是：{{ point.x }}，y坐标是：{{ point.y }}</span>
       </div>
   </template>
   
   <script>
   import usePoint from '../hooks/usePoint';
   
   export default {
       name: 'test',
       setup() {
   
           let point = usePoint()
           return { point }
       }
   }
   </script>
   ```



### 10. toRef

#### 10.1 toRef的描述

1. 作用：创建一个ref对象，其value值指向另一个对象中的某个属性。
2. 语法：`const name = toRef(person, 'name')`。
3. 应用：要将响应式对象中的某个属性单独提供给外部使用时。
4. 扩展：`toRefs`与`toRef`功能一致，但可以批量创建多个ref对象，语法：`toRefs(person)`。



#### 10.2 toRef如何使用？

```vue
<template>
    <div>
        <h1>Demo组件</h1>
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <h2>薪资:{{ job.info.salary }}</h2>
        <button @click="name += '~'">修改姓名</button>
        <button @click="age++">增长年龄</button>
        <button @click="job.info.salary++">增加薪资</button>
    </div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue'

export default {
    name: 'demo',
    setup() {
        let person = reactive({
            name: 'blacktea',
            age: 20,
            job: {
                info: {
                    salary: 11
                }
            }
        })

        let name = toRef(person, 'name')
        // ObjectRefImpl {_object: Proxy(Object), _key: 'name', _defaultValue: undefined, __v_isRef: true}
        console.log(name);

        // {name: ObjectRefImpl, age: ObjectRefImpl, job: ObjectRefImpl}
        const obj = toRefs(person)
        console.log(obj);

        return { ...obj }
    }
}
</script>
```



## 三、其它Composition API

### 1. shallowReactive 与 shallowRef

#### 1.1 shallowReactive 与 shallowRef的描述

1. shallowReactive：只处理对象最外层属性的响应式（浅响应式）。
2. shallowRef：只处理基本数据类型的响应式，不进行对象的响应式处理。
3. 什么时候使用？
   - 如果有一个对象数据，结构比较深，但变化时只是外层属性变化 ======> shallowReactive。
   - 如果有一个对象数据，后续功能不会修改该对象中的属性，而是用新的对象来替换======> shallowRef。



#### 1.2 shallowReactive 与 shallowRef的使用

```vue
<template>
    <div>
        <h1>Demo组件</h1>
        <h2>当前的x：{{ x.x }}</h2>
        <button @click="x.x++">x++</button>
        <hr>
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <h2>薪资:{{ job.info.salary }}</h2>
        <button @click="name += '~'">修改姓名</button>
        <button @click="age++">增长年龄</button>
        <button @click="job.info.salary++">增加薪资</button>
        
    </div>
</template>

<script>
import { ref, reactive, toRefs, shallowRef, shallowReactive } from 'vue'

export default {
    name: 'demo',
    setup() {
        // let person = shallowReactive({ // 只处理第一层的响应式
        let person = reactive({
            name: 'blacktea',
            age: 20,
            job: {
                info: {
                    salary: 11
                }
            }
        })

        const data = {
            x: 0
        }

        let x = shallowRef( // 只处理基础数据类型
        // let x = ref(
            data
        )

        console.log(x); // 它的value是一个值
        console.log(ref(data)); // 它的value是一个Proxy对象

        return { ...toRefs(person), x }
    }
}
</script>
```



### 2. readonly与shallowReadonly

#### 2.1 readonly与shallowReadonly的描述

1. readonly：让一个响应式数据变为只读的（深只读）。

2. shallowReadonly：让一个响应式数据变为只读的（浅只读，最外层不可改，内部可以）。

3. 应用场景：不希望数据被修改时。

   

#### 2.2 readomly与shallowReadonly的使用

```vue
<template>
    <div>
        <h1>Demo组件</h1>
        <h2>当前的sum为：{{ sum }}</h2>
        <button @click="sum++">sum++</button>
        <hr>
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <h2>薪资:{{ job.info.salary }}</h2>
        <button @click="name += '~'">修改姓名</button>
        <button @click="age++">增长年龄</button>
        <button @click="job.info.salary++">增加薪资</button>
        
    </div>
</template>

<script>
import { ref, reactive, toRefs, readonly, shallowReadonly } from 'vue'

export default {
    name: 'demo',
    setup() {
        let sum = ref(0)
        let person = reactive({
            name: 'blacktea',
            age: 20,
            job: {
                info: {
                    salary: 11
                }
            }
        })

        // Set operation on key "age" failed: target is readonly.
        // person = readonly(person) 

        // 第一层不可以改，内部的可以
        person = shallowReadonly(person)

        return { ...toRefs(person), sum }
    }
}
</script>
```



### 3. toRaw 与 markRaw

#### 3.1 toRaw 与 markRaw的描述

1.  toRaw 

   - 作用：将一个由`reactive`生成的<span style="color:#f5c800">响应式对象</span>转为<span style="color:#f5c800">普通对象</span>。
   - 使用场景：用于读取响应式对象对应的普通对象，对于这个普通对象的所有操作，不会引起页面更新。

   

2. markRaw

   - 作用：标记一个对象，使其永远不会再成为响应式对象。
   - 应用场景：
     1. 有些值不应该被设置为响应式的，例如复杂的第三方类库等。
     2. 当渲染具有不可变数据源的大列表时，跳过响应式转换可以提升性能。

   

#### 3.2 toRaw 与 markRaw的使用

```vue
<template>
    <div>
        <h1>Demo组件</h1>
        <h2>当前的sum为：{{ sum }}</h2>
        <button @click="sum++">sum++</button>
        <hr>
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <h2>薪资:{{ job.info.salary }}</h2>
        <div v-if="person.car">
            <h2>车辆:{{ person.car.name }}</h2>
            <h2>价格:{{ person.car.price }}</h2>
        </div>
        <button @click="name += '~'">修改姓名</button>
        <button @click="age++">增长年龄</button>
        <button @click="job.info.salary++">增加薪资</button>
        <button @click="showRawPerson">输出最原始的person</button>
        <br>
        <br>
        <button @click="addCar">给人添加一台车</button>
        <button v-show="person.car" @click="person.car.name += '!'">换车名</button>
        <button v-show="person.car" @click="changePrice">换价格</button>

    </div>
</template>

<script>
import { ref, reactive, toRefs, toRaw, markRaw } from 'vue'

export default {
    name: 'demo',
    setup() {
        let sum = ref(0)
        let person = reactive({
            name: 'blacktea',
            age: 20,
            job: {
                info: {
                    salary: 11
                }
            }
        })

        function showRawPerson() {
            let p = toRaw(person)
            p.age++
            console.log(p);

        }

        function addCar() {
            let car = {
                name: '特斯拉',
                price: 30
            }
            // person.car = car
            person.car = markRaw(car)
        }

        function changePrice() {
            person.car.price++
            console.log(person.car.price);
        }

        return { person, ...toRefs(person), sum, showRawPerson, addCar, changePrice }
    }
}
</script>
```



### 4. customRef

[customRef官网地址](https://cn.vuejs.org/api/reactivity-advanced.html#customref)

#### 4.1 customRef的描述

1. 作用：创建一个自定义的ref，显式声明对其依赖追踪和更新触发的控制方式。

2. 实现防抖效果。

   ```js
   import { customRef } from 'vue'
   
   export function useDebouncedRef(value, delay = 200) {
     let timeout
     return customRef((track, trigger) => {
       return {
         get() {
           track()
           return value
         },
         set(newValue) {
           clearTimeout(timeout)
           timeout = setTimeout(() => {
             value = newValue
             trigger()
           }, delay)
         }
       }
     })
   }
   ```

   在组件中使用：

   ```vue
   <script setup>
   import { useDebouncedRef } from './debouncedRef'
   const text = useDebouncedRef('hello')
   </script>
   
   <template>
     <input v-model="text" />
   </template>
   ```

   



#### 4.2 customRef的使用

```vue
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <br>
  <input type="text" v-model="keyWord">
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { ref, customRef } from 'vue'

export default {
  name: 'App',
  setup() {


    /**
     * 防抖
     * @param {*} value 值
     * @param {int} delay 延迟值
     */
    function myRef(value, delay) {
      let timer
      return customRef((track, trigger) => {
        return {
          get() {
            console.log(`触发myRef的get方法，值为:${value}`);
            track()
            return value
          },
          set(newValue) {
            console.log(`触发myRef的set方法，newValue:${newValue}`);
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger()
            }, delay);
          }
        }
      })
    }

    // let keyWord = ref('hello')
    let keyWord = myRef('hello', 1000)

    return {
      keyWord
    }
  }
}
</script>
```



### 5. provide与inject

[provide官网地址](https://cn.vuejs.org/api/composition-api-dependency-injection.html#provide)

[inject官网地址](https://cn.vuejs.org/api/composition-api-dependency-injection.html#inject)

#### 5.1 provide与inject的描述

![祖孙组件间通信](/assets/img/vue3/祖孙组件间通信.png)

1. 作用：实现祖与后代组件间通信（只要是后代组件都可以通过inject获取provide定义的数据）。

2. 套路：父组件有一个`provide`选项提供数据，子组件有一个`inject`选项来开始使用这些数据。

3. 具体写法：

   1. 祖先组件中：

      ```js
      setup(){
      	......
      	let car = reactive({
      		name: '特斯拉',
      		price: '30w'
      	})
      	privde('car', car)
      	......
      }
      ```

   2. 孙组件中：

      ```js
      setup(props, context){
      	......
      	const car = inject('car')
      	return {
      		car
      	}
      	......
      }
      ```

      

#### 5.2 provide与 inject的使用

1. `App.vue`。

   ```vue
   <template>
     <img alt="Vue logo" src="./assets/logo.png" />
     <br>
     <div class="app">
       <h1>我是App组件（祖先）</h1>
       <h2>{{ name }} --- {{ price }}</h2>
       <Child></Child>
     </div>
   </template>
   
   <script>
   import { reactive, toRefs, provide } from 'vue'
   import Child from './components/Child.vue'
   
   export default {
     name: 'App',
     components: { Child },
     setup() {
       let car = reactive({
         name: '特斯拉',
         price: '30w'
       })
   
       // 给自己的后代组件传递数据
       provide('car', car)
   
       return {
         ...toRefs(car)
       }
     }
   }
   </script>
    
   <style>
   .app {
     background-color: gray;
     padding: 10px;
   }
   </style>
   ```

   

2. `Child.vue`。

   ```vue
   <template>
       <div class="child">
           <h1>我是Child组件（父）</h1>
           <h2>{{ name }}---{{ price }}</h2>
           <Son></Son>
       </div>
   </template>
     
   <script>
   import Son from './Son.vue'
   import { inject, toRefs } from 'vue'
   
   export default {
       name: 'Child',
       components: { Son },
       setup() {
           let car = inject('car')
           console.log(car);
           return { ...toRefs(car) }
       }
   }
   </script>
      
   <style>
   .child {
       background-color: skyblue;
       padding: 10px;
   }
   </style>
   ```

   

3. `Son.ue`。

   ```vue
   <template>
       <div class="son">
           <h1>我是Son组件（孙）</h1>
           <h2>{{ name }}---{{ price }}</h2>
       </div>
   </template>
     
   <script>
   import { inject, toRefs } from 'vue'
   
   export default {
       name: 'Son',
       setup() {
           let car = inject('car')
           console.log(car);
           return { ...toRefs(car) }
       }
   }
   </script>
      
   <style>
   .son {
       background-color: orange;
       padding: 10px;
   }
   </style>
   ```

   

provide与inject的使用效果，如下图（provide与inject的使用）：

![provide与inject的使用](/assets/img/vue3/provide与inject的使用.png)

### 6. 响应式数据的判断

[isRef等相关判断的官网地址](https://cn.vuejs.org/api/reactivity-utilities.html#isref)

#### 6.1 响应式数据的判断的描述

1. isRef：检查一个值是否为一个ref对象。

2. 检查一个对象是否是由 [`reactive()`](https://cn.vuejs.org/api/reactivity-core.html#reactive) 或 [`shallowReactive()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive) 创建的代理。

3. isReadonly：检查传入的值是否为只读对象。只读对象的属性可以更改，但他们不能通过传入的对象直接赋值。

   通过 [`readonly()`](https://cn.vuejs.org/api/reactivity-core.html#readonly) 和 [`shallowReadonly()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreadonly) 创建的代理都是只读的，因为他们是没有 `set` 函数的 [`computed()`](https://cn.vuejs.org/api/reactivity-core.html#computed) ref。

4. isProxy：检查一个对象是否是由 [`reactive()`](https://cn.vuejs.org/api/reactivity-core.html#reactive)、[`readonly()`](https://cn.vuejs.org/api/reactivity-core.html#readonly)、[`shallowReactive()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreactive) 或 [`shallowReadonly()`](https://cn.vuejs.org/api/reactivity-advanced.html#shallowreadonly) 创建的代理。