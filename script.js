const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)}deg)`;
    sc.style.transform = `rotateZ(${(ss)}deg)`;
});

let h = new Date().getHours();
if( h > 12 ) {
    h = h - 12;
    var am = 'PM'
    document.getElementsByTagName('body')[0].classList.add('dark');
    document.getElementById('dn').checked = true;
} else {
    document.getElementsByTagName('body')[0].classList.add('light');
    document.getElementById('dn').checked = false;
}

document.getElementById('dn').addEventListener('click', function() {
    if(document.getElementById('dn').checked === true) {
        document.getElementsByTagName('body')[0].classList.remove('light')
        document.getElementsByTagName('body')[0].classList.add('dark');
    } else {
        document.getElementsByTagName('body')[0].classList.remove('dark')
        document.getElementsByTagName('body')[0].classList.add('light');
    }
})