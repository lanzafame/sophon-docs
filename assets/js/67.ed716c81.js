(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{434:function(t,s,a){"use strict";a.r(s);var e=a(17),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"venus-docker-使用文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-docker-使用文档"}},[t._v("#")]),t._v(" Venus Docker 使用文档")]),t._v(" "),a("h2",{attrs:{id:"快速部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速部署"}},[t._v("#")]),t._v(" 快速部署")]),t._v(" "),a("h3",{attrs:{id:"docker-compose"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose"}},[t._v("#")]),t._v(" docker compose")]),t._v(" "),a("p",[t._v("可以通过 docker compose 在当前主机上，部署 venus 的一套云组件。")]),t._v(" "),a("ul",[a("li",[t._v("获取 compose 配置文件")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/LinZexiao/venus-docker-compose.git -b v1.11\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" venus-docker-compose\n\n")])])]),a("ul",[a("li",[t._v("设置 snapshot 文件路径 和 网络类型")])]),t._v(" "),a("p",[t._v("下面以 "),a("code",[t._v("calibration")]),t._v(" 网络为例子")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" chain.env\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# * The path to you snapshot file")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Must be a absolute path")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SNAP_SHOT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/path/to/your/snapshot.car\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# * The net type you want to start")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Must be one of mainnet,2k,calibrationnet,interopnet,butterflynet,force, default is mainnet")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NET_TYPE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("calibrationnet\n")])])]),a("ul",[a("li",[t._v("启动智子服务")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" chain\n")])])]),a("p",[t._v("云环境启动后会需要一定的时间进行初始化，初始化完成后，就可以使用 auth 组件签发 token（详细见 使用 章节），并将下游组件的连接到本主机即可。（另：集群中使用统一的 admin token 会导出在 "),a("code",[t._v("./.venus/env/")]),t._v(" 中）\n为了方便修改配置，默认会将容器中的 repo 映射到本地的 "),a("code",[t._v("./.venus/root/")]),t._v("中，修改完配置之后直接重启容器即可")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("在 miner 初始化完成之后要记得通过 auth 绑定到相应的用户，参见"),a("a",{attrs:{href:"https://github.com/filecoin-project/venus-auth/blob/master/docs/zh/%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B.md#miner-%E7%9B%B8%E5%85%B3",target:"_blank",rel:"noopener noreferrer"}},[t._v("添加矿工"),a("OutboundLink")],1)])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("在 miner 初始化完成之后，需要将 miner 关联到 market，参见"),a("a",{attrs:{href:"https://venus.filecoin.io/zh/market/using-venus-market-for-miner.html#%E4%BD%BF%E7%94%A8%E8%87%AA%E5%B7%B1%E7%9A%84venus%E8%8A%82%E7%82%B9",target:"_blank",rel:"noopener noreferrer"}},[t._v("将 miner 的 Multiaddrs 和 PeerID 设置为 market 的对应地址"),a("OutboundLink")],1),t._v("部分")])]),t._v(" "),a("h3",{attrs:{id:"单组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单组件"}},[t._v("#")]),t._v(" 单组件")]),t._v(" "),a("p",[t._v("适用于在不同主机上进行 venus 组件 docker 的部署，")]),t._v(" "),a("h4",{attrs:{id:"venus-auth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-auth"}},[t._v("#")]),t._v(" Venus Auth")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker run -d --name venus-auth --net"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host filvenus/venus-auth run\n")])])]),a("h4",{attrs:{id:"venus"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus"}},[t._v("#")]),t._v(" Venus")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker run -d --name venus --net"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host -v /path/to/snapshot.car:/snapshot.car "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--env "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HTTPS_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PROXY_IF_NEED"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nfilvenus/venus daemon "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("NETTYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--auth-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_AUTH_URL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--auth-token"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n--import-snapshot /snapshot.car \n")])])]),a("h4",{attrs:{id:"venus-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-gateway"}},[t._v("#")]),t._v(" Venus Gateway")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker run -d --name venus-gateway --net"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host filvenus/venus-gateway "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--listen /ip4/0.0.0.0/tcp/45132 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\nrun --auth-url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http://VENUS_AUTH_IP_ADDRESS:PORT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--auth-token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("venus-auth token"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h4",{attrs:{id:"venus-messager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-messager"}},[t._v("#")]),t._v(" Venus Messager")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker run -d  --name venus-messager  --net"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host filvenus/venus-messager run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--auth-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http://VENUS_AUTH_IP_ADDRESS:PORT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--node-url /ip4/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_DAEMON_IP_ADDRESS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/tcp/3453 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--gateway-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/ip4/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IP_ADDRESS_OF_VENUS_GATEWAY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/tcp/45132 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--auth-token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SHARED_ADMIN_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n")])])]),a("h4",{attrs:{id:"venus-miner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-miner"}},[t._v("#")]),t._v(" Venus Miner")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker run -d  --name venus-miner --net"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host filvenus/venus-miner init "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--auth-api "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http://VENUS_AUTH_IP_ADDRESS:PORT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SHARED_ADMIN_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--gateway-api /ip4/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_GATEWAY_IP_ADDRESS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/tcp/45132 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--api /ip4/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_DAEMON_IP_ADDRESS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/tcp/3453 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--slash-filter "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v("\n")])])]),a("h4",{attrs:{id:"venus-market"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-market"}},[t._v("#")]),t._v(" Venus Market")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker run -d --name venus-market --net"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/path/to/your/PieceStorage"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":/PieceStorage\nfilvenus/venus-market  pool-run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--node-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/ip4/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_NODE_IP_ADDRESS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/tcp/3453  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--auth-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_AUTH_IP_ADDRESS:PORT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--gateway-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/ip4/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_GATEWAY_IP_ADDRESS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/tcp/45132 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--messager-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/ip4/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_MESSAGER_IP_ADDRESS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/tcp/39812/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--auth-token"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SHARED_ADMIN_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h4",{attrs:{id:"venus-wallet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#venus-wallet"}},[t._v("#")]),t._v(" Venus Wallet")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker run -d --name venus-market --net"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/path/to/your/PieceStorage"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":/PieceStorage\nfilvenus/venus-market  pool-run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--node-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/ip4/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_NODE_IP_ADDRESS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/tcp/3453  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--auth-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_AUTH_IP_ADDRESS:PORT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--gateway-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/ip4/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_GATEWAY_IP_ADDRESS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/tcp/45132 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--messager-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/ip4/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_MESSAGER_IP_ADDRESS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/tcp/39812/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--auth-token"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SHARED_ADMIN_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"docker-容器的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-容器的使用"}},[t._v("#")]),t._v(" Docker 容器的使用")]),t._v(" "),a("h4",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),a("p",[t._v("所有组件都可以使用以下通用的命令格式进行调用，组件详细的子命令参见 组件详细文档，以及 --help flag")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker run -it "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("DOCKKER_NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_COMPONENT_NAME"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("global options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h4",{attrs:{id:"举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[t._v("#")]),t._v(" 举例")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Auth")]),t._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it filvenus/venus-auth ./venus-auth "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("global options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Venus")]),t._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it filvenus/venus ./venus "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("global options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Gateway")]),t._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it filvenus/venus-gateway ./venus-gateway "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("global options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Messager")]),t._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it filvenus/venus-messager ./venus-messager "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("global options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# miner")]),t._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it filvenus/venus-miner "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("global options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("command")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("command options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arguments"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("启动容器的方式不同，容器的名字也不一样，可以使用  "),a("code",[t._v("docker container ls")]),t._v(" 来查看容器的名字，也可以在容器启动的时候自己指定容器的名字。")])]),t._v(" "),a("h4",{attrs:{id:"环境调整和配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境调整和配置文件"}},[t._v("#")]),t._v(" 环境调整和配置文件")]),t._v(" "),a("p",[t._v("建议将配置文件映射到本地进行配置文件相关的配置，需要在启动容器的时候建立映射。")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# venus 举例")]),t._v("\ndocker run -d --name filvenus/venus --net"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-v /path/to/snapshot.car:/snapshot.car "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n-v /path/to/config.json:/root/.venus/config.json  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#配置文件映射")]),t._v("\n--env "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("HTTPS_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PROXY_IF_NEED"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\ntanlang/venus "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("NETTYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--auth-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_AUTH_URL"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--auth-token"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--import-snapshot /snapshot.car \n")])])]),a("p",[t._v("如果需要进入容器修改配置文件或者调整组件运行环境的话：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -it filvenus/venus /bin/bash\n")])])]),a("h2",{attrs:{id:"自己开发构建镜像"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自己开发构建镜像"}},[t._v("#")]),t._v(" 自己开发构建镜像")]),t._v(" "),a("h3",{attrs:{id:"组件的构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件的构建"}},[t._v("#")]),t._v(" 组件的构建")]),t._v(" "),a("h4",{attrs:{id:"任意组件的构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任意组件的构建"}},[t._v("#")]),t._v(" 任意组件的构建")]),t._v(" "),a("p",[t._v("在对应组件的根目录下执行 "),a("code",[t._v("make docker")]),t._v(" 即可构建对应的组件镜像")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("\n```shell\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 到对应组件根目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" docker\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 网络受限需要使用代理时")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" docker "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("BUILD_DOCKER_PROXY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("socks5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" https "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("://"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IP"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("PORT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" \n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);