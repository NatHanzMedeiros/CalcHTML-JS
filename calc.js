function Somar (){
    var n1 = parseFloat(document.getElementById("n1").value); 
    var n2 = parseFloat(document.getElementById("n2").value);
    var resultado = n1 + n2;
    document.getElementById("resultado").textContent = resultado;
    }
    function Subtrair() {
        var n1 = parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);
        var resultado = n1 - n2;
        document.getElementById("resultado").textContent = resultado;
    }
    
    function Multiplicar() {
        var n1 = parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);
        var resultado = n1 * n2;
        document.getElementById("resultado").textContent = resultado;
    }
    
    function Divisão() {
        var n1 = parseFloat(document.getElementById("n1").value);
        var n2 = parseFloat(document.getElementById("n2").value);
        var resultado = n1 / n2;
        document.getElementById("resultado").textContent = resultado;
    }