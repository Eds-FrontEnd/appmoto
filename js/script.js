const loja1 = [50, 50, 50];
const loja2 = [50, 50, 50, 50];
const loja3 = [50, 50, 100];

var pedidoLoja1 = loja1.reduce(function (pedidoLoja1, i) {
    var result1 = pedidoLoja1 + i;
    return result1;
});

var pedidoLoja2 = loja2.reduce(function (pedidoLoja2, i) {
    var result2 = pedidoLoja2 + i;
    return result2;
});
var pedidoLoja3 = loja3.reduce(function (pedidoLoja3, i) {
    var result3 = pedidoLoja3 + i;
    return result3;
});

var iniciar = document.getElementById('iniciar');
iniciar.addEventListener('click', chamarMotoboy);

function chamarMotoboy(moto) {

    var moto = document.getElementById('moto').value;
  
    console.log(moto);

    var comissaolj1 = pedidoLoja1 * 0.05;
    var comissaolj2 = pedidoLoja2 * 0.05;
    var comissaolj3 = pedidoLoja3 * 0.15;

    if (moto == 1 || moto == 2 || moto == 3) {
        var taxaEntrega = 2;
        var comissaolj1 = comissaolj1 + taxaEntrega;
        var comissaolj2 = comissaolj2 + taxaEntrega;
        var comissaolj3 = comissaolj3 + taxaEntrega;
        var resp = document.querySelector("#resposta");
        resp.textContent = `Motoboy ${moto}: A Loja1 tem ${loja1.length} pedidos e Sua comissão será de R$ ${comissaolj1.toFixed(2)}
        Motoboy ${moto}: A Loja2 tem ${loja2.length} pedidos e Sua comissão será de R$ ${comissaolj2.toFixed(2)} 
        Motoboy ${moto}: A Loja3 tem ${loja3.length} pedidos e Sua comissão será de R$ ${comissaolj3.toFixed(2)}`;
    } else if (moto == 4) {
        var taxaEntrega = 2;
        var comissaolj1 = comissaolj1 + taxaEntrega;
        var comissaolj2 = comissaolj2 + taxaEntrega;
        var comissaolj3 = comissaolj3 + taxaEntrega;
        var resp = document.querySelector("#resposta");
        resp.textContent = `Motoboy ${moto}: A Loja1 tem ${loja1.length} pedidos e Sua comissão será de R$ ${comissaolj1.toFixed(2)}
        Motoboy ${moto}: atende apenas a Loja1.`;
    
    } else if (moto == 5) {
        var taxaEntrega = 3;
        var comissaolj1 = comissaolj1 + taxaEntrega;
        var comissaolj2 = comissaolj2 + taxaEntrega;
        var comissaolj3 = comissaolj3 + taxaEntrega;
        var resp = document.querySelector("#resposta");
        resp.textContent = `Motoboy ${moto}: A Loja1 tem ${loja1.length} pedidos e Sua comissão será de R$ ${comissaolj1.toFixed(2)}
        Motoboy ${moto}: A Loja2 tem ${loja2.length} pedidos e Sua comissão será de R$ ${comissaolj2.toFixed(2)} 
        Motoboy ${moto}: A Loja3 tem ${loja3.length} pedidos e Sua comissão será de R$ ${comissaolj3.toFixed(2)}`;
    } else if (moto == 0) {
        var comissaolj1 = comissaolj1 + taxaEntrega;
        var comissaolj2 = comissaolj2 + taxaEntrega;
        var comissaolj3 = comissaolj3 + taxaEntrega;
        var resp = document.querySelector("#resposta");
        resp.textContent = `Esses são os motoboys disponíveis para realizar as entregas: 1, 2, 3, 4, 5. A Loja1 tem ${loja1.length} pedidos.
        A Loja2 tem ${loja2.length} pedidos. A Loja3 tem ${loja3.length} pedidos.`;
    } else { 
      document.querySelector("#resposta").textContent = "Número inválido. Digite novamente por favor ou digite zero para ver as opções disponíveis.";
    }
}
