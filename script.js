setInterval(() => {
    d = new Date();
    htime = d.getHours();    
    mtime = d.getMinutes();    
    stime = d.getSeconds();    
    hrotation = 30*htime + mtime/2;
    minrotation = 6*mtime;
    secRotation = 6*stime;
    // console.log("L")

    hour.style.transform = `rotate(${hrotation}deg)`
    min.style.transform = `rotate(${minrotation}deg)`
    sec.style.transform = `rotate(${secRotation}deg)`
}, 1000);