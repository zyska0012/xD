$(function(){

    // Init accordion
    $(document).on('click', '.accordion__item', function(){
        let accordionBody = $(this).closest('.accordion__item').find('.accordion__body');
        if( $(accordionBody).hasClass('d-none') ){
            $(accordionBody).removeClass('d-none');
            $(this).find('.accordion__toggler img').attr('src', 'assets/images/icon-hide.svg');
        } else {
            $(accordionBody).addClass('d-none');
            $(this).find('.accordion__toggler img').attr('src', 'assets/images/icon-toggle.svg');
        }
	});

    // Init hover on header icons
    hoverImage('.socials__icon_discord', 'assets/images/icon-discord.svg', 'assets/images/icon-discord_hover.svg');
    hoverImage('.socials__icon_twitter', 'assets/images/icon-twitter.svg', 'assets/images/icon-twitter_hover.svg');
    hoverImage('.socials__icon_tiktok', 'assets/images/icon-tiktok.svg', 'assets/images/icon-tiktok_hover.svg');
    hoverImage('.socials__icon_vk', 'assets/images/icon-vk.svg', 'assets/images/icon-vk_hover.svg');
    hoverImage('.icon-vk', 'assets/images/icon-vk_2.svg', 'assets/images/icon-vk_2_hover.svg');
    hoverImage('.icon-discord', 'assets/images/icon-discord_2.svg', 'assets/images/icon-discord_2_hover.svg');

    // Init hover on benefits items
    hoverBenefits();

    // Init dropdown [START]
    $(document).on('click', '.dropdown-active', function(){
        let dropdownItems = $(this).closest('.dropdown').find('.dropdown-items');
        if( $(dropdownItems).hasClass('d-none') ){
            $(dropdownItems).removeClass('d-none');
        } else {
            $(dropdownItems).addClass('d-none');
        }
	});

    $(document).on('click', '.dropdown-item', function(){
        let img = $(this).html();
        let selectedDropdownItem = $(this).closest('.dropdown').find('.dropdown-selected');
        $(selectedDropdownItem).empty();
        $(selectedDropdownItem).html(img);
        $(this).closest('.dropdown-items').addClass('d-none');
	});

    // Init dropdown [END]
});

function hoverImage(element, defaultImage, hoveredImage){
    $(element).hover(
        function(){
            //$(element).attr("src", hoveredImage);
            changeImage(element, hoveredImage);
        }, 
        function(){
            // $(element).attr("src", defaultImage);
            changeImage(element, defaultImage);
        }
    );
}

function hoverBenefits(){
    let imageStats, imageType;

    $('.benefits__pros-item').hover(
        function(){
            $(this).css({
                'background-color': '#FFFFFF',
            }).animate({
                top: '-28px',
            }, 500);
            $(this).find('.benefits__pros-item-amount').css('color', '#252525');
            $(this).find('.benefits__pros-item-label').css('color', '#909090');
            imageStats = $(this).find('.img-stats');
            imageType = $(imageStats).attr('data-type');

            switch(imageType) {
                case 'reviews':
                    changeImage(imageStats, 'assets/images/icon-reviews_hover.svg');
                    break;
                case 'meteor':
                    changeImage(imageStats, 'assets/images/icon-meteor_hover.svg');
                    break;
                case 'archive':
                    changeImage(imageStats, 'assets/images/icon-archive_hover.svg');
                    break; 
                case 'happy':
                    changeImage(imageStats, 'assets/images/icon-happy_hover.svg');
                    break;
            }
        }, 
        function(){
            $(this).css({
                'background-color': '#000000',
            }).animate({
                top: '0'
            }, 500);
            $(this).find('.benefits__pros-item-amount').css('color', '#FFFFFF');
            $(this).find('.benefits__pros-item-label').css('color', '#5B5B5B');
            imageStats = $(this).find('.img-stats');
            imageType = $(imageStats).attr('data-type');
            switch(imageType) {
                case 'reviews':
                    changeImage(imageStats, 'assets/images/icon-reviews.svg');
                    break;
                case 'meteor':
                    changeImage(imageStats, 'assets/images/icon-meteor.svg');
                    break;
                case 'archive':
                    changeImage(imageStats, 'assets/images/icon-archive.svg');
                    break; 
                case 'happy':
                    changeImage(imageStats, 'assets/images/icon-happy.svg');
                    break;
            }
        }
    );
}

function changeImage(element, newImage){
    $(element).attr('src', newImage);
}

function showPopup(popup){
    $(popup).modal({
        fadeDuration: 100
    });
}