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
    "alegria",
    "libertad",
    "amigo",
    "familia",
    "sabiduria",
    "corazon",
    "fuerza",
    "creatividad",
    "musica",
    "arte",
    "pasion",
    "naturaleza",
    "energia",
    "destino",
    "alma",
  ];

  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].toUpperCase();
}
