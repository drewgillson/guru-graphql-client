(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,n,t){e.exports=t.p+"guru-graphql-client/static/media/logo.c35b2089.svg"},48:function(e,n,t){e.exports=t(84)},55:function(e,n,t){},76:function(e,n,t){},84:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),r=t(37),o=t.n(r),c=(t(53),t(55),t(14)),l=t(15),s=t(18),d=t(16),u=t(17),p=t(7),h=t(20),m=t(38),f=t.n(m),g=t(6),b=t(10);function v(){var e=Object(p.a)(["\n  border-bottom: 1px solid #e6ecf0;\n  padding: 15px 15px;\n"]);return v=function(){return e},e}function k(){var e=Object(p.a)(["\n  border-bottom: 1px solid #e6ecf0;\n  background-color: #F08080;\n  padding: 15px 15px;\n  font-size: 14px;\n  line-height: 20px;\n"]);return k=function(){return e},e}function x(){var e=Object(p.a)(["\n  border-bottom: 1px solid #e6ecf0;\n  background-color: #90EE90;\n  padding: 15px 15px;\n  font-size: 14px;\n  line-height: 20px;\n"]);return x=function(){return e},e}function E(){var e=Object(p.a)(["\n  border-bottom: 1px solid #e6ecf0;\n  padding: 15px 15px;\n  font-size: 14px;\n  line-height: 20px;\n"]);return E=function(){return e},e}var w=b.a.div(E()),j=b.a.div(x()),O=b.a.div(k()),y=b.a.div(v()),C=function(e){function n(e){var t,a=e.name;return Object(c.a)(this,n),(t=Object(s.a)(this,Object(d.a)(n).call(this))).name=a,t.handleClick=t.handleClick.bind(Object(g.a)(Object(g.a)(t))),t.handleChange=t.handleChange.bind(Object(g.a)(Object(g.a)(t))),t.state={textClicks:0},t}return Object(u.a)(n,e),Object(l.a)(n,[{key:"handleClick",value:function(){this.setState(function(e,n){return{textClicks:e.textClicks+1}}),this.state.textClicks>=2&&this.setState(function(e,n){return{textClicks:0}})}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"render",value:function(){var e=this.state.textClicks,n=i.a.createElement("span",{dangerouslySetInnerHTML:{__html:this.name.text.replace(/\b(access_filter|sql_always_where|required_access_grants|no-report-backend-errors|datagroup_trigger|\._in_query|system__activity|i__looker|_dialect\._name|\$\{TABLE\}\.column|persist_for|label|view_label|group_label|description|value_format|named_value_format|sql_trigger_value)/gi,'<span class="lookml">$1</span>').replace(/\b(1551|61616|22|443|587|9000|19999|9999)/gi,'<span class="port">$1</span>').replace(/\b(mysql_secure_installation|utf8mb4_general_ci|utf8mb4)/gi,'<span class="special">$1</span>')}}),t=i.a.createElement(y,null,i.a.createElement("textarea",{onChange:this.handleChange,value:this.state.value,cols:"90",rows:"3"}));return 0===e?i.a.createElement(w,{onClick:this.handleClick,key:this.name.index},n):1===e?i.a.createElement("div",null,i.a.createElement(j,{onClick:this.handleClick,key:this.name.index},i.a.createElement("span",{"aria-label":"yes",role:"img"},"\ud83d\udc4d"),n),t):2===e?i.a.createElement("div",null,i.a.createElement(O,{onClick:this.handleClick,key:this.name.index},i.a.createElement("span",{"aria-label":"no",role:"img"},"\ud83d\udc4e"),n),t):void 0}}]),n}(i.a.Component);function _(){var e=Object(p.a)(["\n  padding: 15px 15px;\n  float: right;\n  cursor: pointer;\n  color: #ddd;\n"]);return _=function(){return e},e}function z(){var e=Object(p.a)(["\n  border-bottom: 1px solid #e6ecf0;\n  padding: 15px 15px;\n  font-size: 16px;\n  font-weight: bold;\n"]);return z=function(){return e},e}function H(){var e=Object(p.a)(["\n  margin: auto;\n  width: 600px;\n  max-width: 100%;\n  text-align: left;\n  background-color: #ffffff;\n  border-radius: 2px;\n  box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.3);\n"]);return H=function(){return e},e}function q(){var e=Object(p.a)(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]);return q=function(){return e},e}var T=b.a.div(q()),A=b.a.div(H()),R=b.a.div(z()),B=b.a.div(_()),N=function(e){function n(e){var t,a=e.card;return Object(c.a)(this,n),(t=Object(s.a)(this,Object(d.a)(n).call(this))).card=a,t.state={isHidden:!0,isRemoved:!1},t.toggleHidden=t.toggleHidden.bind(Object(g.a)(Object(g.a)(t))),t.remove=t.remove.bind(Object(g.a)(Object(g.a)(t))),t}return Object(u.a)(n,e),Object(l.a)(n,[{key:"toggleHidden",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"remove",value:function(){this.setState({isRemoved:!0,isHidden:!0})}},{key:"render",value:function(){return this.state.isHidden?this.state.isRemoved?i.a.createElement(T,null):i.a.createElement(T,null,i.a.createElement(A,null,i.a.createElement(B,{onClick:this.remove,alt:"Remove"},"x"),i.a.createElement(R,{onClick:this.toggleHidden},i.a.createElement("input",{type:"checkbox",readOnly:!0,checked:!this.state.isHidden})," ",this.card.title))):i.a.createElement(T,null,i.a.createElement(A,null,i.a.createElement(R,{onClick:this.toggleHidden},i.a.createElement("input",{type:"checkbox",readOnly:!0,checked:!this.state.isHidden})," ",this.card.title),this.card.rows.map(function(e,n){return i.a.createElement(C,{key:n,name:e})})))}}]),n}(i.a.Component);function S(){var e=Object(p.a)(['\n  query UserQuery {\n    cards (id:["TkEzzk6c"\n              ,"TbXzz78c"\n              ,"ckEzzkki"\n              ,"c5KnnjRi"\n              ,"iqKnn74T"\n              ,"ioEzzokT"\n              ,"ikEzzkeT"\n              ,"cAB66Egi"\n              ,"TqKnnjnc"\n              ,"ceXzzbRi"\n              ,"T5KnzGqc"\n              ,"c8e5bg7i"\n              ,"iGB6RkXT"\n              ,"TXrjjBpc"]) {\n      title\n      rows {\n        rowId\n        text\n      }\n      statusCode\n    }\n  }\n']);return S=function(){return e},e}var L=f()(S()),$=Object(h.graphql)(L,{options:function(){return{variables:{},pollInterval:1e4}}})(function(e){var n=e.data,t=n.loading,a=n.error,r=n.cards;return t?i.a.createElement("p",null,"Loading ..."):a?i.a.createElement("p",null,a.message):i.a.createElement("div",null,r.map(function(e,n){return i.a.createElement(N,{key:n,card:e})}))}),I=t(46),K=t.n(I),W=(t(76),t(36)),X=t(47),U=t(91),G=new W.a({link:new X.a({uri:"https://lzng3ezrh7.execute-api.us-west-2.amazonaws.com/dev/graphql"}),cache:new U.a}),J=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return i.a.createElement(h.ApolloProvider,{client:G},i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"App-header"},i.a.createElement("img",{src:K.a,className:"App-logo",alt:"logo"}),i.a.createElement("h2",null,"Checklists for Best Practices")),i.a.createElement("div",{className:"App-User"},i.a.createElement($,null))))}}]),n}(a.Component),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(i.a.createElement(J,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");P?function(e){fetch(e).then(function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):F(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):F(e)})}}()}},[[48,2,1]]]);
//# sourceMappingURL=main.76b9cecf.chunk.js.map
