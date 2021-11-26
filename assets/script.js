const launchTime = new Date('November 30, 2021 16:50:00')
const animatedScreen = document.getElementById('animated-days')



function launchClock() {
    setInterval(function() {

        let now = new Date()
        const ms = new Date(launchTime - now)

        var d, h, m, s;

        s = Math.floor(ms / 1000);
        m = Math.floor(s / 60);
        s = s % 60;
        h = Math.floor(m / 60);
        m = m % 60;
        d = Math.floor(h / 24);
        h = h % 24;
      
        var pad = function (n) { return n < 10 ? '0' + n : n; };
        var result = d + ' days, ' + pad(h) + 'hours ' + pad(m) + 'min and ' + pad(s) + 'sec';
    }, 1000)
}

launchClock()