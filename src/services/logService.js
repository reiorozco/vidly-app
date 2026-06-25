function init() {
  // Punto de extensión para un servicio de logging (Sentry, etc.).
}

function log(error) {
  console.error(error);
}

export default {
  init,
  log,
};
