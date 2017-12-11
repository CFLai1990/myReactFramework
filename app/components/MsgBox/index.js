/*
 * Console Message Components
 *
 */

class MsgBox {
  constructor (header) {
    this.header = header || 'UNDEFINED'
  }
  info (msg) {
    console.info(`[${this.header}] ${msg || 'Undefined information'}`)
  }
  error (msg) {
    console.info(`[${this.header}] ${msg || 'Undefined error'}`)
  }
  warn (msg) {
    console.info(`[${this.header}] ${msg || 'Undefined warning'}`)
  }
  log (msg) {
    console.info(`[${this.header}] ${msg || 'Undefined log'}`)
  }
  groupStart (msg) {
    console.group(`[${this.header}] ${msg || 'Undefined group'}`)
  }
  groupEnd (msg) {
    console.groupEnd()
  }
}

export default MsgBox
