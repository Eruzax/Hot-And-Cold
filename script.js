function initialize()
{
    cGuess = document.getElementById("myGuess");
    currentGuess = 50;

    guesses = 5;
    guessesLeft = document.getElementById("guesses");

    num = Math.floor(Math.random() * 100) + 1;

    responses = document.getElementById("responseLog");
    res = "";

    numbers = document.getElementById("numberLog");
    nums = "50";

    display();
}

function play()
{
    if (guesses != 0)
        {
            if (currentGuess == num)
            {
                nums += " " + currentGuess;
                res += " You Guessed The Correct Number";
            }
            else if (Math.abs(currentGuess - num) <= 5)
            {
                res +=" | Very Hot";
                nums += " " + currentGuess;
            }
            else if (Math.abs(currentGuess - num) > 5 && Math.abs(currentGuess - num) < 9 )
            {
                res += " | Hot";
                nums += " " + currentGuess;
                guesses--;
            }
            else if (Math.abs(currentGuess - num) > 8 && Math.abs(currentGuess - num) < 16 )
            {
                res += " | Very Warm";
                nums += " " + currentGuess;
                guesses--;
            }
            else if (Math.abs(currentGuess - num) > 15 && Math.abs(currentGuess - num) < 21 )
            {
                res += " | Warm";
                nums += " " + currentGuess;
                guesses--;
            }
            else if (Math.abs(currentGuess - num) > 20 && Math.abs(currentGuess- num) < 31 )
            {
                res += " | Cool";
                nums += " " + currentGuess;
                guesses--;
            }
            else if (Math.abs(currentGuess - num) > 30 && Math.abs(currentGuess - num) < 41 )
            {
                res += " | Very Cool";
                nums += " " + currentGuess;
                guesses--;
            }
            else if (Math.abs(currentGuess - num) > 40 && Math.abs(currentGuess - num) < 56 )
            {
                res +=" | Cold";
                nums += " " + currentGuess;
                guesses--;
            }
            else if (Math.abs(currentGuess - num) > 55)
            {
                res += " | Very Cold";
                nums += " " + currentGuess;
                guesses--;
            }
        }
    display();
}

function display()
{
    cGuess.innerHTML = currentGuess;
    guessesLeft.innerHTML = guesses;
    responses.innerHTML = res;
    numbers.innerHTML = nums;
    if (guesses == 0)
    {
        res += " | Game Over";
    }
}

function increment(num)
{
    if (num < 0)
    {
        if ((currentGuess + num) > 0)
        {
            currentGuess += num;
        }
    }
    else if (num > 0)
    {
        if((currentGuess + num) < 101)
        {
            currentGuess += num;
        }
    }
    display();
}