(this["webpackJsonpnastyagres-test-tatikoma"]=this["webpackJsonpnastyagres-test-tatikoma"]||[]).push([[0],{16:function(t,e,c){t.exports={root:"Button_root__2FxWv"}},2:function(t,e,c){t.exports={root:"Calculator_root__2vwkY",result:"Calculator_result__1RdMH",row:"Calculator_row__2s4Pp",flex1:"Calculator_flex1__6zFnU",flex3:"Calculator_flex3__O1Ol4",yellowButton:"Calculator_yellowButton__2QVw5",grayButton:"Calculator_grayButton__C_Zc5"}},28:function(t,e,c){},30:function(t,e,c){},31:function(t,e,c){"use strict";c.r(e);var n,a=c(0),r=c.n(a),i=c(9),l=c.n(i),o=c(5),s=(c(28),c(8)),u=c(6),j=c(4),b=c.n(j),d=c(7),O={history:[],error:void 0},h="CALCULATIONS_HISTORY",m=Object(d.b)({name:"counter",initialState:O,reducers:{push:function(t,e){var c;t.history.push(e.payload),null===(c=localStorage)||void 0===c||c.setItem(h,JSON.stringify(t.history))},getHistoryFromLs:function(t){var e,c=null===(e=localStorage)||void 0===e?void 0:e.getItem(h);if(c)try{t.history=JSON.parse(c)}catch(n){t.error=!0}}}}),f=m.actions,v=f.push,x=f.getHistoryFromLs,y=m.reducer;!function(t){t[t.DARK=0]="DARK",t[t.LIGHT=1]="LIGHT"}(n||(n={}));var C,k,p={theme:n.DARK},g=Object(d.b)({name:"counter",initialState:p,reducers:{toggle:function(t){t.theme=t.theme===n.DARK?n.LIGHT:n.DARK}}}),N=g.actions.toggle,_=g.reducer,w=c(14),S=c(17),B=c(16),A=c.n(B),I=c(1),L=function(t){var e=t.className,c=t.children,n=Object(S.a)(t,["className","children"]);return Object(I.jsx)("div",Object(w.a)(Object(w.a)({className:b()(A.a.root,e)},n),{},{children:c}))},F=Object(a.memo)(L),H=c(2),R=c.n(H);!function(t){t[t.plus=0]="plus",t[t.minus=1]="minus",t[t.divide=2]="divide",t[t.multiply=3]="multiply"}(k||(k={}));var T=(C={},Object(u.a)(C,k.multiply,"*"),Object(u.a)(C,k.minus,"-"),Object(u.a)(C,k.plus,"+"),Object(u.a)(C,k.divide,"/"),C),D=[7,8,9,4,5,6,1,2,3,0];var K=function(){var t=Object(a.useState)("0"),e=Object(s.a)(t,2),c=e[0],n=e[1],r=Object(a.useState)("0"),i=Object(s.a)(r,2),l=i[0],u=i[1],j=Object(a.useState)(),d=Object(s.a)(j,2),O=d[0],h=d[1],m=Object(a.useState)(!0),f=Object(s.a)(m,2),y=f[0],C=f[1],p=Object(a.useState)(!1),g=Object(s.a)(p,2),_=g[0],w=g[1],S=Object(o.b)(),B=Object(o.c)((function(t){return t.history})).history;Object(a.useEffect)((function(){S(x())}),[S]);var A=Object(a.useCallback)((function(t){y?("0"!==c&&u(c),n(t),C(!1)):n("".concat(c).concat(t))}),[c,y]),L=Object(a.useCallback)((function(){n("0"),u("0"),C(!0)}),[]),H=Object(a.useCallback)((function(t){if(void 0===O||!l)return!1;var e,a=Number(l),r=Number(c);switch(O){case void 0:break;case k.multiply:e=a*r;break;case k.divide:e=a/r;break;case k.plus:e=a+r;break;case k.minus:e=a-r}var i=String(e);n(i),S(v("".concat(a," ").concat(T[O]," ").concat(r," = ").concat(i)))}),[O,l,c,S,v]),K=Object(a.useCallback)((function(t){H(t),h(void 0)}),[H]),G=Object(a.useCallback)((function(){n(String(-Number(c)))}),[c]),J=Object(a.useCallback)((function(t){void 0!==O&&H(t),h(t),u(c),C(!0)}),[c,O,H]),P=Object(a.useCallback)((function(){S(N())}),[S]);return _?Object(I.jsx)("div",{className:"App",children:Object(I.jsx)("div",{className:R.a.root,children:Object(I.jsxs)("div",{children:[B.map((function(t){return Object(I.jsx)("div",{children:t},t)})),Object(I.jsx)(F,{onClick:function(){return w(!1)},children:"<"})]})})}):Object(I.jsx)("div",{className:"App",children:Object(I.jsxs)("div",{className:R.a.root,children:[Object(I.jsx)("div",{className:R.a.result,children:c}),Object(I.jsxs)("div",{className:R.a.row,children:[Object(I.jsxs)("div",{className:b()(R.a.row,R.a.flex3),children:[Object(I.jsx)(F,{className:R.a.grayButton,onClick:L,children:"Ac"}),Object(I.jsx)(F,{className:R.a.grayButton,onClick:G,children:"+/-"}),Object(I.jsx)(F,{className:R.a.grayButton,children:"%"}),D.map((function(t){return Object(I.jsx)(F,{onClick:function(){return A(t)},children:t})})),Object(I.jsx)(F,{onClick:function(){return w(!0)},children:"i"}),Object(I.jsx)(F,{onClick:function(){return A(".")},children:"."}),Object(I.jsx)(F,{onClick:P,children:"l/d"})]}),Object(I.jsxs)("div",{className:b()(R.a.flex1,R.a.row),children:[Object(I.jsx)(F,{className:R.a.yellowButton,onClick:function(){return J(k.divide)},children:"\xf7"}),Object(I.jsx)(F,{className:R.a.yellowButton,onClick:function(){return J(k.multiply)},children:"x"}),Object(I.jsx)(F,{className:R.a.yellowButton,onClick:function(){return J(k.minus)},children:"-"}),Object(I.jsx)(F,{className:R.a.yellowButton,onClick:function(){return J(k.plus)},children:"+"}),Object(I.jsx)(F,{className:R.a.yellowButton,onClick:K,children:"="})]})]})]})})},G=(c(30),function(){var t=Object(o.c)((function(t){return t.theme.theme}));return Object(I.jsx)("div",{className:b()({"theme-dark":t===n.DARK,"theme-light":t===n.LIGHT}),children:Object(I.jsx)(K,{})})}),J=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(e){var c=e.getCLS,n=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;c(t),n(t),a(t),r(t),i(t)}))},P=c(3),E=Object(P.c)({history:y,theme:_}),M=Object(d.a)({reducer:E});l.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(o.a,{store:M,children:Object(I.jsx)(G,{})})}),document.getElementById("root")),J()}},[[31,1,2]]]);
//# sourceMappingURL=main.918d9f39.chunk.js.map