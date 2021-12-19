xs# Office365系アプリの操作

Excel、Word、IEなどをCOM (Component Object Model) によって操作することができる。

## 開始と終了

### ProgIDとは
COMを利用してアプリを操作する場合、アプリごとに指定されたProgIDという識別文字列が必要になる。Officeの場合、それぞれのProgIDは次のようになっている。
|アプリ|ProgID|
|:--|:--|
|Access|Access.Application|
|Excel|Excel.Application|
|Outlook|Outlook.Application|
|Powerpoint|Powerpoint.Application|
|Word|Word.Application|
|FrontPage|FrontPage.Application|

### COMオブジェクトへの参照の定義
Excelを操作するCOMオブジェクトへの参照を変数`$excel`に格納する形で定義する。以降、Excelへの操作は`$excel`変数を使用して行う。
```powershell
# Excelを操作するCOMオブジェクトへの参照を$excel変数に格納。
$excel = New-Object -Com Excel.Application
```
Excelを操作し終えた後は、PowerShellからのCOMオブジェクトへの参照を開放する。
```powershell
# Excelを終了する。
$excel.Quit
# COMオブジェクトへの参照を開放する。
[void][System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($excel)
```
解放の処理が完了したことを伝えたければ、
```powershell
# Excelを終了する。
$excel.Quit
# COMオブジェクトへの参照を開放する。
[void][System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($excel)
# 処理が完了したことを知らせる。
if ($?){
    Write-Host Excelを終了しました。
}
```

## Excelファイルを読み込む

`C:\temp`に存在する、`text.xlsx`から`Sheet1`シートの`A1`セルを読み込む。

```powershell
# 開きたいExcelファイルのパスを定義。
$xlsfile = "C:\Users\ryo_furutani\temp\test.xlsx"

# Excelアプリのインスタンスを生成。
$excel = New-Object -Com Excel.Application

# Excelアプリを表示する/しない。
$excel.Visible = $false

# Excelを開く。
$wb = $excel.Workbooks.Open($xlsfile)

# Sheet1を選択。
$ws = $wb.Worksheets.Item("Sheet1")

# (1,1)セルの内容を画面に表示。
Write-Host $ws.Cells.Item(1,1).Text

# (2,1)セルに書き込み。
$ws.Cells.Item(2,1) = "pwshより書き込み。"

# 上書き警告を出さないために、警告を非表示。
$excel.DisplayAlerts = $false

# # ファイルを上書き保存。
# $wb.Save()

#ファイルを別名保存。
$wb.SaveAs([ref]"C:\Users\ryo_furutani\temp\test2.xlsx")

# csvで保存。
$wb.SaveAs([ref]"C:\Users\ryo_furutani\temp\test.csv", 6)

# 警告を表示に戻す。
$excel.DisplayAlerts = $true

# Excelファイルを閉じる。
$wb.Close()

# Excelアプリを終了。
$excel.Quit
# COMオブジェクトの開放との通知。
[void][System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($excel)
if ($?){
    Write-Host Excelを終了しました。
    }
```

## Excelファイルを作成する

```powershell
# Excelアプリのインスタンスを生成。
$excel = New-Object -Com Excel.Application


# ファイルを作成し、そのオブジェクトを$wb変数に格納。
$wb = $excel.Workbooks.Add()

# Sheet1を選択。
$ws = $wb.Worksheets.Item("Sheet1")

# (1,1)セルの内容を更新。
$ws.Cells.Item(1,1) = "Hello, World."

# ファイルを保存。
$wb.SaveAs([ref]"C:\Users\ryo_furutani\temp\test2.xlsx")

# Excelファイルを閉じる。
$wb.Close()

# Excelアプリを終了。
$excel.Quit
# COMオブジェクトの開放との通知。
[void][System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($excel)
if ($?){
    Write-Host Excelを終了しました。
    }
```

## Excelマクロを実行する

```vb
Sub Hello()
    Call MsgBox("Hello, Excel!")
End Sub
```

```powershell
# 開きたいExcelファイルのパスを定義。
$xlsfile = "C:\Users\ryo_furutani\temp\macro.xlsm"

# Excelアプリのインスタンスを生成。
$excel = New-Object -Com Excel.Application

# Excelを開く。
$wb = $excel.Workbooks.Open($xlsfile)

# 警告を非表示。
$excel.DisplayAlerts = $false

# マクロの実行
$excel.Run("Hello")

# Excelファイルを閉じる。
$wb.Close()

# 警告を表示に戻す。
$excel.DisplayAlerts = $true

# Excelアプリを終了。
$excel.Quit
# COMオブジェクトの開放との通知。
[void][System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($excel)
if ($?){
    Write-Host Excelを終了しました。
    }
```
