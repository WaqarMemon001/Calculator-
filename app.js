/* caluculater app */

function btn_inp(num) {
    inp_result = document.getElementById("result")
    
    inp_result.value += num


}
function clear_btn() {
    inp_result = document.getElementById("result")
    inp_result.value = ""
}
function equal_btn() {
    inp_result = document.getElementById("result")

    inp_result.value = eval(inp_result.value)
}
function btn_del() {
    inp_result = document.getElementById("result")
    inp_result.value = inp_result.value.slice(0, -1);
}
