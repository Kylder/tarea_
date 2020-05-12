var a, b, c = 1;
var res = document.getElementById("result");

function calcular()
{
x = parseInt(document.getElementById("x").value);
y = parseInt(document.getElementById("y").value);

if (x < 16) 
{
    res.value = "Usted no puede trabajar"
} else {
    if (15 < x & x < 19) 
    {
        x = 1;
    } else 
    {
        if (18 < x & x < 51) 
        {
            x = 1.05;
        }
        else {
            if (50 < x & x < 61) 
            {
                x = 1.1;
            }
            else {
                if (60 < x) 
                {
                    x = 1.15
                }
            }

        }

        x = x * y;
        res.value = x;
    }

}
}
