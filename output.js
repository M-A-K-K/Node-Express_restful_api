const progress = require("progress");
const bar = new progress("downloading [:bar] :rate/bps  :percent :etas", {
    total: 20,
});

const timer = setInterval(() => {
    bar.tick();
    if(bar.complete)
    {
        clearInterval(timer);
    }
}, 1000)
