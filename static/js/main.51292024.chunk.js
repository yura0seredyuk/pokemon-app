(this["webpackJsonppokemon-app"]=this["webpackJsonppokemon-app"]||[]).push([[0],{18:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),r=n.n(s),i=(n(18),n(2)),o=n.n(i),l=n(3),u=n(5),d=n(9),j=n.n(d),m=(n(31),{normal:"#A8A77A",fire:"#EE8130",water:"#6390F0",electric:"#F7D02C",grass:"#7AC74C",ice:"#96D9D6",fighting:"#C22E28",poison:"#A33EA1",ground:"#E2BF65",flying:"#A98FF3",psychic:"#F95587",bug:"#A6B91A",rock:"#B6A136",ghost:"#735797",dragon:"#6F35FC",dark:"#705746",steel:"#B7B7CE",fairy:"#D685AD"}),p=n(0);function b(e){var t=e.pokemon,n=e.selectPokemon,a=e.openModal;return Object(p.jsxs)("div",{className:"card",onClick:function(){n(t.id),a()},children:[Object(p.jsx)("div",{className:"card__image__container",children:Object(p.jsx)("img",{className:"card__image",src:"https://pokeres.bastionbot.org/images/pokemon/".concat(t.id,".png"),alt:t.name})}),Object(p.jsx)("div",{className:"card__name__container",children:Object(p.jsx)("span",{className:"card__name",children:"".concat(t.name," #").concat(t.id.toString().padStart(3,"0"))})}),Object(p.jsx)("div",{className:"card__types",children:t.types.map((function(e){return Object(p.jsx)("div",{className:"card__type",style:{backgroundColor:m[e.type.name]},children:e.type.name},e.slot)}))})]})}n(33);function h(e){var t=e.pokemon,n=e.closeModal;return Object(p.jsxs)("div",{className:"details__container",onClick:n,children:[Object(p.jsx)("div",{className:"details__height__container",children:Object(p.jsxs)("span",{className:"details__height",children:[Object(p.jsx)("div",{children:"Height:"}),Object(p.jsx)("div",{children:"".concat(t.height/10," m")})]})}),Object(p.jsx)("div",{className:"details__weight__container",children:Object(p.jsxs)("span",{className:"details__weight",children:[Object(p.jsx)("div",{children:"Weight:"}),Object(p.jsx)("div",{children:"".concat(t.weight/100," kg")})]})}),Object(p.jsx)("div",{className:"details__image__container",children:Object(p.jsx)("img",{src:"https://pokeres.bastionbot.org/images/pokemon/".concat(t.id,".png"),alt:t.name,className:"details__image"})}),Object(p.jsx)("div",{className:"details__name",children:"".concat(t.name," #").concat(t.id.toString().padStart(3,"0"))}),Object(p.jsx)("div",{className:"details__types",children:t.types.map((function(e){return Object(p.jsx)("div",{className:"details__type",style:{backgroundColor:m[e.type.name]},children:e.type.name},e.slot)}))}),Object(p.jsx)("div",{className:"details__stats",children:t.stats.map((function(e){return Object(p.jsxs)("div",{className:"details__stat__container",children:[Object(p.jsx)("div",{className:"details__stat-name",children:e.stat.name}),Object(p.jsxs)("div",{className:"details__base-stat",children:[Object(p.jsx)("progress",{max:"150",id:"progressBar",value:e.base_stat,children:e.base_stat}),Object(p.jsx)("span",{className:"details__base-stat__value",children:e.base_stat})]})]},e.stat.name)}))}),Object(p.jsx)("div",{className:"details__moves",children:"Total moves: ".concat(t.moves.length)})]})}function _(e){return f.apply(this,arguments)}function f(){return(f=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(e){n(e)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return O.apply(this,arguments)}function O(){return(O=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){fetch(t).then((function(e){return e.json()})).then((function(t){e(t)})).catch((function(e){n(e)}))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=n(37),g={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",background:"#EFEFBB"}};n(34);j.a.setAppElement("#root");var k=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(u.a)(s,2),i=r[0],d=r[1],m=Object(a.useState)(""),f=Object(u.a)(m,2),O=f[0],k=f[1],N=Object(a.useState)(!0),y=Object(u.a)(N,2),w=y[0],C=y[1],A=Object(a.useState)([]),E=Object(u.a)(A,2),F=E[0],S=E[1],B="https://pokeapi.co/api/v2/pokemon/?limit=12",M=Object(a.useState)(!1),P=Object(u.a)(M,2),D=P[0],J=P[1];function L(){J(!0)}function R(){J(!1)}Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(B);case 2:return t=e.sent,d(t.next),k(t.previous),e.next=7,T(t.results);case 7:C(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var T=function(){var e=Object(l.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map(function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t.url);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:n=e.sent,c(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,_(i);case 3:return t=e.sent,e.next=6,T(t.results);case 6:d(t.next),k(t.previous),C(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O){e.next=2;break}return e.abrupt("return");case 2:return C(!0),e.next=5,_(O);case 5:return t=e.sent,e.next=8,T(t.results);case 8:d(t.next),k(t.previous),C(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(e){S(n.filter((function(t){return t.id===e})))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("header",{className:"header",children:"Pokedex"}),w?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"loader__container",children:Object(p.jsx)("div",{className:"loader"})})}):Object(p.jsxs)("div",{className:"main",children:[Object(p.jsx)("div",{className:"main__container",children:n.map((function(e){return Object(p.jsx)(b,{pokemon:e,openModal:L,selectPokemon:I},e.id)}))}),Object(p.jsx)("div",{className:"main__button__container",children:Object(p.jsx)("button",{className:"main__button main__next__button",onClick:q,children:"Load more"})}),O&&Object(p.jsx)("button",{className:"main__button main__prev__button",onClick:H,children:"<"}),Object(p.jsx)(v.a,{timeout:300,classNames:"main__dialog",children:Object(p.jsx)(j.a,{isOpen:D,onRequestClose:R,style:g,contentLabel:"Example Modal",closeTimeoutMS:500,children:Object(p.jsx)("div",{children:F.map((function(e){return Object(p.jsx)(h,{pokemon:e,closeModal:R},e.id)}))})})}),Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("div",{className:"footer__content",children:"\xa9 Pokedex"})})]})]})};r.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.51292024.chunk.js.map