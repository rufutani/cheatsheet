// 度数法を弧度法に変換する関数
const degToRad = (degrees) => {
    return degrees * Math.PI / 180;
};

// 弧度法を度数法に変換する関数
const radToDeg = (radians) => {
    return radians / Math.PI * 180;
};

// 度数からsinを求める関数
const getSin = (degrees) => {
    const radians = degToRad(degrees);
    return Math.sin(radians);
};

// 度数からcosを求める関数
const getCos = (degrees) => {
    const radians = degToRad(degrees);
    return Math.cos(radians);
};

// 度数からtanを求める関数
const getTan = (degrees) => {
    const radians = degToRad(degrees);
    return Math.tan(radians);
};

// // ベクトルを単位化する関数
const normarize = (v) => {
    let arr = [];
    let lenSquare = 0;
    for (i = 0; i < v.length; i++) {
        lenSquare += v[i] ** 2;
    };
    const len = Math.sqrt(lenSquare);
    for (i = 0; i < v.length; i++) {
        arr.push(v[i] / len);
    };
    return arr;
};


// ベクトルの内積を求める関数
const getDot = (v0, v1) => {
    let value = 0;
    for (let i = 0, len = v0.length; i < len; i++) {
        value += v0[i] * v1[i];
    };
    return value;
};

// ベクトルの外積を求める関数
const getCross = (v0, v1) => {
    let value = 0;
    if (v0.length === 2 && v1.length === 2) {
        v0[2] = 0;
        v1[2] = 0;
        value = v0[0] * v1[1] - v0[1] * v1[0];
    } else if (v0.length >= 3 && v1.length >= 3) {
        value = [
            v0[1] * v1[2] - v0[2] * v1[1],
            v0[2] * v1[0] - v0[0] * v1[2],
            v0[0] * v1[1] - v0[1] * v1[0],
        ];
    } else {
        console.log("2つのベクトルの次元が一致していないか、2次/3次のベクトルではありません。");
    };
    return value;
};

// 2ベクトルの成す角度を弧度法で求める関数
const radFromVectors = (v0, v1) => {
    v0 = normarize(v0);
    v1 = normarize(v1);
    const dot = getDot(v0, v1);
    const value = Math.acos(dot);
    return value;
};

// 2ベクトルの成す角度を度数法で求める関数
const degFromVectors = (v0, v1) => {
    const rad = radFromVectors(v0, v1);
    const value = radToDeg(rad);
    return value;
};




let V = [1, 0, 0];
let W = [0, 1, 0];
console.log(degFromVectors(V, W));
console.log(radFromVectors(V, W));
// V = normarize(V);
// W = normarize(W);
// let dotValue = getDot(V, W);
// let rad = Math.acos(dotValue);
// let deg = radToDeg(rad);
// let crossValue = getCross(V, W);
// console.log(crossValue);
// console.log(rad);
// console.log(deg);

// let a = [1]