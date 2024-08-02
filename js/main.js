document.addEventListener('mousemove', (e) => {
    let mouseX = e.pageX - 2; // document의 x좌표값
    let mouseY = e.pageY - 3; // document의 y좌표값

    let cursor = document.querySelector('.cursor');
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
})
출처: https://uiweb.tistory.com/68 [찐망고'S 퍼블리싱그리고디자인:티스토리]
$(function(){
    //design 탭메뉴
    // $('.tab_btn li').on('click', function(){
    //     let num = $(this).index();
    //     console.log(num)

    //     $('.tab_content>div').hide();
    //     $('.tab_content>div').eq(num).show();

    //     $('.tab_btn li').removeClass('on')
    //     $(this).addClass('on')
    // })


    $('.btn_menu').on('click',function(){
        $('.gnb').toggleClass('on')
        this.toggleClass('on')
    })



})

new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    // 위아래 스크롤
	scrollHorizontally: true,
    // 네비게이터를 보이고 숨김
    navigation: true,
    // 네비게이터 위치
    navigationPosition: 'right',
    // 하이퍼링크
    anchors:['num0','num1','num2','num3','num4','num5'],



    // afterLoad: function(origin, destination, direction){
    //     // destination 매개변수는 해당 섹션에 들어왔을때
    //     // origin 매개변수는 해당 섹션에서 나갔을 때
    //     var origin = this;
    //     console.log(origin)
    //     // console.log(`원래섹션: ${origin},${destination},${direction}`)

    //     // using index
    //     if(destination.index == 0 ){
    //         sec0_in();
    //     }if(destination.index == 1 ){
    //         sec1_in(),
    //         sec_out2();
    //     }if(destination.index == 2 ){
    //         sec2_in();
    //     }if(destination.index == 3 ){
    //         sec3_in();
    //     }if(destination.index == 4 ){
    //         sec4_in();
    //     }if(origin.index == 1){
	// 		sec_out();
	// 	}if(origin.index == 2){
	// 		sec_out2();
	// 	}
    // }
});
// portfolio
// function sec0_in(){
//     // alert("서은교의 포트폴리오 페이지 입니다")
//     // portfolio anime
//     anime({
//         targets: '.anime_line path',
//         strokeDashoffset: [anime.setDashoffset, 0],
//         easing: 'easeOutElastic',
//         duration: 2000,
//         delay: function(el, i) { return i * 200 },
//         direction: 'alternate',
//         loop: true
//     });
// }
// about
// function sec1_in(){
//     // alert("나의 소개 페이지에 오신 것을 환영합니다")

//         let tl = anime.timeline({
//             easing: 'linear',
//             duration: 300
//         });
    
//         tl.add({
//             delay:1000,
//             targets: '.gaze1',
//             height: '90%',
//         })
//         .add({
//             targets: '.gaze2',
//             height: '95%',
//         })
//         .add({
//             targets: '.gaze3',
//             height: '75%',
//         })
//         .add({
//             targets: '.gaze4',
//             height: '90%',
//         })
//         .add({
//             targets: '.gaze5',
//             height: '70%',
//         })
//         .add({
//             targets: '.gaze6',
//             height: '90%',
//         })
//         .add({
//             targets: '.gaze7',
//             height: '90%',
//         })
//         .add({
//             targets: '.gaze8',
//             height: '80%',
//         })
    
// }
// about화면을 벗어나면 그래프 게이지 높이 0
// function sec_out(){
//     anime({
//         targets:'.gazein',
//         height:0,
//     })
// }
// profile animation
// function sec2_in(){
//     // alert("서은교의 프로필입니다.")

//     let tl = anime.timeline({
//         easing: 'linear',
//         duration: 500
//     });

//     tl.add({
//         targets: '.g1',
//         width: '90%',
// 		delay: 1000
//     })
//     .add({
//         targets: '.g2',
//         width: '90%',
//     })
//     .add({
//         targets: '.g3',
//         width: '80%',
//     })
//     .add({
//         targets: '.g4',
//         width: '90%',
//     })
//     .add({
//         targets: '.g5',
//         width: '95%',
//     })
//     .add({
//         targets: '.g6',
//         width: '75%',
//     })
//     .add({
//         targets: '.g7',
//         width: '90%',
//     })
//     .add({
//         targets: '.g8',
//         width: '75%',
//     })
// }
// profile을 벗어나면 너비 0
// function sec_out2(){
//     anime({
//         targets:'.gazeins',
//         width:0,
//     })
// }
// gallery
function sec3_in(){
    // alert("이곳은 갤러리 입니다")
}
function sec4_in(){
    // alert("연락주세요 *^^*")
    
}








// 메뉴 누르면 on class가 붙게 하기
// 문서객체 선택 querySelector(하나만 가져올때)
let btn = document.querySelector('.btn_menu')
console.log(btn)

// 문서객체 선택 (nav)
let nav = document.querySelector('nav')
console.log(nav)

// 문서객체 선택(logo)
let logo = document.querySelector('#logo')
console.log(logo)

// 문서객체 선택(cover)
let cover = document.querySelector('#cover')
console.log(cover)

let maintxt = document.querySelector(".maintxt")


// 이벤트 발생(click)
btn.addEventListener('click',function(){
    // classList.toggle = toggleClass
    btn.classList.toggle('on')
    nav.classList.toggle('on')
})

// 로고를 클릭하면 돌아가면서 작동&옆에서 슬라이드 튀어나오게 하기
logo.addEventListener('click',function(){
    logo.classList.toggle('on')
    cover.classList.toggle('on')
    maintxt.classList.toggle('on')
})



// about
  // 타임라인에 애니메이션 추가



































































