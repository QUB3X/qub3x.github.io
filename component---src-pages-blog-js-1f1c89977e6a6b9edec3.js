(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{vx99:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),o=a.n(l),n=a("Wbzz"),r=a("Bl7J"),s=a("vrFN");t.default=function(e){var t,a=e.data,l=e.location,i=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",c=a.allMarkdownRemark.nodes;return 0===c.length?o.a.createElement(r.a,{location:l,title:i},o.a.createElement(s.a,{title:"Blog"}),o.a.createElement("p",null,"No blog posts found :(")):o.a.createElement(r.a,{location:l,title:i},o.a.createElement(s.a,{title:"Blog"}),o.a.createElement("ul",{className:"layout-posts"},c.map((function(e){var t=e.frontmatter.title||e.fields.slug;return o.a.createElement("li",{key:e.fields.slug},o.a.createElement("article",{className:"layout-post",itemScope:!0,itemType:"http://schema.org/Article"},o.a.createElement("header",{className:"layout-post--header"},o.a.createElement("h2",{className:"layout-post--title"},o.a.createElement(n.Link,{to:e.fields.slug,itemProp:"url"},o.a.createElement("span",{itemProp:"headline"},t))),o.a.createElement("small",{className:"layout-post--date"},e.frontmatter.date)),o.a.createElement("section",null,o.a.createElement("p",{className:"layout-post--body",dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"})),o.a.createElement(n.Link,{to:e.fields.slug,itemProp:"url"},o.a.createElement("span",{className:"layout-post--button",itemProp:"button"},"Read more..."))))}))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-1f1c89977e6a6b9edec3.js.map