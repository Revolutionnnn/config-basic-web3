document.addEventListener('DOMContentLoaded', () => {
  const boton = document.getElementById('boton');
  boton.addEventListener('click', conectarMetamask);
});

async function conectarMetamask () {
  if (window.ethereum) {
    try {
      // Solicita al usuario que autorice el acceso a la cuenta
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      
      // Conexión con Metamask
      const web3 = new Web3(window.ethereum);
      
      // Obtener el balance de la cuenta en Wei
      const balanceWei = await web3.eth.getBalance(account);

      // Convertir el balance de Wei a Ether
      const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
      
      console.log('Conexión con Metamask exitosa');
      console.log(`La cuenta ${account} tiene un balance de ${balanceEth} ETH`);
      
    } catch (error) {
      // El usuario no autoriza el acceso a la cuenta
      console.error('Acceso denegado a la cuenta de Metamask');
    }
  } else {
    // Metamask no está instalado en el navegador
    console.error('Metamask no está instalado en este navegador');
  }
}











