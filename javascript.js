let k = document.getElementById("id3");
let score = 0;
let z = 0;
let start;
let J = 0;
let time = document.querySelector("#id14");
let feed = document.getElementById("feedback");
let feedbox = document.getElementById("feedbox");
time.innerHTML = "30:00";
time.style.display = "none";
let questions = ["What type of a language is HTML?"
    , "What should be the first tag in any HTML Document?"
    , "What tag is used to display a picture in a HTML page?"
    , "HTML are web pages read and rendered by?"
    , "What is the correct HTML tag for inserting a line break?"
    , "What is the correct HTML for making a hyperlink?"
    , "HTML documents are saved in"
    , "Which tag creates a check box for a form in HTML?"
    , "Choose the correct HTML tag for the smallest size heading?"
    , "How can we define a Video Tag in HTML 5?"
    , "Inside which HTML element do we put the JavaScript?"
    , "What is the correct JavaScript syntax to change the content of the HTML element below?"
    , "Where is the correct place to insert a JavaScript?"
    , "How do you create a function in JavaScript?"
    , "How to write an \'if\' statement in JavaScript?"
    , "How can you add a comment in a JavaScript?"
    , "What is the correct way to write a JavaScript array?"
    , "What is the correct JavaScript syntax for opening a new window called \"w2\" ?"
    , "How do you declare a JavaScript variable?"
    , "Is JavaScript case-sensitive?"];
    let str1 = `<!doctype html>`;
let corroptions = [
    "Markup Language", str1, "Img", "Web Browser", " <br>", 
    "<a href='www.google.com'>Google</a>", "ASCII text", "<input type='checkbox'>", "<h6>", "<video src=\"URL\"></video>"
    , "<script>", " document.getElementById(\"p\").innerHTML = \"Hello World!\";", "Both the <head> section and the <body> section are correct"
    , "function myFunction()",  "if (i == 5)", "//This is a comment", "var colors = [\"red\", \"green\", \"blue\"]"
    , "w2 = window.open(\"http://www.w3schools.com\");", "var carName;", " True"];
let othoptions1 = [
    "Scripting Language", " <html>", " Picture", " Web Server", " <break>", 
    " <a>www.google.com</a>", " Binary format", " <checkbox>", " <h1>", "<video>URL</video>"
    , " <body>", " document.getElement(\"p\").innerHTML = \"Hello World!\";", " The <body> section", " function:myFunction()"
, " if i = 5 then", " <!--This is a comment-->", " var colors = (1:\"red\", 2:\"green\", 3:\"blue\")"
, " w2 = window.new(\"http://www.w3schools.com\");", " variable carName;", " False"];
let othoptions2 = [
    "Programming Language", " <head>", " Image", " Web Client", " <lb>", 
    " <a name='www.google.com'>Google.com</a>", " Compressed format", " <check>", " <h7>", "<video src='URL'></video>"
 , " <title>", " document.getElementByName(\"p\").innerHTML = \"Hello World!\";", " The <footer> section", " function = myFunction()"
, " if i == 5 then", "'This is a comment", " var colors = 1 = (\"red\"), 2 = (\"green\"), 3 = (\"blue\")",
" w2 = window.open(\"http://www.w3schools.com\", \"w2\");", " v carName;", "Both True and False"];
let othoptions3 = [
    "Network Language", " <title>", " Pic", " Web Crawler", " <linebreak>", 
    " <a href='www.google.com' name='Google'>Google</a>", " Unformatted text", " <checkboxes>", " <h8>", "<video>URL</video>"
, " <link>", " document.getElementByClass(\"p\").innerHTML = \"Hello World!\";", " The <header> section", " function_myFunction()"
, " if i = 5", " \"This is a comment\"", " var colors = (1:\"red\", 2:\"green\", 3:\"blue\")",
" w2 = window.open(\"http://www.w3schools.com\", \"_blank\");", " v=carName;", "None of the above"];
let feedmatter = [
    "HTML is a Markup Language", "The first tag in any HTML Document is <!doctype html>", "The tag used to display a picture in a HTML page is <img>", "HTML are web pages read and rendered by Web Browser", "The correct HTML tag for inserting a line break is <br>", "The correct HTML for making a hyperlink is <a href='www.google.com'>Google</a>", "HTML documents are saved in ASCII text", "The tag that creates a check box for a form in HTML is <input type='checkbox'>", "The correct HTML tag for the smallest size heading is <h6>", "The way to define a Video Tag in HTML 5 is <video src=\"URL\"></video>"
    , "The JavaScript is put inside the <script> element", "The correct JavaScript syntax to change the content of the HTML element below is document.getElementById(\"p\").innerHTML = \"Hello World!\"", "The correct place to insert a JavaScript is Both the <head> section and the <body> section are correct", "The way to create a function in JavaScript is function myFunction()", "The way to write an 'if' statement in JavaScript is if (i == 5)", "The way to add a comment in a JavaScript is //This is a comment", "The correct way to write a JavaScript array is var colors = [\"red\", \"green\", \"blue\"]", "The correct JavaScript syntax for opening a new window called \"w2\" is w2 = window.open(\"http://www.w3schools.com\");", "The way to declare a JavaScript variable is var carName;", "JavaScript is case-sensitive"];
let l = document.querySelectorAll(".class1");
let m = document.getElementById("id9");
let j = 0;
let key = [2, 1, 4, 3, 3, 3, 4, 4, 4, 1, 1, 2, 2, 2, 1, 3, 3, 4, 4, 2];
let selected = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let corrcount = 0;
let incorrcount = 0;
k.onclick = () => {
    Instructions();
}
let i = 0;
let a = document.getElementById("op1");
let b = document.getElementById("op2");
let c = document.getElementById("op3");
let d = document.getElementById("op4");
let e = document.getElementById("op5");
let count = 1;
let f = document.getElementById("id10");
let g = document.getElementById("id11");
let h = document.getElementById("id12");
let x = document.getElementById("id13");
function feedback(J, z) {
    if (J == 20) {
        f.textContent = "Submit";
        ending(z);
        return;
    }
    feedbox.style.display = "block";
    time.style.display = "none";
    feed.style.display = "none";
    a.style.display = "block";
    b.style.display = "block";
    c.style.display = "block";
    d.style.display = "block";
    e.style.display = "block";
    f.style.display = "block";
    g.style.display = "block";
    f.textContent = "Next";
    let que = `Question ${J + 1}`; 
   document.getElementById("id2").innerHTML = que;
   document.getElementById("id1").style.width = "295px";
   document.getElementById("id1").style.position = "absolute";
   document.getElementById("id1").style.left = "625px";
   document.getElementById("id1").style.top = "30px";
    b.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    c.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    d.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    e.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
   a.textContent = ques[J].question;
   b.textContent = ques[J].options[0];
   c.textContent = ques[J].options[1];
   d.textContent = ques[J].options[2];
   e.textContent = ques[J].options[3];
   feedbox.textContent = ques[J].feedmatter;
   if (selected[J] == key[J]) {
    if (selected[J] == 1) {
        b.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
    }
    else if (selected[J] == 2) {
        c.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
    }
    else if (selected[J] == 3) {
        d.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
    }
    else if (selected[J] == 4) {
        e.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
    }
   }
    else if (selected[J] != key[J] && selected[J] != 0) {
        if (selected[J] == 1) {
            b.style.boxShadow = "8px 8px 10px red, -8px -8px 10px red";
        }
        else if (selected[J] == 2) {
            c.style.boxShadow = "8px 8px 10px red, -8px -8px 10px red";
        }
        else if (selected[J] == 3) {
            d.style.boxShadow = "8px 8px 10px red, -8px -8px 10px red";
        }
        else if (selected[J] == 4) {
            e.style.boxShadow = "8px 8px 10px red, -8px -8px 10px red";
        }
        if (key[J] == 1) {
            b.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
        }
        else if (key[J] == 2) {
            c.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
        }
        else if (key[J] == 3) {
            d.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
        }
        else if (key[J] == 4) {
            e.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
        }
    }
    else if (selected[J] == 0) {
        if (key[J] == 1) {
            b.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
        }
        else if (key[J] == 2) {
            c.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
        }
        else if (key[J] == 3) {
            d.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
        }
        else if (key[J] == 4) {
            e.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
        }
    }
f.onclick = () => { 
    feedback(J+1, z);
}
g.onclick = () => {
    f.textContent = "Next";
    feedback(J-1, z);
}
}
function Process(j, count, corrcount, incorrcount, z) {
    let iter = 0;
    if (count == 1 || count == 0) {
        z = 0;
        f.textContent = "Next";
        score = 0;
        corrcount = 0;
        incorrcount = 0;
        selected.forEach((element) => {
            element = 0;
        }) 
    }
    let test;
    let verification = 0;
    if (count == 20) {
        f.textContent = "Submit";
    }
    if (count>20) {
    z = (corrcount * 4)+ (incorrcount * -1);
    ending(z);
    return;
    }
    if (selected[j] != 0) {
        if (selected[j] == 1) {
    b.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
    c.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    d.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    e.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
        }
        else if (selected[j] == 2) {
    b.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    c.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
    d.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    e.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
        }
        else if (selected[j] == 3) {
    b.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    c.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    d.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
    e.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
        }
        else if (selected[j] == 4) {
    b.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    c.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    d.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    e.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
        }
    }
    else if (selected[j] == 0) {
    b.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    c.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    d.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    e.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    }
    a.style.display = "block";
    b.style.display = "block";
    c.style.display = "block";
    d.style.display = "block";
    e.style.display = "block";
    f.style.display = "block";
    g.style.display = "block";
    h.style.display = "block";
    x.style.display = "none";
    
   let que = `Question ${j + 1}`; 
   document.getElementById("id2").innerHTML = que;
   a.textContent = ques[j].question;
   b.textContent = ques[j].options[0];
   c.textContent = ques[j].options[1];
   d.textContent = ques[j].options[2];
   e.textContent = ques[j].options[3];
   b.onclick = () => {
    iter++;
    b.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
    c.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    d.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    e.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    if (selected[j] != 0 && (selected[j] != key[j]) && (iter<=1)) {
        incorrcount--;
        selected[j] = 1;
    }
    else if (selected[j] != 0 && (selected[j] == key[j]) && (iter<=1)) {
        corrcount--;
        selected[j] = 1;
    }
    if (selected[j] == 0) {
        selected[j] = 1;
    }
   }
    c.onclick = () => {
        iter++;
    b.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    c.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
    d.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    e.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    if (selected[j] != 0 && (selected[j] != key[j]) && (iter<=1)) {
        incorrcount--;
        selected[j] = 2;
    }
    else if (selected[j] != 0 && (selected[j] == key[j]) && (iter<=1)) {
        corrcount--;
        selected[j] = 2;
    }
    if (selected[j] == 0) {
        selected[j] = 2;
    }
    }
    d.onclick = () => {
        iter++;
    b.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    c.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    d.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
    e.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    if (selected[j] != 0 && (selected[j] != key[j]) && (iter<=1)) {
        incorrcount--;
        selected[j] = 3;
    }
    else if (selected[j] != 0 && (selected[j] == key[j]) && (iter<=1)) {
        corrcount--;
        selected[j] = 3;
    }
    if (selected[j] == 0) {
        selected[j] = 3;
    }
    }
    e.onclick = () => {
        iter++;
    b.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    c.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    d.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    e.style.boxShadow = "8px 8px 10px green, -8px -8px 10px green";
    if (selected[j] != 0 && (selected[j] != key[j]) && (iter<=1)) {
        incorrcount--;
        selected[j] = 4;
    }
    else if (selected[j] != 0 && (selected[j] == key[j]) && (iter<=1)) {
        corrcount--;
        selected[j] = 4;
    }
    if (selected[j] == 0) {
        selected[j] = 4;
    }
    }
    
f.onclick = () => { 
    if (selected[j] == key[j]) {
        test = true;
       }
    else if (selected[j] != key[j] && (selected[j] != 0)) {
       test = false;
      }
    if (test == true) {
       corrcount++;
      }
    else if (test == false && (selected[j] != 0)) {
       incorrcount++;
      }
    Process(j+1, count+1, corrcount, incorrcount, z);
}
g.onclick = () => {
    f.textContent = "Next";
    Process(j-1, count-1, corrcount, incorrcount, z); 
}
h.onclick = () => {
    b.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    c.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    d.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    e.style.boxShadow = "3px 3px 10px blanchedalmond, -3px -3px 10px blanchedalmond";
    selected[j] = 0;
    iter = 0;
}
}
ending = (z) => {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    g.style.display = "none";
    h.style.display = "none";
    time.style.display = "none";
    feedbox.style.display = "none";
    document.getElementById("id1").style.position = "absolute";
    document.getElementById("id1").style.left = "500px";
    document.getElementById("id2").textContent = "Your Score is " + z + " out of 80";
    document.getElementById("id1").style.width = "580px";
    document.getElementById("id1").style.height = "80px";
    document.getElementById("id1").style.top = "200px";
    document.getElementById("id1").style.transition = "all 0.5s ease-in-out 0s";
    x.style.display = "block";
    feed.style.display = "block";
    x.onclick = () => {
        setTimeout(function() {
            location.reload();
        }, 30); // 
    }
    feed.onclick= () => {
        J=0;
        time.style.display = "none";
        clearInterval(start);
        feedback(J, z);
    }
}
function Instructions(z = 0) {
    time.style.display = "none";

    document.getElementById("welcome").style.display = "none";
    document.getElementById("id1").style.display = "block";
    document.getElementById("id2").innerHTML = "Instructions";
    document.getElementById("id1").style.width = "295px";
    document.getElementById("id1").style.position = "absolute";
    document.getElementById("id1").style.left = "625px";
    document.getElementById("id1").style.top = "30px";
    document.getElementById("id1").style.transition = "all 0.5s ease-in-out 0s";
    document.getElementById("id3").style.display = "none";
    
    x.style.display = "none";
     l.forEach(element => {
         element.style.display = "block";
         element.style.transition = "all 3s ease-in-out 0s";
     });
     m.style.display = "block";
    x.onclick = () => {
        inst2(z = 0);
    }
}
function inst2 (z = 0) {
    count = 1;
        Process(j=0, 1, 0, 0, z = 0);
        start = setInterval(countdownFunction, 1000);
        return;
}
m.onclick = () => {
    l.forEach(element => {
        element.style.display = "none";
    });
    document.getElementById("id9").style.display = "none";
    document.getElementById("op1").style.display = "block";
    document.getElementById("op2").style.display = "block";
    document.getElementById("op3").style.display = "block";
    document.getElementById("op4").style.display = "block";
    document.getElementById("op5").style.display = "block";
    Process(j, 1, 0, 0, 0);
    start = setInterval(countdownFunction, 1000);
}
let ques = [];
ques.length = 20;
ques[0] = {
    question: questions[i],
    options : [othoptions1[i], corroptions[i], othoptions3[i], othoptions2[i]]
    , feedmatter: feedmatter[i]
}
ques[1] = {
    question: questions[i + 1],
    options: [corroptions[i + 1], othoptions2[i + 1], othoptions3[i + 1], othoptions1[i + 1]],
    feedmatter: feedmatter[i + 1]
}
ques[2] = {
    question: questions[i + 2],
    options: [othoptions1[i + 2], othoptions2[i + 2], othoptions3[i + 2], corroptions[i + 2]],
    feedmatter: feedmatter[i + 2]
}
ques[3] = {
    question: questions[i + 3],
    options: [othoptions1[i + 3], othoptions2[i + 3], corroptions[i + 3], othoptions3[i + 3]],
    feedmatter: feedmatter[i + 3]
}
ques[4] = {
    question: questions[i + 4],
    options: [othoptions1[i + 4], othoptions2[i + 4], corroptions[i + 4], othoptions3[i + 4]],
    feedmatter: feedmatter[i + 4]
}
ques[5] = {
    question: questions[i + 5],
    options: [othoptions1[i + 5], othoptions2[i + 5], corroptions[i + 5], othoptions3[i + 5]],
    feedmatter: feedmatter[i + 5]
}
ques[6] = {
    question: questions[i + 6],
    options: [othoptions1[i + 6], othoptions2[i + 6], othoptions3[i + 6], corroptions[i + 6]],
    feedmatter: feedmatter[i + 6]
}
ques[7] = {
    question: questions[i + 7],
    options: [othoptions1[i + 7], othoptions2[i + 7], othoptions3[i + 7], corroptions[i + 7]],
    feedmatter: feedmatter[i + 7]
}
ques[8] = {
    question: questions[i + 8],
    options: [othoptions1[i + 8], othoptions2[i + 8], othoptions3[i + 8], corroptions[i + 8]],
    feedmatter: feedmatter[i + 8]
}
ques[9] = {
    question: questions[i + 9],
    options: [corroptions[i + 9], othoptions1[i + 9], othoptions2[i + 9], othoptions3[i + 9]],
    feedmatter: feedmatter[i + 9]
}
ques[10] = {
    question: questions[i + 10],
    options: [corroptions[i + 10], othoptions1[i + 10], othoptions2[i + 10],  othoptions3[i + 10]],
    feedmatter: feedmatter[i + 10]
}
ques[11] = {
    question: questions[i + 11],
    options: [othoptions1[i + 11], corroptions[i + 11], othoptions2[i + 11], othoptions3[i + 11]]
    , feedmatter: feedmatter[i + 11]
}
ques[12] = {
    question: questions[12],
    options: [othoptions1[i + 12], corroptions[i + 12], othoptions2[i + 12], othoptions3[i + 12]],
    feedmatter: feedmatter[i + 12]
    
}
ques[13] = {
    question: questions[i + 13],
    options: [othoptions1[i + 13], corroptions[i + 13], othoptions2[i + 13], othoptions3[i + 13]],
    feedmatter: feedmatter[i + 13]
}
ques[14] = {
    question: questions[i + 14],
    options: [corroptions[i + 14], othoptions1[i + 14], othoptions2[i + 14], othoptions3[i + 14]],
    feedmatter: feedmatter[i + 14]
}
ques[15] = {
    question: questions[i + 15],
    options: [othoptions1[i + 15], othoptions2[i + 15], corroptions[i + 15], othoptions3[i + 15]],
    feedmatter: feedmatter[i + 15]
}
ques[16] = {
    question: questions[i + 16],
    options: [othoptions1[i + 16], othoptions2[i + 16], corroptions[i + 16], othoptions3[i + 16]],
    feedmatter: feedmatter[i + 16]
}
ques[17] = {
    question: questions[i + 17],
    options: [othoptions1[i + 17], othoptions2[i + 17], othoptions3[i + 17], corroptions[i + 17]]
    , feedmatter: feedmatter[i + 17]
}
ques[18] = {
    question: questions[i + 18],
    options: [othoptions1[i + 18], othoptions2[i + 18], othoptions3[i + 18], corroptions[i + 18]]
    , feedmatter: feedmatter[i + 18]
}
ques[19] = {
    question: questions[i + 19],
    options: [othoptions1[i + 19], corroptions[i + 19], othoptions2[i + 19], othoptions3[i + 19]]
    , feedmatter: feedmatter[i + 19]
}
let min = 30;
let sec = 59;
let value; // Declare value variable outside

function countdownFunction() {   
    time.style.display = "block"; 
    document.querySelector("#id14").innerHTML = `${min-1}:${sec < 10 ? '0' : ''}${sec}`;
    sec--;
    if (sec < 0) {
        min--;
        sec = 59;
    }
    if (min < 0) {
        clearInterval(start);
        alert('Time is up!');
        z = (corrcount * 4)+ (incorrcount * -1);
        location.reload();
        ending(z);
        return;
    }
}






