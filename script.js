function gerarTXT() {
    const primeiroHino = document.getElementById('primeiro-hino').value;
    const primeiraOracao = document.getElementById('primeira-oracao').value;
    const anuncios = document.getElementById('anuncios').value;
    const discursantes = document.getElementById('discursantes').value;
    const ultimoHino = document.getElementById('ultimo-hino').value;
    const ultimaOracao = document.getElementById('ultima-oracao').value;

    const conteudo = 
        "1º Hino: " + primeiroHino + "\n" +
        "1º Oração: " + primeiraOracao + "\n" +
        "Anúncios: " + anuncios + "\n" +
        "Discursantes: " + discursantes + "\n" +
        "Último Hino: " + ultimoHino + "\n" +
        "Última Oração: " + ultimaOracao + "\n";

    const blob = new Blob([conteudo], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "reuniao.txt";
    link.click();
}

