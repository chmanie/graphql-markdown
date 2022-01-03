"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[228],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return t?i.createElement(h,o(o({ref:n},s),{},{components:t})):i.createElement(h,o({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<a;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7719:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return s},default:function(){return p}});var i=t(7462),r=t(3366),a=(t(7294),t(3905)),o=["components"],c={id:"airing-schedule",title:"AiringSchedule"},l=void 0,d={unversionedId:"schema/objects/airing-schedule",id:"schema/objects/airing-schedule",isDocsHomePage:!1,title:"AiringSchedule",description:"Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate.",source:"@site/docs/schema/objects/airing-schedule.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/airing-schedule",permalink:"/graphql-markdown/schema/objects/airing-schedule",tags:[],version:"current",frontMatter:{id:"airing-schedule",title:"AiringSchedule"},sidebar:"basic",previous:{title:"AiringScheduleEdge",permalink:"/graphql-markdown/schema/objects/airing-schedule-edge"},next:{title:"AniChartUser",permalink:"/graphql-markdown/schema/objects/ani-chart-user"}},s=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (Int)",id:"id-int",children:[],level:4},{value:"<code>airingAt</code> (Int)",id:"airingat-int",children:[],level:4},{value:"<code>timeUntilAiring</code> (Int)",id:"timeuntilairing-int",children:[],level:4},{value:"<code>episode</code> (Int)",id:"episode-int",children:[],level:4},{value:"<code>mediaId</code> (Int)",id:"mediaid-int",children:[],level:4},{value:"<code>media</code> (Media)",id:"media-media",children:[],level:4}],level:3}],u={toc:s};function p(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Media Airing Schedule. NOTE: We only aim to guarantee that FUTURE airing data is present and accurate."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type AiringSchedule {\n  id: Int!\n  airingAt: Int!\n  timeUntilAiring: Int!\n  episode: Int!\n  mediaId: Int!\n  media: Media\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"id-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The id of the airing schedule item"),(0,a.kt)("h4",{id:"airingat-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"airingAt")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The time the episode airs at"),(0,a.kt)("h4",{id:"timeuntilairing-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"timeUntilAiring")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"Seconds until episode starts airing"),(0,a.kt)("h4",{id:"episode-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"episode")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The airing episode number"),(0,a.kt)("h4",{id:"mediaid-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"mediaId")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"The associate media id of the airing episode"),(0,a.kt)("h4",{id:"media-media"},(0,a.kt)("inlineCode",{parentName:"h4"},"media")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,a.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,a.kt)("p",null,"The associate media of the airing episode"))}p.isMDXComponent=!0}}]);