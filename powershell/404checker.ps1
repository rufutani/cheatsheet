# webサイトの死活監視

# ステータスコードを取得する
# ステータスコードが200かどうか確認する
# ステータスコードが200出ない場合にだけ、status_check.logファイルを作る
# 日付と一緒にステータスコードとURLをjsonとして保持する
# ファイルに書き込む
# 1分起きに繰り返す


# URLを設定
$url = "https://us.vaio.com"
$valid_status_code = 404


while ($true) {
    
    # ステータスコードを取得する
    $status_code = try {
    (Invoke-WebRequest -Uri $url).StatusCode
    }
    # エラーコードを取得
    catch {
        $Error[0].Exception.GetBaseException().Response.StatusCode.Value__
    }

    # ステータスコードが200でない場合にだけ、
    if ($status_code -ne $valid_status_code) {
        # status-check.logがすでに存在しないか確認する
        if (-not(Test-Path ./status_check.log)) {
            # status_check.logファイルを作る
            New-Item -path ./status_check.log
        }

        # 日付と一緒にステータスコードとURLをjsonとして保持する
        $json = [ordered]@{
            Date       = (Get-Date).ToString("F")
            URL        = $url
            StatusCode = $status_code
        } | ConvertTo-Json -Compress
        # ファイルに書き込む
        $json | Out-File -LiteralPath .\status_check.log -Append -Encoding utf8
    }
    Start-Sleep -Seconds 30
}