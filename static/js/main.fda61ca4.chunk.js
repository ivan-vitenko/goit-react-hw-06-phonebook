(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={Filter:"Filter_Filter__13gOn"}},28:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n(0),r=n.n(a),o=n(7),i=n.n(o),s=(n(27),n(28),n(5)),u=n(18),l=n(15),b=n(42),d=n(3),j={addContact:Object(d.b)("contacts/add",(function(t,e){return{payload:{id:Object(b.a)(),name:t,number:e}}})),deleteContact:Object(d.b)("contacts/delete"),changeFilter:Object(d.b)("contacts/changeFilter")};n(34);var O=Object(s.b)((function(t){return{contacts:t.contacts.contacts}}),(function(t){return{addContact:function(e,n){return t(j.addContact(e,n))}}}))((function(t){var e=t.contacts,n=t.addContact,r=Object(a.useState)(""),o=Object(l.a)(r,2),i=o[0],s=o[1],u=Object(a.useState)(""),b=Object(l.a)(u,2),d=b[0],j=b[1],O=function(t){switch(t.target.name){case"name":s(t.target.value);break;case"number":j(t.target.value);break;default:return}};return Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),i&&d&&!function(){var t=!1;return e.map((function(e){e.name.toLowerCase()===i.toLowerCase()&&(alert("".concat(e.name," is already in contacts.")),t=!0)})),t}()&&(n(i,d),s(""),j(""))},children:[Object(c.jsxs)("label",{children:["Name",Object(c.jsx)("input",{name:"name",type:"text",placeholder:"Enter name",value:i,onChange:O})]}),Object(c.jsxs)("label",{children:["Phone number",Object(c.jsx)("input",{name:"number",type:"number",placeholder:"Enter number",value:d,onChange:O})]}),Object(c.jsx)("button",{type:"submit",children:"Add contact"})]})})),f=n(19),h=n.n(f),m=Object(s.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(j.changeFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(c.jsxs)("label",{children:["Find contact by name",Object(c.jsx)("input",{className:h.a.Filter,name:"filter",type:"text",placeholder:"Enter to find",value:e,onChange:n})]})})),p=(n(35),Object(s.b)((function(t){return{contacts:t.contacts.contacts,filter:t.contacts.filter}}),(function(t){return{deleteContact:function(e){return t(j.deleteContact(e.target.id))}}}))((function(t){var e=t.contacts,n=t.filter,a=t.deleteContact;return Object(c.jsx)("ul",{children:e.map((function(t){return t.name.toLowerCase().includes(n.toLowerCase())&&Object(c.jsxs)("li",{children:[t.name,": ",t.number," ",Object(c.jsx)("button",{id:t.id,type:"button",onClick:a,children:"Delete"})]},t.id)}))})})));n(36);var g,x=function(){return Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("h2",{children:"Phonebook"}),Object(c.jsx)(O,{}),Object(c.jsx)("h2",{children:"Contacts"}),Object(c.jsxs)("div",{className:"contacts",children:[Object(c.jsx)(m,{}),Object(c.jsx)(p,{})]})]})},C=n(9),v=n(20),y=n.n(v),F=n(4),k=n(21),w=n.n(k),S=(n(39),n(10)),L=n(2),N=JSON.parse(localStorage.getItem("contacts")),E=N||[],P=Object(d.c)(E,(g={},Object(S.a)(g,j.addContact,(function(t,e){return[].concat(Object(C.a)(t),[e.payload])})),Object(S.a)(g,j.deleteContact,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),g)),D=Object(d.c)("",Object(S.a)({},j.changeFilter,(function(t,e){return e.payload}))),I=Object(L.combineReducers)({contacts:P,filter:D}),J={key:"contacts",storage:w.a,blacklist:["filter"]},T=[].concat(Object(C.a)(Object(d.d)({serializableCheck:{ignoredActions:[F.a,F.f,F.b,F.c,F.d,F.e]}})),[y.a]),_=Object(d.a)({reducer:{contacts:Object(F.g)(J,I)},middleware:T,devTools:!1}),A={store:_,persistor:Object(F.h)(_)},B=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(s.a,{store:A.store,children:Object(c.jsx)(u.a,{loading:null,persistor:A.persistor,children:Object(c.jsx)(x,{})})})}),document.getElementById("root")),B()}},[[40,1,2]]]);
//# sourceMappingURL=main.fda61ca4.chunk.js.map