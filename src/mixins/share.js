// 分享
export default {
	// 分享给朋友
	onShareAppMessage(res) {
		return {
			path:'/pages/index/index',
			success(res) {
				uni.showToast({
					title: '分享成功'
				})
			},
			fail(res) {
				uni.showToast({
					title: '分享失败',
					icon: 'none'
				})
			}
		}
	},
	
	// 分享到朋友圈
	onShareTimeline(res) {

	}
}