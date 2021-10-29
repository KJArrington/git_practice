function calcTime(seconds)
{
    let timerMinutes = Math.floor(seconds / 60);
    let timerSeconds = seconds % 60;

    if (timerMinutes.toString().length === 1)
    {
        timerMinutes = '0' + ':' + timerSeconds;
    }
    
    return timerMinutes + ':' timerSeconds;
}
