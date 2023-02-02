const app = require("../app");
const request = require("supertest");
const {User} = require("../app");
 



describe("Search", () => {

    it("Pesquisa Específica", async () => {

        const response = await request(app).get("/livro/62e800912f1d0d63440b6462").send({    

        });
      console.log(response.body);
      console.log(response.status);
      expect(response.status).toBe(200);
       
    });
    
    it("Pesquisa Específica", async () => {

        const response = await request(app).get("/livro/62e951c688651ae2ba9c5433").send({    

        });
      console.log(response.body);
      console.log(response.status);
      expect(response.status).not.toBe(404);
       
    });

});

