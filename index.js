const fs = require("fs");
const { exec } = require("child_process");

fs.mkdir("./newproject", err => {
  if (err) console.log(err);
  else {
    console.log("made a /newproject folder");
    fs.writeFile(
      "./newproject/index.js",
      "// opening the file with a comment",
      err => {
        if (err) console.log(err);
        console.log("made index.js");
      }
    );
    fs.writeFile("./newproject/README.md", "### README FILE ###", err => {
      if (err) console.log(err);
      else {
        console.log("made README.md");
      }
    });
    fs.writeFile("./newproject/.gitignore", "", err => {
      if (err) console.log(err);
      else {
        console.log("made .gitignore");
      }
    });
    fs.writeFile("./newproject/.eslintrc.json", "", err => {
      if (err) console.log(err);
      else {
        console.log("made .eslintrc.json");
      }
    });
    fs.mkdir("./newproject/spec", err => {
      if (err) console.log(err);
      else {
        console.log("made a /newproject/spec folder");
        fs.writeFile(
          "./newproject/spec/index.spec.js",
          "// this will be for testing",
          err => {
            if (err) console.log(err);
            else {
              console.log("made index.spec.js");
            }
          }
        );
      }
    });
    exec("npm init -y", { cwd: "./newproject" }, (err, stdout, stderr) => {
      if (err) console.log(err);
      console.log("npm init complete");
    });
    exec("git init", { cwd: "./newproject" }, (err, stdout, stderr) => {
      if (err) console.log(err);
      console.log("git init complete");
    });
  }
});
