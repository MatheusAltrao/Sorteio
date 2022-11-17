let arrNames = []
const result = document.getElementById('result')
const boxResult = document.getElementById('box-result')
const itensList = document.getElementById('itensList')
const clock = document.getElementById('clock')
const resultList = document.getElementById('resultList')


itensList.innerText = "Quantidade é " + arrNames.length


document.getElementById('show').addEventListener('click', () => {
  clock.classList.remove('show')

  if (arrNames == '') {
    Toastify({
      text: "A lista está vazia",
      duration: 3000,
      style: {
        background: "red",
      },
    }).showToast();

    return
  }
  resultList.innerText = ''
  boxResult.classList.add('show')
  result.innerText = arrNames

})

document.getElementById('random').addEventListener('click', () => {



  const ramdomArr = arrNames[Math.floor(Math.random() * arrNames.length)]
  result.innerHTML = ''

  if (arrNames == '' || arrNames.length === 1) {
    Toastify({
      text: "A lista deve ter pelo menos 2 itens",
      duration: 3000,
      style: {
        background: "red",
      },
    }).showToast();

    return
  }


  Toastify({
    text: "Sorteio realizado 🤩😜",
    duration: 3000,
    style: {
      background: "#7c17b4",
    },
  }).showToast();


  clock.classList.add('show')

  setTimeout(() => {
    boxResult.classList.add('show')
    resultList.innerText = ramdomArr
  }, 5000)


})

document.getElementById('delete').addEventListener('click', () => {


  if (arrNames == '') {
    Toastify({
      text: "A lista está vazia",
      duration: 3000,
      style: {
        background: "red",
      },
    }).showToast();

    return
  }


  arrNames = []
  result.innerText = ''

  Toastify({
    text: "Lista sem nenhum elemento",
    duration: 2000,
    style: {
      background: "#7c17b4",
    },
  }).showToast();


  itensList.innerText = "Quantidade é " + arrNames.length

})

document.getElementById('add').addEventListener('click', (ev) => {
  ev.preventDefault()


  const inputItem = document.getElementById('inputItem')

  if (inputItem.value === '') {
    Toastify({
      text: "Preencha o campo para adicionar um nome a lista",
      duration: 3000,
      style: {
        background: "red",
      },
    }).showToast();

    return
  }

  arrNames.push(inputItem.value)

  Toastify({
    text: "Adicionado com sucesso",
    duration: 2000,
    style: {
      background: "#7c17b4",
    },
  }).showToast();

  inputItem.value = ''


  itensList.innerText = "Quantidade é " + arrNames.length
})

document.getElementById('copy').addEventListener('click', (ev) => {
  ev.preventDefault()



  if (arrNames == '') {
    Toastify({
      text: "A lista está vazia",
      duration: 2000,
      style: {
        background: "red",
      },
    }).showToast();

    return
  }

  navigator.clipboard.writeText(arrNames)
  Toastify({
    text: "Copiado!",
    duration: 2000,
    style: {
      background: "#7c17b4",
    },
  }).showToast();

})

