const Utils = {
    sleep(time) {
        for (let t = Date.now(); Date.now() - t <= time;) ;
    }
}

export default Utils;