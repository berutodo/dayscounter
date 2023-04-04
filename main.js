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
    if (year.value > 2023) {
        return alert("Ano não pode ser futuro")
    }
    // Cria um novo objeto Date com a data recebida
    const dataRecebida = new Date(year.value, month.value - 1, day.value);
    const diferencaEmMilissegundos = actualDate - dataRecebida;
    const diferencaEmDias = diferencaEmMilissegundos / (1000 * 60 * 60 * 24);
    const diferencaEmAnos = diferencaEmDias / 365.25;
    const restoMes = (diferencaEmDias % 365) / 12
    const restoDia = (diferencaEmDias % 365) % 12
    console.log(restoMes, restoDia)
    diasEnviar.innerText = Math.round(restoDia);
    anoEnviar.innerText = Math.round(diferencaEmAnos);
    mesEnviar.innerText = Math.round(restoMes);


}

function verifyMonth(dia, mes) {
    const trintaDias = [4, 6, 9, 11]
    if (trintaDias.includes(mes)) {
        if (dia > 31) {
            alert("Mês com numeração errada")
        }
    }
    if (mes === 2) {
        if (dia > 29) {
            alert("Fevereiro com mais de 29 dias")

        }
    }
}