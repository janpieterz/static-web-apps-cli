"use strict";(self.webpackChunk_azure_static_web_apps_cli_docs=self.webpackChunk_azure_static_web_apps_cli_docs||[]).push([[671],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return a?r.createElement(f,o(o({ref:t},u),{},{components:a})):r.createElement(f,o({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9881:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],s={sidebar_position:1},l="About SWA CLI",p={unversionedId:"intro",id:"intro",title:"About SWA CLI",description:"The Static Web Apps (SWA) CLI is an open-source commandline tool that streamlines local development and deployment for Azure Static Web Apps.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/static-web-apps-cli/docs/intro",editUrl:"https://github.com/azure/static-web-apps-cli/tree/main/docs/www/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"1. Install the SWA CLI",permalink:"/static-web-apps-cli/docs/use/install"}},u={},c=[{value:"Static Web Apps",id:"static-web-apps",level:2},{value:"About SWA CLI",id:"about-swa-cli-1",level:2},{value:"Components of CLI",id:"components-of-cli",level:2},{value:"Contributing to CLI",id:"contributing-to-cli",level:2}],m={toc:c};function d(e){var t=e.components,s=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"about-swa-cli"},"About SWA CLI"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Static Web Apps (SWA) CLI")," is an open-source commandline tool that streamlines local development and deployment for Azure Static Web Apps."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Find it on npm: ",(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@azure/static-web-apps-cli"},"@azure/static-web-apps-cli")),(0,i.kt)("li",{parentName:"ul"},"Get Started: ",(0,i.kt)("a",{parentName:"li",href:"https://azure.github.io/static-web-apps-cli/docs/use/install"},"Install the SWA CLI")),(0,i.kt)("li",{parentName:"ul"},"Contribute: ",(0,i.kt)("a",{parentName:"li",href:"https://azure.github.io/static-web-apps-cli/docs/contribute/developer"},"Build from Source"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/azure/static-web-apps-cli/issues"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat",alt:"contributions welcome"}))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"static-web-apps"},"Static Web Apps"),(0,i.kt)("p",null,"Azure Static Web Apps is a turnkey service for modern full-stack applications with pre-built or pre-rendered front-ends, and serverless backends. It became ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/updates/azure-static-web-apps-is-now-generally-available/?WT.mc_id=30daysofswa-61155-cxall"},"generally available in May 2021"),"."),(0,i.kt)("p",null,"The Static Web Apps architecture views web apps as two components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"static content")," like HTML, CSS, JS and media assets"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"dynamic API")," for client interactions requiring data or processing")),(0,i.kt)("p",null,"This allows the architecture to scale each component using technologies best suited to its type and purpose. Static content is hosted in globally-distributed content servers for fast delivery. Dynamic APIs are implemented using a serverless architecture, for cost-effective scaling on-demand."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Static Web Apps Architecture",src:a(8273).Z,width:"596",height:"441"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Developer benefits to using Static Web Apps"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"works with ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/front-end-frameworks"},"popular web frameworks and static site generators")),(0,i.kt)("li",{parentName:"ul"},"quickstarts with ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=vanilla-javascript"},"VS Code, Azure Portal and CLI")," options"),(0,i.kt)("li",{parentName:"ul"},"automated CI/CD with ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/getting-started?tabs=vanilla-javascript"},"GitHub"),", ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/gitlab?tabs=vanilla-javascript"},"GitLab")," and ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/bitbucket?tabs=vanilla-javascript"},"Bit Bucket")," options.")),(0,i.kt)("p",null,"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/"},"Azure Static Web Apps Documentation")," for more information."),(0,i.kt)("h2",{id:"about-swa-cli-1"},"About SWA CLI"),(0,i.kt)("p",null,"The Static Web Apps CLI (",(0,i.kt)("strong",{parentName:"p"},"SWA CLI")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"swa"),") is an ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/static-web-apps-cli"},"open-source")," command-line tool to streamline the local development experience for ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/static-web-apps"},"Azure Static Web Apps")," - from setup to deployment."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Key Features of SWA CLI"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Serve static app assets, or proxy to your app dev server"),(0,i.kt)("li",{parentName:"ul"},"Serve API requests or proxy to APIs in Azure Functions Core Tools"),(0,i.kt)("li",{parentName:"ul"},"Emulate authentication and authorization (with mock responses)"),(0,i.kt)("li",{parentName:"ul"},"Emulate Static Web Apps configuration (for routing & role-based auth)"),(0,i.kt)("li",{parentName:"ul"},"Deploy to Azure Static Web Apps (streamlined develop-deploy workflow)")),(0,i.kt)("h2",{id:"components-of-cli"},"Components of CLI"),(0,i.kt)("p",null,"The figure illustrates the high-level architecture for the Static Web Apps CLI, identifying the key components and their relationships:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Static Web Apps CLI Architecture",src:a(1836).Z,width:"1000",height:"654"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. Reverse Proxy:")," This is the heart of SWA CLI. It intercepts and forwards HTTP requests to the right components based on the purpose:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/.auth/**")," requests => forwarded to the Auth emulator server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/api/**")," requests => forwarded to ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost")," functions (if present)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/**")," => all other requests forwarded to the static assets content server.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2. Authentication Server (Emulator):")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Emulates auth flow"),(0,i.kt)("li",{parentName:"ul"},"Returns mock responses.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3. Static Content Server"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Serves static assets (HTML, CSS, JS, media files)"),(0,i.kt)("li",{parentName:"ul"},"Useful for local testing, validation of user experience"),(0,i.kt)("li",{parentName:"ul"},"Default target for requests not handled by other components")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4. Serverless API server"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Useful for local API testing (if used)"),(0,i.kt)("li",{parentName:"ul"},"Requires (and has API endpoints served by) Azure Functions Core Tools.")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Always test on Azure for production!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The Static Web Apps CLI is a convenience for local development and testing. It uses ",(0,i.kt)("em",{parentName:"p"},"emulated")," services so differences from real-world behaviors are to be expected. Always test final application on Azure using preview and production environments, to validate behavior."))),(0,i.kt)("h2",{id:"contributing-to-cli"},"Contributing to CLI"),(0,i.kt)("p",null,"This is an open-source project made for the benefit of our developer community. Your feedback and contributions are key to its success."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Here are some ways to help:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Discovered buggy or unusual behavior? ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Azure/static-web-apps-cli/issues/new?assignees=&labels=&template=bug_report.md&title="},"Send us a bug report")),(0,i.kt)("li",{parentName:"ul"},"Have a feature request? ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Azure/static-web-apps-cli/issues/new?assignees=&labels=&template=feature_request.md&title="},"Send us a Feature Request")),(0,i.kt)("li",{parentName:"ul"},"Found a security vulnerability? ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Azure/static-web-apps-cli/security/policy"},"Report Security Issues")),(0,i.kt)("li",{parentName:"ul"},"Have other questions or comments? ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Azure/static-web-apps-cli/discussions"},"Post to our Discussions board")),(0,i.kt)("li",{parentName:"ul"},"Posting questions to Stack Overflow? ",(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/tagged/swa-cli"},"Post to the swa-cli tag"))),(0,i.kt)("p",null,"Contribute directly to the project by fixing bugs, writing (or improving) documentation, and proposing (or implementing) new features. To start:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Review our ",(0,i.kt)("a",{parentName:"li",href:"/docs/contribute/intro"},"Contributor Guidelines"),"!"),(0,i.kt)("li",{parentName:"ul"},"Learn to ",(0,i.kt)("a",{parentName:"li",href:"/docs/contribute/intro"},"Build Project From Source"),"!")),(0,i.kt)("p",null,"Thank you for your continued support! \u2665\ufe0f"))}d.isMDXComponent=!0},8273:function(e,t,a){t.Z=a.p+"assets/images/swa-arch-41d0e428dab8a7da10950b590d54c886.png"},1836:function(e,t,a){t.Z=a.p+"assets/images/swa-cli-arch-ccaf1b58acff282d6d98ef5df5b5d609.png"}}]);