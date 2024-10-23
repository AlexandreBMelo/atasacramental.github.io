function gerarTXT() {
    const data = document.getElementById('data').value;
    const dirigidaPor = document.getElementById('dirigida-por').value;
    const anuncios = document.getElementById('anuncios').value;
    const primeiroHino = document.getElementById('primeiro-hino').value;
    const primeiraOracao = document.getElementById('primeira-oracao').value;
    const discursante1 = document.getElementById('discursante1').value;
    const discursante2 = document.getElementById('discursante2').value;
    const segundoHino = document.getElementById('segundo-hino').value;
    const discursante3 = document.getElementById('discursante3').value;
    const ultimoHino = document.getElementById('ultimo-hino').value;
    const ultimaOracao = document.getElementById('ultima-oracao').value;

    const conteudo = 
        "Data: " + data + "\n" +
        "Dirigida por: " + dirigidaPor + "\n" +
        "Anúncios: " + anuncios + "\n" +
        "1º Hino: " + primeiroHino + "\n" +
        "1º Oração: " + primeiraOracao + "\n" +
        "Discursante 1: " + discursante1 + "\n" +
        "Discursante 2: " + discursante2 + "\n" +
        "2º Hino: " + segundoHino + "\n" +
        "Discursante 3: " + discursante3 + "\n" +
        "Último Hino: " + ultimoHino + "\n" +
        "Última Oração: " + ultimaOracao + "\n";

    const blob = new Blob([conteudo], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "reuniao.txt";
    link.click();
}
