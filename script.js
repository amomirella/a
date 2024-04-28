function login() {
  var password = document.getElementById("password").value;
  if (password === "euteamo") {
      window.location.href = "home.html"; // Redireciona para a página secreta
  } else {
      alert("Senha incorreta. Tente novamente.");
  }
}