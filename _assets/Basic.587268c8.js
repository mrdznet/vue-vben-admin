import{a as e,r as i,i as t,o,j as r,k as s,w as a,n as d,m as n}from"./index.32a91551.js";import"./xlsx.a48e520c.js";import"./SettingOutlined.87292a41.js";import"./index.89b0d90c.js";import"./Trigger.718b7c19.js";import"./omit.3e908ff2.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.c054b14a.js";import"./CheckOutlined.6e943c23.js";import"./index.0602a9cf.js";import"./index.653a701c.js";import"./colors.0ce6be88.js";import"./index.aeff906b.js";import"./RightOutlined.94b8f1ec.js";import"./index.e8ccaaa0.js";import"./types.73855c7d.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.8f203f76.js";import"./index.73e48437.js";import"./index.64033cdb.js";import"./UpOutlined.4e49ff7f.js";import"./LeftOutlined.47449d33.js";import"./DownOutlined.e9680d82.js";import"./index.b18f0b63.js";import"./index.6d446186.js";import"./index.2c49c022.js";import"./zh_CN.0242bd16.js";import"./index.0b0aeba1.js";import"./index.9504cf4b.js";import"./CaretDownFilled.c5a5bd4b.js";import"./CheckOutlined.0616dc90.js";import"./CloseOutlined.98ded395.js";import{s as p}from"./EditTableHeaderIcon.bea0c65d.js";import"./index.d3a58b78.js";import"./LeftOutlined.840eb964.js";import"./functional.c8e5999a.js";import"./RightOutlined.f3b30548.js";import"./useContext.1701c2fc.js";import"./useTimeout.2b4d0e59.js";import"./useDebounce.9a95f792.js";import"./useEventListener.56ccf098.js";import"./useBreakpoint.e13cfb1d.js";import"./resizeEvent.015ad000.js";import"./domUtils.a7a309b4.js";import"./tsxHelper.60c80881.js";import"./useExpose.44cd7e6e.js";import"./index.875daa15.js";import"./propTypes.fc55f516.js";import"./index.904cc867.js";import"./index.daead25a.js";import"./useWindowSizeFn.4c17dd3d.js";import"./uuid.40269c00.js";import"./download.af0adc4a.js";import"./useForm.7538871d.js";import"./useFullScreen.007ac430.js";import"./index.0956157a.js";import{getBasicColumns as m,getBasicData as c}from"./tableData.8093a07a.js";var l=e({components:{BasicTable:p},setup(){const e=i(!1),t=i(!1),o=i(!0),r=i(!0);return{columns:m(),data:c(),canResize:e,loading:t,striped:o,border:r,toggleStriped:function(){o.value=!o.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){t.value=!0,setTimeout((()=>{t.value=!1}),3e3)},toggleBorder:function(){r.value=!r.value}}}});const j={class:"p-4"},u=d(" 开启loading ");l.render=function(e,i,p,m,c,l){const f=t("a-button"),b=t("BasicTable");return o(),r("div",j,[s(b,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,pagination:{pageSize:20}},{toolbar:a((()=>[s(f,{type:"primary",onClick:e.toggleCanResize},{default:a((()=>[d(n(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),s(f,{type:"primary",onClick:e.toggleBorder},{default:a((()=>[d(n(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),s(f,{type:"primary",onClick:e.toggleLoading},{default:a((()=>[u])),_:1},8,["onClick"]),s(f,{type:"primary",onClick:e.toggleStriped},{default:a((()=>[d(n(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered"])])};export default l;