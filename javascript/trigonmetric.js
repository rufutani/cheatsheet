
// 度数法を弧度法に変換する関数
const rad = (degrees) => {
    return degrees * Math.PI / 180;
};

// 度数からsinを求める関数
const sin = (degrees) => {
    const radian = rad(degrees);
    return Math.sin(radian);
};

// 度数からcosを求める関数
const cos = (degrees) => {
    const radian = rad(degrees);
    return Math.cos(radian);
};

// 度数からtanを求める関数
const tan = (degrees) => {
    const radian = rad(degrees);
    return Math.tan(radian);
};


sin(270);
cos(180);
tan(45);
console.log(sin(270));
console.log(cos(180));
console.log(tan(135));