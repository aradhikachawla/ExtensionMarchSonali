// Future JavaScript will go here


console.log('Hi Popup');
let urls = []
//document.addEventListener('DOMContentLoaded', function() {
  window.onload =  launch();
//}, false);

//document.addEventListener('DOMContentLoaded', function() {
   download_csv_file();
//}, false);

console.log('second Hi Popup');





 //function to grab the urn needed from web 

 //window.addEventListener ("load", launch, true);

 
function launch() {
console.log('Hi Popup Launch');
//setTimeout(function(){ console.log('now start'); }, 11000);
console.log('Hi Popup Launch');

document.querySelectorAll('[data-urn]').forEach(elem=>urls.push('https://www.linkedin.com/feed/update/'+elem.getAttribute("data-urn")));
console.log(urls);
}

 //create a user-defined function to download CSV file 


 //create a user-defined function to download CSV file 
 function download_csv_file() {
  /*  var csvFileData = [
        ['Alan Walker', 'Singer'],
        ['Cristiano Ronaldo', 'Footballer'],
        ['Saina Nehwal', 'Badminton Player'],
        ['Arijit Singh', 'Singer'],
        ['Terence Lewis', 'Dancer']
     ];*/
    console.log(urls);

     //define the heading for each row of the data
     var csv = 'Name\n';


     //merge the data with CSV 
     urls.forEach(function(row) {
          //   csv += row.join(',');\
             csv=csv+row;
             csv += "\n";
     });

  
     //display the created CSV data on the web browser 
     document.write(csv);


     var hiddenElement = document.createElement('a');
     hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
     //hiddenElement.target = '_blank';
    

     //provide the name for the CSV file to be downloaded
     hiddenElement.download = 'SalesflagsPost.csv';
     document.body.appendChild(hiddenElement);

     hiddenElement.click();
 }