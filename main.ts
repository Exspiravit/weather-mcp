import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

// 1. Crear el servidor MCP
// es la interfaz principal con el protocolo MCP. Maneja la comunicación entre el cliente y el servidor.

const server = new McpServer({
  name: "demo",
  version: "0.0.1",
});

// 2. Definir las herramientas
server.tool(
  "fetch-weather",
  "tool to fetch weather from a city",
  {
    city: z.string().describe("ciudad para obtener el clima"),
  },
  async ({ city }) => {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=es&format=json`
    );
    const data = await response.json();

    if (!data.results) {
      return {
        content: [
          {
            type: "text",
            text: `No se encontró la ciudad ${city}.`,
          },
        ],
      };
    }
    const { latitude, longitude } = data.results[0];
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherResponse.json();

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(weatherData, null, 2),
        },
      ],
    };
  }
);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);
