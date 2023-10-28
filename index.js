const alphaNumerals = "abcdefghijklmnopqrstuvwxyz1234567890.,?/=+-&";
const morseCodes = " .- -... -.-. -.. . ..-. --. .... .. .--- -.- .-.. -- -. --- .--. --.- .-. ... - ..- ...- .-- -..- -.-- --.. .---- ..--- ...-- ....- ..... -.... --... ---.. ----. ----- .-.-.- --..-- ..--.. -..-. -...- .-.-. -....- .-...";
let morsecodeslistview = morseCodes.split(' ')
let listofspaceindex = []
let convert_btn = document.getElementById('convert')
let convert_morse = document.getElementById('convert_morse')
let converted = document.getElementById('converted')
let converted_morse = document.getElementById('converted-morse')
for (i in morseCodes) {
    if (morseCodes.charAt(i) == ' ') {
        listofspaceindex.push(i)
    }
}
console.log(morsecodeslistview)


document.querySelectorAll('textarea').forEach(el => {
    el.style.height = el.setAttribute('style', 'height: ' + el.scrollHeight + 'px');
    el.classList.add('auto');
    el.addEventListener('input', e => {
        el.style.height = 'auto';
        el.style.height = (el.scrollHeight) + 'px';
    });
});
convert_btn.addEventListener('click', (e) => {
    let text = document.getElementById('text')
    let input_text = text.value.toLowerCase()
    let converted_text = ''
    for (let i = 0; i < input_text.length; i++) {
        let element = input_text.charAt(i)
        let alphaNumeralIndex = alphaNumerals.indexOf(element)
        if (alphaNumeralIndex == -1) {
            converted_text += ' / '
        }
        else {
            let morse_space_start_position = listofspaceindex[alphaNumeralIndex]
            let morse_space_end_position = listofspaceindex[alphaNumeralIndex + 1]
            // console.log(`letter = ${element}  ,  alphaNumeralIndex=${alphaNumeralIndex} space1=${morse_space_start_position} space2 = ${morse_space_end_position}`)
            let morse_representative = morseCodes.substring(morse_space_start_position, morse_space_end_position)
            converted_text += morse_representative
            // console.log(`${element}=${morse_representative}`)
        }
    }
    converted.textContent = converted_text
})
convert_morse.addEventListener('click', (e) => {
    let code = document.getElementById('morsecode')
    let input_code = code.value.split(' ')
    let converted_code = ''
    console.log(input_code)
    for (let i = 0; i < input_code.length; i++) {
        if (input_code[i] == '/') {
            converted_code += ' '
        }
        else if (input_code[i] == "") { }
        else {
            let index = morsecodeslistview.indexOf(input_code[i])
            if (index == -1) { } else {
                converted_code += alphaNumerals[index - 1]
            }
        }

        converted_morse.textContent = converted_code
    }


})


