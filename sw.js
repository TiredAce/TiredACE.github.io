/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","d08c642c498318b986cf73ca2fd4b49d"],["/about/index.html","978886467bddd570c9360d95c8dad171"],["/archives/2024/08/index.html","47e891663f77fe5dfadf217fe8d3c61c"],["/archives/2024/09/index.html","11a567c2e49ae39a031a05f9f6a1bfd2"],["/archives/2024/10/index.html","7be028d41b0018154fd7b355adaba9c3"],["/archives/2024/index.html","170b7537d768cf60485d3a8df7265ba2"],["/archives/2025/03/index.html","cc76cc61d04524ec4f0b98d2ae45ea04"],["/archives/2025/05/index.html","af0950731b271bfb7ccb40e6c19e4689"],["/archives/2025/index.html","3e8f6136b51e944b8b48a804f439166a"],["/archives/index.html","1047a3fdd390712604b1a01dde2cb29c"],["/box/font/AlexBrush-Regular.ttf","c8b7ff20d0c0a86dadc1fa5fa77f58dc"],["/categories/Algorithm/index.html","35b97770826719e5d510586f3f6e9423"],["/categories/Book-review/index.html","ca25ad36fcf5ece82ef4d1186994301e"],["/categories/CS-Basics/index.html","c55016bcaaa4c1a368c4a65e468e1153"],["/categories/Front-end-Developer/index.html","1538052d294609960dde4f9adc09467e"],["/categories/Mathematic/index.html","745263704d1177b3263d0d5367208d54"],["/categories/Physics/index.html","7478b7227e9d587b93b422db5a2c8f81"],["/categories/Research/index.html","9f10f832f1861eef97b6f7836c5c9da1"],["/categories/index.html","7b55f21d612f1685875e9b735e53ab34"],["/contact/index.html","538f00f4f3a5fbccb630d540d84426bf"],["/css/barrager.css","cae021aaeec7e34dfaf7a1db62d9b058"],["/css/bb.css","67e5f036b92bda8683085e8ca5aadcad"],["/css/dark.css","6d246c02aeb6a2c25380a1e16e9ca9a7"],["/css/gallery.css","9507b3703e3d1c40a89e48ac931ee742"],["/css/gitment.css","92e5f39e08acb56d6e2603610736be89"],["/css/heartbeat.min.css","2badc378a16138e079edef25c0d6cae7"],["/css/indexcover.css","7573bf1fa7fac62cc7a3f71876f4e36d"],["/css/matery.css","e9bd1b4e0498d1cfeed4e67eda829cb4"],["/css/my-gitalk.css","7b63a86d9b013cd44522e26bf4876522"],["/css/my.css","5c591c306d3249e514135a01d12d6953"],["/css/post.css","5e49ee023da2afbbc45745941687300a"],["/css/reward.css","ed9ca93af69924e2141f8a325badd1ac"],["/favicon.png","bb44feefd80d6541316f0a21cb5cb824"],["/friends/index.html","88586d995201f1986e03cdefd395d818"],["/index.html","8d73b739d79b12a954a54f134b6537a9"],["/js/MathJax.js","05519bea1590a25cccfbaf79edef8b00"],["/js/anime.min.js","7b7d9c2344ec7bb776c95e6d9144470f"],["/js/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/js/fireworks.js","ed626c02f6b683ad43208e5d5784a769"],["/js/gallery-encrypt.js","84a2c90b15a9313ca9a29ef49e70ba3d"],["/js/jquery.barrager.js","1c84c8e84cd2f94bdb222c75f0638bb6"],["/js/markmap.js","a0c1a7b518367082b3ab51c66c90a5f5"],["/js/matery.js","beb9707b2284c9a554e6f42968863040"],["/js/search.js","7eca48f0950d5e0a2e04b65964c34d2f"],["/js/tw_cn.js","607d70d99b9efd8a7230d14a5486fc70"],["/libs/404/bodymovin.js","9bbbbd90be37a1a414a604d57b2c07b9"],["/libs/404/data.js","a6919f5d3328c626b49d752d237bcaa6"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","ebdfaf324605a4d3859ef347b1d2bc22"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/aplayer/Meting.min.js","c0e989e618a2c6f90f59fa1822941d75"],["/libs/awesome/css/all.css","0462be8d1608e2d32084b6a434f7a94c"],["/libs/awesome/css/all.min.css","8ef777107c4620d4ddd4f8c4bb14a36c"],["/libs/awesome/webfonts/fa-brands-400.ttf","3c90ddcce4c5c666e642e5b6ae53ede6"],["/libs/awesome/webfonts/fa-regular-400.ttf","02acddafdebd72be23b03798c86f2fec"],["/libs/awesome/webfonts/fa-solid-900.ttf","a59a3077d72245429c95c29dfe119546"],["/libs/awesome/webfonts/fa-v4compatibility.ttf","6334955791896af71300ae5c46e8fb08"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/fancybox/fancybox.js","49a6b4d019a934bcf83f0c397eba82d8"],["/libs/fancybox/jquery.fancybox.css","b875ee450d527f5ef2feae54d03ddd61"],["/libs/gitalk/gitalk.css","17f9d8e46019cee43d475ad4315b653f"],["/libs/gitalk/gitalk.min.js","7152eaccbb4bfa6333e19971960018e9"],["/libs/gitment/gitment-default.css","5fc17c4fb7ad83c15338328feb2446bb"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","6d84e4c4fd3a6913cf3980876dbc3754"],["/libs/jquery/jquery-3.6.0.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/libs/justifiedGallery/justifiedGallery.min.css","0eb3894f1fb48fbc54fbd2072b4372f8"],["/libs/justifiedGallery/justifiedGallery.min.js","f12e15ba020d049ba166af44960051c9"],["/libs/lightGallery/css/lightgallery.min.css","0ecaf59cd1b7e19f2a7b34683d32068c"],["/libs/lightGallery/fonts/lg.svg","e2ec05977cb4b0a18bbcb7f607b79620"],["/libs/lightGallery/fonts/lg.ttf","f4292655f93dd12d9b8e4fc067ef2489"],["/libs/lightGallery/fonts/lg.woff","1fbfd4bcffccb94e8e8a5ea70616b296"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","b4705ab663a9555d29fa69a3cf6bec0b"],["/libs/masonry/masonry.pkgd.min.js","520e46df77727aaf3d5e799ef241be02"],["/libs/materialize/materialize.min.css","842179eb819c78331f239dd148de48a3"],["/libs/materialize/materialize.min.js","3413ad1da31c4b6a7a4392e9271d481f"],["/libs/mermaid/mermaid.min.css","5e9cbdf9d18097fc1d4649670a5be633"],["/libs/mermaid/mermaid.min.js","ded87f243544923cd210927ca94ab13c"],["/libs/minivaline/MiniValine.js","bb0f8ed46503472ce77575f9db9dda93"],["/libs/others/TencentCaptcha.js","628af9af35fd7579c1b5f481f7a77aa0"],["/libs/others/bubble.js","7f02a1c0bd90170e485303090d90b6e2"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/others/sakura-half.js","d1cccaec887352d5fff341f873ee0210"],["/libs/others/sakura-reduce.js","c86b1fe1a4f144ec4784b13b17821869"],["/libs/others/sakura-small.js","d9a110e05f736ef48c93f05b45edd397"],["/libs/others/sakura.js","cb6251075cc14487276119b508cd68bf"],["/libs/others/snow.js","f320c79941e71f888b78084d8041e8d9"],["/libs/others/star.js","27343eec730d8dc904e90c898ee84824"],["/libs/prism/prism.min.css","4b60600e667d6e9c12c09847efad9212"],["/libs/prism/prism.min.js","c5836472f4637c9b4ab02b6f4eaf0bae"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","06e77685476b25877772b782a7a72319"],["/libs/tocbot/tocbot.min.js","4d7b1dfb31f74b6d0701cf3120933597"],["/libs/twikoo/twikoo.all.min.js","feefb4c63d8eea58211ef6113d5ef163"],["/libs/typed/typed.js","477fdd6405150093080290d2e8153eac"],["/libs/valine/Valine.min.js","331401bbfbdcceabffa29e3507e00be4"],["/libs/valine/av-min.js","b3a0738d1144660f94741da963c1d268"],["/libs/waline/Waline.min.js","ed6cbbe9d1e40233030635398ed386aa"],["/medias/barrager/0.png","f5d8318197ffd7ce9aacf308bf186c5e"],["/medias/barrager/1.png","ea244312d1bf53680470f3da4d308bb4"],["/medias/barrager/2.png","50e265a8acfea4b3bafd407dff4ceaba"],["/medias/barrager/close.png","ab45ca050318e57b6559bb3503bc19a1"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/loading.gif","c5f948f8bcab5ca2c993889983f869a5"],["/no_post/A-Comprehensive-Overview-of-LoRA.html","d41d8cd98f00b204e9800998ecf8427e"],["/no_post/Decoding-Strategies-in-LLMs.html","d41d8cd98f00b204e9800998ecf8427e"],["/page/2/index.html","fc8daee2d1a219f377c65651273c15ec"],["/photos/index.html","13d52769f223761506d4a59b9dcb4ab9"],["/photos/pppdx&cbh/index.html","3a8778b40f083d97534fa1031f9ac951"],["/photos/pppdx&cbh2.0/index.html","479690b904f82e7b9588f967bb6a506c"],["/posts/Algorithm-Questionnaire.html","d63eac32d14cb421d2223e37f8fe0dbb"],["/posts/Basic-scientific-literacy.html","cf796c3f932f3a51ceb5f1b407143ddc"],["/posts/Basics-of-mechanics.html","c7ff86c9745efecd39e3a5b04a5573ef"],["/posts/Deep-Learning-for-computer-vision.html","791bbe72adf3a0770aecae8b87920a75"],["/posts/Essence-of-calculus.html","8f6056dde935b75264b786f1731c1123"],["/posts/How-to-study.html","aa9acc1cc202b7abb115d0b7362ff0a2"],["/posts/Interview-Computer-Network.html","0a429484cf8e419df7b4b43717381883"],["/posts/Vue3-0-Basics.html","6b17101d34de8be2ea5fa648de217817"],["/pppdx&cbh/index.html","3a8778b40f083d97534fa1031f9ac951"],["/pppdx&cbh2.0/index.html","479690b904f82e7b9588f967bb6a506c"],["/sw-register.js","1921cf65881e60d642f4b4087a22b58f"],["/tags/Algorithm/index.html","2a2f82371b4c4e0ecaff38a2cbc1e248"],["/tags/Calculus/index.html","e2df9988049e7973783601e862b14c3f"],["/tags/Computer-Network/index.html","2a655165371d861ae7e491a249a127c2"],["/tags/Computer-Vision/index.html","c9bacae478de758265c336a0c9172424"],["/tags/Deep-Learning/index.html","ac30323ee20d9051d1bf4b1ff393c40b"],["/tags/Graphic/index.html","60d30ef59fa51805f8e878113b1ef868"],["/tags/Interview/index.html","b22f42119d7b10c4dcb5c691244e6d3b"],["/tags/Leetcode/index.html","bd1ab65b00d593a961b8334f4cc2a5c4"],["/tags/Mathematic/index.html","c8b44babc65a7fbf29ff1a7120b4590d"],["/tags/Mechanics/index.html","ebb0004f261dce4a9493db9742134e59"],["/tags/Physics/index.html","ac759261cbcd733d2b494f5f97ba5b16"],["/tags/Research/index.html","578c517c06e3010ee52bce9da60056de"],["/tags/Study/index.html","e14516cc61a4b201d65dee3d72a0e83a"],["/tags/Vue/index.html","69721bc4e8fcd64c9fab1562efccc37a"],["/tags/Web/index.html","620b018766bb2efe95a703c458212506"],["/tags/index.html","03fb5d177cabb4f77e6be4950c7432e2"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
