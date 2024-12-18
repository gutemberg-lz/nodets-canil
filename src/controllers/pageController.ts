import { RequestHandler } from 'express';

export const Home: RequestHandler = (req, res) => {
  res.send("Home do Controller");
  // res.render();
};
export const Dogs: RequestHandler = (req, res) => {
  res.send("Home do Cachorros");

  // res.render();
};
export const Cats: RequestHandler = (req, res) => {
  res.send("Home do Gatos");

  // res.render();
};
export const Fishes: RequestHandler = (req, res) => {
  res.send("Home do Peixes");

  // res.render();
};
