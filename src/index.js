class FakeTranslator {
  constructor() {
    this.API = "";
  }

  // Traduz um único texto
  translate = async (text, from, to) => {
    console.log(`Translating: "${text}" from ${from} to ${to}`);
    try {
      const response = await fetch(`${this.API}`, {
        method: "",
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Network error: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("[LOG] Translation error:", error.message);
      return `[ERROR] ${error.message}`;
    }
  };

  // Traduz múltiplos textos em lote
  translateBatch = async (texts, from, to) => {
    try {
      const translations = await Promise.all(texts.map((text) => this.translate(text, from, to)));
      return translations;
    } catch (error) {
      console.error("[LOG] Batch translation error:", error);
      return texts.map(() => `[ERROR] Batch failed`);
    }
  };

  // Limite de comprimento do texto
  getLengthLimit = () => 4000;

  // Timeout das requisições
  getRequestsTimeout = () => 300;

  // Verifica se o limite foi excedido (retorna diferença ou 0 se OK)
  checkLimitExceeding = (text) => {
    const limit = this.getLengthLimit();
    return text.length > limit ? text.length - limit : 0;
  };

  static isSupportedAutoFrom = () => true;

  // Lista de idiomas suportados
  static getSupportedLanguages = () => ["en", "ru", "ja", "de", "es", "pt-BR", "pt"];
}

FakeTranslator;