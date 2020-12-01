(this["webpackJsonpny-applicator-forecast"]=this["webpackJsonpny-applicator-forecast"]||[]).push([[0],{124:function(t,e,a){},125:function(t,e,a){},144:function(t,e,a){"use strict";a.r(e);var n=a(7),o=a(0),i=a.n(o),r=a(41),s=a.n(r),c=a(35),l=a(22),p=a(28),u=a(31),h=a(30),d=a(80),b=a(175),j=a(16),O=a(177),f=a(44),m=a.n(f),x=a(60),v=a(18),g=a(38),y=a(178),C=a(172),w=a(176),k=a(173),S=a(170);var T=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).getActiveTabIndex=function(){return console.log(t.props.history),console.log(t.props.history.location.pathname),"/"===t.props.history.location.pathname||"/forecast"===t.props.history.location.pathname?0:"/about"===t.props.history.location.pathname?1:void 0},t.handleChange=function(e,a){0===a?t.props.history.push("/"):t.props.history.push("/about")},t.handleChangeIndex=function(e){t.setState({value:e})},t}return Object(p.a)(a,[{key:"render",value:function(){var t=this,e=this.props.classes;return Object(n.jsx)("div",{className:e.root,children:Object(n.jsxs)(y.a,{position:"static",color:"inherit",children:[Object(n.jsxs)(C.a,{children:[Object(n.jsxs)("div",{className:e.titleLong,onClick:function(){t.props.history.push("/")},children:[Object(n.jsx)(S.a,{variant:"h1",className:e.headerText,children:"Nutrient Applicator Forecast For New York State"}),Object(n.jsx)(S.a,{variant:"h2",className:e.subHeaderText,children:"Decision support for managing nutrient runoff risk"})]}),Object(n.jsxs)("div",{className:e.titleShort,onClick:function(){t.props.history.push("/")},children:[Object(n.jsx)(S.a,{variant:"h1",className:e.headerText,children:"NYS Applicator Forecast"}),Object(n.jsx)(S.a,{variant:"h2",className:e.subHeaderText,children:"Support for managing runoff risk"})]}),Object(n.jsx)("section",{className:e.rightToolbar,children:Object(n.jsxs)(w.a,{value:this.getActiveTabIndex(),onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",variant:"standard",children:[Object(n.jsx)(k.a,{classes:{root:e.tab},label:"FORECAST",value:0}),Object(n.jsx)(k.a,{classes:{root:e.tab},label:"ABOUT",value:1})]})})]}),Object(n.jsx)("div",{className:e.bottomToolbar,children:Object(n.jsxs)(w.a,{value:this.getActiveTabIndex(),onChange:this.handleChange,indicatorColor:"primary",textColor:"primary",variant:"standard",children:[Object(n.jsx)(k.a,{label:"FORECAST",value:0}),Object(n.jsx)(k.a,{label:"ABOUT",value:1})]})})]})})}}]),a}(i.a.Component),A=Object(v.g)(Object(j.a)((function(t){return{root:{display:"flex"},appBar:{marginLeft:0},tab:{minWidth:120,width:120},headerText:{color:m.a[800],fontSize:"26px",fontWeight:"bold",marginBottom:"4px"},subHeaderText:{color:m.a[800],fontSize:"16px"},rightToolbar:Object(g.a)({marginLeft:"auto",marginRight:0},t.breakpoints.down("sm"),{display:"none"}),bottomToolbar:Object(g.a)({},t.breakpoints.up("md"),{display:"none"}),titleLong:Object(g.a)({cursor:"pointer"},t.breakpoints.down("xs"),{display:"none"}),titleShort:Object(g.a)({cursor:"pointer"},t.breakpoints.up("sm"),{display:"none"}),toolbar:t.mixins.toolbar}}))(T)),I=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={},n}return Object(p.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:"About Page"})}}]),a}(o.Component),M=a(174),N=a(1),D=a.n(N),V=function(t){var e=t.lon,a=t.lat;return fetch("http://tools.climatesmartfarming.org/runoff-risk/fcst-data/?lat="+a+"&lon="+e).then((function(t){return t.json()})).then((function(t){return t||null}))};V.propTypes={lon:D.a.string.isRequired,lat:D.a.string.isRequired};var F=V,L=(a(93),a(94),a(46)),R=a(82),B=a.p+"static/media/ny_daily_runoff_risk_20200308.bab0de40.png",G="pk.eyJ1IjoiYm5iMiIsImEiOiJjazJtYTgwajQwZnFiM29waGo4NHI1MWpnIn0.Xmb6eYeJArqqBQtKkWorUQ",J={position:"absolute",top:10,left:0,padding:"10px"},W={position:"absolute",top:10,left:60,padding:"10px"},P=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).mapRef=i.a.createRef(),n.handleViewportChange=function(t){n.setState({viewport:Object(c.a)(Object(c.a)({},n.state.viewport),t)})},n.handleGeocoderViewportChange=function(t){return n.handleViewportChange(Object(c.a)(Object(c.a)({},t),{transitionDuration:1e3}))},n.handleMouseMove=function(t){n.setState({coordinates:t.lngLat,popupIsVisible:!0})},n.handleMouseOut=function(t){n.setState({popupIsVisible:!1})},n.handleMapClick=function(t){n.props.handlePointChange(t.lngLat[1],t.lngLat[0])},n.handleGeocoderLoading=function(t){n.setState({popupIsVisible:!1})},n.handleGeocoderResults=function(t){n.setState({popupIsVisible:!0})},n.mapStyle=function(t,e){return{version:8,sources:{mapbox:{type:"vector",url:"mapbox://mapbox.mapbox-streets-v8"},overlay:{type:"image",url:t,coordinates:e}},layers:[{id:"water",source:"mapbox","source-layer":"water",type:"fill",paint:{"fill-color":"#2c2c2c"}},{id:"boundaries",source:"mapbox","source-layer":"admin",type:"line"},{id:"overlay",source:"overlay",type:"raster",paint:{"raster-opacity":.85}}]}},n.state={viewport:{longitude:-76.5,latitude:42.5,zoom:6.2},coordinates:[-76.5,42.5],popupIsVisible:!1,imgsrc:B,imgcoords:[[-79.95970329697062,46.54645497007963],[-69.66501014096089,46.54645497007963],[-69.66501014096083,39.33905737461734],[-79.95970329697053,39.3390573746173]]},n}return Object(p.a)(a,[{key:"render",value:function(){var t=this,e=this.state,a=e.viewport,o=e.coordinates,i=e.popupIsVisible,r=e.imgsrc,s=e.imgcoords;return Object(n.jsx)("div",{children:Object(n.jsxs)(L.d,Object(c.a)(Object(c.a)({ref:this.mapRef},a),{},{width:"100%",height:"70vh",mapStyle:this.mapStyle(r,s),mapboxApiAccessToken:G,onViewportChange:this.handleViewportChange,onMouseMove:function(e){t.handleMouseMove(e)},onMouseOut:function(e){t.handleMouseOut(e)},onClick:function(e){t.handleMapClick(e)},children:[Object(n.jsx)("div",{className:"geo",style:W,children:Object(n.jsx)(R.a,{mapRef:this.mapRef,captureClick:!0,position:"top-right",placeholder:"Find address or location",proximity:{longitude:-76.5,latitude:42.5},onViewportChange:this.handleGeocoderViewportChange,mapboxApiAccessToken:G})}),Object(n.jsx)("div",{className:"nav",style:J,children:Object(n.jsx)(L.b,{showCompass:!1})}),i&&Object(n.jsx)(L.c,{longitude:o[0],latitude:o[1],closeButton:!1,closeOnClick:!1,anchor:"top",children:Object(n.jsxs)("div",{children:["Lon:",o[0].toFixed(3),Object(n.jsx)("br",{}),"Lat:",o[1].toFixed(3)]})})]}))})}}]),a}(o.Component),U=(a(124),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).initStateForLoading=function(){n.setState({pointData:null})},n.handlePointChange=function(t,e){n.setState({lat:t,lon:e})},n.state={variable:"runoffrisk",date:"20201130",lat:null,lon:null,pointData:null},n}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.initStateForLoading()}},{key:"componentDidUpdate",value:function(t,e){var a=this;e.lat!==this.state.lat&&e.lon!==this.state.lon&&F({lon:this.state.lon.toString(),lat:this.state.lat.toString()}).then((function(t){a.setState({pointData:t})}))}},{key:"render",value:function(){return Object(n.jsxs)(M.a,{container:!0,justify:"space-evenly",spacing:1,children:[Object(n.jsx)(M.a,{item:!0,xs:12,md:8,children:Object(n.jsx)(P,{handlePointChange:this.handlePointChange})}),Object(n.jsxs)(M.a,{item:!0,xs:12,md:3,children:[this.state.pointData&&this.state.pointData.lat,",",this.state.pointData&&this.state.pointData.lon]})]})}}]),a}(o.Component)),Y=Object(j.a)((function(t){return{root:{flexGrow:1}}}))(U),q=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={},n}return Object(p.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:"Footer"})}}]),a}(o.Component),z=(a(125),Object(d.a)({shadows:Array(25).fill("none"),palette:{primary:{main:m.a[800]},alternativeTextColor:m.a[800]},overrides:{MUIDataTableBodyRow:{root:{"&:nth-child(odd)":{backgroundColor:"#D3D3D3"}}}}})),E=function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(n.jsx)(x.a,{basename:"/runoff-risk",children:Object(n.jsx)(b.a,{theme:z,children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(A,{}),Object(n.jsxs)(v.d,{children:[Object(n.jsx)(v.b,{exact:!0,path:"/",render:function(t){return Object(n.jsx)(Y,Object(c.a)({},t))}}),Object(n.jsx)(v.b,{exact:!0,path:"/forecasts",render:function(t){return Object(n.jsx)(Y,Object(c.a)({},t))}}),Object(n.jsx)(v.b,{path:"/about",component:I}),Object(n.jsx)(v.b,{render:function(){return Object(n.jsx)(v.a,{to:"/"})}})]}),Object(n.jsx)(q,{})]})})})}}]),a}(o.Component),H=Object(j.a)((function(t){return{root:{}}}))(Object(O.a)(E)),_=(a(126),a(143),window.location.protocol,{app:new function t(){Object(l.a)(this,t)}}),Q=a(81);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(n.jsx)(Q.a,{store:_,children:Object(n.jsx)(H,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[144,1,2]]]);
//# sourceMappingURL=main.0776d658.chunk.js.map