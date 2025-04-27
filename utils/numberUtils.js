/**
 * Vérifie si un nombre est pair.
 * @param {number} nombre - Le nombre à vérifier.
 * @returns {boolean} Retourne true si le nombre est pair, false sinon.
 * @throws {TypeError} Lance une erreur si le paramètre n'est pas un nombre.
 */
const estPair = (nombre) => {
  if (typeof nombre !== "number") {
    throw new TypeError("Le paramètre doit être un nombre");
  }

  return nombre % 2 === 0;
};

module.exports = {
  estPair,
};
