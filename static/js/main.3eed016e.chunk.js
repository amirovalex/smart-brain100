(window.webpackJsonpfacerecognitionbrain=window.webpackJsonpfacerecognitionbrain||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/brain.3f726e51.png"},35:function(e,t,a){e.exports=a(84)},40:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(17),r=a.n(s),o=(a(40),a(41),a(6)),l=a.n(o),c=a(14),m=a(8),u=a(9),g=a(11),p=a(10),h=a(12),d=(a(43),function(e){var t=e.onRouteChange;return e.isSignedIn?i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline ba3 pr3 pointer"},"Sign Out")):i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline ba3 pointer pa2"},"Sign In"),i.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline ba3 pointer pa2"},"Register"))}),b=a(32),f=a.n(b),w=(a(44),a(33)),v=a.n(w),E=function(){return i.a.createElement("div",{className:"ma4 mt0 pa3"},i.a.createElement(f.a,{className:"Tilt br2 shadow-2",options:{max:55},style:{height:150,width:150}},i.a.createElement("div",{className:"Tilt-inner pa3"},i.a.createElement("img",{alt:"",style:{paddingTop:"5px"},src:v.a}))))},N=function(e){var t=e.onInputChange,a=e.onButtonSubmit;return i.a.createElement("div",null,i.a.createElement("p",{className:"f3"},"This Magic Brain will detect any faces in your picture. Give it a try"),i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"pa4 br3 shadow-5 form center"},i.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),i.a.createElement("button",{onClick:a,className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple"},"Detect"))))},y=function(e){var t=e.name,a=e.entries;return i.a.createElement("div",null,i.a.createElement("div",{className:"white f3"},"".concat(t," , your current entry count is...")),i.a.createElement("div",{className:"white f3"},a))},C=(a(45),function(e){var t=e.imageUrl,a=e.box;return console.log(a),i.a.createElement("div",{className:"center ma"},i.a.createElement("div",{className:"absolute mt2"},i.a.createElement("img",{loading:"lazy",id:"inputimage",alt:"",src:t,width:"500px",height:"auto"}),i.a.createElement("div",{className:"bounding-box",style:{top:a.topRow?a.topRow:0,right:a.rightCol?a.rightCol:0,bottom:a.bottomRow?a.bottomRow:0,left:a.leftCol?a.leftCol:0}})))}),S=a(34),k=a.n(S),I=(a(46),function(){return i.a.createElement("div",{className:"lds-ring"},i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null),i.a.createElement("div",null))}),x=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(g.a)(this,Object(p.a)(t).call(this))).onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){a.setState({isSigningIn:!0}),a.state.isSigningIn||fetch("https://floating-ravine-20611.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then(function(e){return e.json()}).then(function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home")),a.setState({isSigningIn:!1})}).catch(function(e){return console.log(e)})},a.submitSignInOffline=function(){a.setState({isSigningIn:!0}),setTimeout(function(){a.props.loadUser({id:"1",name:"User",email:a.props.signInEmail,entries:0,joined:""}),a.props.onRouteChange("home"),a.setState({isSigningIn:!1})},1e3)},a.state={signInEmail:"",signInPassword:"",isSigningIn:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return this.state.isSigningIn?i.a.createElement("div",{className:"flex-grow-1",style:{display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement(I,null)):i.a.createElement("article",{className:"menu-background br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},i.a.createElement("main",{className:"pa4"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email:"),i.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-black hover-bg-black hover-white w-100 white",type:"email",name:"email-address",id:"email-address"})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password:"),i.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-black hover-bg-black hover-white w-100 white",type:"password",name:"password",id:"password"}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.submitSignInOffline,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib white",type:"submit",value:"Sign in"})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{onClick:function(){return e("register")},className:"pointer f6 link dim  db"},"Register")))))}}]),t}(i.a.Component),j=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(g.a)(this,Object(p.a)(t).call(this))).onNameChange=function(e){a.setState({registerName:e.target.value})},a.onEmailChange=function(e){a.setState({registerEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({registerPassword:e.target.value})},a.onSubmitRegister=function(){a.setState({isRegistring:!0}),a.state.isRegistring||fetch("https://floating-ravine-20611.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.state.registerName,email:a.state.registerEmail,password:a.state.registerPassword})}).then(function(e){return e.json()}).then(function(e){e.id&&(a.props.loadUser(e),a.props.onRouteChange("home")),a.setState({isRegistring:!1})})},a.submitRegisterOffline=function(){a.setState({isRegistring:!0}),setTimeout(function(){a.props.loadUser({id:"1",name:"User",email:a.props.registerEmail,entries:0,joined:""}),a.props.onRouteChange("home"),a.setState({isRegistring:!1})},1e3)},a.state={registerName:"",registerEmail:"",registerPassword:"",isRegistring:!1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return this.state.isRegistring?i.a.createElement("div",{className:"flex-grow-1",style:{display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement(I,null)):i.a.createElement("article",{className:"menu-background br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},i.a.createElement("main",{className:"pa4"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name:"),i.a.createElement("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-black hover-bg-black hover-white w-100 white",type:"text",name:"name",id:"name"})),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email:"),i.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-black hover-bg-black hover-white w-100 white",type:"email",name:"email-address",id:"email-address"})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password:"),i.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-black hover-bg-black hover-white w-100 white",type:"password",name:"password",id:"password"}))),i.a.createElement("div",{className:""},i.a.createElement("input",{onClick:this.submitRegisterOffline,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib white",type:"submit",value:"Register"})),i.a.createElement("div",{className:"lh-copy mt3"},i.a.createElement("p",{onClick:function(){return e("signin")},className:"pointer f6 link dim  db"},"Sign In")),i.a.createElement("div",{className:"lh-copy mt3"}))))}}]),t}(i.a.Component),R=a(18),O=a.n(R),F=new O.a.App({apiKey:"65a3206fd009407f9acdd7fdeabdc162"}),U={particles:{number:{value:147,density:{enable:!0,value_area:800}}}},P={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1,isFetchingImage:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},T=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(g.a)(this,Object(p.a)(t).call(this))).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.calculateFaceLocation=function(t){console.log(t);var a=t.outputs[0].data.regions[0].region_info.bounding_box,n=document.getElementById("inputimage");if(n&&n.height>0){console.log(n);var i=Number(n.width),s=Number(n.height);return{leftCol:a.left_col*i,topRow:a.top_row*s,rightCol:i-a.right_col*i,bottomRow:s-a.bottom_row*s}}return setTimeout(function(){e.displayFaceBox(e.calculateFaceLocation(t))},1e3),{}},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=Object(c.a)(l.a.mark(function t(){var a,n,i,s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e.state.isFetchingImage){t.next=24;break}return e.setState({imageUrl:e.state.input}),e.setState({isFetchingImage:!0}),t.next=6,fetch("https://floating-ravine-20611.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:e.state.input})});case 6:return a=t.sent,t.next=9,a.json();case 9:if("unable to work with API"===(n=t.sent)){t.next=22;break}return t.next=13,fetch("https://floating-ravine-20611.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})});case 13:return i=t.sent,t.next=16,i.json();case 16:s=t.sent,e.setState(Object.assign(e.state.user,{entries:s})),e.setState({isFetchingImage:!1}),console.log(n),t.next=23;break;case 22:e.setState({isFetchingImage:!1});case 23:return t.abrupt("return",n);case 24:t.next=29;break;case 26:t.prev=26,t.t0=t.catch(0),console.log(t.t0);case 29:case"end":return t.stop()}},t,null,[[0,26]])})),e.onHandleSubmitImage=Object(c.a)(l.a.mark(function t(){var a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,e.setState({isFetchingImage:!0}),e.state.isFetchingImage){t.next=9;break}return t.next=5,e.handleImageSearch();case 5:a=t.sent,console.log(e.state),console.log(a),e.displayFaceBox(e.calculateFaceLocation(a));case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:return t.prev=14,e.setState({isFetchingImage:!1}),t.finish(14);case 17:case"end":return t.stop()}},t,null,[[0,11,14,17]])})),e.onRouteChange=function(t){"signout"===t?e.setState(P):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.handleImageSearch=Object(c.a)(l.a.mark(function t(){var a;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({imageUrl:e.state.input}),t.next=4,F.models.predict(O.a.FACE_DETECT_MODEL,e.state.input);case 4:if(a=t.sent,console.log(a),!a){t.next=9;break}return e.setState(Object.assign(e.state.user,{entries:e.state.user.entries+1})),t.abrupt("return",a);case 9:t.next=15;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0),e.setState({isFetchingImage:!1});case 15:case"end":return t.stop()}},t,null,[[0,11]])})),e.state=P,e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.route,s=e.box;return i.a.createElement("div",{className:"App"},i.a.createElement(k.a,{className:"particles",params:U}),i.a.createElement(d,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===n?i.a.createElement("div",null,i.a.createElement(E,null),i.a.createElement(y,{name:this.state.user.name,entries:this.state.user.entries}),i.a.createElement(N,{onInputChange:this.onInputChange,onButtonSubmit:this.onHandleSubmitImage}),this.state.isFetchingImage?i.a.createElement("div",{style:{height:"200px",display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement(I,null)):i.a.createElement(C,{box:s,imageUrl:a})):"signin"===n?i.a.createElement(x,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):i.a.createElement(j,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.3eed016e.chunk.js.map