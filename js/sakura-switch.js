// 樱花效果控制
let sakuraEnabled = localStorage.getItem('sakura-enabled') !== 'false'; // 默认开启

// 加载樱花效果脚本
function loadSakuraScript() {
    // 移除所有现有的樱花元素
    clearAllSakura();
    
    if (sakuraEnabled) {
        // 只在桌面版网页启用特效
        const windowWidth = $(window).width();
        if (windowWidth > 768) {
            // 创建并加载新脚本
            const script = document.createElement('script');
            script.id = 'sakura-script';
            script.src = '/libs/others/sakura.js'; // 使用原始效果
            document.body.appendChild(script);
        }
    }
}

// 移除所有樱花效果
function clearAllSakura() {
    // 强制移除所有樱花元素
    $('.sakura').remove();
    
    // 移除樱花脚本
    $('script[id^="sakura-script"]').remove();
    
    // 尝试停止可能存在的动画循环
    if (window.stop_sakura && typeof window.stop_sakura === 'function') {
        try {
            window.stop_sakura();
        } catch (e) {
            console.log('停止樱花特效失败:', e);
        }
    }
    
    // 重置可能存在的全局变量
    window.sakura_point_arr = null;
    window.stop_sakura = null;
}

// 切换樱花效果
function toggleSakura() {
    sakuraEnabled = !sakuraEnabled;
    localStorage.setItem('sakura-enabled', sakuraEnabled);
    
    // 更新图标状态
    updateSakuraIcon();
    
    // 重新加载脚本或清除效果
    if (sakuraEnabled) {
        loadSakuraScript();
    } else {
        clearAllSakura();
        
        // 延迟再次清理，确保所有樱花都被清除
        setTimeout(function() {
            $('.sakura').remove();
        }, 100);
    }
}

// 更新樱花图标状态
function updateSakuraIcon() {
    const icon = $('#sakura-icon');
    if (sakuraEnabled) {
        icon.removeClass('fa-dove-off').addClass('fa-dove');
        icon.css('color', 'pink');
    } else {
        icon.removeClass('fa-dove').addClass('fa-dove-off');
        icon.css('color', '#aaaaaa');
    }
}

// 文档加载完成后初始化
$(document).ready(function() {
    // 初始化图标状态
    updateSakuraIcon();
    
    // 如果启用了樱花效果且在本地存储中标记为开启，加载樱花效果
    if (typeof theme !== 'undefined' && theme.sakura && theme.sakura.enable && sakuraEnabled) {
        loadSakuraScript();
    } else {
        // 确保页面加载时如果樱花效果是关闭的，清除所有可能的残留
        clearAllSakura();
    }
    
    // 确保页面加载完成后再次检查并清理
    $(window).on('load', function() {
        if (!sakuraEnabled) {
            clearAllSakura();
        }
    });
}); 