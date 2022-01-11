// 5daa8580d36a0c977334d132

// https://v6.exchangerate-api.com/v6/5daa8580d36a0c977334d132/latest/USD

let amount = document.getElementById('amount');
let from = document.getElementById('formc')
let to = document.getElementById('toc')



let btns = document.getElementById('btns');

btns.addEventListener('click' , ratechange);

function ratechange(){

    let amt = amount.value;
    let fm = from.value;
    let t = to.value;
    console.log(amount.value);
    console.log(from.value);
    console.log(to.value);

    fetch(`https://v6.exchangerate-api.com/v6/5daa8580d36a0c977334d132/pair/${fm}/${t}/${amt}`)
    .then(Response => Response.json())
    .then((text)=>{
        console.log(text.conversion_result)

        let res = `${amt} ${fm} = ${text.conversion_result} ${t}`

        let result = document.getElementById('result');
        result.innerText = res;
    })
}
let sel = document.querySelectorAll('select')

for (let i =0; i< sel.length ; i++) {
    for(currency_code in country_list)
    {
        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "INR" ? "selected" : "";
        let optiontag = `  <option  class="border"  value=${currency_code} ${selected} >  ${currency_code} </option>`
        sel[i].insertAdjacentHTML('beforeend', optiontag)
       
    }

    sel[i].addEventListener("change", e=>{
        loadFlag(e.target);
    }
    );
    
}




function loadFlag(element) {
for (code in country_list) {
    if (code == element.value) {
        let imgTag = element.parentElement.querySelector("img");
        imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
    }
}
}



