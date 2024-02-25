# Lisp2JS
Lisp2JS is a CLI compiler tool that converts Lisp-like code statements to JS code statements.

It is based on Jamie Kyle's "The Super Tiny Compiler". The Super Tiny Compiler is a simple compiler written in Javascript.

## Compilation Process
Most compilers break down into three primary stages: Parsing, Transformation, and Code Generation
1. *Parsing* is taking raw code and turning it into a more abstract representation of the code.
2. *Transformation* takes this abstract representation and manipulates it to do whatever the compiler wants.
3. *Code Generation* takes the transformed representation of the code and turns it into new code.

### Parsing
Parsing typically gets broken down into two phases: Lexical Analysis and Syntactic Analysis.
1. *Lexical Analysis*
   It takes the raw code and splits it apart into these things called tokens by a thing called a tokenizer (or lexer).
   Tokens are an array of tiny little objects that describe an isolated piece of the syntax. They could be numbers, labels, punctuation, operators, whatever.
   
3. *Syntactic Analysis*
   It takes the tokens and reformats them into a representation that describes each part of the syntax and their relation to one another. This is known as an intermediate representation or Abstract Syntax Tree.
   An Abstract Syntax Tree, or AST for short, is a deeply nested object that represents code in a way that is both easy to work with and tells us a lot of information.

### Transformation
The next type of stage for a compiler is transformation. Again, this just takes the AST from the last step and makes changes to it. It can manipulate the AST in the same language or it can be translated into an entirely new language.

### Code Generation
 The final phase of a compiler is code generation. Sometimes compilers will do things that overlap with transformation, but for the most part code generation just means taking our AST and string-ify code back out.
 
 Code generators work in several different ways, some compilers will reuse the tokens from earlier, and others will have created a separate representation of the code so that they can print nodes linearly, but from what I can tell most will use the same AST we just created, which is what we’re going to focus on.
 Effectively our code generator will know how to “print” all of the different node types of the AST, and it will recursively call itself to print nested nodes until everything is printed into one long string of code.

 ## Steps to run 
 1. Clone the repository
 2. Open the terminal and run `npm start` to run the CLI tool

NOTE:- `node` should be installed to successfully run the tool.
