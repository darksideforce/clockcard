function getFirstDayOfMonth() {
    var date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDay;
}

function getDayMonthYear(date) { //创建日期对象
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var dates = date.getDate();
    return `${year}-${month}-${dates}`;

}

export  {
    getDayMonthYear,
    getFirstDayOfMonth
}