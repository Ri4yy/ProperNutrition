// Меню
$('#openMenu, #overlay').click(() => {
    $('#menu').toggleClass('hidden');
    $('#menu').toggleClass('flex');
    $('#overlay').toggleClass('hidden');

    if ($('#openMenu').attr('src') == '/ProperNutrition/src/assets/img/icon/menu.png') {
        $('#openMenu').attr('src', '/ProperNutrition/src/assets/img/icon/closeMenu.png');
    } else {
        $('#openMenu').attr('src', '/ProperNutrition/src/assets/img/icon/menu.png');
    }

    $('html').toggleClass('dontScroll');
});
if($(window).width < 768) {
    $('.nav_link').click(() => {
        $('#menu').toggleClass('hidden');
        $('#menu').toggleClass('flex');
        $('#overlay').toggleClass('hidden');
    
        if ($('#openMenu').attr('src') == '/ProperNutrition/src/assets/img/icon/menu.png') {
            $('#openMenu').attr('src', '/ProperNutrition/src/assets/img/icon/closeMenu.png');
        } else {
            $('#openMenu').attr('src', '/ProperNutrition/src/assets/img/icon/menu.png');
        }
    
        $('html').toggleClass('dontScroll');
    });
}


// Табы
function toggleTabs(tabsTriggerClass, tabsContentClass, active, passive) {
    const tabsTriggers = document.querySelectorAll(tabsTriggerClass);
    const tabsContents = document.querySelectorAll(tabsContentClass);
    tabsContents.forEach((content) => {
        content.classList.add('hidden');
        tabsContents[0].classList.remove('hidden');
    });
    tabsTriggers.forEach((trigger, idx) => {
        trigger.addEventListener('click', () => {
            tabsTriggers.forEach((t) =>  {
                t.classList.remove(active);
                t.classList.add(passive);
            });

            trigger.classList.add(active);
            trigger.classList.remove(passive);

            tabsContents.forEach((content) => {
                content.classList.add('hidden');
            });

            tabsContents[idx].classList.remove('hidden');
        });
    })
}
// Программы
toggleTabs('.tab-trigger', '.tab-content', 'program_btn-active', 'program_btn');
// Программы - триггеры наборов
toggleTabs('.set-trigger', '.set-content', 'set-trigger_active',  'set-trigger_nonactive');
// Спец.программы - триггеры наборов
toggleTabs('.set-trigger_spec', '.set-content_spec', 'set-trigger-spec_active',  'set-trigger-spec_nonactive');
// Программы - Дни недели
toggleTabs('.days-trigger', '.days-content', 'days-active',  'days-nonactive');
// Спец.программы - дни недели
toggleTabs('.days-trigger_spec', '.days-content_spec', 'days-active',  'days-nonactive');

// Счетчик
$(".countPlus").each((e, a) => {
    $(a).click(() => {
        var e = $(a).parent().find(".qty").val();
        e++, $(a).parent().find(".qty").val(e);
    });
});

$(".countMinus").each((e, a) => {
    $(a).click(() => {
        var e = $(a).parent().find(".qty").val();
        1 < e && (e--, $(a).parent().find(".qty").val(e));
    });
});

// Меню
$('.btn_profile').click(() => {
    $('.profile_menu').toggleClass('hidden');
    setTimeout(() => {
        $('.profile_menu').addClass('hidden');
    },6000);
    console.log('1')
});

$('.btn_side').click(() => {
    $('.btn_menu').toggleClass('hidden');
    $('.profile_menu').addClass('hidden');
    console.log('2')
    if(!($('.btn_menu').hasClass('hidden'))) {
        $('.btn_side').hover(function(){ 
            $('.btn_side').css( "background", "#F35353" );
                }, function(){ 
            $('.btn_side').css( "background", "#fff" );
        });
    } else {
        $('.btn_side').hover(function(){ 
            $('.btn_side').css( "background", "#64D370" );
                }, function(){ 
            $('.btn_side').css( "background", "#fff" );
        });
    }
    $('.btn_wrapper').toggleClass('bg-[#F35353]/80');
});

// SELECT
$('.select').each(function() {
    const _this = $(this),
        selectOption = _this.find('option'),
        selectOptionLength = selectOption.length,
        selectedOption = selectOption.filter(':selected'),
        duration = 450; // длительность анимации 

    _this.hide();
    _this.wrap('<div class="select"></div>');
    $('<div>', {
        class: 'new-select',
        text: _this.children('option:disabled').text()
    }).insertAfter(_this);

    const selectHead = _this.next('.new-select');
    $('<div>', {
        class: 'new-select__list'
    }).insertAfter(selectHead);

    const selectList = selectHead.next('.new-select__list');
    for (let i = 1; i < selectOptionLength; i++) {
        $('<div>', {
            class: 'new-select__item',
            html: $('<span>', {
                text: selectOption.eq(i).text()
            })
        })
        .attr('data-value', selectOption.eq(i).val())
        .appendTo(selectList);
    }

    const selectItem = selectList.find('.new-select__item');
    selectList.slideUp(0);
    selectHead.on('click', function() {
        if ( !$(this).hasClass('on') ) {
            $(this).addClass('on');
            selectList.slideDown(duration);

            selectItem.on('click', function() {
                let chooseItem = $(this).data('value');

                $('select').val(chooseItem).attr('selected', 'selected');
                selectHead.text( $(this).find('span').text() );

                selectList.slideUp(duration);
                selectHead.removeClass('on');
            });

        } else {
            $(this).removeClass('on');
            selectList.slideUp(duration);
        }
    });
});