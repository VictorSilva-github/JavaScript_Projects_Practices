
function verify() {
    // window.alert('working');
    let date = new Date();
    let thisYear = date.getFullYear();
    let formYear = document.getElementById('txtyear');
    let res = document.querySelector('div#result');
    let imgCenter = document.querySelector('div#imgCenter')
    let madeInJS = document.querySelector('.MadeInJS');
    let deadPeople = document.querySelector('.deadPerson')

    // VERIFT THE LENGTH AND THE YEAR 
    // IF IT IS > CURRENT YEAR ERRO!

    if (formYear.value.length == 0 || formYear.value > thisYear) {
        window.alert('[ ERROR! ] Try again.');

    // IF IT IS NOT TRUE ABOVE THEN THIS 'ELSE' WILL TRIGGERED
    } else {
        let fSex = document.getElementsByName('radioSex');
        let yourAge = thisYear - Number(formYear.value);
        // res.innerHTML = `Your age is: ${yourAge}`
        let img = document.getElementById('addImg');
        let gender = '';

        //  CHECKING SEX MAN AND AGES 
        if (fSex[0].checked) {
            deadPeople.innerHTML = '';
            img.src = '';
            gender = 'Man'
            if (yourAge >= 0 && yourAge < 12) {
                //kid
                img.src = 'img/kid-boy.png';

            } else if (yourAge <= 45) {
                //youth - adult
               
                img.src = 'img/man.png';

            } else if (yourAge <= 120){
                //old
                img.src = 'img/old-man.png';
            } else {
                deadPeople.innerHTML = `The person has passed away. This person was a <strong>${gender}</strong> and had reached the age of <strong>${yourAge} years old.</strong>`;
                res.style.display = 'none';
                img.src = 'img/dead.jpg';
            }

        //  CHECKING SEX WOMAN AND AGES 
        } else if (fSex[1].checked) {
            deadPeople.innerHTML = '';
            img.src = '';
            gender = 'Woman'
            if (yourAge >= 0 && yourAge < 12) {
                //kid
                img.src = 'img/kid-girl.png';
            } else if (yourAge <= 45) {
                //youth - adult
                img.src = 'img/woman.png';
            } else if (yourAge <= 120) {
                //old
                img.src = 'img/old-lady.png';
            } else {
                deadPeople.innerHTML = `The person has passed away. This person was a <strong>${gender}</strong> and had reached the age of <strong>${yourAge} years old.</strong>`;
                res.style.display = 'none';
                img.src = 'img/dead.jpg';
            }
        }

        //RESULT
        res.innerHTML = `We have verified that you are a <strong>${gender}</strong> with an age of <strong>${yourAge} years old.</strong>`
        res.style.display = 'block';
        res.style.textAlign = 'center';
        imgCenter.style.textAlign = 'center';
        madeInJS.style.display = 'block'; // MadeInJS

    }
}

