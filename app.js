let storeContent = document.querySelector('.text');
let optionChoose = document.querySelector("select");
updateDisplay();

optionChoose.onchange = () =>{
    let optionContent = optionChoose.value || "all";
    console.log(optionContent);
    switch(optionContent){
        case "all":
            storeContent.textContent = "Fetching Data"
            updateDisplay();
            break;

        case "ex-duplicates":
        case "se-duplicates":
            storeContent.textContent = "No Duplicates found"
            break;

    }
};
function updateDisplay () {
    var uniqueObjs = {};
    let  url = "https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences";
    fetch(url).then(res=>{
        res.json().then(text =>{
             [...text.paid,...text.free].map(item => {
                storeContent.textContent +=`\n\n\n`
                for (let [key, value] of Object.entries(item)) {
                storeContent.textContent += `${key}------------ ${value}\n`
                }
            });
            // var data = [...text.paid,...text.free].filter((obj, pos, arr) => {
            //     return arr.map(mapObj =>
            //           mapObj.name).indexOf(obj.name) == pos;
            //     });            
        });
    })
    .catch(() => "error");
}