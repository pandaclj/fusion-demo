// import moment from "moment";
import moment from 'moment-timezone';

function isDST(time) {
    return moment.tz(time, 'America/Los_Angeles').isDST();
}

function getRealBeijingTime(time) {
    if (isDST(time)) {
        return moment(new Date(time)).utcOffset(1380).format('YYYY-MM-DD HH:mm:ss');
    } else {
        return moment(new Date(time)).utcOffset(1440).format('YYYY-MM-DD HH:mm:ss');
    }
}


// let time1 = moment();
// console.log(time1);
//
// let time2 = moment(1604232000000);
// console.log(time2);
//
// let time3 = moment.tz(1604232000000,'America/Los_Angeles');
// console.log(time3);

// console.log(getRealBeijingTime(1604232000000));
// console.log(getRealBeijingTime(moment(new Date(1604232000000)).valueOf() - 16 * 60 * 60 * 1000));

// console.log(moment(new Date(1604232000000)).format('YYYY-MM-DD HH:mm:ss'));

let m = moment(new Date(1604232000000)).valueOf() - 16 * 60 * 60 * 1000;
// console.log(m);

console.log(moment(new Date(1604232000000)));
console.log(moment(new Date(1604232000000)).tz('America/Los_Angeles'));
console.log(moment(new Date(1604232000000)).utcOffset(-8));
console.log(moment(new Date(1604232000000)).utcOffset(-480));
console.log(moment(new Date(1604232000000)).utcOffset("-08:00"));
console.log('===')
console.log(moment(new Date(1604059200000)));
console.log(moment(new Date(1604059200000)).tz('America/Los_Angeles'));
console.log(moment(new Date(1604059200000)).utcOffset(-7));
console.log(moment(new Date(1604059200000)).utcOffset(-420));
console.log('------');
console.log(moment(new Date(1604232000000)).tz('America/Los_Angeles').isDST()); //是否夏令时
console.log(moment(new Date(1604059200000)).tz('America/Los_Angeles').isDST()); //是否夏令时
