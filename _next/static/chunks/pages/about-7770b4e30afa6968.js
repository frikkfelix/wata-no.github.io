(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[521],{9212:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t(1473)}])},8790:function(e,r,t){"use strict";t.d(r,{Z:function(){return y}});var n=t(5893),i=t(7294),a=t(3366),o=t(7462),s=t(6010),l=t(4780),c=t(948),g=t(1657),d=(0,t(8169).Z)((0,n.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),u=t(4867);function m(e){return(0,u.Z)("MuiAvatar",e)}(0,t(1588).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const v=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],f=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})((({theme:e,ownerState:r})=>(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(e.vars||e).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,o.Z)({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]})))),k=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),p=(0,c.ZP)(d,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"});var h=i.forwardRef((function(e,r){const t=(0,g.Z)({props:e,name:"MuiAvatar"}),{alt:c,children:d,className:u,component:h="div",imgProps:b,sizes:j,src:x,srcSet:y,variant:Z="circular"}=t,w=(0,a.Z)(t,v);let P=null;const S=function({crossOrigin:e,referrerPolicy:r,src:t,srcSet:n}){const[a,o]=i.useState(!1);return i.useEffect((()=>{if(!t&&!n)return;o(!1);let i=!0;const a=new Image;return a.onload=()=>{i&&o("loaded")},a.onerror=()=>{i&&o("error")},a.crossOrigin=e,a.referrerPolicy=r,a.src=t,n&&(a.srcset=n),()=>{i=!1}}),[e,r,t,n]),a}((0,o.Z)({},b,{src:x,srcSet:y})),A=x||y,_=A&&"error"!==S,I=(0,o.Z)({},t,{colorDefault:!_,component:h,variant:Z}),O=(e=>{const{classes:r,variant:t,colorDefault:n}=e,i={root:["root",t,n&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,l.Z)(i,m,r)})(I);return P=_?(0,n.jsx)(k,(0,o.Z)({alt:c,src:x,srcSet:y,sizes:j,ownerState:I,className:O.img},b)):null!=d?d:A&&c?c[0]:(0,n.jsx)(p,{className:O.fallback}),(0,n.jsx)(f,(0,o.Z)({as:h,ownerState:I,className:(0,s.Z)(O.root,u),ref:r},w,{children:P}))})),b=t(6886),j=t(5861),x=t(3795);function y(e){var r=e.image,t=e.name,i=e.title,a=e.email,o=e.phone;return(0,n.jsxs)(b.ZP,{container:!0,alignItems:"center",justifyContent:"center",spacing:1,children:[(0,n.jsx)(b.ZP,{item:!0,children:(0,n.jsx)(h,{src:r,sx:{width:164,height:164,border:"0.1px solid lightgray"}})}),(0,n.jsxs)(b.ZP,{xs:12,item:!0,sx:{textAlign:"center"},children:[(0,n.jsx)(j.Z,{variant:"h6",children:t}),(0,n.jsx)(j.Z,{variant:"overline",children:i}),a&&(0,n.jsx)(x.Z,{href:"mailto:".concat(a),children:(0,n.jsx)(j.Z,{children:a})}),o&&(0,n.jsx)(x.Z,{href:"tel:".concat(o.replace(/\s/g,"")),children:(0,n.jsx)(j.Z,{children:o})})]})]})}},7428:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var n=t(5893),i=(t(7294),t(7357)),a=t(9520),o=t(6447),s=t(5861);function l(e){var r=e.title,t=e.subtitle,l=e.height,c=void 0===l?"35vh":l;return(0,n.jsxs)(i.Z,{sx:{width:"100%",height:c,display:"flex",position:"relative",alignItems:"center"},children:[(0,n.jsx)(i.Z,{sx:{zIndex:9,width:"100%",height:"100%",objectFit:"cover",position:"absolute",background:"linear-gradient(to right top, #0128a6, #0036af, #0043b8, #0050c0, #005cc8, #0068ce, #0074d4, #0080d8, #008edb, #009cdb, #2aa8da, #4ab4d8);",backgroundPosition:"center",backgroundSize:"cover"}}),(0,n.jsx)(a.Z,{children:(0,n.jsxs)(o.Z,{spacing:3,sx:{zIndex:10,position:"relative",alignItems:"center"},children:[(0,n.jsx)(s.Z,{variant:"h2",sx:{color:"common.white"},children:r}),(0,n.jsx)(s.Z,{textAlign:"center",variant:"subtitle1",sx:{color:"common.white"},children:t})]})})]})}},3425:function(e,r,t){"use strict";var n=t(5893),i=t(9008),a=t.n(i);t(7294);r.Z=function(e){var r=e.children,t=e.title,i=void 0===t?"Wata":t,o=e.meta;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:i}),(0,n.jsx)("link",{rel:"shortcut icon",href:"/logo/logo_icon.svg"}),o]}),r]})}},8362:function(e,r,t){"use strict";t.d(r,{A8:function(){return l},gt:function(){return a},pS:function(){return o}});var n=t(8973),i=(n.kj,n._z,function(e){return"img/employees/JPEG/".concat(e,".jpg")}),a=[{image:i("gurrich"),name:"Jonas G\xfcrrich",title:"product manager"},{image:i("eirin"),name:"Eirin Kalst\xf8",title:"Forretningsutvikler"},{image:i("morten"),name:"Morten Heggelund",title:"Driftssjef"},{image:i("jens"),name:"Jens Markussen",title:"Tech Lead"},{image:i("erik"),name:"Erik Dymbe",title:"Utvikler"},{image:i("christopher"),name:"Christopher Gj\xf8v\xe5g",title:"Utvikler"},{image:i("elisabeth"),name:"Elisabeth Doan",title:"Utvikler"},{image:i("ingrid"),name:"Ingrid Aaseng",title:"Utvikler"},{image:i("frikk"),name:"Frikk Fjuk",title:"Utvikler"}],o=[{key:"knowit",image:"img/partners/knowit.png"},{key:"pipelife",image:"img/partners/pipelife.png"},{key:"innovasjon_norge",image:"img/partners/innovasjon_norge.png"},{key:"ntnu",image:"img/partners/ntnu.png"},{key:"telenor",image:"img/partners/telenor.png"}],s=function(e){return"illustrations/".concat(e,".svg")},l=[{title:"Data- og innsiktsplattform",description:"\u2018Wata\u2019 st\xe5r for Water Data, og er v\xe5r felles plattform for innsamlet data og innsikt. Her sammenfatter vi hydrometeorologisk data fra offentlig tilgjengelige kilder som Norges vassdrags- og energidirektorat, Meteorologisk institutt, og egen datainnhenting fra utplasserte sensorer i det aktuelle vassdrag. Plattformen h\xe5ndterer tilgangsstyring for private data, og all modellering og prognoser lages i denne plattformen.",illustration:s("data")},{title:"Sanntidsoverv\xe5kning",description:"All innsikt starter med kontroll over n\xe5situasjonen, og v\xe5rt mest grunnleggende produkt best\xe5r av en utplassering av m\xe5leinstrumenter og kameraoverv\xe5kning. Vi s\xf8rger for befaring, utplassering, drift og vedlikehold, slik at du til enhver tid kan danne et helhetsbilde over kritiske punkter i tilknytning vassdrag og avrenning.",illustration:s("predictive")},{title:"Integrasjonsplattform",description:"All erfaring tilsier at data m\xe5 settes i system for at dataen skal gi noe verdi. V\xe5r integrasjonsl\xf8sning samler inn, kvalitetssikrer, og kategoriserer data slik at du som bruker kan innlemme det direkte med popul\xe6re BI verkt\xf8y eller andre tredjepartsl\xf8sninger. Vi tilbyr ogs\xe5 dashboard for datautforskning i sanntid.",illustration:s("dashboard")},{title:"Farevarsel",description:"Med automatisk varsling fjernes behovet for kontinuerlig manuell overv\xe5kning. V\xe5re modeller kombinerer hydrometeorologisk data med maskinl\xe6ring for \xe5 generere prognoser om fremtidig vannstand og vannf\xf8ring, raskere og mer lokalt enn dagens hydrologiske modeller.",illustration:s("warning")},{title:"Skredders\xf8m / oppdrag",description:"Vi er bare p\xe5 begynnelsen av v\xe5r reise, og liker \xe5 si at vi har en arbeidsmetodikk for kontinuerlig innovasjon. Andre spesifikke behov som bygger p\xe5 data- og innsikt, sanntidsoverv\xe5kning, integrasjoner og farevarsel, men som ikke dekkes av v\xe5re n\xe5v\xe6rende produkter kan vi akkomodere for gjennom skreddersydde oppdrag.",illustration:s("business")}]},1473:function(e,r,t){"use strict";t.r(r);var n=t(5893),i=(t(7294),t(3425)),a=t(7428),o=t(9520),s=t(6886),l=t(8362),c=t(8790);function g(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){g(e,r,t[r])}))}return e}r.default=function(){return(0,n.jsxs)(i.Z,{title:"Om oss",children:[(0,n.jsx)(a.Z,{title:"Om oss",subtitle:"Wata ble til som et samarbeidsprosjekt mellom Pipelife og Knowit i 2021. Pipelife er Norges st\xf8rste produsent av plastr\xf8r og har spesialisert seg p\xe5 IoT-teknologi, mens Knowit er et IT-konsulentselskap med spisskompetanse p\xe5 AI og maskinl\xe6ring, digitalisering og utvikling av digitale produkter."}),(0,n.jsx)(o.Z,{sx:{py:10},children:(0,n.jsx)(s.ZP,{container:!0,spacing:6,children:l.gt.map((function(e){return(0,n.jsx)(s.ZP,{item:!0,xs:6,md:4,children:(0,n.jsx)(c.Z,d({},e))},e.name)}))})})]})}}},function(e){e.O(0,[180,774,888,179],(function(){return r=9212,e(e.s=r);var r}));var r=e.O();_N_E=r}]);