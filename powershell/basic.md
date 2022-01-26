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
複数の文を1行に収めたい場合は、セミコロン`;`でつなぐ。


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
バッククォートの前にスペースが必要なことに注意。


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
|$PWD|ドライブレター込みのカレントディレクトパス|
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

