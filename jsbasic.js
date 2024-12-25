//multiplication table using for loop

const number = 5
let i=1
for (i=1;i<=10;i++){
    console.log(number+"*"+i+"="+number*i +"using loop")
}

//using function
function tableoffive(number){
    for (i=1;i<=10;i++){
        console.log(number+"*"+i+"="+number*i +"using function")
    }
}
tableoffive(5)

