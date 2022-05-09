function rpsGame(yourChoice)
{
var humanChoice, botChoice;
humanChoice=yourChoice.id;
//console.log('human choice:' , humanChoice);
botChoice=numberToChoice(randbot());
//console.log('computer choice : ',botChoice);
var results=decideWinner(humanChoice,botChoice);
//console.log(results);
message=finalMessage(results);
console.log(message);
rpsFrontEnd(yourChoice.id, botChoice, message);
} 


function randbot()
{return Math.floor(Math.random()*3);}

function numberToChoice(number)
{ return ['rock','paper','scissors'][number];}


function decideWinner(yourChoice,botChoice)
{  var rpsDatabase=
    {
   'rock': {'scissors':1, 'rock':0.5, 'paper':0},
   'paper': {'rock':1, 'paper':0.5, 'scissors':0},
   'scissors': {'paper':1, 'scissors':0.5, 'rock':0}
    }

    var yourScore= rpsDatabase[yourChoice][botChoice];
    var ComputerScore= rpsDatabase[botChoice][yourChoice];
    return [yourScore,ComputerScore];}

    function finalMessage([yourScore,computerScore])
    { if(yourScore===0){
        return {'message': 'you lost!','color':'red'};}
      else if(yourScore===0.5)
      {return {'message':'you tied','color':'yellow'}}
      else
      return {'message':'you won ','color':'green'}
    }
    
function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage)
{
 
  var imageDB={
    'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissors':document.getElementById('scissors').src
}
    
document.getElementById('rock').remove();
document.getElementById('paper').remove();
document.getElementById('scissors').remove();
var humanDiv=document.createElement('div');
var botDiv=document.createElement('div');
var MessageDiv=document.createElement('div');

humanDiv.innerHTML="<img src='"+imageDB[humanImageChoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,13)'>";
MessageDiv.innerHTML="<h1 style='color:"+finalMessage['color']+"; font-size: 60px; padding: 30px; '>"+finalMessage['message']+"</h1>";
botDiv.innerHTML="<img src='"+imageDB[botImageChoice]+"' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1)'>";

document.getElementById('flex-generator').appendChild(humanDiv); 
document.getElementById('flex-generator').appendChild(MessageDiv);
document.getElementById('flex-generator').appendChild(botDiv);

}

    


  