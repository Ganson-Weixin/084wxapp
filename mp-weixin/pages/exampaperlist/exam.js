(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/exampaperlist/exam"],{"15b5":function(t,e,n){"use strict";n.r(e);var s=n("56db"),i=n.n(s);for(var r in s)"default"!==r&&function(t){n.d(e,t,(function(){return s[t]}))}(r);e["default"]=i.a},"281e":function(t,e,n){"use strict";n.r(e);var s=n("3102"),i=n("15b5");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("337d");var a,o=n("f0c5"),u=Object(o["a"])(i["default"],s["b"],s["c"],!1,null,"698cd45a",null,!1,s["a"],a);e["default"]=u.exports},3102:function(t,e,n){"use strict";var s,i=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return s}))},"337d":function(t,e,n){"use strict";var s=n("6699"),i=n.n(s);i.a},"56db":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=i(n("a34a"));function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e,n,s,i,r,a){try{var o=t[r](a),u=o.value}catch(c){return void n(c)}o.done?e(u):Promise.resolve(u).then(s,i)}function a(t){return function(){var e=this,n=arguments;return new Promise((function(s,i){var a=t.apply(e,n);function o(t){r(a,s,i,o,u,"next",t)}function u(t){r(a,s,i,o,u,"throw",t)}o(void 0)}))}}var o={data:function(){return{item:{},paper:{},isSubmit:!1,answer:"",currentItem:1,score:0,inter:null,list:[],user:{},count:0}},onLoad:function(){var e=a(s.default.mark((function e(n){var i,r,o,u,c,p;return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.score=0,i=t.getStorageSync("nowTable"),e.next=4,this.$api.session(i);case 4:return r=e.sent,this.user=r.data,e.next=8,this.$api.info("exampaper",n.id);case 8:return r=e.sent,this.paper=r.data,e.next=12,this.$api.list("examquestion",{page:1,limit:999,sort:"sequence",paperid:n.id});case 12:for(r=e.sent,this.list=r.data.list,this.count=60*this.paper.time,this.count>0&&(o=this,this.inter=setInterval((function(){o.count=o.count-1,o.count<0&&(clearInterval(o.inter),t.showModal({title:"答题结束",content:"本次考试成绩："+o.score,showCancel:!1,success:function(){var e=a(s.default.mark((function e(n){return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.confirm&&t.navigateBack({delta:1});case 1:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}()}))}),1e3)),u=0;u<this.list.length;u++){for(c=JSON.parse(this.list[u].options),p=0;p<c.length;p++)c[p].checked=!1;this.list[u].options=c}console.log(this.list),this.item=this.list[0];case 19:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),destroyed:function(){clearInterval(this.inter)},computed:{SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},methods:{leaveTap:function(){var e=this;t.showModal({title:"提示",content:"确定离开考试?未答题目按0分计算",success:function(){var t=a(s.default.mark((function t(n){return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n.confirm&&e.$utils.msgBack("本次考试成绩："+e.score);case 1:case"end":return t.stop()}}),t)})));function n(e){return t.apply(this,arguments)}return n}()})},itemCheckTap:function(t,e){if(0==this.item.type||2==this.item.type)for(var n=0;n<this.item.options.length;n++)this.item.options[n].checked=!1;if(this.item.options[e].checked=!t,1==this.item.type){for(var s=[],i=0;i<this.item.options.length;i++)this.item.options[i].checked&&s.push(this.item.options[i].code);this.answer=s.join(",")}1!=this.item.type&&(this.answer=this.item.options[e].code),console.log(t,e,this.answer)},submitTap:function(){var e=a(s.default.mark((function e(){var n,i,r;return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(3!=this.item.type||this.answer){e.next=3;break}return this.$utils.msg("请填写答案"),e.abrupt("return");case 3:return n=0,this.answer==this.item.answer&&(this.score=Number(this.score)+Number(this.item.score),n=this.item.score),i={userid:this.user.id,paperid:this.paper.id,papername:this.paper.name,questionid:this.item.id,questionname:this.item.questionname,options:JSON.stringify(this.item.options),score:this.item.score,answer:this.item.answer,analysis:this.item.analysis,myscore:n,myanswer:this.answer},e.next=8,this.$api.add("examrecord",i);case 8:this.isSubmit=!0,r=this,this.currentItem==this.list.length&&t.showModal({title:"答题结束",content:"本次考试成绩："+r.score,showCancel:!1,success:function(){var e=a(s.default.mark((function e(n){return s.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.confirm&&t.navigateBack({delta:1});case 1:case"end":return e.stop()}}),e)})));function n(t){return e.apply(this,arguments)}return n}()});case 11:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),nextTap:function(){this.isSubmit=!1,this.currentItem=this.currentItem+1,this.item=this.list[this.currentItem-1],this.answer=""}}};e.default=o}).call(this,n("543d")["default"])},6699:function(t,e,n){},ba1a:function(t,e,n){"use strict";(function(t){n("b379"),n("921b");s(n("66fd"));var e=s(n("281e"));function s(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["ba1a","common/runtime","common/vendor"]]]);