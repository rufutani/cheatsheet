function nabeatsu(i) {
    if (i > 1) {
        nabeatsu(i - 1);
    };

    let text = i.toString();

    if (i % 3 == 0) {
        console.log(text + "!!!");
    } else if (text.indexOf("3") !== -1) {
        console.log(text + "!!!");
    } else {
        console.log(i);
    }
};

nabeatsu(1000);