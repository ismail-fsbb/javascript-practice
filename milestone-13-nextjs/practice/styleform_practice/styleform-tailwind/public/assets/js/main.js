
// nav js start
document.addEventListener("DOMContentLoaded", () => {
	const mobileMenu = document.getElementById("mobile-menu");
	const mobileMenuBtn = document.getElementById("mobile-menu-btn");
	const desktopNavLinks = document.querySelectorAll(
	  "#d2c_nav_link_wrapper .nav_link"
	);
	const desktopLinks = document.querySelectorAll("#d2c_nav_link_wrapper .nav_link_Small");
	const mobileNavLinksContainer = document.getElementById("mobile-nav-links");
  
	// Clone main links
	desktopLinks.forEach((link) => {
	  const mobileLink = link.cloneNode(true);
	  mobileNavLinksContainer.appendChild(mobileLink);
	});
  
	const mobileNavLinks = document.querySelectorAll("#mobile-nav-links .nav_link");
	const sections = document.querySelectorAll("section");
  
	const toggleMenu = () => mobileMenu.classList.toggle("hidden");
	const hideMenu = () => mobileMenu.classList.add("hidden");
	const clickOutsideMenu = (event) => {
	  if (
		!mobileMenu.contains(event.target) &&
		!mobileMenuBtn.contains(event.target)
	  )
		hideMenu();
	};
  
	mobileMenuBtn.addEventListener("click", toggleMenu);
	document
	  .getElementById("close-drawer-btn")
	  .addEventListener("click", hideMenu);
	
	mobileNavLinks.forEach((link) => {
	  link.addEventListener("click", toggleMenu);
	});
	
	document.body.addEventListener("click", clickOutsideMenu);
  
	const activateNavLink = (id) => {
	  const allNavLinks = [...desktopNavLinks, ...mobileNavLinks];
	  allNavLinks.forEach((navLink) =>
		navLink.classList.toggle(
		  "active",
		  navLink.getAttribute("href").substring(1) === id
		)
	  );
	};
  
	const observer = new IntersectionObserver(
	  (entries) => {
		entries.forEach((entry) => {
		  if (entry.isIntersecting) {
			activateNavLink(entry.target.id);
		  } else if (!entry.isIntersecting && entry.intersectionRatio === 0) {
			const allNavLinks = [...desktopNavLinks, ...mobileNavLinks];
			allNavLinks.forEach((navLink) => {
			  if (navLink.getAttribute("href").substring(1) === entry.target.id) {
				navLink.classList.remove("active");
			  }
			});
		  }
		});
	  },
	  { threshold: 0.5 }
	);
  
	sections.forEach((section) => observer.observe(section));
  
	const initialSectionInView = Array.from(sections).find((section) => {
	  const rect = section.getBoundingClientRect();
	  return rect.top >= 0 && rect.top <= window.innerHeight;
	});
  
	if (initialSectionInView) activateNavLink(initialSectionInView.id);
  
	// Sticky navbar background color change
	function setNavbarBackground() {
	  const navbar = document.getElementById("navbar");
	  if (window.scrollY > 0) {
		navbar.style.backgroundColor = "#12398D";
	  } else {
		navbar.style.backgroundColor = "transparent";
	  }
	}
  
	// Set the background color on scroll
	window.addEventListener("scroll", setNavbarBackground);
  
	// Set the background color on page load
	setNavbarBackground();
  
	// Update threshold value on window resize
	window.addEventListener("resize", setNavbarBackground);
  });
  // nav js end

// Preloader Js
// Set initial opacity
$(".preloader").css("opacity", 1);

// // Delay execution for 2 seconds
setTimeout(function() {
    // Set opacity to 0
    $(".preloader").css("opacity", 0);
    // After a short delay (for the fade-out effect to complete), set display to none
    setTimeout(function() {
        $(".preloader").css("display", "none");
    }, 600); // Adjust the delay to match the fade-out duration
}, 400);

document.addEventListener("DOMContentLoaded", function () {
	// add class or tags which one you trigger
	const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, .d2c_award_card, .bg-cta-1, .shadow-gallery-image, .d2c_logo_wrapper, .d2c_social_link");

	elements.forEach(el => {
		if (el.classList.contains("no-animation")) {
			el.removeAttribute("data-aos");
			return;
		}

		const animations = ["fade-up", "fade-right", "fade-left"];
		let applied = false;

		animations.forEach(anim => {
			if (el.classList.contains(anim)) {
				el.setAttribute("data-aos", anim);
				applied = true;
			}
		});

		if (!applied) {
			el.setAttribute("data-aos", "fade-up");
		}
	});

	// Delay AOS init to make sure it's applied after DOM paints
	setTimeout(() => {
		AOS.init({
			mirror: true,     // Animate again when scrolling up
			once: false,      // Allow repeat animation
			delay: 0,
			duration: 700,
			offset: 20,
		});

		// Manually trigger animation on visible elements
		document.querySelectorAll('[data-aos]').forEach(el => {
			const rect = el.getBoundingClientRect();
			if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
				el.classList.add("aos-animate");
			}
		});
	}, 100); // Small delay ensures elements are painted
});

// Hero bottom image slider
let heroImageSlider = new Swiper(".d2c_image_slider", {
	spaceBetween: 24,
	speed: 4000,
	autoplay: {
	  delay: 0,
	},
	slidesPerView: 5,
	loop: true,
	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		768: {
		  slidesPerView: 4,
		},
		1024: {
		  slidesPerView: 5,
		},
		1920: {
			slidesPerView: 6,
		}
	}
});

// Logo slider
let logoSlider = new Swiper(".d2c_logo_slider", {
	spaceBetween: 40,
	speed: 4000,
	autoplay: {
	  delay: 0,
	},
	slidesPerView: 6,
	loop: true,
	breakpoints: {
		320: {
			slidesPerView: 2,
		},
		768: {
		  slidesPerView: 3,
		},
		1024: {
		  slidesPerView: 4,
		},
		1280: {
		  slidesPerView: 5,
		},
		1600: {
			slidesPerView: 5,
		},
		1920: {
			slidesPerView: 6,
		}
	}
});

// Testimonial slider
let testimonialSlider = new Swiper(".d2c_testimonial_slider", {
	spaceBetween: 24,
	centeredSlides: false,
	speed: 2000,
	autoplay: {
	  delay: 3000,
	},
	grabCursor: true,
	slidesPerView: 1,
	loop: true,
	allowTouchMove: true,
	disableOnInteraction: false,
});

// Team slider
let teamSlider = new Swiper(".d2c_team_slider", {
	spaceBetween: 40,
	speed: 4000,
	autoplay: {
	  delay: 0,
	},
	slidesPerView: 6,
	loop: true,
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
		  slidesPerView: 2,
		},
		1024: {
		  slidesPerView: 3,
		},
		1280: {
		  slidesPerView: 4,
		},
		1600: {
			slidesPerView: 5,
		},
		1920: {
			slidesPerView: 6,
		}
	}
});

// ScrollBtn JS
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var scrollBtn = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }
}


/* 
Template Name: {{ # }}
Template URL: {{ # }}
Description: {{ # }}
Author: DesignToCodes
Author URL: https://www.designtocodes.com
Text Domain: {{ # }} 
*/