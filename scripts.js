function showOptions(phoneNumber) {
    // 显示弹出框
    document.getElementById('popup').style.display = 'flex';
    
    // 为拨打电话和复制按钮添加事件监听器
    document.getElementById('call-btn').onclick = function() {
        window.location.href = 'tel:' + phoneNumber;
    };

    document.getElementById('copy-btn').onclick = function() {
        copyToClipboard(phoneNumber);
    };
}

function hidePopup() {
    // 隐藏弹出框
    document.getElementById('popup').style.display = 'none';
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
    
    // 隐藏弹出框
    hidePopup();
}