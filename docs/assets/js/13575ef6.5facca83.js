"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[4800],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return p}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=m(e,["components","mdxType","originalType","parentName"]),l=d(t),p=a,f=l["".concat(c,".").concat(p)]||l[p]||s[p]||o;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=l;var m={};for(var c in n)hasOwnProperty.call(n,c)&&(m[c]=n[c]);m.originalType=e,m.mdxType="string"==typeof e?e:a,i[1]=m;for(var d=2;d<o;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},8211:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return m},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return l}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],m={id:"save-recommendation",title:"SaveRecommendation"},c=void 0,d={unversionedId:"schema/mutations/save-recommendation",id:"schema/mutations/save-recommendation",isDocsHomePage:!1,title:"SaveRecommendation",description:"Recommendation a media",source:"@site/docs/schema/mutations/save-recommendation.mdx",sourceDirName:"schema/mutations",slug:"/schema/mutations/save-recommendation",permalink:"/graphql-markdown/schema/mutations/save-recommendation",tags:[],version:"current",frontMatter:{id:"save-recommendation",title:"SaveRecommendation"},sidebar:"schemaSidebar",previous:{title:"SaveMessageActivity",permalink:"/graphql-markdown/schema/mutations/save-message-activity"},next:{title:"SaveReview",permalink:"/graphql-markdown/schema/mutations/save-review"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],s={toc:u};function l(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Recommendation a media"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"SaveRecommendation(\n  mediaId: Int\n  mediaRecommendationId: Int\n  rating: RecommendationRating\n): Recommendation\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"mediaid-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"mediaId")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The id of the base media"),(0,o.kt)("h4",{id:"mediarecommendationid-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"mediaRecommendationId")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"The id of the media to recommend"),(0,o.kt)("h4",{id:"rating-recommendationrating"},(0,o.kt)("inlineCode",{parentName:"h4"},"rating")," (",(0,o.kt)("a",{parentName:"h4",href:"/schema/enums/recommendation-rating"},(0,o.kt)("inlineCode",{parentName:"a"},"RecommendationRating")),")"),(0,o.kt)("p",null,"The rating to give the recommendation"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"recommendation"},(0,o.kt)("a",{parentName:"h4",href:"/schema/objects/recommendation"},(0,o.kt)("inlineCode",{parentName:"a"},"Recommendation"))),(0,o.kt)("p",null,"Media recommendation"))}l.isMDXComponent=!0}}]);