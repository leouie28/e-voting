"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[833],{8052:(t,a,e)=>{e.d(a,{Z:()=>o});var i=e(1519),n=e.n(i)()((function(t){return t[1]}));n.push([t.id,".border-bot[data-v-16f447b2]{border-bottom:1px solid #bdbdbd}.bar .bar-left[data-v-16f447b2]{padding:2px 5px;padding-right:0!important;width:25%}.bar .bar-right[data-v-16f447b2]{border-left:1px solid #bdbdbd;padding:2px 5px}.bar-right .bar-block[data-v-16f447b2]{height:40px;margin:5px 0}.bar-right .bar-block .block-content[data-v-16f447b2]{-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-name:grow-16f447b2;animation-name:grow-16f447b2;height:100%}@-webkit-keyframes grow-16f447b2{0%{width:0}to{width:100%}}@keyframes grow-16f447b2{0%{width:0}to{width:100%}}.bg[data-v-16f447b2]{background:#f08080}",""]);const o=n},909:(t,a,e)=>{e.d(a,{Z:()=>c});const i={data:function(){return{loading:!0}},props:{elect:{type:Object,default:function(){}}},methods:{pickColor:function(){return"#"+(16777215*Math.random()<<0).toString(16)},computeWidth:function(t){return t/this.elect.voters_count*90}},watch:{elect:{handler:function(t){var a=this;t&&setTimeout((function(){a.loading=!1}),1e3)}}}};var n=e(3379),o=e.n(n),r=e(8052),s={insert:"head",singleton:!1};o()(r.Z,s);r.Z.locals;const c=(0,e(1900).Z)(i,(function(){var t=this,a=t._self._c;return t.loading?a("div",{staticClass:"d-flex align-center justify-center",staticStyle:{"min-height":"80vh"}},[a("div",{staticClass:"text-center"},[a("v-progress-circular",{attrs:{size:70,width:7,color:"primary",indeterminate:""}}),t._v(" "),a("div",{staticClass:"mt-5"},[t._v("\n            Loading Information ...\n        ")])],1)]):a("div",t._l(t.elect.positions,(function(e){return a("div",{key:e.id,staticClass:"cb w-100 mb-4"},[a("div",{staticClass:"cb-title text-center"},[a("v-toolbar-title",[t._v(t._s(e.name))])],1),t._v(" "),t._l(e.candidate,(function(i,n){return a("div",{key:i.id,staticClass:"d-flex align-center bar"},[a("div",{staticClass:"bar-left justify-end d-flex align-center text-right"},[a("span",[t._v(t._s(i.name))]),t._v(" "),a("v-avatar",[a("v-icon",[t._v("mdi-account-circle")])],1)],1),t._v(" "),a("div",{staticClass:"bar-right w-100 d-flex align-center",class:n==e.candidate.length-1?"border-bot":""},[a("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[a("div",t._g(t._b({staticClass:"bar-block",style:"width:"+t.computeWidth(i.vote_count)+"%"},"div",o,!1),n),[a("div",{staticClass:"block-content bg",style:"background:"+t.pickColor()+";"})])]}}],null,!0)},[t._v(" "),a("span",[t._v(t._s(i.name+" - "+i.vote_count)+" votes")])]),t._v(" "),a("div",{staticClass:"ml-2"},[t._v(t._s(i.vote_count)+" votes")])],1)])}))],2)})),0)}),[],!1,null,"16f447b2",null).exports},6833:(t,a,e)=>{e.r(a),e.d(a,{default:()=>n});const i={components:{CustomBar:e(909).Z},data:function(){return{elect:{}}},created:function(){this.getResult()},methods:{getResult:function(){var t=this,a=this.$route.params.id;axios.get("/admin-api/election/".concat(a,"/result")).then((function(a){var e=a.data;t.elect=e}))}}};const n=(0,e(1900).Z)(i,(function(){var t=this._self._c;return t("div",{staticClass:"pa-2"},[t("v-card",{staticClass:"pa-2",attrs:{elevation:"2"}},[t("v-card-text",[t("custom-bar",{attrs:{elect:this.elect.election}})],1)],1)],1)}),[],!1,null,null,null).exports}}]);