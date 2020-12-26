const dropdownMenuMobile = function() {
    var bars = document.querySelector('.mobile__bars button');
    var menu = document.querySelector('.mobile__item--dropdown');
    var dropdownLink = document.querySelectorAll('.hasDropdown');
    
    bars.addEventListener('click', ()=> {
        menu.classList.contains('active') ? menu.classList.remove('active') : menu.classList.add('active')
    })

    dropdownLink.forEach(item => {
        item.addEventListener('click', e => {
            if(e.target.getAttribute('class') == 'hasDropdown') {  
                let link = e.target;
                if(link.nextElementSibling.classList.contains('dropdown')) {                
                    if(link.nextElementSibling.classList.contains('active')) {
                        link.nextElementSibling.classList.remove('active');
                    } else {
                        link.nextElementSibling.classList.add('active');
                    }
                }        
            } else {
                if(e.target.parentElement.getAttribute('class') == 'hasDropdown') {
                    let link = e.target.parentElement;
                    if(link.nextElementSibling.classList.contains('dropdown')) {                
                        if(link.nextElementSibling.classList.contains('active')) {
                            link.nextElementSibling.classList.remove('active');
                        } else {
                            link.nextElementSibling.classList.add('active');
                        }
                    }     
                } else {
                    let link = e.target.parentElement.parentElement;
                    if(link.nextElementSibling.classList.contains('dropdown')) {                
                        if(link.nextElementSibling.classList.contains('active')) {
                            link.nextElementSibling.classList.remove('active');
                        } else {
                            link.nextElementSibling.classList.add('active');
                        }
                    }      
                }
            }
        })
    })
}

document.addEventListener('DOMContentLoaded', function() {
    dropdownMenuMobile();
})