module.exports = function(phoneNumber){
    const blueBoldText = `<p class="text-center call-lightblue">or call <u>${phoneNumber.fn(this)}</u></p>`;
    return blueBoldText;
}