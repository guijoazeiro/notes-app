# Note-App
A simple Command Line based Note application built with Node.js. 

# Installation
Clone this repository to your local computer and follow the steps below:
```sh
$ cd notes-app
$ npm install
```

# Usage
Run the Following commands to perform different operations.
* Add New Note: You can add a new note by using <code>add</code> command. If any note with same title exist, it will print the message: <strong>"Please add a note with a different title!".</strong>

 <p>(Note: argumnets "title" and "body" must be passed)<p>
 

   ```
  $ node app.js add --title="New Note" --body="My new Note
  ```
 
 <p> The above command will give the following output:  <p>

```
New note added!
```
<hr>

* List all notes: You can list all Notes by using <code>list</code> command.

  ```
  $ node app.js list
  ```

 
 <p> The above command will give the following output:  <p>

```
Your notes...
------------------
New Note
```
<hr>

* Read Note: You can read a Note by using <code>read</code> command. If any note with same title exist, it will print it. Otherwise an error message will be printed.
    <p>(Note: argumnets "title"  must be passed)<p>

  ```
  $ node app.js read --title="Note" 
  ```

 <p> The above command will give the following output :  <p>

```
------------------
Title:  New Note
Body:  My new Note
```
<hr>

* Remove Note: You can remove a note by using <code>remove</code> command. If any note with same title exist, it will remove it. Otherwise an error message will be printed.
    <p>(Note: argumnets "title"  must be passed)<p>

  ```
  $ node app.js remove --title="Note" 
  ```

<p> The above command will give the following output:  <p>

```
$ node app.js remove -t="Note"
Note Removed!

```
<hr>

* Show help: You can pass <code>help</code> argument to see all the commands with their description.
  
```
  $ node app.js --help
  app.js [command]

  Commands:
    app.js add     Add new note
    app.js list    List all Notes
    app.js read    Read a note
    app.js remove  Remove a note

  Options:
    --version  Show version number                                       [boolean]
    --help     Show help                                                 [boolean]
  ```

<p> You can also get details of an individual command </p>

  ```
  $ node app.js add help
  app.js add

  add new note

  Options:
    --version    Show version number                                     [boolean]
    --help       Show help                                               [boolean]
    --title      Title of Note                                          [required]
    --body       Body of Note                                           [required]
 
  ```
  <hr>
  
# Requirements

* Node.js
* yargs
* chalk
<hr>




