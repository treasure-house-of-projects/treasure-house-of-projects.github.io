(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{bMn3:function(t,n,e){"use strict";e.r(n),e.d(n,"AdminOperatorModule",(function(){return pt}));var o=e("ofXK"),r=e("tyNb"),c=e("mrSG"),i=e("LRne"),a=e("itXk"),s=e("lJxs"),b=e("fXoL"),p=e("hPxs"),u=e("sYmb"),l=e("Gu3z");function d(t,n){if(1&t&&(b.Nb(0,"li"),b.pc(1),b.Xb(2,"nameInLine"),b.Mb()),2&t){var e=n.$implicit;b.xb(1),b.qc(b.Yb(2,1,e))}}function g(t,n){if(1&t&&(b.Nb(0,"ul",12),b.nc(1,d,3,3,"li",13),b.Xb(2,"slice"),b.Mb()),2&t){var e=b.Wb().$implicit;b.xb(1),b.bc("ngForOf",b.ac(2,1,e.mentors,0,3))}}function f(t,n){1&t&&(b.Nb(0,"p",14),b.pc(1),b.Xb(2,"translate"),b.Mb()),2&t&&(b.xb(1),b.qc(b.Yb(2,1,"OPERATORCOURSES.NOONE")))}var M=function(t){return["/system/management/operator/course-description",t]};function C(t,n){if(1&t){var e=b.Ob();b.Nb(0,"article",7),b.Ib(1,"header"),b.Nb(2,"h2"),b.pc(3),b.Mb(),b.Nb(4,"p",8),b.pc(5,"mentoring"),b.Mb(),b.nc(6,g,3,5,"ul",9),b.nc(7,f,3,3,"ng-template",null,10,b.oc),b.Nb(9,"footer"),b.Nb(10,"a",11),b.Ub("click",(function(){b.jc(e);var t=n.$implicit;return b.Wb().deleteCourse(t.id)})),b.pc(11),b.Xb(12,"translate"),b.Mb(),b.Nb(13,"a",4),b.pc(14),b.Xb(15,"translate"),b.Mb(),b.Mb(),b.Mb()}if(2&t){var o=n.$implicit,r=b.ic(8);b.xb(3),b.qc(o.name),b.xb(3),b.bc("ngIf",0!==(null==o.mentors?null:o.mentors.length))("ngIfElse",r),b.xb(5),b.qc(b.Yb(12,6,"OPERATORCOURSES.DELETE")),b.xb(2),b.bc("routerLink",b.gc(10,M,o.id)),b.xb(1),b.qc(b.Yb(15,8,"OPERATORCOURSES.EDIT"))}}var m=function(){return["/system/management/operator/create-course"]},O=function(){function t(t){this.courseService=t}return t.prototype.ngOnInit=function(){this.findCourses()},t.prototype.getCourses=function(){return this.courseService.getCourses()},t.prototype.deleteCourse=function(t){var n=this;this.courseService.deleteCourse(t).subscribe((function(){return n.findCourses()}))},t.prototype.findCourses=function(t){void 0===t&&(t=""),this.filterValue$=Object(i.a)(t),this.filteredCourses$=Object(a.a)([this.getCourses(),this.filterValue$]).pipe(Object(s.a)((function(t){var n=Object(c.b)(t,2),e=n[1];return n[0].filter((function(t){return-1!==t.name.toLowerCase().indexOf(e.toLowerCase())}))})))},t.\u0275fac=function(n){return new(n||t)(b.Hb(p.a))},t.\u0275cmp=b.Bb({type:t,selectors:[["crm-operator-courses"]],decls:14,vars:14,consts:[[1,"search"],["type","text",3,"placeholder"],["filter",""],[3,"click"],[3,"routerLink"],[1,"courseList"],["class","course",4,"ngFor","ngForOf"],[1,"course"],[1,"type"],["class","mentorsList",4,"ngIf","ngIfElse"],["default",""],[1,"deleteCourse",3,"click"],[1,"mentorsList"],[4,"ngFor","ngForOf"],[1,"suportInformation"]],template:function(t,n){if(1&t){var e=b.Ob();b.Nb(0,"section"),b.Nb(1,"div",0),b.Ib(2,"input",1,2),b.Xb(4,"translate"),b.Nb(5,"button",3),b.Ub("click",(function(){b.jc(e);var t=b.ic(3);return n.findCourses(t.value)})),b.pc(6),b.Xb(7,"translate"),b.Mb(),b.Nb(8,"a",4),b.pc(9),b.Xb(10,"translate"),b.Mb(),b.Mb(),b.Nb(11,"div",5),b.nc(12,C,16,12,"article",6),b.Xb(13,"async"),b.Mb(),b.Mb()}2&t&&(b.xb(2),b.dc("placeholder","",b.Yb(4,5,"OPERATORCOURSES.SERCH")," ..."),b.xb(4),b.qc(b.Yb(7,7,"OPERATORCOURSES.SERCH")),b.xb(2),b.bc("routerLink",b.fc(13,m)),b.xb(1),b.qc(b.Yb(10,9,"OPERATORCOURSES.ADD")),b.xb(3),b.bc("ngForOf",b.Yb(13,11,n.filteredCourses$)))},directives:[r.e,o.k,o.l],pipes:[u.d,o.b,o.p,l.a],styles:[".search[_ngcontent-%COMP%]{padding-bottom:42px;display:flex;align-items:center}.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding-left:.5rem;margin-right:2rem;width:220px}.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{line-height:2.5rem;border:none}.search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:#00825f;color:#fff;font-size:14px;border-radius:6px;width:11rem;cursor:pointer}.search[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-left:auto}.course[_ngcontent-%COMP%]{width:440px;background-color:#fff;border-radius:17px;margin-bottom:38px;display:flex;flex-direction:column;box-shadow:3px 3px 4px rgba(0,0,0,.15);margin-right:2rem}.course[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{background:url(/assets/Rectangle.png) 50%/cover;height:45px;overflow:hidden;border-radius:17px 17px 0 0}.course[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.08em;line-height:1.5rem;font-weight:700;margin:14px 14px 0}.course[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 14px 14px}.course[_ngcontent-%COMP%]   ul.mentorsList[_ngcontent-%COMP%]{list-style-type:none;padding:0;margin:0 14px 14px}.course[_ngcontent-%COMP%]   ul.mentorsList[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline}.course[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin:auto 14px 14px;align-items:center}.course[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .deleteCourse[_ngcontent-%COMP%]{cursor:pointer;color:#d90000}.courseList[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;overflow:auto;justify-content:center}a[_ngcontent-%COMP%]{text-decoration:none;color:#00825f;font-size:.85em}.suportInformation[_ngcontent-%COMP%]{color:#878787}"]}),t}(),h=function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Bb({type:t,selectors:[["crm-operator-students"]],decls:2,vars:0,template:function(t,n){1&t&&(b.Nb(0,"p"),b.pc(1,"operator-hr works!"),b.Mb())},styles:[""]}),t}(),x=function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Bb({type:t,selectors:[["crm-operator-contracts"]],decls:2,vars:0,template:function(t,n){1&t&&(b.Nb(0,"p"),b.pc(1,"operator-accounting works!"),b.Mb())},styles:[""]}),t}(),P=function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Bb({type:t,selectors:[["crm-operator-mentor"]],decls:2,vars:0,template:function(t,n){1&t&&(b.Nb(0,"p"),b.pc(1,"operator-mentor works!"),b.Mb())},styles:[""]}),t}(),v=function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Bb({type:t,selectors:[["crm-admin-settings"]],decls:2,vars:0,template:function(t,n){1&t&&(b.Nb(0,"p"),b.pc(1,"admin-settings works!"),b.Mb())},styles:[""]}),t}(),y=e("cRID"),N=function(){function t(t,n){this.userService=t,this.router=n}return t.prototype.canActivate=function(){return"ROLE_ADMIN"===this.userService.getCurrentUserRoleFromJWT()||(this.router.navigate(["login"]),!1)},t.\u0275fac=function(n){return new(n||t)(b.Rb(y.a),b.Rb(r.b))},t.\u0275prov=b.Db({token:t,factory:t.\u0275fac}),t}(),_=function(){function t(t,n){this.userService=t,this.router=n}return t.prototype.canActivate=function(){return"ROLE_OPERATOR"===this.userService.getCurrentUserRoleFromJWT()||(this.router.navigate(["login"]),!1)},t.\u0275fac=function(n){return new(n||t)(b.Rb(y.a),b.Rb(r.b))},t.\u0275prov=b.Db({token:t,factory:t.\u0275fac}),t}(),E=function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Bb({type:t,selectors:[["crm-admin-dashboard"]],decls:2,vars:0,template:function(t,n){1&t&&(b.Nb(0,"p"),b.pc(1,"Admin-dashboard goes here"),b.Mb())},styles:[""]}),t}(),S=function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Bb({type:t,selectors:[["crm-operator-dashboard"]],decls:2,vars:0,template:function(t,n){1&t&&(b.Nb(0,"p"),b.pc(1,"operator-dashboard goes here"),b.Mb())},styles:[""]}),t}(),R=function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Bb({type:t,selectors:[["crm-admin-operator"]],decls:1,vars:0,template:function(t,n){1&t&&b.Ib(0,"router-outlet")},directives:[r.g],styles:[""]}),t}(),w=function(){function t(){}return t.prototype.ngOnInit=function(){},t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=b.Bb({type:t,selectors:[["crm-operator-applications"]],decls:2,vars:0,template:function(t,n){1&t&&(b.Nb(0,"p"),b.pc(1,"operator-applications works!"),b.Mb())},styles:[""]}),t}(),U=e("3Pt+"),A=function(t){return{invalid:t}},I=function(){function t(t,n,e){this.formBuilder=t,this.courseService=n,this.router=e,this.courseForm=this.formBuilder.group({name:["",U.s.required],description:["",[U.s.required,U.s.maxLength(100)]],testDays:[""]})}return t.prototype.ngOnInit=function(){},t.prototype.createCourse=function(){var t=this;this.courseService.createCourse(this.courseForm.value).subscribe((function(){t.router.navigateByUrl("/system/management/operator/courses")}))},t.\u0275fac=function(n){return new(n||t)(b.Hb(U.b),b.Hb(p.a),b.Hb(r.b))},t.\u0275cmp=b.Bb({type:t,selectors:[["crm-create-course"]],decls:13,vars:17,consts:[["routerLink","/system/management/operator/courses",1,"backward"],["ngSubmit","createCourse()",3,"formGroup"],["type","text","id","name","formControlName","name",3,"placeholder"],["type","text","id","description","formControlName","description",3,"placeholder","ngClass"],["type","number","id","testDays","formControlName","testDays",3,"placeholder"],["type","submit",3,"disabled","click"]],template:function(t,n){1&t&&(b.Nb(0,"article"),b.Ib(1,"div",0),b.Ib(2,"header"),b.Nb(3,"form",1),b.Ib(4,"input",2),b.Xb(5,"translate"),b.Ib(6,"textarea",3),b.Xb(7,"translate"),b.Ib(8,"input",4),b.Xb(9,"translate"),b.Nb(10,"button",5),b.Ub("click",(function(){return n.createCourse()})),b.pc(11),b.Xb(12,"translate"),b.Mb(),b.Mb(),b.Mb()),2&t&&(b.xb(3),b.bc("formGroup",n.courseForm),b.xb(1),b.cc("placeholder",b.Yb(5,7,"CREATECOURSE.TITLE")),b.xb(2),b.cc("placeholder",b.Yb(7,9,"CREATECOURSE.DESCRIPTION")),b.bc("ngClass",b.gc(15,A,n.courseForm.controls.description.invalid&&n.courseForm.controls.description.touched)),b.xb(2),b.cc("placeholder",b.Yb(9,11,"CREATECOURSE.DAY")),b.xb(2),b.bc("disabled",n.courseForm.invalid),b.xb(1),b.qc(b.Yb(12,13,"CREATECOURSE.CREATE")))},directives:[r.c,U.u,U.k,U.g,U.a,U.j,U.e,o.j,U.o],pipes:[u.d],styles:[".backward[_ngcontent-%COMP%]{border:2px solid #00825f;border-top:none;border-right:none;width:20px;height:20px;transform:rotate(45deg);cursor:pointer;position:absolute;top:18px;left:-1.5rem}article[_ngcontent-%COMP%]{max-width:899px;margin:0 auto;background-color:#fff;box-shadow:3px 3px 4px rgba(0,0,0,.15);border-radius:17px;position:relative}article[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{height:56px;width:100%;margin-bottom:1rem;background:url(/assets/Rectangle.png) 50%/cover;border-radius:17px 17px 0 0;overflow:hidden}article[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:1.5rem;box-sizing:border-box}article[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], article[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:1px solid #00825f;border-radius:6px;padding-left:1rem;line-height:1.5rem;color:#878787;margin-bottom:2rem}article[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{resize:none;height:200px}article[_ngcontent-%COMP%]   input[type=number][_ngcontent-%COMP%]{align-self:flex-start}article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-left:auto;background-color:#00825f;border:1px solid #00825f;color:#fff;border-radius:17px;padding:8px 38px;align-self:flex-end;cursor:pointer}article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:none}article[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:#d9d9d9;border-color:#d9d9d9}article[_ngcontent-%COMP%]   .invalid[_ngcontent-%COMP%]{border-color:#d90000}"]}),t}(),k=e("eIep"),H=e("AytR"),W=e("vkgz"),X=e("tk/3"),Y=function(){function t(t){this.httpClient=t,this.apiUrl=H.a.API_URL}return t.prototype.setCoursePrice=function(t,n){var e=this,o={course:t,money:n,period:{startDate:new Date}};return this.httpClient.post(this.apiUrl+"/courses/price-history",o).pipe(Object(W.a)((function(){return e.getExistingPrice(t.id)})))},t.prototype.getExistingPrice=function(t){return this.httpClient.get(this.apiUrl+"/courses/"+t+"/price")},t.prototype.getCoursePriceHistory=function(t){return this.httpClient.get(this.apiUrl+"/courses/price-history/get/all/"+t)},t.\u0275fac=function(n){return new(n||t)(b.Rb(X.b))},t.\u0275prov=b.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),L=function(){function t(t){this.httpClient=t,this.apiUrl=H.a.API_URL}return t.prototype.getAllExistingMentors=function(){return this.httpClient.get(this.apiUrl+"/users/mentors")},t.prototype.getAllMentorsOnCourse=function(t){return this.httpClient.get(this.apiUrl+"/courses/"+t+"/mentors")},t.prototype.addMentorOnCourse=function(t,n){return this.httpClient.post(this.apiUrl+"/courses/"+t+"/mentors/"+n,null)},t.prototype.removeMentorFromCourse=function(t,n){return this.httpClient.delete(this.apiUrl+"/courses/"+t+"/mentors/"+n)},t.\u0275fac=function(n){return new(n||t)(b.Rb(X.b))},t.\u0275prov=b.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t}();function q(t,n){if(1&t&&(b.Nb(0,"li"),b.Nb(1,"u"),b.pc(2),b.Xb(3,"nameInLine"),b.Mb(),b.Mb()),2&t){var e=n.$implicit;b.xb(2),b.qc(b.Yb(3,1,e))}}function D(t,n){if(1&t&&(b.Nb(0,"ul"),b.nc(1,q,4,3,"li",17),b.Mb()),2&t){var e=b.Wb(2);b.xb(1),b.bc("ngForOf",e.course.mentors)}}function j(t,n){1&t&&(b.Nb(0,"span",18),b.pc(1),b.Xb(2,"translate"),b.Mb()),2&t&&(b.xb(1),b.qc(b.Yb(2,1,"OPERATORCOURSES.NOONE")))}function T(t,n){if(1&t&&(b.Nb(0,"li"),b.Nb(1,"u"),b.pc(2),b.Mb(),b.Mb()),2&t){var e=n.$implicit;b.xb(2),b.sc("",e.amount," ",e.currency,"")}}function G(t,n){if(1&t&&(b.Nb(0,"ul"),b.nc(1,T,3,2,"li",17),b.Mb()),2&t){var e=b.Wb(2);b.xb(1),b.bc("ngForOf",e.currentPrice)}}function F(t,n){1&t&&(b.Nb(0,"span",18),b.pc(1),b.Xb(2,"translate"),b.Mb()),2&t&&(b.xb(1),b.qc(b.Yb(2,1,"CHANGECOURSES.NOPRICE")))}function B(t,n){1&t&&b.Jb(0,null,19)}function $(t,n){if(1&t){var e=b.Ob();b.Nb(0,"div",28),b.Nb(1,"span"),b.pc(2),b.Xb(3,"nameInLine"),b.Mb(),b.Nb(4,"button",29),b.Ub("click",(function(){b.jc(e);var t=n.$implicit;return b.Wb(3).removeMentor(t.id)})),b.pc(5),b.Xb(6,"translate"),b.Mb(),b.Mb()}if(2&t){var o=n.$implicit;b.xb(2),b.qc(b.Yb(3,2,o)),b.xb(3),b.qc(b.Yb(6,4,"CHANGECOURSES.REMOVE"))}}function z(t,n){if(1&t){var e=b.Ob();b.Nb(0,"div",28),b.Nb(1,"span"),b.pc(2),b.Xb(3,"nameInLine"),b.Mb(),b.Nb(4,"button",29),b.Ub("click",(function(){b.jc(e);var t=n.$implicit;return b.Wb(4).addMentor(t.id)})),b.pc(5),b.Xb(6,"translate"),b.Mb(),b.Mb()}if(2&t){var o=n.$implicit;b.xb(2),b.qc(b.Yb(3,2,o)),b.xb(3),b.qc(b.Yb(6,4,"CHANGECOURSES.ADD"))}}function V(t,n){if(1&t){var e=b.Ob();b.Nb(0,"div",30),b.Nb(1,"input",31),b.Ub("ngModelChange",(function(t){return b.jc(e),b.Wb(3).serchBox=t}))("input",(function(){b.jc(e);var t=b.Wb(3);return t.getMentorsOnCourse(t.serchBox)})),b.Xb(2,"translate"),b.Mb(),b.nc(3,z,7,6,"div",25),b.Mb()}if(2&t){var o=b.Wb(3);b.xb(1),b.cc("placeholder",b.Yb(2,3,"CHANGECOURSES.SERCHM")),b.bc("ngModel",o.serchBox),b.xb(2),b.bc("ngForOf",o.allMentorsList)}}function J(t,n){if(1&t){var e=b.Ob();b.Nb(0,"div",20),b.Nb(1,"div",21),b.Nb(2,"h2"),b.pc(3),b.Xb(4,"translate"),b.Mb(),b.Nb(5,"div",22),b.Nb(6,"div",23),b.Nb(7,"h3"),b.pc(8),b.Xb(9,"translate"),b.Mb(),b.Nb(10,"div",24),b.nc(11,$,7,6,"div",25),b.Mb(),b.Mb(),b.Nb(12,"div",23),b.Nb(13,"h3"),b.pc(14),b.Xb(15,"translate"),b.Mb(),b.nc(16,V,4,5,"div",26),b.Mb(),b.Mb(),b.Nb(17,"footer"),b.Nb(18,"button",27),b.Ub("click",(function(){return b.jc(e),b.Wb(2).closeModal()})),b.pc(19),b.Xb(20,"translate"),b.Mb(),b.Mb(),b.Mb(),b.Mb()}if(2&t){var o=b.Wb(2);b.xb(3),b.qc(b.Yb(4,6,"CHANGECOURSES.ADDMENTOR")),b.xb(5),b.qc(b.Yb(9,8,"CHANGECOURSES.ONCOURSE")),b.xb(3),b.bc("ngForOf",o.mentorsOnCourse),b.xb(3),b.qc(b.Yb(15,10,"CHANGECOURSES.AVAILABLE")),b.xb(2),b.bc("ngIf",o.allMentorsList),b.xb(3),b.qc(b.Yb(20,12,"CHANGECOURSES.CLOSE"))}}function K(t,n){if(1&t&&(b.Nb(0,"tr"),b.Nb(1,"td"),b.pc(2),b.Xb(3,"date"),b.Xb(4,"date"),b.Mb(),b.Nb(5,"td"),b.pc(6),b.Mb(),b.Mb()),2&t){var e=b.Wb().$implicit;b.xb(2),b.sc("",b.Zb(3,4,e.period.startDate,"dd MMM yyyy")," - ",b.Zb(4,7,e.period.endDate,"dd MMM yyyy"),""),b.xb(4),b.sc("",e.money.amount," ",e.money.currency,"")}}function Z(t,n){if(1&t&&(b.Lb(0),b.nc(1,K,7,10,"tr",0),b.Kb()),2&t){var e=n.$implicit,o=b.Wb(4);b.xb(1),b.bc("ngIf",e.money.currency===o.countryCurrency)}}function Q(t,n){if(1&t&&(b.Lb(0),b.Nb(1,"table"),b.Nb(2,"thead"),b.Nb(3,"tr"),b.Nb(4,"th"),b.pc(5),b.Xb(6,"translate"),b.Mb(),b.Nb(7,"th"),b.pc(8),b.Xb(9,"translate"),b.Mb(),b.Mb(),b.Mb(),b.Nb(10,"tbody"),b.nc(11,Z,2,1,"ng-container",17),b.Mb(),b.Mb(),b.Kb()),2&t){var e=b.Wb(3);b.xb(5),b.qc(b.Yb(6,3,"CHANGECOURSES.DATE")),b.xb(3),b.qc(b.Yb(9,5,"CHANGECOURSES.PRICEVALUE")),b.xb(3),b.bc("ngForOf",e.priceHistory)}}function tt(t,n){1&t&&(b.Nb(0,"p"),b.pc(1),b.Xb(2,"translate"),b.Mb()),2&t&&(b.xb(1),b.qc(b.Yb(2,1,"CHANGECOURSES.NOHISTORY")))}function nt(t,n){if(1&t){var e=b.Ob();b.Nb(0,"select",34),b.Ub("ngModelChange",(function(t){return b.jc(e),b.Wb(3).countryCurrency=t})),b.Nb(1,"option",35),b.pc(2,"UAH"),b.Mb(),b.Nb(3,"option",36),b.pc(4,"USD"),b.Mb(),b.Nb(5,"option",37),b.pc(6,"EUR"),b.Mb(),b.Mb()}if(2&t){var o=b.Wb(3);b.bc("ngModel",o.countryCurrency)}}function et(t,n){if(1&t){var e=b.Ob();b.Nb(0,"div",20),b.Nb(1,"div",21),b.Nb(2,"h2"),b.pc(3),b.Xb(4,"translate"),b.Mb(),b.nc(5,Q,12,7,"ng-container",8),b.nc(6,tt,3,3,"ng-template",null,32,b.oc),b.Nb(8,"footer"),b.nc(9,nt,7,1,"select",33),b.Nb(10,"button",27),b.Ub("click",(function(){return b.jc(e),b.Wb(2).closeModal()})),b.pc(11),b.Xb(12,"translate"),b.Mb(),b.Mb(),b.Mb(),b.Mb()}if(2&t){var o=b.ic(7),r=b.Wb(2);b.xb(3),b.qc(b.Yb(4,5,"CHANGECOURSES.HISTORY")),b.xb(2),b.bc("ngIf",0!=(null==r.priceHistory?null:r.priceHistory.length))("ngIfElse",o),b.xb(4),b.bc("ngIf",0!=(null==r.priceHistory?null:r.priceHistory.length)),b.xb(2),b.qc(b.Yb(12,7,"CHANGECOURSES.CLOSE"))}}function ot(t,n){if(1&t){var e=b.Ob();b.Nb(0,"div",20),b.Nb(1,"form",38,39),b.Ub("ngSubmit",(function(){b.jc(e);var t=b.ic(2);return[b.Wb(2).addNewPrice(t),t.reset()]})),b.Nb(3,"h2"),b.pc(4),b.Xb(5,"translate"),b.Mb(),b.Nb(6,"div",40),b.Ib(7,"input",41),b.Nb(8,"select",42),b.Nb(9,"option",43),b.pc(10,"UAH"),b.Mb(),b.Nb(11,"option",36),b.pc(12,"USD"),b.Mb(),b.Nb(13,"option",37),b.pc(14,"EUR"),b.Mb(),b.Mb(),b.Mb(),b.Nb(15,"footer"),b.Nb(16,"button",27),b.Ub("click",(function(){return b.jc(e),b.Wb(2).closeModal()})),b.pc(17),b.Xb(18,"translate"),b.Mb(),b.Nb(19,"button",44),b.pc(20),b.Xb(21,"translate"),b.Mb(),b.Mb(),b.Mb(),b.Mb()}if(2&t){var o=b.ic(2);b.xb(4),b.qc(b.Yb(5,4,"CHANGECOURSES.ADDPRICE")),b.xb(13),b.qc(b.Yb(18,6,"CHANGECOURSES.CLOSE")),b.xb(2),b.bc("disabled",o.invalid),b.xb(1),b.qc(b.Yb(21,8,"CHANGECOURSES.ADD"))}}function rt(t,n){if(1&t){var e=b.Ob();b.Nb(0,"div",20),b.Nb(1,"form",38,45),b.Ub("ngSubmit",(function(){b.jc(e);var t=b.ic(2);return b.Wb(2).changeDescription(t)})),b.Nb(3,"h2"),b.pc(4),b.Xb(5,"translate"),b.Mb(),b.Ib(6,"textarea",46),b.Nb(7,"footer"),b.Nb(8,"button",27),b.Ub("click",(function(){return b.jc(e),b.Wb(2).closeModal()})),b.pc(9),b.Xb(10,"translate"),b.Mb(),b.Nb(11,"button",44),b.pc(12),b.Xb(13,"translate"),b.Mb(),b.Mb(),b.Mb(),b.Mb()}if(2&t){var o=b.ic(2),r=b.Wb(2);b.xb(4),b.qc(b.Yb(5,5,"CHANGECOURSES.DESCRIPTION")),b.xb(2),b.cc("value",r.course.description),b.xb(3),b.qc(b.Yb(10,7,"CHANGECOURSES.CLOSE")),b.xb(2),b.bc("disabled",o.invalid),b.xb(1),b.qc(b.Yb(13,9,"CHANGECOURSES.CHANGE"))}}function ct(t,n){if(1&t){var e=b.Ob();b.Lb(0),b.Nb(1,"div",1),b.Ub("click",(function(){return b.jc(e),b.Wb().navigateBack()})),b.Mb(),b.Ib(2,"header"),b.Nb(3,"section",2),b.Nb(4,"div",3),b.Nb(5,"div"),b.Nb(6,"h2"),b.pc(7),b.Mb(),b.Nb(8,"span"),b.pc(9,"mentoring"),b.Mb(),b.Mb(),b.Nb(10,"a",4),b.Ub("click",(function(){return b.jc(e),b.Wb().deleteCourse()})),b.pc(11),b.Xb(12,"translate"),b.Mb(),b.Mb(),b.Nb(13,"div",5),b.Nb(14,"div",6),b.pc(15),b.Xb(16,"translate"),b.Mb(),b.Nb(17,"div",7),b.nc(18,D,2,1,"ul",8),b.nc(19,j,3,3,"ng-template",null,9,b.oc),b.Mb(),b.Nb(21,"button",4),b.Ub("click",(function(){b.jc(e);var t=b.ic(52);return b.Wb().openModal(t)})),b.pc(22),b.Xb(23,"translate"),b.Mb(),b.Mb(),b.Nb(24,"div",5),b.Nb(25,"div",6),b.pc(26),b.Xb(27,"translate"),b.Mb(),b.Nb(28,"div",7),b.nc(29,G,2,1,"ul",8),b.nc(30,F,3,3,"ng-template",null,10,b.oc),b.Nb(32,"button",4),b.Ub("click",(function(){b.jc(e);var t=b.ic(54),n=b.Wb();return[n.getPriceHistory(),n.openModal(t)]})),b.pc(33),b.Xb(34,"translate"),b.Mb(),b.Mb(),b.Nb(35,"button",4),b.Ub("click",(function(){b.jc(e);var t=b.ic(56);return b.Wb().openModal(t)})),b.pc(36),b.Xb(37,"translate"),b.Mb(),b.Mb(),b.Nb(38,"div",5),b.Nb(39,"div",6),b.pc(40),b.Xb(41,"translate"),b.Mb(),b.Nb(42,"div",7),b.pc(43),b.Mb(),b.Nb(44,"button",4),b.Ub("click",(function(){b.jc(e);var t=b.ic(58);return b.Wb().openModal(t)})),b.pc(45),b.Xb(46,"translate"),b.Mb(),b.Mb(),b.Nb(47,"button",11),b.pc(48),b.Xb(49,"translate"),b.Mb(),b.Mb(),b.nc(50,B,2,0,"ng-container",12),b.nc(51,J,21,14,"ng-template",null,13,b.oc),b.nc(53,et,13,9,"ng-template",null,14,b.oc),b.nc(55,ot,22,10,"ng-template",null,15,b.oc),b.nc(57,rt,14,11,"ng-template",null,16,b.oc),b.Kb()}if(2&t){var o=b.ic(20),r=b.ic(31),c=b.Wb();b.xb(7),b.qc(c.course.name),b.xb(4),b.qc(b.Yb(12,16,"CHANGECOURSES.DELETE")),b.xb(4),b.rc("",b.Yb(16,18,"CHANGECOURSES.MENTORS"),":"),b.xb(3),b.bc("ngIf",0!=(null==c.course.mentors?null:c.course.mentors.length))("ngIfElse",o),b.xb(4),b.qc(b.Yb(23,20,"CHANGECOURSES.ADDMENTOR")),b.xb(4),b.rc("",b.Yb(27,22,"CHANGECOURSES.PRICE"),":"),b.xb(3),b.bc("ngIf",0!=(null==c.currentPrice?null:c.currentPrice.length))("ngIfElse",r),b.xb(4),b.qc(b.Yb(34,24,"CHANGECOURSES.HISTORY")),b.xb(3),b.qc(b.Yb(37,26,"CHANGECOURSES.CHANGEPRICE")),b.xb(4),b.rc("",b.Yb(41,28,"CHANGECOURSES.DESCRIPTION"),":"),b.xb(3),b.rc(" ",c.course.description," "),b.xb(2),b.qc(b.Yb(46,30,"CHANGECOURSES.CHANGEDE")),b.xb(3),b.qc(b.Yb(49,32,"CHANGECOURSES.CLOSE")),b.xb(2),b.bc("ngTemplateOutlet",c.modalView)}}var it=function(){function t(t,n,e,o,r){this.activatedRoute=t,this.courseService=n,this.priceService=e,this.mentorsService=o,this.location=r,this.countryCurrency="UAH"}return t.prototype.ngOnInit=function(){this.getId(),this.getCourse(),this.getPrice(),this.getMentorsOnCourse()},t.prototype.getId=function(){this.id=+this.activatedRoute.snapshot.paramMap.get("id")},t.prototype.getCourse=function(){var t=this;this.courseService.getCourseById(this.id).subscribe((function(n){return t.course=n}))},t.prototype.getPrice=function(){var t=this;this.priceService.getExistingPrice(this.id).subscribe((function(n){return t.currentPrice=n}))},t.prototype.deleteCourse=function(){var t=this;this.courseService.deleteCourse(this.id).subscribe((function(){return t.navigateBack()}))},t.prototype.navigateBack=function(){this.location.back()},t.prototype.openModal=function(t){this.modalView=t},t.prototype.closeModal=function(){this.modalView=null},t.prototype.changeDescription=function(t){var n=this,e=Object(c.a)(Object(c.a)({},this.course),{description:t.controls.description.value});this.courseService.changeCourse(e).subscribe((function(){n.getCourse(),n.closeModal()}))},t.prototype.addNewPrice=function(t){var n=this;this.priceService.setCoursePrice(this.course,t.value).subscribe((function(){return n.getPrice()}))},t.prototype.getPriceHistory=function(){var t=this;this.priceService.getCoursePriceHistory(this.id).subscribe((function(n){return t.priceHistory=n}))},t.prototype.getMentorsOnCourse=function(t){var n=this;void 0===t&&(t=""),this.mentorsService.getAllMentorsOnCourse(this.id).pipe(Object(k.a)((function(e){return n.mentorsOnCourse=e,n.mentorsService.getAllExistingMentors().pipe(Object(s.a)((function(n){return n.filter((function(n){if(t){var e=t.toLowerCase();return n.lastName.toLowerCase().includes(e)||n.firstName.toLowerCase().includes(e)}return!0}))})))}))).subscribe((function(t){n.allMentorsList=t.filter((function(t){return!n.mentorsOnCourse.find((function(n){return n.id===t.id}))}))}))},t.prototype.addMentor=function(t){var n=this;this.mentorsService.addMentorOnCourse(this.id,t).subscribe((function(){n.getMentorsOnCourse(),n.getCourse(),n.serchBox=""}))},t.prototype.removeMentor=function(t){var n=this;this.mentorsService.removeMentorFromCourse(this.id,t).subscribe((function(){n.getMentorsOnCourse(),n.getCourse()}))},t.\u0275fac=function(n){return new(n||t)(b.Hb(r.a),b.Hb(p.a),b.Hb(Y),b.Hb(L),b.Hb(o.h))},t.\u0275cmp=b.Bb({type:t,selectors:[["crm-operator-course-description"]],decls:2,vars:1,consts:[[4,"ngIf"],[1,"backward",3,"click"],[1,"content"],[1,"courseTitle"],[3,"click"],[1,"controlWrapper"],[1,"label"],[1,"inputContent"],[4,"ngIf","ngIfElse"],["default",""],["defaultPrice",""],["type","button","routerLink","/system/management/operator/courses"],[4,"ngTemplateOutlet"],["modalAddMentor",""],["modalViewPrice",""],["modalAddPrice",""],["modalChangeDescription",""],[4,"ngFor","ngForOf"],[1,"suportInformation"],["modal",""],[1,"dialogWrapper"],[1,"modal"],[1,"addMentors"],[1,"addMentors_wrapper"],[1,"mentorsOnCourse"],["class","singleMentor",4,"ngFor","ngForOf"],["class","allMentors",4,"ngIf"],["type","button",3,"click"],[1,"singleMentor"],[1,"smallButton",3,"click"],[1,"allMentors"],["type","text",1,"serchForMentor",3,"ngModel","placeholder","ngModelChange","input"],["defaultMessage",""],[3,"ngModel","ngModelChange",4,"ngIf"],[3,"ngModel","ngModelChange"],["value","UAH","selected",""],["value","USD"],["value","EUR"],["novalidate","",3,"ngSubmit"],["addPriceForm","ngForm"],[1,"newControl"],["type","number","placeholder","Set new price","name","amount","ngModel","","required",""],["name","currency","id","price","ngModel","","required",""],["value","UAH"],["type","submit",3,"disabled"],["changeDescriptionForm","ngForm"],["maxlength","100","name","description","ngModel","","required","","max","100",3,"value"]],template:function(t,n){1&t&&(b.Nb(0,"article"),b.nc(1,ct,59,34,"ng-container",0),b.Mb()),2&t&&(b.xb(1),b.bc("ngIf",n.course))},directives:[o.l,r.c,o.m,o.k,U.a,U.j,U.m,U.r,U.n,U.t,U.u,U.k,U.l,U.o,U.q,U.i],pipes:[u.d,l.a,o.e],styles:['.backward[_ngcontent-%COMP%]{border:2px solid #00825f;border-top:none;border-right:none;width:20px;height:20px;transform:rotate(45deg);cursor:pointer;position:absolute;top:18px;left:-1.5rem}article[_ngcontent-%COMP%]{max-width:899px;margin:0 auto;background-color:#fff;box-shadow:3px 3px 4px rgba(0,0,0,.15);border-radius:17px;padding-bottom:20px;position:relative}article[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{height:56px;width:100%;margin-bottom:23px;background:url(/assets/Rectangle.png) 50%/cover;border-radius:17px 17px 0 0;overflow:hidden;box-shadow:0 4px 4px rgba(0,0,0,.25)}article[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{display:flex;flex-direction:column;max-width:100%;margin:30px 30px 0}article[_ngcontent-%COMP%]   .courseTitle[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:30px}article[_ngcontent-%COMP%]   .courseTitle[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:16px;font-weight:700;margin-bottom:0}article[_ngcontent-%COMP%]   .courseTitle[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;color:#fa0000}article[_ngcontent-%COMP%]   .controlWrapper[_ngcontent-%COMP%]{display:flex;margin-bottom:30px}article[_ngcontent-%COMP%]   .controlWrapper[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{min-width:8rem}article[_ngcontent-%COMP%]   .controlWrapper[_ngcontent-%COMP%]   .inputContent[_ngcontent-%COMP%]{display:flex;overflow-wrap:anywhere}article[_ngcontent-%COMP%]   .controlWrapper[_ngcontent-%COMP%]   .inputContent[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0;list-style-type:none}article[_ngcontent-%COMP%]   .controlWrapper[_ngcontent-%COMP%]   .inputContent[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline}article[_ngcontent-%COMP%]   .controlWrapper[_ngcontent-%COMP%]   .inputContent[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child):after{content:", "}article[_ngcontent-%COMP%]   .controlWrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;margin-left:auto;background:none;border:none;color:#00825f;cursor:pointer}article[_ngcontent-%COMP%]   .controlWrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus, article[_ngcontent-%COMP%]   .controlWrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{border:none;outline:none}button[type=button][_ngcontent-%COMP%], button[type=submit][_ngcontent-%COMP%]{align-self:flex-end;background-color:#00825f;border:1px solid #00825f;color:#fff;border-radius:6px;padding:8px 38px;cursor:pointer}button[type=button][_ngcontent-%COMP%]:focus, button[type=submit][_ngcontent-%COMP%]:focus{outline:none}.suportInformation[_ngcontent-%COMP%]{color:#878787}.dialogWrapper[_ngcontent-%COMP%]{position:fixed;top:0;left:0;height:100vh;width:100%;background-color:rgba(0,0,0,.25);display:flex;align-items:center;justify-content:center}.dialogWrapper[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%], .dialogWrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{padding:30px;background-color:#fff;box-shadow:3px 3px 4px rgba(0,0,0,.15);border-radius:17px}.dialogWrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;flex-direction:column}.dialogWrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:400px;margin-bottom:16px;resize:none;border-radius:6px;border:1px solid #00825f}.dialogWrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .newControl[_ngcontent-%COMP%]{margin-bottom:16px}.dialogWrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .newControl[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:1rem}.dialogWrapper[_ngcontent-%COMP%]   button[type=button][_ngcontent-%COMP%]{background-color:#fff;color:#000}.dialogWrapper[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between}button[_ngcontent-%COMP%]:disabled{background-color:#d9d9d9;border-color:#7f7373}.modal[_ngcontent-%COMP%]{box-shadow:3px 3px 4px rgba(0,0,0,.15);border-radius:17px}.addMentors[_ngcontent-%COMP%]{width:500px;margin-bottom:16px;display:flex}.addMentors[_ngcontent-%COMP%]   .addMentors_wrapper[_ngcontent-%COMP%]{width:50%}.addMentors[_ngcontent-%COMP%]   .allMentors[_ngcontent-%COMP%], .addMentors[_ngcontent-%COMP%]   .mentorsOnCourse[_ngcontent-%COMP%]{height:200px;overflow:auto;display:flex;flex-direction:column;line-height:15px}.addMentors[_ngcontent-%COMP%]   .mentorsOnCourse[_ngcontent-%COMP%]{border-radius:8px;border:1px solid #00825f;margin-right:15px}.addMentors[_ngcontent-%COMP%]   .serchForMentor[_ngcontent-%COMP%]{position:-webkit-sticky;position:sticky;top:0}.addMentors[_ngcontent-%COMP%]   .singleMentor[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:5px}.addMentors[_ngcontent-%COMP%]   .singleMentor[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.addMentors[_ngcontent-%COMP%]   .smallButton[_ngcontent-%COMP%]{min-width:-webkit-max-content;min-width:-moz-max-content;min-width:max-content;background:none;border:none;color:#00825f;padding:1px;margin-left:1rem;cursor:pointer}.modal[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{text-align:center;border-bottom:1px solid silver;border-collapse:collapse;margin-bottom:30px}.modal[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:5px 10px;border-bottom:1px solid silver}input[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{padding:3px 10px;border-radius:6px;border:1px solid #00825f}']}),t}(),at=[{path:"admin",component:R,canActivate:[N],children:[{path:"dashboard",component:E},{path:"services",component:O},{path:"hr",component:h},{path:"mentors",component:P},{path:"accounting",component:x},{path:"systemSettings",component:v},{path:"create-course",component:I},{path:"course-description/:id",component:it}]},{path:"operator",component:R,canActivate:[_],children:[{path:"dashboard",component:S},{path:"courses",component:O},{path:"students",component:h},{path:"mentors",component:P},{path:"contracts",component:x},{path:"applications",component:w},{path:"create-course",component:I},{path:"course-description/:id",component:it}]}],st=function(){function t(){}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(n){return new(n||t)},imports:[[r.f.forChild(at)],r.f]}),t}(),bt=e("BHfU"),pt=function(){function t(){}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(n){return new(n||t)},providers:[N,_],imports:[[o.c,U.h,st,U.p,bt.a,u.c.forChild()]]}),t}()}}]);