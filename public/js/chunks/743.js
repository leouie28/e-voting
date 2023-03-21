"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[743],{5459:(t,e,a)=>{a.d(e,{Z:()=>s});var i=a(1519),n=a.n(i)()((function(t){return t[1]}));n.push([t.id,".hide[data-v-ffd75aee]{display:none}.excel[data-v-ffd75aee]{border:2px dashed grey}.excel-color[data-v-ffd75aee]{border:2px dashed #4caf50}",""]);const s=n},1685:(t,e,a)=>{a.d(e,{Z:()=>i});const i=(0,a(1900).Z)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",[t("h1",[this._v("Hello world")])])}],!1,null,null,null).exports},8417:(t,e,a)=>{a.d(e,{Z:()=>n});const i={props:{data:{type:Object,default:function(){return{title:"Table Header",isFetching:!1,keyword:""}}},options:{type:Boolean,default:function(){return!1}},hide:{type:Array,default:function(){return[]}},disable:{type:Array,default:function(){return[]}}}};const n=(0,a(1900).Z)(i,(function(){var t=this,e=t._self._c;return e("div",[e("v-toolbar",{attrs:{flat:""}},[e("v-toolbar-title",[t._v(t._s(t.data.title))]),t._v(" "),e("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),t._v(" "),t.hide.includes("refresh")?t._e():e("v-icon",{on:{click:function(e){return e.stopPropagation(),t.$emit("refresh")}}},[t._v("\n            mdi-autorenew\n            "+t._s(t.data.isFetching?"mdi-spin":"")+"\n        ")]),t._v(" "),e("v-spacer"),t._v(" "),t.hide.includes("search")?t._e():e("div",{staticClass:"d-inline mr-2"},[e("v-text-field",{attrs:{dense:"",placeholder:"Search ...","append-icon":"mdi-magnify","hide-details":""}})],1),t._v(" "),t.hide.includes("excel")?t._e():e("v-tooltip",{attrs:{bottom:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"mr-2",attrs:{color:"success",dark:""},on:{click:function(e){return e.stopPropagation(),t.$emit("importExcel")}}},"v-btn",n,!1),i),[t._v("\n                    Import Excel \n                    "),e("v-icon",[t._v("mdi-upload")])],1)]}}],null,!1,1581108941)},[t._v(" "),e("span",[t._v("Import from excel file")])]),t._v(" "),t.hide.includes("download")?t._e():e("v-tooltip",{attrs:{bottom:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"mr-2",attrs:{color:"primary",dark:""}},"v-btn",n,!1),i),[t._v("\n                    Download \n                    "),e("v-icon",[t._v("mdi-download")])],1)]}}],null,!1,158237777)},[t._v(" "),e("span",[t._v("Download "+t._s(t.data.title)+" record")])]),t._v(" "),t.hide.includes("addNew")?t._e():e("v-tooltip",{attrs:{bottom:"",color:"primary"},scopedSlots:t._u([{key:"activator",fn:function(a){var i=a.on,n=a.attrs;return[e("v-btn",t._g(t._b({staticClass:"mr-2",attrs:{color:"secondary",dark:""},on:{click:function(e){return e.stopPropagation(),t.$emit("addNew")}}},"v-btn",n,!1),i),[t._v("\n                    Create \n                    "),e("v-icon",[t._v("mdi-plus")])],1)]}}],null,!1,20837204)},[t._v(" "),e("span",[t._v("Add New")])])],1)],1)}),[],!1,null,null,null).exports},3743:(t,e,a)=>{a.r(e),a.d(e,{default:()=>m});var i=a(1685);const n={data:function(){return{payload:{isEdit:!1,student_id:"",name:"",password:"",active:"1"},orig:{isEdit:!1,student_id:"",name:"",password:"",active:"1"},rule:[function(t){return!!t||"This field is required"}]}},mounted:function(){console.log("test")},computed:{isEdit:function(){return this._getters("is_editing")}},methods:{close:function(){var t=this;this.$emit("close"),setTimeout((function(){t._commit("is_editing",!1),t.payload=JSON.parse(JSON.stringify(t.orig))}),200)},save:function(){this.payload.student_id&&this.payload.name?this.isEdit?(this.$emit("update",this.payload),this.close()):(this.$emit("save",this.payload),this.close()):alert("Important field are required")}},props:{show:{type:Boolean,default:function(){return!1}},data:{type:Object,default:function(){}}},watch:{data:{handler:function(t){t&&(this.payload=t,this.payload.active=String(t.status),console.log(this.payload))}}}};var s=a(1900);const o=(0,s.Z)(n,(function(){var t=this,e=t._self._c;return e("div",[e("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("v-card",[e("v-card-title",[t._v("Voter Info")]),t._v(" "),e("v-divider",{staticClass:"mt-0 pt-0"}),t._v(" "),e("v-card-text",{staticClass:"pb-0"},[e("v-row",[e("v-col",{attrs:{md:"12",cols:"12"}},[e("v-text-field",{attrs:{dense:"",label:"Student Id",rules:t.rule,filled:"",required:"","hide-details":"auto"},model:{value:t.payload.student_id,callback:function(e){t.$set(t.payload,"student_id",e)},expression:"payload.student_id"}})],1),t._v(" "),e("v-col",{attrs:{md:"12",cols:"12"}},[e("v-text-field",{attrs:{dense:"",label:"Name",rules:t.rule,filled:"",required:"","hide-details":"auto"},model:{value:t.payload.name,callback:function(e){t.$set(t.payload,"name",e)},expression:"payload.name"}})],1),t._v(" "),e("v-col",{attrs:{md:"12",cols:"12"}},[e("v-text-field",{attrs:{dense:"",label:"Password",filled:"",required:"","hide-details":"auto"},model:{value:t.payload.password,callback:function(e){t.$set(t.payload,"password",e)},expression:"payload.password"}})],1)],1)],1),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{text:""},on:{click:t.close}},[t._v("\n                    Close\n                ")]),t._v(" "),e("v-btn",{attrs:{color:"secondary"},on:{click:t.save}},[t._v("\n                    "+t._s(t.isEdit?"Update":"Create")+"\n                    "),e("v-icon",[t._v("mdi-"+t._s(t.isEdit?"content-save":"plus"))])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports;const r={data:function(){return{file_name:"",file:"",inserting:!1,warnDialog:!1,warningData:{}}},methods:{warning:function(){this.warnDialog=!0},onFileChange:function(t){this.file_name=t.target.files[0].name,this.file=t.target.files[0]},insertRecord:function(){var t=this;if(this.warnDialog=!1,this.file){this.inserting=!0;var e={headers:{"content-type":"multipart/form-data","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').content}},a=new FormData;a.append("file",this.file),console.log(a,"data"),axios.post("/admin-api/student/insert-excel",a,e).then((function(e){var a=e.data;t.inserting=!1,t.$emit("notify",a)})).finally((function(){setTimeout((function(){t.inserting=!1}),2e3)}))}else alert("Empty file")},closeThis:function(){var t=this;setTimeout((function(){t.$emit("close"),t.$emit("fetchPage")}),1e3)}},props:{show:{type:Boolean,default:function(){return!1}}}};var l=a(3379),c=a.n(l),d=a(5459),u={insert:"head",singleton:!1};c()(d.Z,u);d.Z.locals;const v=(0,s.Z)(r,(function(){var t=this,e=t._self._c;return e("div",[e("v-dialog",{attrs:{persistent:"","max-width":"600"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("v-card",[e("v-card-title",[t._v("Import Excel")]),t._v(" "),e("v-divider",{staticClass:"pt-0 mt-0"}),t._v(" "),e("v-card-text",[t.inserting?e("div",{staticClass:"text-center py-6"},[e("v-progress-circular",{attrs:{size:"70",indeterminate:"",color:"green"}}),t._v(" "),e("div",{staticClass:"mt-5"},[e("span",[t._v("Inserting record! Please wait...")])])],1):e("div",{class:t.file_name?"excel excel-color text-center py-6":"excel text-center py-6",on:{click:function(e){return t.$refs.file_input.click()}}},[e("input",{ref:"file_input",staticClass:"hide",attrs:{name:"file",accept:".xlsx",type:"file"},on:{change:t.onFileChange}}),t._v(" "),e("v-icon",{staticStyle:{"font-size":"80px"},attrs:{"x-large":"",color:t.file_name?"success":""}},[t._v("\n                        mdi-microsoft-excel\n                    ")]),t._v(" "),e("div",[e("v-toolbar-title",{staticClass:"text--primary"},[t._v("\n                            "+t._s(t.file_name?t.file_name:"Accept .xlsx excel file only")+"\n                        ")])],1),t._v(" "),e("v-btn",{attrs:{elevation:"0",color:"light"},on:{click:function(e){return e.stopPropagation(),t.$refs.file_input.click()}}},[e("span",{staticClass:"text-capitalize"},[t._v("Browse file")])])],1)]),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{text:"",disabled:t.inserting},on:{click:function(e){return t.$emit("close")}}},[t._v("\n                    Close\n                ")]),t._v(" "),e("v-btn",{attrs:{color:"secondary",disabled:t.inserting},on:{click:t.warning}},[t._v("\n                    Insert records\n                    "),e("v-icon",[t._v("mdi-plus")])],1)],1)],1)],1),t._v(" "),e("v-dialog",{attrs:{persistent:"","max-width":"450"},model:{value:t.warnDialog,callback:function(e){t.warnDialog=e},expression:"warnDialog"}},[e("v-card",[e("v-card-title",[t._v("\n                Warning\n                "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(e){t.warnDialog=!1}}},[e("v-icon",[t._v("mdi-close")])],1)],1),t._v(" "),e("v-card-text",{staticClass:"text-center"},[t._v("\n                Are you sure you want to insert this records?\n            ")]),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{text:""},on:{click:function(e){t.warnDialog=!1}}},[t._v("\n                    Cancel\n                ")]),t._v(" "),e("v-btn",{attrs:{color:"primary"},on:{click:t.insertRecord}},[t._v("\n                    Confirm\n                ")])],1)],1)],1)],1)}),[],!1,null,"ffd75aee",null).exports;var f=a(8417);const p={components:{DeleteDialog:i.Z,DataForm:o,ExcelForm:v,TableHeader:f.Z},data:function(){return{form:!1,excelForm:!1,data:{title:"Voters",isFetching:!1,keyword:"",filter:{}},footerPages:{"items-per-page-options":[5,10,15,20,30,40,50,100,-1]},options:{itemsPerPage:15},total:0,deleteForm:!1,showForm:!1,dialogDelete:!1,items:[],selectedItem:{},selected:[],headers:[{text:"Student Id",align:"start",sortable:!0,value:"student_id"},{text:"Name",align:"start",sortable:!0,value:"name"},{text:"Date Added",align:"start",sortable:!0,value:"created_at"},{text:"Active",align:"start",sortable:!1,value:"status"},{text:"Actions",align:"center",sortable:!1,value:"action"}]}},methods:{fetchPage:function(){var t=this;this.data.isFetching=!0;var e=this._createParams(this.options);e+=this._createFilterParams(this.data.filter),this.data.keyword&&(e=e+"&keyword="+this.data.keyword),axios.get("/admin-api/student?".concat(e)).then((function(e){var a=e.data;t.data_items=a.data,t.total=a.total,t.data.isFetching=!1}))},editItem:function(t){this._commit("is_editing",!0),this.selectedItem=t,this.form=!0},save:function(t){var e=this;this.form=!1,console.log(t),axios.post("/admin-api/student",t).then((function(t){var a=t.data;e.fetchPage(),e._newAlert(!0,a.type,a.message)})).finally((function(){e.showForm=!1,e.payload=null}))},notify:function(t){this.fetchPage(),this.excelForm=!1,this._newAlert(!0,t.type,t.message)},update:function(t){var e=this;axios.put("/admin-api/student/".concat(this.selectedItem.id),t).then((function(t){var a=t.data;e.fetchPage(),e._newAlert(!0,a.type,a.message),e.payload=null})),this.form=!1},activate:function(){},importExcel:function(){this.excelForm=!0},close:function(){this.form=!1,this.excelForm=!1,this.fetchPage()},warning:function(t){this.selectedItem=t;this._warning(!0,"Are you sure you want to delete",t.name),this.deleteForm=!0},confirm:function(){var t=this;this.warning_data.trigger=!1,axios.delete("/admin-api/student/".concat(this.selectedItem.id)).then((function(e){var a=e.data;t.fetchPage(),t._newAlert(!0,a.type,a.message)}))}}};const m=(0,s.Z)(p,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-2"},[e("v-card",{staticClass:"pa-2",attrs:{elevation:"2"}},[e("table-header",{attrs:{data:t.data,hide:["gridView","filter","download"]},on:{addNew:t.addNew,refresh:t.fetchPage,importExcel:t.importExcel,search:t.fetchPage},scopedSlots:t._u([{key:"custom_filter",fn:function(){return[e("admin-filter",{attrs:{filter:t.data.filter}})]},proxy:!0}])}),t._v(" "),e("v-data-table",{staticClass:"cursor-pointer table-fix-height clickable-item",attrs:{headers:t.headers,items:t.data_items,search:t.data.keyword,"show-select":"",loading:t.data.isFetching,"server-items-length":t.total,"footer-props":t.footerPages,options:t.options,"items-per-page":t.options.itemsPerPage,"fixed-header":""},on:{"update:options":[function(e){t.options=e},t.fetchPage],"click:row":t.viewItem},scopedSlots:t._u([{key:"item.created_at",fn:function(e){var a=e.item;return[t._v("\n                "+t._s(t.moment(a.created_at).format("YYYY-MM-DD"))+"\n            ")]}},{key:"item.status",fn:function(a){var i=a.item;return[e("v-icon",{attrs:{color:1==i.status?"success":"error"}},[t._v("mdi-"+t._s(1==i.status?"check":"close"))])]}},{key:"item.action",fn:function(a){var i=a.item;return[e("v-btn",{staticClass:"px-2",attrs:{elevation:"0",icon:"",color:"primary"},on:{click:function(e){return e.stopPropagation(),t.editItem(i)}}},[e("v-icon",[t._v("mdi-square-edit-outline")])],1),t._v(" "),e("v-btn",{staticClass:"px-2",attrs:{elevation:"0",icon:"",color:"error"},on:{click:function(e){return t.warning(i)}}},[e("v-icon",[t._v("mdi-trash-can")])],1)]}},{key:"no-data",fn:function(){return[e("div",[t._v("No Data")])]},proxy:!0}],null,!0)})],1),t._v(" "),e("data-form",{attrs:{show:t.form,data:t.selectedItem},on:{close:t.close,save:t.save,update:t.update}}),t._v(" "),e("excel-form",{attrs:{show:t.excelForm},on:{notify:t.notify,close:t.close,save:t.save}}),t._v(" "),e("Alert",{attrs:{data:t.alert_data}}),t._v(" "),e("Warning",{attrs:{data:t.warning_data},on:{close:t.close,confirm:t.confirm}})],1)}),[],!1,null,null,null).exports}}]);