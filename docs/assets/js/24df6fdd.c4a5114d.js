(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[730],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return f},kt:function(){return u}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},f=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,m=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return t?n.createElement(m,o(o({ref:r},f),{},{components:t})):n.createElement(m,o({ref:r},f))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4925:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return f},default:function(){return d}});var n=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],s={id:"integrating-faker",title:"FakerJs Integration",description:"Example of FakerJS or ChanceJS factory integration",slug:"/integrating-faker",sidebar_label:"FakerJS Integration",sidebar_position:4},c=void 0,l={unversionedId:"integrating-faker",id:"integrating-faker",isDocsHomePage:!1,title:"FakerJs Integration",description:"Example of FakerJS or ChanceJS factory integration",source:"@site/docs/4-integration-with-faker-libraries-example.md",sourceDirName:".",slug:"/integrating-faker",permalink:"/interfaceForge/docs/integrating-faker",editUrl:"https://github.com/Goldziher/interfaceForge/edit/main/docs/docs/4-integration-with-faker-libraries-example.md",version:"current",sidebarPosition:4,frontMatter:{id:"integrating-faker",title:"FakerJs Integration",description:"Example of FakerJS or ChanceJS factory integration",slug:"/integrating-faker",sidebar_label:"FakerJS Integration",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Using Generator Functions",permalink:"/interfaceForge/docs/factory-schema/using-generators"},next:{title:"Contributing",permalink:"/interfaceForge/docs/contributing"}},f=[],p={toc:f};function d(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Integrating fakerJS or any other similar library (e.g. chanceJs) in a factory is very straightforward:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as faker from 'faker';\nimport {TypeFactory} from 'interface-forge';\nimport {UserProfile, User, Cat} from \"./types\"\n\ninterface User {\n    id: string;\n    firstName: string;\n    lastName: string;\n    email: string;\n    address: string;\n    birthday: Date\n    isActive: boolean;\n    imageUrl: string;\n}\n\nexport const UserFactory = new TypeFactory<User>(() => {\n    id: faker.datatype.uuid();\n    firstName: faker.name.firstName();\n    lastName: faker.name.lastName();\n    email: faker.internet.email();\n    address: faker.address.streetAddress();\n    birthday: faker.date.past()\n    isActive: faker.datatype.boolean();\n    imageUrl: faker.internet.url();\n})\n")),(0,i.kt)("p",null,"Or as part of build args:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const user = UserFactory.buildSync(() => ({\n    address: faker.address.streetAddress + ", " + faker.address.zipCode()\n}))\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"To ensure that faker is called every time the factory builds an instance, you should use function based defaults")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"and overrides."))))}d.isMDXComponent=!0}}]);