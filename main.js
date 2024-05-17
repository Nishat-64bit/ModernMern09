
// how to pass data in asynchronus function using call back hell ?

function fun1(callback1,number) {
    setTimeout(()=>{
        let result = number+10
        console.log("hello func1",result);
        callback1(result) // func2() = callback1()
    },5000)
    
}
function fun2(callback2, para1) {
    setTimeout(()=>{
    let result2 = para1 + 10;
    console.log("hello func2",result2);
    callback2(result2)// func3() = callback2()
    },1000)
    
}
function fun3(callback3,para2) {
    setTimeout(()=>{
    let result3 = para2 + 10
    console.log("hello func3",result3);
    callback3(result3) //func4() = callback3()
    },400)
    
}
function fun4(callback4,para3) {
    setTimeout(()=>{
    let result4 = para3 + 10
    console.log("hello func4",result4);
    callback4(result4) //func5() = callback4()
    },200)
    
}
function fun5(callback5,para4) {
    setTimeout(()=>{
    let result5 = para4 + 10 // 60
    console.log("hello func5",result5);
    callback5(result5) //func6() = callback5() 
    },400)
   
}
function fun6(callback6,para5) {
    setTimeout(()=>{
        let result6 = para5 + 10  // 70
        console.log("hello func6",result6); 
        callback6(result6) //func7() = callback6()
    },400)
   
}
function fun7(callback7,para6) { // para1 = 20 = para6 
    setTimeout(()=>{
        let result7 = para6 + 10; // 80 // 30 ( para6 er value 20 + 10) 
        console.log("hello func7",result7);
    callback7(result7) //func8() = callback7()
    },4000)
    
}
function fun8(callback8,para7) {
    setTimeout(()=>{
        let result8 = para7 + 10; // 90
        console.log("hello func8",result8);
        callback8(result8) //func9() = callback8()  
    },400)
   
}
function fun9(callback9,para8) {
    setTimeout(()=>{
        let result9 = para8 + 10; // 100
        console.log("hello func9",result9);
        callback9(result9) //func10() = callback9()  
    },5000)
   
}
function fun10(para9) {
    setTimeout(()=>{
    console.log("hello func10",para9); 
    },200)
    
}


fun1(function(para1){
    fun2(function(para2){
        fun3(function(para3){
            fun4(function(para4){
                fun5(function(para5){
                    fun6(function(para6){
                        fun7(function(para7){
                            fun8(function(para8){
                                fun9(function(para9){
                                    fun10(para9)
                                },para8)
                            },para7)
                        },para1) // para1 = 20
                    },para5)
                },para4)
            },para3)
        },para2)
    },para1)
},10)


// but what happen when we want to use function paramiter in function 9 argument
// mane funct1 er data kibabe fun7 dite parbo
// =======================
fun1(function(para1){
// =======================
    fun2(function(para2){
        fun3(function(para3){
            fun4(function(para4){
                fun5(function(para5){
                    fun6(function(para6){
                        fun7(function(para7){ 
                            fun8(function(para8){
                                fun9(function(para9){
                                    fun10(para9)
                                },para8)
                            },para7)
                        // =======================    
                        },para1) // para1 = 20 // function7 e dite cie
                        // =======================
                    },para5)
                },para4)
            },para3)
        },para2)
    },para1)
},10)
// tobe mone rakte hobe lower theke kono value mane func5 theke kono babe func1e dewwa jabe na 
// fun1 theke func5 e dewwa jabe // karon func5 to execute hoi nai tai tar value kibabe apne func1 e argument hisebe use korben 