const launchTime = new Date('November 27, 2021 17:58:00')
const animatedScreen = document.getElementById('animated-days')


let calculfromMS = () => {
    let now = new Date()
    const ms = new Date(launchTime - now)
    let d, h, m, s;

    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;

    let pad = function (n) {
        return n < 10 ? '0' + n : n;
    };
    let result = {
        days: pad(d),
        hours: pad(h),
        minutes: pad(m),
        seconds: pad(s)

    }
    return result
}



let ContentHasChange = (id, content) => {
    let el = document.getElementById(id).innerHTML
    return content != el ? true : false
}

let displayTime = (topId, AnimatedId, BottomId, time) => {
    let top = document.getElementById(topId)
    let animated = document.getElementById(AnimatedId)
    let bottom = document.getElementById(BottomId)
    if (ContentHasChange(topId, time)) {
        let parent = animated.parentElement

        setTimeout(() => {
            parent.style.transition = 'all 0.6s'
            parent.style.transform = 'perspective(300px) rotateX(-180deg)'
        }, 00);
        animated.innerHTML = ""

        setTimeout(() => {
            
            parent.style.transition = 'all 0s'
            parent.style.transform = 'perspective(300px) rotateX(0deg)'
        }, 400);


        top.innerHTML = time
        bottom.innerHTML = time
        animated.innerHTML = time


    }
}

function launchClock() {
    setInterval(function () {
        let timeDiff = calculfromMS()
        displayTime('top-seconds', 'animated-seconds', 'bottom-seconds', timeDiff.seconds)
        displayTime('top-minutes', 'animated-minutes', 'bottom-minutes', timeDiff.minutes)
        displayTime('top-hours', 'animated-hours', 'bottom-hours', timeDiff.hours)
        displayTime('top-days', 'animated-days', 'bottom-days', timeDiff.days)
    }, 1000)
}

launchClock()