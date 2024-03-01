function menuShow() {
    const menuMobile = document.querySelector('.menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../img/iconeMenu.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../img/iconeMenu.png";
    }
  }
  if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
  } else {
    ready()
  }
  
  var total = "0,00"
  
  function ready() {
    // Botão remover produto
    const botaoRemoverProduto = document.getElementsByClassName("remove-produto-button")
    for (var i = 0; i < botaoRemoverProduto.length; i++) {
      botaoRemoverProduto[i].addEventListener("click", removeProduct)
    }
  
    // Mudança valor dos inputs
    const alterarValorInput = document.getElementsByClassName("produto-qtd-input")
    for (var i = 0; i < alterarValorInput.length; i++) {
      alterarValorInput[i].addEventListener("change", checkIfInputIsNull)
    }
  
    // Botão add produto ao carrinho
    const adicionarProdutoCarrinho = document.getElementsByClassName("button-hover-background")
    for (var i = 0; i < adicionarProdutoCarrinho.length; i++) {
      adicionarProdutoCarrinho[i].addEventListener("click", addProdutoCarrinho)
    }
  
   
    const buttonComprar = document.getElementsByClassName("botaoComprar")[0]
    buttonComprar.addEventListener("click", fazerCompra)
  }
  
  function removeProduct(event) {
    event.target.parentElement.parentElement.remove()
    updateTotal()
  }
  
  function checkIfInputIsNull(event) {
    if (event.target.value === "0") {
      event.target.parentElement.parentElement.remove()
    }
  
    updateTotal()
  }
  
  function addProdutoCarrinho(event) {
    const button = event.target
    const productInfos = button.parentElement.parentElement
    const productImage = productInfos.getElementsByClassName("produto-image")[0].src
    const productName = productInfos.getElementsByClassName("produto-title")[0].innerText
    const productPrice = productInfos.getElementsByClassName("produto-price")[0].innerText
  
    const productsCartNames = document.getElementsByClassName("cart-produto-title")
    for (var i = 0; i < productsCartNames.length; i++) {
      if (productsCartNames[i].innerText === productName) {
        productsCartNames[i].parentElement.parentElement.getElementsByClassName("produto-qtd-input")[0].value++
        updateTotal()
        return 0;
      }
    }
  
    let novoProdutoCarrinho = document.createElement("tr")
    novoProdutoCarrinho.classList.add("produto-cart")
  
    novoProdutoCarrinho.innerHTML =
      `
        <td class="produto-identification">
          <img src="${productImage}" alt="${productName}" class="cart-produto-image">
          <strong class="cart-produto-title">${productName}</strong>
        </td>
        <td>
          <span class="cart-produto-price">${productPrice}</span>
        </td>
        <td>
          <input type="number" value="1" min="0" class="produto-qtd-input">
          <button type="button" class="remove-produto-button">Remover</button>
        </td>
      `
    
    const tableBody = document.querySelector(".cart-table tbody")
    tableBody.append(novoProdutoCarrinho)
    updateTotal()
  
    novoProdutoCarrinho.getElementsByClassName("remove-produto-button")[0].addEventListener("click", removeProduct)
    novoProdutoCarrinho.getElementsByClassName("produto-qtd-input")[0].addEventListener("change", checkIfInputIsNull)
  }
  
  function fazerCompra() {
    if (total === "0,00") {
      alert("Seu carrinho está vazio!")
    } else {   
      alert(
        `
          Obrigado pela sua compra!
          Valor do pedido: R$${total}\n
          Volte sempre :)
        `
      )
  
      document.querySelector(".cart-table tbody").innerHTML = ""
      updateTotal()
    }
  }
  
  
  function updateTotal() {
    const cartProducts = document.getElementsByClassName("produto-cart")
    total = 0
  
    for (var i = 0; i < cartProducts.length; i++) {
      const productPrice = cartProducts[i].getElementsByClassName("cart-produto-price")[0].innerText.replace("R$", "").replace(",", ".")
      const productQuantity = cartProducts[i].getElementsByClassName("produto-qtd-input")[0].value
  
      total += productPrice * productQuantity
    }
    
    total = total.toFixed(2)
    total = total.replace(".", ",")
    document.querySelector(".cart-total-container span").innerText = "R$" + total
  }