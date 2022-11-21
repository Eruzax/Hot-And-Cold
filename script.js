function initialize()
{
    add1 = document.getElementById("add1");
    add5 = document.getElementById("add5");
    add10 = document.getElementById("add10");
    add25 = document.getElementById("add25");
    sub1 = document.getElementById("sub1");
    sub5 = document.getElementById("sub5");
    sub10 = document.getElementById("sub10");
    sub25 = document.getElementById("sub25");
    commit = document.getElementById("commit");
    reset = document.getElementById("reset");
    guess = 5;
    currentGuess = 50;
    numLog = {};
    responseLog = {};
    randNum = Math.random() * 100 + 1;
    responseLog.push("Start");
    numLog.push(currentGuess);
    display();
}

function play()
{
    if (guess != 0)
        {
            if (Math.abs(guess - num == 5))
            {
                responseLog.push("Very Hot");
            }
            else if (Math.abs(guess - num) > 5 && Math.abs(guess - num) < 9 )
            {
                responseLog.push("Hot");
                guess--;
            }
            else if (Math.abs(guess - num) > 8 && Math.abs(guess - num) < 16 )
            {
                responseLog.push("Very Warm");
                guess--;
            }
            else if (Math.abs(guess - num) > 15 && Math.abs(guess - num) < 21 )
            {
                responseLog.push("Warm");
                guess--;
            }
            else if (Math.abs(guess - num) > 20 && Math.abs(guess - num) < 31 )
            {
                responseLog.push("Cool");
                guess--;
            }
            else if (Math.abs(guess - num) > 30 && Math.abs(guess - num) < 41 )
            {
                responseLog.push("Very Cool");
                guess--;
            }
            else if (Math.abs(guess - num) > 40 && Math.abs(guess - num) < 56 )
            {
                responseLog.push("Cold");
                guess--;
            }
            else if (Math.abs(guess - num) > 55)
            {
                responseLog.push("Very Cold");
                guess--;
            }
            else if (currentGuess == randNum)
            {
                responseLog.push("You Guessed The Correct Number");
                guess--;
            }
        }
        else
        {
            responseLog.push("Game Over")
        }
    display();
}

function display()
{
    document.getElementById("numberLog").innerHTML = numLog;
    numLog.array.forEach(element => {
        let li = document.createElement("li");
        li.innerText = element;
        document.getElementById("numberLog").appendChild(li);
    });

    document.getElementById("response").innerHTML = responseLog;
    responseLog.array.forEach(element => {
        let li = document.createElement("li");
        li.innerText = element;
        document.getElementById("response").appendChild(li);
    });
    document.getElementById("myGuess").innerHTML = currentGuess;
    document.getElementById("guesses").innerHTML = guess;
}

function add1()
{
    if (currentGuess++ < 101)
    {
        currentGuess++;
    }
    display();
}

function add5()
{
    if (currentGuess+= 5 < 101)
    {
        currentGuess+= 5;
    }
    display();
}
function add10()
{
    if (currentGuess+= 10 < 101)
    {
        currentGuess+=10;
    }
    display();
}
function add25()
{
    if (currentGuess+= 25 < 101)
    {
        currentGuess+= 25;
    }
    display();
}

function subtract1()
{
    if (currentGuess-- > 0)
    {
        currentGuess--;
    }
    display();
}
function subtract5()
{
    if (currentGuess-= 5 > 0)
    {
        currentGuess-= 5;
    }
    display();
}
function subtract10()
{
    if (currentGuess-=10 > 0)
    {
        currentGuess-= 10;
    }
    display();
}
function subtract25()
{
    if (currentGuess-=25 > 0)
    {
        currentGuess-= 25;
    }
    display();
}