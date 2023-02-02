const app = require("../app");
const request = require("supertest");
const {User} = require("../app");
const mysql = require('../mysql').pool
 



describe("Deletar ", () => {
    it("Deve deletar", async () => {
        const response = await request(app).delete("/livro/62e800912f1d0d63440b6462").send({
        
        });

      console.log(response.body);
      console.log(response.status);

      expect(response.status).toBe(202);
       
    });

});

