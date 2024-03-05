function GerarQRode(){
    let inputUsuario = document.querySelector(`textarea`).value;
    let googleChartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=';
    let conteudoQRCode = googleChartAPI+inputUsuario;
    document.querySelector('#QRCodeImage').src = conteudoQRCode;
}