function SomeDeleteRowFunction() {
    let td = event.target.parentNode; 
    let tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}
const table=document.getElementById("tablebody")
const addTrack=document.getElementById('addtrackbtton')
function addNewTrack(){
    const artist=document.getElementById('artist')
    let newArtist=artist.value;
    const tittle=document.getElementById('tittle')
    let newTittle=tittle.value;
    const track=document.getElementById('track')
    let newTrack=track.value;
    const duration=document.getElementById('durarion')
    let newDuration=duration.value;
    table.innerHTML += `
    <tr>
    <td>1</td>
    <td>${newArtist}</td>
    <td>${newTittle}</td>
    <td>${newTrack}</td>
    <td>${newDuration}</td>
    <td><button type="button" class="btn btn-dark" onclick="SomeDeleteRowFunction()">Delete</button></td>
  </tr>`
}
addTrack.addEventListener('click',addNewTrack)