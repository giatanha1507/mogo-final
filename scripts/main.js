"use strict";var menuToggle=document.querySelector(".header-toggle"),menuHeader=document.querySelector(".header-menu"),active="active";menuToggle.addEventListener("click",function(){menuHeader.classList.add(active)}),window.addEventListener("click",function(e){menuHeader.contains(e.target)||e.target.matches(".header-toggle")||menuHeader.classList.remove(active)}),$(document).ready(function(){$(".quote-container").slick({prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",nextArrow:"<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",responsive:[{breakpoint:767,settings:{arrows:!1}}]})}),$(document).ready(function(){$(".wedo-content .wedo-item .wedo-item-header").click(function(e){e.preventDefault(),$(this).toggleClass("active").find("i").removeClass("active").find("i").removeClass("fa-angle-up").addClass("fa-angle-down"),$(".wedo-content .wedo-item .wedo-item-content").not($(this).next()).slideUp(),$(this).next().slideToggle()})});