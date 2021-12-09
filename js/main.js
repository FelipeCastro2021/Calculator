function insert(numero) {
  let valor = document.getElementById('display').innerHTML

  document.getElementById('display').innerHTML = valor + numero
}

function clean() {
  document.getElementById('display').innerHTML = ''
}

function back() {
  let resultado = document.getElementById('display').innerHTML

  document.getElementById('display').innerHTML = resultado.substring(
    0,
    resultado.length - 1
  )
}

function calcular() {
  let resultado = document.getElementById('display').innerHTML

  if (resultado) {
    document.getElementById('display').innerHTML = eval(resultado)
  } else {
    document.getElementById('display').innerHTML = 'Nada para calcular'
  }
}
