"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[7065],{3905:function(e,t,r){r.d(t,{Zo:function(){return f},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},f=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return r?n.createElement(m,c(c({ref:t},f),{},{components:r})):n.createElement(m,c({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9066:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={id:"staff-role-type",title:"StaffRoleType"},l=void 0,s={unversionedId:"schema/objects/staff-role-type",id:"schema/objects/staff-role-type",title:"StaffRoleType",description:"Voice actor role for a character",source:"@site/docs/schema/objects/staff-role-type.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/staff-role-type",permalink:"/graphql-markdown/schema/objects/staff-role-type",tags:[],version:"current",frontMatter:{id:"staff-role-type",title:"StaffRoleType"},sidebar:"basic",previous:{title:"StaffName",permalink:"/graphql-markdown/schema/objects/staff-name"},next:{title:"StaffStats",permalink:"/graphql-markdown/schema/objects/staff-stats"}},f={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>voiceActor</code> (<code>Staff</code>)",id:"voiceactor-staff",level:4},{value:"<code>roleNotes</code> (<code>String</code>)",id:"rolenotes-string",level:4},{value:"<code>dubGroup</code> (<code>String</code>)",id:"dubgroup-string",level:4}],p={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Voice actor role for a character"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type StaffRoleType {\n  voiceActor: Staff\n  roleNotes: String\n  dubGroup: String\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"voiceactor-staff"},(0,a.kt)("inlineCode",{parentName:"h4"},"voiceActor")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/objects/staff"},(0,a.kt)("inlineCode",{parentName:"a"},"Staff")),")"),(0,a.kt)("p",null,"The voice actors of the character"),(0,a.kt)("h4",{id:"rolenotes-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"roleNotes")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Notes regarding the VA's role for the character"),(0,a.kt)("h4",{id:"dubgroup-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"dubGroup")," (",(0,a.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("p",null,"Used for grouping roles where multiple dubs exist for the same language. Either dubbing company name or language variant."))}d.isMDXComponent=!0}}]);