(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,n,t){"use strict";var a=t(127),c=t(128),o=t(136),r=t(129),i=t(137),s=t(0),l=t.n(s),u=(t(147),[]),m=function(e){return function(e){return new Promise(function(n){var t=document.createElement("img");t.src=e,u.push(t),t.addEventListener("load",function(){n(t)})})}(e)},d=t(73),f=t(66),b=Object(d.a)(),p=function(e){function n(e){var t;return Object(a.a)(this,n),(t=Object(o.a)(this,Object(r.a)(n).call(this,e))).loadImagePromise=null,t.state={isVisible:!1},t}return Object(i.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.loadImagePromise=Object(d.b)(m(this.props.src)),this.loadImagePromise.promise.then(function(){e.setState({isVisible:!0})},function(){})}},{key:"componentWillUnmount",value:function(){this.loadImagePromise&&this.loadImagePromise.cancel()}},{key:"getBackgroundImageStyle",value:function(){return{backgroundImage:"url(".concat(this.props.src,")")}}},{key:"render",value:function(){return this.props.skipAnimation?l.a.createElement("div",{className:"c-background-image-with-loading-spinner",style:this.getBackgroundImageStyle()}):l.a.createElement(f.a,null,this.state.isVisible?l.a.createElement(b,{key:"background-image-fade-in-out",className:"c-background-image-with-loading-spinner",style:this.getBackgroundImageStyle()},this.props.children):l.a.createElement(b,{key:"loading-spinner-fade-in-out",className:"c-background-image-with-loading-spinner"},l.a.createElement(N,null)))}}]),n}(s.Component),E=(t(148),function(e){var n=e.className,t=e.children,a=e.onClick;return l.a.createElement("button",{className:"".concat(n||""," c-bare-button"),onClick:a},t)}),g=(t(149),function(e){var n=e.className,t=e.children,a=e.onClick;return l.a.createElement("button",{className:"".concat(n||""," c-primary-button"),onClick:a},t)}),h=(t(75),function(){return l.a.createElement("svg",{className:"c-icon",viewBox:"0 0 24 24"},l.a.createElement("g",{strokeLinecap:"round",strokeWidth:"2",stroke:"#000"},l.a.createElement("line",{x1:"1",y1:"11",x2:"6",y2:"5"}),l.a.createElement("line",{x1:"1",y1:"11",x2:"6",y2:"17"}),l.a.createElement("line",{x1:"2",y1:"11",x2:"22",y2:"11"})))}),O=function(){return l.a.createElement("svg",{viewBox:"0 0 24 24",className:"c-icon"},l.a.createElement("rect",{height:"2",width:"24",y:"5"}),l.a.createElement("rect",{height:"2",width:"24",y:"11"}),l.a.createElement("rect",{height:"2",width:"24",y:"17"}))},v=function(){return l.a.createElement("svg",{className:"c-icon",viewBox:"0 0 24 24"},l.a.createElement("polygon",{points:"19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12"}))},_=function(){return l.a.createElement("svg",{className:"c-icon",viewBox:"0 0 32 32"},l.a.createElement("path",{d:"M19.4271164,21.4271164 C18.0372495,22.4174803 16.3366522,23 14.5,23 C9.80557939,23 6,19.1944206 6,14.5 C6,9.80557939 9.80557939,6 14.5,6 C19.1944206,6 23,9.80557939 23,14.5 C23,16.3366522 22.4174803,18.0372495 21.4271164,19.4271164 L27.0119176,25.0119176 C27.5621186,25.5621186 27.5575313,26.4424687 27.0117185,26.9882815 L26.9882815,27.0117185 C26.4438648,27.5561352 25.5576204,27.5576204 25.0119176,27.0119176 L19.4271164,21.4271164 L19.4271164,21.4271164 Z M14.5,21 C18.0898511,21 21,18.0898511 21,14.5 C21,10.9101489 18.0898511,8 14.5,8 C10.9101489,8 8,10.9101489 8,14.5 C8,18.0898511 10.9101489,21 14.5,21 L14.5,21 Z"}))},S=(t(150),function(e){var n=e.children,t=e.className,a=e.type,c=void 0===a?"text":a,o=e.placeholder,r=e.onChange;return l.a.createElement("input",{className:"".concat(t||""," c-input"),placeholder:o,type:c,onChange:function(e){function n(n){return e.apply(this,arguments)}return n.toString=function(){return e.toString()},n}(function(e){return r(e.target.value)})},n)}),N=(t(151),function(){return l.a.createElement("div",{className:"c-loading-spinner"},l.a.createElement("div",{className:"c-loading-spinner__dot"}),l.a.createElement("div",{className:"c-loading-spinner__dot"}),l.a.createElement("div",{className:"c-loading-spinner__dot"}),l.a.createElement("div",{className:"c-loading-spinner__dot"}))}),j=(t(152),function(e){var n=e.className,t=e.children;return l.a.createElement("span",{className:"".concat(n||""," c-text-heading-large")},t)}),y=(t(153),function(e){var n=e.className,t=e.children;return l.a.createElement("span",{className:"".concat(n||""," c-text-heading-medium")},t)}),C=(t(154),function(e){var n=e.className,t=e.children;return l.a.createElement("span",{className:"".concat(n||""," c-text-heading-small")},t)}),w=(t(155),function(e){var n=e.className,t=e.children;return l.a.createElement("span",{className:"".concat(n||""," c-text-medium")},t)}),k=(t(156),function(e){var n=e.className,t=e.children;return l.a.createElement("span",{className:"".concat(n||""," c-text-small")},t)});t.d(n,"b",function(){return p}),t.d(n,"c",function(){return E}),t.d(n,"i",function(){return g}),t.d(n,"a",function(){return h}),t.d(n,"d",function(){return O}),t.d(n,"e",function(){return v}),t.d(n,"h",function(){return _}),t.d(n,"f",function(){return S}),t.d(n,"g",function(){return N}),t.d(n,"j",function(){return j}),t.d(n,"k",function(){return y}),t.d(n,"l",function(){return C}),t.d(n,"m",function(){return w}),t.d(n,"n",function(){return k})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,n,t){"use strict";t(86);var a=t(119);t.d(n,"ImageGrid",function(){return a.a});var c=t(87);t.o(c,"SeasonNameView")&&t.d(n,"SeasonNameView",function(){return c.SeasonNameView}),t.o(c,"SummaryColumnList")&&t.d(n,"SummaryColumnList",function(){return c.SummaryColumnList});var o=t(122);t.o(o,"SeasonNameView")&&t.d(n,"SeasonNameView",function(){return o.SeasonNameView}),t.o(o,"SummaryColumnList")&&t.d(n,"SummaryColumnList",function(){return o.SummaryColumnList});var r=t(125);t.d(n,"SeasonNameView",function(){return r.a})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,n,t){"use strict";var a=t(66),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.enterDelay,t=void 0===n?0:n,c=e.exitDelay,o=void 0===c?0:c,r=e.enterDuration,i=void 0===r?500:r,s=e.exitDuration,l=void 0===s?500:s,u=e.type,m=void 0===u?"div":u;return a.b[m]({enter:{delay:t,opacity:1,transition:{duration:i}},exit:{delay:o,opacity:0,transition:{duration:l}}})},o=function(e){var n=!1;return{promise:new Promise(function(t,a){e.then(function(e){return n?a({isCanceled:!0}):t(e)},function(e){return a(n?{isCanceled:!0}:e)})}),cancel:function(){n=!0}}};t.d(n,"a",function(){return c}),t.d(n,"b",function(){return o})},,function(e,n,t){},,,,,,,,,,,function(e,n,t){"use strict";t.d(n,"a",function(){return r});var a=t(0),c=t.n(a),o=(t(198),t(7)),r=function(e){var n=e.id,t=e.imageUrlSmall,a=e.onClick,r=e.name,i=e.skipAnimation;return c.a.createElement("div",{onClick:function(){return a&&a(n)},className:"c-image-grid-item"},c.a.createElement("div",{className:"c-image-grid-item__inner"},c.a.createElement("div",{className:"c-image-grid-item__image"},c.a.createElement(o.b,{src:t,skipAnimation:i})),c.a.createElement(o.m,{className:"c-image-grid-item__text"},r)))}},function(e,n,t){"use strict";var a=t(120);t.d(n,"SummaryColumn",function(){return a.a});var c=t(121);t.o(c,"SeasonNameView")&&t.d(n,"SeasonNameView",function(){return c.SeasonNameView}),t.o(c,"SummaryColumnList")&&t.d(n,"SummaryColumnList",function(){return c.SummaryColumnList})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,n,t){"use strict";t.d(n,"a",function(){return i});var a=t(0),c=t.n(a),o=(t(199),t(86)),r=t(7),i=function(e){var n=e.data,t=e.onClick,a=e.skipAnimation;return c.a.createElement("div",{className:"c-image-grid"},n&&n.length?n.map(function(e){return c.a.createElement(o.a,Object.assign({key:e.name},e,{onClick:t,skipAnimation:a}))}):c.a.createElement(r.m,{className:"c-image-grid__no-results"},"No results found"))}},function(e,n,t){"use strict";t.d(n,"a",function(){return r});var a=t(0),c=t.n(a),o=(t(200),t(7)),r=function(e){var n=e.imageUrl,t=e.text,a=e.title;return c.a.createElement("div",{className:"c-summary-column"},n&&c.a.createElement("img",{src:n,className:"c-summary-column__image"}),c.a.createElement("h3",{className:"c-summary-column__heading"},c.a.createElement(o.l,null,a)),c.a.createElement(o.m,null,t))}},function(e,n){},function(e,n,t){"use strict";var a=t(123);t.o(a,"SeasonNameView")&&t.d(n,"SeasonNameView",function(){return a.SeasonNameView}),t.o(a,"SummaryColumnList")&&t.d(n,"SummaryColumnList",function(){return a.SummaryColumnList});var c=t(124);t.d(n,"SummaryColumnList",function(){return c.a})},function(e,n){},function(e,n,t){"use strict";t.d(n,"a",function(){return r});var a=t(0),c=t.n(a),o=(t(201),t(87)),r=function(e){var n=e.columns;return c.a.createElement("ul",{className:"c-summary-column-list"},n.map(function(e,n){return c.a.createElement(o.SummaryColumn,Object.assign({},e,{key:n}))}))}},function(e,n,t){"use strict";t.d(n,"a",function(){return r});var a=t(0),c=t.n(a),o=(t(202),t(7)),r=function(e){var n=e.name;return c.a.createElement(o.l,{className:"c-season-name-view"},n)}},,,,,,,,function(e){e.exports=[{imageUrl:"https://images.unsplash.com/photo-1457296898342-cdd24585d095?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",text:"Seasonal produce generally requires fewer chemicals and the food miles are often significantly lower as product is grown more locally. This keeps the environmental impact lower.",title:"Environment"},{imageUrl:"https://images.freeimages.com/images/small-previews/c22/strawberry-1324897.jpg",text:"In season food usually hasn't travelled far. This helps food maintain nutrients and flavor. Picking food when it's fully ripe not only means it's at it's tastiest but also that it will be more nutritious than fruit picked too early or late.",title:"Taste and nutrition"},{imageUrl:"https://images.freeimages.com/images/small-previews/3c9/spring-onions-1321365.jpg",text:"For similar reasons that seasonal food is usually the freshest it is also often the cheapest. When it's in season the food is readily available and doesn't have to travel as far which helps drive down the cost.",title:"Cost"}]},,,,,,function(e,n,t){e.exports=t(218)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,,,,function(e,n,t){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(102),r=(t(144),t(145),t(89)),i=(t(146),t(7)),s=function(e){return Object(r.a)(e),c.a.createElement("div",{className:"c-about-eat-seasonal"},c.a.createElement("h2",{className:"c-about-eat-seasonal__heading"},c.a.createElement(i.j,null,"About Eat Seasonal")),c.a.createElement("p",{className:"c-about-eat-seasonal__text"},c.a.createElement(i.m,null,"Eat Seasonal started because we wanted a way to easily see what fruit and vegetables are in seasons. Walking around a supermarket, trying to plan seasonal meals becomes much easier when you can quickly access information on everything that's in season through your phone.")),c.a.createElement("p",{className:"c-about-eat-seasonal__text"},c.a.createElement(i.m,null,"The app and website give you quick and simple view of all the food currently in seasons. They also provide a recipes section including carefully selected recipes which use ingredients which are mostly in seasons. New recipes are being added all the time!")))},l=(t(157),function(){return c.a.createElement("a",{className:"c-android-app-download",href:"https://play.google.com/store/apps/details?id=com.chrisbdev.seasonal&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"},c.a.createElement("img",{className:"c-android-app-download__image",alt:"Get it on Google Play",src:"https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"}))}),u=t(13),m=(t(162),function(e){return"c-bottom-tabs__tab ".concat(e?" c-bottom-tabs__tab--selected":"")}),d="GO_TO_WEB_VERSION";var f="GO_BACK_FROM_FOOD_DETAILS";var b="GO_TO_FOOD_TAB";var p="GO_TO_RECIPES_TABS";var E,g=t(50);!function(e){e[e.FOOD=0]="FOOD",e[e.RECIPES=1]="RECIPES"}(E||(E={}));var h=t(21),O=Object(g.c)("".concat("/food-details","/:id")),v=Object(h.createSelector)(O,function(e){return e&&e.params.id}),_=Object(h.createSelector)(function(e){return Object(g.d)(e)},function(e){return e.pathname}),S=Object(h.createSelector)(_,function(e){return"/all-seasons"===e}),N=Object(h.createSelector)(function(e){return e.webUi},function(e){return e.currentTab}),j=Object(h.createSelector)(N,function(e){return e===E.FOOD}),y=Object(h.createSelector)(N,function(e){return e===E.RECIPES}),C=t(135),w=t(219),k=t(4),I=t(29),L=t(16),T=t(115),F=[k.SELECT_SEASON,k.FOOD_DETAILS_SELECT_SEASON,k.OPEN_MENU,k.CLOSE_MENU,b,p,d,k.RECIPE_ITEM_CLICKED,k.FOOD_ITEM_CLICKED],D=t(99),A=t(132),x=t(116),B=t(117),V=t(114),M=t(20),P=w.a.apply(void 0,Object(C.a)(k.rootEpics).concat([function(e){return e.pipe(Object(I.a)(function(e){var n=e.type;return F.includes(n)}),Object(L.a)(function(e){var n=e.type;return ga("send","event",n,n)}),Object(T.a)())},function(e){return e.pipe(Object(A.a)(d),Object(x.a)(Object(M.e)("/food")))},function(e,n){return e.pipe(Object(A.a)(k.RECIPE_ITEM_CLICKED),Object(B.a)(n),Object(L.a)(function(e){var n=Object(D.a)(e,2),t=n[0],a=n[1];return Object(k.selectCurrentSeasonRecipesById)(t.recipeItemId)(a)}),Object(L.a)(function(e){return e&&window.open(e.linkUrl,"_blank"),{type:""}}))},function(e){return e.pipe(Object(A.a)(k.FOOD_ITEM_CLICKED),Object(L.a)(function(e){return Object(M.e)("".concat("/food-details","/").concat(e.foodItemId))}))},function(e){return e.pipe(Object(A.a)(k.FOOD_ITEM_CLICKED),Object(L.a)(function(e){return Object(k.setCurrentFoodDetailsDataStart)(e.foodItemId)}))},function(e){return e.pipe(Object(A.a)(f),Object(x.a)(Object(M.c)()))},function(e,n){return e.pipe(Object(A.a)(k.INIT_APP),Object(B.a)(n),Object(L.a)(function(e){var n=Object(D.a)(e,2)[1];return v(n)}),Object(I.a)(function(e){return Boolean(e)}),Object(L.a)(function(e){return Object(k.setCurrentFoodDetailsDataStart)(e)}))},function(e,n){return e.pipe(Object(A.a)(k.GO_TO_ALL_SEASONS_VIEW,k.INIT_APP,f),Object(V.a)(50),Object(B.a)(n),Object(L.a)(function(e){var n=Object(D.a)(e,2)[1];return S(n)}),Object(I.a)(function(e){return Boolean(e)}),Object(x.a)(Object(k.setAllSeasonsWithFoodDataStart)()))},function(e){return e.pipe(Object(A.a)(k.FOOD_DETAILS_SELECT_SEASON,k.SELECT_SEASON),Object(x.a)(Object(M.e)("/food")))},function(e){return e.pipe(Object(A.a)(k.GO_TO_ALL_SEASONS_VIEW),Object(x.a)(Object(M.e)("/all-seasons")))}])),R=t(74),W=t(54),U=t(220),G=function(){return{currentTab:E.FOOD}};var K=t(118),q=t(49),H=Object(U.a)(),J=Object(q.a)(),Z=Object(W.e)(Object(W.c)(Object(R.a)({},k.allReducers,{router:Object(g.b)(J),webUi:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G();switch((arguments.length>1?arguments[1]:void 0).type){case b:return Object(R.a)({},e,{currentTab:E.FOOD});case p:return Object(R.a)({},e,{currentTab:E.RECIPES});default:return e}}})),Object(W.d)(Object(W.a)(Object(K.a)(J),H)));H.run(P);var Q=Object(u.c)(function(e){return{isCurrentTabFood:j(e),isCurrentTabRecipes:y(e)}},function(e){return{goToFoodTab:function(){return e({type:b})},goToRecipesTab:function(){return e({type:p})}}})(function(e){var n=e.isCurrentTabFood,t=e.isCurrentTabRecipes,a=e.goToFoodTab,o=e.goToRecipesTab;return c.a.createElement("nav",{className:"c-bottom-tabs"},c.a.createElement(i.c,{className:m(n),onClick:a},"Food"),c.a.createElement(i.c,{className:m(t),onClick:o},"Recipes"))}),$=(t(197),t(43)),z=Object(u.c)(function(e){return{currentSeasonName:Object(k.selectCurrentSeasonName)(e),isLoading:Object(k.selectIsCurrentSeasonLoading)(e)}})(function(e){var n=e.currentSeasonName;return e.isLoading?null:c.a.createElement($.SeasonNameView,{name:n})}),X=(t(203),Object(u.c)(function(e){return{isLoading:Object(k.selectIsFoodDataOrBasicSeasonsLoading)(e)}})(function(e){return e.isLoading?c.a.createElement("div",{className:"c-food-details-loader"},c.a.createElement(i.g,null)):null})),Y=(t(204),Object(u.c)(function(e){return{foodImageUrl:Object(k.selectCurrentFoodDetailsImageUrl)(e),foodName:Object(k.selectCurrentFoodDetailsName)(e),isLoading:Object(k.selectIsFoodDataOrBasicSeasonsLoading)(e)}},function(e){return{onGoBack:function(){return e({type:f})}}})(function(e){var n=e.foodImageUrl,t=e.foodName,a=e.isLoading,o=e.onGoBack;return a?null:c.a.createElement("div",{className:"c-food-details-top-section"},c.a.createElement("div",{className:"c-food-details-top-section__top-bar"},c.a.createElement(i.c,{className:"c-food-details-top-section__back-button",onClick:o},c.a.createElement(i.a,null)),c.a.createElement(i.k,{className:"c-food-details-top-section__food-name"},t)),n&&c.a.createElement("img",{src:n,className:"c-food-details-top-section__food-image"}))})),ee=(t(205),Object(u.c)(function(e){return{food:Object(k.selectVisibleFoodData)(e),isCurrentTabFood:j(e),isLoading:Object(k.selectIsCurrentSeasonLoading)(e),recipes:Object(k.selectVisibleRecipeData)(e)}},function(e){return{onFoodClick:function(n){return e(Object(k.foodItemClicked)(n))},onRecipeClick:function(n){return e(Object(k.recipeItemClicked)(n))}}})(function(e){var n=e.isCurrentTabFood,t=e.isLoading,a=e.food,o=e.recipes,r=e.onFoodClick,s=e.onRecipeClick;return t?c.a.createElement("div",{className:"c-food-table__loading-spinner-wrapper"},c.a.createElement(i.g,null)):n?c.a.createElement($.ImageGrid,{data:a,onClick:r}):c.a.createElement($.ImageGrid,{data:o,onClick:s})})),ne=(t(206),Object(u.c)(function(){return{}},function(e){return{onMenuOpen:function(){return e(Object(k.openMenu)())}}})(function(e){var n=e.onMenuOpen;return c.a.createElement("header",{className:"c-header"},c.a.createElement(i.c,{className:"c-header__btn",onClick:n},c.a.createElement(i.d,null)),c.a.createElement("h1",{className:"c-header__text"},c.a.createElement(i.j,null,"Eat Seasonal")),c.a.createElement(le,null))})),te=(t(207),function(e){var n=e.children;return c.a.createElement("div",{className:"c-page-layout"},n)}),ae=(t(208),t(73)),ce=t(66),oe=Object(ae.a)(),re=Object(u.c)(function(e){return{allBasicSeasonData:Object(k.selectAllBasicSeasonData)(e),currentSeasonIndex:Object(k.selectCurrentSeasonIndex)(e),isCurrentRouteAllSeasons:S(e),isLoading:Object(k.selectIsBasicSeasonDataLoading)(e),isMenuOpen:Object(k.selectIsMenuOpen)(e)}},function(e){return{onAllSeasonsSelected:function(){return e(Object(k.goToAllSeasonsView)())},onClose:function(){return e(Object(k.closeMenu)())},onSeasonSelected:function(n){return e(Object(k.selectSeason)(n))}}})(function(e){var n=e.allBasicSeasonData,t=e.currentSeasonIndex,o=e.isCurrentRouteAllSeasons,r=e.isLoading,s=e.isMenuOpen,l=e.onSeasonSelected,u=e.onClose,m=e.onAllSeasonsSelected;return c.a.createElement("div",null,c.a.createElement(ce.a,null,s&&c.a.createElement(oe,{key:"season-menu-overlay",className:"c-season-menu__overlay",onClick:u})),c.a.createElement("nav",{className:"c-season-menu ".concat(s?"c-season-menu--is-open":"")},r?c.a.createElement("div",{className:"c-season-menu__loading-spinner-wrapper"},c.a.createElement(i.g,null)):c.a.createElement(a.Fragment,null,n&&n.map(function(e,n){var a=e.name;return c.a.createElement(i.c,{key:a,className:"c-season-menu__button ".concat(o||n!==t?"":"c-season-menu__button--selected"),onClick:function(){return l(n)}},c.a.createElement(i.m,null,a))}),c.a.createElement(i.c,{className:"c-season-menu__button ".concat(o?"c-season-menu__button--selected":""),onClick:m},c.a.createElement(i.m,null,"All seasons"))),c.a.createElement(i.c,{className:"c-season-menu__close-btn",onClick:u},c.a.createElement(i.e,null))))}),ie=function(e){var n=e.children;return c.a.createElement(te,null,c.a.createElement(ne,null),c.a.createElement(re,null),n)},se=(t(209),function(e){return"c-search-bar"+(e?" c-search-bar--show-full":"")}),le=Object(u.c)(function(e){return{isSearchBarVisible:Object(k.selectIsSearchBarVisible)(e)}},function(e){return{onHideSearchBar:function(){return e(Object(k.hideSearchBar)())},onSearchChanged:function(n){return e(Object(k.searchBarChanged)(n))},onShowSearchBar:function(){return e(Object(k.showSearchBar)())}}})(function(e){var n=e.isSearchBarVisible,t=e.onHideSearchBar,a=e.onSearchChanged,o=e.onShowSearchBar;return c.a.createElement("div",{className:se(n),ref:function(e){return function(e,n){if(e&&n){var t=e.querySelector("input");t&&t.focus()}}(e,n)}},c.a.createElement(i.f,{className:"c-search-bar__input",onChange:function(e){return a(e)},placeholder:"Search"}),n?c.a.createElement(i.c,{className:"c-search-bar__search-button",onClick:t},c.a.createElement(i.e,null)):c.a.createElement(i.c,{className:"c-search-bar__search-button",onClick:o},c.a.createElement(i.h,null)))}),ue=(t(210),Object(u.c)(function(e){return{isLoading:Object(k.selectIsFoodDataOrBasicSeasonsLoading)(e),seasonsSelectedForFood:Object(k.selectSeasonsSelectedForFood)(e)}},function(e){return{onSeasonSelected:function(n){return e(Object(k.foodDetailsSelectSeason)(n))}}})(function(e){var n=e.isLoading,t=e.seasonsSelectedForFood,o=e.onSeasonSelected;return n?null:c.a.createElement(a.Fragment,null,c.a.createElement(i.k,{className:"c-season-for-food__list-heading"},"When are they in season?"),c.a.createElement("div",{className:"c-season-for-food__list"},t&&t.map(function(e,n){var t=e.isSelected,a=e.name;return c.a.createElement(i.c,{key:a,className:"c-season-for-food__season"+(t?" c-season-for-food__season--selected":""),onClick:function(){return o(n)}},c.a.createElement(i.m,null,a.substring(0,3)))})),c.a.createElement("div",{className:"c-season-food__in-season-key c-season-food__in-season-key--in-season"},c.a.createElement(i.n,{className:"c-season-food__in-season-key__text"},"In season")),c.a.createElement("div",{className:"c-season-food__in-season-key"},c.a.createElement(i.n,{className:"c-season-food__in-season-key__text"},"Not in season")))})),me=(t(211),Object(u.c)(function(){return{}},function(e){return{onGoToWebVersion:function(){return e({type:d})}}})(function(e){var n=e.onGoToWebVersion;return c.a.createElement(i.i,{onClick:n},"To web version")})),de=function(){return c.a.createElement("div",{className:"c-view-app-links"},c.a.createElement(l,null),c.a.createElement(me,null))},fe=(t(212),{columns:t(133)}),be=function(e){return Object(r.a)(e),c.a.createElement("div",{className:"c-why-eat-seasonal"},c.a.createElement("h2",{className:"c-why-eat-seasonal__heading"},c.a.createElement(i.j,null,"Why Eat Seasonal?")),c.a.createElement($.SummaryColumnList,fe))},pe=(t(213),t(134)),Ee=t.n(pe),ge=Object(u.c)(function(e){return{hasMoreSeasonsInAllSeasonsView:Object(k.selectHasMoreSeasonsInAllSeasonsView)(e),isLoading:Object(k.selectIsAllSeasonsWithFoodDataLoading)(e),seasons:Object(k.selectAllSeasonsVisibleFoodData)(e)}},function(e){return{increaseNumberOfAllFoodSeasonsInView:function(){return e(Object(k.increaseNumberOfAllFoodSeasonsInView)())},onFoodClick:function(n){return e(Object(k.foodItemClicked)(n))}}})(function(e){var n=e.isLoading,t=e.onFoodClick,a=e.seasons,o=e.hasMoreSeasonsInAllSeasonsView,r=e.increaseNumberOfAllFoodSeasonsInView;return n?c.a.createElement("div",{className:"c-all-seasons__loading-spinner-wrapper"},c.a.createElement(i.g,null)):c.a.createElement("div",{className:"c-all-seasons"},c.a.createElement(Ee.a,{pageStart:0,loadMore:r,hasMore:o,loader:c.a.createElement(i.g,{key:"all-seasons-spinner"})},a&&a.map(function(e){var n=e.name,a=e.food;return c.a.createElement("div",{className:"c-all-seasons__season",key:n},c.a.createElement($.SeasonNameView,{name:n}),c.a.createElement($.ImageGrid,{data:a,onClick:t,skipAnimation:!0}))})))}),he=function(){return c.a.createElement(ie,null,c.a.createElement("div",{className:"c-food-details-page__main"},c.a.createElement(Y,null),c.a.createElement(X,null),c.a.createElement(ue,null)))},Oe=(t(215),function(){return c.a.createElement(ie,null,c.a.createElement("div",{className:"c-food-table-page__main"},c.a.createElement(z,null),c.a.createElement(ee,null),c.a.createElement(Q,null)))}),ve=(t(216),function(){return c.a.createElement("div",{className:"c-intro-page"},c.a.createElement("div",{className:"c-intro-page__top-section"},c.a.createElement("img",{className:"c-intro-page__splash-image",src:"/splash.png"}),c.a.createElement(de,null)),c.a.createElement(s,null),c.a.createElement(be,null),c.a.createElement("div",{className:"c-intro-page__mobile-extra-app-links"},c.a.createElement(de,null)))}),_e=function(){return c.a.createElement(ie,null,c.a.createElement(ge,null))},Se=(t(217),t(44)),Ne=function(){return c.a.createElement(u.a,{store:Z},c.a.createElement(g.a,{history:J},c.a.createElement("div",{className:"c-app"},c.a.createElement(Se.c,null,c.a.createElement(Se.a,{path:"/",component:ve,exact:!0}),c.a.createElement(Se.a,{path:"/food",component:Oe}),c.a.createElement(Se.a,{path:"".concat("/food-details","/:id"),component:he}),c.a.createElement(Se.a,{path:"/all-seasons",component:_e})))))},je=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ye(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Ce=document.getElementById("root");Ce&&Ce.hasChildNodes()?Object(o.hydrate)(c.a.createElement(Ne,null),Ce):Object(o.render)(c.a.createElement(Ne,null),Ce),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");je?(function(e,n){fetch(e).then(function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ye(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ye(n,e)})}}()}],[[139,1,2]]]);
//# sourceMappingURL=main.daa4267e.chunk.js.map