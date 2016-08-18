<<<<<<< HEAD
webpackJsonp([0,1],[function(t,e,n){n(1),n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),t.exports=n(16)},function(t,e){!function(){"use strict";function t(){var t={restrict:"E",replace:!0,templateUrl:"app/components/chat-form/chat-form.html",controller:e};return t}function e(t,e,n,o,c){function r(){c.getCommands()}function a(e){t.selections.command=e}function i(e){var n=[];return"/"!==e[0]?n:(t.commands.forEach(function(t){e===t.name.substr(0,e.length)&&n.push(t)}),n)}function s(){e.sendMessage(t.senderId,t.selections.recipient.id,t.messageText),t.messageText=""}t.senderId=o.getCurrentUserId(),t.selections=n.selections,t.commands=c.commands,t.messageText="",t.getCommands=r,t.onSelect=a,t.matchCommand=i,t.sendMessage=s}angular.module("chatformdirective",["theApp","ui.bootstrap"]).directive("chatform",t),e.$inject=["$scope","MessageService","Globals","DataService","CommandService"]}()},function(t,e){angular.module("chatlistdirective",["theApp","luegg.directives"]).directive("chatlist",function(){return{restrict:"E",replace:!0,templateUrl:"app/components/chat-list/chat-list.html",scope:{list:"=chatlist"},link:function(t,e){t.$watchCollection("list",function(){var t=e.find(".chatScroll"),n=t.prop("scrollHeight");t.prop("scrollTop",n)})},controller:function(t,e,n,o,c){e.chats=[],e.selections=o.selections,e.getRecentMessages=function(){n.getRecentMessages()},e.$watch(function(){return n.chats},function(t){e.chats=t},!0),c.$on("get message",function(t,e){e.body=n.processText(e.body),n.addMessageToList(e)}),e.filterById=function(t){if(o.selections.recipient){var e=o.selections.recipient.id;return t.recipientId===e||t.senderId===e}}}}})},function(t,e){angular.module("chatsingledirective",["theApp"]).directive("chatsingle",function(t){return{restrict:"E",templateUrl:"app/components/chat-single/chat-single.html",scope:{sender:"@",body:"@",date:"@",type:"@",url:"@",video:"@",audio:"@"}}})},function(t,e){angular.module("contactlistdirective",["theApp","ui.bootstrap"]).directive("contactlist",function(){return{restrict:"E",templateUrl:"app/components/contact-list/contact-list.html",scope:{},controller:function(t,e,n,o){e.contacts=n.contacts,e.addContact=function(t){n.createContact(t)},e.getAllContacts=function(){n.getAllContacts()},e.deleteContact=function(t){n.deleteContact(t)},e.setSelectedRecipient=function(t){o.setSelectedRecipient(t)}}}})},function(t,e){angular.module("contactsingledirective",["theApp"]).directive("contactsingle",function(t){return{restrict:"E",templateUrl:"app/components/contact-single/contact-single.html",scope:{name:"@",channel:"@",isactive:"@"}}})},function(t,e){angular.module("grouplistdirective",["theApp"]).directive("grouplist",function(){return{restrict:"E",templateUrl:"app/components/group-list/group-list.html",controller:function(t,e,n){e.click=!1,e.groupFriends=[],e.searchGroupFriends=n.searchGroupFriends,e.sendGroup=function(){n.sendGroup(e.addGroupNames,e.groupFriends)},e.createGroup=function(t){e.groupFriends.push(t)},e.findContacts=function(){n.findContacts()},e.AddContact=function(){n.AddContact()}}}})},function(t,e){angular.module("groupsingledirective",["theApp"]).directive("groupsingle",function(t){return{restrict:"E",templateUrl:"app/components/group-single/group-single.html",scope:{name:"@",channel:"@",status:"@"}}})},function(t,e){!function(){"use strict";angular.module("services",[])}()},function(t,e){!function(){"use strict";function t(t,e){function n(){return+localStorage.getItem("userId")}function o(){return t.get("/contacts").then(d)["catch"](p("getContacts"))}function c(e){return t.post("/contacts",{newContactEmail:e}).then(d)["catch"](p("createContact"))}function r(e){return t({url:"/contacts",method:"DELETE",data:{contact:e},headers:{"Content-type":"application/json;charset=utf-8"}}).then(d)["catch"](p("deleteContact"))}function a(){return t.get("/message").then(d)["catch"](p("getRecentMessages"))}function i(){return t.get("/commands").then(d)["catch"](p("getCommands"))}function s(e){return t.post("/commands",e).then(d)["catch"](p("getCommands"))}function l(e,n){return t.post(e,n).then(d)["catch"](p("dispatchCommand"))}function u(t){function e(e){t(e.coords)}navigator.geolocation.getCurrentPosition(e)}function d(t){return t.data}function p(t){return function(n){e("An error has occured in "+t+".\nHTTP error: "+JSON.stringify(n))}}var g={getCurrentUserId:n,getRecentMessages:a,getContacts:o,createContact:c,deleteContact:r,getCommands:i,createCommand:s,dispatchCommand:l,getLocation:u};return g}angular.module("services").factory("DataService",t),t.$inject=["$http","$exceptionHandler"]}()},function(t,e){!function(){"use strict";function t(){function t(t){e.selections.recipient=t}var e={selections:{},setSelectedRecipient:t};return e}angular.module("services").factory("Globals",t)}()},function(t,e){!function(){"use strict";function t(t,e){function n(e){e.on("get message",function(e){t.$apply(function(){t.$broadcast("get message",e)})})}function o(t){a.emit("send message",t)}function c(){a=io.connect(),n(a),a.emit("registered",e.getCurrentUserId())}var r={addListeners:n,sendMessage:o,register:c};return r;var a}angular.module("services").factory("SocketService",t),t.$inject=["$rootScope","DataService"]}()},function(t,e){!function(){"use strict";function t(t){function e(e){t.createContact(e).then(c)}function n(){function e(t){t.forEach(c)}t.getContacts().then(e)}function o(e){t.deleteContact(e).then(r)}function c(t){a.contacts.push(t)}function r(t){for(var e=0;e<a.contacts.length;e++)if(a.contacts[e].id===t)return a.contacts.splice(e,1)[0]}var a={contacts:[],createContact:e,getAllContacts:n,deleteContact:o};return a}angular.module("services").factory("ContactService",t),t.$inject=["DataService"]}()},function(t,e){!function(){"use strict";function t(t,e,n,o){function c(){function t(t){t.forEach(i)}e.getRecentMessages().then(t)}function r(t){return t.indexOf("[:frame:]")>-1?(o.selections.frame=t.substring(10,t.length-10),console.log(o.selections.frame),"Let's look at "+t.substring(10,t.length-10)):t}function a(e,o,c){var r={senderId:e,recipientId:o,body:JSON.stringify(c),recipientType:"U"};"/"===r.body[0]?n.dispatchCommand(r).then(function(e){t.sendMessage(e)}):t.sendMessage(r)}function i(t){for(;;)try{t.body=JSON.parse(t.body)}catch(e){break}s.chats.push(t)}var s={chats:[],sendMessage:a,getRecentMessages:c,addMessageToList:i,processText:r};return s}angular.module("services").factory("MessageService",t),t.$inject=["SocketService","DataService","CommandService","Globals"]}()},function(t,e){var n=angular.module("theApp",["auth0","angular-storage","angular-jwt","ngRoute","loginController","signupController","chatformdirective","chatsingledirective","chatlistdirective","commandController","userpicdirective","contactsingledirective","contactlistdirective","services","mainCtrl","chat"]);n.config(["$routeProvider","authProvider","$httpProvider","$locationProvider","jwtInterceptorProvider",function(t,e,n,o,c){t.when("/",{templateUrl:"app/components/home/home.html"}).when("/login",{templateUrl:"login/login.html",controller:"loginController"}).when("/signup",{templateUrl:"signup/signup.html",controller:"signupController"}).when("/chat",{templateUrl:"app/views/chat.html",controller:"chatController"}).when("/commands",{templateUrl:"app/components/commands/commands.html",controller:"commandController"}),e.init({domain:"jeffreylamwork.auth0.com",clientID:"RdSGwryXzBL0bEHYoPasF9KX0hMwROjN",loginUrl:"/"}),e.on("loginSuccess",["$location","$http","profilePromise","idToken","store","SocketService",function(t,e,n,o,c,r){console.log("Login Success"),n.then(function(n){c.set("profile",n),c.set("token",o),t.path("/chat");var r=JSON.parse(window.localStorage.profile).name.split(" ");return e({method:"POST",url:"/auth",data:{email:JSON.parse(window.localStorage.profile).email,firstname:r[0],lastname:r[1]}}).then(function(e){e.data.token?(sessionStorage.setItem("token",e.data.token),localStorage.setItem("userId",e.data.id)):t.path("/")}).then(function(){t.path("/chat")})})}]),e.on("loginFailure",function(t){alert("Error"),t.path("/")}),n.interceptors.push("jwtInterceptor"),n.interceptors.push("AttachTokens")}]),angular.module("mainCtrl",["theApp"]).controller("mainCtrl",function(t,e,n,o){t.logout=function(){e.localStorage.removeItem("token"),e.sessionStorage.removeItem("token"),e.localStorage.removeItem("profile"),e.localStorage.removeItem("username"),e.localStorage.removeItem("userId"),e.localStorage.removeItem("recipient"),e.localStorage.removeItem("email"),e.location.href="/"}}),n.factory("checker",function(t,e,n){var o=function(){return!!n.sessionStorage.getItem("token")};return{isAuth:o}}),n.factory("AttachTokens",function(t){var e={request:function(e){var n=t.sessionStorage.getItem("token");return n&&(e.headers["x-access-token"]=n),e.headers["Allow-Control-Allow-Origin"]="*",e}};return e}).run(function(t,e,n,o,c,r){var a=r.get("profile");a?a.nickname:o.localStorage.getItem("userId");n.isAuth()&&c.register(),t.$on("$routeChangeStart",function(t,o,c){"/"==e.path()||"/signup"==e.path()||"/login"==e.path()?console.log("This page does not need authentication"):n.isAuth()||(console.log("not authenticated"),e.path("/"))})}),n.run(["auth",function(t){t.hookEvents()}])},function(t,e){angular.module("loginController",["theApp"]).controller("loginController",["$scope","$http","auth","$location","$window","SocketService",function(t,e,n,o,c,r){t.auth=n,t.login=function(n,a){return e({method:"POST",url:"/",data:{email:n,password:a}}).then(function(e){e.data.token?(c.sessionStorage.setItem("token",e.data.token),c.localStorage.setItem("token",e.data.token),c.localStorage.setItem("userId",e.data.id),c.localStorage.setItem("email",e.data.email),t.id=c.localStorage.getItem("userId"),r.register(),o.path("/chat")):o.path("/")})}}])},function(t,e){angular.module("signupController",["theApp"]).controller("signupController",function(t,e,n,o){t.signUp=function(t,e,n,c,r){o({method:"POST",url:"/signup",data:{firstname:t,lastname:e,email:c,password:r}}),console.log("sent post req from signup controller")}})}]);
=======
webpackJsonp([0,1],[function(t,e,n){n(1),n(2),n(3),n(4),n(5),n(6),n(7),n(8),n(9),n(10),n(11),n(12),n(13),n(14),n(15),t.exports=n(16)},function(t,e){!function(){"use strict";function t(){var t={restrict:"E",replace:!0,templateUrl:"app/components/chat-form/chat-form.html",controller:e};return t}function e(t,e,n,o,c){function r(){c.getCommands()}function a(e){t.selections.command=e}function i(e){var n=[];return"/"!==e[0]?n:(t.commands.forEach(function(t){e===t.name.substr(0,e.length)&&n.push(t)}),n)}function s(){var n=new FormData(document.querySelector(".foorm")),o=document.querySelector('[type="file"]').files[0].type.slice(-3);$.ajax({url:"/upload/"+o,type:"POST",data:n,processData:!1,contentType:!1,success:function(n){console.log(n),e.sendMessage(t.senderId,t.selections.recipient.id,n)},error:function(t){console.log(t)}})}function l(){e.sendMessage(t.senderId,t.selections.recipient.id,t.messageText),t.messageText=""}t.senderId=o.getCurrentUserId(),t.selections=n.selections,t.commands=c.commands,t.messageText="",t.getCommands=r,t.onSelect=a,t.matchCommand=i,t.sendMessage=l,t.getMedia=s}angular.module("chatformdirective",["theApp","ui.bootstrap"]).directive("chatform",t),e.$inject=["$scope","MessageService","Globals","DataService","CommandService"]}()},function(t,e){angular.module("chatlistdirective",["theApp","luegg.directives"]).directive("chatlist",function(){return{restrict:"E",replace:!0,templateUrl:"app/components/chat-list/chat-list.html",scope:{list:"=chatlist"},link:function(t,e){t.$watchCollection("list",function(){var t=e.find(".chatScroll"),n=t.prop("scrollHeight");t.prop("scrollTop",n)})},controller:function(t,e,n,o,c){e.chats=[],e.selections=o.selections,e.getRecentMessages=function(){n.getRecentMessages()},e.$watch(function(){return n.chats},function(t){e.chats=t},!0),c.$on("get message",function(t,e){n.addMessageToList(e)}),e.filterById=function(t){if(o.selections.recipient){var e=o.selections.recipient.id;return t.recipientId===e||t.senderId===e}}}}})},function(t,e){angular.module("chatsingledirective",["theApp"]).directive("chatsingle",function(t){return{restrict:"E",templateUrl:"app/components/chat-single/chat-single.html",scope:{sender:"@",body:"@",date:"@",type:"@",url:"@",video:"@",audio:"@"}}})},function(t,e){angular.module("contactlistdirective",["theApp","ui.bootstrap"]).directive("contactlist",function(){return{restrict:"E",templateUrl:"app/components/contact-list/contact-list.html",scope:{},controller:function(t,e,n,o){e.contacts=n.contacts,e.addContact=function(t){n.createContact(t)},e.getAllContacts=function(){n.getAllContacts()},e.deleteContact=function(t){n.deleteContact(t)},e.setSelectedRecipient=function(t){o.setSelectedRecipient(t)}}}})},function(t,e){angular.module("contactsingledirective",["theApp"]).directive("contactsingle",function(t){return{restrict:"E",templateUrl:"app/components/contact-single/contact-single.html",scope:{name:"@",channel:"@",isactive:"@"}}})},function(t,e){angular.module("grouplistdirective",["theApp"]).directive("grouplist",function(){return{restrict:"E",templateUrl:"app/components/group-list/group-list.html",controller:function(t,e,n){e.click=!1,e.groupFriends=[],e.searchGroupFriends=n.searchGroupFriends,e.sendGroup=function(){n.sendGroup(e.addGroupNames,e.groupFriends)},e.createGroup=function(t){e.groupFriends.push(t)},e.findContacts=function(){n.findContacts()},e.AddContact=function(){n.AddContact()}}}})},function(t,e){angular.module("groupsingledirective",["theApp"]).directive("groupsingle",function(t){return{restrict:"E",templateUrl:"app/components/group-single/group-single.html",scope:{name:"@",channel:"@",status:"@"}}})},function(t,e){!function(){"use strict";angular.module("services",[])}()},function(t,e){!function(){"use strict";function t(t,e){function n(){return+localStorage.getItem("userId")}function o(){return t.get("/contacts").then(d)["catch"](p("getContacts"))}function c(e){return t.post("/contacts",{newContactEmail:e}).then(d)["catch"](p("createContact"))}function r(e){return t({url:"/contacts",method:"DELETE",data:{contact:e},headers:{"Content-type":"application/json;charset=utf-8"}}).then(d)["catch"](p("deleteContact"))}function a(){return t.get("/message").then(d)["catch"](p("getRecentMessages"))}function i(){return t.get("/commands").then(d)["catch"](p("getCommands"))}function s(e){return t.post("/commands",e).then(d)["catch"](p("getCommands"))}function l(e,n){return t.post(e,n).then(d)["catch"](p("dispatchCommand"))}function u(t){function e(e){t(e.coords)}navigator.geolocation.getCurrentPosition(e)}function d(t){return t.data}function p(t){return function(n){e("An error has occured in "+t+".\nHTTP error: "+JSON.stringify(n))}}var g={getCurrentUserId:n,getRecentMessages:a,getContacts:o,createContact:c,deleteContact:r,getCommands:i,createCommand:s,dispatchCommand:l,getLocation:u};return g}angular.module("services").factory("DataService",t),t.$inject=["$http","$exceptionHandler"]}()},function(t,e){!function(){"use strict";function t(){function t(t){e.selections.recipient=t}var e={selections:{},setSelectedRecipient:t};return e}angular.module("services").factory("Globals",t)}()},function(t,e){!function(){"use strict";function t(t,e){function n(e){e.on("get message",function(e){t.$apply(function(){t.$broadcast("get message",e)})})}function o(t){a.emit("send message",t)}function c(){a=io.connect(),n(a),a.emit("registered",e.getCurrentUserId())}var r={addListeners:n,sendMessage:o,register:c};return r;var a}angular.module("services").factory("SocketService",t),t.$inject=["$rootScope","DataService"]}()},function(t,e){!function(){"use strict";function t(t){function e(e){t.createContact(e).then(c)}function n(){function e(t){t.forEach(c)}t.getContacts().then(e)}function o(e){t.deleteContact(e).then(r)}function c(t){a.contacts.push(t)}function r(t){for(var e=0;e<a.contacts.length;e++)if(a.contacts[e].id===t)return a.contacts.splice(e,1)[0]}var a={contacts:[],createContact:e,getAllContacts:n,deleteContact:o};return a}angular.module("services").factory("ContactService",t),t.$inject=["DataService"]}()},function(t,e){!function(){"use strict";function t(t,e,n){function o(){function t(t){t.forEach(r)}e.getRecentMessages().then(t)}function c(e,o,c){var r={senderId:e,recipientId:o,body:JSON.stringify(c),recipientType:"U"};"/"===r.body[0]?n.dispatchCommand(r).then(function(e){t.sendMessage(e)}):t.sendMessage(r)}function r(t){for(;;)try{t.body=JSON.parse(t.body)}catch(e){break}a.chats.push(t)}var a={chats:[],sendMessage:c,getRecentMessages:o,addMessageToList:r};return a}angular.module("services").factory("MessageService",t),t.$inject=["SocketService","DataService","CommandService"]}()},function(t,e){var n=angular.module("theApp",["auth0","angular-storage","angular-jwt","ngRoute","loginController","signupController","chatformdirective","chatsingledirective","chatlistdirective","commandController","userpicdirective","contactsingledirective","contactlistdirective","services","mainCtrl"]);n.config(["$routeProvider","authProvider","$httpProvider","$locationProvider","jwtInterceptorProvider",function(t,e,n,o,c){t.when("/",{templateUrl:"app/components/home/home.html"}).when("/login",{templateUrl:"login/login.html",controller:"loginController"}).when("/signup",{templateUrl:"signup/signup.html",controller:"signupController"}).when("/chat",{templateUrl:"app/views/chat.html",controller:"signupController"}).when("/commands",{templateUrl:"app/components/commands/commands.html",controller:"commandController"}),e.init({domain:"jeffreylamwork.auth0.com",clientID:"RdSGwryXzBL0bEHYoPasF9KX0hMwROjN",loginUrl:"/"}),e.on("loginSuccess",["$location","$http","profilePromise","idToken","store","SocketService",function(t,e,n,o,c,r){console.log("Login Success"),n.then(function(n){c.set("profile",n),c.set("token",o),t.path("/chat");var r=JSON.parse(window.localStorage.profile).name.split(" ");return e({method:"POST",url:"/auth",data:{email:JSON.parse(window.localStorage.profile).email,firstname:r[0],lastname:r[1]}}).then(function(e){e.data.token?(sessionStorage.setItem("token",e.data.token),localStorage.setItem("userId",e.data.id)):t.path("/")}).then(function(){t.path("/chat")})})}]),e.on("loginFailure",function(t){alert("Error"),t.path("/")}),n.interceptors.push("jwtInterceptor"),n.interceptors.push("AttachTokens")}]),angular.module("mainCtrl",["theApp"]).controller("mainCtrl",function(t,e,n,o){t.logout=function(){e.localStorage.removeItem("token"),e.sessionStorage.removeItem("token"),e.localStorage.removeItem("profile"),e.localStorage.removeItem("username"),e.localStorage.removeItem("userId"),e.localStorage.removeItem("recipient"),e.localStorage.removeItem("email"),e.location.href="/"}}),n.factory("checker",function(t,e,n){var o=function(){return!!n.sessionStorage.getItem("token")};return{isAuth:o}}),n.factory("AttachTokens",function(t){var e={request:function(e){var n=t.sessionStorage.getItem("token");return n&&(e.headers["x-access-token"]=n),e.headers["Allow-Control-Allow-Origin"]="*",e}};return e}).run(function(t,e,n,o,c,r){var a=r.get("profile");a?a.nickname:o.localStorage.getItem("userId");n.isAuth()&&c.register(),t.$on("$routeChangeStart",function(t,o,c){"/"==e.path()||"/signup"==e.path()||"/login"==e.path()?console.log("This page does not need authentication"):n.isAuth()||(console.log("not authenticated"),e.path("/"))})}),n.run(["auth",function(t){t.hookEvents()}])},function(t,e){angular.module("loginController",["theApp"]).controller("loginController",["$scope","$http","auth","$location","$window","SocketService",function(t,e,n,o,c,r){t.auth=n,t.login=function(n,a){return e({method:"POST",url:"/",data:{email:n,password:a}}).then(function(e){e.data.token?(c.sessionStorage.setItem("token",e.data.token),c.localStorage.setItem("token",e.data.token),c.localStorage.setItem("userId",e.data.id),c.localStorage.setItem("email",e.data.email),t.id=c.localStorage.getItem("userId"),r.register(),o.path("/chat")):o.path("/")})}}])},function(t,e){angular.module("signupController",["theApp"]).controller("signupController",function(t,e,n,o){t.signUp=function(t,e,n,c,r){o({method:"POST",url:"/signup",data:{firstname:t,lastname:e,email:c,password:r}}),console.log("sent post req from signup controller")}})}]);
>>>>>>> (style) add new images
