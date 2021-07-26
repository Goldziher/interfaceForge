(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[902],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),f=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=f(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=f(r),p=o,y=m["".concat(s,".").concat(p)]||m[p]||l[p]||a;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var f=2;f<a;f++)c[f]=r[f];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2629:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return f},toc:function(){return u},default:function(){return m}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),c=["components"],i={id:"using-factories-in-factory-schema",title:"Using Factories in Factory-Schema",description:"Using other factories as values in factory schema.",slug:"/factory-schema/using-factories-in-factory-schema"},s=void 0,f={unversionedId:"Schema/using-factories-in-factory-schema",id:"Schema/using-factories-in-factory-schema",isDocsHomePage:!1,title:"Using Factories in Factory-Schema",description:"Using other factories as values in factory schema.",source:"@site/docs/3-Schema/1-using-factories-in-factory-schema.md",sourceDirName:"3-Schema",slug:"/factory-schema/using-factories-in-factory-schema",permalink:"/interfaceForge/docs/factory-schema/using-factories-in-factory-schema",editUrl:"https://github.com/Goldziher/interfaceForge/edit/main/docs/docs/3-Schema/1-using-factories-in-factory-schema.md",version:"current",sidebarPosition:1,frontMatter:{id:"using-factories-in-factory-schema",title:"Using Factories in Factory-Schema",description:"Using other factories as values in factory schema.",slug:"/factory-schema/using-factories-in-factory-schema"},sidebar:"tutorialSidebar",previous:{title:"FactorySchema",permalink:"/interfaceForge/docs/Schema/factory-schema"},next:{title:"Using the .use static method with nested factories",permalink:"/interfaceForge/docs/factory-schema/using-the-use-static-method-with-nested-factories"}},u=[],l={toc:u};function m(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can place other factories within a factory schema. These will be used of TypeFactory as values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="factories.ts"',title:'"factories.ts"'},"import { TypeFactory } from 'interface-forge';\nimport { User, UserProfile } from './types';\n\nconst UserProfileFactory = new TypeFactory<UserProfile>({\n    profession: 'cook',\n    gender: 'male',\n    age: 27,\n});\n\nconst UserFactory = new TypeFactory<User>({\n    firstName: 'John',\n    lastName: 'Smith',\n    email: 'js@example.com',\n    profile: UserProfileFactory,\n    cats: [],\n});\n")),(0,a.kt)("p",null,"When building an instance of UserFactory, the nested UserProfileFactory will be built. The decision whether to use\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"async")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"sync")," build methods depends on the method invoked on the parent factory. You must therefore be careful\nnot to place a factory initiated with async defaults as a child attribute in a factory that is meant to be used\nsynchronously."))}m.isMDXComponent=!0}}]);