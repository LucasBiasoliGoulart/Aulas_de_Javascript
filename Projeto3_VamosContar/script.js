function contar() {
    let iniciar = window.document.getElementById('inicio');
    let final = window.document.getElementById('fim');
    let passos = window.document.getElementById('passo');
    let resultado = window.document.getElementById('resultado');

    let i = parseInt(iniciar.value);
    let f = parseInt(final.value);
    let p = parseInt(passos.value);

    if (i < f) {
        for(i; i <= f; i += p) {
            resultado.innerHTML += `${i} \u{27A1}`;
        }
    } else {
        for(i; i <= f; i -= p) {
            resultado.innerHTML += `${i} \u{27A1}`;
        }
    }
    resultado.innerHTML += `\u{1F3C1}`
}