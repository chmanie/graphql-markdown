"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[7900],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,u=d["".concat(s,".").concat(c)]||d[c]||h[c]||i;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9259:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return p},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"review",title:"Review"},s=void 0,m={unversionedId:"schema/objects/review",id:"schema/objects/review",isDocsHomePage:!1,title:"Review",description:"A Review that features in an anime or manga",source:"@site/docs/schema/objects/review.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/review",permalink:"/graphql-markdown/schema/objects/review",tags:[],version:"current",frontMatter:{id:"review",title:"Review"},sidebar:"schemaSidebar",previous:{title:"ReviewEdge",permalink:"/graphql-markdown/schema/objects/review-edge"},next:{title:"RevisionHistory",permalink:"/graphql-markdown/schema/objects/revision-history"}},p=[{value:"Fields",id:"fields",children:[]}],h={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A Review that features in an anime or manga"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Review {\n  id: Int!\n  userId: Int!\n  mediaId: Int!\n  mediaType: MediaType\n  summary: String\n  body(asHtml: Boolean): String\n  rating: Int\n  ratingAmount: Int\n  userRating: ReviewRating\n  score: Int\n  private: Boolean\n  siteUrl: String\n  createdAt: Int!\n  updatedAt: Int!\n  user: User\n  media: Media\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The id of the review"),(0,i.kt)("h4",{id:"userid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The id of the review's creator"),(0,i.kt)("h4",{id:"mediaid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"mediaId")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The id of the review's media"),(0,i.kt)("h4",{id:"mediatype-mediatype"},(0,i.kt)("inlineCode",{parentName:"h4"},"mediaType")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/media-type"},(0,i.kt)("inlineCode",{parentName:"a"},"MediaType")),")"),(0,i.kt)("p",null,"For which type of media the review is for"),(0,i.kt)("h4",{id:"summary-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"summary")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"A short summary of the review"),(0,i.kt)("h4",{id:"body-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"body")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The main review body text"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"ashtml-boolean"},(0,i.kt)("inlineCode",{parentName:"h5"},"asHtml")," (",(0,i.kt)("a",{parentName:"h5",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,i.kt)("p",null,"Return the string in pre-parsed html instead of markdown"),(0,i.kt)("h4",{id:"rating-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"rating")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The total user rating of the review"),(0,i.kt)("h4",{id:"ratingamount-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"ratingAmount")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The amount of user ratings of the review"),(0,i.kt)("h4",{id:"userrating-reviewrating"},(0,i.kt)("inlineCode",{parentName:"h4"},"userRating")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/enums/review-rating"},(0,i.kt)("inlineCode",{parentName:"a"},"ReviewRating")),")"),(0,i.kt)("p",null,"The rating of the review by currently authenticated user"),(0,i.kt)("h4",{id:"score-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"score")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"The review score of the media"),(0,i.kt)("h4",{id:"private-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"private")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("p",null,"If the review is not yet publicly published and is only viewable by creator"),(0,i.kt)("h4",{id:"siteurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"siteUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("p",null,"The url for the review page on the AniList website"),(0,i.kt)("h4",{id:"createdat-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The time of the thread creation"),(0,i.kt)("h4",{id:"updatedat-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("p",null,"The time of the thread last update"),(0,i.kt)("h4",{id:"user-user"},(0,i.kt)("inlineCode",{parentName:"h4"},"user")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,i.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,i.kt)("p",null,"The creator of the review"),(0,i.kt)("h4",{id:"media-media"},(0,i.kt)("inlineCode",{parentName:"h4"},"media")," (",(0,i.kt)("a",{parentName:"h4",href:"/schema/objects/media"},(0,i.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,i.kt)("p",null,"The media the review is of"))}d.isMDXComponent=!0}}]);