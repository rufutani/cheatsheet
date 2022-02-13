const date = new Date();
const thisYear = date.getFullYear();


const kudansen = {
    titileName: '九段戦',
    firstYear: 1956,
    lastYear: 1961,
    get lastPeriod() { return this.lastYear - this.firstYear + 1 },
    firstCompetitors: ['升田幸三', '塚田正夫'],
    winners: [
        '升田幸三',
    ],
    challengers: [

    ]
};
const judansen = {
    titileName: '十段戦',
    firstYear: 1962,
    lastYear: 1987,
    get lastPeriod() { return this.lastYear - this.firstYear + 1 },
    firstCompetitors: ['升田幸三', '大山康晴'],
    winners: [
        '大山康晴',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'holder',
        'challenger',
        'holder',
        'challenger',
        'holder',
        'challenger',
        'challenger'
    ],
    challengers: [
        undefined,
        '升田幸三',
        '升田幸三',
        '二上達也',
        '二上達也',
        '二上達也',
        '加藤一二三',
        '大山康晴',
        '中原誠',
        '大山康晴',
        '大山康晴',
        '大山康晴',
        '中原誠',
        '大山康晴',
        '加藤一二三',
        '加藤一二三',
        '米長邦雄',
        '米長邦雄',
        '加藤一二三',
        '米長邦雄',
        '中原誠',
        '桐山清澄',
        '米長邦雄',
        '中原誠',
        '福崎文吾',
        '高橋道雄'
    ]
};
const ryuosen = {
    titileName: '竜王戦',
    firstYear: 1988,
    lastYear: thisYear,
    get lastPeriod() { return this.lastYear - this.firstYear + 1 },
    firstCompetitors: ['島朗', '米長邦雄'],
    winners: [
        '島朗',
        'challenger',
        'challenger',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'challenger',
        'holder',
        'challenger',
        'holder',
        'holder',
        'challenger',
        'holder',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'challenger',
        undefined
    ],
    challengers: [
        undefined,
        '羽生善治',
        '谷川浩司',
        '森下卓',
        '羽生善治',
        '佐藤康光',
        '羽生善治',
        '佐藤康光',
        '谷川浩司',
        '真田圭一',
        '藤井猛',
        '鈴木大介',
        '羽生善治',
        '羽生善治',
        '阿部隆',
        '森内俊之',
        '渡辺明',
        '木村一基',
        '佐藤康光',
        '佐藤康光',
        '羽生善治',
        '森内俊之',
        '羽生善治',
        '丸山忠久',
        '丸山忠久',
        '森内俊之',
        '糸谷哲郎',
        '渡辺明',
        '丸山忠久',
        '羽生善治',
        '広瀬章人',
        '豊島将之',
        '羽生善治',
        '藤井聡太',
        ''
    ]
};
const meijinsen = {
    titileName: '名人戦',
    firstYear: 1937,
    lastYear: thisYear,
    get lastPeriod() { return this.lastYear - this.firstYear + 1 },
    firstCompetitors: ['木村義雄'],
    winners: [
        '木村義雄',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'holder',
        'challenger',
        'holder',
        'holder',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'holder',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'holder',
        'challenger',
        'holder',
        'holder',
        'challenger',
        'holder',
        'challenger',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'holder',
        'challenger',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'holder',
        'challenger',
        'holder',
        'holder',
        'challenger',
        'holder',
        'holder',
        'challenger',
        'holder',
        'challenger',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'holder',
        undefined
    ],
    challengers: [
        undefined,
        '土居市太郎',
        '神田辰之助',
        undefined,
        undefined,
        '塚田正夫',
        '大山康晴',
        '木村義雄',
        '大山康晴',
        '升田幸三',
        '大山康晴',
        '升田幸三',
        '升田幸三',
        '高島一岐代',
        '花村元司',
        '升田幸三',
        '大山康晴',
        '大山康晴',
        '加藤一二三',
        '丸田祐三',
        '二上達也',
        '升田幸三',
        '二上達也',
        '山田道美',
        '升田幸三',
        '二上達也',
        '升田幸三',
        '有吉道夫',
        '灘蓮照',
        '升田幸三',
        '中原誠',
        '加藤一二三',
        '大山康晴',
        '大内延介',
        '米長邦雄',
        '森雞二',
        '米長邦雄',
        '米長邦雄',
        '桐山清澄',
        '加藤一二三',
        '谷川浩司',
        '森安秀光',
        '中原誠',
        '大山康晴',
        '米長邦雄',
        '谷川浩司',
        '米長邦雄',
        '中原誠',
        '米長邦雄',
        '高橋道雄',
        '米長邦雄',
        '羽生善治',
        '森下卓',
        '森内俊之',
        '谷川浩司',
        '佐藤康光',
        '谷川浩司',
        '丸山忠久',
        '谷川浩司',
        '森内俊之',
        '羽生善治',
        '森内俊之',
        '羽生善治',
        '谷川浩司',
        '郷田真隆',
        '羽生善治',
        '郷田真隆',
        '三浦弘行',
        '森内俊之',
        '羽生善治',
        '羽生善治',
        '羽生善治',
        '行方尚史',
        '佐藤天彦',
        '稲葉陽',
        '羽生善治',
        '豊島将之',
        '渡辺明',
        '斎藤慎太郎',
        '斎藤慎太郎'
    ]
};
const kiseisen = {
    titileName: '棋聖戦',
    firstYear: 1962,
    lastYear: thisYear,
    get lastPeriod() { return this.lastYear - this.firstYear + 1 },
    firstCompetitors: ['大山康晴', '塚田正夫'],
    winners: [
        '大山康晴',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'challenger',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'challenger',
        'holder',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'challenger',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        undefined
    ],
    challengers: [
        undefined,
        '二上達也',
        '升田幸三',
        '関根茂',
        '本間爽悦',
        '升田幸三',
        '二上達也',
        '二上達也',
        '大山康晴',
        '山田道美',
        '中原誠',
        '中原誠',
        '大山康晴',
        '山田道美',
        '内藤國雄',
        '大山康晴',
        '中原誠',
        '大山康晴',
        '二上達也',
        '内藤國雄',
        '有吉道夫',
        '米長邦雄',
        '内藤國雄',
        '大山康晴',
        '米長邦雄',
        '二上達也',
        '二上達也',
        '桐山清澄',
        '米長邦雄',
        '森雞二',
        '中原誠',
        '有吉道夫',
        '二上達也',
        '加藤一二三',
        '淡路仁茂',
        '米長邦雄',
        '二上達也',
        '中原誠',
        '加藤一二三',
        '森雞二',
        '中原誠',
        '森安秀光',
        '米長邦雄',
        '谷川浩司',
        '中村修',
        '勝浦修',
        '中村修',
        '桐山清澄',
        '南芳一',
        '西村一義',
        '南芳一',
        '田中寅彦',
        '中原誠',
        '南芳一',
        '屋敷伸之',
        '屋敷伸之',
        '森下卓',
        '南芳一',
        '谷川浩司',
        '郷田真隆',
        '郷田真隆',
        '羽生善治',
        '谷川浩司',
        '谷川浩司',
        '島朗',
        '三浦弘行',
        '三浦弘行',
        '屋敷伸之',
        '郷田真隆',
        '谷川浩司',
        '羽生善治',
        '郷田真隆',
        '佐藤康光',
        '丸山忠久',
        '森内俊之',
        '羽生善治',
        '鈴木大介',
        '渡辺明',
        '羽生善治',
        '木村一基',
        '深浦康市',
        '深浦康市',
        '中村太地',
        '渡辺明',
        '森内俊之',
        '斎藤慎太郎',
        '豊島将之',
        '渡辺明',
        '藤井聡太',
        '渡辺明',
        undefined
    ]
};
const oisen = {
    titileName: '王位戦',
    firstYear: 1960,
    lastYear: thisYear,
    get lastPeriod() { return this.lastYear - this.firstYear + 1 },
    firstCompetitors: ['大山康晴', '塚田正夫'],
    winners: [
        '大山康晴',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'holder',
        'challenger',
        'holder',
        'holder',
        'challenger',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        undefined
    ],
    challengers: [
        undefined,
        '丸田祐三',
        '花村元司',
        '加藤一二三',
        '二上達也',
        '佐藤大五郎',
        '有吉道夫',
        '大内延介',
        '有吉道夫',
        '西村一義',
        '米長邦雄',
        '中原誠',
        '内藤國雄',
        '中原誠',
        '米長邦雄',
        '内藤國雄',
        '勝浦修',
        '米長邦雄',
        '大山康晴',
        '米長邦雄',
        '中原誠',
        '大山康晴',
        '内藤國雄',
        '高橋道雄',
        '加藤一二三',
        '高橋道雄',
        '米長邦雄',
        '谷川浩司',
        '森雞二',
        '谷川浩司',
        '佐藤康光',
        '中田宏樹',
        '郷田真隆',
        '羽生善治',
        '郷田真隆',
        '郷田真隆',
        '深浦康市',
        '佐藤康光',
        '佐藤康光',
        '谷川浩司',
        '谷川浩司',
        '屋敷伸之',
        '谷川浩司',
        '羽生善治',
        '羽生善治',
        '佐藤康光',
        '佐藤康光',
        '深浦康市',
        '羽生善治',
        '木村一基',
        '広瀬章人',
        '羽生善治',
        '藤井猛',
        '行方尚史',
        '木村一基',
        '広瀬章人',
        '木村一基',
        '菅井竜也',
        '豊島将之',
        '木村一基',
        '藤井聡太',
        '豊島将之',
        undefined
    ]
};
const ozasen = {
    titileName: '王座戦',
    firstYear: 1983,
    lastYear: thisYear,
    get lastPeriod() { return this.lastYear - this.firstYear + 1 },
    firstCompetitors: ['内藤國雄', '中原誠'],
    winners: [
        '中原誠',
        'holder',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'holder',
        undefined
    ],
    challengers: [
        undefined,
        '森安秀光',
        '谷川浩司',
        '桐山清澄',
        '塚田泰明',
        '中原誠',
        '青野照市',
        '谷川浩司',
        '福崎文吾',
        '羽生善治',
        '谷川浩司',
        '谷川浩司',
        '森雞二',
        '島朗',
        '島朗',
        '谷川浩司',
        '丸山忠久',
        '藤井猛',
        '久保利明',
        '佐藤康光',
        '渡辺明',
        '森内俊之 ',
        '佐藤康光',
        '佐藤康光',
        '久保利明',
        '木村一基',
        '山崎隆之',
        '藤井猛',
        '渡辺明',
        '羽生善治',
        '中村太地',
        '豊島将之',
        '佐藤天彦',
        '糸谷哲郎',
        '中村太地',
        '斎藤慎太郎',
        '永瀬拓矢',
        '久保利明',
        '木村一基',
        undefined
    ]
};
const oshosen = {
    titileName: '王将戦',
    firstYear: 1954,
    lastYear: thisYear,
    get lastPeriod() { return this.lastYear - this.firstYear + 1 },
    firstCompetitors: ['大山康晴', '松田茂行'],
    winners: [
        '大山康晴',
        'challenger',
        'holder',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'challenger',
        'holder',
        'challenger',
        'challenger',
        'holder',
        'challenger',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'holder',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'holder',
        'challenger',
        'challenger',
        'holder',
        'challenger',
        'holder',
        'challenger',
        'holder',
        'challenger',
        'holder',
        'holder',
        'challenger',
        undefined
    ],
    challengers: [
        undefined,
        '升田幸三',
        '大山康晴',
        '大山康晴',
        '高島一岐代',
        '二上達也',
        '二上達也',
        '加藤一二三',
        '二上達也 ',
        '大山康晴',
        '加藤博二',
        '山田道美',
        '加藤一二三',
        '加藤一二三',
        '内藤國雄',
        '二上達也',
        '中原誠',
        '有吉道夫',
        '中原誠',
        '米長邦雄',
        '米長邦雄',
        '有吉道夫',
        '大山康晴',
        '有吉道夫',
        '加藤一二三',
        '大山康晴',
        '米長邦雄',
        '中原誠',
        '米長邦雄',
        '森雞二',
        '中原誠',
        '中村修',
        '中原誠',
        '南芳一',
        '島朗',
        '米長邦雄',
        '南芳一',
        '谷川浩司',
        '村山聖',
        '中原誠',
        '羽生善治',
        '羽生善治',
        '谷川浩司',
        '佐藤康光',
        '森下卓',
        '佐藤康光',
        '谷川浩司',
        '佐藤康光',
        '羽生善治',
        '森内俊之',
        '羽生善治',
        '佐藤康光',
        '佐藤康光',
        '久保利明',
        '深浦康市',
        '久保利明',
        '豊島将之',
        '佐藤康光',
        '渡辺明',
        '羽生善治',
        '郷田真隆 ',
        '羽生善治',
        '久保利明',
        '豊島将之',
        '渡辺明',
        '広瀬章人',
        '永瀬拓矢',
        '藤井聡太',
        undefined
    ]
};
const kiosen = {
    titileName: '棋王戦',
    firstYear: 1975,
    lastYear: thisYear,
    get lastPeriod() { return this.lastYear - this.firstYear + 1 },
    firstCompetitors: ['内藤國雄', '大内延介'],
    winners: [
        '大内延介',
        'challenger',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'challenger',
        'challenger',
        'challenger',
        'holder',
        'challenger',
        'holder',
        'holder',
        'challenger',
        'challenger',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        'holder',
        undefined,
        undefined
    ],
    challengers: [
        undefined,
        '加藤一二三',
        '中原誠',
        '米長邦雄',
        '中原誠',
        '米長邦雄',
        '森安秀光',
        '大山康晴',
        '森安秀光',
        '桐山清澄',
        '谷川浩司',
        '高橋道雄',
        '谷川浩司',
        '南芳一',
        '大山康晴',
        '羽生善治',
        '南芳一',
        '谷川浩司',
        '南芳一',
        '森下卓',
        '高橋道雄',
        '森下卓',
        '郷田真隆',
        '佐藤康光',
        '森内俊之',
        '久保利明',
        '佐藤康光',
        '丸山忠久',
        '谷川浩司',
        '羽生善治',
        '森内俊之',
        '佐藤康光',
        '羽生善治',
        '久保利明',
        '佐藤康光',
        '渡辺明',
        '郷田真隆',
        '渡辺明',
        '三浦弘行',
        '羽生善治',
        '佐藤天彦',
        '千田翔太',
        '永瀬拓矢',
        '広瀬章人',
        '本田奎',
        '糸谷哲郎',
        '永瀬拓矢'
    ]
};
const eiosen = {
    titileName: '叡王戦',
    firstYear: 2017,
    lastYear: thisYear,
    get lastPeriod() { return this.lastYear - this.firstYear + 1 },
    firstCompetitors: ['高見泰地', '金井恒太'],
    winners: [
        '高見泰地',
        'challenger',
        'challenger',
        'challenger',
        undefined
    ],
    challengers: [
        undefined,
        '永瀬拓矢',
        '豊島将之',
        '藤井聡太 ',
        undefined
    ]
};

const titles = [kudansen, judansen, ryuosen, meijinsen, kiseisen, oisen, ozasen, oshosen, kiosen, eiosen];


const titleRecord = (titleObj) => {
    for (let i = 0; i < titleObj.lastPeriod; i++) {
        fy = `fy${titleObj.firstYear + i}`;
        lastFy = `fy${titleObj.firstYear + i - 1}`;
        titleObj[fy] = {};
        titleObj[fy].period = i + 1;
        if (i === 0) {
            titleObj[fy].winner = titleObj.winners[0];
            titleObj[fy].competitor1 = titleObj.firstCompetitors[0];
            titleObj[fy].competitor2 = titleObj.firstCompetitors[1];
            titleObj[fy].defense = undefined;
            titleObj[fy].consecutiveness = 1;
        } else {
            titleObj[fy].winner = '';
            titleObj[fy].holder = titleObj[lastFy].winner;
            titleObj[fy].challneger = titleObj.challengers[i];
            titleObj[fy].defense = undefined;
            titleObj[fy].consecutiveness = null;
            if (titleObj.winners[i] === 'holder') {
                titleObj[fy].winner = titleObj[fy].holder;
                titleObj[fy].defense = true;
                titleObj[fy].consecutiveness = titleObj[lastFy].consecutiveness + 1;
            } else if (titleObj.winners[i] === 'challenger') {
                titleObj[fy].winner = titleObj[fy].challneger;
                titleObj[fy].defense = false;
                titleObj[fy].consecutiveness = 1;
            };
        };
    };
};

const meijinsenRecord = (titleObj) => {
    let i = 1;
    for (let fy = titleObj.firstYear; fy < titileObj.lastYear; fy++) {
        if (fy < 1947) {
            titleObj[fy] = {};
            if (fy === 1937) {
                titleObj.period = i;
                titleObj[fy].winner = titleObj.winners[0];
                titleObj[fy].competitor1 = titleObj.firstCompetitors[0];
                titleObj[fy].competitor2 = titleObj.firstCompetitors[1];
                titleObj[fy].defense = undefined;
                i++;
            }
        } else {

            titleObj[fy].period = fy - titleObj.firstYear - 4;
        };
    };
};


titleRecord(judansen);
titleRecord(ryuosen);
titleRecord(oisen);
titleRecord(ozasen);
titleRecord(oshosen);
titleRecord(kiosen);
titleRecord(eiosen);
titleRecord(kiseisen);


console.log(judansen);
console.log(ryuosen);
console.log(oisen);
console.log(ozasen);
console.log(oshosen);
console.log(kiosen);
console.log(eiosen);
console.log(kiseisen);


