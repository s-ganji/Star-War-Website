// In this function, with fetch API we make a request to the site that holds the name and information of the starships.
// Then we get the answer in json format and we give the value of response.result as input to showList function.
function getlist() {
    fetch("https://swapi.dev/api/starships")
        .then((response) => response.json())
        .then((response) =>
            (response.results))
        .then(response => showList(response))
    ;
}
/* In this function, the names of the ships, each in the value field with the 'name' key in the elements of the response array,are extracted
 (Each elements of the response array contains a json value containing the information of one of the ships.)
 and they are placed in textcontent of each li elements in html in starships-list unordered list.
 */
function showList(response){
    var i;
    for (i=0;i<10;i++)
    {
        let name = JSON.stringify(response[i].name);
        document.getElementById("name"+i).textContent = name.substring(1,name.length-1);
        document.getElementById("name"+i).style.marginLeft = '-10px';
    }
}
getlist();
