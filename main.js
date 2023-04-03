function calculateAge() {
    let diasEnviar = document.getElementById('dayPut')
    let anoEnviar = document.getElementById('yearPut')
    let mesEnviar = document.getElementById('monthPut')

    const actualDate = new Date()
    const day = document.getElementById('day')
    const month = document.getElementById('month')
    const year = document.getElementById('year')
    if (day.value === "" || month.value === "" || year.value === "") {
        return console.log('Falta algo')
    }
    if (day.value > 31) {
        return alert("Dia errado")
    }
    if (month.value > 12) {
        return alert("Mês errado")
    }
    // Cria um novo objeto Date com a data recebida
    const dataRecebida = new Date(year.value, month.value - 1, day.value);
    const diferencaEmMilissegundos = actualDate - dataRecebida;
    const diferencaEmDias = diferencaEmMilissegundos / (1000 * 60 * 60 * 24);
    const diferencaEmAnos = diferencaEmDias / 365.25;
    const diferencaEmMeses = (actualDate.getFullYear() - dataRecebida.getFullYear()) * 12 + (actualDate.getMonth() - dataRecebida.getMonth());

    diasEnviar.innerText = Math.round(diferencaEmDias);
    anoEnviar.innerText = Math.round(diferencaEmAnos);
    mesEnviar.innerText = Math.round(diferencaEmMeses);

    console.log(diferencaEmDias, diferencaEmAnos, diferencaEmMeses);

}