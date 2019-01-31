const qcloudSDK = require('qcloud-cdn-node-sdk');

qcloudSDK.config({
    secretId: 'AKIDJMEfZVKcVDWqbGDKh84qjHZbI2yML9yH',
    secretKey: 'c2DPMxhPAnhwKa99vR6nwqhUIZiofOOy'
})

qcloudSDK.request('RefreshCdnDir', {
	'dirs.1': 'https://lruihao.cn' 
}, (res) => {
    console.log(res)
})