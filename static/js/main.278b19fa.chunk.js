(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{67:function(t,e,c){},68:function(t,e,c){"use strict";c.r(e);var n=c(1),r=c.n(n),s=c(13),a=c.n(s),o=c(5),i=c(15),j=c(32),l=function(){return[{name:"\u5546\u54c11",price:100,count:1,photo:"https://fakeimg.pl/180x200/",hot:!0,id:"product1"},{name:"\u5546\u54c12",price:200,count:1,photo:"https://fakeimg.pl/180x200/",hot:!0,id:"product2"},{name:"\u5546\u54c13",price:300,count:1,photo:"https://fakeimg.pl/180x200/",hot:!0,id:"product3"},{name:"\u5546\u54c14",price:400,count:1,photo:"https://fakeimg.pl/180x200/",id:"product4"},{name:"\u5546\u54c15",price:500,count:1,photo:"https://fakeimg.pl/180x200/",id:"product5"},{name:"\u5546\u54c16",price:600,count:1,photo:"https://fakeimg.pl/180x200/",id:"product6"}]},u=c(9),d="SIGN_IN",A="SIGN_OUT",p="ADD_TO_CART",b="DELETE_FROM_CART",h="CLEAR_CART",O="FETCH_PRODUCTS",x={isSignedIn:null,userId:null},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case d:return Object(u.a)(Object(u.a)({},t),{},{isSignedIn:!0,userId:e.payload});case A:return Object(u.a)(Object(u.a)({},t),{},{isSignedIn:!1,userId:null});default:return t}},g=c(18),f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return Object(u.a)(Object(u.a)({},t),{},Object(g.a)({},e.payload.id,e.payload));case b:var c=Object.assign({},t);return delete c[e.payload],Object(u.a)({},c);case O:return Object(u.a)({},e.payload);case h:return{};default:return t}},k=Object(i.b)({products:l,auth:m,currentProducts:f}),U=c(7),N=Object(U.a)(),C=c(4),K=c(3),y=c(33),R=c(34),S=c(37),v=c(36),I=c(12),P=c.n(I),F=c(19),Q=c(35),B=c.n(Q).a.create({baseURL:"https://shop-e49cd-default-rtdb.firebaseio.com/",headers:{"Access-Control-Allow-Origin":"*"}}),H=function(t,e,c){return function(){var n=Object(F.a)(P.a.mark((function n(r){var s;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,B.put("".concat(e,"/").concat(t.id,".json"),Object(u.a)(Object(u.a)({},t),{},{count:c}));case 2:s=n.sent,r({type:p,payload:s.data});case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},D=c(0),V=function(t){Object(S.a)(c,t);var e=Object(v.a)(c);function c(){var t;Object(y.a)(this,c);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).onAuthChange=function(e){e?t.props.signIn(t.auth.currentUser.get().getId()):t.props.signOut()},t.onSignIn=function(){t.auth.signIn()},t.onSignOut=function(){t.auth.signOut(),t.props.clearCart()},t.renderButton=function(){return null===t.props.isSignedIn?null:t.props.isSignedIn?Object(D.jsxs)("button",{onClick:t.onSignOut,className:"sign",children:[Object(D.jsx)("i",{className:"fab fa-google"}),"\u767b\u51fa"]}):Object(D.jsxs)("button",{onClick:t.onSignIn,className:"sign",children:[Object(D.jsx)("i",{className:"fab fa-google"}),"\u767b\u5165"]})},t}return Object(R.a)(c,[{key:"componentDidMount",value:function(){var t=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"10550053715-k71lkfg79t8htdr0loadropr6t9l74if.apps.googleusercontent.com",scope:"email"}).then((function(){t.auth=window.gapi.auth2.getAuthInstance(),t.onAuthChange(t.auth.isSignedIn.get()),t.auth.isSignedIn.listen(t.onAuthChange)}))}))}},{key:"render",value:function(){return Object(D.jsx)("span",{children:this.renderButton()})}}]),c}(r.a.Component),T=Object(o.b)((function(t){return{isSignedIn:t.auth.isSignedIn}}),{signIn:function(t){return{type:d,payload:t}},signOut:function(){return{type:A}},clearCart:function(){return{type:h}}})(V),w=Object(o.b)((function(t){return{currentUserId:t.auth.userId}}),{fetchProducts:function(t){return function(){var e=Object(F.a)(P.a.mark((function e(c){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.get("".concat(t,".json"));case 2:n=e.sent,c({type:O,payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(t){var e=t.fetchProducts,c=t.currentUserId;return Object(n.useEffect)((function(){c&&e(c)}),[c,e]),Object(D.jsxs)("div",{className:"header",children:[Object(D.jsx)("div",{className:"header-logo",children:Object(D.jsx)(C.b,{to:"/",children:Object(D.jsx)("img",{src:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCADIAMgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6eHWnZ4ptL2oATrRntRSHrQA4dafjiox707Jxii4Bn0pQaTFKBQAuaWmnvQtADqKKSgBaKTNGaAFopBS0AFFFFABRRRQAUUUUAFFFFABRSGigCOiiigApDS0ZFACD3pwNVprhYjg/eIJAqJr9VtxJgFidu0Nxn61PMgL+Qe9Lx61DBIJYw4BAPY1JVLUAJoBpKKAHqaCetNBxRn1oATnPNKDiikNAEgpajBPrTxQAtFJTSTQA+kpgJo3GgCSimbjRu9qAFzgGk3etJnNJQA4tRTRRQBHLKsXLsAPen7tqlj0AyTWHr92Y8pjyySFDnoc/4c1Wsrq5ZrtZpS6IhzzjjB6cf5/Gp1Jubi30TgkbxgE8jrj/APVVOa7bzzsdgDjj29v896yYboWtnLMQryAgHknbnp36cfzqK3kmDlHaRiCHPAyo7dPxrN336C5ka5V3/i3lVOMnIIyOAfemwKNyx+WXXOMg8cnrx0psEI+zbdzHaM/MuS3uMnv/AJ971ku+XeyFCMgA9hSSTdyr2L0SLHGEQYVRgCn0gordaDFopO9LQAlFLSUAFFLRQAUBqKQUALuNFJS0AFFFFABRRRQAUUUUAFFFFAHP6k07QPGY95ByQ67sDB6DvWabbyIvLeOSOS6KjazcsOvAByOn61dvPFegeVuXxBozup4Au48H/wAerHuPE2iNPmXXtLbOCTFPH69OW6ZAP8+lIzsSS2u1LgpuVU5CGU49CfcjHTP51NC0brH5CiS4ZCSVAB9v0B/Ss/8A4Snw/eMobUtNhRI2UqbuMb/16nj/ACKZZ+IPD8MbNHrNgxOFIa9jXA56d/8AIqdgszqrKNrlldnUBRglSOfTI6/TNaDSGKJQgBIGCTXNaf4h8NW8IkXX9M3t95WvY8j9RWinirw1IoL+INJVu/8ApsY/rRCyWo3foa9tPv8AlYHf9KsVhp4q8NRjCeINIx/1+x//ABVO/wCEu8Of9DBpH/gbH/8AFVZUU0tTbpKxf+Eu8Of9DBpH/gbH/wDFVY0/XtH1K48jTtWsLufaW8uC4SRsDqcA9KBmnSDvRS0AFJR60tACUUtFABRTXYIjMxwqgkn2rmv+E88N/wDQTH/fmT/4mgDp6K5j/hPPDf8A0Ex/35k/+Jo/4Tzw3/0Ex/35k/8AiaAOnormP+E88N/9BMf9+ZP/AImj/hPPDf8A0Ex/35k/+JoA6eiuY/4Tzw3/ANBMf9+ZP/iaP+E88N/9BMf9+ZP/AImgDp6K5j/hPPDf/QTH/fmT/wCJooA3tRWKK23lF27gDwO5xWbcWMF0kjQov2pU+Xtzzj9aqT61PH+61CFJIHO07AVYe/Wpom82RpIpDEjgjC9cZxkH/PanytGHtE3oZF5pr2/kq8ERLqQ/HQDAGfzPrWnaIiP5LWsbKy8sYwN2BnPpUSlYR5XmxSq+Nxx2z/j3q5FKY5QiSh4+dmFGPp+orOo2maRtYtRRR7RsRc46KKgjjQylRtB5LL64/CmS3TR26iUAZz82en+c0sM/mjKEeT6cfMeaz5ruxRo2zoy4kiRegU4zn8aseWn9xfyrKcAnYjsMkdeMcdOnXp+dW7O5U7YWZmfnkj9PrVxmtgLXlp/cX8qVUVTlVUH2FKOlLWgwoopKAClqK4nitreWe5lSGCJS8kkjBVRQMkkngADvSWdzBe2kF1ZzRz206LLFLGwZXRhkMCOCCCDmgCaiiigAooooAKaTil7VVurlYCnmK21zt3DoPrUylyq7DfYtA5paz7OdIYUWSQneSVJB6Z6/j1q+KUJqSHawtFITim5qxDs5FFNooAyNcljsysVtComl48zbkgdODXPtFcRxBYXkX+N1HQqeCcflXW61aNcxxeSuZVbg+g/yBWLrVs8AgBdlwuWZR3/zirhLocdSLTbM42a3V35JkUW7qM7s44z6d+TXSJpds9rDHbyZMfcnOc1kxwfY/Llclo5hksckBgcH+laNrD5xUtMVf+HBqZpW3KhJ321OX+MVtLa/C3xCLd3Ey2cgSRGKkMeO1bPgi5XWvCemao48hLy1hu9oPCbkDFTn0yRVT4uqyfDLWlkcu3lopYjGcyqK5iW9l0n4W/EHSkRobqxvr/T7MRnktdESWwX0/wCPuNR9KzUFudKLfwKlm1z4Yadq04CzXtzeXJQ5ABe7mY/zrqH8R6Wvh3WPEAjm8jSDdrdJgeYDbs6vxnvs3Lk8hlPGaofCQwx+H9TsbZBHDYa1qNqiDoqrdSED8mFYniq3jtvF134ekk2xeL7i0uoY2XKyNblftqHHRWt4YRz1LNTUUM73UdYj0rwxc6zqkLwR2tm13cRKQ7IFQsyjpkjBHvR4cutWvNNWbXtNttMu2IIt4Ls3O1SoPzNsQBgSQQMjjhjmqXxB0y41nwPr2nWKhrueylWBSQA0m0lAc8YLACtLQtVtdc0Wy1TTpPMtLuFZoyRg4IzgjsR0I7EEVQHLa74t1/RtasLS48M28tpqF6bK1nh1MFnOyRwWRoxt+WNv4jg8c9a6vSbm6u7dnvrB7GUOVEbyrJkdmypIwfzrjfixP9mvPAU2eB4lt4z/AMDhnj/m4rvx1oA8ym1K08ba81pf6Br93odnqEunspEBsZJ4m5kmQSeYygr8oZdnQkE429f4w11vDmk289tY/bJ57u3soIBIIlLSyBAS2DgDJPQ9MVz/AMMdU0rzfEGnxahZ/wBotrmoO1oJl83iUgnZnOMAHp3q78UVJ0jRWH8GvaafzukH9aANjwvr8Ov2t08dvcWlzZ3D2l1a3AAeGVcHBIJUgqysCCQQwPtWLq/ja60vxNaaNL4W1eeS9Mv2SSCa1ImEYBdsPKu0AMDzgn0qX4eO96fEmsjZ9l1XVpJrVkOQ8MUUVssgPQh/s5cEcFWU96q+KsH4oeBF7iPUX/ARRj/2agDp/EWqxaH4e1TV7mN5IbC1lu5EjxuZY0LEDPGcCqvh3W7jVpbqK80HVdIltwhP20RFZN2fuPFI6tjbzyCMjjmqPxU/5Jh4w/7A15/6IetzSdV0/VrdptKv7S+hRtjSW0yyqrYzglSeeRx70ARQarHN4hvtIEbiW1tbe6aQ42ssrzKAPceQc/UVl2evzX3irxDocVusbaXDayrNvz5nnCQkYxxjZ6nOe1JZcfEvWf8Aa0ix/Sa7/wAaq+GYk/4T7xrcY+cvZwk+ywBgP/IhqZK6Ah1jxPBpy+II72zuGm0PThqsn3VWaMiY7UIPXMDA5ArqrC9FwFVo2ikK7ipwcevT615R8Yo2tNV09rgTfZdbhk8PTOnJczyx7P8AvlPtJHpk+tejW9ztZ3t49rOSo8z+ADp069fUVyqfs7Pbv3LtfQ3T0pvWo4JDLErsNpPUdcGp0GOvWutNNXIIxkUVK2ADnGKKLoBMn1qC+g+025jyA2QQSM4P0qeimJpNWZGsEXkLEVDIABhh1psVnbouEjwB05qakpWCyOH+OEvlfC3XXHZYv/RyVyHimNIPjKNDheRX8Qz6VqbA8rmza4kkI9yLa3U/UV2PxssL7U/hb4htdJtZbu9aFXjgiXczlZFYgAck4U8Dk9q6O60LT7vXrDWri3V9SsYpYbeUk/Ism3dx3+6OvTJ9TTGcj8HifN8eRnpH4pvQPowjf/2atXxoif8ACT+ApWUGRdYlQN3Aawu8j/x0flWf8K1Kaj8QQylT/wAJNMQCMdYIDmtHxmrN4g8C7QTjWXJx2H2C7oA6uuQ8LxnSfGviXRkb/QpxFrFuhz+7adpVmQZPTzIvM47zNXUX93DYWU93clxDChdykbOQB1wqgk/gK5jwzv1bxfrHiBYJ4rBrS30+0aeNoml8tpZJJAjAEITKqgnr5ZI4IJAKXxfthNpnhqX/AJ9vEemS/ncqn/s9d4Otcr8SLS4vPD9olnbyXEseradNsjUsQqXkLM3HYKCSewBNdUOtAHmPwh0TS5ZfEerTaZYvqkXiTVFivWt0MyKZmBAfG4DBI69Diuh+KFta3nhWK31CCK5tZdV02OSGVQyOGvYVIYHgg56VyXww8ZaFY6l4i8P3t6ttq7+Jb9YrWRG3yeZMWVhxjByea7L4kRyy+G4BBFJKyarpkpWNSzbVvoGY4HoAT9BQA/4dmOHwvDp0S7E0mWbTEQnLCOCRo4y3uY1jb/gVZHiuYRfFnwCrf8trfU0H12Qt/JTVvw7KbD4keLdKl2hb5bfWLb5SNwMYt5R6fKYIyf8ArqKxPiPqP2H4g+C7pdJ1y+j057p7iSx0ye4WNZISi/MqkElscAkjvigDoPi25T4W+LyO+k3Q/OJhW5o+jaZo0csej6dZ2CTP5ki2sCxB2xjcQoGTgda574k3IvPhH4ouYYpis2i3LLG8ZSQboGI3K2CpGeQeRzV/wl4z0DxYkh8PalHemJEeQKjKUDZxkMBg8HjrRcCvG4i+KU6HrcaNGy+/lzvn/wBGr+dHhTDeJPGrDqNThj/Kytj/AOzVU8X3sOgeMdD1/UUlTSls7uwuLpULpbvI9u8bSYyVQ+VIN3QErnGateAI5prXWdXuI3i/tfUpLuKORCjCFUjgiYggEbkhV8EAjfg8ik9gOR+Ld1Na6r4QlEKyTx67bzsrHIWD5oWkHspnjz/vV6BcCCJWE2VQSFi6DnB/z+lcb420u913xlqFlIDBp58MT2dvOUIzPcy/MVbGCUFvEcZyN6+orptG1D+29C06+uLWSxuriCOSa3mUq0TMoyrA88H5eelck4pablJs2tOuIrq2V4RhR8pU9Vx2P6VUnuDb6vuZwEKhdp7j1/nVS7aWx0+JoXIWZvmI7DGePwHWpHga8sIZmB8xeQTycds1nOo5e7HdamlOCWr2ehPrl6URYoicMASQeo9KKof6PN5c1zJIoh+Qxj+M5PA/CisajlOXM5WOmEFBWSbOloopBXrHAFFFLQAUlLRQAlLSUtABRRRQAUUUyV/LidyCwVS2B1OKAH0VRu9UtbRC1y7pjysqsbOcyvsQYUHOW44/lUdvrenXG0QXSSF9pQLklwRGQyjuv72PLDgbhkigC5NcLARuRznuBSw3cMxKo/z4+6eDWfpeu6bq8kcFo8rvJbrdhZLeSP8AdMzKrZZQBkqcDqQMjjmn3OmMX328oVxyNw6fjXPUdSLutUXFRej0F0253mRD95Bk+9XLZ9yNznBqhZKsd5L5jJuYYypyCx6/yqezlEhuNp5T5WHoamk2kkyqkVdtFi3cvvz07VKQD6VTiIETkdOlTRSgonHB4+lawl0Zm0QalYJeomG8uVDlXAzgdx+NVbexktYZTIwbKlRt5x7/AP1q0bwstrOYyVYISCBkg4rGsrmT7VEXdpGYhTz1HT/69Y1eVNX3FG+pZknhlhje7deF3rGqHCnsT7/l/g+0uBujcfccA/UGqmo2rht4wyqxXGcY5LD9D+lS6PeWt3bPDEfMkh5bchAySeme2aiEm5WeheiV+g++NsIyz26zS5yFHBx9aKtFrYHbsV3HU7R/OiqnT5ne6RtTqcqtZ/eZ/wDwjFh/z31f/wAG93/8do/4Riw/576v/wCDe7/+O1tilrsOYw/+EYsP+e+sf+De7/8AjtH/AAjFh/z31j/wb3f/AMdrbpaAMP8A4Riw/wCe+sf+De7/APjtH/CMWH/PfWP/AAb3f/x2tyigDO03R7bT5Wkt5L5mZdpFxfTzjHsJHYA+45rRoooAKKKKACkPKmlooA5CXzYLSHfZXbyR2thK6FHlIEc2ZPm53Oo52gljjgGotGjksJ9Cs5dGuVkNtbxyTqoZYCYXLKzA4wDaxKcd3T1rtKTtQBwngeweC70bUDFfxxNosFgVuIpQ4kDSO28P8y42kZb++AOorq7sG9cRox8sHOB0atNhkEGq8xS0tnZFAAHAA6ntWNWPMrPYqLs9NypO9vptuUZQzPyV9ajhka3smuJdoSU7inQ89MHucU63tZJ5GmuhtXqQe/8AgKr3MS38haeXy4wcKoHIFc92tfuNkls/mXk2/Ysqcngn1pW3IkfB5FOaVZLhEjQFTxv/AMKmnXO0Mc4PbritlZ7GLfcybrw5ZTXLyPNqgaRi7BNUukXk9lEgAHsBgVXfwdpaN5kZ1TcOTjVbrJ/8ida33XzJMZ4I61VkeSEsm75PXPSiT7ko52LQLD7ZeCW41byVClR/a11xwc/8tPb9KNP8H6YHMyy6liUcbdTuR8o9xJnk4rR1C5mZw1uImXAjPmAkPjPTkd81oW0azRAoSgKqeDkcjNZxd5bjMn/hFtHQ8zapn0GrXf8A8corYFievmf+O0Vrr2Hp3LlFJQK3JFpKWigAooooAKKKKACim7qSgBT1p1NWloAWmhhvCkgE84706oLiMuAY0QyDgFiRgVMm0roB8NyskrpggjpnvVeSeUQt5i7MjhunPpTxFK02GJMYxznk/lUTRTMHMuWjXJ2n+LHTFYSch6EdzNcLYSFMHOApduvrzVVnM1n5ZKpKeFdR09c80sUpluDGUQIq5O3PB/Oq99erBJiOMBV71xSrr5bG8YMtPLJp+n+XGFM6/KM8gA880lpdzR2bSyAGXPyhgen51E80ClbmVJA8oHHJxx6GnxTR3K/u51Cp0DLgg/pTVZc1k/QTg2tjRsbh54GllTynXjA7+9PtpInJZGDnGSQazL+edrN1jjG7BUMrdvX8M1StzdJhZyhIH3wQK29vay3M+TQ1L6GG6mVFkYeZxhfUd/y/lVeU3ERKW7ARocYbOT+I9qmEbedbSJLyr4I9QVNNvbWaZ1eFWdMDgNtz/wDW60NSkrx0Yk+hJGLpoRIiyEkAgbxz+tFUornUraXAWScZ+ZSpbH4iitFJd2Oz8joaKKK6yAooooAKKKTtQAtIabupVoAAPWgj0p1FADcYFIOtPppoAU03cFBLHgDJopGUOrKehpS20AqGczMQGwnoDgmoCnlnKDHv3qw0XlNyvA7+tNZweArN7AZrxpuTb5tzpjZbbDYz5inKgsPQYJ/+vVS5ihkkVmjDMOmeavhDGv3V3nsewqM4UF2AJH4U5LuCa6Ed7YiWGNXLKRyD2zjvUEFkkJUg7nyPmIrU3o0Ib5juH3c5qkzFW3EEKD0FOpTgpJoUHIb85ZsKUA7nqanjMC24V9iheMN3qSdo41GWJyMjc1USVupljUgNzg44raK9nK3VkP3kCfZ5ZsQg7+zIdoz/ACrUgiZYUSR84GPrXPSpLvkRDjYxGSOTzW1pUkj2aGRiW5BJ+taUXzycZClHlV0XVVYk2xqAPYUU3miu1JLRGY+iiimAUUlLQAhNJmg0lAABmnAYpo4pQTQA6iikJoAWmU4HIpMUAJRSkYpKAHg5XDcilAAHAA/CmZ5oz6UuVAU3kxI2SOpqpcyjPJA59at3Np5xJWQoT1pttp8cT73+dxyOOAa8qVCs58ttO50KcEr9SFZ1j+Rs5HHPGKr3c7SAJCcs3HAq9dWRlmLq+3d1zzT7azjgO77z/wB40fV6rfL0GqkF73UztQjZHjDHOUC5PTjg0mjwZuS4BAUdfrWxLEkq7ZFDDrSooUYAAHoK6VhbVOboZ+1vDlsV7i2WRtwwCevHWp4YxFGEXoKeOtLXUoJO6MgoooqwH0UUUAJS0UUAJS0UUAIRSBaKKAFYH3ptFFABTl6UUUAIetJRRQAUUUUAFFFFABRRRQAlLRRQAUUUUAFFFFAH/9k=",alt:"logo",className:"header-logo-img"})})}),Object(D.jsxs)("ul",{className:"header-menu",children:[Object(D.jsx)("li",{children:Object(D.jsx)(C.b,{to:"/",children:"\u9996\u9801"})}),Object(D.jsx)("li",{children:Object(D.jsx)(C.b,{to:"/products",children:"\u5546\u54c1"})}),Object(D.jsx)("li",{children:Object(D.jsx)(T,{})}),Object(D.jsx)("li",{children:Object(D.jsx)(C.b,{to:"/cart",children:Object(D.jsx)("i",{className:"fas fa-shopping-cart"})})})]})]})})),W=function(){return Object(D.jsxs)("div",{className:"home-about",children:[Object(D.jsx)("h2",{className:"home-about-title",children:"\u95dc\u65bc\u8ce3\u5834"}),Object(D.jsxs)("div",{className:"home-about-description",children:[Object(D.jsx)("img",{className:"home-about-ph",src:"https://fakeimg.pl/200x100/",alt:"ph"}),Object(D.jsxs)("p",{className:"home-about-text",children:["\u3010Mysterieux flower\u3011\u4e7e\u71e5\u82b1/\u65b0\u5a18\u6367\u82b1 \u26a0\ufe0f\u26a0\ufe0f\u6c92\u6709\u63d0\u4f9b\u9762\u4ea4/\u81ea\u53d6",Object(D.jsx)("br",{}),"\u26a0\ufe0f\u26a0\ufe0f\u8d85\u5546\u914d\u9001\u7d042-5\u5929\u6642\u9593\u9ebb\u7169\u81ea\u884c\u8a55\u4f30\u662f\u5426\u4f86\u5f97\u53ca\u518d\u4e0b\u55ae",Object(D.jsx)("br",{}),"\ud83d\udccd\u8cfc\u8cb7\u524d\u9ebb\u7169\u770b\u4e00\u4e0b\u8ce3\u5834\u5167\u7684\u5546\u54c1\u8cc7\u8a0a (\u51fa\u8ca8\u6642\u9593.\u5c3a\u5bf8\u7b49\u8cc7\u8a0a\u88e1\u9762\u90fd\u6709\u6a19\u793a)",Object(D.jsx)("br",{}),"\u26a0\ufe0f\u5982\u6536\u5230\u5546\u54c1\u89ba\u5f97\u6709\u7591\u616e\u8acb\u900f\u904e\u804a\u804a\u6e9d\u901a",Object(D.jsx)("br",{}),"\u26a0\ufe0f\u5404\u5f0f\u82b1\u675f\u5305\u88dd\u984f\u8272\u4e00\u5f8b\u4f9d\u7167\u8ce3\u5834\u5716\u7247\u88fd\u4f5c \u66ab\u6642\u4e0d\u505a\u8abf\u6574\u4fee\u6539",Object(D.jsx)("br",{}),"\ud83c\udf39\u3010\u5168\u5bb6\u3011\u6eff299\u5143\u514d\u904b\u8cbb \u7d50\u5e33\u662f\u6642\u8acb\u4f7f\u7528\u904b\u8cbb\u62b5\u7528\u5238",Object(D.jsx)("br",{}),"\u26a0\ufe0f\u51fa\u8ca8\u6642\u9593\u4e00\u5f8b\u4f9d\u7167\u8ce3\u5834\u6a19\u793a\u6642\u9593\u51fa\u8ca8\u4e0d\u53e6\u5916\u6307\u5b9a\u51fa\u8ca8\u6642\u9593",Object(D.jsx)("br",{}),"\ud83c\udf3f7-11/\u5168\u5bb6\u7576\u5929\u4e2d\u534812:00\u524d\u4e0b\u55ae\u7576\u5929\uff0c12:01\u5f8c\u4e0b\u55ae \u7684\u9694\u5929\u51fa\u8ca8",Object(D.jsx)("br",{}),"\u26a0\ufe0f\u6bcf\u65e5\u8a02\u55ae\u6703\u65bc12\uff1a01\u4ee5\u5f8c\u88dd\u7bb1\u7d71\u4e00\u5bc4\u51fa 7-11\u51fa\u8ca8\u5f8c\u7d042-3\u5929\u9001\u5230\u6307\u5b9a\u9580\u5e02",Object(D.jsx)("br",{}),"\u5168\u5bb6\u51fa\u8ca8\u5f8c\u7d042-4\u5929\u9001\u5230\u6307\u5b9a\u9580\u5e02 \uff08\u5be6\u969b\u5230\u8ca8\u6642\u9593\u4ee5\u8d85\u5546\u70ba\u4e3b\uff09",Object(D.jsx)("br",{}),"\ud83d\udc90\u9031\u4e00~\u65e5\u7686\u6709\u51fa\u8ca8",Object(D.jsx)("br",{})]})]})]})},Y=Object(o.b)((function(t){return{products:t.products,currentUserId:t.auth.userId,currentProducts:t.currentProducts}}),{addToCart:H})((function(t){var e=t.products,c=t.addToCart,n=t.currentUserId,r=t.currentProducts;return Object(D.jsxs)("div",{className:"hots",children:[Object(D.jsx)("h2",{className:"hots-title",children:"\u71b1\u92b7\u5546\u54c1"}),Object(D.jsx)("div",{className:"items",children:e.filter((function(t){return t.hot})).map((function(t){return Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("img",{className:"item-photo",src:t.photo,alt:""}),Object(D.jsx)("p",{className:"item-name",children:t.name}),Object(D.jsxs)("p",{className:"item-price",children:["$ :",t.price]}),Object(D.jsx)(C.b,{to:"/success",className:"item-add",onClick:function(){return function(t){n&&r[t.id]?(console.log(r[t.id].count),c(t,n,r[t.id].count+1)):n&&!r[t.id]&&c(t,n,1)}(t)},children:"\u52a0\u5165\u8cfc\u7269\u8eca"})]},t.name+t.hot)}))}),Object(D.jsxs)(C.b,{to:"/products",className:"hots-btn",children:["MORE",Object(D.jsx)("i",{className:"fas fa-arrow-right"})]})]})})),q=function(){return Object(D.jsxs)("div",{className:"home",children:[Object(D.jsx)(W,{}),Object(D.jsx)(Y,{})]})},E=Object(o.b)((function(t){return{currentUserId:t.auth.userId,currentProducts:t.currentProducts}}),{addToCart:H})((function(t){var e=t.product,c=t.addToCart,n=t.currentUserId,r=t.currentProducts;return Object(D.jsxs)("div",{className:"item",children:[Object(D.jsx)("img",{className:"item-photo",src:e.photo,alt:""}),Object(D.jsx)("p",{className:"item-name",children:e.name}),Object(D.jsxs)("p",{className:"item-price",children:["$ :",e.price]}),Object(D.jsx)(C.b,{to:"/success",className:"item-add",onClick:function(){n&&r[e.id]?(console.log(r[e.id].count),c(e,n,r[e.id].count+1)):n&&!r[e.id]&&c(e,n,1)},children:"\u52a0\u5165\u8cfc\u7269\u8eca"})]})})),L=Object(o.b)((function(t){return{products:t.products}}))((function(t){var e=t.products;return Object(D.jsx)("div",{className:"products",children:Object(D.jsx)("div",{className:"items",children:e.map((function(t){return Object(D.jsx)(E,{product:t},t.name)}))})})})),M=Object(o.b)((function(t){return{currentProducts:t.currentProducts,currentUserId:t.auth.userId}}),{deleteFromCart:function(t,e){return function(){var c=Object(F.a)(P.a.mark((function c(n){return P.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,B.delete("".concat(e,"/").concat(t.id,".json"));case 2:n({type:b,payload:t.id});case 3:case"end":return c.stop()}}),c)})));return function(t){return c.apply(this,arguments)}}()}})((function(t){var e=t.currentProducts,c=t.currentUserId,n=t.deleteFromCart;return Object(D.jsx)("div",{className:"cart",children:Object.keys(e).length>0&&c?Object.keys(e).map((function(t){return Object(D.jsxs)("div",{className:"cart-product",children:[Object(D.jsxs)("div",{className:"cart-product-description",children:[Object(D.jsx)("img",{className:"cart-product-description-photo",src:e[t].photo,alt:""}),Object(D.jsx)("span",{className:"cart-product-description-name",children:e[t].name})]}),Object(D.jsxs)("div",{className:"cart-product-price",children:[Object(D.jsxs)("span",{children:["\u6578\u91cf: ",e[t].count]}),Object(D.jsxs)("span",{children:["$ ",e[t].price*e[t].count]}),Object(D.jsx)("span",{className:"delete",onClick:function(){return n(e[t],c)},children:"\u522a\u9664"})]})]},e[t].name)})):c?Object(D.jsx)("div",{style:{textAlign:"center"},children:"\u8f09\u5165\u4e2d...\u6216\u5c1a\u672a\u52a0\u5165\u5546\u54c1"}):Object(D.jsxs)("div",{style:{textAlign:"center"},children:["\u8acb\u5148",Object(D.jsx)(T,{}),"\u5e33\u865f"]})})})),Z=function(){return Object(D.jsxs)("div",{className:"footer-and-copyright",children:[Object(D.jsxs)("div",{className:"footer",children:[Object(D.jsx)("div",{className:"footer-left",children:Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{children:Object(D.jsx)(C.b,{to:"/",children:"\u9996\u9801"})}),Object(D.jsx)("li",{children:Object(D.jsx)(C.b,{to:"/products",children:"\u5546\u54c1"})}),Object(D.jsx)("li",{children:Object(D.jsx)(C.b,{to:"cart",children:"\u8cfc\u7269\u8eca"})})]})}),Object(D.jsx)("div",{className:"footer-right",children:Object(D.jsxs)("ul",{children:[Object(D.jsx)("li",{className:"ig",children:Object(D.jsx)("i",{className:"fab fa-instagram"})}),Object(D.jsx)("li",{className:"line",children:Object(D.jsx)("i",{className:"fab fa-line"})}),Object(D.jsx)("li",{className:"fb",children:Object(D.jsx)("i",{className:"fab fa-facebook-square"})})]})})]}),Object(D.jsx)("div",{className:"copyright",children:"Copyright \xa9 2021 ... All rights reserved."})]})},z=function(){console.log("run");var t=setTimeout((function(){N.goBack()}),3e3);return a.a.createPortal(Object(D.jsx)("div",{className:"alert",children:Object(D.jsxs)("div",{className:"alert-content",children:[Object(D.jsx)("div",{children:"\u5df2\u6210\u529f\u52a0\u5165\u8cfc\u7269\u8eca"}),Object(D.jsx)("div",{children:"\u57283\u79d2\u5f8c\u5c07\u81ea\u52d5\u95dc\u9589\u6b64\u8996\u7a97"}),Object(D.jsx)("button",{onClick:function(){clearTimeout(t),N.goBack()},children:"\u78ba\u5b9a"})]})}),document.querySelector("#alert"))},J=function(){var t=Object(K.f)();return Object(D.jsxs)("div",{children:[Object(D.jsx)(w,{}),Object(D.jsxs)(K.c,{location:t,children:[Object(D.jsx)(K.a,{path:"/",exact:!0,component:q}),Object(D.jsx)(K.a,{path:"/products",exact:!0,component:L}),Object(D.jsx)(K.a,{path:"/cart",exact:!0,component:M}),Object(D.jsx)(K.a,{path:"/success",exact:!0,component:z})]}),Object(D.jsx)(Z,{})]})},X=function(){var t=Object(K.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[t]),null},G=(c(67),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c),_=Object(i.d)(k,G(Object(i.a)(j.a)));a.a.render(Object(D.jsx)(o.a,{store:_,children:Object(D.jsxs)(C.a,{basenaem:"/shop",history:N,children:[Object(D.jsx)(X,{}),Object(D.jsx)(J,{})]})}),document.querySelector("#root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.278b19fa.chunk.js.map