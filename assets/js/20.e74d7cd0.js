(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{329:function(a,t,e){"use strict";e.r(t);var r=e(38),i=Object(r.a)({},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"mc-lang-1-20190908"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mc-lang-1-20190908","aria-hidden":"true"}},[a._v("#")]),a._v(" mc-lang 1 20190908")]),a._v(" "),e("ul",[e("li",[a._v("mc-lang全般に含まれているリソースまとめです。")]),a._v(" "),e("li",[a._v("https://github.com/task4233/mc-lang-1")])]),a._v(" "),e("h1",{attrs:{id:"追加した仕様"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#追加した仕様","aria-hidden":"true"}},[a._v("#")]),a._v(" 追加した仕様")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("#")]),a._v("でコメントアウト")]),a._v(" "),e("li",[a._v("カッコの実装")]),a._v(" "),e("li",[a._v("二項演算(+,-,*,/)の実yo")])]),a._v(" "),e("h1",{attrs:{id:"lexer-h"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lexer-h","aria-hidden":"true"}},[a._v("#")]),a._v(" lexer.h")]),a._v(" "),e("ul",[e("li",[a._v("字句解析用ヘッダ")]),a._v(" "),e("li",[a._v("このセクションでは、Lexerというテキストから「数字」や「演算子」をまとまり毎に分割するクラスを実装している。")]),a._v(" "),e("li",[a._v("全体的な流れとしては、gettokをParserから呼ぶことにより「次のトークン」を読み、それが数値リテラルだった場合はnumValという変数にセットする。")])]),a._v(" "),e("h2",{attrs:{id:"variables"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#variables","aria-hidden":"true"}},[a._v("#")]),a._v(" variables")]),a._v(" "),e("ul",[e("li",[a._v("Token\n"),e("ul",[e("li",[a._v("構造体")])])])]),a._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[a._v("名称")]),a._v(" "),e("th",{staticStyle:{"text-align":"center"}},[a._v("詳細")])])]),a._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[a._v("tok_eof")]),a._v(" "),e("td",{staticStyle:{"text-align":"center"}},[a._v("EOFトークン(-1)")])]),a._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[a._v("tok_number")]),a._v(" "),e("td",{staticStyle:{"text-align":"center"}},[a._v("値を格納")])])])]),a._v(" "),e("h2",{attrs:{id:"functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functions","aria-hidden":"true"}},[a._v("#")]),a._v(" functions")]),a._v(" "),e("ul",[e("li",[a._v("getIdentifier()\n"),e("ul",[e("li",[a._v("getter")])])])]),a._v(" "),e("h2",{attrs:{id:"class"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#class","aria-hidden":"true"}},[a._v("#")]),a._v(" class")]),a._v(" "),e("h3",{attrs:{id:"lexer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#lexer","aria-hidden":"true"}},[a._v("#")]),a._v(" Lexer")]),a._v(" "),e("h4",{attrs:{id:"public"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#public","aria-hidden":"true"}},[a._v("#")]),a._v(" Public")]),a._v(" "),e("ul",[e("li",[a._v("gettok()メソッド\n"),e("ul",[e("li",[a._v("トークンを取得する")]),a._v(" "),e("li",[a._v("#やスペース等をスルーする")])])]),a._v(" "),e("li",[a._v("getNumVal\n"),e("ul",[e("li",[a._v("numValのゲッター")])])]),a._v(" "),e("li",[a._v("setNumVal\n"),e("ul",[e("li",[a._v("numValのセッター")])])]),a._v(" "),e("li",[a._v("initStream\n"),e("ul",[e("li",[a._v("fileNameのファイルをopen")])])])]),a._v(" "),e("h4",{attrs:{id:"private"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#private","aria-hidden":"true"}},[a._v("#")]),a._v(" Private")]),a._v(" "),e("ul",[e("li",[a._v("iFile\n"),e("ul",[e("li",[a._v("std::ifstream")])])]),a._v(" "),e("li",[a._v("numVal\n"),e("ul",[e("li",[a._v("保持する数字")])])]),a._v(" "),e("li",[a._v("getNextChar\n"),e("ul",[e("li",[a._v("1文字char型で入力")])])])]),a._v(" "),e("h1",{attrs:{id:"parser-h"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parser-h","aria-hidden":"true"}},[a._v("#")]),a._v(" parser.h")]),a._v(" "),e("ul",[e("li",[a._v("構文解析用ヘッダ")]),a._v(" "),e("li",[a._v("ここのセクションでは、AST（構文解析木）の葉を定義している。")]),a._v(" "),e("li",[a._v("MCコンパイラの根幹であるクラスでLexerとCodeGenで使われている。")]),a._v(" "),e("li",[a._v("Lexerが次のトークンを取ってきて、それが数値リテラルであったらNumberASTに値を格納し、そのポインタを親ノードが保持する。")]),a._v(" "),e("li",[a._v("全てのコードを無事にASTとして表現できたら、後述するcodegenを再帰的に呼び出す事によりオブジェクトファイルを生成する。")])]),a._v(" "),e("h2",{attrs:{id:"variables-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#variables-2","aria-hidden":"true"}},[a._v("#")]),a._v(" variables")]),a._v(" "),e("ul",[e("li",[a._v("curTok\n"),e("ul",[e("li",[a._v("読み取ったトークンを保持")])])]),a._v(" "),e("li",[a._v("getNextToken\n"),e("ul",[e("li",[a._v("lexer.hのgettok()")])])]),a._v(" "),e("li",[a._v("BinopPrecedence\n"),e("ul",[e("li",[a._v("mc.cppで定義した結合子の優先権を保持")])])])]),a._v(" "),e("h2",{attrs:{id:"functions-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functions-2","aria-hidden":"true"}},[a._v("#")]),a._v(" functions")]),a._v(" "),e("ul",[e("li",[a._v("GetTokPrecedence()\n"),e("ul",[e("li",[a._v("二項演算子の結合度を取得")]),a._v(" "),e("li",[a._v("もし現在のトークンが二項演算子ならその結合度を返し、そうでないなら-1を返す。")])])]),a._v(" "),e("li",[a._v("LogError(const char *str)\n"),e("ul",[e("li",[a._v("エラーを表示しnullptrを返してくれるエラーハンドリング関数")])])]),a._v(" "),e("li",[a._v("ParseExpressions()\n"),e("ul",[e("li",[a._v("数値リテラル/カッコ->二項演算子の順にパースできるかを確認してパースする")])])]),a._v(" "),e("li",[a._v("ParseNumberExpr()\n"),e("ul",[e("li",[a._v("数値リテラルをパースして内部のexpressionのゆにぽを返す関数")])])]),a._v(" "),e("li",[a._v("ParseParenExpr\n"),e("ul",[e("li",[a._v("カッコ内部のexpressionをパースして内部のexpressionのゆにぽを返す関数")])])]),a._v(" "),e("li",[a._v("ParsePrimary()\n"),e("ul",[e("li",[a._v("NumberASTかカッコをパースするための関数を呼び出す関数")])])]),a._v(" "),e("li",[a._v("ParseBinOpRHS(int CallerPrec, std::unique_ptr<ExprAST> LHS)\n"),e("ul",[e("li",[a._v("二項演算子をパースする関数")]),a._v(" "),e("li",[a._v("LHSが入った状態でよびだされ, LHSとRHSと二項演算子がペアになった状態で返す")])])]),a._v(" "),e("li",[a._v("ParseTopLevelExpr()\n"),e("ul",[e("li",[a._v("パーサーのトップレベル関数")]),a._v(" "),e("li",[a._v("まだ関数定義は実装しないので、今のmc言語では__anon_exprという関数がトップレベルに作られ、その中に全てのASTが入る")])])])]),a._v(" "),e("h2",{attrs:{id:"class-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#class-2","aria-hidden":"true"}},[a._v("#")]),a._v(" class")]),a._v(" "),e("h3",{attrs:{id:"exprast"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#exprast","aria-hidden":"true"}},[a._v("#")]),a._v(" ExprAST")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("5+2")]),a._v("や"),e("code",[a._v("2*10-2")]),a._v("等のexpressionを表すクラス")])]),a._v(" "),e("h3",{attrs:{id:"numberast"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#numberast","aria-hidden":"true"}},[a._v("#")]),a._v(" NumberAST")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("5")]),a._v("や"),e("code",[a._v("2")]),a._v("等の数値リテラルを表すクラス")])]),a._v(" "),e("h4",{attrs:{id:"public-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#public-2","aria-hidden":"true"}},[a._v("#")]),a._v(" public")]),a._v(" "),e("ul",[e("li",[a._v("*codegenをオーバーライド")])]),a._v(" "),e("h4",{attrs:{id:"private-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#private-2","aria-hidden":"true"}},[a._v("#")]),a._v(" private")]),a._v(" "),e("ul",[e("li",[a._v("Val\n"),e("ul",[e("li",[a._v("数値の値を保持する変数")])])])]),a._v(" "),e("h3",{attrs:{id:"binaryast"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binaryast","aria-hidden":"true"}},[a._v("#")]),a._v(" BinaryAST")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("+")]),a._v("や"),e("code",[a._v("*")]),a._v("等の二項演算子を表すクラス")])]),a._v(" "),e("h4",{attrs:{id:"public-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#public-3","aria-hidden":"true"}},[a._v("#")]),a._v(" public")]),a._v(" "),e("ul",[e("li",[a._v("*codegenをオーバーライド")])]),a._v(" "),e("h4",{attrs:{id:"private-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#private-3","aria-hidden":"true"}},[a._v("#")]),a._v(" private")]),a._v(" "),e("ul",[e("li",[a._v("Op\n"),e("ul",[e("li",[a._v("char型のオペランド?")])])]),a._v(" "),e("li",[a._v("LHS(Left-hand side)/RHS(Right-hand side)\n"),e("ul",[e("li",[a._v("左辺値/右辺値を指すゆにぽ")])])])]),a._v(" "),e("h3",{attrs:{id:"prototypeast"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prototypeast","aria-hidden":"true"}},[a._v("#")]),a._v(" PrototypeAST")]),a._v(" "),e("ul",[e("li",[a._v("関数シグネチャーで、関数の名前と引数の名前を表すクラス")])]),a._v(" "),e("h4",{attrs:{id:"public-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#public-4","aria-hidden":"true"}},[a._v("#")]),a._v(" public")]),a._v(" "),e("ul",[e("li",[a._v("&getName()\n"),e("ul",[e("li",[a._v("保持しているNameのアドレスを返す")])])])]),a._v(" "),e("h4",{attrs:{id:"private-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#private-4","aria-hidden":"true"}},[a._v("#")]),a._v(" private")]),a._v(" "),e("ul",[e("li",[a._v("Name\n"),e("ul",[e("li",[a._v("関数名")]),a._v(" "),e("li",[a._v("std::string")])])]),a._v(" "),e("li",[a._v("Args\n"),e("ul",[e("li",[a._v("引数")]),a._v(" "),e("li",[a._v("std::vector<std::string>")])])])]),a._v(" "),e("h3",{attrs:{id:"functionast"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functionast","aria-hidden":"true"}},[a._v("#")]),a._v(" FunctionAST")]),a._v(" "),e("ul",[e("li",[a._v("関数のbody(C++で言うint foo) {...}の中身)を表すクラス")])]),a._v(" "),e("h4",{attrs:{id:"public-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#public-5","aria-hidden":"true"}},[a._v("#")]),a._v(" public")]),a._v(" "),e("ul",[e("li",[a._v("*codegen()")])]),a._v(" "),e("h4",{attrs:{id:"private-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#private-5","aria-hidden":"true"}},[a._v("#")]),a._v(" private")]),a._v(" "),e("ul",[e("li",[a._v("Proto\n"),e("ul",[e("li",[a._v("関数の名前と引数を保持するオブジェクトのゆにぽ")]),a._v(" "),e("li",[a._v("std::unique_ptr<PrototypeAST>")])])]),a._v(" "),e("li",[a._v("Body\n"),e("ul",[e("li",[a._v("関数の中身のexpressionを保持するオブジェクトのゆにぽ")]),a._v(" "),e("li",[a._v("std::unique_ptr<ExprAST>")])])])])])},[],!1,null,null,null);t.default=i.exports}}]);