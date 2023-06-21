(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{391:function(t,s,n){"use strict";n.r(s);var a=n(17),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"configuration-parsing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#configuration-parsing"}},[t._v("#")]),t._v(" Configuration parsing")]),t._v(" "),n("p",[t._v("   The file is located in "),n("code",[t._v("~/.sophon-miner/config.toml")]),t._v(" by default, which is generated when the command "),n("code",[t._v("sophon-miner init")]),t._v(" is executed. Behavior comments starting with "),n("code",[t._v("#")]),t._v(" in the file.")]),t._v(" "),n("h2",{attrs:{id:"old-version"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#old-version"}},[t._v("#")]),t._v(" Old version")]),t._v(" "),n("p",[t._v("version number "),n("code",[t._v("< v1.7.0")])]),t._v(" "),n("div",{staticClass:"language-toml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-toml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# venus fullnode API")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ListenAPI")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ip4/127.0.0.1/tcp/3453"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Token")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJwZXJtIjoiYWRtaW4iLCJleHQiOiIifQ.RRSdeQ-c1Ei-8roAj-L-wpOr-y6PssDorbGijMPxjoc"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# deprecated, replaced by `slash filter`")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("BlockRecord")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cache"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ListenAddress")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ip4/0.0.0.0/tcp/12308/http"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# venus-gateway API")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Gateway")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ListenAPI")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ip4/127.0.0.1/tcp/45132"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Token")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJwZXJtIjoiYWRtaW4iLCJleHQiOiIifQ.RRSdeQ-c1Ei-8roAj-L-wpOr-y6PssDorbGijMPxjoc"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Db")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# deprecated, replaced by ~sophon-auth`")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Type")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auth"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# `slash filter`")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("SFType")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mysql"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Db.MySQL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Conn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root:kuangfengjuexizhan@tcp(192.168.200.2:3308)/sophon-miner-butterfly-200-19?charset=utf8mb4&parseTime=True&loc=Local&timeout=10s"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxOpenConn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxIdleConn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConnMaxLifeTime")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Debug")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Db.Auth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ListenAPI")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:8989"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Token")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJwZXJtIjoiYWRtaW4iLCJleHQiOiIifQ.RRSdeQ-c1Ei-8roAj-L-wpOr-y6PssDorbGijMPxjoc"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Jaeger Tracing")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Tracing")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("JaegerTracingEnabled")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("JaegerEndpoint")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost:6831"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ProbabilitySampler")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ServerName")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sophon-miner"')]),t._v("\n")])])]),n("h2",{attrs:{id:"new-version"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#new-version"}},[t._v("#")]),t._v(" New version")]),t._v(" "),n("p",[t._v("version number "),n("code",[t._v(">= v1.7.0")])]),t._v(" "),n("div",{staticClass:"language-toml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-toml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("PropagationDelaySecs")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MinerOnceTimeout")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"15s"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MpoolSelectDelaySecs")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# `sophon-miner` host address and port")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("API")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ListenAddress")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ip4/0.0.0.0/tcp/12308"')]),t._v("\n  \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# venus fullnode API")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("FullNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Addr")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ip4/127.0.0.1/tcp/3453"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Token")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY2hhaW4tc2VydmljZSIsInBlcm0iOiJhZG1pbiIsImV4dCI6IiJ9.DxlsJO-XrrdQLvJdA6wdWJxeYOhZt_kMYMHc7NdfQNw"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# venus-gateway API")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Gateway")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ListenAPI")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ip4/127.0.0.1/tcp/45132"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Token")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY2hhaW4tc2VydmljZSIsInBlcm0iOiJhZG1pbiIsImV4dCI6IiJ9.DxlsJO-XrrdQLvJdA6wdWJxeYOhZt_kMYMHc7NdfQNw"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sophon-auth API")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Auth")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Addr")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://127.0.0.1:8989"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Token")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY2hhaW4tc2VydmljZSIsInBlcm0iOiJhZG1pbiIsImV4dCI6IiJ9.DxlsJO-XrrdQLvJdA6wdWJxeYOhZt_kMYMHc7NdfQNw"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# `slash filter`")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("SlashFilter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Type")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"local"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# optional: local,mysql")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("SlashFilter.MySQL")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Conn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxOpenConn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("MaxIdleConn")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ConnMaxLifeTime")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Debug")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Jaeger Tracing")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Tracing")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("JaegerTracingEnabled")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("JaegerEndpoint")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost:6831"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ProbabilitySampler")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.0")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ServerName")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sophon-miner"')]),t._v("\n")])])]),n("h3",{attrs:{id:"metrics-configuration-parsing"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#metrics-configuration-parsing"}},[t._v("#")]),t._v(" Metrics Configuration parsing")]),t._v(" "),n("p",[t._v("A basic configuration example of "),n("code",[t._v("Metrics")]),t._v(" is as follows：")]),t._v(" "),n("div",{staticClass:"language-toml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-toml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Metrics")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Whether to enable metrics statistics, the default is false")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Enabled")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Metrics.Exporter")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Metric exporter type, currently optional: prometheus or graphite, default is prometheus")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Type")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prometheus"')]),t._v("\n    \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Metrics.Exporter.Prometheus")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#multiaddr")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("EndPoint")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/ip4/0.0.0.0/tcp/12310"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Naming convention: "a_b_c", no "-"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Namespace")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"miner"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Indicator registry type, optional: default (with the environment indicators that the program runs) or define (custom)")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("RegistryType")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"define"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# prometheus service path")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Path")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/debug/metrics"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Reporting period, in seconds (s)")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ReportingPeriod")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n      \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("Metrics.Exporter.Graphite")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Naming convention: "a_b_c", no "-"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Namespace")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"miner"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# graphite exporter collector service address")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Host")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# graphite exporter collector service listening port")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("Port")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("12310")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Reporting period, in seconds (s)")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("ReportingPeriod")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),n("p",[t._v("If you choose "),n("code",[t._v("Metrics.Exporter")]),t._v(" as "),n("code",[t._v("Prometheus")]),t._v(", you can quickly view metrics through the command line：")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v(' $ curl http://127.0.0.1:<port><path>\n # HELP miner_getbaseinfo_ms Duration of GetBaseInfo in miner\n # TYPE miner_getbaseinfo_ms histogram\n miner_getbaseinfo_ms_bucket{miner_id="t010938",le="100"} 50\n miner_getbaseinfo_ms_bucket{miner_id="t010938",le="200"} 51\n miner_getbaseinfo_ms_bucket{miner_id="t010938",le="400"} 51\n miner_getbaseinfo_ms_bucket{miner_id="t010938",le="600"} 51\n miner_getbaseinfo_ms_bucket{miner_id="t010938",le="800"} 51\n miner_getbaseinfo_ms_bucket{miner_id="t010938",le="1000"} 51\n miner_getbaseinfo_ms_bucket{miner_id="t010938",le="2000"} 51\n miner_getbaseinfo_ms_bucket{miner_id="t010938",le="20000"} 51\n miner_getbaseinfo_ms_bucket{miner_id="t010938",le="+Inf"} 51\n miner_getbaseinfo_ms_sum{miner_id="t010938"} 470.23516\n ... ...\n')])])]),n("blockquote",[n("p",[t._v("If you encounter the error "),n("code",[t._v("curl: (56) Recv failure: Connection reset by peer")]),t._v(", use the native "),n("code",[t._v("ip")]),t._v(" address as follows:")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$  curl http://<ip>:<port><path>\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);