(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{314:function(n,e,o){"use strict";o.r(e);var t={name:"app",data:function(){return{model:{job:"",isNickMsg:1},whenJob:!0,whenMsg:!0}},computed:{rows:function(n){var e=this;return[{label:"任务名称",name:"job",type:"input",when:this.whenJob},{label:"是否短信",name:"isNickMsg",type:"radio",options:[{value:1,name:"否"},{value:2,name:"是"}],when:function(){return e.whenMsg}}]}}},i=o(1),l=Object(i.a)(t,function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("div",[o("iForm",{attrs:{"label-width":"100px",model:n.model}},[o("iFormRows",{attrs:{rows:n.rows}})],1),n._v(" "),o("el-button",{on:{click:function(e){n.whenJob=!n.whenJob}}},[n._v("toggle显示任务名称")]),n._v(" "),o("el-button",{on:{click:function(e){n.whenMsg=!n.whenMsg}}},[n._v("toggle显示是否短信")])],1)},[],!1,null,null,null);l.options.__file="when.vue";e.default=l.exports}}]);