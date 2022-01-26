
### PoweShellの実行ファイルのパス

|環境|パス|エイリアス|
|:--|:--|:--|
|Windows PoweShell|%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe|
|PowerShell 7 (Windows)|%PROGRAMFILES%\PowerShell\7\pwsh.exe|.msiで手動でインストールした場合
|PowerShell 7 (Windows)|%PROGRAMFILES%\WindowsApps\バージョンによって異なる|Microsoft Store経由でインストールした場合
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


---

