/* Button Layout */
$('body .js__change_view').on('click', function (e){
    el = $(this).data();
    btn = $(this);
    elCourse = $('.js__list_course');
    elCourseContent = $('.js__content');
    elCourseTop = $('.js__content_top_free');
    elCourseCategory = $('.js__category');
    elCourseSubtitle = $('.js__subtitle');
    elCourseSubtitleEnroll = $('.js__subtitle_enroll');
    elCourseFooter = $('.js__content_footer');
    elInfoFooter = $('.js__content-footer-info');
    elCourseEnroll = $('.js__content_enroll');
    elButtonEnroll = $('.js__btn_enroll');
    elFreeBottom = $('.js__content_free_bottom');
    elHeart = $('.js__heart');
    elHeartNumb1 = $('.js__heart_numb1');
    elHeartNumb2 = $('.js__heart_numb2');

    if(el.view === 'list'){
        elCourse.removeClass('col-lg-4');
        elCourseEnroll.removeClass('display-none');
        elCourseContent.addClass('flex-row');
        elCourseTop.removeClass('display-none');
        elCourseSubtitle.removeClass('display-none');
        elCourseSubtitleEnroll.addClass('display-none');
        elCourseCategory.addClass('pt-3');
        elCourseTop.removeClass('display-none');
        elFreeBottom.addClass('display-none');
        elInfoFooter.removeClass('justify-content-between').addClass('justify-content-start');
        elHeart.removeClass('ms-5').addClass('ms-3');
        elHeartNumb1.removeClass('ms-1').addClass('ms-2');
        elHeartNumb2.addClass('ms-1');
        btn.addClass('bg-purple').addClass('text-white');
    }

    if(el.view === 'grid'){
        elCourse.addClass('col-lg-4');
        elCourseEnroll.addClass('display-none');
        elCourseContent.removeClass('flex-row');
        elCourseTop.addClass('display-none');
        elCourseSubtitle.addClass('display-none');
        elCourseSubtitleEnroll.removeClass('display-none');
        elCourseCategory.removeClass('pt-3');
        elFreeBottom.removeClass('display-none');
        elInfoFooter.removeClass('justify-content-start').addClass('justify-content-between')
        elHeart.removeClass('ms-3').addClass('ms-5');
        elHeartNumb1.removeClass('ms-2').addClass('ms-1');
        elHeartNumb2.removeClass('ms-1');
        btn.addClass('bg-purple').addClass('text-white');
    }
});