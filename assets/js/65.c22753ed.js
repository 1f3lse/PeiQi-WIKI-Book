(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{2832:function(t,s,a){"use strict";a.r(s);var e=a(64),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"lsb隐写"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lsb隐写"}},[t._v("#")]),t._v(" LSB隐写")]),t._v(" "),s("h2",{attrs:{id:"关于"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[t._v("#")]),t._v(" 关于")]),t._v(" "),s("p",[t._v("LSB 的英文全称为 Least Significant Bit, 我们知道图像像素一般是由RGB三原色（即红绿蓝）组成的，每一种颜色占用8位，0x00~0xFF，即一共有256种颜色，一共包含了256的3次方的颜色，颜色太多，而人的肉眼能区分的只有其中一小部分，这导致了当我们修改RGB颜色分量种最低的二进制位的时候，无法准确的分辨颜色。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(910),alt:"img"}})]),t._v(" "),s("p",[t._v("RGB分别代表着（red,green,bule）三种原色由这三种原色可以组成其他各种颜色，例如在PNG图片的存储中，每个颜色会有8bit，LSB隐写就是修改了像素中的最低的1bit，在平常看来是无法区分的，也就成功的把信息隐藏起来了。")]),t._v(" "),s("p",[t._v("常见的LSB隐写是在Png图片中完成的，而Png图片是一种无损压缩的位图片形格式，也只有在无损压缩或者无压缩的图片（BMP）上才可以 实现 LSB隐写。如果图像是jpg图片的话，就没法使用lsb隐写了，原因是jpg图片对像数进行了有损压缩，我们修改的信息就可能会在压缩的过程中被破坏。而png图片虽然也有压缩，但却是无损压缩，这样我们修改的信息也就能得到正确的表达，不至于丢失。BMP的图片也是一样的，是没有经过压缩的。BMP图片一般是特别的大的，因为BMP把所有的像数都按原样储存，没有进行压缩。png图片中的图像像数一般是由RGB三原色（红绿蓝）组成，每一种颜色占用8位，取值范围为0x00~0xFF，即有256种颜色，一共包含了256的3次方的颜色，即16777216种颜色。而人类的眼睛可以区分约1000万种不同的颜色，这就意味着人类的眼睛无法区分余下的颜色大约有6777216种")]),t._v(" "),s("p",[s("img",{attrs:{src:a(911),alt:"img"}})]),t._v(" "),s("p",[t._v("上图中的红色就是由三原色 Red Green Blue 共同构成的，而LSB隐写则是修改三原色中二进制的最后一位得到微小的改变来隐藏信息")]),t._v(" "),s("p",[s("img",{attrs:{src:a(912),alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"buuctf-flag-lsb隐写隐藏文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#buuctf-flag-lsb隐写隐藏文件"}},[t._v("#")]),t._v(" BuuCTF - FLAG (LSB隐写隐藏文件)")]),t._v(" "),s("p",[t._v("使用工具 Stegsolve 打开图片，勾选 Red, Green, Blue 最低位, Bit Order勾选 LSB最低位 (MSB最高位) 。")]),t._v(" "),s("p",[t._v("点击 Preview后可以发现文件头存在 压缩包文件头PK关键字，使用 Save Bin 导出。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(913),alt:"img"}})]),t._v(" "),s("p",[t._v("导出后的压缩包解压，查看内容获得Flag")]),t._v(" "),s("p",[s("img",{attrs:{src:a(914),alt:"img"}})]),t._v(" "),s("h2",{attrs:{id:"工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工具"}},[t._v("#")]),t._v(" 工具")]),t._v(" "),s("a-alert",{attrs:{type:"success",message:"",description:"http://www.caesum.com/handbook/Stegsolve.jar",showIcon:""}}),t._v(" "),s("br"),t._v(" "),s("a-alert",{attrs:{type:"success",message:"",description:"https://stegonline.georgeom.net",showIcon:""}}),t._v(" "),s("br")],1)}),[],!1,null,null,null);s.default=r.exports},910:function(t,s,a){t.exports=a.p+"assets/img/1667624989140-74ba3b75-c774-46d7-bcd6-eed03f3a2068.a1debdbf.png"},911:function(t,s,a){t.exports=a.p+"assets/img/1667626690859-6d85f26f-fbed-4d07-8d57-0c2eb81f623c.84b01438.png"},912:function(t,s,a){t.exports=a.p+"assets/img/1667652654051-bf501cba-6385-4dc4-afc9-e9c826fa1a82.6bfac43f.png"},913:function(t,s,a){t.exports=a.p+"assets/img/1667659887324-ce634f1c-50aa-4762-a5fa-c212322f1a8e.7b06fecd.png"},914:function(t,s,a){t.exports=a.p+"assets/img/1667660734300-a6fb81fe-aa66-404f-a2a0-92b0ab3429de.78aedcc2.png"}}]);