function calcularPeso(){
    const altura = parseFloat(document.getElementById("altura").value);
    const sexo = document.getElementById("sexo").value;
    const res = document.querySelector("#resultado")

    
    if(sexo == "M"){
        let pesoIdeal = (72.2*altura)-58
        
        res.innerHTML = `${pesoIdeal.toFixed(2)} kg`
    }else{
        let pesoIdeal = (62.1*altura)-44.7

        res.innerHTML =`${pesoIdeal.toFixed(2)} kg`
    }

}