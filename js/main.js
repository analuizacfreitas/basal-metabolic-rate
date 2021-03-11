function calculate() {
    var gender = input_gender.value;
    var weight = Number(input_weight.value);
    var height = Number(input_height.value);
    var age = Number(input_age.value);
    div_result.innerHTML = `<br><p>Você informou:
                            Sexo: ${gender} |
                            Peso: ${weight}Kg |
                            Altura: ${height}cm |
                            Idade: ${age} anos</p>`
    if (gender === 'F' || gender === 'f') {
        var women_BMR = (10 * weight) + (6.25 * height) - (5.0 * age) - 161;
        var BMR_sedentaryWomen = women_BMR * 1.2;
        var BMR_lightlyActiveWomen = women_BMR * 1.375;
        var BMR_moderatelyActiveWomen = women_BMR * 1.55;
        var BMR_veryActiveWomen = women_BMR * 1.725;
        var BMR_extraActiveWomen = women_BMR * 1.9;
        div_result.innerHTML += `<p>SEU RESULTADO:</p>
                                 <p>Metabolismo Basal: ${women_BMR} cal<br>
                                 Sedentário: ${BMR_sedentaryWomen} cal<br>
                                 Exercício light: ${BMR_lightlyActiveWomen} cal<br>
                                 Exercício moderado: ${BMR_moderatelyActiveWomen} cal<br>
                                 Exercício regular: ${BMR_veryActiveWomen} cal<br>
                                 Exercício 2 horas por dia: ${BMR_extraActiveWomen} cal</p>`;
        div_image.innerHTML = `<img id="illustration" src="./images/metrics-illustration.png">`;
    } else if (gender === 'M' || gender ==='m') {
        var men_BMR = (10 * weight) + (6.25 * height) - (5.0 * age) + 5;
        var BMR_sedentaryMen = men_BMR * 1.2;
        var BMR_lightlyActiveMen = men_BMR * 1.375;
        var BMR_moderatelyActiveMen = men_BMR * 1.55;
        var BMR_veryActiveMen = men_BMR * 1.725;
        var BMR_extraActiveMen = men_BMR * 1.9;
        div_result.innerHTML += `<p>SEU RESULTADO:</p>
                                 <p>Metabolismo Basal: ${men_BMR} cal<br>
                                 Sedentário: ${BMR_sedentaryMen} cal<br>
                                 Exercício Light: ${BMR_lightlyActiveMen} cal<br>
                                 Exercício Moderado: ${BMR_moderatelyActiveMen} cal<br>
                                 Exercício Regular: ${BMR_veryActiveMen} cal<br>
                                 Exercício 2 horas por dia: ${BMR_extraActiveMen} cal</p>`;
        div_image.innerHTML = `<img id="illustration" src="./images/metrics-illustration.png">`;
    } else {
        div_result.innerHTML += `<p>Erro inesperado. Insira os dados novamente.</p>`
    }

    /* Basic Activity Factor
    1.2: If you are sedentary (little or no exercise) = BMR x 1.2
    1.375: If you are lightly active (light exercise/sports 1-3 days/week) = BMR x 1.375
    1.55: If you are moderately active (moderate exercise/sports 3-5 days/week) = BMR x 1.55
    1.725: If you are very active (hard exercise/sports 6-7 days a week) = BMR x 1.725
    1.9: If you are extra active (very hard exercise/sports & physical job or 2x training) = BMR x 1.9
    
    Cálculo do Grau de Atividade Física
    */
}