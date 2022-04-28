const firstDiv = document.querySelector('.first-step');
const secondDiv = document.querySelector('.second-step');
const finalDiv = document.querySelector('.final-step');

function go(currentStep, nextStep)
{
  let dNone, dBlock;
  if(currentStep == 1)
    {
      dNone = firstDiv;
    }
  else if(currentStep == 2)
    {
      dNone = secondDiv;
    }
  else
  {
    dNone = finalDiv;
  }
  
  dNone.style.display = 'none';
  
  if(nextStep == 1)
    {
      dBlock = firstDiv;
    }
  else if(nextStep == 2)
    {
      dBlock = secondDiv;
    }
  else
  {
    dBlock = finalDiv;
  }
  
  dBlock.style.display = 'block';
}


function validateDolar()
{
  var layer_dolar = document.getElementById('dolar'); 
  var layer_euro = document.getElementById('euro'); 
  var layer_iene = document.getElementById('iene');
  var layer_libra = document.getElementById('libra'); 
  var layer_bitcoin = document.getElementById('bitcoin'); 
  
  var valorDolar = parseFloat(document.getElementById('dolar').value);
 
  layer_dolar.style.border  = 'none';  
  layer_euro.style.border  = 'none';
  layer_iene.style.border  = 'none';
  layer_libra.style.border  = 'none';
  layer_bitcoin.style.border  = 'none';

        
    if (!valorDolar)    
      {
           layer_dolar.style.border  = '1px solid red';
      }
  
      else 
      {
       var valorDolarConvertido = (valorDolar * 0.20).toFixed(2);
       var resultadoDolar = document.getElementById('resultado');
        
       resultadoDolar.innerHTML = "O seu valor de R$ " + valorDolar + " reais é igual a $" + valorDolarConvertido + " dólares."
         go(2,3);
      }
 
        
}

function validateEuro()
{
  var layer_dolar = document.getElementById('dolar'); 
  var layer_euro = document.getElementById('euro'); 
  var layer_iene = document.getElementById('iene');
  var layer_libra = document.getElementById('libra'); 
  var layer_bitcoin = document.getElementById('bitcoin');  
  
  var valorEuro = parseFloat(document.getElementById('euro').value);
 
  layer_dolar.style.border  = 'none';  
  layer_euro.style.border  = 'none';
  layer_iene.style.border  = 'none';
  layer_libra.style.border  = 'none';
  layer_bitcoin.style.border  = 'none';
  
  
    if (!valorEuro)    
      {
           layer_euro.style.border  = '1px solid red';
      }
  
      else 
      {
       var valorEuroConvertido = (valorEuro * 0.18).toFixed(2);
       var resultadoEuro = document.getElementById('resultado');
        
       resultadoEuro.innerHTML = "O seu valor de R$ " + valorEuro + " reais é igual a € " + valorEuroConvertido + " euros."
         go(2,3);
      }
 
        
}
    
function validateIene()
{
  var layer_dolar = document.getElementById('dolar'); 
  var layer_euro = document.getElementById('euro'); 
  var layer_iene = document.getElementById('iene');
  var layer_libra = document.getElementById('libra'); 
  var layer_bitcoin = document.getElementById('bitcoin'); 
  
  var valorIene = parseFloat(document.getElementById('iene').value);
 
  layer_dolar.style.border  = 'none';  
  layer_euro.style.border  = 'none';
  layer_iene.style.border  = 'none';
  layer_libra.style.border  = 'none';
  layer_bitcoin.style.border  = 'none';
        
    if (!valorIene)    
      {
           layer_iene.style.border  = '1px solid red';
      }
  
      else 
      {
       var valorIeneConvertido = (valorIene * 23.12).toFixed(2);
       var resultadoIene = document.getElementById('resultado');
        
       resultadoIene.innerHTML = "O seu valor de R$ " + valorIene + " reais é igual a ¥ " + valorIeneConvertido + " ienes."
         go(2,3);
      }
 
        
}

function validateLibra()
{
  var layer_dolar = document.getElementById('dolar'); 
  var layer_euro = document.getElementById('euro'); 
  var layer_iene = document.getElementById('iene');
  var layer_libra = document.getElementById('libra'); 
  var layer_bitcoin = document.getElementById('bitcoin'); 
  
  var valorLibra = parseFloat(document.getElementById('libra').value);
 
  layer_dolar.style.border  = 'none';  
  layer_euro.style.border  = 'none';
  layer_iene.style.border  = 'none';
  layer_libra.style.border  = 'none';
  layer_bitcoin.style.border  = 'none';
        
    if (!valorLibra)    
      {
           layer_libra.style.border  = '1px solid red';
      }
  
      else 
      {
       var valorLibraConvertido = (valorLibra * 0.15).toFixed(2);
       var resultadoLibra = document.getElementById('resultado');
        
       resultadoLibra.innerHTML = "O seu valor de R$ " + valorLibra + " reais é igual a £ " + valorLibraConvertido + " libras."
         go(2,3);
      }
 
        
}

function validateBitcoin()
{
  var layer_dolar = document.getElementById('dolar'); 
  var layer_euro = document.getElementById('euro'); 
  var layer_iene = document.getElementById('iene');
  var layer_libra = document.getElementById('libra'); 
  var layer_bitcoin = document.getElementById('bitcoin'); 
  
  var valorBitcoin = parseFloat(document.getElementById('bitcoin').value);
 
  layer_dolar.style.border  = 'none';  
  layer_euro.style.border  = 'none';
  layer_iene.style.border  = 'none';
  layer_libra.style.border  = 'none';
  layer_bitcoin.style.border  = 'none';
        
    if (!valorBitcoin)    
      {
           layer_bitcoin.style.border  = '1px solid red';
      }
  
      else 
      {
       var valorBitcoinConvertido = valorBitcoin * 0.000005;
       var resultadoBitcoin = document.getElementById('resultado');
        
       resultadoBitcoin.innerHTML = "O seu valor de R$ " + valorBitcoin + " reais é igual a ₿ " + valorBitcoinConvertido + " bitcoins."
         go(2,3);
      }
 
        
}