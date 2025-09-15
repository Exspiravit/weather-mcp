# MCP Weather API 🌤️

Este es un Model Context Protocol (MCP) que te permite obtener información del clima para cualquier ciudad del mundo.

## Características

- Consulta del clima por nombre de ciudad
- Información actualizada en tiempo real
- Fácil integración con otros sistemas

## Requisitos previos

- Node.js (versión 16 o superior)
- pnpm (gestor de paquetes)

## Instalación

```bash
pnpm install
```

## Uso con el Inspector MCP

Para ejecutar el MCP con el inspector y ver la interfaz gráfica, utiliza el siguiente comando:

```bash
npx -y @modelcontextprotocol/inspector npx -y tsx main.ts
```

Una vez ejecutado, podrás:

1. Acceder a la interfaz del inspector en tu navegador
2. Ingresar el nombre de la ciudad que deseas consultar
3. Ver los resultados del clima en tiempo real

## Ejemplo de uso

El MCP acepta el nombre de una ciudad y devuelve la información del clima actual para esa ubicación.

Por ejemplo, si quieres consultar el clima en Madrid:

1. Abre el inspector
2. En el campo de entrada, escribe "Madrid"
3. Ejecuta la consulta
4. Recibirás información sobre la temperatura y condiciones climáticas actuales

## Licencia

Este proyecto está bajo la licencia incluida en el archivo LICENSE.
