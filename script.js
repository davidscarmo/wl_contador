 var win = 0; 
 var lose = 0 ; 
 var games = 30;
 var gamesRText = "Partidas Restantes: ";
 var delLast = 0; // utilizada pra saber na hora de deletar qual foi o último a ser adicionado

 function placarInicial() //é chamado por meio de onload e insere a parcial das derrotas e da quantidade de partidas restantes
 {
    document.getElementById("wl-wins").innerHTML = "0" + win;
    document.getElementById("wl-loses").innerHTML = "0" + lose;
    document.getElementById("games-remaining").innerHTML = gamesRText + games;
    
 }

function addWin(result) //adiciona ao placar a atualização das vitórias 
{
    if(games != 0)
    {
        win += result; 
        showLoseWin();
        games -= 1;
        gamesRemaining();
        delLast = 0;
    }
    
}

function addLose(result)//adiciona ao placar a atualização das derrotas
{
    if(games != 0)
    {
        lose += result; 
        showLoseWin();
        games--;
        gamesRemaining();
        delLast = 1;
    }
}

function showLoseWin() // mostra as vitórias e derrotas parciais 
{
    if(win <= 9)
        document.getElementById("wl-wins").innerHTML = "0"+ win;
    else
        document.getElementById("wl-wins").innerHTML =  win; 

    if(lose <=9)
        document.getElementById("wl-loses").innerHTML = "0" + lose;
    else
        document.getElementById("wl-loses").innerHTML = lose;
}

function gamesRemaining() // função para mostrar a quantidade de partidas restantes
{
    document.getElementById("games-remaining").innerHTML =  gamesRText + games;
}

function deleteLast()//função utilizada para deletar o último vitória/derrota marcado 
{
    if(delLast == 0 && win > 0)
    {
        document.getElementById("wl-wins").innerHTML = win - 1 ;
        win--;
        games++;
        showLoseWin();
        gamesRemaining();
    }
    else if(delLast == 1 && lose > 0)
    {
        document.getElementById("wl-loses").innerHTML = lose - 1 ;
        lose--;
        games++;
        showLoseWin();
        gamesRemaining();
    }
    else
    {
        if(delLast == 1)
        {
            delLast = 0;
        }
        else
        {
            delLast = 1;
        }
    }
}

function reset() // função reseta os valores atuais para o valor inicial
{
    lose = 0; 
    win = 0;
    games = 30;
    showLoseWin();
    gamesRemaining();
}

