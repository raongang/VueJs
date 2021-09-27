
//루트? 컴포넌트  return값은 루트인스턴스
var app = new Vue({
    el:'#app',
    data : {  // 아래 데이터는 이후 따로 추가 불가. 초기값이나 빈 데이터 넣어서 정의해야함.
        message : '초기 메세지',
        numberMessage : '1', //변화를 감지할수 있게 됨
        list : ['aplle','banana','strawberry'],
        showMain : false,
        show : true
    } , 
    methods:{
        handleClick : function(event){ 
           alert(event.target);
       } 
    },

    created : function() { 
        /* 라이프 사이클 훅 이 인스턴스의 생성과 초기화가 종료되었을때.
           Hook : 라이프 사이클중에 시점을 낚아채서 원하는 처리를 할 수 있게 하는 것
        */
        console.log('create execute!!')
    }



})
