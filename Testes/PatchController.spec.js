const app = require("../app");
const request = require("supertest");
const {User} = require("../app");
 



describe("Alterar", () => {

    it("Deve alterar", async () => {
        const response = await request(app).patch("/livro/62e959639d9ad613931c921f").send({
           
          titulo: "bacural test",
          autor: "roger"
        });

      console.log(response.body);
      console.log(response.status);

      expect(response.status).toBe(201);
       
    });
    it("Deve alterar", async () => {
        const response = await request(app).patch("/livro/62e959639d9ad613931c921f").send({
           
          titulo: "bacural test",
          autor: "roger"
        });

      console.log(response.body);
      console.log(response.status);

      expect(response.status).not.toBe(500);
       
    });

    
  

    

    

});

