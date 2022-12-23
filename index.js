let homeId = document.getElementById("home");
let guestId = document.getElementById("guest");
let hvalue = 0;
let gvalue = 0;

function home1() 
{
    hvalue += 1;
    homeId.textContent = hvalue; 
}
function home2()
{
    hvalue += 2;
    homeId.textContent = hvalue;
}
function home3()
{
    hvalue += 3;
    homeId.textContent = hvalue;
}

function guest1() 
{
    gvalue += 1;
    guestId.textContent = gvalue;
}
function guest2()
{
    gvalue += 2;
    guestId.textContent = gvalue;
}
function guest3()
{
    gvalue += 3;
    guestId.textContent = gvalue;
}

function reset() 
{
    hvalue = 0;
    gvalue = 0;
    homeId.textContent = 0;
    guestId.textContent = 0;
}


