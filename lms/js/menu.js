
$( document ).ready(function() {
	$('.menu-item-has-children').click(function(){
		if( ($(this).hasClass('active') ) ) {
			$(this).removeClass('active');
		} else{
			$('.menu-item-has-children').siblings().removeClass('active');
			$(this).addClass('active');
		}
		
		
	});
});



const $menu = $('.menu');

$(document).mouseup(e => {
   if (!$menu.is(e.target) // if the target of the click isn't the container...
   && $menu.has(e.target).length === 0) // ... nor a descendant of the container
   {
		$('.menu-item-has-children').removeClass('active');
  }
 });

 $( document ).ready(function() {
	$('.scheduling-sidebar-menu > .has-submenu').click(function(){
		$('.scheduling-sidebar-menu > .has-submenu').siblings().removeClass('open');
		$(this).addClass('open');
	});
	$('.submenu > .has-submenu').click(function(){
		$('.submenu > .has-submenu').siblings().removeClass('open');
		$(this).addClass('open');
	});
});
const $leftmenu = $('.scheduling-sidebar-menu');

$(document).mouseup(e => {
   if (!$leftmenu.is(e.target) // if the target of the click isn't the container...
   && $leftmenu.has(e.target).length === 0) // ... nor a descendant of the container
   {
		$('.has-submenu').removeClass('open');
  }
 });

const menu = document.querySelector('.menu');
const menuSection = menu.querySelector('.menu-section');
const menuArrow = menu.querySelector('.menu-mobile-arrow');
const menuClosed = menu.querySelector('.menu-mobile-close');
const menuToggle = document.querySelector('.menu-mobile-toggle');
const menuOverlay = document.querySelector('.overlay');
let subMenu;

menuSection.addEventListener('click', (e) => {
	if (!menu.classList.contains('active')) {
		return;
		
	}
	if (e.target.closest('.menu-item-has-children')) {
		const hasChildren = e.target.closest('.menu-item-has-children');
		showSubMenu(hasChildren);
		
	}
});

menuArrow.addEventListener('click', () => {
	hideSubMenu();
});

menuToggle.addEventListener('click', () => {
	toggleMenu();
});

menuClosed.addEventListener('click', () => {
	toggleMenu();
});

menuOverlay.addEventListener('click', () => {
	toggleMenu();
	
});

// Show & Hide Toggle Menu Function
function toggleMenu() {
	menu.classList.toggle('active');
	menuOverlay.classList.toggle('active');
	
}

// Show the Mobile Side Menu Function
function showSubMenu(hasChildren) {
	$('.menu-mobile-arrow').show();
	subMenu = hasChildren.querySelector('.menu-subs');
	subMenu.classList.add('active');
	subMenu.style.animation = 'slideLeft 0.5s ease forwards';
	const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
	menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
	menu.querySelector('.menu-mobile-header').classList.add('active');
	
}

// Hide the Mobile Side Menu Function
function hideSubMenu() {
	subMenu.style.animation = 'slideRight 0.5s ease forwards';
	setTimeout(() => {
		subMenu.classList.remove('active');
	}, 300);
	$('.menu-mobile-arrow').hide();
	menu.querySelector('.menu-mobile-title').innerHTML = '';
	menu.querySelector('.menu-mobile-header').classList.remove('active');
	
}

// Windows Screen Resizes Function
window.onresize = function () {
	if (this.innerWidth > 991) {
		if (menu.classList.contains('active')) {
			toggleMenu();
		}
	}
};


