// src/js/50f14.core.js
const LegalAssistant = (() => {
  // Módulo interno - Base de conocimiento
  const LegalKB = {
    despido: {
      patterns: [/despid/i, /terminaci[oó]n/i, /cese/i],
      articles: ['LFT 47', 'Constitución 123'],
      response: (context) => ({
        template: 'despido-injustificado',
        data: {
          salarioPromedio: context.salario || 'N/A',
          antigüedad: context.antigüedad || 'N/A'
        }
      })
    }
  };

  // Sistema de plantillas legal-safe
  const LegalTemplates = {
    'despido-injustificado': ({salarioPromedio, antigüedad}) => {
      const indemnizacion = Math.round(salarioPromedio * 3 + (salarioPromedio / 30 * 20 * antigüedad));
      return `
        <div class="legal-card" role="alert">
          <h3>📖 Artículos aplicables: LFT 47,