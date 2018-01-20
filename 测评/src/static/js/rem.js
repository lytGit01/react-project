function rem(w,rate) {
    var docEl = document.documentElement, // 获取html标签
    // orientationchange方向改变事件
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function() {
      // 当前设备视口宽度
      let clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = rate * (clientWidth / w) + 'px';
  };
  window.addEventListener(resizeEvt, recalc, false);
  document.addEventListener('DOMContentLoaded', recalc, false);
}

export default rem
