(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{39:function(e,t,a){e.exports=a(50)},45:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(8),l=a(9),r=a(12),c=a(11),o=a(0),i=a.n(o),m=a(15),u=a.n(m),s=(a(44),a(36)),d=a(31),f=(a(45),a(7)),p=a(23),h=a(22),E=a(35),g=function(e){var t=Object(o.useState)({}),a=Object(d.a)(t,2),n=a[0],l=a[1];return[n,function(e){l(Object(E.a)(Object(E.a)({},n),{},Object(h.a)({},e.target.name,e.target.value)))},function(t){t.preventDefault(),e(n)}]};var b=function(e){var t=g((function(t){e.handleSubmit(t)})),a=Object(d.a)(t,3),n=(a[0],a[1]),l=a[2];return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"form"},i.a.createElement("h3",null,"Add Item"),i.a.createElement(f.a,{onSubmit:l},i.a.createElement(f.a.Group,{controlId:"formBasicEmail"},i.a.createElement(f.a.Label,null,"To Do Item"),i.a.createElement(f.a.Control,{name:"text",placeholder:"Add To Do List Item",onChange:n})),i.a.createElement(f.a.Group,{controlId:"formBasicPassword"},i.a.createElement(f.a.Label,null,"Assigned To"),i.a.createElement(f.a.Control,{type:"text",name:"assignee",placeholder:"Assigned To",onChange:n})),i.a.createElement(f.a.Group,{controlId:"formBasicRange"},i.a.createElement(f.a.Label,null,"Range"),i.a.createElement(f.a.Control,{type:"range",min:"1",max:"5",name:"difficulty",onChange:n})),i.a.createElement(p.a,{variant:"primary",type:"submit",className:"button"},"Add Item"))))},v=a(38),j=a(33);var O=function(e){return i.a.createElement(v.a,null,e.list.map((function(t){return i.a.createElement(j.a,{className:"complete-".concat(t.complete.toString()),key:t._id},i.a.createElement(j.a.Header,null,t.complete,"  ",t.assignee),i.a.createElement(j.a.Text,{onClick:function(){return e.handleComplete(t._id)}},t.text,"  ",t.difficulty),i.a.createElement(p.a,{variant:"danger",className:"delete",onClick:function(){return e.handleDelete(t._id)}},"X"))})))},y=a(18),C=a(29),k=(a(49),function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).addItem=function(e){e._id=Math.random(),e.complete=!1,l.setState({list:[].concat(Object(s.a)(l.state.list),[e])})},l.toggleComplete=function(e){var t=l.state.list.filter((function(t){return t._id===e}))[0]||{};if(t._id){t.complete=!t.complete;var a=l.state.list.map((function(e){return e._id===t._id?t:e}));l.setState({list:a})}},l.togglehandleDelete=function(e){var t=l.state.list.findIndex((function(t){return t._id===e})),a=l.state.list.splice(t,1);l.setState(Object(s.a)(a))},l.state={list:[]},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({list:[{_id:1,complete:!1,text:"Clean the Kitchen",difficulty:3,assignee:"Person A"},{_id:2,complete:!1,text:"Do the Laundry",difficulty:2,assignee:"Person A"},{_id:3,complete:!1,text:"Walk the Dog",difficulty:4,assignee:"Person B"},{_id:4,complete:!0,text:"Do Homework",difficulty:3,assignee:"Person C"},{_id:5,complete:!1,text:"Take a Nap",difficulty:1,assignee:"Person B"}]})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(C.a,{bg:"dark",variant:"dark",className:"navBar"},i.a.createElement(y.a,{className:"mr-auto"},i.a.createElement("h2",null,"To Do list Manager (",this.state.list.filter((function(e){return!e.complete})).length,")"))),i.a.createElement("section",{className:"todo"},i.a.createElement("div",{className:"form"},i.a.createElement(b,{handleSubmit:this.addItem})),i.a.createElement("div",null,i.a.createElement(O,{list:this.state.list,handleComplete:this.toggleComplete,handleDelete:this.togglehandleDelete}))))}}]),a}(i.a.Component)),_=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(k,null))}}]),a}(i.a.Component),x=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(C.a,{bg:"primary",variant:"dark"},i.a.createElement(y.a,{className:"mr-auto"},i.a.createElement(y.a.Link,{href:"#home"},"Home"))))}}]),a}(i.a.Component),D=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(x,null),i.a.createElement(_,null))}}]),a}(i.a.Component),I=document.getElementById("root");u.a.render(i.a.createElement(D,null),I)}},[[39,1,2]]]);
//# sourceMappingURL=main.8808b9b4.chunk.js.map