(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(64)},42:function(e,t,n){},43:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},44:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(24),i=n.n(r),c=n(3),s=n(8),l=n(28),u=n.n(l),d="TODOS_DATA_REQUEST",g="TODOS_DATA_SUCCESS",f="TODOS_DATA_FAILURE",h=Object(c.c)({dataReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object.assign({},e,{isLoading:!0,todosData:null});case g:return Object.assign({},e,{isLoading:!1,todosData:t.data});case f:return Object.assign({},e,{isLoading:!1,todosData:null});default:return{todosData:null,isLoading:!1}}}});var m=n(31),p=(n(42),n(6)),v=n(7),w=n(10),b=n(9),y=(n(43),n(44),n(14)),E={1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday",0:"Sunday"},O=function(e){Object(w.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this)).state={daysRecords:0},a}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.props.getTotdosData()}},{key:"renderErrorScreen",value:function(){return o.a.createElement("h2",null,"Oops, There might be error or in fetching the temprature records. Fetching data from resource  !!!!!! ")}},{key:"renderGroupedDays",value:function(e){return Object.keys(e).map(function(t){var n=new Date(e[t][0].dt_txt),a=n.getDay(),r=n.getDate();return o.a.createElement("div",{className:"col-md-2"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-header"},o.a.createElement("h2",null,r),o.a.createElement("h5",null,E[a])),e[t].map(function(e){return o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},"".concat(new Date(e.dt_txt).getHours()," : ").concat(new Date(e.dt_txt).getMinutes())," "),o.a.createElement("div",{className:"col-md-6"},Math.round(e.main.temp-252),"\xb0 C")))})))})}},{key:"doFilterDate",value:function(){var e={};return this.props.todosData&&Array.isArray(this.props.todosData.list)&&this.props.todosData.list.length>0&&this.props.todosData.list.forEach(function(t){var n=new Date(t.dt_txt).getDate();e[n]?e[n].push(t):e[n]=[t]}),Object.keys(e).length>0?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"jumbotron jumbotron-fluid"},o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,Object.keys(e).length," Days Forecast"))),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},this.renderGroupedDays(e)))):this.renderErrorScreen()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,this.doFilterDate())}}]),n}(a.Component),D=n(13),j=n.n(D),S=n(29),k="https://api.openweathermap.org/data/2.5/forecast?id=2768279&appid=47de14068d893dfa372d4ed60b16a254",T=n(30),_=n.n(T);function I(e){return{type:f,data:e}}var N=Object(s.b)(function(e){return Object(y.a)(Object(y.a)({},e),{},{todosData:e.dataReducer.todosData})},function(e){return{simpleAction:function(){return e(function(e){e({type:"SIMPLE_ACTION",payload:"result_of_simple_action"})})},getTotdosData:function(){return e(function(){var e=Object(S.a)(j.a.mark(function e(t,n){var a,o;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:d}),e.prev=1,e.next=4,_.a.get(k);case 4:a=e.sent,o=a.data,t({type:g,data:o}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t(I(e.t0));case 12:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t,n){return e.apply(this,arguments)}}())}}})(O),A="609742289433-45uq942q6u8vmeh8ce069pqomgjieubo.apps.googleusercontent.com",C=function(e){Object(w.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(p.a)(this,n),(a=t.call(this,e)).doGoogleSigIn=function(){try{window.gapi.load("auth2",function(){window.gapi.auth2.getAuthInstance()?a.setState({isSignedIn:!0}):window.gapi.auth2.init({client_id:A}).then(function(e,t){e&&e.currentUser?a.setState({isSignedIn:!0}):a.setState({isSignedIn:!1})}).catch(function(e){console.log(e),a.setState({isSignedIn:!1})})})}catch(e){a.setState({isSignedIn:!1}),console.log(e)}},a.state={isSignedIn:!1},a}return Object(v.a)(n,[{key:"getContent",value:function(){var e=this;return this.state.isSignedIn?o.a.createElement(N,null):o.a.createElement("div",null,o.a.createElement("p",null,"You are not signed in. Click here to sign in."),o.a.createElement("button",{id:"loginButton",onClick:function(){e.doGoogleSigIn()}},"Login with Google"))}},{key:"render",value:function(){return o.a.createElement("div",null,this.getContent())}}]),n}(a.Component),x=(n(63),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function L(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var F=Object(m.a)();Object(c.d)(h,Object(c.a)(F)),i.a.render(o.a.createElement(s.a,{store:function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0],Object(c.d)(h,Object(c.a)(u.a))}()},o.a.createElement(C,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");x?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):L(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):L(e)})}}()}},[[32,1,2]]]);
//# sourceMappingURL=main.c2b4cc79.chunk.js.map