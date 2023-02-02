const app = require("../app");
const request = require("supertest");






describe("SEARCH ALL ", () => {

  it("Deve pesquisar todos os registro", async () => {

    const response = await request(app).get("/livro").send({

    });
    console.log(response.body);
    console.log(response.status);
    expect(response.status).toBe(200);

  });

  it("Deve pesquisar todos os registro", async () => {

    const response = await request(app).get("/livro").send({

    });
    console.log(response.body);
    console.log(response.status);
    expect(response.status).not.toBe(500);

  });

});

