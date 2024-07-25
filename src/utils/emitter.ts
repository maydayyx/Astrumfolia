/**
 * emitter
 * 
 * .on 绑定事件
 * .off 解绑事件
 * .emit 触发事件
 */
 
import mitt from 'mitt'
 
const emitter = mitt()
 
export {emitter}