/*! For license information please see vendors~main.65c4ca50d1cc011171e9.manager.bundle.js.LICENSE.txt */
    text-align: center;
`,Container=theming_dist_esm.styled.div`
    display: flex;
    button {
        margin-left: 15px;
        color: #999;
    }
`,TooltipWrapper=theming_dist_esm.styled.div`
& > div {
  width: auto;
}
`;var sdk_dist=__webpack_require__(1049);let cachedUser;const zeplinCache=new Map;function getZeplinToken(){return localStorage.getItem("storybook_zeplin:access_token")||ZEPLIN_TOKEN}const zeplinApi=new sdk_dist.ZeplinApi(new sdk_dist.Configuration({accessToken:getZeplinToken}),ZEPLIN_API_URL);var react_dom=__webpack_require__(163);var components_OverlayPortal=({children:children})=>{const overlay=(()=>{const previewWrapper=document.querySelector("#storybook-preview-wrapper");let overlay=previewWrapper.querySelector("#storybook-zeplin-preview");if(!overlay){const imageContainer=document.createElement("div");imageContainer.id="storybook-zeplin-preview",previewWrapper.appendChild(imageContainer),overlay=imageContainer}return overlay})();return Object(react_dom.createPortal)(children,overlay)};function OverlayButtons(props){const{onToggleOverlay:onToggleOverlay,onToggleLock:onToggleLock,onToggleDifference:onToggleDifference,overlayIsOpen:overlayIsOpen,overlayIsLocked:overlayIsLocked,showDifference:showDifference}=props,additionalOptions=overlayIsOpen&&react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(ToggleIconButton,{active:overlayIsLocked,className:"iconButton",title:overlayIsLocked?"Unlock overlay":"Lock overlay",onClick:onToggleLock},react_default.a.createElement(icon.a,{icon:overlayIsLocked?"lock":"unlock"})),react_default.a.createElement(ToggleIconButton,{active:showDifference,className:"iconButton",title:"Show difference",onClick:onToggleDifference},react_default.a.createElement(icon.a,{icon:"mirror"})));return react_default.a.createElement(OverlayButtons_Container,null,react_default.a.createElement(ToggleIconButton,{active:overlayIsOpen,className:"iconButton",title:overlayIsOpen?"Hide overlay":"Show overlay",onClick:onToggleOverlay},react_default.a.createElement(icon.a,{icon:overlayIsOpen?"eyeclose":"eye"})),additionalOptions)}const OverlayButtons_Container=theming_dist_esm.styled.div`
    display: flex;
    button {
        margin-right: 15px;
    }
`,ToggleIconButton=Object(theming_dist_esm.styled)(bar_button.a)`
    color: ${props=>props.active?props.theme.barSelectedColor:props.theme.barTextColor}
`,movementReducer=(state,offset)=>({x:state.x+offset.x,y:state.y+offset.y}),DraggableArea=theming_dist_esm.styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`,OverlayElement=theming_dist_esm.styled.img`
  position: absolute;
  left: 0;
  top: 0;
  cursor: move;
  transform-origin: top left;
`;var components_OverlayImage=({url:url,opacity:opacity,scaling:scaling,isLocked:isLocked,showDifference:showDifference})=>{const initialPosition="padded"===Object(dist_esm.n)("layout","padded")?16:0,[position,updatePosition]=Object(react.useReducer)(movementReducer,{x:initialPosition,y:initialPosition}),[mouseDown,setMouseDown]=Object(react.useState)(!1);Object(react.useEffect)((()=>{const handleMouseUp=()=>setMouseDown(!1);return window.addEventListener("mouseup",handleMouseUp),()=>window.removeEventListener("mouseup",handleMouseUp)}),[]),Object(react.useEffect)((()=>{const handleMouseMove=e=>{updatePosition({x:e.movementX,y:e.movementY})};return mouseDown&&window.addEventListener("mousemove",handleMouseMove),()=>window.removeEventListener("mousemove",handleMouseMove)}),[mouseDown]),Object(react.useEffect)((()=>{const handleKeyDown=event=>{event.shiftKey&&"ArrowUp"===event.key&&updatePosition({x:0,y:-1}),event.shiftKey&&"ArrowDown"===event.key&&updatePosition({x:0,y:1}),event.shiftKey&&"ArrowRight"===event.key&&updatePosition({x:1,y:0}),event.shiftKey&&"ArrowLeft"===event.key&&updatePosition({x:-1,y:0})};return isLocked||window.addEventListener("keydown",handleKeyDown),()=>window.removeEventListener("keydown",handleKeyDown)}),[isLocked]);return react_default.a.createElement(react_default.a.Fragment,null,mouseDown&&react_default.a.createElement(DraggableArea,null),react_default.a.createElement(OverlayElement,{src:url,draggable:!1,onMouseDown:()=>setMouseDown(!0),style:{transform:`translate(${position.x}px, ${position.y}px) scale(${scaling})`,opacity:showDifference?1:opacity,pointerEvents:isLocked?"none":"all",mixBlendMode:showDifference?"difference":"normal"}}))};const initialState={showOverlay:!1,lockOverlay:!1,showDifference:!1,overlayScaling:.5,opacity:1};var components_OverlayPanel=({imageUrl:imageUrl})=>{const[state,setState]=Object(react.useReducer)(((state,newState)=>({...state,...newState})),initialState),{showOverlay:showOverlay,lockOverlay:lockOverlay,showDifference:showDifference,overlayScaling:overlayScaling,opacity:opacity}=state,selectScaling=Object(react.useCallback)((event=>{setState({overlayScaling:event.target.value})}),[]);return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement(OverlayButtons,{overlayIsOpen:showOverlay,overlayIsLocked:lockOverlay,showDifference:showDifference,onToggleOverlay:()=>{setState({showOverlay:!showOverlay})},onToggleLock:()=>{setState({lockOverlay:!lockOverlay})},onToggleDifference:()=>{setState({showDifference:!showDifference})}}),showOverlay&&react_default.a.createElement(OverlayOptions,null,"Opacity",react_default.a.createElement(Input,{type:"range",min:"0",max:"1",step:"0.01",value:opacity,onChange:event=>{setState({opacity:event.currentTarget.value})}}),"Scaling",react_default.a.createElement(Select,{onChange:selectScaling,value:overlayScaling},react_default.a.createElement("option",{value:.5},"x0.5"),react_default.a.createElement("option",{value:1},"x1"),react_default.a.createElement("option",{value:2},"x2"))),showOverlay&&react_default.a.createElement(components_OverlayPortal,null,react_default.a.createElement(components_OverlayImage,{url:imageUrl,opacity:opacity,isLocked:lockOverlay,scaling:overlayScaling,showDifference:showDifference})))};const Select=theming_dist_esm.styled.select`
    margin-left: 15px;
`,Input=theming_dist_esm.styled.input`
  margin-right: 30px;
  margin-left: 15px;
  width: 100%;
`,OverlayOptions=theming_dist_esm.styled.div`
    margin-left: 15px;
    display: flex;
    align-items: center;
`,ZeplinPanel_initialState={selectedLink:"",zeplinData:null,user:null,zoomLevel:1,loading:!0,error:null};var components_ZeplinPanel=({zeplinLink:zeplinLink,onLogout:onLogout})=>{var _a;const[state,setState]=Object(react.useReducer)(((state,newState)=>({...state,...newState})),ZeplinPanel_initialState),{selectedLink:selectedLink,zeplinData:zeplinData,zoomLevel:zoomLevel,loading:loading,error:error,user:user}=state,designLink=Array.isArray(zeplinLink)?selectedLink||(null===(_a=zeplinLink[0])||void 0===_a?void 0:_a.link):zeplinLink,fetchZeplinResource=async()=>{if(!designLink){const formattedValue=JSON.stringify(zeplinLink,null,2);return void setState({loading:!1,error:`Zeplin links are either missing or malformed. Received ${formattedValue}`})}setState({loading:!0});const data=await async function getZeplinResource(zeplinLink){var _a,_b;const cachedValue=zeplinCache.get(zeplinLink);if(cachedValue)return cachedValue;const linkProperties=Object(dist.getZeplinLinkProperties)(zeplinLink,{web:ZEPLIN_WEB_BASE,app:ZEPLIN_APP_BASE});try{switch(linkProperties.type){case dist.RESOURCE_TYPES.PROJECT_COMPONENT:{const{data:data}=await zeplinApi.components.getProjectComponent(linkProperties.pid,linkProperties.coid);return zeplinCache.set(zeplinLink,data),data}case dist.RESOURCE_TYPES.STYLEGUIDE_COMPONENT:{const{data:data}=await zeplinApi.components.getStyleguideComponent(linkProperties.stid,linkProperties.coid);return zeplinCache.set(zeplinLink,data),data}case dist.RESOURCE_TYPES.SCREEN:{const{data:data}=await zeplinApi.screens.getScreen(linkProperties.pid,linkProperties.sid);return zeplinCache.set(zeplinLink,data),data}default:return{error:"Zeplin link is invalid."}}}catch(e){return{error:(null===(_b=null===(_a=e.response)||void 0===_a?void 0:_a.data)||void 0===_b?void 0:_b.message)||e.message}}}(designLink);setState({loading:!1,error:"error"in data?data.error:void 0,zeplinData:"error"in data?void 0:data})},fetchUser=async()=>{const data=await async function getUser(){var _a,_b;if(cachedUser)return cachedUser;try{const{data:data}=await zeplinApi.users.getCurrentUser();return cachedUser=data,data}catch(e){return{error:(null===(_b=null===(_a=e.response)||void 0===_a?void 0:_a.data)||void 0===_b?void 0:_b.message)||e.message}}}();setState({user:"error"in data?void 0:data})};Object(react.useEffect)((()=>{fetchZeplinResource()}),[zeplinLink,selectedLink]),Object(react.useEffect)((()=>{fetchUser()}),[]);const selectZeplinLink=Object(react.useCallback)((event=>{setState({selectedLink:event.target.value})}),[]);if(!zeplinLink||zeplinLink.length<=0)return react_default.a.createElement(ZeplinPanel_Message,null,react_default.a.createElement("strong",null,"zeplinLink")," is not provided for this story.");if(loading)return react_default.a.createElement(ZeplinPanel_Message,null,"Loading…");if(error)return react_default.a.createElement(Rows,null,react_default.a.createElement("p",null,error),react_default.a.createElement("p",null,(null==user?void 0:user.username)&&react_default.a.createElement(react_default.a.Fragment,null,"You are currently logged in as ",react_default.a.createElement("strong",null,null==user?void 0:user.username),". "),"If you prefer using another account, you can ",react_default.a.createElement(link_link.a,{onClick:onLogout},"log out")," first."));if(!zeplinData)return react_default.a.createElement(ZeplinPanel_Message,null,react_default.a.createElement("strong",null,"zeplinData")," is not provided for this story.");const{name:name,image:{originalUrl:originalUrl,width:width,height:height},description:description,updated:updated}=zeplinData,LinksSection=Array.isArray(zeplinLink)&&react_default.a.createElement(ZeplinPanel_Select,{onChange:selectZeplinLink,value:designLink},zeplinLink.map((({name:name,link:link})=>react_default.a.createElement("option",{key:name,value:link},name))));return react_default.a.createElement(ZeplinPanel_Container,null,react_default.a.createElement(Header,null,LinksSection,react_default.a.createElement(ResourceName,{title:name},name),updated&&react_default.a.createElement("i",null,"Updated ",function relativeDate(date){const delta=Math.round(((new Date).getTime()-new Date(date).getTime())/1e3);let result;return result=delta<120?"now":delta<3600?Math.floor(delta/60)+"min ago":delta<86400?Math.floor(delta/3600)+"h ago":delta<172800?"yesterday":delta<604800?Math.round(delta/86400)+"d ago":delta<2678400?Math.round(delta/604800)+"w ago":delta<32140800?Math.round(delta/2678400)+"mth ago":Math.round(delta/32140800)+"y ago",result}(1e3*updated)),react_default.a.createElement(HeaderButtons,{username:null==user?void 0:user.username,onLogout:onLogout,onZoomIn:()=>{setState({zoomLevel:1.25*zoomLevel})},onZoomOut:()=>{setState({zoomLevel:.75*zoomLevel})},onZoomReset:()=>{setState({zoomLevel:1})}})),react_default.a.createElement(Divider,null),react_default.a.createElement(Header,null,react_default.a.createElement(components_OverlayPanel,{imageUrl:originalUrl})),react_default.a.createElement(Divider,null),react_default.a.createElement(ImageContainer,null,react_default.a.createElement("a",{href:designLink,rel:"noopener noreferrer",target:"_blank",title:name},react_default.a.createElement("img",{style:{transform:`scale(${zoomLevel})`},src:originalUrl,alt:name,width:width,height:height}))),description&&react_default.a.createElement(Footer,null,description))};const ZeplinPanel_Container=theming_dist_esm.styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`,Header=theming_dist_esm.styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
`,ResourceName=theming_dist_esm.styled.strong`
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    flex: 1;
    margin-right: 15px;
`,ImageContainer=theming_dist_esm.styled.div`
    overflow: auto;
    flex: 1;
    padding: 0 15px 15px;
    img {
        transform-origin: left top 0px;
    }
`,Divider=theming_dist_esm.styled.hr`
    margin: 0 0 1px 0;
    &:last-of-type {
        margin-bottom: 15px;
    }
`,ZeplinPanel_Message=theming_dist_esm.styled.p`
    margin: 15px;
`,Rows=theming_dist_esm.styled.div`
    margin: 15px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    p {
        margin: 0;
    }
    p:first-child {
        color: red;
    }
`,ZeplinPanel_Select=Object(theming_dist_esm.styled)(esm_form.a.Select)`
    margin-right: 15px;
`,Footer=theming_dist_esm.styled.footer`
    padding: 12px 15px;
    background-color: #f6f9fc;
`;var Button=__webpack_require__(459);const PATForm=({onSubmit:onSubmit})=>{const[token,setToken]=Object(react.useState)("");return react_default.a.createElement(PATForm_Rows,null,react_default.a.createElement(StyledForm,{onSubmit:e=>{e.preventDefault(),onSubmit(token)}},react_default.a.createElement(StyledInput,{value:token,placeholder:"Personal access token",onChange:({target:target})=>{var _a;return setToken(null===(_a=target)||void 0===_a?void 0:_a.value)}}),react_default.a.createElement(Button.a,{type:"submit",primary:!0,small:!0},"Save")),react_default.a.createElement("div",null,"You can create personal access token from the web app under"," ",react_default.a.createElement(link_link.a,{cancel:!1,href:"https://app.zeplin.io/profile/developer",target:"_blank",rel:"noopener noreferrer"},"Developer")," ","tab in your profile page."))},PATForm_Rows=theming_dist_esm.styled.div`
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 22px;
`,StyledForm=Object(theming_dist_esm.styled)(esm_form.a)`
    display: flex;
    flex-direction: row;
    gap: 15px;
`,StyledInput=Object(theming_dist_esm.styled)(esm_form.a.Input)`
    flex: 1;
`,MainPanel=({zeplinLink:zeplinLink})=>{const[loggedIn,setLoggedIn]=Object(react.useState)(function isLoggedIn(){return Boolean(getZeplinToken())}());return loggedIn?react_default.a.createElement(components_ZeplinPanel,{zeplinLink:zeplinLink,onLogout:()=>{!function logout(){localStorage.removeItem("storybook_zeplin:access_token"),cachedUser=void 0,zeplinCache.clear()}(),setLoggedIn(!1)}}):react_default.a.createElement(PATForm,{onSubmit:newToken=>{!function login(token){localStorage.setItem("storybook_zeplin:access_token",token)}(newToken),setLoggedIn(!0)}})};esm.a.register("zeplin",(async api=>{esm.a.add("zeplin/panel",{type:types.a.PANEL,title:"Zeplin",paramKey:"zeplinLink",render:({active:active,key:key})=>{const zeplinLink=Object(dist_esm.n)("zeplinLink",null);return react_default.a.createElement(addon_panel.a,{active:active,key:key},react_default.a.createElement(MainPanel,{zeplinLink:zeplinLink}))}});const globalContextPromise=Object(dist.getGlobalContext)(window,{web:ZEPLIN_WEB_BASE,app:ZEPLIN_APP_BASE},1/0);lt_default()(api.getCurrentVersion().version,"5.0.0")?messenger.postError("ready",{message:"version is less than 5.0.0",extra:api.getCurrentVersion()}):(messenger.respondOnMessage("stories",(async()=>Object(dist.getStories)(await globalContextPromise))),messenger.respondOnMessage("story-detail",(async data=>{var _a;return Object(dist.getStoryDetail)(null===(_a=data.payload)||void 0===_a?void 0:_a.id,await globalContextPromise)})),messenger.postMessage("ready"))}))},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return AddonPanel}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),useUpdate=function useUpdate(update,value){var previousValue=function usePrevious(value){var ref=Object(react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return Object(react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){ref.current=value}),[value]),ref.current}(value);return update?value:previousValue},AddonPanel=function AddonPanel(_ref){var active=_ref.active,children=_ref.children;return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{hidden:!active,style:{transform:"translateX(0px)"}},useUpdate(active,children))};AddonPanel.displayName="AddonPanel"}]]);