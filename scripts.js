function showMenu(event, phoneNumber) {
    // 防止默认的上下文菜单
    event.preventDefault();
    
    // 获取菜单元素
    var menu = document.getElementById('menu');
    
    // 显示菜单
    menu.style.display = 'block';
    menu.style.left = event.pageX + 'px';
    menu.style.top = event.pageY + 'px';
    
    // 为拨打电话和复制按钮添加事件监听器
    document.getElementById('call-btn').onclick = function() {
        window.location.href = 'tel:' + phoneNumber;
        hideMenu();
    };

    document.getElementById('copy-btn').onclick = function() {
        copyToClipboard(phoneNumber);
        hideMenu();
    };

    // 点击其他地方时隐藏菜单
    document.addEventListener('click', hideMenuOnClickOutside, true);
}

function hideMenu() {
    var menu = document.getElementById('menu');
    menu.style.display = 'none';
    document.removeEventListener('click', hideMenuOnClickOutside, true);
}

function hideMenuOnClickOutside(event) {
    var menu = document.getElementById('menu');
    if (!menu.contains(event.target)) {
        hideMenu();
    }
}

function copyToClipboard(text) {
    // 创建一个隐藏的文本域
    var tempInput = document.createElement('input');
    tempInput.style.position = 'absolute';
    tempInput.style.left = '-9999px';
    tempInput.value = text;
    document.body.appendChild(tempInput);
    
    // 选择文本并复制
    tempInput.select();
    document.execCommand('copy');
    
    // 移除临时输入框
    document.body.removeChild(tempInput);

    // 提示复制成功
    alert('电话号码 ' + text + ' 已复制到剪贴板');
}

