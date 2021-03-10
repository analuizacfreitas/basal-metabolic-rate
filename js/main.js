    function calculate() {
        var gender = input_gender.value;
        var weight = Number(input_weight.value);
        var height = Number(input_height.value);
        var age = Number(input_age.value);
        div_result.innerHTML = `<p>Você informou:
                                Sexo: ${gender} |
                                Peso: ${weight}Kg |
                                Altura: ${height}cm |
                                Idade: ${age} anos</p>`
        if (gender === 'F' || gender === 'f') {
            var women_formula = (10 * weight) + (6.25 * height) - (5.0 * age) - 161;
            div_result.innerHTML += `<p>Metabolismo Basal: ${women_formula} cal</p>`
        } else if (gender === 'M' || gender ==='m') {
            var men_formula = (10 * weight) + (6.25 * height) - (5.0 * age) + 5;
            div_result.innerHTML += `<p>Metabolismo Basal: ${men_formula} cal</p>`
        } else {
            div_result.innerHTML += `<p>Erro inesperado. Insira os dados novamente.</p>`
        }
    }