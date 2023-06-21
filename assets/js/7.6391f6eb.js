(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{325:function(e,t,r){e.exports=r.p+"assets/img/venus-arch.5976e096.png"},381:function(e,t,r){"use strict";r.r(t);var n=r(17),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"background"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),n("p",[e._v("Starting filecoin storage providing could be a daunting task given not only the large initial hardware and filecoin collateral "),n("a",{attrs:{href:"https://filscan.io/calculator",target:"_blank",rel:"noopener noreferrer"}},[e._v("investment"),n("OutboundLink")],1),e._v(" but also the entailing operation commitment. With ideas of distributed infrastracture, optimized deal experience and new storage power service in mind, Venus implementation of filecoin will help storage providers turn, what community say, "),n("a",{attrs:{href:"https://filecoinproject.slack.com/archives/CEGN061C5/p1610810730117900?thread_ts=1610809298.116800&cid=CEGN061C5",target:"_blank",rel:"noopener noreferrer"}},[e._v("a full time job"),n("OutboundLink")],1),e._v(" into a full fledged solution that is more friendly to opeartion. Hope this tutorial will get you started mining in no time!")]),e._v(" "),n("h2",{attrs:{id:"start-storage-providing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#start-storage-providing"}},[e._v("#")]),e._v(" Start Storage Providing")]),e._v(" "),n("p",[e._v("There are two ways of getting started with storage providing using Venus.")]),e._v(" "),n("ol",[n("li",[e._v("Deploy minimum hardware and gain access to a publicly hosted Venus chain service. Check out "),n("a",{attrs:{href:"https://venushub.io/incubator/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Venus SP Incubator program"),n("OutboundLink")],1),e._v(" to learn how you can gain access to a free hosted chain service."),e._v(" (Please refer to "),n("RouterLink",{attrs:{to:"/operation/join-a-cs.html"}},[e._v("this")]),e._v(" tutorial to learn more)")],1),e._v(" "),n("li",[e._v("Deploy a Venus chain service by yourself. (Please refer to "),n("RouterLink",{attrs:{to:"/operation/deploy-a-cs.html"}},[e._v("this")]),e._v(" tutorial to learn more)")],1)]),e._v(" "),n("p",[e._v("After following the rest of the trutorial and successful deployment, you can start pledging sectors, grow power and evantually obtain block rewards through your contribution to the network's storage capacity!")]),e._v(" "),n("h2",{attrs:{id:"introducing-venus-components"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#introducing-venus-components"}},[e._v("#")]),e._v(" Introducing Venus Components")]),e._v(" "),n("p",[e._v("Depending on its role in a storage system, components could be loosely broken down into two category: chain service components and local components. Chain service could be thought as the plumbings of what you need to start sealing sectors. Most of the interactions with the blockchain like chain synchronizations, sending messages, winning a block and etc are handled by the chain service. The idea is that many miners could all use one chain service, thus reducing overhead in maintainence. Local components handles sealing and proving of your sectors, where you will be spend most of your time if you choose to use a publicly hosted chain service. Note also that both "),n("code",[e._v("venus-market")]),e._v(" and "),n("code",[e._v("venus-wallet")]),e._v(" component could be deployed as either chain service or local component.")]),e._v(" "),n("table",[n("thead",[n("tr",[n("th",[e._v("name")]),e._v(" "),n("th",[e._v("role")]),e._v(" "),n("th",[e._v("Chain_Service/Local")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[n("a",{attrs:{href:"https://github.com/filecoin-project/venus",target:"_blank",rel:"noopener noreferrer"}},[e._v("venus"),n("OutboundLink")],1)]),e._v(" "),n("td",[e._v("daemon for chain interactions")]),e._v(" "),n("td",[e._v("Chain_Service")])]),e._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://github.com/filecoin-project/venus-miner",target:"_blank",rel:"noopener noreferrer"}},[e._v("venus-miner"),n("OutboundLink")],1)]),e._v(" "),n("td",[e._v("block winning and proving")]),e._v(" "),n("td",[e._v("Chain_Service")])]),e._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://github.com/filecoin-project/venus-messager",target:"_blank",rel:"noopener noreferrer"}},[e._v("venus-messager"),n("OutboundLink")],1)]),e._v(" "),n("td",[e._v("chain message management")]),e._v(" "),n("td",[e._v("Chain_Service")])]),e._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://github.com/filecoin-project/venus-auth",target:"_blank",rel:"noopener noreferrer"}},[e._v("venus-auth"),n("OutboundLink")],1)]),e._v(" "),n("td",[e._v("utility for authorized use of shared modules")]),e._v(" "),n("td",[e._v("Chain_Service")])]),e._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://github.com/ipfs-force-community/venus-gateway",target:"_blank",rel:"noopener noreferrer"}},[e._v("venus-gateway"),n("OutboundLink")],1)]),e._v(" "),n("td",[e._v("utility for controlled access point of shared modules")]),e._v(" "),n("td",[e._v("Chain_Service")])]),e._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://github.com/filecoin-project/venus-wallet",target:"_blank",rel:"noopener noreferrer"}},[e._v("venus-wallet"),n("OutboundLink")],1)]),e._v(" "),n("td",[e._v("addresses/keys management")]),e._v(" "),n("td",[e._v("Chain_Service/Local")])]),e._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://github.com/ipfs-force-community/venus-cluster",target:"_blank",rel:"noopener noreferrer"}},[e._v("venus-cluster"),n("OutboundLink")],1)]),e._v(" "),n("td",[e._v("job scheduling, sealing and proving")]),e._v(" "),n("td",[e._v("Local")])]),e._v(" "),n("tr",[n("td",[n("a",{attrs:{href:"https://github.com/filecoin-project/venus-market",target:"_blank",rel:"noopener noreferrer"}},[e._v("venus-market"),n("OutboundLink")],1)]),e._v(" "),n("td",[e._v("deal making")]),e._v(" "),n("td",[e._v("Chain_Service/Local")])]),e._v(" "),n("tr",[n("td",[n("s",[n("a",{attrs:{href:"https://github.com/filecoin-project/venus-sealer",target:"_blank",rel:"noopener noreferrer"}},[e._v("venus-sealer"),n("OutboundLink")],1),e._v(", "),n("a",{attrs:{href:"https://github.com/filecoin-project/venus-sealer",target:"_blank",rel:"noopener noreferrer"}},[e._v("venus-worker"),n("OutboundLink")],1)])]),e._v(" "),n("td",[e._v("‼️Deprecated; "),n("s",[e._v("job scheduling, sealing and proving")])]),e._v(" "),n("td",[n("s",[e._v("Local")])])])])]),e._v(" "),n("h2",{attrs:{id:"mining-architecture"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mining-architecture"}},[e._v("#")]),e._v(" Mining Architecture")]),e._v(" "),n("p",[e._v("Diagram below illustrates how Venus components interacts with one and another.")]),e._v(" "),n("p",[n("img",{attrs:{src:r(325),alt:"venus-cluster"}})]),e._v(" "),n("h2",{attrs:{id:"hardware-requirements"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hardware-requirements"}},[e._v("#")]),e._v(" Hardware requirements")]),e._v(" "),n("p",[e._v("Learn more about hardware requirements "),n("a",{attrs:{href:"https://docs.filecoin.io/mine/hardware-requirements/#general-hardware-requirements",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(". Check out this "),n("a",{attrs:{href:"https://medium.com/zeethio/filecoin-solo-mining-rig-a549e7fa230d",target:"_blank",rel:"noopener noreferrer"}},[e._v("solo mining guide"),n("OutboundLink")],1),e._v(" by one of the comunity members. As a sidetone, everyone may have different hardware setups, and it is recommended that you "),n("a",{attrs:{href:"#finding-optimal-configurations"}},[e._v("find your own optimal configurations")]),e._v(" through trial and errors.")]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("For "),n("code",[e._v("damocles")]),e._v(", you could refer to this "),n("a",{attrs:{href:"https://github.com/filecoin-project/venus/discussions/4865",target:"_blank",rel:"noopener noreferrer"}},[e._v("community test report"),n("OutboundLink")],1),e._v(" for hardware reference. Plan your hardware carefully, when in doubt please seek help from "),n("a",{attrs:{href:"https://filecoinproject.slack.com/archives/C028PCH8L31",target:"_blank",rel:"noopener noreferrer"}},[e._v("Venus Master"),n("OutboundLink")],1),e._v(".")])])])}),[],!1,null,null,null);t.default=o.exports}}]);