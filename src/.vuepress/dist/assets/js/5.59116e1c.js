(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{168:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://qiita.com/magaya0403/items/2b5d9641592df0c7cba2",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-cliでVue.jsをインストールしたときのファイルについて"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://qiita.com/riversun/items/d27f6d3ab7aaa119deab",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack4対応webpack-dev-serverの主要な設定オプション(CLI,webpack.config.js)の意味と挙動"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://mae.chab.in/archives/60167",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScriptでVue.jsを書く – Vue CLIを使った開発のポイントを紹介"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://jp.vuejs.org/v2/guide/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("はじめに"),r("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"コマンド"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#コマンド","aria-hidden":"true"}},[this._v("#")]),this._v(" コマンド")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("開発時のコマンドは,\n"),e("code",[this._v("$ yarn docs:dev")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("このコマンドは, "),e("code",[this._v("package.json")]),this._v("で設定可能。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"レイアウトおよびmarkdown"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#レイアウトおよびmarkdown","aria-hidden":"true"}},[this._v("#")]),this._v(" レイアウトおよびmarkdown")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("/.vuepress/theme/Layout.vue")]),this._v("で設定可能。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"markdown-slot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#markdown-slot","aria-hidden":"true"}},[this._v("#")]),this._v(" Markdown Slot")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v(":::")]),this._v("でスロットを作れるらしいが, 上手くいかない。"),e("br"),this._v("\nあとでまたやる。"),e("br"),this._v("\nhttps://vuepress.vuejs.org/guide/markdown-slot.html#why-do-i-need-markdown-slot")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"vueやりますか"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vueやりますか","aria-hidden":"true"}},[this._v("#")]),this._v(" Vueやりますか")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"要件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#要件","aria-hidden":"true"}},[this._v("#")]),this._v(" 要件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ node -v\nv8.12.0\n\n$ npm -v  \n6.4.1\n\n// インストール\n$ npm install -g vue-cli\n\n$ vue --version\n2.9.6\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"ポート指定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ポート指定","aria-hidden":"true"}},[this._v("#")]),this._v(" ポート指定")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("ポート指定は"),r("code",[t._v("config/index.js")]),t._v("で設定可能")]),t._v(" "),r("li",[t._v("ポートの許可は\n"),r("ul",[r("li",[t._v("Vagrantfileのfowarding_port")]),t._v(" "),r("li",[t._v("/etc/sysconfig/iptablesで許可する")]),t._v(" "),r("li",[t._v("ホスト側のセキュリティソフト等も確認する")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"componentsフォルダ内の-vueファイルでしていること"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#componentsフォルダ内の-vueファイルでしていること","aria-hidden":"true"}},[this._v("#")]),this._v(" componentsフォルダ内の*.vueファイルでしていること")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("code",[t._v("<template>")]),t._v("にhtml構造の記述")]),t._v(" "),r("li",[r("code",[t._v("<script>")]),t._v("にjsを記述(htmlに書かれているmsgもここで定義)")]),t._v(" "),r("li",[r("code",[t._v("<style>")]),t._v("にcssを記述\n以上の3点をまとめて, "),r("code",[t._v("*.vue")]),t._v("に記述。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"参考資料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考資料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考資料")])}],!1,null,null,null);a.options.__file="memo.md";e.default=a.exports}}]);