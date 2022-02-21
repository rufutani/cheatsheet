// // ①
// let currentTime = new Date();
// let result = document.getElementById('result');
// result.textContent = currentTime.toLocaleString();


// // ②
// let lists = document.getElementsByTagName('a');
// console.log(lists);

// for (let i = 0; i < lists.length; i++){
//     console.log(lists[i].href)
// }

// // ③
// let currentTime = new Date();
// let nam = document.getElementsByName('time');
// console.log(nam);
// nam[0].value = currentTime.toLocaleDateString();

// // ④
// let lists = document.getElementsByClassName('jp');
// console.log(lists);
// for (let i = 0; i < lists.length; i++) {
//     console.log(lists[i].href);
// }

// // ⑤
// let lists = document.querySelectorAll('#list .external');
// console.log(lists);
// for(let i = 0; i <lists.length; i++){
//     console.log(lists[i].href);
// };

// let ourselves = document.querySelector('.ourselves');
// console.log(ourselves.href);

// // ⑥-1
// let s = document.getElementById('food');
// let opts = s.childNodes;
// for (let i = 0; i < opts.length; i++){
//     let opt =opts[i];
//     if(opt.nodeType === 1){
//         console.log(opt);
//         console.log(opt.value);
//     };
// };

// // ⑥-2
// let s = document.getElementById('food');
// let child = s.firstChild;
// while (child) {
//     if (child.nodeType === 1) {
//         console.log(child);
//         console.log(child.value);
//     };
//     child = child.nextSibling;
// };

// // ⑥-3

// let s = document.getElementById('food');
// let child = s.firstElementChild;
// while(child){
//     console.log(child);
//     console.log(child.value);
//     child = child.nextSibling;
// };

// // ⑦-1
// const btnClick = function () {
//     window.alert('ボタンがクリックされました！');
// };

// // ⑦-2
// window.onload = () => {
//     document.getElementById('btn').onclick = () => {
//         window.alert('ボタンがクリックされました！');
//     };
// };

// // ⑦-3
// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById('btn').addEventListener('click', () => {
//         window.alert('ボタンがクリックされました');
//     })
// })

// // ⑧
// document.addEventListener('DOMContentLoaded', () => {
//     let icon = document.getElementById('icon');
//     let attrs = icon.attributes;
//     console.log(attrs);
//     for (let i = 0; i < attrs.length; i++){
//         let attr = attrs[i];
//         console.log(attr);
//         console.log(`${attr.name}+${attr.value}`);
//     } 
// });

// // ⑨
// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById('result_text').textContent = '<a href="https://google.com">Google</a>';
//     document.getElementById('result_html').innerHTML = '<a href="https://google.com">Google</a>';
// });

// // ⑩
// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById('btn').addEventListener('click', () => {
//         let name = document.getElementById('name');
//         console.log(name);
//         console.log(name.value);
//         let job = document.getElementById('job');
//         console.log(job);
//         console.log(job.value);
//         document.getElementById('result').textContent = `あなたのお名前は${name.value}、職種は${job.value}ですね。`;
//     });
// });

// // ⑪-1
// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById('btn').addEventListener("click", () => {
//         let result = [];
//         let jobs = document.getElementsByName('job');
//         console.log(jobs);
//         for (let i = 0; i < jobs.length; i++) {
//             let job = jobs[i];
//             if(job.checked){
//                 result.push(job.value);
//             };
//         };
//         document.getElementById('result').textContent = `あなたの職種は${result.toString()}ですね。`;
//     });
// });

// // ⑪-2
// document.addEventListener("DOMContentLoaded", () => {
//     document.getElementById('btn').addEventListener("click", () => {
//         let agree = document.getElementById('agree').checked;
//         if (agree) {
//             document.getElementById('result').textContent = `利用規約に合意されました。`;
//         }else{
//             document.getElementById('result').textContent = `利用規約に合意して頂く必要があります。`;
//         }
//     });
// });

// // ⑫
// document.addEventListener('DOMContentLoaded', () => {
//     const getRadioValue = (name) => {
//         let result = '';
//         let elems = document.getElementsByName(name);
//         console.log(elems);
//         for (let i = 0; i < elems.length; i++) {
//             let elem = elems[i];
//             if (elem.checked) {
//                 result = elem.value;
//                 break;
//             };
//         };
//         console.log(result);
//         return result;
//     };
//     document.getElementById('btn').addEventListener('click', () => {
//         document.getElementById('result').textContent = `あなたの職種は${getRadioValue('job')}です。`;
//     });
// });

// // ⑬
// document.addEventListener('DOMContentLoaded', () => {
//     const setRadioValue = (name, value) => {
//         let elems = document.getElementsByName(name);
//         for (i = 0; i < elems.length; i++) {
//             let elem = elems[i];
//             if (elem.value === value) {
//                 elem.checked = true;
//                 break;
//             };
//         };
//     };
//     const getRadioValue = (name) => {
//         let result = '';
//         let elems = document.getElementsByName(name);
//         console.log(elems);
//         for (let i = 0; i < elems.length; i++) {
//             let elem = elems[i];
//             if (elem.checked) {
//                 result = elem.value;
//                 break;
//             };
//         };
//         return result;
//     };
//     setRadioValue('job', 'デザイナー');
//     setRadioValue('area', '横浜');
//     document.getElementById('btn').addEventListener('click', () =>{
//         document.getElementById('result').textContent = `あなたは${getRadioValue('area')}勤務の${getRadioValue('job')}ですね。`;
//     });
// });

// // ⑭
// document.addEventListener('DOMContentLoaded', () => {
//     const setCheckboxValue = (name, value) => {
//         let elems = document.getElementsByName(name);
//         for (i = 0; i < elems.length; i++) {
//             let elem = elems[i];
//             if (value.indexOf(elem.value) > -1) {
//                 elem.checked = true;
//             };
//         };
//     };
//     setCheckboxValue('job', ['デザイナー', 'エンジニア']);
//     setCheckboxValue('skill', ['UIデザイン', 'UXデザイン']);

//     const getCheckboxValue = (name) => {
//         let result = [];
//         let elems = document.getElementsByName(name);
//         for (let i = 0; i < elems.length; i++){
//             let elem = elems[i];
//             if (elem.checked){
//                 result.push(elem.value);
//             };
//         };
//         return result;
//     };

//     document.getElementById('btn').addEventListener('click', () => {
//         document.getElementById('result').textContent = `あなたは${getCheckboxValue('skill')}のスキルのある${getCheckboxValue('job')}ですね。`;
//     });
// });

// // ⑮
// document.addEventListener('DOMContentLoaded', () => {
//     const setListValue = (id, value) => {
//         let opts = document.getElementById(id);
//         for (let i = 0; i < opts.length; i++) {
//             opt = opts[i];
//             if (value.indexOf(opt.value) > -1) {
//                 opt.selected = true;
//             };
//         };
//     };

//     setListValue('skill', ['UIデザイン', 'UXデザイン']);
//     setListValue('area', ['東京', '横浜', '千葉']);

//     const getSelectedValue = (id) => {
//         let result = [];
//         let opts = document.getElementById(id).options;
//         console.log(opts);
//         for (let i = 0; i < opts.length; i++) {
//             let opt = opts[i];
//             if (opt.selected) {
//                 result.push(opt.value);
//             };
//         };
//         return result.toString();
//     };
//     document.getElementById('btn').addEventListener('click', () => {
//         document.getElementById('result').textContent = `スキルは${getSelectedValue('skill')}、勤務希望エリアは${getSelectedValue('area')}ですね。`;
//     });
// });

// // ⑯-1
// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('file').addEventListener('change', (e) => {
//         let inputs = document.getElementById('file').files;
//         for (let i = 0; i < inputs.length; i++){
//             let input = inputs[i];
//             console.log(`ファイル名：${input.name}`);
//             console.log(`種類：${input.type}`);
//             console.log(`サイズ：${input.size / 1024}KB`);
//             console.log(`最終更新日：${input.lastModifiedDate}`);
//         };
//     });
// });


// // ⑯-2
// window.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('file').addEventListener('change', () => {
//         let input = document.getElementById('file').files[0];
//         let reader = new FileReader();
//         reader.addEventListener('load', () => {
//             document.getElementById('result').textContent = reader.result;
//         }, true);
//         reader.addEventListener('error', () => {
//             console.log(reader.error.message);
//         }, true);
//         reader.readAsText(input, 'UTF-8');
//     }, true);
// });

// ⑯-3
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('file').addEventListener('change', () => {
        let input = document.getElementById('file').files[0];
        let reader = new FileReader();
        reader.addEventListener('load', () => {
            document.getElementById('result').src = reader.result;
        });
        reader.readAsDataURL(input);
    });
});