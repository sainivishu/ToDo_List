(this["webpackJsonptodo-list-v1"]=this["webpackJsonptodo-list-v1"]||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),c=n(7),r=n.n(c),l=(n(15),n(5)),u=n(2);var i=function(e){var t=Object(a.useState)(e.edit?e.edit.value:""),n=Object(u.a)(t,2),c=n[0],r=n[1],l=Object(a.useRef)(null);Object(a.useEffect)((function(){l.current.focus()}));var i=function(e){r(e.target.value)},d=function(t){t.preventDefault(),e.onSubmit({id:Math.floor(1e4*Math.random()),text:c}),r("")};return o.a.createElement("form",{onSubmit:d,className:"todo-form"},e.edit?o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{placeholder:"Update your item",value:c,onChange:i,name:"text",ref:l,className:"todo-input edit"}),o.a.createElement("button",{onClick:d,className:"todo-button edit"},"Update")):o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{placeholder:"Add a todo",value:c,onChange:i,name:"text",className:"todo-input",ref:l}),o.a.createElement("button",{onClick:d,className:"todo-button"},"Add todo")))},d=n(8),m=n(9),s=function(e){var t=e.todos,n=e.completeTodo,c=e.removeTodo,r=e.updateTodo,l=Object(a.useState)({id:null,value:""}),s=Object(u.a)(l,2),f=s[0],p=s[1];return f.id?o.a.createElement(i,{edit:f,onSubmit:function(e){r(f.id,e),p({id:null,value:""})}}):t.map((function(e,t){return o.a.createElement("div",{className:e.isComplete?"todo-row complete":"todo-row",key:t},o.a.createElement("div",{key:e.id,onClick:function(){return n(e.id)}},e.text),o.a.createElement("div",{className:"icons"},o.a.createElement(d.a,{onClick:function(){return c(e.id)},className:"delete-icon"}),o.a.createElement(m.a,{onClick:function(){return p({id:e.id,value:e.text})},className:"edit-icon"})))}))};var f=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"What's the Plan for Today?"),o.a.createElement(i,{onSubmit:function(e){var t;if(e.text&&!/^\s*$/.test(e.text)){var a=[e].concat(Object(l.a)(n));c(a),(t=console).log.apply(t,Object(l.a)(n))}}}),o.a.createElement(s,{todos:n,completeTodo:function(e){var t=n.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t}));c(t)},removeTodo:function(e){var t=Object(l.a)(n).filter((function(t){return t.id!==e}));c(t)},updateTodo:function(e,t){t.text&&!/^\s*$/.test(t.text)&&c((function(n){return n.map((function(n){return n.id===e?t:n}))}))}}))};var p=function(){return o.a.createElement("div",{className:"todo-app"},o.a.createElement(f,null))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.fdf91598.chunk.js.map