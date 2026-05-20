const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());

app.use(express.json());


const SECRET = "segredo";

app.post("/login", async (req, res) => {
  let conn;

  try {
    const { email, password } = req.body;

    conn = await db.getConnection();

    const rows = await conn.query(
      "SELECT * FROM usuarios WHERE email = ?",
      [email]
    );

    const user = rows[0];

    if (!user) {
      return res.status(401).json({
        error: "Email ou senha inválidos",
      });
    }

    const passwordMatch = await bcrypt.compare(
      password,
      user.senha
    );

    if (!passwordMatch) {
      return res.status(401).json({
        error: "Email ou senha inválidos",
      });
    }

    const token = jwt.sign(
      { id: user.id },
      SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
      },
    });

  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  } finally {
    if (conn) conn.release();
  }
});

// LISTAR 
app.get('/produtos', async (req, res) => {

    let conn;

    try {

        conn = await db.getConnection();

        const produtos = await conn.query(
            'SELECT * FROM produtos'
        );

        res.json(produtos);

    } catch (err) {

        res.status(500).json({
            erro: err.message
        });

    } finally {

        if (conn) conn.release();

    }

});

app.get('/carrinho/:id', async (req, res) => {
    let conn;
    try {
        const { id } = req.params; 
        conn = await db.getConnection();

        const resultado = await conn.query(
            'SELECT p.id, p.nome, p.preco, p.imagem FROM produtos AS p INNER JOIN carrinho AS c ON c.id_produto = p.id WHERE c.id_usuario = ?', 
            [id]
        );

        if (resultado.length === 0) {
            return res.status(404).json({ mensagem: "Carrinho Vazio" });
        }

        res.json(resultado);

    } catch (err) {
        res.status(500).json({ erro: err.message });
    } finally {
        if (conn) conn.release();
    }
});




app.get('/produtos/:id', async (req, res) => {
    let conn;
    try {
        const { id } = req.params; // Pega o ID enviado na URL
        conn = await db.getConnection();

        // O "?" evita ataques de SQL Injection, injetando o ID com segurança
        const resultado = await conn.query(
            'SELECT * FROM produtos WHERE id = ?', 
            [id]
        );

        // Se o banco retornar um array vazio, avisamos que o produto não existe
        if (resultado.length === 0) {
            return res.status(404).json({ mensagem: "Produto não encontrado" });
        }

        // Retorna apenas o objeto do produto encontrado (a primeira posição do array)
        res.json(resultado[0]);

    } catch (err) {
        res.status(500).json({ erro: err.message });
    } finally {
        if (conn) conn.release();
    }
});

// INSERIR
app.post("/usuarios", async (req, res) => {
  let conn;

  try {
    const { nome, telefone, cpf, email, senha } = req.body;

    conn = await db.getConnection();

    const senhaHash = await bcrypt.hash(senha, 10);

    await conn.query(
      "INSERT INTO usuarios (nome, telefone, cpf, email, senha) VALUES (?, ?, ?, ?, ?)",
      [nome, telefone, cpf, email, senhaHash]
    );

    res.json({
      mensagem: "Usuário cadastrado com sucesso",
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      erro: err.message,
    });

  } finally {
    if (conn) conn.release();
  }
});

app.post("/carrinho", async (req, res) => {
  let conn;

  try {
    const { id_usuario, id_produto, qtde } = req.body;

    conn = await db.getConnection();

    await conn.query(
      "INSERT INTO carrinho (id_usuario, id_produto, qtde) VALUES (?, ?, ?)",
      [id_usuario, id_produto, qtde]
    );

    res.json({
      mensagem: "Produto Adicionado com sucesso",
    });

  } catch (err) {
    console.error(err);

    res.status(500).json({
      erro: err.message,
    });

  } finally {
    if (conn) conn.release();
  }
});




app.listen(3000, () => {

    console.log('Servidor rodando');

});