webpackJsonp([1],{DEMg:function(t,i){},NHnr:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n("7+uW");n("S5VY");console.log(123);var a={name:"App",beforeMount:function(){console.log("beforeMount")},mounted:function(){console.log("mounted")}},o={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")(a,o,!1,function(t){n("DEMg")},null,null).exports,c=n("/ocq"),r=n("Dd8w"),l=n.n(r),u=n("NYxO"),d={name:"Board",data:function(){return{step:0,interval:null,hasInit:!0,width:100,height:100}},computed:l()({},Object(u.c)(["ant","grid"])),watch:{width:function(t){this.$store.commit("test/SET_WIDTH",t)},height:function(t){this.$store.commit("test/SET_HEIGHT",t)}},methods:{handleInit:function(){this.hasInit=!0},handleRun:function(){var t=this;this.interval||(this.interval=setInterval(function(){t.$store.dispatch("ant/move"),t.step+=1},20),document.getElementById("mario").play())},handleStep:function(){if(!this.interval){var t=document.getElementById("coin");t.pause(),t.load(),t.play(),this.$store.dispatch("ant/move"),this.step+=1}},handlePause:function(){clearInterval(this.interval),this.interval=null,document.getElementById("mario").pause()}},created:function(){console.log("create..")},mounted:function(){var t=this;console.log(12),window.addEventListener("keydown",function(i){32===i.keyCode&&t.handleStep()})}},p={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"container"},[t.hasInit?n("div",[t._m(0),t._v(" "),n("section",{staticClass:"grid-container ta-c"},[n("ul",{staticClass:"p0 dis-ib"},t._l(t.grid,function(i,e){return n("li",t._l(i,function(i,a){return n("span",{class:["cell",{black:i.isBlack},{ant:e==t.ant.location.x&&a==t.ant.location.y}]})}))}))]),t._v(" "),n("div",{staticClass:"control"},[n("p",[t._v("当前前进方向：\n        "),n("i",{staticClass:"dis-ib w40"},[t._v(t._s(t.ant.direction))])]),t._v(" "),n("p",[t._v("已走步数：\n        "),n("i",{staticClass:"dis-ib w40"},[t._v(t._s(t.step))])]),t._v(" "),n("span",{on:{click:t.handleStep}},[t._v("▶️")]),t._v(" "),n("span",{on:{click:t.handleRun}},[t._v("⏩")]),t._v(" "),n("span",{on:{click:t.handlePause}},[t._v("⏸")])])]):n("div",{staticClass:"ta-c input-wrapper"},[n("p",{staticStyle:{"margin-left":"-80px"}},[n("span",{staticClass:"dis-ib ta-r w200 mr20"},[t._v("空间宽度")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.width,expression:"width"}],staticClass:"input w100",attrs:{type:"number"},domProps:{value:t.width},on:{input:function(i){i.target.composing||(t.width=i.target.value)}}})]),t._v(" "),n("p",{staticStyle:{"margin-left":"-80px"}},[n("span",{staticClass:"dis-ib ta-r w200 mr20"},[t._v("空间高度")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.height,expression:"height"}],staticClass:"input w100",attrs:{type:"number"},domProps:{value:t.height},on:{input:function(i){i.target.composing||(t.height=i.target.value)}}})]),t._v(" "),n("button",{staticClass:"button",on:{click:t.handleInit}},[t._v("创建")])]),t._v(" "),n("audio",{attrs:{type:"audio/mpeg",src:"/static/mario.mp3",id:"mario"}}),t._v(" "),n("audio",{attrs:{type:"audio/mpeg",src:"/static/coin.mp3",id:"coin"}})])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("h1",{staticClass:"ta-c fs24"},[i("span",{staticClass:"dis-ib ant"},[this._v("🐜")]),this._v("兰顿蚂蚁🐜\n    ")])}]};var h=n("VU/8")(d,p,!1,function(t){n("afJc")},"data-v-28b81bae",null).exports;e.a.use(c.a);for(var v=new c.a({mode:"history",routes:[{path:"/",name:"LangtonAnt",component:h}]}),m={size:80,cellObj:{isBlack:!1},originBlackCells:[],originLocation:{x:40,y:40},originDirection:"down"},f={0:"up",1:"right",2:"down",3:"left"},g={up:0,right:1,down:2,left:3},_={namespaced:!0,state:{location:m.originLocation,direction:m.originDirection},actions:{move:function(t){var i=t.commit,n=t.rootState,e=n.grid,a=n.ant,o=a.direction,s=a.location,c=s.x,r=s.y,l=e[c][r].isBlack,u=g[o];if(l){i("TURN",f[(u+1)%4])}else{var d=u-1;d<0&&(d=3),i("TURN",f[d])}i("MOVE",e)}},mutations:{MOVE:function(t,i){var n=t.location,e=t.direction,a=m.size,o=n.x,s=n.y;if(function(t,i){var n=t.x,e=t.y;return 0!==n&&0!==e&&n!==i-1&&e!==i-1}(n,a)){var c=i[o][s];switch(c.isBlack=!c.isBlack,e){case"down":t.location={x:o+1,y:s};break;case"up":t.location={x:o-1,y:s};break;case"right":t.location={x:o,y:s+1};break;case"left":t.location={x:o,y:s-1}}}},TURN:function(t,i){t.direction=i}}},w=[],y=0;y<m.size;y+=1){for(var b=[],k=0;k<m.size;k+=1)b.push({isBlack:!1});w.push(b)}m.originBlackCells.forEach(function(t){var i=t.x,n=t.y;w[i][n].isBlack=!0});var x={ant:_,grid:{namespaced:!0,state:w,mutations:{SWITCH_BLACK:function(t,i){var n=i.cell,e=n.x,a=n.y,o=i.isBlack;t[e][a].isBlack=o}}},test:{namespaced:!0,state:{width:100,height:100,originBlackCells:[],originLocation:{x:50,y:50},originDirection:"down"},actions:{move:function(t){(0,t.commit)("MOVE",t.rootState.grid)}},mutations:{SET_WIDTH:function(t,i){t.width=Math.max(parseInt(i,10),10),t.originLocation.x=Math.floor(t.width/2)},SET_HEIGHT:function(t,i){t.height=Math.max(parseInt(i,10),10),t.originLocation.y=Math.floor(t.height/2)}}}};e.a.use(u.b);var C=new u.a({modules:l()({},x),strict:!1});e.a.config.productionTip=!1,new e.a({el:"#app",router:v,store:C,components:{App:s},template:"<App/>"})},S5VY:function(t,i){},afJc:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.js.map