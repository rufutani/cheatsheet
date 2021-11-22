# JavaScriptの主なデータ型

|分類|データ型|概要|
|:--|:--|--|
|基本型|数値型<br>**number**|正負両方の小数や整数。|
|基本型|文字列型<br>**string**|シングル/ダブルクォートで書かれた0個以上の文字列。|
|基本型|真偽型<br>**boolean**|true（真）<br>false（偽）|
|基本型|シンボル型<br>**symbol**|シンボルを表す。|
|基本型|特殊型<br>**null**/**undefined**|値が空、未定義なことを表す。|
|参照型|配列<br>**array**|データの集合。<br>各要素にはインデックス番号でアクセスできる。|
|参照型|オブジェクト<br>**object**|データの集合。<br>ハッシュ、連想配列と呼ばれることもある。<br>各要素には名前でアクセスできる。|
|参照型|関数<br>**function**|一連の処理の集合。|

---
# 値とデータ型の取得

```js
var num = 1234567;
console.log(num);
console.log(typeof num)

>>> 1234567
>>> number
```
```js
var str = 'こんにちは。';
console.log(str);
console.log(typeof str)

>>> こんにちは。
>>> string
```
```js
var flag = true;
console.log(flag);
console.log(typeof flag)

>>> true
>>> boolean
```

```js
let judan = [
            'yonenaga',
            'fukusaki',
            'takahashi',
            'shima'
            ];
console.log(judan)
console.log(typeof judan)

>>> Array(4) [ "yonenaga", "fukusaki", "takahashi", "shima" ]
>>> object
```

```js
titleHolder1986 = {
    'meijin': '中原誠',
    'isei': '桐山清澄',
    'oi': '高橋道雄',
    'oza': '中原誠',
    'judan': '福崎文吾',
    'oshou': '中村修',
    'kio': '高橋道雄'
    };
console.log(titleHoledr1986);
console.log(typeof titleHolder1986)

>>> Object { meijin: "中原誠", isei: "桐山清澄", oi: "高橋道雄", oza: "中原誠", judan: "福崎文吾", oshou: "中村修", kio: "高橋道雄" }
>>> object
```
---

# 論理演算子

|演算子|概要|例|
|--|--|--|
|&&|左右の式がどちらもtrueのときにtrue|10===10 && 100 === 100<br>>>> true
|\|\||左右の式のいずれかがtrueのときにturue|10 === 10 \|\| 5 === 10<br>true
|!|式がfalseのときにtrue| !(5 === 10)<br>true

---

# その他の演算子

|演算子|概要|
|--|--|
|,|左右の式を続けて実行|
|delete|オブジェクトのプロパティや配列の要素を削除|
|instanceof|オブジェクトが指定されたクラスのインスタンス化を判定|
|new|新しいインスタンスを生成|
|typeof|おペン度のデータ型を取得|
|void|未定義を返す|

---

### delete

配列の場合。
```js
let judan = [
            'yonenaga',
            'fukusaki',
            'takahashi',
            'shima'
            ];

delete judan[3];
console.log(judan[3]);
console.log(judan);

>>> Undefined
>>> Array(4) [ "yonenaga", "fukusaki", "takahashi", <1 empty slot> ]
```
オブジェクトの場合。
```js
let titleHolder1986 = {
    meijin: '中原誠',
    kisei: {
        kisei1h: '桐山清澄',
        kisei2h: '桐山清澄'
        },
        oi: '高橋道雄',
        oza: '中原誠',
        judan: '福崎文吾',
        oshou: '中村修',
        kio: '高橋道雄'
        };
delete titleHolder1986.oi;
console.log(titleHolder1986);
console.log(titleHolder1986.oi)

>>> Object { meijin: "中原誠", kisei: {…}, oza: "中原誠", judan: "福崎文吾", oshou: "中村修", kio: "高橋道雄" }
>>> undefined
```
明示的に宣言された変数を削除することはできない。
```js
let judan1986 = 'fukusaki';
console.log(delete judan1986);
console.log(judan1986)

>>> true
>>> fukusaki
```
```js
judan1987 = 'takahashi';
console.log(delete judan1987);
cosole.log(judan1987)

>>> true
>>> Uncaught ReferenceError: judan1987 is not defined

宣言せずに置いた変数は削除できる。
```

# テンプレート文字列

テンプレート文字列を使用することで、以下のような文字列表現が可能になる。

- 文字列への変数の埋め込み
  
        {$変数名}

- 複数行にまたがる文字列 

        「`」で文字列を囲む。

### 例

```js
let name = '福崎';
let str = `こんにちは、${name}さん。
今日もいい天気ですね。`
console.log(str)

>>> こんにちは、福崎さん。
>>> 今日もいい天気ですね。
```

---

# 分割代入
配列やオブジェクトの要素をひとつずつ取り出した変数を作る時、以下のようにするのは面倒。

配列の場合、
```js
let judan = [
    'Yonenaga',
    'Fukusaki',
    'Takahashi',
    'Shima',
    'Habu'
    ];

let judan1985 = judan[0];
let judan1986 = judan[1];
let judan1987 = judan[2];
let ryuo1988 = judan[3];
let ryuo1989 = judan[4];
```

↑のような表現は面倒なので、↓のように記述することができる。

```js
let judan = [
    'Yonenaga',
    'Fukusaki',
    'Takahashi',
    'Shima',
    'Habu'
    ];

let [
    judan1985,
    judan1986,
    judan1987,
    ryuo1988,
    ryuo1989
    ] = judan;

console.log(judan1986)
console.log(ryuo1989)

>>> Fukusaki
>>> Habu
```

オブジェクトの場合は、以下のようにすれば文字列型の変数にオブジェクトの値を入れなおすことができる。

```js
let titleHolder1986 = {
        meijin: '中原誠',
        kisei: {
            kisei1h: '桐山清澄',
            kisei2h: '桐山清澄'
        },
        oi: '高橋道雄',
        oza: '中原誠',
        judan: '福崎文吾',
        oshou: '中村修',
        kio: '高橋道雄'
    };

let {
    meijin: meijin1986,
    kisei: {
        kisei1h: kisei19861h,
        kisei2h: kisei19862h
    },
    oi: oi1986,
    oza: oza1986,
    judan: judan1986,
    ohou: oushou1986,
    kio: kio1986} = titleHolder1986;
        
console.log(meijin1986);
console.log(kisei19861h);

>>> 中原誠
>>> 桐山清澄
```

---

#　条件演算子 (?:)

指定する条件式の審議に応じて、対応する式の値を出力したい場合に使う。
```js
let score = 88;
console.log((score >= 70) ? '合格' : '不合格')

>>> 合格
```
if文で以下のようにも書けるが、単に出力する値を条件により振り分けたい場合は`?:`を使うことでシンプルに表現することができる。
```js
let score = 88;
if (score >= 70) {
    result = '合格'
} else {
    result = '不合格'
};
console.log(result)
```

---

# if文

```js
let x = 30;
if (x >= 10) {
    if (x >= 20) {
        console.log('変数xは20以上です。');
    }else{
        console.log('変数xは10以上20未満です。');
    }
}else{
    console.log('xは10未満です。');
}

>>> 変数xは20以上です。
```
---

# switch文
switch文を使うと、↓のような冗長なif分を、
```js
let rank ='B';
if (rank = 'A') {
    console.log('Aランクです。')
}else if (rank = 'B'){
    console.log('Bランクです。')
}else if (rank = 'C'){
    console.log('Cランクです。')
}else{
    console.log('ランク外です。')
}

>>> ランクBです。
```
このようにすっきり書ける。
```js
let rank = 'B';
switch(rank) {
    case 'A':
        console.log('Aランクです。');
        break;
    case 'B':
        console.log('Bランクです。');
        break;
    case 'C':
        console.log('Cランクです。');
        break;
    default:
        console.log('ランク外です。');
        break;
}

>>> ランクBです。
```
case / default句の最後には`break`して処理を止める。switch文はif分とは違い、その句を終えても自動的に処理が止まらないので`break`が必要。

swith文の先頭の式とcase句の比較は`===`で行われるので、型が違うとcaseに当てはまったことにならない。

caseを複数つなげげることもできるので、以下の2つは同じ内容になる。

```js
var rank = 'AAA';
    switch (rank) {
        case 'AAA':
        case 'AA':
        case 'A':
            console.log('合格！');
            break;
        case 'B':
        case 'C':
            console.log('不合格！');
        default:
            console.log('審査対象外です。');
            break;
}

>>> 合格！
```
```js
var rank = 'AAA';
if (rank === 'AAA' || rank === 'AA' || rank === 'A') {
    console.log('合格！');
} else if (rank === 'B' || rank === 'C') {
    console.log('不合格！');
} else {
    console.log('審査対象外です。');
}

>>> 合格！
```

---

# while文 / do...while文

`while`文、`do...while`文のどちらも条件が成立している間は処理をループさせることができる。

↓の2つは一見同じように見えるが…、

```js
var x = 5;
while (x <= 10){
    console.log(`xの値は${x}`);
    x++;
}

>>> xの値は5
>>> xの値は6
>>> xの値は7
>>> xの値は8
>>> xの値は9
>>> xの値は10
```
```js
var x = 5;
do {
    console.log(`xの値は${x}`);
    x++;
} while (x <= 10);

>>> xの値は5
>>> xの値は6
>>> xの値は7
>>> xの値は8
>>> xの値は9
>>> xの値は10
```

`x = 11`とすると、`do...while`文のほうは、`xの値は11`とメッセージが出力される。

これは`while`文は最初に条件を判定する前置判定なのに対し、`do...while`文は最後に条件を判定する後置判定だから。

while文、do...while文ともに無限ループが発生してしまう危険性があるため注意する。

---

# for文

`while`文、`do...while`文の例を`for`文で書くとこうなる。
```js
for (x = 5; x <= 10; x++) {
    console.log('xの値は' + x);
}

>>> xの値は5
>>> xの値は6
>>> xの値は7
>>> xの値は8
>>> xの値は9
>>> xの値は10
```
`for`直後の()内は、`(初期化式; ループ継続条件式; 増減式)`という風に書く。

`初期化式`はループにおいて一度しか実行されない。この例だと、ループの1回目で`x = 5`が実行される。この辺数は`カウンター変数`や`ループ変数`と呼ばれる。

`ループ継続条件式`にはブロック内の処理が継続するための条件を書く。この例だと`x <=10`なので、カウンター変数`x`が10以下の間だけ処理がループする。

`増減式`はブロック内の処理が実行されるたびに実行される。通常、カンター変数を増減させるインクリメント/デクリメント演算子である`++`や`--`、または代入演算子を指定する。

カンマ演算子`,`を使うことで初期化式、ループ継続条件式、増減式に複数の式を指定することができる。カンマで区切られた式は左の方から実行される。

```js
for (i = 1, j = 1; i <= 5; i++, j++) {
    console.log(`i*jは${i * j}`);
}
```

---

# for...in文

`for...in`文を使用することでハッシュ内の要素を取り出した処理ができる。

```js
var judan = {
    1985: '米永邦夫',
    1986: '福崎文吾',
    1987: '高橋道雄'
};
for (i in judan) {
    console.log(`${i}年の十段は${judan[i]}です。`);
}

>>> 1985年の十段は米永邦夫です。 
>>> 1986年の十段は福崎文吾です。 
>>> 1987年の十段は高橋道雄です。
```

配列に対しても`for...in`文を使用できるが、以下のように拾いたくないものまで拾ってしまう。
```js
var judan = [
    'Yonenaga',
    'Fukusaki',
    'Takahashi'
];
// 配列の機能を拡張
Array.prototype.hoge = function(){};

for (i in judan){
    console.log(judan[i]);
}

>>> Yonenaga
>>> Fukusaki
>>> Takahashi
>>> function hoge()
```
この場合は配列に拡張したメソッドまで拾っている。処理の順番も保証されないという問題もある。

配列から要素を取り出す場合は、以下のように書くか、`for...of`文を使う。
```js
var judan = [
    'Yonenaga',
    'Fukusaki',
    'Takahashi'
];

// 配列の機能を拡張
Array.prototype.hoge = function () { };

for (i = 0; i < judan.length; i++) {
    console.log(judan[i]);
}

>>> Yonenaga
>>> Fukusaki
>>> Takahashi
```
`judan.length`で配列のサイズを取得している。
# for...of文

配列を順番通りに列挙するためには`for...of`文を使う。配列だけではなく、`NodeList`や`arguments`、イテレーター/ジェネレーターなどの配列ライクなものも処理できる。
```js
// 配列の機能を拡張
Array.prototype.hoge = function () { };

for (value of judan) {
    console.log(value);
}

>>> Yonenaga
>>> Fukusaki
>>> Takahashi
```
`for...in`文ではカウンター変数にインデックス番号が渡されていたのに対し、`for...of`文では値をそのまま渡される。

---

# breakでループを止める

```js
var result = 0;
for (i = 1; i <= 100; i++) {
    result += i;
    console.log(result)
    // resultが1000より大きくなったらとループを止める
    if (result > 1000) {
        break;
    }
}

>>> 1 
>>> 3 
>>> 6 
>>> 10 
>>> 15 
>>> (省略)
>>> 946 
>>> 990 
>>> 1035 
合計値が1000を超えるのは45
```
`if`と`break`を組み合わせることで、ある条件下でループを止めることができる。

---

# continue

```js
var result = 0;
for (i = 1; i <= 100; i++) {
    // iが偶数の時、以降の処理をスキップする
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
    result += i;
}
console.log(`1～100の中の奇数の合計：${result}`);

>>> 1 
>>> 3 
>>> 5 
>>> 7 
>>> 9 
>>> (省略)
>>> 91 
>>> 93 
>>> 95 
>>> 97 
>>> 99 
>>> 1～100の中の奇数の合計：2500
```