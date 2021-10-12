(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{jEpz:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return s})),r.d(t,"default",(function(){return c}));r("5hJT"),r("W1QL"),r("K/PF"),r("t91x"),r("75LO"),r("PJhk");var a=r("/FXl"),o=r("TjRS"),n=r("KUxS"),p=r("yYOO");r("aD51");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/providers/geoapifr.mdx"}});var d={_frontmatter:s},l=o.a;function c(e){var t,r=e.components,c=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,["components"]);return Object(a.b)(l,i({},d,c,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"geoapifr-provider"},"GeoApiFr Provider"),Object(a.b)("p",null,"For more options and configurations, see the ",Object(a.b)("a",i({parentName:"p"},{href:"https://geo.api.gouv.fr/"}),"Geo Api FR"),"."),Object(a.b)(n.a,{__position:0,__code:'<Map provider="GeoApiFr" />',__scope:(t={props:c,DefaultLayout:o.a,Playground:n.a,Map:p.a},t.DefaultLayout=o.a,t._frontmatter=s,t),mdxType:"Playground"},Object(a.b)(p.a,{provider:"GeoApiFr",mdxType:"Map"})),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),"import { GeoApiFrProvider } from 'leaflet-geosearch';\n\nconst provider = new GeoApiFrProvider();\n\n// add to leaflet\nimport { GeoSearchControl } from 'leaflet-geosearch';\n\nmap.addControl(\n  new GeoSearchControl({\n    provider,\n  }),\n);\n")),Object(a.b)("h2",{id:"optional-parameters"},"Optional parameters"),Object(a.b)("p",null,"Geo Api FR supports a number of ",Object(a.b)("a",i({parentName:"p"},{href:"https://geo.api.gouv.fr/adresse"}),"optional parameters"),". As the api requires those parameters to be added to the url, they can be added to the ",Object(a.b)("inlineCode",{parentName:"p"},"params")," key of the provider."),Object(a.b)("p",null,"All options defined next to the ",Object(a.b)("inlineCode",{parentName:"p"},"params")," key, would have been added to the request body."),Object(a.b)("pre",null,Object(a.b)("code",i({parentName:"pre"},{className:"language-js"}),"const provider = new OpenStreetMapProvider({\n  searchUrl: 'https://api-adresse.data.gouv.fr/search',\n  reverseUrl: 'https://api-adresse.data.gouv.fr/reverse',\n  params: {\n    type: 'municipality', // limit search results to city\n    autocomplete: 1, // Use in autocomplete mode (search in prefix mode)\n    lat: 0, // Latitude in degree\n    lon: 0, // Longitude in degree\n  },\n});\n")))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/providers/geoapifr.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-providers-geoapifr-mdx-1d73c85abe7475987963.js.map