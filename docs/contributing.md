# Contribution Guideline

This file will introduce how you contribute to this project. And this file is splited by different language because different language's document have different guideline. You should choose the correct language and look through it to know what you should do.

## English

None.

## 简体中文

### 概况

此工程在Github上由GCBA托管，并且在yyc12345的私有Git服务器（这个服务器由于域名政策暂不且无法公开，仅作为同步备份使用）上拥有一份备份，由yyc12345负责与Github上的工程持续同步。各位均可参与贡献。对于新手我们强烈建议始用Visual Studio Code来为此工程贡献以防止一些其他的软件会在文件目录中创建各种奇奇怪怪的玩意。如果您实在不甚精通，或者不会注册账户，请加入QQ群`198574394`并向我们提交您的相关成果，我们会直接同步您的成果到项目中。

请在确认您有足够的Git知识后，再进行提交（尤其是当您连Git和Github都分不清的时候，最好不要提交，而将提交的工作交由我们来做）。禁止使用`git push --force`。~~不过就算你破坏了，我也能从我的私有Git服务器上克隆一份正确的副本下来然后立即恢复~~

如果您是专业人士，请注意我们项目始用[**MkDocs**](https://www.mkdocs.org/)作为生成器，请使用pip安装它并安装两个扩展 **mkdocs-material** 和 **pymdown-extensions** 。然后您就可以始用`mkdocs serve`指令去预览此工程并排除一些错误

本程序始用Travis-CI自动处理并生成网页，在推送新的Commit到`master`之后，除非生成失败，一般在5mins内，网页就会更新。请不要手动推送远程`gh-page`分支。

### 简称与翻译约定

* 半角与全角字符之间的空格不是必须的，建议不添加空格，但也不要因为他人有空格或无空格就提交一个新的Commit旨在更改他人的空格格式。半角与全角字符之间的空格不属于代码审核的一部分。
* 关于两个软件的翻译名称，一律保留英文，即：`Virtools`和`3ds Max`（注意大小写），允许的两个简称为：`VT`和`3ds`（注意大小写）


