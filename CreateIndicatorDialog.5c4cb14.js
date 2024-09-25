import{n as t,D as e,t as a}from"./index.5c4cb14.js";import{b as s}from"./options.5c4cb14.js";const o=t({mixins:[e],components:{DropdownButton:a},props:{paneId:{type:String,required:!0}},data:()=>({availableScales:{},priceScaleId:"right",name:""}),mounted(){this.availableScales=s(this.$store.state[this.paneId].indicators)},methods:{submit(){this.close({name:this.name,priceScaleId:this.priceScaleId})}}},(function(){var t=this,e=t._self._c;return e("Dialog",{staticClass:"create-indicator-dialog",attrs:{size:"small",resizable:!1},on:{clickOutside:t.close},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"dialog__title"},[t._v("New indicator")])]},proxy:!0},{key:"footer",fn:function(){return[e("button",{staticClass:"btn -text mr8",on:{click:function(e){return t.close(!1)}}},[t._v("Cancel")]),e("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.submit}},[e("span",[e("i",{staticClass:"icon-check mr8"}),t._v(" Create")])])]},proxy:!0}])},[e("form",{ref:"form",on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[e("div",{staticClass:"form-group mb16"},[e("label",[t._v("Create blank indicator")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{placeholder:"Untitled"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),e("div",{staticClass:"form-group mb16"},[e("label",[t._v("Scale with")]),e("dropdown-button",{staticClass:"-outline form-control -arrow",attrs:{options:t.availableScales,placeholder:"Default scale"},model:{value:t.priceScaleId,callback:function(e){t.priceScaleId=e},expression:"priceScaleId"}})],1)])])}),[],!1,null,null,null,null).exports;export{o as default};
