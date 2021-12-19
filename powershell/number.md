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