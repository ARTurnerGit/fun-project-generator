# Project Generator

For making your project generator make sure you think carefully about the order in which things need to happen. Some useful resources below:

## fs

Node's in built module for dealing with the [file system](https://nodejs.org/api/fs.html) comes with several useful methods. Explore the docs and look for any that would be useful in making your project. In particular have a look at:

- [readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)
- [writeFile](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback)
- [readDir](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)
- [mkDir](https://nodejs.org/api/fs.html#fs_fs_mkdir_path_options_callback)

There are several other methods that could prove useful but these are a good start.

## child processes

When setting up a project we would write some of the files ourselves but we would also use terminal commands to do a lot of boilerplate for us, for example `npm init`, `git init`, `npm install` etc...

In order to run terminal commands in javascript node provides us with a [child process module](https://nodejs.org/api/child_process.html)

This can be used to spawn a shell as a child-process which will accept terminal commands as a string. In particular exec, (short for execute) can be used to run commands.

- [exec](https://nodejs.org/api/child_process.html#child_process_child_process_exec_command_options_callback)

**note** because the command is ran in a child process any output that would normally be logged happens in the child shell, not the parent you are running in. To see the results of the command, the callback will be invoked with the stdout of the child.

```js
const { exec } = require("child_process");

exec("echo hello world", (err, stdout, stderr) => {
  console.log(stdout);
});
```

## binaries with npm

To run our project generator from our terminal we will use npm to create a package we can install globally.

We can them run it in a similar manner to `mocha` or `nchelp`.

When we install a package npm will add some commands to our terminal. We can define these commands using our `package.json` and a key of `"bin"`

https://docs.npmjs.com/files/package.json#bin

```json
"bin": {
  "sayHello": "sayHello.js"
},
```

sayHello.js

```js
#! /usr/bin/env node

console.log("hi");
```

**note** As per the docs we have to add a [shebang](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) to the top of our file to tell our terminal which program to run the file with. In this case we are pointing to our node command.

If we run `npm i -g` npm will install the package globally, and make the sayHello command available in our terminal.
