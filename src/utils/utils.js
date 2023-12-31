import {getDayMonthYear,getFirstDayOfMonth,chunkArr} from './index'
class calendar {
    constructor(date) {
        this.currentDay = undefined
        this.currentYear = undefined
        this.currentMonth = undefined
        this.currentWeek = 1
        this.days = []
        this.init(date)
    }
    formatDate(year, month, day) {

        let y = year;
        let m = month;
        if (m < 10) m = "0" + m;
        let d = day;
        if (d < 10) d = "0" + d;
        return y + "-" + m + "-" + d;
    }
    //初始化
    init(cur) {
        let date
        if (cur) {
            // 如果有就从传递的日期的月份开始算
            date = new Date(cur)
        } else {
            //如果没有cur 就从当前月的1号开始
            let now = new Date();
            let d = new Date(
                formatDate(now.getFullYear(), now.getMonth(), 1)
            );
            d.setDate(35);
            date = new Date(
                formatDate(d.getFullYear(), d.getMonth() + 1, 1)
            );
        }
        this.currentDay = date.getDate();
        this.currentYear = date.getFullYear();
        this.currentMonth = date.getMonth() + 1;
        this.currentWeek = date.getDay(); // 1...6,0 获取当前星期几
        let str = this.formatDate(
            this.currentYear,
            this.currentMonth,
            this.currentDay
        );
        this.days.length = 0;
        // 算date所在周的日期的前几天 state.currentWeek-n来控制从周几开始 对应的后面算剩下日期的时候就要介绍n
        for (let i = this.currentWeek; i >= 0; i--) {
            let d = new Date(str);
            d.setDate(d.getDate() - i);
            // d.setDate(d.getDate() - i);
            let dayobject = {}; //用一个对象包装Date对象  以便为以后预定功能添加属性
            dayobject.day = d;
            dayobject.dayStr = getDayMonthYear(d);
            dayobject.dayStrNL = this.formatDateNL(d)
            dayobject.count = 0
            dayobject.matters = [];
            this.days.push(dayobject); //将日期放入data 中的days数组 供页面渲染使用
        }
        //算剩下的日期
        for (let i = 1; i <= 35 - this.currentWeek - 1; i++) {
            let d = new Date(str);
            d.setDate(d.getDate() + i);
            let dayobject = {};
            dayobject.day = d;
            dayobject.dayStr = getDayMonthYear(d);
            dayobject.dayStrNL = this.formatDateNL(d)
            dayobject.count = 0
            dayobject.matters = [];
            this.days.push(dayobject);
        }
        console.info(this);
    }
    //获取农历
    formatDateNL(date) {
        let D = [
            '',
            "一",
            "二",
            "三",
            "四",
            "五",
            "六",
            "七",
            "八",
            "九",
            "十",
            "十一",
            "十二",
            "十三",
            "十四",
            "十五",
            "十六",
            "十七",
            "十八",
            "十九",
            "廿十",
            "廿一",
            "廿二",
            "廿三",
            "廿四",
            "廿五",
            "廿六",
            "廿七",
            "廿八",
            "廿九",
            "三十"]
        let M = [
            '',
            "一",
            "二",
            "三",
            "四",
            "五",
            "六",
            "七",
            "八",
            "九",
            "十",
            "十一",
            "十二",
        ]
        let NLDateStr = date.toLocaleDateString("ja-JP-u-ca-chinese")
        // console.info(NLDateStr);
        let dateArr = NLDateStr.split(" ");
        let MStr = dateArr[1]
        let DStr = dateArr[2]
        // console.info(MStr.indexOf('閏'));
        let r = undefined
        if (MStr.indexOf('閏') != -1) {
            r = MStr.slice(1)
        }
        if (DStr == 1) {
            // if(MStr.indexof('')){}

            return MStr.indexOf('閏') != -1 ? '闰' + M[r] + "月" : M[MStr] + "月";
        } else if (DStr <= 10) {
            return "初" + D[DStr];
        } else {
            return D[DStr];
        }
    }
}

//拆分数组

//存储已经设置好的数组
class initCalendar {
    constructor(oldDay) {
        this.array = []
        if (!oldDay || oldDay.length) {
            const time = new calendar(getFirstDayOfMonth())
            this.array = chunkArr(time.days, 7)
        }
        else {
            this.array = oldDay
        }
    }
    addCount() {
        let nowDate = getDayMonthYear(new Date())
        const {firIndex,secIndex}=this.findIndex(nowDate)
        if(firIndex && secIndex){
            console.info(`找到了对应的下标`)
            this.array[firIndex][secIndex].count ++
        }
        else{
            console.info('没有找到对应的下标')
        }
    }
    findIndex(daystr) {
        let firIndex = 0
        let secIndex = 0
        for (let i = 0; i < this.array.length; i++) {
            for (let j = 0; j < this.array[i].length; j++) {
                if (daystr == arr[i][j].dayStr) {
                    firIndex = i
                    secIndex = j
                }
            }
        }
        return {firIndex,secIndex}
    }
}
export default initCalendar