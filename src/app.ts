import buildServer from "./server";

const server = buildServer();

async function main() {
  try {
    await server.listen({ port: 5005, host: "0.0.0.0" });

    server.log.info(`Server ready at http://localhost:5005`);
  } catch (e) {
    server.log.error(e);
    process.exit(1);
  }
}

main();
