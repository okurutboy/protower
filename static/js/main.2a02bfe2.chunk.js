(this.webpackJsonpwinbet=this.webpackJsonpwinbet||[]).push([[0],{196:function(e,t,a){},197:function(e,t,a){e.exports=a.p+"static/media/star.6b28e992.png"},198:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(52),s=a.n(c),i=(a(63),a(6)),r=a.n(i),o=a(11),d=a(53),m=a(54),u=a(7),b=a(57),h=a(56),v=(a(65),a(55)),p=a.n(v),E=(a(196),a(197),{tronWeb:!1,contract:!1,setTronWeb:function(e){var t=this;return Object(o.a)(r.a.mark((function a(){return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.tronWeb=e,a.next=3,e.contract().at("TJPai8XZ7QD9wpCCXdEnhWmCTWvHJjWG83");case 3:t.contract=a.sent;case 4:case"end":return a.stop()}}),a)})))()}}),g=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).displayData=[],n.state={tronwebaddress:"",candidates:[],hasVoted:!1,loading:!1,hasPendingBet:!1,betlevelNow:0,datalevel:0,datawon:0,dataSelected:0,dataprice:0,buyvalue:10,active:!1,showdata:n.displayData,postVal:"",tronWeb:{installed:!1,loggedIn:!1}},n.prependData=n.prependData.bind(Object(u.a)(n)),n.startGame=n.startGame.bind(Object(u.a)(n)),n.buildTowerInput=n.buildTowerInput.bind(Object(u.a)(n)),n.handleChange=n.handleChange.bind(Object(u.a)(n)),n.CashoutMM=n.CashoutMM.bind(Object(u.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(r.a.mark((function e(){var t,a=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.next=3,new Promise((function(e){var t={installed:!!window.tronWeb,loggedIn:window.tronWeb&&window.tronWeb.ready};if(t.installed)return a.setState({tronWeb:t}),e();var n=0,l=setInterval((function(){if(n>=10){return window.tronWeb=new p.a("https://api.trongrid.io","https://api.trongrid.io","https://api.trongrid.io"),a.setState({tronWeb:{installed:!1,loggedIn:!1}}),clearInterval(l),e()}if(t.installed=!!window.tronWeb,t.loggedIn=window.tronWeb&&window.tronWeb.ready,!t.installed)return n++;a.setState({tronWeb:t}),e()}),100)}));case 3:return this.state.tronWeb.loggedIn||(window.tronWeb.defaultAddress={hex:window.tronWeb.address.toHex("TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"),base58:"TWiWt5SEDzaEqS6kE5gandWMNfxR2B5xzg"},window.tronWeb.on("addressChanged",(function(){a.state.tronWeb.loggedIn||a.setState({tronWeb:{installed:!0,loggedIn:!0}})}))),e.next=6,E.setTronWeb(window.tronWeb);case 6:return e.t0=E.tronWeb.address,e.next=9,E.tronWeb.trx.getAccount();case 9:return e.t1=e.sent.address.toString(),t=e.t0.fromHex.call(e.t0,e.t1),e.next=13,this.setState({tronwebaddress:t});case 13:this.setState({loading:!1}),console.log(E.contract),setInterval((function(){a.updatedata()}),6e3),this.startEventListener(),this.updatedata();case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e){var t=e.target.value,a=120*t/100;document.getElementById("sec10").textContent=a,document.getElementById("sec11").textContent=a;a=160*t/100;document.getElementById("sec20").textContent=a,document.getElementById("sec21").textContent=a;a=200*t/100;document.getElementById("sec30").textContent=a,document.getElementById("sec31").textContent=a;a=300*t/100;document.getElementById("sec40").textContent=a,document.getElementById("sec41").textContent=a,this.setState({buyvalue:t})}},{key:"CashoutMM",value:function(){var e=this;E.contract.cashout().send({}).then((function(t){e.updatedata()})).catch((function(e){console.log(e)}))}},{key:"buildTowerInput",value:function(e){E.contract.buildTower(1,e).send({}).then((function(e){})).catch((function(e){console.log(e)}))}},{key:"startGame",value:function(){var e=this;E.contract.startGame(this.state.buyvalue).send({}).then((function(t){e.updatedata()})).catch((function(e){console.log(e)})),this.updatedata()}},{key:"updatedata",value:function(){var e=Object(o.a)(r.a.mark((function e(){var t=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E.contract.player().call().then((function(e){var t=e.toNumber();document.getElementById("player").textContent=t})),E.contract.maxbet().call().then((function(e){var t=e.toNumber();document.getElementById("maxbet").textContent=t/1e6})),E.contract.winkBal().call().then((function(e){var t=e.toNumber();document.getElementById("win").textContent=t/1e6})),E.contract.Mined().call().then((function(e){var t=e.toNumber();document.getElementById("Mined").textContent=t/1e6})),E.contract.totalWagered().call().then((function(e){var t=e.toNumber();document.getElementById("totalWagered").textContent=t/1e6})),E.contract.cash().call().then((function(e){var t=e.toNumber();document.getElementById("cash").textContent=t/1e6})),E.contract.totalWon().call().then((function(e){var t=e.toNumber();document.getElementById("totalWon").textContent=t/1e6})),E.contract.userBet(this.state.tronwebaddress).call().then((function(e){var a=e.level.toNumber();t.setState({betlevelNow:a})}));case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"startEventListener",value:function(){var e=this;E.contract.onBet().watch((function(t,a){var n=a.result;if(t)return console.log("Failed to bind the result : ",t);n&&(e.updatedata(),console.log("result",n),console.log("result0",n[0]),e.setState({datalevel:n[1]}),e.setState({datawon:n[3]}),e.setState({dataSelected:n[2]}),e.setState({dataprice:n[5]}),e.prependData())}))}},{key:"prependData",value:function(){this.displayData.unshift(l.a.createElement("div",{className:"datahis",key:+new Date+Math.random(),style:{marginBottom:"5px",background:this.state.datawon!==this.state.dataSelected?"brown":"green"}},l.a.createElement("div",null,"TBY2A...caJ6n"),l.a.createElement("div",null,this.state.datalevel),l.a.createElement("div",null,this.state.dataSelected),l.a.createElement("div",null,this.state.datawon),l.a.createElement("div",null,this.state.dataprice/1e6))),this.setState({showdata:"trying",postVal:""})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:""},l.a.createElement("div",{className:"contractStat"},l.a.createElement("ul",{style:{fontSize:"12px"}},l.a.createElement("li",null,"Bets Made :",l.a.createElement("br",null),l.a.createElement("span",{id:"totalWagered",style:{color:"#dbaf0f",fontSize:"17px"}}," ","?"," ")," ",l.a.createElement("img",{src:"images/win.jpg",alt:"wink logo",width:"30px",height:"30px",style:{borderRadius:"50%",border:"1px solid white"}})),l.a.createElement("li",null,"Players :",l.a.createElement("br",null),l.a.createElement("span",{id:"player",style:{color:"#dbaf0f",fontSize:"17px"}}," ","?"," ")," "),l.a.createElement("li",null,"Total Won :",l.a.createElement("br",null),l.a.createElement("span",{id:"totalWon",style:{color:"#dbaf0f",fontSize:"17px"}}," ","?"," ")," ",l.a.createElement("img",{src:"images/win.jpg",alt:"wink logo",width:"30px",height:"30px",style:{borderRadius:"50%",border:"1px solid white"}})))),l.a.createElement("div",{className:"mid"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"betarea"},l.a.createElement("div",{style:{color:"grey",fontSize:"12px",fontWeight:"bold"},align:"center"},"Total Mined :"," ",l.a.createElement("span",{style:{color:"#ffb000",fontFamily:"monospace"}},l.a.createElement("span",{id:"Mined"}," ?")," / 10,000.000,000 WTR"," ")),l.a.createElement("div",{className:"row",style:{background:"black",width:"95%",padding:"5px",margin:"auto"}}),l.a.createElement("div",{className:"tabs tab4 ".concat(0===this.state.betlevelNow?"opc":"","  ").concat(4===this.state.betlevelNow?"act_tab":""),id:"r4"},l.a.createElement("div",{className:"winwin",id:"id4",align:"center",style:{display:this.state.betlevelNow>=5?"block":"none"}},l.a.createElement("img",{src:"images/star.png",width:"25px",height:"25px",className:"sc11 imgdata"})),l.a.createElement("button",{className:"selectors sec4 ".concat(4===this.state.betlevelNow?"active":""," "),id:"sec40",onClick:function(){return e.buildTowerInput(1)}},"0.0000"),l.a.createElement("button",{className:"selectors sec4 ".concat(4===this.state.betlevelNow?"active":""," "),id:"sec41",onClick:function(){return e.buildTowerInput(2)}},"0.0000")),l.a.createElement("div",{className:"tabs tab3 ".concat(0===this.state.betlevelNow?"opc":""," ").concat(3===this.state.betlevelNow?"act_tab":""),id:"r3"},l.a.createElement("div",{className:"winwin",id:"id3",align:"center",style:{display:this.state.betlevelNow>=4?"block":"none"}},l.a.createElement("img",{src:"images/star.png",width:"25px",height:"25px",className:"sc11 imgdata"})),l.a.createElement("button",{className:"selectors sec3 ".concat(3===this.state.betlevelNow?"active":""," "),id:"sec30",onClick:function(){return e.buildTowerInput(1)}},"0.0000"),l.a.createElement("button",{className:"selectors sec3 ".concat(3===this.state.betlevelNow?"active":""," "),id:"sec31",onClick:function(){return e.buildTowerInput(2)}},"0.0000")),l.a.createElement("div",{className:"tabs tab2 ".concat(0===this.state.betlevelNow?"opc":"","  ").concat(2===this.state.betlevelNow?"act_tab":""),id:"r2"},l.a.createElement("div",{className:"winwin",id:"id2",align:"center",style:{display:this.state.betlevelNow>=3?"block":"none"}},l.a.createElement("img",{src:"images/star.png",width:"25px",height:"25px",className:"sc11 imgdata"})),l.a.createElement("button",{className:"selectors sec2 ".concat(2===this.state.betlevelNow?"active":""," "),id:"sec20",onClick:function(){return e.buildTowerInput(1)}},"0.0000"),l.a.createElement("button",{className:"selectors sec2 ".concat(2===this.state.betlevelNow?"active":""," "),id:"sec21",onClick:function(){return e.buildTowerInput(2)}},"0.0000")),l.a.createElement("div",{className:"tabs tab1 ".concat(0===this.state.betlevelNow?"opc":""," ").concat(1===this.state.betlevelNow?"act_tab":""),id:"r1"},l.a.createElement("div",{className:"winwin",id:"id1",align:"center",style:{display:this.state.betlevelNow>=2?"block":"none"}},l.a.createElement("img",{src:"images/star.png",width:"25px",height:"25px",className:"sc11 imgdata"})),l.a.createElement("button",{className:"selectors sec1 ".concat(1===this.state.betlevelNow?"active":""," "),id:"sec10",onClick:function(){return e.buildTowerInput(1)}},"0.0000"),l.a.createElement("button",{className:"selectors sec1 ".concat(1===this.state.betlevelNow?"active":""," "),id:"sec11",onClick:function(){return e.buildTowerInput(2)}},"0.0000")),l.a.createElement("label",{className:"btn start",onClick:this.startGame,style:{display:0===this.state.betlevelNow?"block":"none"}},"Start New Game"),l.a.createElement("label",{className:"btn cashout",style:{display:0===this.state.betlevelNow?"none":"block"},onClick:this.CashoutMM},"CASH OUT ",l.a.createElement("span",{id:"cash"}," ?")),l.a.createElement("br",null),l.a.createElement("div",{style:{fontFamily:"monospace",background:"black",padding:"4px"},align:"center"},l.a.createElement("div",{align:"center"},l.a.createElement("i",{className:"fas fa-wallet fa-1x"})," :"," ",l.a.createElement("span",{id:"win"}," ? ")," ",l.a.createElement("img",{src:"images/win.jpg",width:"25px",height:"25px",className:"sc11 imgdata"})),"Bet Amount : ",l.a.createElement("span",{id:"maxbet"},"?")," MAX",l.a.createElement("div",{className:"inputdata"},l.a.createElement("input",{type:"number",id:"buy",placeholder:"Wink Amount",value:this.state.buyvalue,onChange:this.handleChange}),l.a.createElement("div",{className:"half"},"1/2"),l.a.createElement("div",{className:"half"},"2x"),l.a.createElement("div",{className:"half"},"MAX"))),l.a.createElement("br",null),l.a.createElement("div",{align:"center"},"How to play"))))),l.a.createElement("div",null,l.a.createElement("div",{className:"container history"},l.a.createElement("ul",null,l.a.createElement("li",{className:"his1"},"All Bets "),l.a.createElement("li",{className:"his2"},"My Bets ")),l.a.createElement("div",{className:"historyheader"},l.a.createElement("div",{className:"player1"},"Player"),l.a.createElement("div",{className:"player1"},"Level"),l.a.createElement("div",{className:"player1"},"Bet"),l.a.createElement("div",{className:"player1"},"Result"),l.a.createElement("div",{className:"player1"},"Payout")),l.a.createElement("div",{className:"",id:"historydata"},l.a.createElement("div",null,this.displayData),l.a.createElement("div",{className:"datahis"},l.a.createElement("div",null,"TBY2A...caJ6n"),l.a.createElement("div",null,"2"),l.a.createElement("div",null,"1"),l.a.createElement("div",null,"1"),l.a.createElement("div",null,"1")),l.a.createElement("div",{className:"datahis",style:{background:"brown"}},l.a.createElement("div",null,"TBY2A...caJ6n"),l.a.createElement("div",null,"2"),l.a.createElement("div",null,"1"),l.a.createElement("div",null,"1"),l.a.createElement("div",null,"1")),l.a.createElement("div",{className:"datahis"},l.a.createElement("div",null,"TBY2A...caJ6n"),l.a.createElement("div",null,"2"),l.a.createElement("div",null,"1"),l.a.createElement("div",null,"1"),l.a.createElement("div",null,"1"))))))}}]),a}(l.a.Component);s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)),document.getElementById("root"))},58:function(e,t,a){e.exports=a(198)},63:function(e,t,a){},91:function(e,t){},92:function(e,t){}},[[58,1,2]]]);
//# sourceMappingURL=main.2a02bfe2.chunk.js.map