(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{40:function(e,t,a){e.exports=a(52)},46:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(8),l=a(9),r=a(12),c=a(11),i=a(0),o=a.n(i),m=a(16),s=a.n(m),u=(a(45),a(36)),d=a(31),f=(a(46),a(7)),p=a(23),E=a(14),h=a(35),g=function(e){var t=Object(i.useState)({}),a=Object(d.a)(t,2),n=a[0],l=a[1];return[n,function(e){l(Object(h.a)(Object(h.a)({},n),{},Object(E.a)({},e.target.name,e.target.value)))},function(t){t.preventDefault(),e(n)}]};var b=function(e){var t=g((function(t){e.handleSubmit(t)})),a=Object(d.a)(t,3),n=(a[0],a[1]),l=a[2];return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"form"},o.a.createElement("h3",null,"Add Item"),o.a.createElement(f.a,{onSubmit:l},o.a.createElement(f.a.Group,{controlId:"formBasicEmail"},o.a.createElement(f.a.Label,null,"To Do Item"),o.a.createElement(f.a.Control,{name:"text",placeholder:"Add To Do List Item",onChange:n})),o.a.createElement(f.a.Group,{controlId:"formBasicPassword"},o.a.createElement(f.a.Label,null,"Assigned To"),o.a.createElement(f.a.Control,{type:"text",name:"assignee",placeholder:"Assigned To",onChange:n})),o.a.createElement(f.a.Group,{controlId:"formBasicRange"},o.a.createElement(f.a.Label,null,"Range"),o.a.createElement(f.a.Control,{type:"range",defaultValue:"1",min:"1",max:"5",name:"difficulty",onChange:n})),o.a.createElement(p.a,{variant:"primary",type:"submit",className:"button"},"Add Item"))))},v=a(39),j=a(33),O=a(38);a(50);var y=function(e){return o.a.createElement(v.a,null,e.list.map((function(t){return o.a.createElement(j.a,Object(E.a)({className:"complete-".concat(t.complete.toString()),key:t._id},"className","card"),o.a.createElement(j.a.Header,null,o.a.createElement(O.a,{variant:"success",className:"status-".concat(t.complete)},t.complete?"completed":"pending")," ",t.complete,"  ",t.assignee,o.a.createElement(p.a,{variant:"light",className:"delete",onClick:function(){return e.handleDelete(t._id)}},"X")),o.a.createElement(j.a.Text,{onClick:function(){return e.handleComplete(t._id)}},o.a.createElement("span",{className:"text"},"  ",t.text," "),o.a.createElement("span",{className:"dif"}," difficulty: ",t.difficulty)))})))},C=a(19),k=a(29),N=(a(51),function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).addItem=function(e){e._id=Math.random(),e.complete=!1,l.setState({list:[].concat(Object(u.a)(l.state.list),[e])})},l.toggleComplete=function(e){var t=l.state.list.filter((function(t){return t._id===e}))[0]||{};if(t._id){t.complete=!t.complete;var a=l.state.list.map((function(e){return e._id===t._id?t:e}));l.setState({list:a})}},l.togglehandleDelete=function(e){var t=l.state.list.findIndex((function(t){return t._id===e})),a=l.state.list.splice(t,1);l.setState(Object(u.a)(a))},l.state={list:[]},l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({list:[{_id:1,complete:!1,text:"Clean the Kitchen",difficulty:3,assignee:"Person A"},{_id:2,complete:!1,text:"Do the Laundry",difficulty:2,assignee:"Person A"},{_id:3,complete:!1,text:"Walk the Dog",difficulty:4,assignee:"Person B"},{_id:4,complete:!0,text:"Do Homework",difficulty:3,assignee:"Person C"},{_id:5,complete:!1,text:"Take a Nap",difficulty:1,assignee:"Person B"}]})}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,{bg:"dark",variant:"dark",className:"navBar"},o.a.createElement(C.a,{className:"mr-auto"},o.a.createElement("h2",null,"To Do list Manager (",this.state.list.filter((function(e){return!e.complete})).length,")"))),o.a.createElement("section",{className:"todo"},o.a.createElement("div",{className:"form"},o.a.createElement(b,{handleSubmit:this.addItem})),o.a.createElement("div",null,o.a.createElement(y,{list:this.state.list,handleComplete:this.toggleComplete,handleDelete:this.togglehandleDelete}))))}}]),a}(o.a.Component)),_=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(N,null))}}]),a}(o.a.Component),x=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(k.a,{bg:"primary",variant:"dark"},o.a.createElement(C.a,{className:"mr-auto"},o.a.createElement(C.a.Link,{href:"#home"},"Home"))))}}]),a}(o.a.Component),D=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,null),o.a.createElement(_,null))}}]),a}(o.a.Component),I=document.getElementById("root");s.a.render(o.a.createElement(D,null),I)}},[[40,1,2]]]);
//# sourceMappingURL=main.aded7294.chunk.js.map