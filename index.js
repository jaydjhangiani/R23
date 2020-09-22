
var music = new Audio();

function playAudio(url) {

    music.pause();
    music = new Audio(url);
    music.play();

}

function stopmusic() {
    music.pause();
}


function answer() {
    event.preventDefault()
    let score = 0;
    let a1 = document.getElementById('ans1').value
    let ar1 = (a1.toUpperCase()).split(',')
    ar1.sort()
    console.log(ar1)

    let far1 = ['DELUSION', 'DENIAL', 'DEPRESSION']

    if (JSON.stringify(ar1) == JSON.stringify(far1)) {
        score += 1
        console.log(score)
    }
    console.log(score)
    let a2 = (document.getElementById('ans2').value).toUpperCase()
    console.log(a2)
    let far2 = 'KAREENA VIRUS'
    if (a2 === far2) {
        score += 1
        console.log(score)
    }

    let a3 = (document.getElementById('ans3').value).toUpperCase()
    console.log(a3)
    let far3 = 'LUCY'
    if (a3 === far3) {
        score += 1
        console.log(score)
    }

    let a4 = (document.getElementById('ans4').value).toUpperCase()
    console.log(a4)
    let far4 = 'ANIMAL CROSSING'
    if (a4 === far4) {
        score += 1
        console.log(score)
    }

    let a5 = (document.getElementById('ans5').value).toUpperCase()
    console.log(a5)
    let far5 = 'RYAN MAN'
    if (a5 === far5) {
        score += 1
        console.log(score)
    }

    let a6 = (document.getElementById('ans6').value).toUpperCase()
    console.log(a6)
    let far6 = 'PODCAST'
    if (a6 === far6) {
        score += 1
        console.log(score)
    }

    let a7 = (document.getElementById('ans7').value).toUpperCase()
    console.log(a7)
    let far7 = 'KAREENA'
    if (a7 === far7) {
        score += 1
        console.log(score)
    }

    let a8 = (document.getElementById('ans8').value).toUpperCase()
    console.log(a8)
    let far8 = 'SNOORPAAL'
    if (a8 === far8) {
        score += 1
        console.log(score)
    }

    let a9 = (document.getElementById('ans9').value).toUpperCase()
    console.log(a9)
    let far9 = 'PIGEON STORY'
    if (a9 === far9) {
        score += 1
        console.log(score)
    }

    let a10 = (document.getElementById('ans10').value).toUpperCase()
    console.log(a10)
    let far10 = 'JEWTUBE'
    if (a10 === far10) {
        score += 1
        console.log(score)
    }

    let final = document.querySelector('#final')

    if (score >= 8) {
        final.textContent = ''
    }
    else {
        final.textContent = ''
    }




}

//if the score is greater than 8 then message
//else no message