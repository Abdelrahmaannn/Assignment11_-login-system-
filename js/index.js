var getStarted = document.querySelectorAll("button");

for(var i = 0 ; i <getStarted.length; i++)
{
    getStarted[i].addEventListener("click", function()
    {
        window.location.href = 'signUpPage.html';
    })
}