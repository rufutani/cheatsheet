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
