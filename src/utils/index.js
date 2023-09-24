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
function addCount(array,day){
    let newArray = array.flat()
    console.log('扁平化')
    console.log(newArray)
    const index = newArray.findIndex((e)=>{
        return e.dayStr === day
    })
    console.log(`count=${newArray[index].count}`)
    newArray[index].count += 1
    console.log(`找到了，index为${index}`)
    return chunkArr(newArray,7)

}
function chunkArr(arr, size) {
    //判断如果不是数组(就没有length)，或者size没有传值，size小于1，就返回空数组
    if (!arr.length || !size || size < 1) return []
    let [start, end, result] = [null, null, []]
    for (let i = 0; i < Math.ceil(arr.length / size); i++) {
        start = i * size
        end = start + size
        result.push(arr.slice(start, end))
    }
    return result
}
export  {
    getDayMonthYear,
    getFirstDayOfMonth,
    chunkArr,
    addCount
}