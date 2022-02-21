const user = {
    name: 'Bungo Fukusaki',
    gender: 'male',
    grade: 9,
};
const {name, gender = 'unknown', grade = 4,
mail = 'bungofukusaki@shogi.or.jp'} = user;
console.log(name);
console.log(gender);
console.log(grade);
console.log(mail);