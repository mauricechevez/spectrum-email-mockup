module.exports = function(phoneNumber){
    const blueBoldText = `<p class="text-center call-lightblue">or call <a class="call-lightblue" style="text-decoration: underline;" href="tel:${phoneNumber.fn(this)}">${phoneNumber.fn(this)}</a></p>`;
    return blueBoldText;
}