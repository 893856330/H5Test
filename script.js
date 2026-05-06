// 处理卡片点击事件
function goToGame(gameId) {
    // 拼接对应游戏的路径
    const gamePath = `./games/${gameId}/index.html`;
    
    // 执行页面跳转
    window.location.href = gamePath;
}