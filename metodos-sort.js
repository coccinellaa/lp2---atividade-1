let skincare = ['sabonete facial', ' hidratante leve', ' sérum', ' hidratante grossinho', ' protetor solar'];
let maquiagem = [' corretivo laranja', ' base', ' corretivo claro', ' blush', ' contorno', ' sombra', ' pó', ' iluminador', ' delineador', ' rímel', ' blush em pó', ' contorno em pó'];
let pele = [];

// pele.push(skincare, maquiagem); // Puxamos as duas variáveis para dentro do vetor pele
// console.log(pele);
// console.log('Os produtos passados na pele são => ' + pele); // Aqui vai ser mostrada a sequência dos coisas que a gente puxou anteriormente

pele.push(skincare[0], skincare[1], skincare[4], maquiagem[2], maquiagem[5], maquiagem[6], maquiagem[9]);
// console.log(pele);

// Pra ordenar os produtos passados na pele em ordem alfabetica
pele.sort();
console.log('Os produtos foram ordenados!');
console.log(pele);
console.log('');