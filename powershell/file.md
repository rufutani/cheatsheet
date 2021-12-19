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
### ファイルやフォルダーを起動する
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
### パスの存在を確認する
#### ① `Test-Path`コマンドを使う。

`-PathType`オプションで確認するオブジェクトの種類を指定できるが、フォルダーの場合は`Container`、ファイルの場合は`Leaf`となるので注意（オプションを指定しなければオブジェクトの種類は任意として扱われる）。

testフォルダーが存在し、test.txtが存在しなかった場合はこうなる。ワイルドカードも使える。
```powershell
Test-Path test -PathType Container
>>> True
Test-Path test.txt -PathType Leaf
>>> Flase
Test-Path *.txt -PathType Leaf
>>> True
```

#### ②`Resolve-Path`を使う。
```powershell
Resolve-Path C:\Users\ryo_furutani\test\aaa.txt
>>> Path
>>> ----
>>> C:\Users\ryo_furutani\test\aaa.txt

Resolve-Path C:\Users\ryo_furutani\test\*.txt
>>> Path
>>> ----
>>> C:\Users\ryo_furutani\test\aaa.txt
>>> C:\Users\ryo_furutani\test\bbb.txt
```
---

### パスからフォルダ名やファイル名を取得する

`Split-Path`コマンドを使用する。`Split-Path <ファイルやフォルダーのパス>`という形で使用する。パスは絶対パスでも相対パスでもよい。

フォルダーの場合。
```powershell
Split-Path ./test/
>>> .
Split-Path C:\Users\ryo_furutani
>>> C:\Users
```
ファイルの場合。
```powershell
Split-Path ./test/aaa.txt
>>> test
Split-Path C:\Users\username\test
>>> C:\Users\username\test
```
ファイル名を取得したい場合は、`-Leaf`オプションを付ける。
```powershell
Split-Path ./test/aaa.txt -Leaf
>>> aaa.txt
```
親フォルダーの名前を取得したい場合は`-Parent`オプションをつける。
```powershell
Split-Path ./test/aaa.txt
>>> ./test
```
注意：このコマンドはあくまで文字列をパスとして認識して処理するだけで、ファイルやフォルダーが実在するかは確認していない。なので、存在しないファイルやフォルダーのパスを与えても結果は返ってくる。指定したパスが実在することの確認を行った上で処理したい場合は、`-Resolve`オプションをつける。

---
### パスを結合する

`Join-Path`コマンドを使う。
```powershell
Join-Path C:\Users\ryo_furutani test
>>> C:\Users\ryo_furutani\test
```
`-Resolve`オプションをつけることで、パスが存在するかの確認ができることは、`Split-Path`コマンドと同様。また、ワイルドカードも使用できるので、`Resolve-Path`コマンドのようにファイル検索にも使える。
```powershell
Join-Path C:\Users\ryo_furutani\test *.txt -Resolve
>>> C:\Users\ryo_furutani\test\aaa.txt
>>> C:\Users\ryo_furutani\test\bbb.txt
```
使用する文字列は変数に格納されていてもよい。
```powershell
$foo = "C:/Users/ryo_furutani"
$bar = "Downloads"
Join-Path $foo $bar
>>> C:\Users\ryo_furutani\Downloads
```
---
### ファイル内の文字列を検索する

`Select-String`コマンドを使う。`Select-String <検索したい文字列> <対象としたいファイル名>`の形で使う。
```powershell
Select-String 検索したい文字 検索したいファイルのパス
```
結果は`ファイルのパス:行数:検索文字列`といった形で返ってくる。
```powershell
Select-String ”Hello, World” ./test/test.txt
>>> test\test.txt:1:Hello, World！！
```
ある文字列が存在する.txtファイルの一覧を取得したい場合はこんな感じ。
```powershell
 Select-String "Hello, World" ./test/*.txt | Select-Object filename | Get-Unique -AsString
```
---
### 相対パスを絶対パスに変換する
`Convert-Path`コマンドを使う。ファイルにもフォルダーにも使える。
```powershell
Convert-Path ./test
>>> C:\Users\ryo_furutani\downloads\test
Convert-Path ./test/aaa.txt
>>> C:\Users\ryo_furutani\downloads\test\aaa.txt
```

---
### 特殊フォルダーのパスを取得する
`[Environment]::GetFolderPath([Environment+SpecialFolder]::特殊フォルダー名)`の形でフルパスを取得できる。
```powershell
[Environment]::GetFolderPath([Environment+SpecialFolder]::Desktop)
>>> C:\Users\ryo_furutani\Desktop
```
|メンバー名|説明|フルパス|
|:--|:--|:--|
|AdminTool||
|ApplicationData||
|CDBruning||
|CommonAdminTools||
|CommonApplicationData||
|CommonDesktopDirectory||
|CommonDocuments||
|CommonMusic||
|CommonOemLinks||
|CommonPictures||
|CommonProgramFiles||
|CommonProgramFilesX86||
|CommonPrograms||
|CommonStartMenu||
|CommonStartUp||
|CommonTemplates||
|CommonVideos||
|Cookies||
|Desktop||
|DesktopDirectory||
|Favorites||
|Fonts||
|History||
|InternetCache||
|LocalApplicationData||
|LocalizedResources||
|MyComputer||
|MyDocuments||
|MyMusic||
|MyPictures||
|MyVideos||
|NetworkShortcuts||
|Personal||
|PrinterShortcuts||
|ProgramFiles||
|ProgramFilesX86||
|Programs||
|Recent||
|Resources||
|SendTo||
|StartMenu||
|StartUp||
|System||
|SystemX86||
|Templates||
|UserPrifile||
|Windows||

---
### 環境変数を取得する

`Get-ChildItem Env:`で一覧を取得できる。
`Get-ChildItem Env:環境変数名`で個別に指定することもできる。

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

