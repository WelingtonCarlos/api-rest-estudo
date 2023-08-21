import fastify from "fastify";
import crypto from "node:crypto";
import { knex } from "./database";

const app = fastify();

app.get("/hello", async (request, reply) => {
  // const transaction = await knex('transactions').insert({
  //   id: crypto.randomUUID(),
  //   title: 'Transação Teste 3',
  //   amount: 500,
  // }).returning('*')

  const transaction = await knex('transactions')
  .select('*')

  return transaction
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server is running");
  });
