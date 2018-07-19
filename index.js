function shout(string) {
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
var lowercase='hello'
var uppercase='HELLO'
var mixedCase='Hello'
function sayHiToGrandma(string) {
  if (string===lowercase) {
    return(`I can\'t hear you!`)
    if (string===mixedCase)
    return('YES INDEED!')
    if (string===uppercase)
    return('YES INDEED!')
  }
}