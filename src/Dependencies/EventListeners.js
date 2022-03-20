var Decrement = 0
var Key;
var Listener = [{
    EventListener: function (state, func_OPTINAL) {
        window.addEventListener('keypress', function (e) {
            Key = e
            if (state) {
                if (state === "custom") {
                    func_OPTINAL()
                }
                else {
                    switch (e.key) {

                    }
                }
            }
        })
    },
    description: "Controls Keypress",
    FetchKey: {
      
    KeyName: () => {
        window.addEventListener('keypress', () => {
            return Key.key
        })
    }
    }   

}, 
]
export default Listener 