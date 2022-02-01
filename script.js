const fullHeight = document.body.scrollHeight;

let esa1_1 = document.getElementById('esa1_1');
let esa1_2 = document.getElementById('esa1_2');
let esa1_3 = document.getElementById('esa1_3');
let esa1_4 = document.getElementById('esa1_4');

// let title = document.getElementById('title');
let sonne = document.getElementById('sonne');

let ast = document.getElementById('ast');
const astOrigin = getOrigin(ast);

let apfel = document.getElementById('apfel');
const apfelOrigin = getOrigin(apfel);

let titles = document.getElementsByClassName('title');

let wolken = document.getElementsByClassName('wolken');
let wolkenOrigins = [];

let trigger_first_info = document.getElementById('trigger-first-info');
let first_info = document.getElementById('first-info');

let trigger_second_info = document.getElementById('trigger-second-info');
let second_info = document.getElementById('second-info');

let trigger_third_info = document.getElementById('trigger-third-info');
let third_info = document.getElementById('third-info');

let trigger_fourth_info = document.getElementById('trigger-fourth-info');
let fourth_info = document.getElementById('fourth-info');

let flieger = document.getElementById('flieger');

for(let wolke of wolken) {
    wolkenOrigins[wolke.id] = getOrigin(wolke);
}

window.addEventListener('scroll', function() {
    let scrollY = window.scrollY;
    let scrollPercentage = scrollY / fullHeight * 100;

    let apfelTransforms = [];

    if(scrollY > 3700) {
        for (let title of titles) {
            title.style.display = 'none';
        }
    } else {
        for(let title of titles) {
            title.style.display = 'inline-block';
        }
    }

    let apfelCenter = apfel.getBoundingClientRect().top + apfel.getBoundingClientRect().top / 2;
    fadeInFirstFact(apfelCenter);
    fadeInSecondFact(apfelCenter);
    fadeInThirdFact(apfelCenter);
    fadeInFourthFact(apfelCenter);

    // title.style.color = 'rgba(255,255,255,' + (100 - (scrollPercentage * 18)) / 100 + ')';
    if(scrollY > 4735) {
        apfelTransforms[0] = 'translateY(' + (scrollY - 4735 /*(3680 + 4400)*/) * 1.15 + 'px)';
        apfelTransforms[1] = 'rotate(' + ((scrollPercentage - 42) * 4.8) + 'deg)';
        apfel.style.transform = apfelTransforms.join(' ');
    }

    if (scrollY > 10000) {
        apfel.style.display = 'none';
    } else {
        apfel.style.display = 'inline-block';
    }

    flieger.style.transform = 'translateX(' + (scrollY - 8000) + 'px) translateY('+ (scrollY - 8000) * 0.6 +'px)';

    freezeElement(sonne, scrollY - 4200);

    for(let wolke of wolken) {
        continueScrolling(wolke, scrollY- 3900, 0.90);
    }
    // continueScrolling(apfel, scrollY, 1.05);
});

function fadeInFirstFact(apfel)
{
    if (apfel > trigger_first_info.getBoundingClientRect().top - 100 && apfel < trigger_first_info.getBoundingClientRect().bottom + 100) {
        first_info.classList.remove('fade-out-left-1');
        first_info.classList.add('fade-in-left-1');
    } else {
        first_info.classList.add('fade-out-left-1');
        first_info.classList.remove('fade-in-left-1');
    }
}

function fadeInSecondFact(apfel)
{
    if (apfel > trigger_second_info.getBoundingClientRect().top - 50 && apfel < trigger_second_info.getBoundingClientRect().bottom + 150) {
        second_info.classList.remove('fade-out-right-2');
        second_info.classList.add('fade-in-right-2');
    } else {
        second_info.classList.add('fade-out-right-2');
        second_info.classList.remove('fade-in-right-2');
    }
}

function fadeInThirdFact(apfel)
{
    if (apfel > trigger_third_info.getBoundingClientRect().top - 20 && apfel < trigger_third_info.getBoundingClientRect().bottom + 200) {
        third_info.classList.remove('fade-out-left-3');
        third_info.classList.add('fade-in-left-3');
    } else {
        third_info.classList.add('fade-out-left-3');
        third_info.classList.remove('fade-in-left-3');
    }
}

function fadeInFourthFact(apfel)
{
    if (apfel > trigger_fourth_info.getBoundingClientRect().top + 50 && apfel < trigger_fourth_info.getBoundingClientRect().bottom + 250) {
        fourth_info.classList.remove('fade-out-right-4');
        fourth_info.classList.add('fade-in-right-4');
    } else {
        fourth_info.classList.add('fade-out-right-4');
        fourth_info.classList.remove('fade-in-right-4');
    }
}

function freezeElement(element, scrollY)
{
    element.style.transform = 'translateY(' + scrollY + 'px)';
}

function getOrigin(element)
{
    return element.getBoundingClientRect().top;
}

function continueScrolling(element, scrollY, factor = 1)
{
    element.style.transform = 'translateY(' + scrollY * factor + 'px)';
}