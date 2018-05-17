!function(e){var t={};function r(u){if(t[u])return t[u].exports;var n=t[u]={i:u,l:!1,exports:{}};return e[u].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,u){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:u})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=12)}([function(e,t){e.exports=require("koa-router")},function(e,t){e.exports=require("babel-runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("babel-runtime/regenerator")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=new(r(7).Pool)({connectionString:process.env.DATABASE_URL,ssl:!0});u.on("error",function(e,t){console.error(e)}),u.connect(),t.default=u},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=s(r(2)),n=s(r(1)),a=s(r(0)),o=s(r(3));function s(e){return e&&e.__esModule?e:{default:e}}var l,c=new a.default;c.all("/",(l=(0,n.default)(u.default.mark(function e(t){var r;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.default.query("select now()");case 3:r=e.sent,t.body={status:"success",data:r.rows[0].now,query:r},e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t.body={status:"error",error:e.t0};case 10:t.body="/api/time/";case 11:case"end":return e.stop()}},e,void 0,[[0,7]])})),function(e){return l.apply(this,arguments)})),t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u,n=(u=r(3))&&u.__esModule?u:{default:u};t.default={create:function(e,t){return n.default.query({text:'insert into "table" (name, number) values ($1, $2)',values:[e,t]})},getall:function(){return n.default.query({text:'select * from "table"'})},getone:function(e){return n.default.query({text:'select * from "table" where id = $1',values:[e]})},remove:function(e){return n.default.query({text:'delete from "table" where id = $1',values:[e]})},update:function(e,t,r){return n.default.query({text:'update "table" set name = $2, number = $3 where id = $1',values:[e,t,r]})}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=s(r(2)),n=s(r(1)),a=s(r(0)),o=s(r(5));function s(e){return e&&e.__esModule?e:{default:e}}var l,c=new a.default;c.all("/",(l=(0,n.default)(u.default.mark(function e(t,r){var n,a;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=o.default,e.prev=1,!(t.body.method in n)){e.next=9;break}return e.next=5,n[t.body.method]();case 5:a=e.sent,r.json({status:"success",data:a.rows,query:a}),e.next=10;break;case 9:r.json({status:"error",message:"method is undefined"});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),r.json({status:"error",error:e.t0});case 15:case"end":return e.stop()}},e,void 0,[[1,12]])})),function(e,t){return l.apply(this,arguments)})),t.default=c},function(e,t){e.exports=require("pg")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u,n=(u=r(3))&&u.__esModule?u:{default:u};t.default={create:function(e,t){return n.default.query({text:"insert into users (name, number) values ($1, $2)",values:[e,t]})},getall:function(){return n.default.query({text:"select * from users"})},getone:function(e){return n.default.query({text:"select * from users where id = $1",values:[e]})},remove:function(e){return n.default.query({text:"delete from users where id = $1",values:[e]})},update:function(e,t,r){return n.default.query({text:"update users set name = $2, number = $3 where id = $1",values:[e,t,r]})}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=s(r(2)),n=s(r(1)),a=s(r(0)),o=s(r(8));function s(e){return e&&e.__esModule?e:{default:e}}var l,c=new a.default;c.all("/",(l=(0,n.default)(u.default.mark(function e(t,r){var n,a;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=o.default,e.prev=1,!(t.body.method in n)){e.next=9;break}return e.next=5,n[t.body.method]();case 5:a=e.sent,r.json({status:"success",data:a.rows,query:a}),e.next=10;break;case 9:r.json({status:"error",message:"method is undefined"});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),r.json({status:"error",error:e.t0});case 15:case"end":return e.stop()}},e,void 0,[[1,12]])})),function(e,t){return l.apply(this,arguments)})),t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=s(r(0)),n=s(r(9)),a=s(r(6)),o=s(r(4));function s(e){return e&&e.__esModule?e:{default:e}}var l=new u.default({});l.use("/auth",n.default.routes()),l.use("/list",a.default.routes()),l.use("/time",o.default.routes()),l.all("/",function(e){e.body="/api/"}),t.default=l},function(e,t){e.exports=require("koa")},function(e,t,r){"use strict";var u=s(r(2)),n=s(r(1)),a=s(r(11)),o=s(r(0));function s(e){return e&&e.__esModule?e:{default:e}}s(r(10));var l,c=new o.default({prefix:"/api"});c.all(/^\/api\/$/,(l=(0,n.default)(u.default.mark(function e(t,r){return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.response.body=t.request.url,e.next=3,r();case 3:case"end":return e.stop()}},e,void 0)})),function(e,t){return l.apply(this,arguments)}));var f=new a.default;f.use(c.routes()),f.listen(process.env.PORT,function(){console.log("port",this.address().port)}),console.log(c)}]);