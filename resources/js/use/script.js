//popup
$(document).ready(function(e) {
	$('.pu .bt_close').click(function(e) {
        $(this).parent().fadeOut(200);
    });
	$('.pu.d1 .bt_close').click(function(e) {
        $('.pu_bg').fadeOut(200);
    });
	$('.pu_bg').click(function(e) {
        $(this).fadeOut(200);
        $('.pu').fadeOut(200);
    });
	$('.bt_af_card_discount').click(function(e) {
        $('.pu_bg').fadeIn(200);
        $('.pu_af_card_discount.d1').fadeIn(200);
    });
	$('.bt_free_gift_guide').click(function(e) {
        $('.pu_bg').fadeIn(200);
        $('.pu_free_gift_guide.d1').fadeIn(200);
    });
	$('.bt_af_card_discount_p').click(function(e) {
        $('.pu_af_card_discount.d2').fadeIn(200);
    });
	$('.bt_free_gift_guide_p').click(function(e) {
        $('.pu_free_gift_guide.d2').fadeIn(200);
    });
});


//sorting_order
$(document).ready(function () {
    $('.sorting_order').each(function () {
        var $select = $(this);
        var $selected = $select.find('.selected');
        var $options = $select.find('ul');

        $select.click(function () {
            $select.toggleClass('active')
        });

        $selected.click(function () {
            $options.toggle();
        });

        $options.find('li').click(function () {
            $options.find('li').removeClass('selected_op');
            $(this).addClass('selected_op');

            var selectedValue = $(this).data('value');
            $selected.text($(this).text());
            $selected.addClass('data_on');
            $options.hide();
            console.log('Selected Value:', selectedValue);
        });        
        $(document).on('click', function (e) {
            if (!$select.is(e.target) && $select.has(e.target).length === 0) {
                $options.hide();
                $select.removeClass('active')
            }
        });
    });
});


//products_list
$(document).ready(function(e) {
	$('.products_list .aside .lnb dt').click(function(e) {
        $(this).parent().toggleClass('on');
    });
});

//products_detail
/*$(document).ready(function() {
    $("ul.tab_rental_quick_view li").click(function() {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(this).parent().parent().find(".tab_rental_quick_view_content").hide();
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).show();
        return false;
    });
});*/

$(document).ready(function() {
    $("ul.tab_detail_info li").click(function() {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(this).parent().parent().find(".tab_detail_info_content").hide();
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).show();
        return false;
    });
});
$(document).ready(function() {
    $("ul.tab_af_card_discount li").click(function() {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(this).parent().parent().find(".tab_af_card_discount_content").hide();
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).show();
        return false;
    });
});
