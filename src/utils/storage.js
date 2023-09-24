import storage from '@system.storage'

const calendarStorage = async (newCalendar) => {
    return new Promise((resolve,reject) => {
        storage.set({
            key: 'calendar',
            value: newCalendar,
            success: function (data) {
                resolve({ success: 1, error: null, data: data })
            },
            fail: function (data, code) {
                reject({ success: 0, error: code, data: data })
            }
        })
    })
}
const calendarGet = async () => {
    return new Promise((resolve,reject) => {
        storage.get({
            key: 'calendar',
            success: function (data) {
                resolve({ success: 1, error: null, data: data })
            },
            fail: function (data, code) {
                reject({ success: 0, error: code, data: data })
            }
        })
    })
}

export  {calendarGet,calendarStorage}