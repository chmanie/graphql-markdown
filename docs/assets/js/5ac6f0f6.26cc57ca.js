"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[5045],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(o,".").concat(m)]||p[m]||l[m]||i;return n?a.createElement(f,s(s({ref:t},d),{},{components:n})):a.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3180:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return l}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],c={id:"user-status-statistic",title:"UserStatusStatistic"},o=void 0,u={unversionedId:"schema/objects/user-status-statistic",id:"schema/objects/user-status-statistic",title:"UserStatusStatistic",description:"No description",source:"@site/docs/schema/objects/user-status-statistic.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/user-status-statistic",permalink:"/graphql-markdown/schema/objects/user-status-statistic",tags:[],version:"current",frontMatter:{id:"user-status-statistic",title:"UserStatusStatistic"},sidebar:"basic",previous:{title:"UserStats",permalink:"/graphql-markdown/schema/objects/user-stats"},next:{title:"UserStudioStatistic",permalink:"/graphql-markdown/schema/objects/user-studio-statistic"}},d={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>Int</code>)",id:"count-int",level:4},{value:"<code>meanScore</code> (<code>Float</code>)",id:"meanscore-float",level:4},{value:"<code>minutesWatched</code> (<code>Int</code>)",id:"minuteswatched-int",level:4},{value:"<code>chaptersRead</code> (<code>Int</code>)",id:"chaptersread-int",level:4},{value:"<code>mediaIds</code> (<code>Int</code>)",id:"mediaids-int",level:4},{value:"<code>status</code> (<code>MediaListStatus</code>)",id:"status-medialiststatus",level:4}],p={toc:l};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type UserStatusStatistic {\n  count: Int!\n  meanScore: Float!\n  minutesWatched: Int!\n  chaptersRead: Int!\n  mediaIds: [Int]!\n  status: MediaListStatus\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"count-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"count")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"meanscore-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"meanScore")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"minuteswatched-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"minutesWatched")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"chaptersread-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"chaptersRead")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"mediaids-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"mediaIds")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"status-medialiststatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/media-list-status"},(0,i.kt)("inlineCode",{parentName:"a"},"MediaListStatus")),")"))}m.isMDXComponent=!0}}]);