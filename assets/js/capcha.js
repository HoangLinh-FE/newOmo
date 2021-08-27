// $(document).ready(function(){
//     $(".refresh").click(function(){
//       var n1 = Math.round(Math.random() * 10 + 1);
//        document.querySelector('.captcha__box').innerHTML = n1;
//     })
//   })

// document.querySelector('.refresh').addEventListener('click',onRefresh);
// function onRefresh(){
//   // Create capcha
//   var obj = ['AEUE43', 'BIT432', 'T2K4YY', 'POTB56', 'PYU723', 'HTYU32','95TYG6', 'LT95TY', 'TR63JY', 'GYN191', 'KYTG32', '45TY46'];
//   var numbers = Math.round(Math.random() * 10 + 1);
//   document.querySelector('.captcha__box').innerHTML = obj[numbers];
//   console.log(obj[numbers])
// };

// function submitForm(e){
//   var capcha = document.querySelector('.captcha__box').val;
//   var ansCaptcha = document.querySelector('#answerCaptcha').val;
//   if(capcha === ansCaptcha){
//     $('.seminor__button').submit(function(){
//       alert("Submitted")});
//   } else{
//     alert('Please try angain!')
//   }
// }



/* Function to Generat Captcha */
function GenerateCaptcha() {
  var chr1 = Math.ceil(Math.random() * 10) + "";
  var chr2 = Math.ceil(Math.random() * 10) + "";

  var str = new Array(4).join().replace(/(.|$)/g, function () {
    return ((Math.random() * 36) | 0)
      .toString(36)
      [Math.random() < 0.5 ? "toString" : "toUpperCase"]();
  });
  var captchaCode = str + chr1 + chr2;
  document.getElementById("txtCaptcha").value = captchaCode;
}

/* Validating Captcha Function */
function ValidCaptcha() {
  var str1 = removeSpaces(document.getElementById("txtCaptcha").value);
  var str2 = removeSpaces(document.getElementById("txtCompare").value);

  if (str1 == str2) return true;
  return false;
}

/* Remove spaces from Captcha Code */
function removeSpaces(string) {
  return string.split(" ").join("");
}

