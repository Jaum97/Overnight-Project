/*JAVASCRIPT FUNCTIONS FOR CALCULATOR*/

/* VERSION 0.0.1 21/10/2018*/
const calculate = (input) => {
    let aux;
	try{
        aux = eval(input);
    }catch(error){
        aux = "syntax error";
    }
    console.log({aux});
    return aux;
    
    
};