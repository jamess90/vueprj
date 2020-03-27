/**
 * 요금달력 jquery 플러그인
 * 수정중
 */
(function ($) {
  var today = new Date();
  var cells = [];

  var g_start = '';
  var g_end = '';
  var g_cnt = 0;


  $.fn.myCalendar = function (opts) {
    var options = $.extend({
      year: today.getFullYear(),
      month: today.getMonth(),
      week: ['<span class=w0>일</span>', '월', '화', '수', '목', '금', '<span class=w6>토</span>'],
      num: 12,
      json: {},
      callback: '',
      start_day: '',
      end_day: '',
      price_range: {}
    }, opts);


    if (typeof (options.json) != 'object') {
      options.json = JSON.parse(rawurldecode(options.json));


      if (Object.keys(options.json).length > 0) {
        var sData = Object.keys(options.json)[0];
        var eData = Object.keys(options.json)[Object.keys(options.json).length - 1];

        var t_month = "";
        if ((today.getMonth() + 1) < 10) {
          t_month = "0" + (today.getMonth() + 1);
        } else {
          t_month = (today.getMonth() + 1);
        }

        var d_today = today.getFullYear().toString() + '-' + t_month.toString() + '-01';
        var d_start = sData.toString().substr(0, 4) + '-' + sData.toString().substr(4, 2) + '-01';
        var d_end = eData.toString().substr(0, 4) + '-' + eData.toString().substr(4, 2) + '-01';
        var diff1 = diff_months(d_today, d_start);
        var diff2 = diff_months(d_start, d_end) + 2;

        diff1 = (diff1 < 1) ? 1 : diff1;
        diff2 = (diff2 < 2) ? 2 : diff2;

        // console.log(d_end);
      }
    }

    if (typeof (options.price_range) != 'object') {
      options.price_range = JSON.parse(rawurldecode(options.price_range));

      if (Object.keys(options.price_range).length > 0) {
        var price_range_area = $('<div></div>').addClass('price_range_area');

        price_range_area.appendTo(this);
      }
    }

    var calendar_area = $('<div></div>').addClass('calendar_area');
    var button_area = $('<div></div>').addClass('button_area');
    var button_close = $('<button>확인</button>').addClass('click-cal-close').appendTo(button_area);

    if (price_range_area) {
      calendar_area.css({'padding-top': '10vw'});
    }

    calendar_area.appendTo(this);
    button_area.appendTo(this);


    for (var index = 0; index < options.num; index++) {
      var start = new Date(options.year, options.month + index, 1);
      var year = start.getFullYear();
      var month = start.getMonth();

      var cnt = 0;
      var ym = year + '년' + (month + 1) + '월';

      mytable = $('<table></table>').attr({id: 'c_table_' + year + ('0' + (month + 1)).slice(-2)}).addClass('calendar');
      title_row = $('<tr></tr>').appendTo(mytable);
      $('<th></th>').attr({class: 'title', colspan: '7'}).appendTo(title_row).html(ym);

      week_row = $('<tr></tr>').appendTo(mytable);
      for (var i = 0; i < 7; i++) {
        $('<td></td>').attr({class: 'week'}).appendTo(week_row).html(options.week[i]);
      }

      row = $('<tr></tr>').appendTo(mytable);
      for (var j = 0; j < start.getDay(); j++) { //달력의 시작 일 구함
        cell = $('<td></td>').attr({class: 'cell'}).appendTo(row);
        cnt += 1;
      }

      for (var i = 0; i < get_dayCount(year, (month + 1)); i++) { //달력 일수만큼 찍어줌
        var this_day = (year + '' + ((month + 1) < 10 ? '0' + (month + 1) : (month + 1)) + '' + (i + 1 < 10 ? '0' + (i + 1) : (i + 1)));

        var is_click = false;

        if (typeof (options.json[this_day]) != 'undefined') {
          // 요금 구간별 p_index 라벨작성
          if (Object.keys(options.price_range).length > 0) {
            for (let index = 0; index < options.price_range.length; index++) {
              if (options.price_range[index][0] <= options.json[this_day]['p'] && options.price_range[index][1] >= options.json[this_day]['p']) {
                $('<label></label>').addClass('p_' + index);
                // return false;
              }

            }
          }

          is_click = true;
        } else { // 요금없을때
          $('<label></label>').addClass('p_x');
          is_click = true;
        }

        cell = $('<td>' + (i + 1) + '</td>').attr({
          'class': 'cell',
          'data-date': this_day,
          'data-open': is_click
        }).appendTo(row);
        $('<label>체크인</label>').addClass('chin').appendTo(cell);
        $('<label>체크아웃</label>').addClass('chout').appendTo(cell);


        // 가격있는 날에만 클릭이벤트 추가
        if (Object.keys(options.json)[0] <= this_day) {
          cell.attr({'class': 'cell', 'data-open': true});
          // cell.data('open',true);
        }
        // if (is_click) {
        //     cell.attr({'class':'cell'});
        // }
        cell.click(function () {
          cell_click($(this).data('date'), $(this).data('open'));
        });

        cnt += 1;

        if (cnt % 7 == 0) { //cnt가 7이면 행을 늘려줌
          row = $('<tr></tr>').appendTo(mytable);
        }

        // 전체 셀을 배열에 담음
        // cells.push({id:this_day,open:is_click,td:cell});
        cells.push({id: cell.data('date'), open: cell.data('open'), td: cell});
      }

      last_td = mytable.find('tr:last').children().length;
      for (var j = last_td; j < 7; j++) {
        cell = $('<td></td>').attr({class: 'cell'}).appendTo(row);
      }
      calendar_area.append(mytable);
    }

    // // 견적요청 버튼
    // var estimate = $('<div style="display:relative;top:0;left:0;height:0%;width:100%;text-align:right;"></div>');
    // var button_estimate = $('<button class="estimate">견적<br>요청</button>').appendTo(estimate);
    // calendar_area.append(estimate);
    // console.log(calendar_area.width());


    // body 스크롤 막기
    this.open = function () {
      // $('body').css({ 'overflow': 'hidden','position':'fixed','top':-window.pageYOffset});
      $('body').addClass('modal-open');

      $(this).show().animate({
        top: '0%'
      }, 300, function () {
        var price_range_h = $('.price_range_area').outerHeight();
        var table = $('#c_table_' + options.start_day.substr(0, 6));
        // 2019-08-29 설정일자에 해당하는 테이블이 없을때 1번 테이블로 지정
        if (table.length == 0) {
          var table = $('.calendar').eq(0);
        }
        var offset = table.offset();
        calendar_area.scrollTop(offset.top - price_range_h - $(window).scrollTop());
      });
    }

    this.close = function () {
      // console.log(window.pageYOffset);
      // $('body').css({ 'overflow': 'auto','position':'unset'});
      $('body').removeClass('modal-open');
      $(this).animate({
        top: '100%'
      }, 300, function () {
        calendar_area.scrollTop(0);
        $(this).hide();
      });
    }

    this.callback = function () {
      if (!g_start) {
        return false;
      }

      if (!g_end) {
        g_start = g_start.toString();

        var tomorrow = new Date(g_start.substr(0, 4) + '-' + g_start.substr(4, 2) + '-' + g_start.substr(6, 2));
        tomorrow.setDate(tomorrow.getDate() + 1);

        tomorrow = tomorrow.getFullYear() + ("0" + (tomorrow.getMonth() + 1)).slice(-2) + ("0" + tomorrow.getDate()).slice(-2);
        cell_click(tomorrow, true);
      }
      options.start_day = g_start.toString();
      options.end_day = g_end.toString();

      options.callback(g_start, g_end, g_cnt);
    }

    _this = this;

    button_close.click(function () {
      _this.callback();
      _this.close();
    });

    if (Object.keys(options.json).length > 0) {
      if (options.start_day) {
        cell_click(options.start_day, true);
      }
      if (options.end_day) {
        cell_click(options.end_day, true);
      }
    }

    // button_estimate.click(function(){
    //     location.href=location.href+'&estimate=Y';
    // });


    calendar_area.scroll(function () {
      var el = $(this);
      if ((el[0].scrollHeight - el.scrollTop()) == (el.outerHeight())) {
        // console.log(el.outerHeight()-100);
        // button_estimate.addClass('v-y');
        // button_estimate.css({'bottom':'80px'});
      }
    })

    return this;
  }


  function cell_click(d, is_click1) {
    g_cnt = 0;

    if (g_start && g_end) {
      g_start = '';
      g_end = '';
    }

    if (!g_start) {
      g_start = d;
    } else {
      // 시작일 중복선택 방지
      if (g_start == d) {
        return false;
      }
      if (g_start > d) {
        g_end = g_start;
        g_start = d;
      } else {
        g_end = d;
      }
    }

    // 불가일자중 체크아웃 날짜는 선택가능하게
    if (g_start == d && !is_click1) {
      g_start = g_end;
      g_end = '';
      return false;
    }

    sData = g_start + '';
    eData = g_end + '';

    // var checked_close = cells.filter(cell => cell["id"] >= sData.replace(/[^0-9]/g,"") && cell["id"] <= eData.replace(/[^0-9]/g,"") && cell["open"] == false );
    var checked_close = cells.filter(function (cell) {
      return cell["id"] >= sData.replace(/[^0-9]/g, "") && cell["id"] <= eData.replace(/[^0-9]/g, "") && cell["open"] == false;
    });

    if (checked_close.length > 0) {
      if (checked_close.length != 1 || eData != checked_close[0]['id']) {
        // var checked_cell = cells.filter(cell => cell["id"] >= sData.replace(/[^0-9]/g,"") && cell["id"] <= eData.replace(/[^0-9]/g,""));
        var checked_cell = cells.filter(function (cell) {
          return cell["id"] >= sData.replace(/[^0-9]/g, "") && cell["id"] <= eData.replace(/[^0-9]/g, "");
        });

        $.each(checked_cell, function (index, value) {
          value['td'].removeClass("checked_cell").children('.chin,.chout').hide();
        });

        // $(checked_cell).each(function (index, element) {
        //     element['td'].removeClass("checked_cell").children('.chin,.chout').hide();
        // });

        sData = g_start = '';
        eData = g_end = '';
        alert('선택불가 일자 포함');

        return false;
      }
    }

    $.each(cells, function (indexInArray, valueOfElement) {
      var td = valueOfElement['td'];
      if (td.hasClass('checked_cell')) {
        td.removeClass("checked_cell").children('.chin,.chout').hide();
      }

      if (sData == valueOfElement['id']) {
        td.addClass("checked_cell").children('.chin').show();
      }

      if (eData == valueOfElement['id']) {
        td.addClass("checked_cell").children('.chout').show();
      }

      if (td.hasClass('checked_range')) {
        td.removeClass("checked_range");
      }
    });


    if (sData && eData) {
      // var checked_range = cells.filter(cell => cell["id"] >= sData.replace(/[^0-9]/g,"") && cell["id"] <= eData.replace(/[^0-9]/g,""));
      var checked_range = cells.filter(function (cell) {
        return cell["id"] >= sData.replace(/[^0-9]/g, "") && cell["id"] <= eData.replace(/[^0-9]/g, "");
      });

      $.each(checked_range, function (index, value) {
        value['td'].not('.checked_cell').addClass("checked_range");
      });

      g_cnt = checked_range.length;
    }
  }


  function get_dayCount(year, month) { //월의 일수를 구함
    switch (month) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;

      case 4:
      case 6:
      case 9:
      case 11:
        return 30;

      case 2:
        if (((year % 400) == 0 || (year % 4) == 0 && (year % 100) != 0)) {
          return 29;
        } else {
          return 28;
        }
    }
  }


  // function rawurldecode(str) {
  //     return decodeURIComponent((str + '')
  //         .replace(/%(?![\da-f]{2})/gi, function() {
  //             return '%25';
  //     }));
  // }

  function rawurldecode(str) {
    // Decodes URL-encodes string
    //
    // version: 901.1411
    // discuss at: http://phpjs.org/functions/rawurldecode
    // +   original by: Brett Zamir
    // *     example 1: rawurldecode('Kevin+van+Zonneveld%21');
    // *     returns 1: 'Kevin+van+Zonneveld!'
    // *     example 2: rawurldecode('http%3A%2F%2Fkevin.vanzonneveld.net%2F');
    // *     returns 2: 'http://kevin.vanzonneveld.net/'
    // *     example 3: rawurldecode('http%3A%2F%2Fwww.google.nl%2Fsearch%3Fq%3Dphp.js%26ie%3Dutf-8%26oe%3Dutf-8%26aq%3Dt%26rls%3Dcom.ubuntu%3Aen-US%3Aunofficial%26client%3Dfirefox-a');
    // *     returns 3: 'http://www.google.nl/search?q=php.js&ie=utf-8&oe=utf-8&aq=t&rls=com.ubuntu:en-US:unofficial&client=firefox-a'
    var histogram = {};
    var ret = str.toString();

    var replacer = function (search, replace, str) {
      var tmp_arr = [];
      tmp_arr = str.split(search);
      return tmp_arr.join(replace);
    };

    // The histogram is identical to the one in urlencode.
    histogram["'"] = '%27';
    histogram['('] = '%28';
    histogram[')'] = '%29';
    histogram['*'] = '%2A';
    histogram['~'] = '%7E';
    histogram['!'] = '%21';

    for (replace in histogram) {
      search = histogram[replace]; // Switch order when decoding
      ret = replacer(search, replace, ret) // Custom replace. No regexing
    }

    // End with decodeURIComponent, which most resembles PHP's encoding functions
    ret = decodeURIComponent(ret);

    return ret;
  }


  function diff_months(dt2, dt1) {
    var dt1 = dt1 instanceof Date ? dt1 : new Date(dt1);
    var dt2 = dt2 instanceof Date ? dt2 : new Date(dt2);

    var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24 * 7 * 4);
    return Math.abs(Math.round(diff));
  }

})(jQuery);
