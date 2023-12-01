const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: "input",
        name: "heading",
        message: "Enter a custom heading for your app:",
        default: "Book Store Using MEAN Stack"
      },
      {
        type: "input",
        name: "portNumber",
        message: "Enter a custom localhost Backend port (default: 8000):",
        default: 8000
      },
      {
        type: "input",
        name: "URLBook",
        message: "Enter the apiUrlBook: ",
        default: "http://localhost:8000/api"
      },
      {
        type: "input",
        name: "URLEvent",
        message: "Enter the apiUrlBook: ",
        default: "http://localhost:8000/alert"
      }
    ]).then(answers => {
      this.answers = answers;
    });
  }

  writing() {
    const heading = this.answers.heading || "Book Store Using MEAN Stack";
    const portNumber = this.answers.portNumber || 8000;
    const URLBook = this.answers.URLBook || "http://localhost:8000/api";
    const URLEvent = this.answers.URLEvent || "http://localhost:8000/alert";

    const options = {
      heading: heading,
      portNumber: portNumber,
      URLBook: URLBook,
      URLEvent: URLEvent
    };
    console.log(portNumber + "__");

    this.fs.copyTpl(
      this.templatePath("rest-api/database/db.js"),
      this.destinationPath("rest-api/database/db.js")
    );
    this.fs.copyTpl(
      this.templatePath("rest-api/node-backend/model/Book.js"),
      this.destinationPath("rest-api/node-backend/model/Book.js")
    );
    this.fs.copyTpl(
      this.templatePath("rest-api/node-backend/model/Event.js"),
      this.destinationPath("rest-api/node-backend/model/Event.js")
    );
    this.fs.copyTpl(
      this.templatePath("rest-api/node-backend/routes/book.routes.js"),
      this.destinationPath("rest-api/node-backend/routes/book.routes.js")
    );
    this.fs.copyTpl(
      this.templatePath("rest-api/node-backend/routes/event.routes.js"),
      this.destinationPath("rest-api/node-backend/routes/event.routes.js")
    );
    this.fs.copyTpl(
      this.templatePath("rest-api/index.js"),
      this.destinationPath("rest-api/index.js"),
      options
    );
    // this.fs.copyTpl(
    //   this.templatePath("rest-api/.env"),
    //   this.destinationPath("rest-api/.env"),
    //   options
    // );
    this.fs.copyTpl(
      this.templatePath("rest-api/package-lock.json"),
      this.destinationPath("rest-api/package-lock.json")
    );
    this.fs.copyTpl(
      this.templatePath("rest-api/package.json"),
      this.destinationPath("rest-api/package.json")
    );

    // angular
    this.fs.copyTpl(
      this.templatePath("bookshop/.angular"),
      this.destinationPath("bookshop/.angular"),
      options
    );

    this.fs.copyTpl(
      this.templatePath("bookshop/.editorconfig"),
      this.destinationPath("bookshop/.editorconfig")
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/angular.json"),
      this.destinationPath("bookshop/angular.json")
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/package-lock.json"),
      this.destinationPath("bookshop/package-lock.json")
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/package.json"),
      this.destinationPath("bookshop/package.json")
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/README.md"),
      this.destinationPath("bookshop/README.md")
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/tsconfig.app.json"),
      this.destinationPath("bookshop/tsconfig.app.json"),
      options
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/tsconfig.json"),
      this.destinationPath("bookshop/tsconfig.json"),
      options
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/tsconfig.spec.json"),
      this.destinationPath("bookshop/tsconfig.spec.json")
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/src/index.html"),
      this.destinationPath("bookshop/src/index.html")
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/src/favicon.ico"),
      this.destinationPath("bookshop/src/favicon.ico")
    );

    this.fs.copyTpl(
      this.templatePath("bookshop/src/main.ts"),
      this.destinationPath("bookshop/src/main.ts")
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/src/styles.css"),
      this.destinationPath("bookshop/src/styles.css")
    );

    this.fs.copyTpl(
      this.templatePath("bookshop/src/app/app-routing.module.ts"),
      this.destinationPath("bookshop/src/app/app-routing.module.ts")
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/src/app/app.component.css"),
      this.destinationPath("bookshop/src/app/app.component.css")
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/src/app/app.component.html"),
      this.destinationPath("bookshop/src/app/app.component.html"),
      options
    );

    this.fs.copyTpl(
      this.templatePath("bookshop/src/app/app.component.spec.ts"),
      this.destinationPath("bookshop/src/app/app.component.spec.ts")
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/src/app/app.component.ts"),
      this.destinationPath("bookshop/src/app/app.component.ts")
    );

    this.fs.copyTpl(
      this.templatePath("bookshop/src/app/app.module.ts"),
      this.destinationPath("bookshop/src/app/app.module.ts")
    );

    this.fs.copyTpl(
      this.templatePath("bookshop/src/app/service/book.spec.ts"),
      this.destinationPath("bookshop/src/app/service/book.spec.ts")
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/src/app/service/book.ts"),
      this.destinationPath("bookshop/src/app/service/book.ts")
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/src/app/service/crud.service.spec.ts"),
      this.destinationPath("bookshop/src/app/service/crud.service.spec.ts")
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/src/app/service/crud.service.ts"),
      this.destinationPath("bookshop/src/app/service/crud.service.ts")
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/src/app/service/environment.local.ts"),
      this.destinationPath("bookshop/src/app/service/environment.local.ts"),
      options
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/src/app/service/event.service.spec.ts"),
      this.destinationPath("bookshop/src/app/service/event.service.spec.ts")
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/src/app/service/event.service.ts"),
      this.destinationPath("bookshop/src/app/service/event.service.ts")
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/src/app/service/event.spec.ts"),
      this.destinationPath("bookshop/src/app/service/event.spec.ts")
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/src/app/service/event.ts"),
      this.destinationPath("bookshop/src/app/service/event.ts")
    );
    this.fs.copyTpl(
      this.templatePath("bookshop/src/app/components"),
      this.destinationPath("bookshop/src/app/components")
    );
  }

  install() {}
};
