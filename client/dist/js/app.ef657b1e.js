(function(t){function e(e){for(var a,i,n=e[0],d=e[1],l=e[2],m=0,u=[];m<n.length;m++)i=n[m],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&u.push(o[i][0]),o[i]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(t[a]=d[a]);c&&c(e);while(u.length)u.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],a=!0,n=1;n<s.length;n++){var d=s[n];0!==o[d]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},o={app:0},r=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],d=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var c=d;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),o=s.n(a);o.a},"0f26":function(t,e,s){"use strict";var a=s("6115"),o=s.n(a);o.a},1803:function(t,e,s){},"24fa":function(t,e,s){},3712:function(t,e,s){},"3b8a":function(t,e,s){"use strict";var a=s("3712"),o=s.n(a);o.a},"507b":function(t,e,s){"use strict";var a=s("9f57"),o=s.n(a);o.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],i={name:"App"},n=i,d=(s("034f"),s("2877")),l=Object(d["a"])(n,o,r,!1,null,null,null),c=l.exports,m=s("8c4f"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"boards"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 text-right pt-5"},[s("button",{staticClass:"btn btn-danger text-right",on:{click:t.logout}},[t._v("Logout")])]),t._v(" "),t._m(0)]),t._v(" "),s("div",{staticClass:"row text-center"},[s("div",{staticClass:"col-12"},[s("button",{staticClass:"btn btn-primary text-center",attrs:{type:"button","data-toggle":"modal","data-target":"#add-board-modal","data-whatever":"@getbootstrap"}},[t._v("Add Board")]),t._v(" "),s("div",{staticClass:"modal fade",attrs:{id:"add-board-modal",tabindex:"-1",role:"dialog","aria-labelledby":"add-board-modal-label","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(1),t._v(" "),s("div",{staticClass:"modal-body"},[s("form",{staticClass:"text-left",on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-form-label",attrs:{for:"title"}},[t._v("Title:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.title,expression:"newBoard.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",required:""},domProps:{value:t.newBoard.title},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"title",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{staticClass:"col-form-label",attrs:{for:"description"}},[t._v("Description:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBoard.description,expression:"newBoard.description"}],staticClass:"form-control",attrs:{type:"text",id:"description"},domProps:{value:t.newBoard.description},on:{input:function(e){e.target.composing||t.$set(t.newBoard,"description",e.target.value)}}})]),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])])])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},t._l(t.boards,(function(e){return s("div",{key:e._id,staticClass:"text-left ml-5 mt-5"},[s("button",{staticClass:"btn btn-secondary",on:{click:function(s){t.deleteBoard(e._id)}}},[t._v("X")]),t._v(" "),s("router-link",{staticClass:"text-dark",attrs:{to:{name:"board",params:{boardId:e._id}}}},[t._v(t._s(e.title))])],1)})))])])])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12"},[s("h1",{staticClass:"pb-4"},[t._v("Boards")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"add-board-modal-label"}},[t._v("Add Board")]),t._v(" "),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],v={name:"boards",mounted(){this.$store.dispatch("getBoards")},data(){return{newBoard:{title:"",description:""}}},computed:{boards(){return this.$store.state.boards}},methods:{addBoard(){this.$store.dispatch("addBoard",this.newBoard),this.newBoard={title:"",description:""}},logout(){this.$store.dispatch("logout")},deleteBoard(t){let e=confirm("Are you sure you\nwant to delete this?");1==e&&this.$store.dispatch("deleteBoard",t)}}},h=v,b=(s("3b8a"),Object(d["a"])(h,u,p,!1,null,null,null)),f=b.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"board container mt-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"text-left"},[s("router-link",{staticClass:"home-button",attrs:{to:{path:"/"}}},[t._v("Home")])],1),t._v(" "),s("h1",{staticClass:"pb-1"},[t._v(t._s(t.board.title))]),t._v(" "),s("p",{staticClass:"pb-4"},[t._v(t._s(t.board.description))]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.createList(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.list.title,expression:"list.title"}],attrs:{type:"text",placeholder:"List Name"},domProps:{value:t.list.title},on:{input:function(e){e.target.composing||t.$set(t.list,"title",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-primary"},[t._v("Add List")])])])]),t._v(" "),s("div",{staticClass:"row"},t._l(t.lists,(function(t){return s("div",{key:t.id,staticClass:"col-12 col-md-6 col-lg-4"},[s("List-info",{attrs:{listData:t}})],1)})))])},w=[],_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card mt-5 mb-5 pb-3",staticStyle:{width:"18rem"}},[s("div",{staticClass:"card-body"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3"},[s("button",{staticClass:"btn btn-sm btn-warning",attrs:{id:"delete-list"},on:{click:function(e){t.deleteList(t.listData)}}},[t._v("X")])]),t._v(" "),s("div",{staticClass:"col-6"},[s("h4",{staticClass:"card-title list-title"},[t._v(t._s(t.listData.title))])])]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.createTask(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.task.description,expression:"task.description"}],attrs:{type:"text",placeholder:"Add task"},domProps:{value:t.task.description},on:{input:function(e){e.target.composing||t.$set(t.task,"description",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-sm btn-primary",attrs:{type:"submit"}},[t._v("+")])])]),t._v(" "),t._l(t.tasks,(function(t){return s("div",{key:t.id,staticClass:"pt-3"},[s("task",{attrs:{taskData:t}})],1)}))],2)},y=[],C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12"},[s("div",{staticClass:"style-tasks row pb-2"},[s("button",{staticClass:"btn btn-warning btn-sm",on:{click:t.deleteTask}},[t._v("X")]),t._v(" "),s("h5",{staticClass:"col text-center",attrs:{id:"task"}},[t._v(t._s(t.taskData.description))]),t._v(" "),s("div",{staticClass:"dropdown",attrs:{id:"move-btn"}},[t._m(0),t._v(" "),s("ul",{staticClass:"dropdown-menu"},t._l(t.lists,(function(e){return s("div",{key:e.id},[s("button",{staticClass:"dropdown-item",on:{click:function(s){t.moveTask(e.id)}}},[t._v(t._s(e.title))])])})))])]),t._v(" "),t._l(t.comments,(function(t){return s("div",{key:t.id},[s("div",{},[s("comment",{attrs:{commentData:t}})],1)])})),t._v(" "),s("form",{staticClass:"form-body pt-2",on:{submit:function(e){return e.preventDefault(),t.createComment(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.comment.content,expression:"comment.content"}],attrs:{type:"text",placeholder:"Add comment",required:""},domProps:{value:t.comment.content},on:{input:function(e){e.target.composing||t.$set(t.comment,"content",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-primary btn-sm",attrs:{type:"submit"}},[t._v("+")])]),t._v(" "),s("hr")],2)},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"btn btn-secondary btn-sm dropdown-toggle",attrs:{type:"button","data-toggle":"dropdown"}},[t._v("\n\t\t\t\tMove\n\t\t\t\t"),s("span",{staticClass:"caret"})])}],$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment text-left col-12"},[s("p",{staticClass:"p-tag"},[s("button",{staticClass:"btn btn-warning btn-sm",on:{click:t.deleteComment}},[t._v("X")]),t._v("\n\t\t"+t._s(t.commentData.content)+"\n\t")])])},B=[],x={name:"comment",props:["commentData"],data(){return{}},methods:{deleteComment(){this.$store.dispatch("deleteComment",this.commentData)}}},D=x,I=(s("dac3"),Object(d["a"])(D,$,B,!1,null,"bcc58eec",null)),L=I.exports,T={name:"task",props:["taskData"],mounted(){return this.$store.dispatch("getComments",this.taskData)},data(){return{comment:{content:"",taskId:this.taskData.id,authorId:this.taskData.authorId}}},methods:{deleteTask(){this.$store.dispatch("deleteTask",this.taskData)},createComment(){let t={...this.comment};this.$store.dispatch("createComment",t),this.comment.content=""},moveTask(t){let e={task:this.taskData,newListId:t};this.$store.dispatch("moveTask",e)}},computed:{lists(){return this.$store.state.lists},comments(){return this.$store.state.comments[this.taskData.id]}},components:{comment:L}},U=T,O=(s("fcc1"),Object(d["a"])(U,C,k,!1,null,null,null)),P=O.exports,j={name:"ListInfo",props:["listData"],components:{task:P},mounted(){return this.$store.dispatch("getTasks",this.listData)},data(){return{task:{description:"",listId:this.$props.listData.id,authorId:this.$store.state.user._id,boardId:this.$props.listData.boardId}}},methods:{deleteList(t){this.$store.dispatch("deleteList",t)},createTask(){let t={...this.task};this.$store.dispatch("createTask",t),this.task.description=""}},computed:{tasks(){return this.$store.state.tasks[this.listData.id]}}},N=j,E=(s("0f26"),Object(d["a"])(N,_,y,!1,null,"cc972a18",null)),A=E.exports,S={name:"board",mounted(){this.$store.dispatch("getBoards"),this.$store.dispatch("getListsByBoard",this.$props.boardId)},components:{ListInfo:A},data(){return{list:{title:"",authorId:this.$store.state.user._id,boardId:this.$props.boardId}}},methods:{createList(){let t={...this.list};this.$store.dispatch("createList",t),this.list.title=""}},computed:{lists(){return this.$store.state.lists},board(){return this.$store.state.boards.find(t=>t._id==this.boardId)||{title:"Loading..."}}},props:["boardId"]},F=S,M=(s("507b"),Object(d["a"])(F,g,w,!1,null,"fdc35a40",null)),R=M.exports,X=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("h1",{staticClass:"pt-5 pb-5"},[t._v("Kanban")]),t._v(" "),t.loginForm?s("form",{on:{submit:function(e){return e.preventDefault(),t.loginUser(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.email,expression:"creds.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.creds.email},on:{input:function(e){e.target.composing||t.$set(t.creds,"email",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.creds.password,expression:"creds.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.creds.password},on:{input:function(e){e.target.composing||t.$set(t.creds,"password",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[t._v("Login")])]):s("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.name,expression:"newUser.name"}],attrs:{type:"text",placeholder:"name"},domProps:{value:t.newUser.name},on:{input:function(e){e.target.composing||t.$set(t.newUser,"name",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.email,expression:"newUser.email"}],attrs:{type:"email",placeholder:"email"},domProps:{value:t.newUser.email},on:{input:function(e){e.target.composing||t.$set(t.newUser,"email",e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newUser.password,expression:"newUser.password"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.newUser.password},on:{input:function(e){e.target.composing||t.$set(t.newUser,"password",e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-warning",attrs:{type:"submit"}},[t._v("Create Account")])]),t._v(" "),s("div",{staticClass:"action",on:{click:function(e){t.loginForm=!t.loginForm}}},[t.loginForm?s("p",[t._v("No account? Click here to Register")]):s("p",[t._v("Already have an account? Click here to Login")])])])},q=[],J={name:"login",data(){return{loginForm:!0,creds:{email:"",password:""},newUser:{email:"",password:"",name:""}}},beforeCreate(){this.$store.state.user._id&&this.$router.push({name:"boards"})},methods:{register(){this.$store.dispatch("register",this.newUser)},loginUser(){this.$store.dispatch("login",this.creds)}}},H=J,K=(s("d6db"),Object(d["a"])(H,X,q,!1,null,null,null)),z=K.exports;a["a"].use(m["a"]);var G=new m["a"]({routes:[{path:"/",name:"boards",component:f},{path:"/boards/:boardId",name:"board",props:!0,component:R},{path:"/login",name:"login",component:z},{path:"*",redirect:"/"}]}),Q=s("2f62"),V=s("bc3a"),W=s.n(V);let Y=location.host.includes("localhost")?"//localhost:3000/":"/",Z=W.a.create({baseURL:Y+"account/",timeout:3e3,withCredentials:!0});class tt{static async Login(t){try{let e=await Z.post("login",t);return e.data}catch(e){throw new Error(`[login failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Register(t){try{let e=await Z.post("register",t);return e.data}catch(e){throw new Error(`[registration failed] : ${e.response?e.response.data.error:"No response from server"}`)}}static async Logout(){try{await Z.delete("logout");return!0}catch(t){throw new Error(`[logout failed] : ${t.response?t.response.data.error:"No response from server"}`)}}static async Authenticate(){try{let t=await Z.get("authenticate");return t.data}catch(t){console.warn(`[Authentication failed] : ${t.response?t.response.data.error:"No response from server"}`)}}}a["a"].use(Q["a"]);let et=window.location.host.includes("localhost:8080")?"//localhost:3000/":"/",st=W.a.create({baseURL:et+"api/",timeout:7e3,withCredentials:!0});var at=new Q["a"].Store({state:{user:{},boards:[],activeBoard:{},lists:[],tasks:[],comments:[]},mutations:{resetState(t){t.user={},t.boards=[],t.activeBoard={},t.lists=[],t.tasks=[],t.comments=[]},setUser(t,e){t.user=e},addBoard(t,e){t.boards.push(e)},setBoards(t,e){t.boards=e},setLists(t,e){t.lists.push(e)},listsByBoardId(t,e){t.lists=e},setTasks(t,e){a["a"].set(t.tasks,e.listData.id,e.body)},setTask(t,e){t.tasks.push(e)},setComment(t,e){t.comments.push(e)},setComments(t,e){a["a"].set(t.comments,e.taskData.id,e.body)}},actions:{async register({commit:t,dispatch:e},s){try{let e=await tt.Register(s);t("setUser",e),G.push({name:"boards"})}catch(a){console.warn(a.message)}},async login({commit:t,dispatch:e},s){try{let e=await tt.Login(s);t("setUser",e),G.push({name:"boards"})}catch(a){console.warn(a.message)}},async logout({commit:t,dispatch:e}){try{await tt.Logout();t("resetState"),G.push({name:"login"})}catch(s){console.warn(s.message)}},getBoards({commit:t,dispatch:e}){st.get("boards").then(e=>{t("setBoards",e.data)})},addBoard({commit:t,dispatch:e},s){st.post("boards",s).then(t=>{e("getBoards")})},async deleteBoard({commit:t,dispatch:e},s){await st.delete("boards/"+s),e("getBoards")},async createList({commit:t,dispatch:e},s){let a=await st.post("lists",s);t("setLists",a.data)},async getListsByBoard({commit:t,dispatch:e},s){let a=await st.get("boards/"+s+"/lists");t("listsByBoardId",a.data)},async deleteList({commit:t,dispatch:e},s){console.log("from store delete",s.boardId),await st.delete("lists/"+s.id),e("getListsByBoard",s.boardId)},async createTask({commit:t,dispatch:e},s){let a=await st.post("tasks",s);t("setTask",a.data),e("getTasks",{id:s.listId})},async getTasks({commit:t,dispatch:e},s){let a=await st.get("lists/"+s.id+"/tasks"),o={body:a.data,listData:s};t("setTasks",o)},async deleteTask({commit:t,dispatch:e},s){await st.delete("tasks/"+s._id),e("getTasks",{id:s.listId})},async moveTask({commit:t,dispatch:e},s){console.log(s);let a=await st.put("tasks/"+s.task.id,{listId:s.newListId});console.log("res",a),e("getTasks",{id:a.data.listId}),e("getTasks",{id:s.task.listId})},async createComment({commit:t,dispatch:e},s){let a=await st.post("comments",s);t("setComment",a.data),e("getComments",{id:s.taskId})},async getComments({commit:t,dispatch:e},s){let a=await st.get("tasks/"+s.id+"/comments"),o={body:a.data,taskData:s};t("setComments",o)},async deleteComment({commit:t,dispatch:e},s){await st.delete("comments/"+s.id),e("getComments",{id:s.taskId})}}});async function ot(){let t=await tt.Authenticate();t?at.commit("setUser",t):G.push({name:"login"}),new a["a"]({router:G,store:at,render:t=>t(c)}).$mount("#app")}ot()},6115:function(t,e,s){},"85ec":function(t,e,s){},"9f57":function(t,e,s){},d6db:function(t,e,s){"use strict";var a=s("e67a"),o=s.n(a);o.a},dac3:function(t,e,s){"use strict";var a=s("1803"),o=s.n(a);o.a},e67a:function(t,e,s){},fcc1:function(t,e,s){"use strict";var a=s("24fa"),o=s.n(a);o.a}});
//# sourceMappingURL=app.ef657b1e.js.map