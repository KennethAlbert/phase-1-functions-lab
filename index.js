// Code your solution in this file!
function distanceFromHqInBlocks(value){
   value=value-42;
   return Math.abs(value);
  }

function distanceFromHqInFeet(value) {
  const feet = distanceFromHqInBlocks(value)*264;
  return feet;
 }

 function distanceTravelledInFeet(start, destination) {
   return distanceFromHqInFeet(destination)-distanceFromHqInFeet(start);

 }

function calculatesFarePrice(start, destination){
    let feet=distanceTravelledInFeet(start, destination);

 if(feet<=400){
    return 0;
 }
 else if(feet>400 &&feet<2000)
 {
    return ((feet-400)*2)/100;
 }
 else if ( feet>2000 &&  feet<=2500){
    return  25;
 }
 else if (feet>2500){
    return 'cannot travel that far';
 }
 }
 
 
    
   
  