const Generator = require("yeoman-generator");

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: "input",
        name: "authorName",
        message: "Enter your name:",
        store: true, 
        validate: (input) => {
          return input.trim() !== "" ? true : "Name cannot be empty";
        }
      },
      {
        type: "input",
        name: "authorEmail",
        message: "Enter your email ID:",
        store: true, 
        validate: (input) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(input) ? true : "Invalid email format";
        }
      },
      {
        type: "input",
        name: "description",
        message: "Enter a description for your app:",
        default: "A MEAN stack application for managing books and events."
      },
      {
        type: "input",
        name: "heading",
        message: "Enter a custom heading for your app:",
        default: "Book Store Using MEAN Stack"
      },
      {
        type: "input",
        name: "portNumber",
        message: "Enter a custom localhost Backend port :",
        default: 8000
      },
      {
        type: "input",
        name: "clientId",
        message: "Enter your clientId for the keycloak :"
      },
      {
        type: "input",
        name: "realm",
        message: "Enter your realm :"
      },

      {
        type: "input",
        name: "angularOidcAuthority",
        message: "Enter your angularOidcAuthority :"
      },

      {
        type: "input",
        name: "serverUrl",
        message: "Enter your serverUrl :",
        default: `http://localhost:8080/`,
      },
 
      {
        type: "input",
        name: "URLBook",
        message: "Enter the apiUrlBook: ",
        default: (answers) => `http://localhost:${answers.portNumber}/api`
      },
      {
        type: "input",
        name: "URLEvent",
        message: "Enter the apiUrlBook: ",
        default: (answers) => `http://localhost:${answers.portNumber}/alert`     
       }
    ]).then(answers => {
      this.answers = answers;
    });
  }

  writing() {
    const authorName = this.answers.authorName;
    const authorEmail = this.answers.authorEmail;
    const heading = this.answers.heading || "Book Store Using MEAN Stack";
    const portNumber = this.answers.portNumber || 8000;
    const URLBook = this.answers.URLBook || `http://localhost:${answers.portNumber}/api`;
    const URLEvent = this.answers.URLEvent ||  `http://localhost:${answers.portNumber}/alert`;
    const description = this.answers.description || "A MEAN stack application for managing books and events.";
    const clientId =this.answers.clientId;
    const serverUrl =this.answers.serverUrl;
    const realm =this.answers.realm;
    const angularOidcAuthority =this.answers.angularOidcAuthority;


    const options = {
      heading: heading,
      portNumber: portNumber,
      clientId: clientId,
      realm: realm,
      serverUrl :serverUrl ,
      angularOidcAuthority: angularOidcAuthority,
      description: description,
      URLBook: URLBook,
      URLEvent: URLEvent,
      authorName: authorName,
      authorEmail:authorEmail
      
    };
    console.log(portNumber + "__");

    this.fs.copyTpl(
      this.templatePath("LICENSE"),
      this.destinationPath("LICENSE"),
      options
    );  
    this.fs.copyTpl(
      this.templatePath("README.MD"),
      this.destinationPath("README.MD"),
      options
    );
    this.fs.copyTpl(
      this.templatePath("rest-api/database/db.js"),
      this.destinationPath("rest-api/database/db.js")
    );
    this.fs.copyTpl(
      this.templatePath("rest-api/node-backend/model/Book.js"),
      this.destinationPath("rest-api/node-backend/model/Book.js")
    );
    this.fs.copyTpl(
      this.templatePath("rest-api/node-backend/dbmigration/migrate-mongo-config.js"),
      this.destinationPath("rest-api/node-backend/dbmigration/migrate-mongo-config.js")
    );
    this.fs.copyTpl(
      this.templatePath("rest-api/node-backend/dbmigration/migrate.js"),
      this.destinationPath("rest-api/node-backend/dbmigration/migrate.js")
    );
    this.fs.copyTpl(
      this.templatePath("rest-api/node-backend/dbmigration/migrations/20231214104401-books_migration.js"),
      this.destinationPath("rest-api/node-backend/dbmigration/migrations/20231214104401-books_migration.js")
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
    this.fs.copyTpl(
      this.templatePath("rest-api/keycloak-config.js"),
      this.destinationPath("rest-api/keycloak-config.js"),
      options
    );
    this.fs.copyTpl(
      this.templatePath("rest-api/package-lock.json"),
      this.destinationPath("rest-api/package-lock.json")
    );
    this.fs.copyTpl(
      this.templatePath("rest-api/package.json"),
      this.destinationPath("rest-api/package.json"),
      options
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
      this.destinationPath("bookshop/package.json"),
      options
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
      this.templatePath("bookshop/src/app/navbar"),
      this.destinationPath("bookshop/src/app/navbar")
    );

    this.fs.copyTpl(
      this.templatePath("bookshop/src/app/auth/auth-config.module.ts"),
      this.destinationPath("bookshop/src/app/auth/auth-config.module.ts")
    );
    
    this.fs.copyTpl(
      this.templatePath("bookshop/src/app/auth/auth-guard.module.ts"),
      this.destinationPath("bookshop/src/app/auth/auth-guard.module.ts")
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
