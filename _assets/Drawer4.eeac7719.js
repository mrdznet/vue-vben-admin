import{a as e,i,o as s,j as t,w as o,k as r,J as d}from"./index.82957b1b.js";import"./xlsx.9d951958.js";import"./index.a054df69.js";import"./Trigger.98e610ea.js";import"./omit.f6a7e4f4.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.aed85997.js";import"./CheckOutlined.1fa89dc8.js";import{s as a}from"./index.4d75401e.js";import"./index.449c490a.js";import"./colors.757dc4a4.js";import"./index.6704e890.js";import"./RightOutlined.3c04d9c6.js";import"./types.231a34f8.js";import"./index.b5588833.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.3ebda32c.js";import"./index.e2ac5270.js";import"./index.8d103225.js";import"./UpOutlined.cd1bd02a.js";import"./index.cf36961f.js";import"./index.f9a7bb78.js";import"./index.78c9b85a.js";import"./index.c8001e10.js";import"./index.cf4bc0ce.js";import"./index.fb30cf7f.js";import"./index.cf867a3c.js";import"./index.e410f5b7.js";import"./index.1ea2cd46.js";import"./index.fe9d95e6.js";import{s as n,a as m}from"./index.57afd88d.js";import"./CloseOutlined.96ea54bd.js";import"./FullscreenOutlined.42f0d2f2.js";import"./index.d364dd82.js";import"./RightOutlined.e5ee841f.js";import"./useTimeout.c9ec92d1.js";import"./tsxHelper.265b5a74.js";import"./index.d5115b9a.js";import"./animation.42dceed5.js";import"./useScrollTo.a7ef93d5.js";import"./useAttrs.42205efa.js";import"./index.8cf17bff.js";import"./useWindowSizeFn.8b84c5f6.js";import"./index.267a6ea8.js";import"./uuid.40269c00.js";import"./download.3408c5a6.js";import{u as p}from"./useForm.045adca8.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var j=e({components:{BasicDrawer:n,BasicForm:a},setup(){const[e,{setFieldsValue:i}]=p({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[s]=m((e=>{i({field2:e.data,field1:e.info})}));return{register:s,schemas:c,registerForm:e}}});j.render=function(e,a,n,m,p,c){const j=i("BasicForm"),l=i("BasicDrawer");return s(),t(l,d(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:o((()=>[r("div",null,[r(j,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default j;