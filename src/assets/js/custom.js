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


// Админ-панель
$('#toggleBarAdmin').click(() => {
    if($('.leftBar').hasClass('w-[20%]')) {
        $('.leftBar').removeClass('w-[20%]');
        $('.leftBar').toggleClass('px-10');
        $('.leftBar').toggleClass('px-6');
        $('.leftBar').addClass('w-[100px]');
    } else {
        $('.leftBar').addClass('w-[20%]');
        $('.leftBar').toggleClass('px-10');
        $('.leftBar').toggleClass('px-6');
        $('.leftBar').removeClass('w-[100px]');
    }
    $('.leftBarText').each((t,text) => {
        $(text).toggle();
    });
});

// Добавление товара в магазин

let category = $('#category option:selected').val();
let form = $('.formShop');


$('#category').change(() => {

console.log(category);
        if(category === "Бизнес-ланч") {
            form.html('<div class="flex flex-col gap-x-10"><select name="categories" id="category" class="py-3 px-4 text-lg rounded-full bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.04)] outline-none" required><option class="option">Категория</option><option class="option" value="Бизнес-ланч">Бизнес-ланч</option><option class="option" value="Полезные конфеты">Полезные конфеты</option></select><div class="flex relative"><img src="../src/assets/img/lunch/meat.png" alt="" class="rounded-[15px] mt-2"><input type="file" class="w-full h-full absolute opacity-0 cursor-pointer" title="Выберите изображение"></div><input type="text" name="title" class="py-[10px] px-5 mt-2 w-full bg-[#DEE6EE] rounded-full text-black outline-none focus:outline-[#64D370]" value="" placeholder="Название" required></div><textarea name="compound" class="ouline-none bg-[#DEE6EE] rounded-[15px] mt-6 h-[150px] focus:outline-[#64D370] px-3 py-2 text-sm resize-none"></textarea><div class="grid grid-cols-3 gap-x-4"><input type="text" name="protein" class="py-[6px] px-5 mt-2 w-full bg-[#DEE6EE] rounded-full text-black outline-none focus:outline-[#64D370]" value="" autocomplete="off" placeholder="Белки" required><input type="text" name="fats" class="py-[6px] px-5 mt-2 w-full bg-[#DEE6EE] rounded-full text-black outline-none focus:outline-[#64D370]" value="" autocomplete="off" placeholder="Жиры" required><input type="text" name="carbons" class="py-[6px] px-5 mt-2 w-full bg-[#DEE6EE] rounded-full text-black outline-none focus:outline-[#64D370]" value="" autocomplete="off" placeholder="Углеводы" required></div><div class="grid grid-cols-2 gap-x-4"><input type="text" name="cal" class="py-[6px] px-5 mt-2 w-full bg-[#DEE6EE] rounded-full text-black outline-none focus:outline-[#64D370]" value="" autocomplete="off" placeholder="Калории" required><input type="text" name="price" class="py-[6px] px-5 mt-2 w-full bg-[#DEE6EE] rounded-full text-black outline-none focus:outline-[#64D370]" value="" autocomplete="off" placeholder="Цена" required></div><button type="submit" class="flex justify-center items-center mt-4 py-1.5 text-lg font-medium w-full rounded-full bg-[#64D370] text-white hover:bg-[#4cb356] transition-all duration-300">Применить</button>');
                
            
        } else {
            form.html(' 124');
        }
    
    });
