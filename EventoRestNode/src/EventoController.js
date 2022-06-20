exports.post = async (req, res) =>{
    const conn = await connect();
    const sql = 'INSERT INTO evento(email,nome,telefone,localevento) VALUES(?,?,?,?);';
    const values = [req.body.email, req.body.nome, req.body.telefone, req.body.localevento];
    await conn.query(sql, values);
    res.status(201).send('ok!');
   
  };
  
  exports.put = async (req, res, next)  => {
    let id = req.params.id;
    const conn = await connect();
    const sql = 'UPDATE evento SET email=?, nome=?, telefone=?, localevento=?  WHERE idevento= ?;';
    const values = [req.body.email, req.body.nome, req.body.telefone, req.body.localevento, id];
    await conn.query(sql, values);
  
    res.status(201).send('ok');
  };
  exports.delete = async (req, res, next) => {
    let id = req.params.id;
    const conn = await connect();
    const sql = 'DELETE FROM evento WHERE idevento= ?;';
    const values = [id];
    await conn.query(sql, values);
  
    res.status(200).send('ok');
  };
  
  exports.get = async (req, res, next)  => {
        const conn = await connect();
        const [rows] = await conn.query('SELECT * From evento');
      res.status(200).send(rows);
  };
  
  exports.getById = async (req, res, next) => {
      const conn = await connect();
      const [rows] = await conn.query('SELECT * FROM evento WHERE idevento = ' + req.params.id);
  
      if (rows.length > 0) {
        res.status(200).send(rows[0]);
      } else {
        res.status(404).send("ID não existe");
      }
   };
  
  
  
  async function connect(){
      if (global.connection && global.connection.state !== 'disconnected') 
          return global.connection;
  
          const mysql = require("mysql2/promise");
          const connection = await
          mysql.createConnection({host: 'localhost', user: 'root', password: '123', database: 'bd_evento'});
  
      console.log("Conectou no MySQL!");
      global.connection = connection;
      return connection;
  }