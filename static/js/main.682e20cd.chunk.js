(this.webpackJsonptranscriber=this.webpackJsonptranscriber||[]).push([[0],{43:function(e,t,n){e.exports=n.p+"static/media/logo.c35b2089.svg"},46:function(e,t,n){e.exports=n(71)},52:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(37),i=n.n(o),c=(n(51),n(52),n(11)),l=n(12),s=n(15),u=n(13),d=n(16),p=n(10),m=n(8),h=n(18),b=n(38),g=n.n(b),v=n(9),f=n(7),w=n.n(f);function E(){var e=Object(m.a)(["\n  border-bottom: 1px solid #e6ecf0;\n  padding: 15px 15px;\n"]);return E=function(){return e},e}function k(){var e=Object(m.a)(["\n  border-bottom: 1px solid #e6ecf0;\n  background-color: #EEE;\n  padding: 15px 15px;\n  font-size: 14px;\n  line-height: 20px;\n  text-decoration: line-through;\n"]);return k=function(){return e},e}function x(){var e=Object(m.a)(["\n  border-radius: 25px;\n  background-color: #9FFF00;\n  padding: 3px;\n"]);return x=function(){return e},e}function j(){var e=Object(m.a)(["\n  border-radius: 25px;\n  background-color: #E5FF00;\n  padding: 3px;\n"]);return j=function(){return e},e}function O(){var e=Object(m.a)(["\n  border-radius: 25px;\n  background-color: #FFD300;\n  padding: 3px;\n"]);return O=function(){return e},e}function y(){var e=Object(m.a)(["\n  border-radius: 25px;\n  background-color: #FF8C00;\n  padding: 3px;\n"]);return y=function(){return e},e}function S(){var e=Object(m.a)(["\n  border-radius: 25px;\n  background-color: #FF4600;\n  padding: 3px;\n"]);return S=function(){return e},e}function C(){var e=Object(m.a)(["\n  border-bottom: 1px solid #e6ecf0;\n  padding: 15px 15px;\n  font-size: 14px;\n  line-height: 20px;\n"]);return C=function(){return e},e}var A=v.a.div(C()),T=v.a.span(S()),F=v.a.span(y()),G=v.a.span(O()),_=v.a.span(j()),z=v.a.span(x()),H=v.a.div(k()),M=v.a.div(E()),P=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).idx=n.props.idx,n.name=n.props.name,n.card=n.props.card,n.updateScore=n.props.updateScore,n.handleClick=n.handleClick.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.state={clicks:w.a.get(n.name.text+"_clicks")||0,value:w.a.get(n.name.text+"_notes")||"",score:n.props.score},window.jsonForGoogleApps.cards[n.card]||(window.jsonForGoogleApps.cards[n.card]={rows:{}}),null!==w.a.get(n.name.text+"_clicks")&&(window.jsonForGoogleApps.cards[n.card].rows[n.name.text]={notes:w.a.get(n.name.text+"_notes"),score:w.a.get(n.name.text+"_clicks")-1}),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){var t=this.state.clicks,n=e.target;for(var a in n.getAttribute("data-text")||(n=e.target.parentElement),window.jsonForGoogleApps.cards)if(window.jsonForGoogleApps.cards.hasOwnProperty(a)&&a===this.card){var r=!0,o="";window.jsonForGoogleApps.cards[a].rows[n.getAttribute("data-text")]&&(o=window.jsonForGoogleApps.cards[a].rows[n.getAttribute("data-text")].notes),window.jsonForGoogleApps.cards[a].rows[n.getAttribute("data-text")]={notes:o,score:t},t>5&&(delete window.jsonForGoogleApps.cards[a].rows[n.getAttribute("data-text")],w.a.remove(this.name.text+"_clicks"));break}if(!r){var i={};i[n.getAttribute("data-text")]={notes:"",score:t},window.jsonForGoogleApps.cards[this.card]={rows:i}}if(this.setState((function(e,n){return{clicks:t}})),t>=6){this.props.updateScore(0,this.idx),this.setState((function(e,t){return{clicks:0}})),w.a.set(this.name.text+"_clicks",0)}else t>=1&&t<=4&&this.props.updateScore(t,this.idx);t=this.state.clicks+1,w.a.set(this.name.text+"_clicks",t)}},{key:"handleChange",value:function(e){this.setState({value:e.target.value}),w.a.set(this.name.text+"_notes",e.target.value);var t=e.target.parentElement.previousElementSibling;for(var n in window.jsonForGoogleApps.cards)if(window.jsonForGoogleApps.cards.hasOwnProperty(n)&&n===this.card){window.jsonForGoogleApps.cards[n].rows[t.getAttribute("data-text")].notes=e.target.value;break}}},{key:"render",value:function(){var e=this.state.clicks,t="",n="",a=r.a.createElement("span",{dangerouslySetInnerHTML:{__html:this.name.text.replace(/\[([^\]]+)\]\(([^)]+)\)/gi,'<a target="_blank" href="$2">$1</a>')}});switch(e){case 1:t=r.a.createElement(T,null,r.a.createElement("span",{"aria-label":"yes",role:"img"},"\xa00\ufe0f\u20e3"));break;case 2:t=r.a.createElement(F,null,r.a.createElement("span",{"aria-label":"no",role:"img"},"\xa01\ufe0f\u20e3"));break;case 3:t=r.a.createElement(G,null,r.a.createElement("span",{"aria-label":"no",role:"img"},"\xa02\ufe0f\u20e3"));break;case 4:t=r.a.createElement(_,null,r.a.createElement("span",{"aria-label":"no",role:"img"},"\xa03\ufe0f\u20e3"));break;case 5:t=r.a.createElement(z,null,r.a.createElement("span",{"aria-label":"no",role:"img"},"\xa04\ufe0f\u20e3"))}return e>=1&&(n=r.a.createElement(M,null,r.a.createElement("textarea",{onChange:this.handleChange,value:this.state.value,cols:"78",rows:"3"}))),e<=5?r.a.createElement("div",null,r.a.createElement(A,{"data-text":this.name.text,onClick:this.handleClick,key:this.name.index},t," ",a),n):r.a.createElement("div",null,r.a.createElement(H,{"data-text":this.name.text,onClick:this.handleClick,key:this.name.index},a),n)}}]),t}(r.a.Component);function N(){var e=Object(m.a)(["\n  font-size: 12px;\n  color: #bbb;\n  padding-left: 10px;\n"]);return N=function(){return e},e}function D(){var e=Object(m.a)(["\n  float: right;\n  font-weight: normal;\n"]);return D=function(){return e},e}function L(){var e=Object(m.a)(["\n  padding: 15px 15px;\n  float: right;\n  cursor: pointer;\n  color: #ddd;\n"]);return L=function(){return e},e}function I(){var e=Object(m.a)(["\n  border-bottom: 1px solid #e6ecf0;\n  padding: 15px 15px;\n  font-size: 16px;\n  font-weight: bold;\n"]);return I=function(){return e},e}function R(){var e=Object(m.a)(["\n  margin: auto;\n  width: 600px;\n  max-width: 100%;\n  text-align: left;\n  background-color: #ffffff;\n  border-radius: 2px;\n  box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.3);\n"]);return R=function(){return e},e}function q(){var e=Object(m.a)(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n"]);return q=function(){return e},e}var K=v.a.div(q()),B=v.a.div(R()),X=v.a.div(I()),U=v.a.div(L()),J=v.a.div(D()),V=v.a.span(N()),W=function(e){function t(e){var n,a=e.card;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this))).card=a,n.state={isHidden:null==w.a.get(n.card.title+"_isHidden")||w.a.get(n.card.title+"_isHidden"),isRemoved:!1,rowScores:w.a.get(n.card.title+"_rowScores")||{},totalScore:w.a.get(n.card.title+"_totalScores")||0},n.toggleHidden=n.toggleHidden.bind(Object(p.a)(n)),n.remove=n.remove.bind(Object(p.a)(n)),n.addScores=n.addScores.bind(Object(p.a)(n)),n.updateScore=n.updateScore.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"toggleHidden",value:function(){var e=!this.state.isHidden;this.setState({isHidden:e}),w.a.set(this.card.title+"_isHidden",e)}},{key:"remove",value:function(){this.setState({isRemoved:!0,isHidden:!0})}},{key:"addScores",value:function(e,t){return Number(e)+Number(t)}},{key:"componentDidMount",value:function(){this.setState({totalScore:w.a.get(this.card.title+"_totalScore")})}},{key:"updateScore",value:function(e,t){var n=Object.assign({},this.state.rowScores);n[t]=e;var a=Object.values(n).reduce(this.addScores,0);this.setState({rowScores:n,totalScore:a}),w.a.set(this.card.title+"_rowScores",n),w.a.set(this.card.title+"_totalScore",a)}},{key:"render",value:function(){var e=this,t=this.card.title,n=Math.round(this.state.totalScore/(4*this.card.rows.length)*100);return this.state.isHidden?this.state.isRemoved?r.a.createElement(K,null):r.a.createElement(K,null,r.a.createElement(B,null,r.a.createElement(U,{onClick:this.remove,alt:"Remove"},"x"),r.a.createElement(X,{onClick:this.toggleHidden},r.a.createElement("input",{type:"checkbox",readOnly:!0,checked:!this.state.isHidden})," ",t))):r.a.createElement(K,null,r.a.createElement(B,null,r.a.createElement(X,{onClick:this.toggleHidden},r.a.createElement("input",{type:"checkbox",readOnly:!0,checked:!this.state.isHidden})," ",t," ",r.a.createElement(J,null,n,"% ",r.a.createElement(V,null,"(",this.state.totalScore,"/",4*this.card.rows.length,")"))),this.card.rows.map((function(n,a){return r.a.createElement(P,{key:a,card:t,name:n,score:e.state.rowScores[a],idx:a,updateScore:e.updateScore})}))))}}]),t}(r.a.Component);function Z(){var e=Object(m.a)(['\n  query UserQuery {\n    cards (id:["iqKnn74T" # Application Servers (On-Premise)\n              ,"ioEzzokT" # Application Database (On-Premise)\n              ,"cAB66Egi" # Monitoring\n\n              ,"ceXzzbRi" # Development Process & Environment\n              ,"TLKg5Gbc" # LookML Views\n              ,"c8e5bg7i" # LookML Explores\n              ,"iGB6RkXT" # LookML Models\n              ,"T5KnzGqc" # LookML Projects\n              ,"ikEzzkeT" # Performance\n              ,"ckEzzkki" # Security\n              ,"TkEzzk6c" # Database Connections\n              ,"TbXzz78c" # Data Pipeline\n\n              ,"c5KnnjRi" # User Enablement\n              ,"TqKnnjnc" # Release Management\n              ,"TXrjjBpc" # Content Management\n\n              ,"inEpreBT" # Customer Success Top 10\n              ]) {\n      title\n      rows {\n        rowId\n        text\n      }\n      statusCode\n    }\n  }\n']);return Z=function(){return e},e}function Y(){var e=Object(m.a)(["\n  font-size: 11px;\n"]);return Y=function(){return e},e}var $=v.a.span(Y()),Q=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={reviewType:null==w.a.get("reviewType")?"lookml":w.a.get("reviewType")},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({reviewType:e.target.value}),w.a.set("reviewType",e.target.value),this.forceUpdate()}},{key:"render",value:function(){var e=this;return r.a.createElement(h.b,{query:ee},(function(t){var n=t.loading,a=t.error,o=t.data;if(n)return r.a.createElement("div",null,r.a.createElement("p",null,"\xa0"),r.a.createElement("p",null,"Loading cards from Guru..."),r.a.createElement("p",null,"\xa0"));if(a)return r.a.createElement("p",null,a.message);var i=o.cards,c=[];switch(e.state.reviewType){case"cs":c=["Top 10 Behaviors and Characteristics of Successful Customers"];break;case"lookml":c=["Development Process & Environment","Views","Explores","Models","Projects","Performance","Security","Database Connections","Data Pipeline"];break;case"architecture":c=["Application Servers (On-Premise)","Application Database (On-Premise)","Monitoring"];break;case"dataculture":c=["User Enablement","Content Management","Release Management"]}return i=i.filter((function(e,t,n){return-1!==c.indexOf(e.title)})),r.a.createElement("div",null,r.a.createElement("p",null,"\xa0"),r.a.createElement("label",{htmlFor:"reviewType"},"Section:"),r.a.createElement("select",{id:"reviewType",value:e.state.reviewType,onChange:e.handleChange},r.a.createElement("option",{value:"cs"},"Customer Success"),r.a.createElement("option",{value:"lookml"},"LookML"),r.a.createElement("option",{value:"architecture"},"On-Premise Architecture"),r.a.createElement("option",{value:"dataculture"},"Data Culture"))," ",r.a.createElement($,null,"Tip: remove cards you\u2019re not interested in by clicking the X"),r.a.createElement("p",null,"\xa0"),r.a.createElement("div",null,i.map((function(e,t){return r.a.createElement(W,{key:e.title,card:e})}))),r.a.createElement("p",null,"\xa0"))}))}}]),t}(r.a.Component),ee=g()(Z()),te=Object(h.c)(ee,{options:function(){return{variables:{},pollInterval:1e6}}})(Q);function ne(){var e=Object(m.a)(["\n  padding-left: 100px;\n"]);return ne=function(){return e},e}var ae=v.a.span(ne()),re=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).save=e.save.bind(Object(p.a)(e)),e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"clear",value:function(){window.confirm("Are you sure you want to start over?")&&(localStorage.clear(),window.location.reload())}},{key:"dispatchChange",value:function(e,t){e.value=e.options[t].value,e.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}},{key:"save",value:function(){for(var e=window.document.getElementById("reviewType"),t=0;t<e.options.length;t++)window.setTimeout(this.dispatchChange.bind(null,e,t),100*t);window.setTimeout((function(){console.log(JSON.stringify(window.jsonForGoogleApps)),window.jsonForGoogleApps.customer=prompt("Who is the customer?");fetch("https://script.google.com/a/looker.com/macros/s/AKfycbzAAHv7EHgJRbZ5f8IqnK3IPqWDlnuUZWZTC-zIfw/exec",{mode:"no-cors",headers:{"Access-Control-Allow-Origin":"*"},method:"post",body:JSON.stringify(window.jsonForGoogleApps)}).then((function(e){console.log(e),window.confirm("All done, check the Transcriber Output folder. Do you want to clear?")&&(localStorage.clear(),window.location.reload())}))}),100*e.options.length)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{type:"button",onClick:this.save,value:"Save to Google Doc"}),"\xa0\xa0",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://drive.google.com/drive/u/0/folders/1VXtp98I-A8MFdo-wN3iHnYOPYtqh8lTI"},"Transcriber Output"),r.a.createElement(ae,null,r.a.createElement("input",{type:"button",onClick:this.clear,value:"Clear"})),r.a.createElement("p",null,"\xa0"))}}]),t}(r.a.Component),oe=n(43),ie=n.n(oe),ce=(n(70),n(19)),le=n(44),se=n(45),ue=new ce.a({link:new le.a({uri:"https://yu3gypcoyi.execute-api.us-west-2.amazonaws.com/dev/graphql"}),cache:new se.a}),de=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,{client:ue},r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App-header"},r.a.createElement("img",{src:ie.a,className:"App-logo",alt:"logo"}),r.a.createElement("h2",null,r.a.createElement("div",{className:"tooltip"},"Transcriber",r.a.createElement("span",{className:"tooltiptext"},"Transcriber ",r.a.createElement("span",{className:"underline"},"r"),"eproduces ",r.a.createElement("span",{className:"underline"},"a"),"nalytical, ",r.a.createElement("span",{className:"underline"},"n"),"eat, similarly-comprehensive reviews, incorporating #bestpractices every rendition")),"\xa0helps you conduct different types of reviews and audits",r.a.createElement("br",null),"and is powered by content from this ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://app.getguru.com/boards/yiKXnGpi/Transcriber"},"Guru board"),"\xa0\xa0\xa0",r.a.createElement("span",{className:"version"},"v0.1.2"))),r.a.createElement("div",{className:"App-User"},r.a.createElement(te,null)),r.a.createElement(re,null)))}}]),t}(a.Component);window.jsonForGoogleApps={customer:"",cards:{}},i.a.render(r.a.createElement(de,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.682e20cd.chunk.js.map