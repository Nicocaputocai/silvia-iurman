export const truncate = (str) => {
    return str.length > 50 ? str.substring(0, 100) + " [Seguir leyendo...]" : str;
  };