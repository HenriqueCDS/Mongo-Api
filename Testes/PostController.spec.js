const app = require("../app");
const request = require("supertest");
const {User} = require("../app");
 
describe("Criar um novo", () => {

    it("Deve criar um novo usuario", async () => {
        const response = await request(app).post("/livro/62e959639d9ad613931c921f").send({
          titulo: "6 bacural",
          autor: "roger"
        });

      console.log(response.body);
      console.log(response.status);

      expect(response.status).toBe(201);
        

    });
    it("Deve criar um novo usuario", async () => {
        const response = await request(app).post("/livro").send({
          titulo: "6 bacural",
          autor: "roger"
        });

      console.log(response.body);
      console.log(response.status);

      expect(response.status).not.toBe(500);
        

    });
    it("Deve criar um novo usuario", async () => {
      const response = await request(app).post("/livro").send({
        titulo: "6 bacural",
        autor: "roger"
      });

    console.log(response.body);
    console.log(response.status);

    expect(response.body).not.toBeNull();;
      

  });

    

    

});

