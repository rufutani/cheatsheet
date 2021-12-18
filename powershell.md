
### PoweShellの実行ファイルのパス

|環境|パス|エイリアス|
|:--|:--|:--|
|Windows PoweShell|%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe|
|PowerShell 7 (Windows)|%SystemRoot%\Program Files\PowerShell\7\pwsh.exe|
|PowerShell 7 (macOS)|/usr/local/microsoft/powershell/7/pwsh|/usr/local/bin/pwsh|
|PowerShell 7 (Linux)|/opt/microsoft/powershell/7/pwsh|/usr/bin/pwsh|



### コマンドレット
|コマンドレット|エイリアス|内容|パラメーター|
|:--|:--|:--|:--|
|Get-Help|help,<br>man|コマンドレットのヘルプを参照する。<br>```Get-Help <cmdletの名前> -Full```<br>```Get-Help <cmdletの名前> -Parameter <パラメータの名前>```<br><br>コマンドレットの名前があやふやでもそのまま検索できるが、全てのコマンドレットが検索対象になるわけではなく、ヘルプが存在するものだけが検索対象となる。利用可能なコマンド全てを検索対象にしたい場合は、```Get-Command```を使った方が良さげ。|```-Full```ヘルプの内容全てを表示する。パラメーターの一覧、利用例、出力型が表示される。つけないと情報量が削られて表示されるので、常につけておくくらいでいい。<br><br>```-Example```利用例だけを表示する。<br><br>```-Parameters```パラメーターだけを表示する。オプションで特定のパラメーターを指定することもでいる。<br><br>```-Detailed```パラメーターの詳細を表示するが、利用例は表示しない。<br><br>```-Online```
|Update-Help|-|ヘルプがアップデートされる。日本語のヘルプは少ないので、以下のようにオプションを指定して英語版を入れる。<br>``` Update-Help -Force -UICulture en-US```|```-Force```UpdateHelpは1日1回程度しか行われない。このパラメーターで何度でも実行できる。<br><br>```-UICulture```ヘルプファイルの言語を指定する。指定がないと現在のPowerShellの言語環境となるが、大体の場合英語のマニュアルしかないことが多いので、普通はこのパラメータをつけて更新する。<br><br>```-Modle```モジュールを指定してヘルプをアップデートできる。<br><br>```-Online```ブラウザでweb上のマニュアルを閲覧できる。|
|Get-ChildItem|ls,<br>dir,<br>gci|ディレクトリの中身を取得する。<br>```Get-ChildItem -Path c:/Users/ryo_furutani/Downloads```|```-File```ファイルだけ取得。<br><br>```-Directory```ディレクトリだけ取得。|
|Show-Command|-|GUIでコマンドレットのパラメーターを入力できる。Windowsでのみ有効で、macOSやLinuxでは使用できない。<br>```Show-Command -Name <cmdletの名前>```|```-Name```コマンドレット名を指定する。|
|Write-Output|echo|


---

### エスケープシーケンス

バッククォート``` ` ```で特殊記号をエスケープできる。
```powershell
PS> Write-Output `"
"
```
```powershell
PS> "`$"
$
```
```powershell
PS> $str = "`$"
PS> $str
$
```

|エスケープ文字|意味|機能|
|:--|:--|:--|
|`0|Null|$null|
|`a|Alert|アラート音の発生|
|`b|Backspace|前の文字の削除|
|`e|Escape|ANSIエスケープシーケンスに従ってテキストを装飾する|
|`f|Form feed|プリンタのページ送りにのみ使用する
|`n|New line|LFに相当し、改行する|
|`r|Carrige return|CRに相当し、その前の入力を続く文字で上書きする|
|`t|Tab|横方向タブ|
|`u{x}|Unicode Escape Sequence|ユニコード文字をエスケープする|
|`v|Vertical quote|縦方向タブを入力するが、印刷時に影響する|
|--%|stop parsing|PowerShellのパーサー解釈と止める|


### 改行
PowerShellでは改行で文が終了する。
複数の文を1行に収めたい場合は、セミコロン```;```でつなぐ。


```powershell
PS> "Hi!"
Hi
```
↓
```powershell
PS> "Hi!" ; "I am John." ; "What is your name?"
Hi!
I am John.
What is your name?
```
逆に1行を2行以上に跨いで書きたい場合は、バッククォート``` ` ```を使う。

```powershell
PS> Invoke-RestMethod -Method Get -Uri https://google.com -SslProtocol Tls2 -TimeoutSec 10 -SkipHeaderValidation -OutFile c:/google.html
```
↓
```powershell
PS> Invoke-RestMethod `
-Method Get `
-Uri https://google.com `
-SslProtocol Tls2 `
-TimeoutSec 10 `
-SkipHeaderValidation `
-OutFile c:/User/ryo_furutani/downloads/google.html
```
ダブルクォートの前にスペースが必要なことに注意。


### 自動変数 (Automatic Variables)

|変数名|内容|例|
|:--|:--|:--|
|$PROFILE|Profileの場所|PowerShellは、C:\Users\ryo_furutani\Documents\PowerShell\Microsoft.PowerShell_profile.ps1<br>Windows PowerShellは、C:\Users\ryo_furutani\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1
|$PSVersinTable|バージョンの確認|
|$HOME|ホームディレクトリ|
|$_|入力行一行分|
|$^|入力行の行頭単語|
|$$|入力行の行末単語|
|$?|直前のコマンド実行結果のBool値|
|$Args|引数リスト|
|$False|偽のBool値|
|$Home|ドライブレター込みのホームディレクトリパス|
|$LastExitCode|直前のコマンドの戻り値|
|$MyInvocation|実行コマンド自身の情報|
|$OFS|awkでお馴染みの出力時フィールドセパレータ|
|$PsVersionTable|PowerShellのバージョン情報|
|$Pwd|ドライブレター込みのカレントディレクトパス|
|$True|真のBool値|
|$False|偽のBool値|

---
### スクリプトブロック
波括弧```{}```で囲うとスクリプトブロックとなる。
```powershell
PS> Write-Output "hoge"
hoge
PS> {Write-Output "hoge"}
PS>
```
スクリプトブロックは、アンパサンド```&```かドットソース```.```を頭につけることで実行される。

```powershell
PS> & {Write-Output "hoge"}
hoge
PS> . {Write-Output "hoge"}
hoge
```
もしくは```Invoke-Command```コマンドレットで実行される。
```powershell
PS> Invoke-Command -ScriptBlock {Write-Output "hoge"}
hoge
```
スクリプトブロックを作ると、「Scriptbliock型」になるので、```Invoke```メソッドを呼び出して実行することもできる。
```powershell
PS> {Write-Output "hoge"}.Invoke()
hoge
```
```$a = Get-Uptime```という記述では、コマンドレット```Get-Uptime```の出力結果が変数```$a```に格納される。そのため、```$a```を後から呼び出しても、格納時の値が呼び出されるだけとなる。

```powershell
PS> $a = Get-Uptime
a.Ticks

PS> $a.Ticks
791720000000

PS> $a.Ticks
791720000000

PS> $a.Ticks
791720000000
```
↓のようにスクリプトブロックにして変数に格納すると、後から変数を任意のタイミングで呼び出すことができる。

```powershell
$a = {(Get-Uptime).Ticks}

& $a
815220000000

& $a
815250000000
```
スクリプトブロックには複数の文を格納することもできる。
```powershell
PS> $c = {
Get-Date
(Get-Uptime).Ticks
}

PS> & $c
2021年11月25日 木曜日 19:48:36
799620000000

PS> & $c
2021年11月25日 木曜日 19:48:49
799750000000
```
スプリクトブロックは波括弧で囲う以外にも、文字列として書いておき後から利用するという方法がある。この場合はscriptblock型のスタティックメソットの```Create```メソッドに文字列を渡す。

```powershell
PS> $command = "(Get-Uptime).Ticks"
PS> $a = [scriptblock]::Create($command)

PS> & $a
807850000000

PS> & $a
808020000000

PS> & $a
808180000000
```

# 文字列

### ヒア文字列

ヒア文字列```@" <文字列> "@```、```@' <文字列> '@```で囲うと、```"```や```'```を書ける。

```powershell
PS> $test = 1
PS> $a = @"
example string
$test
"test"
'test'
"@
PS> $a
example string
1
"test"
'test'
```
ヒア文字列を使わない場合は、バッククォート``` ` ```でエスケープする必要がある。
```powershell
PS> $test = 1
PS> $a = "example string
$test
`"test`"
'test'"
PS> $a
example string
1
"test"
'test'
```


### formatを使わない書き方
変数をそのまま入れると、

```powershell
$name = "福崎文吾"
Write-Output("こんにちは、" + $name +"さん。")
$hello = "こんにちわ"
Write-Output($hello + "、" + $name + "さん。")
```

こう出力される。
```powershell
こんにちは、福崎文吾さん。
こんにちは、福崎文吾さん。
```

### formatを使う書き方

`-f`を使うとこうなる。

```powershell
$name = "福崎文吾"
Write-Output("こんにちは、{0}さん。" -f $name)
$hello = "こんにちわ"
Write-Output("{1}、{0}さん。" -f $name, $hello)
```

変数が入ってほしい場所に`{n}`を書く。nは引数の順序で、この例の場合は`name`が0、`hello`が1。
nは引数が1つしかなくても省略できないので、0を入れる。

出力結果は同じ。

```powershell
こんにちは、福崎文吾さん。
こんにちは、福崎文吾さん。
```

### 文字列を調べる
#### 文字列長を取得する
```Length```メソッドを使う。
```powershell
$str = "Hello, World!"
$str.Length
---
結果：13
```

#### 指定した文字列が含まれているか取得する
```Contains()```メソッドを使う。
```powershell
$str = "Hello, World!"
$foo = "and"
$bar = "or"
$str.Contains($foo)
$str.Contains($bar)
---
False
True
```
#### ある文字列が空かどうか取得する
スタティックメソッド```[str]::IsNullOrEmpty()```を使用する。
```powershell
$str1 = "Hello, World!"
$str2 = $null
$str3 = ""
[string]::IsNullOrEmpty($str1)
[string]::IsNullOrEmpty($str2)
[string]::IsNullOrEmpty($str3)
---
False
True
True
```

#### 文字列の内容を置換する
```Replace(<置き換えられる文字列>, <新しい文字列>)```メソッドを使う。

```powershell
$country1 = "Japan"
$country2 = "US"
$str = "Welcome to {0}!!!" -f $country1
$str
---
Welcome to Japan!!!
---
$str = $str.Replace($country1, $country2)
$str
---
Welcome to US!!!
---
```

#### 指定した文字列の開始位置を調べる
先頭からの位置は```IndexOf()```メソッド使う。
指定した文字列が存在しない場合は```-1```が返ってくる。
```powershell
$str = "Hello, World!"
$foo = "and"
$bar = "or"
$str.IndexOf($foo)
$str.IndexOf($bar)
---
-1
8
---
```
末尾からの位置は```LastIndexOf()```メソッドを使う。
```powershell
$str = "Hello, World!"
$foo = "o"
$str.IndexOf($foo) 
$str.LastIndexOf($foo)
---
4
8
---
```
↑の例の場合、```o```は先頭から5文字目と9列目に存在する。```IndexOf()```は前者を見つけるため```4```を返し、```LastIndexOf()```は後者を見つけるため```8```を返す。

#### 文字列に余白や文字列を埋め込む
先頭に文字列を足したい場合は、```Padleft(<文字列を埋め込んだ後の文字数>, <埋め込む文字列>)```メソッドを使う。
末尾に足したい場合は、```PadRight(,)```。
埋め込む文字列を指定しなければ、スペースが足される。
```powershell
$str1 = "1234"
$str2 = "5678"
$foo = "0"
$bar = "A"
$str1.PadLeft(5, $foo)
$str2.PadLeft(5)
$str1.PadLeft(8, $bar)
---
01234
 4567
AAAA1234
---
```

### 指定した文字で分割して配列にする

```Split(<分割したい文字列>)```メソッドを使う。
```powershell
$str = "谷川,福崎,羽生"
$separator = ","
$array = $str.Split($separator)
for ($i = 0; $i -lt $array.Length; ++$i){
    Write-Host $array[$i]
}
---
谷川
福崎
羽生
---
```
### 指定した位置と文字数分だけ文字列を取得する
```SubString(<開始位置>, <取得したい文字数>)```
```powershell
$str = "Hello, World!"
$start = 7
$length = 5
$str.SubString($start, $length)
---
World
---
```

### 大文字、小文字に変換する
```ToUpper()```、```ToLower()```メソッドを使う。
```powershell
PS> $str = "Hello, World!"
PS> $str.ToUpper()
HELLO, WORLD!
PS> $str.ToLower()
hello, world!
```

### 空白を削除する
両端から空白を削除したい場合は、```Tirm()```メソッドを使う。
```powershell
$str = "     Hello, World!!!    "
$str.Trim()
```
文字列の両端の空白は削除されるが、途中に含まれる空白は削除されない。この場合は、```,```と```W```の間の空白は削除されない。

左端、右端それぞれの空白を削除したいときは```TrimStart()```、```TrimEnd()```メソッドを使う。


---

# 数値

### 整数

#### 8桁右寄せ
```powershell
$val = 246
$val_right8 = "{0,8}" -f $val
```
出力はこうなる。
```powershell
     246
```
#### 8桁0埋め
```powershell
$val = 246
$val_zero8 = "{0:00000000}" -f $val
```
こちらでもOK。
```powershell
$val = 246
$val_zero8 = "{0,d8}" -f $val
```
出力はこうなる。
```powershell
00000246
```

---

### 小数

#### 切り上げ、切り捨て、四捨五入、絶対値

```[Math]::Ceiling(<数値>)```で切り上げ、```[Math]::Floor(<数値>)```で切り捨て、```[Math]::Round(<数値>)```で四捨五入した値を取得できる。
```powershell
$foo = 1234.567
$bar = 123.4567
$fooMinus = -1 * $foo
$barMinus = -1 * $bar
[Math]::Ceiling($foo)
[Math]::Floor($foo)
[Math]::Round($foo)
[Math]::Abs($fooMinus)
[Math]::Ceiling($bar)
[Math]::Floor($bar)
[Math]::Round($bar)
[Math]::Abs($barMinus)
---
1235
1334
1235
1234.567
124
123
123
123.4567
---
```

#### 小数4桁にする
```powershell
$val = 12.3456789
$val_4_0 = "{0:.0000}" -f $val
```
こちらでもOK。
```powershell
$val = 12.456789
$val_4_0 = "{0:.f4}" -f $val
```
出力はこうなる。
```powershell
12.3456
```
#### 整数4桁、小数4桁
```powershell
$val = 12.456789
$val_4_0 = "{0:0000.0000}" -f $val
```
出力。元の整数部分が2桁なので、頭に0がついている。
```powershell
0012.3456
```

### 絶対値

```[Math]::Abs(<数値>)```メソッドで絶対値を取得できる。
```powershell
$foo = 1234.567
$bar = 123.4567
$fooMinus = -1 * $foo
$barMinus = -1 * $bar
$foo
$bar
$fooMinus
$barMinus
[Math]::Abs($fooMinus)
[Math]::Abs($barMinus)
---
1234.567
123.4567
-1234.567
-123.4567
1234.567
123.4567
---
```


### 桁区切り

#### コンマで3桁区切り
```powershell
$val = 1234567890
$val_comma3 = "{0:#,#}" -f $val
```
出力。
```powershell
1,234,567,890
```
#### ハイフン区切り
```powershell
$num = 08012345678
$num_hyphenzero = "{0:000-0000-0000}" -f num
$num_hyphensharp = "{0:###-####-####}" -f num
```
出力。`0`でなく`#`を使うと0埋めされない。
```poershell
090-1234-5678
90-1234-5678
```

---

# 日時

`Get-Date`で日時が返ってくる。

```powershell
PS> Get-Date

2021年9月26日 18:16:0
```

`AddYears()`、`AddMonths()`、`AddWeeks()`、`AddDays()`、`AddHours()`、`AddMinutes()`、`AddSeconds()`、`AddMilliSeconds()`で前後の時間を指定できる。()の中を正の数にすれば後の時間、負の数にすれば前の時間となる。

```powershell
PS> (Get-Date).AddDays(1)

2021年9月27日 18:17:33
```

特定の日時を作るにはこうする。
```powershell
$date = Get-Date -Date "2021/09/26 12:34:56"
$date

>>> 2021年9月26日 12:34:56
```
時間は入れなくても大丈夫だが、その場合は時間は`0:00:00`となる。

```powershell
$date = Get-Date 2021/09/26
$date

>>> 2021年9月26日 0:00:00
```

曜日を取り出すこともできる。
```powershell
$date = Get-Date "2021/09/26 12:34:56"
$date.DayOfWeek

>>> Sunday
```
`-Format`で書式を指定できる。
```powershell
$date = Get-Date -Format "yyyy年MM月dd日 HH時mm分ss秒"
$date

>>> 2021年09月26日 18時37分44秒
```
`-Format`は`-f`と省略表記できる。
```powershell
$date = Get-Date -Date "2021/09/26 12:34:56" -f "yyyy/MM/dd HH:mm:ss"
$date

>>> 2021/09/26 12:34:56
```
`-Format`オプションは`Get-Date`コマンドレットのオプションであり、`[DateTime]`型の値には使用できない。

ファイルの更新日時などの書式を指定するには`ToString`メソッドを使用して取得する。

```powershell
$item = Get-Item .\000.jpg
$item.LastWriteTime.ToString('yyyy/MM/dd')
```
変数に入った日時データを文字列に変換する場合は `ToString`を使用し、`Get-Date`コマンドレットでは`-Format`オプションを使用する。

---
### $?
直前のコマンドが成功している場合には何もしない。
```powershell
PS> true
PS> if (! $?) { echo "失敗しました。" }
PS> 
```
直前のコマンドが失敗している場合にはエラーメッセージを出力。
```powershell
PS> false
PS> if (! $?) { echo "失敗しました。" }
失敗しました。
PS> 
```

---

# ファイル操作
### ディレクトリ移動 | cd
`cd`の後に`~`を入れなくてもホームディレクトリに戻る。

```powershell
PS C:\Users\ryo_furutani\Downloads> cd
PS C:\Users\ryo_furutani>
```

---

### pwdと$PWD
`pwd`コマンドで現在のディレクトリを表示することができる。

```powershell
PS C:\Users\ryo_furutani> pwd

Path
----
C:\Users\ryo_furutani
```

自動変数`$PWD`でも現在のディレクトリを取得できる。
```powershell
PS C:\Users\ryo_furutani\downloads> $PWD

Path
----
C:\Users\ryo_furutani\downloads
```

適当な変数に`$PWD`を入れておくことで、ディレクトリを移動をした後でも、そのときのディレクトリの場所を得ることができる。

```powershell
PS C:\Users\ryo_furutani> $dir_at_this_point = $pwd
PS C:\Users\ryo_furutani> cd downloads
PS C:\Users\ryo_furutani\downloads> $dir_at_this_point

Path
----
C:\Users\ryo_furutani
```
この例だと、1階層潜って`\downloads`フォルダに入った後でも`$dir_at_this_point`に`$PWD`を格納した時点での情報を得ることができている。

---
### ファイル、フォルダーの作成 | New-Item / mkdir
`New-Item`コマンドでファイルやフォルダーを作成することができる。
```powershell
New-Item ./test.txt -ItemType File -Force
New-Item ./test -ItemType Directory -Force
```
`-Force`オプションをつけることで、同名のファイルやフォルダーがあっても強制的に上書きすることができる。

作成するファイルに文字列を書き込みたいときは、`-Value`オプションを使用する。
```powershell
New-Item ./test.txt -ItemType File -Value "Hello, World！！" -Force
```
これで`Hello, World!!`と書き込まれたtxtが作成される。

なお、ファイルやフォルダー作成時に指定したfile pathに存在しないフォルダーが指定された場合は、そのフォルダーが作成される。

`mkdir フォルダー名`でもフォルダーを作成できる。

```powershell
cd mkdir ./test -Force
```

---

### ディレクトリ内のファイル一覧を取得する | Get-ChildItem / ls
`Get-ChildItem`か`ls`で取得できる。

```powershell
Get-ChildItem
```

```powershell
ls
```

実行すると、ディレクトリ内のファイルのリストが出力される。

ディレクトリを含めずにファイルだけ取得したい場合は、`-File`をつける。

```powershell
ls -File
```

---

### キーワードでディレクトリ内のファイルを探す

```powershell
Get-ChildItem *探したいキーワード*
```
*なしの`探したいキーワード`なら完全一致、`探したいキーワード*`なら前方一致、`*探したいキーワード`なら後方一致となる。

フルパスを取得したいときは、
```powershell
Resove-Path *探したいキーワード*
```

---

### ファイル作成 | New-Item
以下で新しいファイルを作成できる。中身のないファイルを作りたい場合は、冒頭のダブルクォーテーション部分は空っぽの`""`でOK。拡張子も省略できる。ファイル名にスペースを挟まないこと。

```powershell
"ファイルの内容" > ファイル名.txt
```
以下の書き方でもOK。`-Path`は絶対パスでも相対パスでもOKで、ファイル名だけ書けば、現在のディレクトリ内にファイルが作成される。

```powershell
New-Item -Path ファイル名.txt
```

```powershell
NI -Path ファイル名.txt
```

---
### ファイルやフォルダーをコピーする
`Copy-Item`コマンドを使う。
```powershell
Copy-Item ./test.txt ./test_copy.txt -Force
```
`-Force`で同名のファイルやフォルダーがあっても上書きすることができる。

`-Recurese`でサブフォルダーもコピーの対象となる。

`-Include`オプションを使用することで、パターンに合致するファイルをまとめてコピーすることができる。ワイルドカードも使用できる。↓の例だと、.txtの拡張子を持つファイルをコピーする。
```powershell
Copy-Item test/* test2 -Recurse -Force -Include *.txt
```
逆に.txtを除きたいときは`-Exclude`を使う。
```powershell
Copy-Item test/* test2 -Recurse -Force -Exclude *.txt
```
---

### 複数のファイル作成
以下で10個のファイルを作成できる。

この例だと`ファイルの内容`と書かれた`ファイル名  1.txt`～`ファイル名10.txt`の10個のtxtファイルが作成される。

`|`で前に行った処理を後ろのコマンドに渡すことができ、この場合`1..10`が出力した数字を次の`ForEach-Object`コマンドに渡していて、自動変数`$_`に`1..10`の結果である1から10の数字を格納している。`$_`はパイプライン経由でオブジェクトを受け取ることができる。

```powershell
1..10 | ForEach-Object {"ファイルの内容" > ファイル名$_.txt}
```

```powershell
1..10 | ForEach-Object {New-Item -Path ファイル名$_.txt}
```

```powershell
1..10 | ForEach-Object {NI -Path ファイル名$_.txt}
```

---
### ファイルやフォルダーを削除する

`Remove-Item`を使う。
```powershell
Remove-Item test2
```
フォルダーを削除する際に警告を出したくないときは、`-Recurese`をつける。
読み取り属性を削除する際の警告を出したくないときは、`-Force`をつける。

---
### ファイルの作成日時/最終更新日時/最終アクセス日時を取得する

`Get-ItemProperty`でファイルの情報を取得できる。
```powershell
Get-ItemProperty C:\Users\ryo_furutani\Downloads\test\test.txt
```
作成日時などを個別に取得することもできる。
```powershell
$file = Get-ItemProperty C:\Users\ryo_furutani\Downloads\test\test.txt
$file.CreationTime
$file.LastWriteTime
$file.LastAccessTime
```

---
### ファイルやフォルダーを起動する。
`Invoke-Item`コマンドを使う。

フォルダーをエクスプローラーで見たいときは、↓のような感じ。
```powershell
Invoke-Item C:\Users\ryo_furutani\Downloads\test
```
ファイルを関連付けられたアプリで起動したいときは、↓のような感じ。
```powershell
Invoke-Item C:\Users\ryo_furutani\Downloads\test\test.txt
```
変数も使える。
```powershell
Invoke-Item $pwd
```
```powershell
$file = "C:\Users\ryo_furutani\Downloads\test\test.txt"
Invoke-Item $file
```
ワイルドカードも使える。
```powershell
$file = "C:\Users\ryo_furutani\Downloads\test\*.txt"
Invoke-Item $file
```
---

### ファイル内の文字列を検索する

`Select-String`コマンドを使う。
```powershell
Select-String 検索したい文字 検索したいファイルのパス
```
例。
```powershell
Select-String ”Hello, World” ./test/test.txt
---
test\test.txt:1:Hello, World！！
---
```

---
### ファイルをリネームする
以下で`before.txt`を`after.txt`にリネームできる。ファイル名にスペースを挟まないこと。リネーム後のファイル名は`-NewName`の後に書かなくてはいけないことに注意。
```powershell
Rename-Item -Path before.txt -NewName after.txt 
```

---

### 連番の付いたファイル名をリネームする

`before1.txt`～`before10.txt`のように連番の付いたファイル名を、`after1.txt`～`after10.txt`にリネームする。

```powershell
Get-ChildItem before*.txt -File | ForEach-Object{Rename-Item -Path $_ -NewName $_.Name.Replace("before","after")}
```
以下のように短く書くこともできる。


---

### バラバラの名前がついたファイル名を連番付きのファイル名にリネームする

フォルダー内のファイル名がバラバラなときに、`after_0032`のような連番付きのファイル名にリネームする。

```powershell
$counter = 0
Get-ChildItem -Path -File | ForEach-Object{
    [string]$number = "{0:0000}" -f $counter
    $newName = "after" + "_" + $number
    Rename-Item -Path $_ -NewName $newName
    $counter = $counter + 1
    }
```

#### 説明
1. 連番を入れておく変数`counter`を作る。
    ```powershell
    $counter = 0
    ```
2. リネーム対象となるファイルを取得する。ディレクトリを取得しないように`-File`をつける。取得したファイルを`ForEache-Object`コマンドに渡す。
    ```powershell
    Get-ChildItem -Path -File | ForEach-Object{
    ```
3. 0埋めされた連番の文字列を変数`number`に作る。`1`なら`0001`、`132`なら`0132`というように頭に0がつくようにして`counter`変数に入力する。
    ```powershell
    [string]$number = "{0:0000}" -f $counter
    ```

4. リネーム後のファイル名を変数`newName`に生成する。`after_0132`というようになる。
    ```powershell
    $newName = "after" + "_" + $number
    ```
5. リネームする。
    ```powershell
    Rename-Item -Path $_ -NewName $newName
    ```
6. `counter`を1増やす。
    ```powershell
    $counter = $counter + 1
    }
    ```

---

### ディレクトリ内のファイルの情報をcsvに書き出す

ディレクトリ内のファイル一覧をcsvにして書き出す。

```powershell
Get-ChildItem -Path . -File | Sort-Object Length -Descending |Select-Object Name, Directory, Length, LastWriteTime, CreationTime | Export-Csv -Path list.csv -Encoding UTF8 -NoTypeInformation
 ```

#### 説明

1. フォルダー内のファイルの情報を取得する。

    ```powershell
    Get-ChildItem -Path . -File
    ```
    特定のファイル名に合致するものだけ拾いたい場合は、`-Path`の後ろの`.`を置き換える。

    例：`-Path *.jpg`

2. ファイルをソートする。

    ```powershell
    Sort-Object Length -Descending |
    ```
    `Length`オプションでソートのキーとしたいプロパティを選択する。`Name`でファイル名、`Length`でファイルサイズ、`LastWriteTime`は最終更新日時、`LastWriteTime`は作成日時。
    
    デフォルトだと昇順にソートされるので、降順にしたい場合は`-Descending`を追加する。

3. csvに書き出したい内容を選択する。

    ```powershell
    Select-Object Name, Directory, Length, LastWriteTime, CreationTime |
    ``` 
    `Name`はファイル名、`Directory`はパス、`Length`はファイルサイズ、`LastWriteTime`は最終更新日時、`LastWriteTime`は作成日時。

4. csvに書き出すための設定を行った上で、書き出しを行う。

    ```powershell
    Export-Csv -Path list.csv -Encoding UTF8 -NoTypeInformation
    ``` 
    `-Path list.csv`はファイル名。別のディレクトリに書き出したい場合は、パスごと記載する。

    `-Encoding UTF8`は文字コード。デフォルトはASIIなので、日本語の文字化けを防ぐ意味でも`UTF8`にしている。

    `-NoTypeInformation`を記載しないと、csvの1行目に型の情報が記載されてしまう。

---

### 書き出したファイル一覧のcsvを読み込む

単純にファイルの内容をPowerShell上に表示したい場合は、`Get-Contetnt`を使う。
```powershell
Get-Content list.csv
```
ただし、これだと見辛いので`Import-Csv`を使うとよい。
```powershell
Import-Csv list.csv
```

以下のように書き出したファイル一覧のcsvを読み込み、ファイルサイズの合計、平均、最大値、最小値を求めることもできる。

```powershell
Import-Csv list.csv | Measure-Object -Sum -Average -Maximum -Minimum -Property Length
```

