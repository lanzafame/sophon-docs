(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{382:function(t,s,a){"use strict";a.r(s);var e=a(17),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"pre-requisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-requisites"}},[t._v("#")]),t._v(" Pre-requisites")]),t._v(" "),a("p",[t._v("Before diving into deployment of your mining operation, please make sure you go through the following steps.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("It is recommended that you test your setup in calibration network before deploying on mainnet.")])]),t._v(" "),a("h3",{attrs:{id:"setup-your-permanent-storage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-your-permanent-storage"}},[t._v("#")]),t._v(" Setup your permanent storage")]),t._v(" "),a("p",[t._v("Choose a network file system that you are familiar with (NFS for example) and deploy your storage cluster.")]),t._v(" "),a("h3",{attrs:{id:"software-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#software-dependencies"}},[t._v("#")]),t._v(" Software dependencies")]),t._v(" "),a("p",[t._v("You will need to install these "),a("a",{attrs:{href:"https://lotus.filecoin.io/lotus/install/linux/#software-dependencies",target:"_blank",rel:"noopener noreferrer"}},[t._v("software dependencies"),a("OutboundLink")],1),t._v(" (same as Lotus) before running venus.")]),t._v(" "),a("h2",{attrs:{id:"install-venus-auth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-venus-auth"}},[t._v("#")]),t._v(" Install venus-auth")]),t._v(" "),a("p",[t._v("Download and compile the source code of venus-auth.")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/filecoin-project/venus-auth.git\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" venus-auth\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("RELEASE_TAG"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" \n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" ./venus-auth run "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" auth.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Default config file for Venus-auth is located at "),a("code",[t._v("~/.venus-auth/config.toml")]),t._v(".")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Logs")]),t._v(" "),a("p",[t._v("Log defaults printing to console. InfluxDB is supported through configuration.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("port")]),t._v(" "),a("p",[t._v("The default port of "),a("code",[t._v("venus-auth")]),t._v(" is "),a("code",[t._v("8989")]),t._v(".")])]),t._v(" "),a("h3",{attrs:{id:"using-mysql-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-mysql-optional"}},[t._v("#")]),t._v(" Using MySQL (Optional)")]),t._v(" "),a("p",[t._v("MySQL 5.7 or above is supported and can be used as a substitute for the dedault Badger key-value  database. To use MySQL database, modify the db section of the config.")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" ~/.venus-auth/config.toml\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Data source configuration item")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("db"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# support: badger (default), mysql ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the mysql DDL is in the script package ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mysql"')]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# The following parameters apply to MySQL")]),t._v("\nDSN "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<USER>:<PASSWORD>@(127.0.0.1:3306)/venus_auth?parseTime=true&loc=Local&charset=utf8mb4&collation=utf8mb4_unicode_ci&readTimeout=10s&writeTimeout=10s"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# conns 1500 concurrent")]),t._v("\nmaxOpenConns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),t._v("\nmaxIdleConns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),t._v("\nmaxLifeTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"120s"')]),t._v("\nmaxIdleTime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"30s"')]),t._v("\n")])])]),a("p",[t._v("Restart venus-auth for the configuration to take into effect.")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" auth\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_AUTH_PID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" ./venus-auth run "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" auth.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),a("h3",{attrs:{id:"token-gerneration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token-gerneration"}},[t._v("#")]),t._v(" Token gerneration")]),t._v(" "),a("p",[t._v("venus-auth manages "),a("a",{attrs:{href:"https://jwt.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jwt"),a("OutboundLink")],1),t._v(" tokens used by other venus modules for them to talk to each other securely on the network.")]),t._v(" "),a("p",[t._v("Generate tokens for shared modules.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# add user SHARED")]),t._v("\n$ ./venus-auth user "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SHARED"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --perm specifies admin, sign, write or read permission of the token generated")]),t._v("\n$ ./venus-auth token gen --perm admin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SHARED"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SHARED_ADMIN_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("Generate tokens for independent modules. Tokens can be logically grouped by "),a("code",[t._v("<USER>")]),t._v(" as individual miner joining the mining pool.")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ ./venus-auth user "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n$ ./venus-auth token gen --perm "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("USER_WRITE_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ ./venus-auth token gen --perm "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("read")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("USER")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("USER_READ_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Use "),a("code",[t._v("./venus-auth user add <USER>")]),t._v(" to logically group different tokens. Activate the user, which was just created,  then bind miner to it:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ ./venus-auth user update --name <USER> --state 1\n$ ./venus-auth user miner add <USER> <MINER_ID>\n\n# 查看user列表\n$ ./venus-auth user list\n")])])])]),t._v(" "),a("h2",{attrs:{id:"install-venus-gateway"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-venus-gateway"}},[t._v("#")]),t._v(" Install venus-gateway")]),t._v(" "),a("p",[t._v("Download and compile the source code of venus-gateway.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/ipfs-force-community/venus-gateway.git\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" venus-gateway\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("RELEASE_TAG"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),a("p",[t._v("Start venus-gateway.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./venus-gateway --listen"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/ip4/0.0.0.0/tcp/45132 run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Use either a http or https url")]),t._v("\n--auth-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http://VENUS_AUTH_IP_ADDRESS:PORT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--auth-token"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SHARED_ADMIN_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" venus-gateway.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If you encounter the following compilation errors, execute first"),a("code",[t._v("go get github.com/google/flatbuffers@v1.12.1")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("github.com/dgraph-io/badger/v3@v3.2011.1/fb/BlockOffset.go:6:2: missing go.sum entry "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" module providing package github.com/google/flatbuffers/go "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("imported by github.com/dgraph-io/badger/v3/table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" to add:\n        go get github.com/dgraph-io/badger/v3/table@v3.2011.1\n")])])])]),t._v(" "),a("h2",{attrs:{id:"install-venus-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-venus-daemon"}},[t._v("#")]),t._v(" Install venus daemon")]),t._v(" "),a("p",[t._v("Download and compile the source code of venus.")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/filecoin-project/venus.git\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" venus\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("RELEASE_TAG"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" deps\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),a("p",[t._v("Start venus daemon for chain synchronization. Use "),a("code",[t._v("--network")]),t._v(" to specify the network venus is connecting to.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" ./venus daemon --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("calibrationnet --auth-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http://VENUS_AUTH_IP_ADDRESS:PORT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --auth-token"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SHARED_ADMIN_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" venus.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Use "),a("code",[t._v("tail -f venus.log")]),t._v("  or "),a("code",[t._v("./venus sync status")]),t._v(" to check if there is any errors during synchronization.")])]),t._v(" "),a("h3",{attrs:{id:"grant-access-to-venus-daemon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#grant-access-to-venus-daemon"}},[t._v("#")]),t._v(" Grant access to venus daemon")]),t._v(" "),a("p",[t._v("By default, venus daemon only respond to local access. Change the following configuration to allow access from other addresses.")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" ~/.venus/config.json\n")])])]),a("p",[t._v("Change "),a("code",[t._v("apiAddress")]),t._v(" from "),a("code",[t._v("/ip4/127.0.0.1/tcp/3453")]),t._v(" to "),a("code",[t._v("/ip4/0.0.0.0/tcp/3453")]),t._v(". Save and close the config file.")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"api"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"apiAddress"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ip4/0.0.0.0/tcp/3453"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Restart venus daemon for the config to take into effects.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -ef "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" venus\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_PID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" ./venus daemon --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("calibrationnet --auth-url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http://VENUS_AUTH_IP_ADDRESS:PORT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --auth-token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SHARED_ADMIN_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" venus.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("In order for the chain service to interact with the chain, daemon needs to be synced with the network by importing a snapshot of the filecoin chain. Please refer to "),a("RouterLink",{attrs:{to:"/intro/Chain.html"}},[t._v("this guide")]),t._v(" for more details.")],1)]),t._v(" "),a("h2",{attrs:{id:"install-venus-messager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-venus-messager"}},[t._v("#")]),t._v(" Install venus-messager")]),t._v(" "),a("p",[t._v("Download and compile the source code of venus-messager.")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/filecoin-project/venus-messager.git\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" venus-messager\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("RELEASE_TAG"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" \n")])])]),a("p",[t._v("Start venus-messager. Note that "),a("code",[t._v("--auth-url")]),t._v(", "),a("code",[t._v("--node-url")]),t._v(" and "),a("code",[t._v("--auth-token")]),t._v(" are for venus-messager to be aware of other venus modules and be properly authenticated.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" ./venus-messager run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--auth-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http://VENUS_AUTH_IP_ADDRESS:PORT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--node-url /ip4/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_DAEMON_IP_ADDRESS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/tcp/3453 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--gateway-url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/ip4/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IP_ADDRESS_OF_VENUS_GATEWAY"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/tcp/45132 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--auth-token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SHARED_ADMIN_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--db-type mysql "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--mysql-dsn "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<USER>:<PASSWORD>@(127.0.0.1:3306)/venus_messager?parseTime=true&loc=Local&readTimeout=10s&writeTimeout=10s"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" msg.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("If no database related params are specified, venus-messager will default to use sqlite.")])]),t._v(" "),a("h2",{attrs:{id:"install-venus-miner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install-venus-miner"}},[t._v("#")]),t._v(" Install venus-miner")]),t._v(" "),a("p",[t._v("Download and compile the source code of venus-miner.")]),t._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/filecoin-project/venus-miner.git\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" venus-miner\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("RELEASE_TAG"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v("\n")])])]),a("p",[t._v("Initialize venus-miner.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./venus-miner init\n--auth-api "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http://VENUS_AUTH_IP_ADDRESS:PORT"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("SHARED_ADMIN_AUTH_TOKEN"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--gateway-api /ip4/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_GATEWAY_IP_ADDRESS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/tcp/45132 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--api /ip4/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("VENUS_DAEMON_IP_ADDRESS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/tcp/3453 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--slash-filter "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v("\n")])])]),a("p",[t._v("Run venus-miner.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" ./venus-miner run "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" miner.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])]),a("h3",{attrs:{id:"miner-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#miner-management"}},[t._v("#")]),t._v(" Miner management")]),t._v(" "),a("p",[t._v("Once a user, venus-sealer with proper miner id, connected to your shared modules. You can query the status of said miner id by the following.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./venus-miner address state \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Addr"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<MINER_ID>"')]),t._v(",\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"IsMining"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" true,\n\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Err"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" null\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("If "),a("code",[t._v("IsMining")]),t._v(" of your miner is "),a("code",[t._v("false")]),t._v(", you can run the following command to start the miner id.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./venus-miner address start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("MINER_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("List all miner ids that have connected to venus-miner.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ ./venus-miner address list\n")])])]),a("h2",{attrs:{id:"next-steps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-steps"}},[t._v("#")]),t._v(" Next steps")]),t._v(" "),a("p",[t._v("Next, please follow this "),a("RouterLink",{attrs:{to:"/intro/Using-venus-Shared-Modules.html"}},[t._v("guide")]),t._v(" to connect to the storage pool you just deployed!")],1),t._v(" "),a("h2",{attrs:{id:"questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#questions"}},[t._v("#")]),t._v(" Questions？")]),t._v(" "),a("p",[t._v("Find us on "),a("a",{attrs:{href:"https://filecoinproject.slack.com/archives/CEHHJNJS3",target:"_blank",rel:"noopener noreferrer"}},[t._v("Slack"),a("OutboundLink")],1),t._v("!")])])}),[],!1,null,null,null);s.default=n.exports}}]);