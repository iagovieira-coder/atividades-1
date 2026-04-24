const container = document.getElementById('container-exercicio');
let intervaloCronometro; // Global para o exercício 15
let numeroSecreto; // Global para o exercício 12
let tentativasAdivinhacao = 0; // Global para o exercício 12

function carregarEx(num) {
    // Para o cronômetro se o usuário mudar de página
    clearInterval(intervaloCronometro);
    intervaloCronometro = null;

    let html = "";

    switch(num) {
        case 1:
            html = `<h2>01. Tabuada</h2>
                    <input type="number" id="num1" placeholder="Número">
                    <button onclick="res1()">Gerar Tabuada</button>
                    <div id="res" class="result-box"></div>`;
            break;
        case 2:
            html = `<h2>02. Operações Básicas</h2>
                    <input type="number" id="num2" placeholder="Número">
                    <select id="op2">
                        <option value="soma">Soma</option>
                        <option value="sub">Subtração</option>
                        <option value="mult">Multiplicação</option>
                        <option value="div">Divisão</option>
                    </select>
                    <button onclick="res2()">Calcular</button>
                    <div id="res" class="result-box"></div>`;
            break;
        case 3:
            html = `<h2>03. IMC</h2>
                    <input type="number" id="peso" placeholder="Peso (kg)">
                    <input type="number" id="alt" placeholder="Altura (m)">
                    <button onclick="res3()">Calcular IMC</button>
                    <div id="res" class="result-box"></div>`;
            break;
        case 4:
            html = `<h2>04. Faixa Etária</h2>
                    <input type="number" id="idade4" placeholder="Sua idade">
                    <button onclick="res4()">Verificar</button>
                    <div id="res" class="result-box"></div>`;
            break;
        case 5:
            html = `<h2>05. Média Escolar</h2>
                    <input type="number" id="n1" placeholder="Nota 1">
                    <input type="number" id="n2" placeholder="Nota 2">
                    <input type="number" id="n3" placeholder="Nota 3">
                    <button onclick="res5()">Calcular Média</button>
                    <div id="res" class="result-box"></div>`;
            break;
        case 6:
            html = `<h2>06. Calculadora</h2>
                    <input type="number" id="v1" placeholder="Valor 1">
                    <input type="number" id="v2" placeholder="Valor 2">
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:5px">
                        <button onclick="res6('+')">+</button><button onclick="res6('-')">-</button>
                        <button onclick="res6('*')">x</button><button onclick="res6('/')">/</button>
                    </div>
                    <div id="res" class="result-box"></div>`;
            break;
        case 7:
            html = `<h2>07. Par ou Ímpar</h2>
                    <input type="number" id="num7" placeholder="Digite um número">
                    <button onclick="res7()">Verificar</button>
                    <div id="res" class="result-box"></div>`;
            break;
        case 8:
            html = `<h2>08. Conversor Dólar</h2>
                    <input type="number" id="reais" placeholder="Valor em R$">
                    <input type="number" id="cot" placeholder="Cotação">
                    <button onclick="res8()">Converter</button>
                    <div id="res" class="result-box"></div>`;
            break;
        case 9:
            html = `<h2>09. Força de Senha</h2>
                    <input type="password" id="pass" placeholder="Digite a senha">
                    <button onclick="res9()">Testar</button>
                    <div id="res" class="result-box"></div>`;
            break;
        case 10:
            html = `<h2>10. Analisador Texto</h2>
                    <textarea id="txt10" rows="4" style="width:100%"></textarea>
                    <button onclick="res10()">Analisar</button>
                    <div id="res" class="result-box"></div>`;
            break;
        case 11:
            html = `<h2>11. Regressivo</h2>
                    <input type="number" id="num11" placeholder="Início">
                    <button onclick="res11()">Começar</button>
                    <div id="res" class="result-box" style="font-size:30px; text-align:center">0</div>`;
            break;
        case 12:
            html = `<h2>12. Adivinhação</h2>
                    <input type="number" id="chute" placeholder="1 a 100">
                    <button onclick="res12()">Chutar</button>
                    <button onclick="reset12()" style="background:#666">Novo Jogo</button>
                    <div id="res" class="result-box"></div>`;
            numeroSecreto = Math.floor(Math.random() * 100) + 1;
            break;
        case 13:
            html = `<h2>13. Cadastro</h2>
                    <input type="text" id="cadNome" placeholder="Nome">
                    <input type="number" id="cadIdade" placeholder="Idade">
                    <input type="email" id="cadEmail" placeholder="E-mail">
                    <button onclick="res13()">Exibir Dados</button>
                    <div id="res" class="result-box"></div>`;
            break;
        case 14:
            html = `<h2>14. Desconto</h2>
                    <input type="number" id="compra" placeholder="Valor da compra">
                    <button onclick="res14()">Aplicar Desconto</button>
                    <div id="res" class="result-box"></div>`;
            break;
        case 15:
            html = `<h2>15. Cronômetro</h2>
                    <div id="res" style="font-size:40px; text-align:center; margin:10px">00:00:00</div>
                    <div style="display:flex; gap:5px">
                        <button onclick="res15_start()">Start</button>
                        <button onclick="res15_pause()" style="background:orange">Pause</button>
                        <button onclick="res15_reset()" style="background:red">Reset</button>
                    </div>`;
            break;
    }
    container.innerHTML = html;
}

// --- LOGICAS DE CADA EXERCÍCIO ---

function res1() {
    let n = document.getElementById('num1').value;
    let r = "";
    for(let i=0; i<=10; i++) r += `${n} x ${i} = ${n*i}<br>`;
    document.getElementById('res').innerHTML = r;
}

function res2() {
    let n = Number(document.getElementById('num2').value);
    let op = document.getElementById('op2').value;
    let r = "";
    for(let i=0; i<=10; i++) {
        if(op==='soma') r += `${n} + ${i} = ${n+i}<br>`;
        if(op==='sub') r += `${n} - ${i} = ${n-i}<br>`;
        if(op==='mult') r += `${n} x ${i} = ${n*i}<br>`;
        if(op==='div') r += `${n} / ${i} = ${(n/i).toFixed(1)}<br>`;
    }
    document.getElementById('res').innerHTML = r;
}

function res3() {
    let p = document.getElementById('peso').value;
    let a = document.getElementById('alt').value;
    let imc = p / (a*a);
    document.getElementById('res').innerHTML = `IMC: ${imc.toFixed(2)}`;
}

function res4() {
    let i = document.getElementById('idade4').value;
    let cat = i <= 12 ? "Criança" : i <= 17 ? "Adolescente" : i <= 59 ? "Adulto" : "Idoso";
    document.getElementById('res').innerHTML = `Categoria: ${cat}`;
}

function res5() {
    let n1 = Number(document.getElementById('n1').value);
    let n2 = Number(document.getElementById('n2').value);
    let n3 = Number(document.getElementById('n3').value);
    let med = (n1+n2+n3)/3;
    document.getElementById('res').innerHTML = `Média: ${med.toFixed(1)} - ${med >= 7 ? "APROVADO" : "REPROVADO"}`;
}

function res6(op) {
    let v1 = Number(document.getElementById('v1').value);
    let v2 = Number(document.getElementById('v2').value);
    let res = eval(`${v1} ${op} ${v2}`);
    document.getElementById('res').innerHTML = `Resultado: ${res}`;
}

function res7() {
    let n = document.getElementById('num7').value;
    document.getElementById('res').innerHTML = n % 2 === 0 ? "PAR" : "ÍMPAR";
}

function res8() {
    let r = document.getElementById('reais').value;
    let c = document.getElementById('cot').value;
    document.getElementById('res').innerHTML = `US$ ${(r/c).toFixed(2)}`;
}

function res9() {
    let s = document.getElementById('pass').value.length;
    document.getElementById('res').innerHTML = s < 6 ? "Fraca" : s <= 8 ? "Média" : "Forte";
}

function res10() {
    let t = document.getElementById('txt10').value;
    let m = t.match(/[A-Z]/g);
    document.getElementById('res').innerHTML = `Chars: ${t.length} | Palavras: ${t.trim().split(/\s+/).length} | Maiúsculas: ${m ? m.length : 0}`;
}

function res11() {
    let n = document.getElementById('num11').value;
    let disp = document.getElementById('res');
    let timer = setInterval(() => {
        disp.innerHTML = n;
        if(n <= 0) { clearInterval(timer); disp.innerHTML = "FIM!"; }
        n--;
    }, 1000);
}

function res12() {
    let c = document.getElementById('chute').value;
    let d = document.getElementById('res');
    if(c == numeroSecreto) d.innerHTML = "Acertou!";
    else d.innerHTML = c < numeroSecreto ? "Maior..." : "Menor...";
}

function reset12() { carregarEx(12); }

function res13() {
    let n = document.getElementById('cadNome').value;
    let i = document.getElementById('cadIdade').value;
    let e = document.getElementById('cadEmail').value;
    document.getElementById('res').innerHTML = `Nome: ${n}<br>Idade: ${i}<br>E-mail: ${e}`;
}

function res14() {
    let v = Number(document.getElementById('compra').value);
    let d = v > 500 ? 0.2 : v > 100 ? 0.1 : 0;
    document.getElementById('res').innerHTML = `Total: R$ ${(v - v*d).toFixed(2)} (Desc: ${d*100}%)`;
}

// Cronômetro (Ex 15)
let msec = 0;
function res15_start() { if(!intervaloCronometro) intervaloCronometro = setInterval(() => {
    msec += 1000;
    document.getElementById('res').innerHTML = new Date(msec).getUTCHours().toString().padStart(2, '0') + ":" + 
        new Date(msec).getUTCMinutes().toString().padStart(2, '0') + ":" + 
        new Date(msec).getUTCSeconds().toString().padStart(2, '0');
}, 1000); }
function res15_pause() { clearInterval(intervaloCronometro); intervaloCronometro = null; }
function res15_reset() { res15_pause(); msec = 0; document.getElementById('res').innerHTML = "00:00:00"; }