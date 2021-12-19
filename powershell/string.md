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
---



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