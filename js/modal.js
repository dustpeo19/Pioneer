document.getElementById('user-modal-btn').addEventListener('click',function() {
    document.querySelector('.modals').style.display='flex';
    // document.querySelector('body').style.height="100%";          //modal display를 absolute로 하고 스크롤 고정시킬 때 필요
    // document.querySelector('body').style.overflow="hidden";
});

document.querySelector('.modals-close').addEventListener('click',function() {
    document.querySelector('.modals').style.display='none';
    // document.querySelector('body').style.height="auto";
    // document.querySelector('body').style.overflow="auto";
});

// Get the modal
var modal = document.getElementById('user-modal-btn');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};