(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{310:function(t,e,n){"use strict";var r=n(9),o=n(652),c=n.n(o);r.default.use(c.a)},311:function(t,e,n){"use strict";n(29);e.a=function(t){var e=t.$axios;e.onRequest((function(t){})),e.onResponse((function(t){var e;return 200===t.status?!0===(null===(e=t.data)||void 0===e?void 0:e.success)?{data:{success:!0,data:t.data.data}}:(5===t.data.code&&(document.cookie="token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;",window.location.reload()),{data:{success:!1,data:t.data}}):{data:{success:!1,data:t.data}}})),e.onError((function(t){return Promise.resolve({data:{success:!1,data:t.response.data}})}))}},349:function(t,e,n){var content=n(709);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(155).default)("58a48481",content,!0,{sourceMap:!1})},656:function(t,e,n){"use strict";var r={methods:{handleLogoutClick:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}}},o=(n(708),n(69)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-row",{staticClass:"header",attrs:{type:"flex",justify:"space-between"}},[n("a-col",{attrs:{span:12}},[n("h2",[t._v("FVC")])]),t._v(" "),n("a-col",{attrs:{span:4}},[n("a-button",{staticClass:"stick-right",attrs:{type:"secondary"},on:{click:t.handleLogoutClick}},[t._v("Đăng xuất")])],1)],1),t._v(" "),n("Nuxt")],1)}),[],!1,null,"3d2a8a9a",null);e.a=component.exports},657:function(t,e,n){n(658),t.exports=n(659)},685:function(t,e,n){"use strict";n.r(e),e.default=function(t){t.store.dispatch("auth/initAuth")}},708:function(t,e,n){"use strict";n(349)},709:function(t,e,n){var r=n(154)(!1);r.push([t.i,".header[data-v-3d2a8a9a]{padding:1rem;border:1px solid #ebedf0}.stick-right[data-v-3d2a8a9a]{position:absolute;right:1rem}",""]),t.exports=r},710:function(t,e){},711:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return d})),n.d(e,"getters",(function(){return j}));var r=n(20),o=(n(71),function(){return{accessToken:""}}),c={setToken:function(t,e){t.accessToken=e}},d={initAuth:function(t){(0,t.commit)("setToken",this.$cookies.get("token"))},login:function(t,data){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,e.$axios.setToken(!1),n.next=4,e.$axios.$post("/login",data);case 4:return(o=n.sent).success&&(c=o.data.token,r("setToken",c),e.$cookies.set("token",c,{path:"/"}),e.$axios.setToken(c,"Bearer","common")),n.abrupt("return",o);case 7:case"end":return n.stop()}}),n)})))()},logout:function(t){var e=t.commit;this.$cookies.remove("token"),e("setToken","")}},j={isLogin:function(t){return!!t.accessToken}}},712:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return c})),n.d(e,"mutations",(function(){return d})),n.d(e,"actions",(function(){return j}));var r=n(20),o=(n(71),function(){return{mode:"main",result:!1,phone:""}}),c={getAppMode:function(t){return t.mode},getResult:function(t){return t.result},getPhone:function(t){return t.phone}},d={setAppModeMain:function(t){t.mode="main"},setAppModeZalo:function(t,e){t.mode="zalo",t.result=e},setAppModePhone:function(t,e){var n=e.result,r=e.phone;n?(t.phone=r,t.mode="phone-submit"):t.mode="phone-check"}},j={backToMain:function(t){(0,t.commit)("setAppModeMain")},callZaloApi:function(t,data){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,e.$axios.$post("/zalo",data);case 3:return o=n.sent,r("setAppModeZalo",o.success),n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})))()},callCheckPhoneApi:function(t,data){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,n.next=3,e.$axios.$post("/phone-check",data);case 3:return o=n.sent,r("setAppModePhone",{result:o.success,phone:data.phone}),n.abrupt("return",o);case 6:case"end":return n.stop()}}),n)})))()},callSubmitPhoneApi:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,o=t.state,console.log(o),n.next=4,e.$axios.$post("/phone-submit",{phone:o.phone});case 4:return c=n.sent,r("setAppModeMain"),n.abrupt("return",c);case 7:case"end":return n.stop()}}),n)})))()}}},713:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return d})),n.d(e,"getters",(function(){return j}));var r=n(20),o=(n(71),function(){return{province:{loading:!1,data:[],selected:-1},district:{loading:!1,data:[],selected:-1},ward:{loading:!1,data:[],selected:-1}}}),c={loadingProvince:function(t){t.province.loading=!0},loadingDistrict:function(t){t.district.loading=!0},loadingWard:function(t){t.ward.loading=!0},setProvince:function(t,data){t.province.loading=!1,t.province.data=data},setDistrict:function(t,data){t.district.loading=!1,t.district.data=data},setWard:function(t,data){t.ward.loading=!1,t.ward.data=data},setSelectedProvince:function(t,e){t.province.selected=e},setSelectedDistrict:function(t,e){t.district.selected=e},setSelectedWard:function(t,e){t.ward.selected=e}},d={fetchProvince:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(r=t.commit)("loadingProvince"),n.next=4,e.$axios.get("/province");case 4:o=n.sent,c=o.data.data.items,r("setProvince",c);case 7:case"end":return n.stop()}}),n)})))()},setProvince:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,d,j;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.state,(c=t.commit)("setSelectedProvince",e),c("loadingDistrict"),r.next=5,n.$axios.get("/district",{params:{province_id:o.province.selected}});case 5:d=r.sent,j=d.data.data.items,c("setDistrict",j);case 8:case"end":return r.stop()}}),r)})))()},setDistrict:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o,c,d,j;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.state,(c=t.commit)("setSelectedDistrict",e),c("loadingWard"),console.log(o),r.next=6,n.$axios.get("/ward",{params:{province_id:o.province.selected,district_id:o.district.selected}});case 6:d=r.sent,j=d.data.data.items,c("setWard",j);case 9:case"end":return r.stop()}}),r)})))()},setWard:function(t,e){(0,t.commit)("setSelectedWard",e)}},j={getProvince:function(t){return t.province},getDistrict:function(t){return t.district},getWard:function(t){return t.ward}}},914:function(t,e,n){var map={"./af":418,"./af.js":418,"./ar":419,"./ar-dz":420,"./ar-dz.js":420,"./ar-kw":421,"./ar-kw.js":421,"./ar-ly":422,"./ar-ly.js":422,"./ar-ma":423,"./ar-ma.js":423,"./ar-sa":424,"./ar-sa.js":424,"./ar-tn":425,"./ar-tn.js":425,"./ar.js":419,"./az":426,"./az.js":426,"./be":427,"./be.js":427,"./bg":428,"./bg.js":428,"./bm":429,"./bm.js":429,"./bn":430,"./bn-bd":431,"./bn-bd.js":431,"./bn.js":430,"./bo":432,"./bo.js":432,"./br":433,"./br.js":433,"./bs":434,"./bs.js":434,"./ca":435,"./ca.js":435,"./cs":436,"./cs.js":436,"./cv":437,"./cv.js":437,"./cy":438,"./cy.js":438,"./da":439,"./da.js":439,"./de":440,"./de-at":441,"./de-at.js":441,"./de-ch":442,"./de-ch.js":442,"./de.js":440,"./dv":443,"./dv.js":443,"./el":444,"./el.js":444,"./en-au":445,"./en-au.js":445,"./en-ca":446,"./en-ca.js":446,"./en-gb":447,"./en-gb.js":447,"./en-ie":448,"./en-ie.js":448,"./en-il":449,"./en-il.js":449,"./en-in":450,"./en-in.js":450,"./en-nz":451,"./en-nz.js":451,"./en-sg":452,"./en-sg.js":452,"./eo":453,"./eo.js":453,"./es":454,"./es-do":455,"./es-do.js":455,"./es-mx":456,"./es-mx.js":456,"./es-us":457,"./es-us.js":457,"./es.js":454,"./et":458,"./et.js":458,"./eu":459,"./eu.js":459,"./fa":460,"./fa.js":460,"./fi":461,"./fi.js":461,"./fil":462,"./fil.js":462,"./fo":463,"./fo.js":463,"./fr":464,"./fr-ca":465,"./fr-ca.js":465,"./fr-ch":466,"./fr-ch.js":466,"./fr.js":464,"./fy":467,"./fy.js":467,"./ga":468,"./ga.js":468,"./gd":469,"./gd.js":469,"./gl":470,"./gl.js":470,"./gom-deva":471,"./gom-deva.js":471,"./gom-latn":472,"./gom-latn.js":472,"./gu":473,"./gu.js":473,"./he":474,"./he.js":474,"./hi":475,"./hi.js":475,"./hr":476,"./hr.js":476,"./hu":477,"./hu.js":477,"./hy-am":478,"./hy-am.js":478,"./id":479,"./id.js":479,"./is":480,"./is.js":480,"./it":481,"./it-ch":482,"./it-ch.js":482,"./it.js":481,"./ja":483,"./ja.js":483,"./jv":484,"./jv.js":484,"./ka":485,"./ka.js":485,"./kk":486,"./kk.js":486,"./km":487,"./km.js":487,"./kn":488,"./kn.js":488,"./ko":489,"./ko.js":489,"./ku":490,"./ku.js":490,"./ky":491,"./ky.js":491,"./lb":492,"./lb.js":492,"./lo":493,"./lo.js":493,"./lt":494,"./lt.js":494,"./lv":495,"./lv.js":495,"./me":496,"./me.js":496,"./mi":497,"./mi.js":497,"./mk":498,"./mk.js":498,"./ml":499,"./ml.js":499,"./mn":500,"./mn.js":500,"./mr":501,"./mr.js":501,"./ms":502,"./ms-my":503,"./ms-my.js":503,"./ms.js":502,"./mt":504,"./mt.js":504,"./my":505,"./my.js":505,"./nb":506,"./nb.js":506,"./ne":507,"./ne.js":507,"./nl":508,"./nl-be":509,"./nl-be.js":509,"./nl.js":508,"./nn":510,"./nn.js":510,"./oc-lnc":511,"./oc-lnc.js":511,"./pa-in":512,"./pa-in.js":512,"./pl":513,"./pl.js":513,"./pt":514,"./pt-br":515,"./pt-br.js":515,"./pt.js":514,"./ro":516,"./ro.js":516,"./ru":517,"./ru.js":517,"./sd":518,"./sd.js":518,"./se":519,"./se.js":519,"./si":520,"./si.js":520,"./sk":521,"./sk.js":521,"./sl":522,"./sl.js":522,"./sq":523,"./sq.js":523,"./sr":524,"./sr-cyrl":525,"./sr-cyrl.js":525,"./sr.js":524,"./ss":526,"./ss.js":526,"./sv":527,"./sv.js":527,"./sw":528,"./sw.js":528,"./ta":529,"./ta.js":529,"./te":530,"./te.js":530,"./tet":531,"./tet.js":531,"./tg":532,"./tg.js":532,"./th":533,"./th.js":533,"./tk":534,"./tk.js":534,"./tl-ph":535,"./tl-ph.js":535,"./tlh":536,"./tlh.js":536,"./tr":537,"./tr.js":537,"./tzl":538,"./tzl.js":538,"./tzm":539,"./tzm-latn":540,"./tzm-latn.js":540,"./tzm.js":539,"./ug-cn":541,"./ug-cn.js":541,"./uk":542,"./uk.js":542,"./ur":543,"./ur.js":543,"./uz":544,"./uz-latn":545,"./uz-latn.js":545,"./uz.js":544,"./vi":546,"./vi.js":546,"./x-pseudo":547,"./x-pseudo.js":547,"./yo":548,"./yo.js":548,"./zh-cn":549,"./zh-cn.js":549,"./zh-hk":550,"./zh-hk.js":550,"./zh-mo":551,"./zh-mo.js":551,"./zh-tw":552,"./zh-tw.js":552};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=914}},[[657,11,1,12]]]);