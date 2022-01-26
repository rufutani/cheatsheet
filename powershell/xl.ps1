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
if ($?){Write-Host -BackgroundColor DarkCyan -ForegroundColor White Excelを終了しました。}
