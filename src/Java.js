// /* eslint-disable no-unused-expressions */

// class Document {
//     constructor() {
//         this.code;
//         this._SUPPORT_STRICT= "STRICT"
//         this.mode = "standard"
//         this.EXTERNAL_REASOURCE = class EXTERNAL_REASOURCE {
//             constructor(url, importAs) {
//              eval('import' + importAs + "from" + url)
//             }
//         }
//         this.run = (func) => {
//             if (this.mode === 'standard') {
//                 console.log('%cJAVAjs -> STANDARD: executing....', 'color: green')
//             if (func) {
//               new func()
//             }
//             else {
//             new this.code()
//             }
//             } else if (this.mode === "strict") {
//                 console.log('%cJAVAjs -> STRICT: executing....', 'color: green')
//                 try {
//                     new main()
//                 } catch (error) {
//                     // console.clear()
//                     if (this.mode === "standard") {
//                     console.log('%cJAVAjs -> STANDERD: ERRR COULD NOT FIND "main"', 'color: red')
//                     }
//                     else {
//                     console.log('%cJAVAjs -> STRICT: ERRR COULD NOT FIND "main"', 'color: red')
//                     }
//                 }
//             } 
//         }
//         this.OPTIONS = (options) => {
//             if (options.mode = this._SUPPORT_STRICT) {
//                console.log('%cJAVAjs -> STRICT: switched to SUPPORT_STRICT mode', 'color: yellow')
//                this.mode = 'strict'
//                this.run()
//             }
//         }
//     }
//     return  () {
       
//     }
    
// }
// const _FILE = [new Document()]



// class main {
//   constructor () {
//     alert('JavaJS is cool!')  
//   } 
// }

// _FILE[0].OPTIONS({
//     mode: _FILE[0]._SUPPORT_STRICT
// })


var cool = "hello"
var awsome = "man this is COOL!"
var exportArray = [cool,awsome]
export default  exportArray