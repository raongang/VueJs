
/**
 *   section8 텍스트와 속성 데이터 바인딩 
 *     - 객체와 배열 내부의 요소 출력하기.
 * 
 */

 new Vue ({

    el : '#app',
    data : { 
        //객체 데이터 
        message : { value : 'hello, vue js'},
        //배열 데이터 
        list : ['사과','바나나','딸기'],
        //다른 데이터를 사용해서 list에서 값을 추출하기 위한 요소
        num : 1, 
        scroll : 0
    },
    mounted : function(){ 
        this.scroll = 100 // 요소의 스크롤 양 조작하기
    }
 })