// Diferença das variaveis:

// A variavel var pode ser usada dentro e fora do seu escopo

if (true) {
  var foraDeEscopo = false;
}

console.log(foraDeEscopo);

// A variavel let NÃO pode ser usada fora do escopo dela

if (true) {
  let nome = "Arthur";
}

// A variavel const NÃO pode ser modificada após ser declarada

const oi = true;
