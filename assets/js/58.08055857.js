(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{426:function(s,e,t){"use strict";t.r(e);var a=t(17),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"sophon-auth"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sophon-auth"}},[s._v("#")]),s._v(" Sophon Auth")]),s._v(" "),t("p",[t("code",[s._v("sophon-auth")]),s._v(" 是 "),t("code",[s._v("venus")]),s._v(" 集群统一授权服务。")]),s._v(" "),t("ul",[t("li",[s._v("权限验证")]),s._v(" "),t("li",[s._v("Trace 采集")]),s._v(" "),t("li",[s._v("RESTful API")]),s._v(" "),t("li",[s._v("管理用户及请求限流信息")])]),s._v(" "),t("h2",{attrs:{id:"快速启动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快速启动"}},[s._v("#")]),s._v(" 快速启动")]),s._v(" "),t("h3",{attrs:{id:"下载代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载代码"}},[s._v("#")]),s._v(" 下载代码")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/ipfs-force-community/sophon-auth.git\n")])])]),t("h3",{attrs:{id:"编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译"}},[s._v("#")]),s._v(" 编译")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n")])])]),t("h3",{attrs:{id:"启动服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[s._v("#")]),s._v(" 启动服务")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth run\n")])])]),t("h2",{attrs:{id:"配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),t("blockquote",[t("p",[s._v("默认会在 ~/.sophon-auth/config.tml 生成配置文件")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('# 服务使用端口\nListen = "127.0.0.1:8989"\nReadTimeout = "1m"\nWriteTimeout = "1m"\nIdleTimeout = "1m"\n\n[db]\n  # 支持: badger (默认), mysql\n  type = "badger"\n  # 以下参数适用于MySQL\n  DSN = "rennbon:111111@(127.0.0.1:3306)/auth_server?parseTime=true&loc=Local&charset=utf8mb4&collation=utf8mb4_unicode_ci&readTimeout=10s&writeTimeout=10s"\n  # conns 1500 concurrent\n  maxOpenConns = 64\n  maxIdleConns = 128\n  maxLifeTime = "120s"\n  maxIdleTime = "30s"\n\n[log]\n  # trace,debug,info,warning,error,fatal,panic\n  # 默认日志级别\n  logLevel = trace\n  # db type, 1:influxDB\n  type = 1\n  # db hook switch\n  hookSwitch = true\n\n[Trace]\n  # 是否启用 trace\n  JaegerTracingEnabled = true\n  # 收集的频率\n  ProbabilitySampler = 1.0\n  JaegerEndpoint = "127.0.0.1:6831"\n  ServerName = "sophon-auth"\n')])])]),t("h2",{attrs:{id:"cli-操作指南"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cli-操作指南"}},[s._v("#")]),s._v(" CLI 操作指南")]),s._v(" "),t("h3",{attrs:{id:"查看帮助"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看帮助"}},[s._v("#")]),s._v(" 查看帮助")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth -h\n\nNAME:\n   sophon-auth - A new cli application\n\nUSAGE:\n   sophon-auth "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("global options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arguments"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nVERSION:\n   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.6")]),s._v(".0+git.ad9a046\n\nCOMMANDS:\n   run      run sophon-auth daemon\n   token    token "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n   user     user "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n   miner    miner "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n   signer   signer "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n   help, h  Shows a list of commands or "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" one "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n\nGLOBAL OPTIONS:\n   --config value, -c value  config "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" path\n   --help, -h                show "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n   --version, -v             print the version "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"venus-auth-基础操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#venus-auth-基础操作"}},[s._v("#")]),s._v(" venus auth 基础操作")]),s._v(" "),t("h4",{attrs:{id:"user-相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#user-相关"}},[s._v("#")]),s._v(" user 相关")]),s._v(" "),t("p",[t("code",[s._v("user")]),s._v(" 是 "),t("code",[s._v("venus")]),s._v(" 链服务的对象，通常是接入链服务的某个或多个矿工在链服务中的唯一身份标识。")]),s._v(" "),t("ol",[t("li",[s._v("增加 user")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth user "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" test-user01\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nAdd user success: dc922b61-65ac-4045-8894-f0356879cf7a, next can "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" miner "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this user\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("查询 user")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth user get test-user01\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nname: test-user01\nstate enabled   // "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(": disable, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(": "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v("\ncomment: \ncreateTime: Thu, 08 Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" 02:50:50 UTC\nupdateTime: Thu, 08 Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" 02:50:50 UTC\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("列出 user")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth user list\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nnumber: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nname: test-user01\nstate: enabled\ncreateTime: Thu, 08 Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" 02:50:50 UTC\nupdateTime: Thu, 08 Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" 02:50:50 UTC\n\nnumber: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\nname: test-user02\nstate: enabled\ncreateTime: Thu, 08 Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" 02:51:09 UTC\nupdateTime: Thu, 08 Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" 02:51:09 UTC\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("更新 user")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth user update --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test-user01 --state"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" --comment"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"this is comment"')]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nupdate user success\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("激活 user")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth user active test-user01\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nactive user success\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("删除 user")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth user delete test-user01\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nremove user success\n")])])]),t("ol",{attrs:{start:"7"}},[t("li",[s._v("恢复 user")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth user recover test-user01\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nrecover user success\n")])])]),t("h4",{attrs:{id:"token-相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#token-相关"}},[s._v("#")]),s._v(" token 相关")]),s._v(" "),t("p",[t("code",[s._v("token")]),s._v(" 是 "),t("code",[s._v("user")]),s._v(" 的矿工请求链服务接口的通行证，具有权限级别的划分。")]),s._v(" "),t("ol",[t("li",[s._v("为"),t("code",[s._v("user")]),s._v("生成"),t("code",[s._v("token")])])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth token gen --perm admin test-user01\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\ngenerate token success: ***\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("列出 token")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth token list\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nnum     name            perm            createTime              token\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("       test-user01     admin   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v("-09-08 03:42:50     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdC11c2VyMDEiLCJwZXJtIjoiYWRtaW4iLCJleHQiOiIifQ.qdJ5FNxUAa79X3d0z8TPjw0dWCgQRZBUlVxlOL9-da0\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("       test-user02     sign    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v("-09-08 03:43:57     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdC11c2VyMDIiLCJwZXJtIjoic2lnbiIsImV4dCI6IiJ9.3EQE3h7_EN5WTrSmyIRr2V-0qHOuU7dwr9PN7UI1JT0\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("查询 token")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth token get --name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test-user01\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nname:        test-user01\nperm:        admin\ncreate time: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v("-09-08 03:42:50.224629248 +0000 UTC\ntoken:       eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdC11c2VyMDEiLCJwZXJtIjoiYWRtaW4iLCJleHQiOiIifQ.qdJ5FNxUAa79X3d0z8TPjw0dWCgQRZBUlVxlOL9-da0\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("删除 token")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth token "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdG1pbmVyIiwicGVybSI6ImFkbWluIiwiZXh0IjoiIn0.8yNodOcALJ8fy4h-Hh5yLfaR27cD4a8ePd9BkmWlfEo\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nremove token success: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdG1pbmVyIiwicGVybSI6ImFkbWluIiwiZXh0IjoiIn0.8yNodOcALJ8fy4h-Hh5yLfaR27cD4a8ePd9BkmWlfEo\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("恢复 token")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth token recover eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdG1pbmVyIiwicGVybSI6ImFkbWluIiwiZXh0IjoiIn0.8yNodOcALJ8fy4h-Hh5yLfaR27cD4a8ePd9BkmWlfEo\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nrecover token success: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdG1pbmVyIiwicGVybSI6ImFkbWluIiwiZXh0IjoiIn0.8yNodOcALJ8fy4h-Hh5yLfaR27cD4a8ePd9BkmWlfEo\n")])])]),t("h4",{attrs:{id:"miner-相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#miner-相关"}},[s._v("#")]),s._v(" miner 相关")]),s._v(" "),t("ol",[t("li",[s._v("增加矿工")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth user miner "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" test-user01 f0128788\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\ncreate user:test-user01 miner:f0128788 success.\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("列出用户下的矿工")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth user miner list test-user01\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nuser: test-user01, miner count:1\nidx  miner     create-time                    \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    f0128788  Thu, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" Aug "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":20:11 CST\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("某用户存在某个矿工")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth user miner exist --user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test-user01 f0128788\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("查询系统中存在某个矿工")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth miner has f0128788\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("删除矿工")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth user miner delete f0128788\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nremove miner:f0128788 success.\n")])])]),t("h4",{attrs:{id:"signer-相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signer-相关"}},[s._v("#")]),s._v(" signer 相关")]),s._v(" "),t("p",[t("code",[s._v("signer")]),s._v(" 指的是具有签名能力的地址，与"),t("code",[s._v("user")]),s._v("绑定。一个"),t("code",[s._v("signer")]),s._v("可以绑定到多个"),t("code",[s._v("user")]),s._v("，对应多个用户的"),t("code",[s._v("venus-wallet")]),s._v("有同一个钱包，可用于多用户之间互相帮助签名。")]),s._v(" "),t("p",[t("code",[s._v("signer")]),s._v(" 的绑定在"),t("code",[s._v("venus-wallet")]),s._v("连接到链服务时自动绑定，也可以由链服务管理员用命令绑定，这里介绍后者的相关命令。")]),s._v(" "),t("ol",[t("li",[s._v("给用户注册签名地址")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth user signer register test-user01 f3wylwd6pclppme4qmbgwled5xpsbgwgqbn2alxa7yahg2gnbfkipsdv6m764xm5coizujmwdmkxeugplmorha\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\ncreate user:test-user01 signer address:f3wylwd6pclppme4qmbgwled5xpsbgwgqbn2alxa7yahg2gnbfkipsdv6m764xm5coizujmwdmkxeugplmorha success.\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("列出注册到用户的签名地址")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth user signer list test-user01\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nuser: test-user01, signer count:3\nidx  signer                                                                                  create-time                    \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    f15rynkupqyfx5ebvaishg7duutwb5ooq2qpaikua                                               Thu, 08 Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" 05:43:34 UTC  \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("    f3r47fkdzfmtex5ic3jnwlzc7bkpbj7s4d6limyt4f57t3cuqq5nuvhvwv2cu2a6iga2s64vjqcxjqiezyjooq  Thu, 08 Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" 05:43:42 UTC  \n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("    f3wylwd6pclppme4qmbgwled5xpsbgwgqbn2alxa7yahg2gnbfkipsdv6m764xm5coizujmwdmkxeugplmorha  Thu, 08 Sep "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v(" 05:41:25 UTC \n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("某用户存在某个签名地址")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth user signer exist --user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test-user01 f15rynkupqyfx5ebvaishg7duutwb5ooq2qpaikua\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("系统中存在某个签名地址")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth signer has f15rynkupqyfx5ebvaishg7duutwb5ooq2qpaikua\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("删除用户的签名地址")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth user signer unregister --user"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("test-user03 f1sgeoaugenqnzftqp7wvwqebcozkxa5y7i56sy2q\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nunregister signer:f1sgeoaugenqnzftqp7wvwqebcozkxa5y7i56sy2q of test-user03 success.\n")])])]),t("ol",{attrs:{start:"6"}},[t("li",[s._v("删除签名地址")])]),s._v(" "),t("p",[s._v("将会删除所有"),t("code",[s._v("user")]),s._v("下注册的地址。")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth signer del --really-do-it f3wylwd6pclppme4qmbgwled5xpsbgwgqbn2alxa7yahg2gnbfkipsdv6m764xm5coizujmwdmkxeugplmorha\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\ndelete success\n")])])]),t("h4",{attrs:{id:"用户请求限流相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用户请求限流相关"}},[s._v("#")]),s._v(" 用户请求限流相关")]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth user rate-limit -h\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nNAME:\n   sophon-auth user rate-limit - A new cli application\n\nUSAGE:\n   sophon-auth user rate-limit "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("arguments"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nCOMMANDS:\n   "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" user request rate limit\n   update   update user request rate limit\n   get      get user request rate limit\n   del      delete user request rate limit\n   help, h  Shows a list of commands or "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" one "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v("\n\nOPTIONS:\n   --help, -h  show "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("ol",[t("li",[s._v("增加请求限流")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# show help")]),s._v("\nAME:\n   sophon-auth user rate-limit "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" - "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" user request rate limit\n\nUSAGE:\n   sophon-auth user rate-limit "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command options"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" user rate-limit "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("limitAmount"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("duration"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("2h, 1h:20m, 2m10s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\nOPTIONS:\n   --id value  rate limit "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" to update\n   --help, -h  show "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("default: "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n./sophon-auth user rate-limit "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" testminer2 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" 1m\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nupsert user rate limit success: dee7e326-3b8b-4e38-9de7-1bee9bdffa9d\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("更新请求限流")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth user rate-limit update testminer2 dee7e326-3b8b-4e38-9de7-1bee9bdffa9d "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" 1m\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nupsert user rate limit success: dee7e326-3b8b-4e38-9de7-1bee9bdffa9d\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("查新请求限流")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth user rate-limit get testminer2\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\nuser:testminer2, limit id:dee7e326-3b8b-4e38-9de7-1bee9bdffa9d, request limit amount:100, duration:0.02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("h"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("删除请求限流")])]),s._v(" "),t("div",{staticClass:"language-shell script extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./sophon-auth user rate-limit del testminer2 dee7e326-3b8b-4e38-9de7-1bee9bdffa9d\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# res")]),s._v("\ndelete rate limit success, dee7e326-3b8b-4e38-9de7-1bee9bdffa9d\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);