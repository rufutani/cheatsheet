(() => {

    let canvas = null;
    let ctx = null;

    document.addEventListener('DOMContentLoaded', () => {
        initialize();
        render();
    }, false);

    function initialize() {
        canvas = document.getElementById('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx = canvas.getContext('2d');
    };

    function render() {


        // let points = [
        //     100, 100,
        //     300, 500,
        //     900, 800,
        //     500, 100
        // ];
        // drawPorigon(points, '#888888');
        // drawRect(100, 100, 100, 100, '#ff0000');
        // drawLine(100, 100, 200, 200, '#000000', 1);
        // drawPorigon(generateRandomPoints(500, 800), "rgba(50,50,50,0.3)");
        drawPorigon(generateMildRandomPoints((window.innerHeight) / 2, 900, 500))
    };

    function drawLine(x1, y1, x2, y2, color, width = 1) {
        if (color !== null) {
            ctx.strokeStyle = color;
        };
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.closePath();
        ctx.stroke();
    };

    function drawRect(x, y, width, height, color) {
        if (color != null) {
            ctx.fillStyle = color;
        };
        ctx.fillRect(x, y, width, height);
    };

    function drawPorigon(points, color) {
        if (Array.isArray(points) !== true || points.length < 6) {
            return;
        };
        if (color != null) {
            ctx.fillStyle = color;
        };
        ctx.strokeStyle = 'rgba(100,255,200,1)';
        ctx.lineWidth = 100;
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(points[0], points[1]);
        for (let i = 2; i < points.length; i += 2) {
            ctx.lineTo(points[i], points[i + 1]);
        };
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
    };

    function generateRandomInt(range) {
        return Math.floor(Math.random() * range);
    };



    function generateRandomPoints(numPoints, size) {
        points = [];
        for (let i = 0; i < numPoints; i++) {
            points.push(generateRandomInt(size), generateRandomInt(size))
        };
        return points;
    };

    function generateMildRandomInt(range, mildness) {

        let value = 0;
        for (let i = 0; i < mildness; i++) {
            value += Math.floor(Math.random() * range);
        };
        value = value / mildness;
        return value;
    };

    function generateMildRandomPoints(numPoints, size, mildness) {
        points = [];
        for (let i = 0; i < numPoints; i++) {
            points.push(generateMildRandomInt(size, mildness), generateMildRandomInt(size, mildness));
        };
        return points;
    }
})();