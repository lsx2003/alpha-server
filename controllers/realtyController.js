const connection = require("../dbConfig");

const realtyCtrl = {
  getRealty: async (req, res) => {
    connection.query("SELECT * FROM lmh.realty", (error, rows) => {
      if (error) throw error;
      res.send(rows); 
    });
  },

  addRealty: async (req, res) => {
    const { id, realtyType, serviceType, rentalType, price, deposit, rentalfee, contact, detail } = req.body;
    console.log('body', req.body)
    const sql = `INSERT INTO lmh.realty VALUES ('${id}', '${realtyType}','${serviceType}','${rentalType}',${price},${deposit},${rentalfee},'${contact}','${detail}',now())`;
    connection.query(sql, (error, rows) => {
      if (error) throw error;
    });
  },

  deleteRealty: async (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM lmh.realty WHERE id = '${id}' `;
    connection.query(sql, (error, rows) => {
      console.log(req);
      if (error) throw error;
      res.send(200);
    });
  },

  // updateDone: async (req, res) => {
  //   const { id } = req.params;
  //   const { isDone } = req.body;
  //   console.log(id);
  //   console.log(isDone);
  //   const Done = isDone === 1 ? 0 : 1;
  //   const sql = `UPDATE todos SET isDone=${Done} WHERE id =${id}`;
  //   connection.query(sql, (error, rows) => {
  //     if (error) throw error;

  //     res.send(200);
  //   });
  // },

  // updateContent: async (req, res) => {
  //   const { id, content } = req.body;
  //   console.log(id, content);
  //   const sql = `UPDATE todos SET content='${content}' WHERE id =${id}`;
  //   connection.query(sql, (error, rows) => {
  //     console.log(req);
  //     if (error) throw error;
  //     res.send(200);
  //   });
  // },
};

module.exports = realtyCtrl;
