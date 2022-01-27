 /* in this section event handlers are registered ,
   If you click on any of the elements in the starships-list (each of which is the name of one of the ships),
   the associated e_set function is called.*/
e=0;
document.getElementById("name0").onclick = e_set0;
document.getElementById("name1").onclick = e_set1;
document.getElementById("name2").onclick = e_set2;
document.getElementById("name3").onclick = e_set3;
document.getElementById("name4").onclick = e_set4;
document.getElementById("name5").onclick = e_set5;
document.getElementById("name6").onclick = e_set6;
document.getElementById("name7").onclick = e_set7;
document.getElementById("name8").onclick = e_set8;
document.getElementById("name9").onclick = e_set9;

/*in e_set functions,The value of the global variable e is set(Depending on which ship is clicked in the list)
 and the function getDetail() is called.*/
function e_set0(){
    e=0;
    getDetail();
}
function e_set1(){
    e=1;
    getDetail();
}
function e_set2(){
    e=2;
    getDetail();
}
function e_set3(){
    e=3;
    getDetail();
}
function e_set4(){
    e=4;
    getDetail();
}
function e_set5(){
    e=5;
    getDetail();
}
function e_set6(){
    e=6;
    getDetail();
}
function e_set7(){
    e=7;
    getDetail();
}
function e_set8(){
    e=8;
    getDetail();
}
function e_set9(){
    e=9;
    getDetail();
}
 /* In the getDetail function, a request is made to the given site,
 The information of all ships is then extracted from response.result as an array of elements in json format.
 Then, depending on which ship name is clicked, an element of this array is given as the input argument to showDetails.
 */
function getDetail() {
    fetch("https://swapi.dev/api/starships")
        .then((response) => response.json())
        .then((response) =>
            (response.results))
        .then(response => showDetails(response[e]))
    ;
}
 /*In showDetails func,The element taken from the getDetail function for the corresponding ship is used to display its information.
  The ship's information is represented by creating the li elements in an unordered list called details-list.
  For movies and pilots, a separate request to extract their name is given to the site and their names are listed.
 */
function showDetails(res){
    // document
    var name = JSON.stringify(res.name);
    document.getElementById("ship-name-h").textContent = name.substring(1,name.length-1);
    var data = eval(res)
    var detail_keys = ['model','manufacturer','cost_in_credits','length','max_atmosphering_speed','crew','passengers','cargo_capacity','consumables','hyperdrive_rating','MGLT','starship_class','pilots','films','created','edited','url']
    var k;
    var menu = document.getElementById("details-list");
    menu.innerHTML = '';
    for (k=0;k<detail_keys.length;k++){
        if(detail_keys[k] == 'films'||detail_keys[k] == 'pilots'){
            // var d = data[detail_keys[k]].split(",");
            var j;
            let li = document.createElement('li');
            li.textContent=detail_keys[k]+": ";
            li.style.marginLeft = '-10px';
            li.style.color= 'black';
            menu.appendChild(li);
            var ul = document.createElement('ul');
            for (j=0;j<data[detail_keys[k]].length;j++)
            {
                let li = document.createElement('li');
                if(detail_keys[k] == 'films'){
                    fetch(data[detail_keys[k]][j])
                        .then((response) => response.json())
                        .then((response) =>
                            li.textContent= JSON.stringify(response.title).substring(1,JSON.stringify(response.title).length-1) )
                    ;
                    ul.appendChild(li)
                }
                else {
                    fetch(data[detail_keys[k]][j])
                        .then((response) => response.json())
                        .then((response) =>
                            li.textContent= JSON.stringify(response.name).substring(1,JSON.stringify(response.name).length-1) )
                    ;
                    ul.appendChild(li)
                }

            }

            menu.appendChild(ul)
        }
        else {
            let li = document.createElement('li');
            li.textContent = detail_keys[k] +': '+data[detail_keys[k]];
            li.style.marginLeft = '-10px';
            li.style.color= 'black';
            menu.appendChild(li);
        }

    }

}
