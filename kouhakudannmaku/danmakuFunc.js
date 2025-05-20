ca.addEventListener( "touchstart", function( event ) {
	var touchObject = event.changedTouches[0] ;
	var touchX = touchObject.pageX ;
	var touchY = touchObject.pageY ;

	// 要素の位置を取得
	var clientRect = this.getBoundingClientRect() ;
	var positionX = clientRect.left + window.pageXOffset ;
	var positionY = clientRect.top + window.pageYOffset ;

	// 要素内におけるタッチ位置を計算
	eventX = touchX - positionX ;
	eventY = touchY - positionY ;
} ) ;

ca.addEventListener( "touchmove", function( event ) {
	var touchObject = event.changedTouches[0] ;
	var touchX = touchObject.pageX ;
	var touchY = touchObject.pageY ;

	// 要素の位置を取得
	var clientRect = this.getBoundingClientRect() ;
	var positionX = clientRect.left + window.pageXOffset ;
	var positionY = clientRect.top + window.pageYOffset ;

	// 要素内におけるタッチ位置を計算
	eventX = touchX - positionX ;
	eventY = touchY - positionY ;
} ) ;

ca.addEventListener( "touchend", function( event ) {


	// 要素内におけるタッチ位置を計算
	eventX = 160;
	eventY = 525;
} ) ;

ca.addEventListener('mousedown',function(e){
	mouseActive=1;
	const rect = canvas.getBoundingClientRect();
	const point = {
		x: e.clientX - rect.left,
		y: e.clientY - rect.top
	};

	eventX = point.x;
	eventY = point.y;
});
ca.addEventListener('mouseup',function(){
	mouseActive=0;
	eventX=160;
	eventY=525;
});




ca.addEventListener( "mousemove", function(e) {
	if(mouseActive==1){
		const rect = canvas.getBoundingClientRect();
		const point = {
			x: e.clientX - rect.left,
			y: e.clientY - rect.top
		};

		eventX = point.x;
		eventY = point.y;
	}

} ) ;

ca.addEventListener("click", e => {
  // マウスの座標をCanvas内の座標とあわせるため
  const rect = canvas.getBoundingClientRect();
  const point = {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  };

  cEventX = point.x;
  cEventY = point.y;

  // クリック判定処理
});
