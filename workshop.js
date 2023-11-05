var btnP = document.querySelectorAll('.btnP')
var btnM = document.querySelectorAll('.btnM')
var btnT = document.querySelectorAll('.fa-trash')
var btnH = document.querySelectorAll('.fa-heart')
// var btnT = document.getElementsByClassName('fa-trash')
// console.log(btnT)
for(let i = 0; i<btnP.length ; i++){
    btnP[i].addEventListener('click',function(){
        btnP[i].previousElementSibling.innerHTML++
        SommeTotal()
    })
}

for(let i = 0; i <btnM.length ; i++){
    btnM[i].addEventListener('click',function(){

        if (btnM[i].nextElementSibling.innerHTML>0) {
            btnM[i].nextElementSibling.innerHTML--
            SommeTotal()
        }

    })
}

for(let i = 0; i < btnT.length; i++){
    btnT[i].addEventListener('click',function(){
        btnT[i].parentElement.remove()
        SommeTotal()
        // console.log(btnT)
    })
}


for(let i = 0;i < btnH.length; i++){
    btnH[i].addEventListener('click',function(){
        btnH[i].classList.toggle('redC')
    })
}

function SommeTotal(){
    var price = document.querySelectorAll('.price')
    var qte = document.querySelectorAll('.qte')
    var total = document.querySelector('#total')
    var sum = 0
    for(let i = 0; i < price.length;i++){
        sum = sum + price[i].innerText * qte[i].innerText
    }

    total.innerText = sum
}


