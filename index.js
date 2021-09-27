

setInterval(() => {

    d=new Date();
    htime=d.getHours();
    hminute=d.getMinutes();
    stime=d.getSeconds();

    hrotation=30*htime+hminute/2;
    mrotation=6*hminute;
    srotation=6*stime;

    hour.style.transform=`rotate(${hrotation}deg)`
    minute.style.transform=`rotate(${mrotation}deg)`
    second.style.transform=`rotate(${srotation}deg)`


  
}, 1000);