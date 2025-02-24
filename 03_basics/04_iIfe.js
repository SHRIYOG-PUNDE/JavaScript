// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

(function chai(name)
{
    console.log(`welcome to my dark side ${name}`);
}) ("Shriyog"); // semicolon is necessary here

( (name) => {
    console.log(`gendu manus ${name}`);
}) ("Lambda");