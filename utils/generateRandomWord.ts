export function generateRandomWord() {
  const words = [
    "amor",
    "cielo",
    "luz",
    "vida",
    "paz",
    "sonrisa",
    "felicidad",
    "aventura",
    "esperanza",
    "alegría",
    "libertad",
    "amigo",
    "familia",
    "sabiduría",
    "corazón",
    "fuerza",
    "creatividad",
    "música",
    "arte",
    "pasión",
    "sueño",
    "naturaleza",
    "energía",
    "destino",
    "alma",
  ];

  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].toUpperCase();
}
