function _random(Array) {
    return Array[Math.floor(Math.random() * Array.length)]
}
function _Message() {
    return {
        set: function (key, message) {
            localStorage.setItem(key, message)
        },
        remove: function (key) {
            localStorage.removeItem(key)
        },
        get : function (key) {
            return localStorage.getItem(key)
        }
    }

}
var _func = [
    _random,
    _Message
]

export default _func