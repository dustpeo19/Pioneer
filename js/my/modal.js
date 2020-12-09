document.getElementById('user-modal-btn').addEventListener('click',function() {
    document.querySelector('.mainmodal').style.display='block';
    document.querySelector('#overlay').classList.add('active');
});

document.querySelector('.mainmodal-close').addEventListener('click',function() {
    document.querySelector('.mainmodal').style.display='none';
    document.querySelector('#overlay').classList.remove('active');
});

document.getElementById('overlay').addEventListener('click',function() {
    document.querySelector('.mainmodal').style.display='none';
    document.querySelector('#overlay').classList.remove('active');
});

document.querySelector('body').addEventListener('keydown',function(ev) {
    if(ev.key=='Escape') {
        document.querySelector('.mainmodal').style.display='none';
        document.querySelector('#overlay').classList.remove('active');
    }
})