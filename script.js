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

    console.log("trigger-top: " + trigger_first_info.getBoundingClientRect().top);
    console.log("trigger-bottom: " + trigger_first_info.getBoundingClientRect().bottom);
    console.log("apfel: " + (apfel.getBoundingClientRect().top + apfel.getBoundingClientRect().top / 2));
    let apfelCenter = apfel.getBoundingClientRect().top + apfel.getBoundingClientRect().top / 2;
    if (apfelCenter > trigger_first_info.getBoundingClientRect().top - 100 && apfelCenter < trigger_first_info.getBoundingClientRect().bottom + 100) {
        first_info.classList.remove('fade-out-left');
        first_info.classList.add('fade-in-left');
    } else {
        first_info.classList.add('fade-out-left');
        first_info.classList.remove('fade-in-left');
    }

    // title.style.color = 'rgba(255,255,255,' + (100 - (scrollPercentage * 18)) / 100 + ')';
    if(scrollY > 4825) {
        apfelTransforms[0] = 'translateY(' + (scrollY - 4830 /*(3680 + 4400)*/) * 1.15 + 'px)';
        apfelTransforms[1] = 'rotate(' + ((scrollPercentage - 34) * 4.8) + 'deg)';
        apfel.style.transform = apfelTransforms.join(' ');
    }

    if (scrollY > 12000) {
        apfel.style.display = 'none';
    } else {
        apfel.style.display = 'inline-block';
    }

    // console.log('scrollY: ' + scrollY);
    // console.log('ast Position: ' + astOrigin + scrollY * 2);
    // console.log('fullheight: ' + fullHeight);
    // console.log('scrollPercentage: ' + scrollPercentage);
    freezeElement(sonne, scrollY - 4200);

    for(let wolke of wolken) {
        continueScrolling(wolke, scrollY- 3900, 0.90);
    }
    // continueScrolling(apfel, scrollY, 1.05);
});

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