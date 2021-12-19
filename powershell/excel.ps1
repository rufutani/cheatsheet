# Excelを操作するCOMオブジェクトへの参照を$excel変数に格納。
$excel = New-Object -Com Excel.Application






# Excelを終了する。
$excel.Quit
# COMオブジェクトへの参照を開放する。
[void][System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($excel)
# 処理が完了したことを知らせる。
if ($?){
    Write-Host Excelを終了しました。
}


<# 解放処理が完了したことを知らせなくてもいいのであれば、
$excel.Quit
[void][System.Runtime.InteropServices.Marshal]::FinalReleaseComObject($excel)
if ($?){
    Write-Host Excelを終了しました。
} #>