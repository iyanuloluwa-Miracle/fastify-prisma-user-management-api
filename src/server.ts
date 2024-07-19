import Fastify, { FastifyRequest, FastifyReply } from "fastify";
import { withRefResolver } from "fastify-zod";





function buildServer() {
  const server = Fastify({ logger: true });

  server.get("/", async function () {
    return { status: "Welcome🎉" };
  });

  return server;
}

export default buildServer;