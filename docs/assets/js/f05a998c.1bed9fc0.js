"use strict";(self.webpackChunkdocusaurus_2=self.webpackChunkdocusaurus_2||[]).push([[3518],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1733:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return u}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],c={id:"activity-message-notification",title:"ActivityMessageNotification"},s=void 0,l={unversionedId:"schema/objects/activity-message-notification",id:"schema/objects/activity-message-notification",title:"ActivityMessageNotification",description:"Notification for when a user is send an activity message",source:"@site/docs/schema/objects/activity-message-notification.mdx",sourceDirName:"schema/objects",slug:"/schema/objects/activity-message-notification",permalink:"/graphql-markdown/schema/objects/activity-message-notification",tags:[],version:"current",frontMatter:{id:"activity-message-notification",title:"ActivityMessageNotification"},sidebar:"basic",previous:{title:"ActivityMentionNotification",permalink:"/graphql-markdown/schema/objects/activity-mention-notification"},next:{title:"ActivityReplyLikeNotification",permalink:"/graphql-markdown/schema/objects/activity-reply-like-notification"}},d=[{value:"Fields",id:"fields",children:[{value:"<code>id</code> (Int)",id:"id-int",children:[],level:4},{value:"<code>userId</code> (Int)",id:"userid-int",children:[],level:4},{value:"<code>type</code> (NotificationType)",id:"type-notificationtype",children:[],level:4},{value:"<code>activityId</code> (Int)",id:"activityid-int",children:[],level:4},{value:"<code>context</code> (String)",id:"context-string",children:[],level:4},{value:"<code>createdAt</code> (Int)",id:"createdat-int",children:[],level:4},{value:"<code>message</code> (MessageActivity)",id:"message-messageactivity",children:[],level:4},{value:"<code>user</code> (User)",id:"user-user",children:[],level:4}],level:3}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Notification for when a user is send an activity message"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type ActivityMessageNotification {\n  id: Int!\n  userId: Int!\n  type: NotificationType\n  activityId: Int!\n  context: String\n  createdAt: Int\n  message: MessageActivity\n  user: User\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"id-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The id of the Notification"),(0,r.kt)("h4",{id:"userid-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"userId")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The if of the user who send the message"),(0,r.kt)("h4",{id:"type-notificationtype"},(0,r.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/enums/notification-type"},(0,r.kt)("inlineCode",{parentName:"a"},"NotificationType")),")"),(0,r.kt)("p",null,"The type of notification"),(0,r.kt)("h4",{id:"activityid-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"activityId")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The id of the activity message"),(0,r.kt)("h4",{id:"context-string"},(0,r.kt)("inlineCode",{parentName:"h4"},"context")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("p",null,"The notification context text"),(0,r.kt)("h4",{id:"createdat-int"},(0,r.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"The time the notification was created at"),(0,r.kt)("h4",{id:"message-messageactivity"},(0,r.kt)("inlineCode",{parentName:"h4"},"message")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/message-activity"},(0,r.kt)("inlineCode",{parentName:"a"},"MessageActivity")),")"),(0,r.kt)("p",null,"The message activity"),(0,r.kt)("h4",{id:"user-user"},(0,r.kt)("inlineCode",{parentName:"h4"},"user")," (",(0,r.kt)("a",{parentName:"h4",href:"/schema/objects/user"},(0,r.kt)("inlineCode",{parentName:"a"},"User")),")"),(0,r.kt)("p",null,"The user who sent the message"))}u.isMDXComponent=!0}}]);