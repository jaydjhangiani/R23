
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

    let f1 = document.querySelector('#f1')
    let f2 = document.querySelector('#f2')
    let f3 = document.querySelector('#f3')
    let f4 = document.querySelector('#f4')
    let f5 = document.querySelector('#f5')
    let f6 = document.querySelector('#f6')
    let f7 = document.querySelector('#f7')

    if (score > 7) {
        f1.textContent = "If you’ve made it till here, that means you’ve successfully answered at least 8 of those questions correctly and I really did NAZI that coming :O. I’m never gonna acknowledge you as a fellow Libran, (because September librans are just fake, wannabe librans) but I can acknowledge the fact that you were born. 23 years ago. On this date. Sooo Happy Birthday boi! ❤️❤️❤️ 6 months ago, when I’d texted you after all that time, never did I think it’d lead to you asking me out on a date, which would actually end up happening on your birthday. It’s funny because we met on bumble but were still so clueless about the other‘s feelings throughout. It’s pretty bizarre (in a good way) how everything has been since. "
        f2.textContent = "I always thought you were fun to talk to, but it’s only in the last couple of months that I realised the extent of it. We’ve spent SO much time just doing these silly activities with each other, which btw, I’ve always enjoyed to bits. Starting right from Richard McLean Smith, my man!! The podcast days were OG af. Listening to them and discussing the episodes after, forming conspiracies and trying to make sense out of the ‘unexplained’ (if one of us didn’t accidentally doze off because of how l calming his voice was xD) has got to be one of the highlights of the last couple of months. "
        f3.textContent = "And then ofcourse were the animal-crossing days!! I miss my best friend Bojack so much man. I maybe also miss, you entering chutiya city wearing the most absurd outfits known to animalkind, whacking my head with a shovel and running away. Ironically, it was around the same time I had to chill in my parents’ room till morning everyday, while they slept in mine because their AC was spoilt, and there you were, accompanying me while I fucked my sleep schedule up even more. How were we deranged enough to go to bed around 10am everyday?? WTF KINDA DRUGS WERE WE ON???? And how on earth would you manage to work efficiently every single day being THAT level of sleep-deprived???? This should actually make it to the podcast because it’s always gonna be an unexplained mystery to me. "
        f4.textContent = "Not to forget, that’s when the whole nibbi ordeal started too. The denial, depression and delusion day was definitely one of the most entertainingly annoying days but you also got perpetual content to annoy me with so it’s always going to be bittersweet for me 😡"
        f5.textContent = "And then, after animal crossing ofc were the until dawn and Erica days. Call us tech geniuses because we figured out how to play together on your ps4 without me even needing one and I think that was insanely cool. Also, probably never gonna let you forget the time you said you thought I was cool because I’d play video games with you and even watch you play and you didn’t know any other girl who’d do the same hehe. "
        f6.textContent = "And then came the time you FINALLY told me that you were into me. That was a pretty cute conversation albeit, it took us a WHILE to get there 😂. I’m beginning to realise all good things have started because of me. Like the hitting on each other conversation AND you asking me out on this date which you probably wouldn’t have done, had I not sent an email first. Man it’s no wonder I’ve had severe pain in my back the last couple of days. It’s cause I’m sore carrying all this weight on my shoulders whewww. Hehe I’m just kidding (or am I?). "
        f7.textContent = "Lastly, Happy Birthday Ryan!! Wishing for you a life that’s filled with unlimited chicken lollipops, dark memes and doggus, always ❤️❤️❤️ (Right after I go apply for the job you have since I’m a much better coder than you now :P)"
    }
    else {
        f7.textContent = "Oh damn, if it ain’t the loser! Welcome, you lil shit. You clearly don’t deserve the message if you’re here. I mean, how daft does a person even have to be to get such easy questions wrong??? I’ll tell you! Ryan-level daft and that’s a whole new level people can only aspire of being <3"
    }




}

//if the score is greater than 8 then message
//else no message
