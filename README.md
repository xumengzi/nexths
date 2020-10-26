## `nextjs` 学习

```
mkdir nextjs
cd nextjs
npm init -y
npm install --save react react-dom next
npm run dev
```

>nextjs高度定制化,省略了很多步骤,所以都得按照规范来,比如根目录的pages,components,styles等等

1. `nextjs`的路由很简单, 想要什么页面就在`pages`页面新建即可
   1. 参数和常见的类似,获取参数则需要 `import { widthRouter } from 'next/router'`;
2. 图片资源在`public`文件夹
3. 样式是`css in js`模式, 有点抠脚
   1. 组件内 <style>{`body{padding:0};`}</style>
4. 当然样式也可以使用`import`的方式
5. 修改页面`title`, 可以在`head`标签里面写`title`, 同时还可以修改`icon`, `meta`等`html`标签
6. 如果想让某些css, 全局引用
   1. 在根目录新建styles/global.css, 在pages目录新建_app.js, 然后引入全局css即可

