(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,n,t){},58:function(e,n,t){e.exports=t(83)},63:function(e,n,t){},68:function(e,n,t){},69:function(e,n,t){},70:function(e,n,t){},71:function(e,n,t){},72:function(e,n,t){},73:function(e,n,t){},74:function(e,n,t){},75:function(e,n,t){},76:function(e,n,t){},79:function(e,n,t){},80:function(e,n,t){},81:function(e,n,t){},82:function(e,n,t){},83:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(40),i=(t(63),t(9)),o=(t(68),t(69),function(e){var n=e.className,t=e.children,a=e.onClick;return r.a.createElement("button",{className:"".concat(n||""," c-bare-button"),onClick:a},t)}),u=(t(46),function(){return r.a.createElement("svg",{viewBox:"0 0 24 24",className:"c-icon"},r.a.createElement("rect",{height:"2",width:"24",y:"5"}),r.a.createElement("rect",{height:"2",width:"24",y:"11"}),r.a.createElement("rect",{height:"2",width:"24",y:"17"}))}),s=function(){return r.a.createElement("svg",{className:"c-icon",viewBox:"0 0 24 24"},r.a.createElement("polygon",{points:"19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12"}))},l=(t(70),function(){return r.a.createElement("div",{className:"c-loading-spinner"},r.a.createElement("div",{className:"c-loading-spinner__dot"}),r.a.createElement("div",{className:"c-loading-spinner__dot"}),r.a.createElement("div",{className:"c-loading-spinner__dot"}),r.a.createElement("div",{className:"c-loading-spinner__dot"}))}),m=(t(71),function(e){var n=e.className,t=e.children;return r.a.createElement("span",{className:"".concat(n||""," c-text-heading-large")},t)}),d=(t(72),t(73),function(e){var n=e.className,t=e.children;return r.a.createElement("span",{className:"".concat(n||""," c-text-medium")},t)}),f=function(e){return"c-bottom-tabs__tab ".concat(e?" c-bottom-tabs__tab--selected":"")},b="SET_ALL_BASIC_SEASON_DATA_START";var E="SET_ALL_BASIC_SEASON_DATA_SUCCESS";var p="SET_CURRENT_SEASON_DATA_START";var O="SET_CURRENT_SEASON_DATA_SUCCESS";var v="INIT_APP";var g="OPEN_MENU";var _="CLOSE_MENU";var h="SELECT_SEASON";var j="GO_TO_FOOD_TAB";var S="GO_TO_RECIPES_TABS";var N,T=t(5),y=function(e){return e.allBasicSeasonData},C=Object(T.a)(y,function(e){return e.isLoading}),w=Object(T.a)(y,function(e){return e.data}),D=function(e){return e.currentSeasonData},A=Object(T.a)(D,function(e){return e.isLoading}),L=Object(T.a)(D,function(e){return e.data}),k=Object(T.a)(L,function(e){return e&&e.food}),x=Object(T.a)(L,function(e){return e&&e.recipes}),I=Object(T.a)(D,function(e){return e.currentSeasonIndex});!function(e){e[e.FOOD=0]="FOOD",e[e.RECIPES=1]="RECIPES"}(N||(N={}));var R=function(e){return e.ui},U=Object(T.a)(R,function(e){return e.isMenuOpen}),B=Object(T.a)(R,function(e){return e.currentTab}),F=Object(T.a)(B,function(e){return e===N.FOOD}),M=Object(T.a)(B,function(e){return e===N.RECIPES}),P=t(87),V=t(53),G=t(55),J=[],W=function(e){return function(e){return new Promise(function(n){var t=document.createElement("img");t.src=e,J.push(t),t.addEventListener("load",function(){n(t)})})}(e)},z=Object({NODE_ENV:"production",PUBLIC_URL:""}).BACKEND_URL||"https://6usraevcmc.execute-api.eu-west-2.amazonaws.com/prod",K=Object({NODE_ENV:"production",PUBLIC_URL:""}).SEASON_DATA_URL||"".concat(z,"/season-data"),$=t(27),q=t(84),H=t(85),Q=t(56),X=Object(P.a)(function(){return Object(Q.a)(null).pipe(Object($.a)(function(){return{type:v}}))},function(e){return e.pipe(Object(G.a)(v,h),Object($.a)(function(){return{type:p}}))},function(e,n){return e.pipe(Object(G.a)(p),Object(q.a)(n),Object($.a)(function(e){var n=Object(V.a)(e,2)[1];return I(n)}),Object(H.a)(function(e){return function(e){return fetch("".concat(K,"/").concat(e)).then(function(e){return e.json()})}(e)}),Object($.a)(function(e){return{currentSeasonData:e,type:O}}))},function(e){return e.pipe(Object(G.a)(v),Object($.a)(function(){return{type:b}}))},function(e){return e.pipe(Object(G.a)(b),Object(H.a)(function(){return fetch(K).then(function(e){return e.json()})}),Object($.a)(function(e){return function(e){return{seasonData:e,type:E}}(e)}))}),Y=t(19),Z=t(86),ee=t(7),ne=function(){return{currentSeasonIndex:(new Date).getUTCMonth(),data:void 0,isLoading:!0}};var te=function(){return{data:void 0,isLoading:!0}};var ae=function(){return{currentTab:N.FOOD,isMenuOpen:!1}};var re=Object(Z.a)(),ce=Object(Y.d)(Object(Y.c)({allBasicSeasonData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te(),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b:return Object(ee.a)({},e,{isLoading:!0});case E:return Object(ee.a)({},e,{data:n.seasonData,isLoading:!1});default:return e}},currentSeasonData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne(),n=arguments.length>1?arguments[1]:void 0;switch(n.type){case p:return Object(ee.a)({},e,{isLoading:!0});case O:return Object(ee.a)({},e,{data:n.currentSeasonData,isLoading:!1});case h:return Object(ee.a)({},e,{currentSeasonIndex:n.seasonIndex});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae();switch((arguments.length>1?arguments[1]:void 0).type){case h:case _:return Object(ee.a)({},e,{isMenuOpen:!1});case g:return Object(ee.a)({},e,{isMenuOpen:!0});case j:return Object(ee.a)({},e,{currentTab:N.FOOD});case S:return Object(ee.a)({},e,{currentTab:N.RECIPES});default:return e}}}),Object(Y.a)(re));re.run(X);var ie=Object(i.b)(function(e){return{isCurrentTabFood:F(e),isCurrentTabRecipes:M(e)}},function(e){return{goToFoodTab:function(){return e({type:j})},goToRecipesTab:function(){return e({type:S})}}})(function(e){var n=e.isCurrentTabFood,t=e.isCurrentTabRecipes,a=e.goToFoodTab,c=e.goToRecipesTab;return r.a.createElement("nav",{className:"c-bottom-tabs"},r.a.createElement(o,{className:f(n),onClick:a},"Food"),r.a.createElement(o,{className:f(t),onClick:c},"Recipes"))}),oe=(t(74),t(18)),ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.enterDelay,t=void 0===n?0:n,a=e.exitDelay,r=void 0===a?0:a,c=e.enterDuration,i=void 0===c?500:c,o=e.exitDuration,u=void 0===o?500:o,s=e.type,l=void 0===s?"div":s;return oe.b[l]({enter:{delay:t,opacity:1,transition:{duration:i}},exit:{delay:r,opacity:0,transition:{duration:u}}})},se=ue(),le=Object(i.b)(function(e){return{allBasicSeasonData:w(e),currentSeasonIndex:I(e),isLoading:C(e),isMenuOpen:U(e)}},function(e){return{onClose:function(){return e({type:_})},onSeasonSelected:function(n){return e(function(e){return{seasonIndex:e,type:h}}(n))}}})(function(e){var n=e.allBasicSeasonData,t=e.currentSeasonIndex,a=e.isLoading,c=e.isMenuOpen,i=e.onSeasonSelected,u=e.onClose;return r.a.createElement("div",null,r.a.createElement(oe.a,null,c&&r.a.createElement(se,{key:"season-menu-overlay",className:"c-season-menu__overlay",onClick:u})),r.a.createElement("nav",{className:"c-season-menu ".concat(c?"c-season-menu--is-open":"")},a?r.a.createElement("div",{className:"c-season-menu__loading-spinner-wrapper"},r.a.createElement(l,null)):n&&n.map(function(e,n){var a=e.name;return r.a.createElement(o,{key:a,className:"c-season-menu__button ".concat(n===t?"c-season-menu__button--selected":""),onClick:function(){return i(n)}},r.a.createElement(d,null,a))}),r.a.createElement(o,{className:"c-season-menu__close-btn",onClick:u},r.a.createElement(s,null))))}),me=(t(75),Object(i.b)(function(){return{}},function(e){return{onMenuOpen:function(){return e({type:g})}}})(function(e){var n=e.onMenuOpen;return r.a.createElement("header",{className:"c-header"},r.a.createElement(o,{className:"c-header__btn",onClick:n},r.a.createElement(u,null)),r.a.createElement("h1",{className:"c-header__text"},r.a.createElement(m,null,"Eat Seasonal")))})),de=(t(76),t(43)),fe=t.n(de),be=t(49),Ee=t(50),pe=t(51),Oe=t(54),ve=t(52),ge=t(57),_e=(t(79),ue()),he=function(e){function n(e){var t;return Object(Ee.a)(this,n),(t=Object(Oe.a)(this,Object(ve.a)(n).call(this,e))).state={isVisible:!1},t}return Object(ge.a)(n,e),Object(pe.a)(n,[{key:"componentDidMount",value:function(){var e=Object(be.a)(fe.a.mark(function e(){return fe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,W(this.props.src);case 2:this.setState({isVisible:!0});case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(oe.a,null,this.state.isVisible?r.a.createElement(_e,{key:"background-image-fade-in-out",className:"c-background-image-with-loading-spinner",style:{backgroundImage:"url(".concat(this.props.src,")")}},this.props.children):r.a.createElement(_e,{key:"loading-spinner-fade-in-out",className:"c-background-image-with-loading-spinner"},r.a.createElement(l,null)))}}]),n}(a.Component),je=(t(80),function(e){var n=e.imageUrlSmall,t=e.name;return r.a.createElement("div",{className:"c-image-grid-item"},r.a.createElement("div",{className:"c-image-grid-item__inner"},r.a.createElement("div",{className:"c-image-grid-item__image"},r.a.createElement(he,{src:n})),r.a.createElement(d,{className:"c-image-grid-item__text"},t)))}),Se=(t(81),function(e){var n=e.data;return r.a.createElement("div",{className:"c-image-grid"},n&&n.map(function(e){return r.a.createElement(je,{key:e.name,imageUrlSmall:e.imageUrlSmall,name:e.name})}))}),Ne=Object(i.b)(function(e){return{isCurrentTabFood:F(e),isLoading:A(e),food:k(e),recipes:x(e)}})(function(e){var n=e.isCurrentTabFood,t=e.isLoading,a=e.food,c=e.recipes;return t?r.a.createElement("div",{className:"c-food-table__loading-spinner-wrapper"},r.a.createElement(l,null)):n?r.a.createElement(Se,{data:a}):r.a.createElement(Se,{data:c})}),Te=function(){return r.a.createElement(Ne,null)},ye=(t(82),function(){return r.a.createElement(i.a,{store:ce},r.a.createElement("div",{className:"c-app"},r.a.createElement(me,null),r.a.createElement(le,null),r.a.createElement(Te,null),r.a.createElement(ie,null)))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=document.getElementById("root");Ce&&Ce.hasChildNodes()?Object(c.hydrate)(r.a.createElement(ye,null),Ce):Object(c.render)(r.a.createElement(ye,null),Ce),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[58,1,2]]]);
//# sourceMappingURL=main.5257a927.chunk.js.map