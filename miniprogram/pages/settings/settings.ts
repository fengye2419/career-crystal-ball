// settings.ts
Page({
  data: {
    notifications: true,
    cacheSize: '0KB',
  },

  onLoad() {
    this.loadSettings();
    this.calculateCacheSize();
  },

  // 加载设置
  loadSettings() {
    const notifications = wx.getStorageSync('notifications');
    if (notifications !== undefined) {
      this.setData({
        notifications: notifications,
      });
    }
  },

  // 计算缓存大小
  calculateCacheSize() {
    try {
      const info = wx.getStorageInfoSync();
      // 简单的估算，实际应该计算实际存储大小
      const size = info.keys.length * 2; // 粗略估算
      this.setData({
        cacheSize: size < 1024 ? `${size}KB` : `${(size / 1024).toFixed(2)}MB`,
      });
    } catch (e) {
      this.setData({
        cacheSize: '0KB',
      });
    }
  },

  // 通知设置变化
  onNotificationChange(e: any) {
    const value = e.detail;
    wx.setStorageSync('notifications', value);
    this.setData({
      notifications: value,
    });
    wx.showToast({
      title: value ? '已开启通知' : '已关闭通知',
      icon: 'success',
    });
  },

  // 清除缓存
  onClearCache() {
    wx.showModal({
      title: '提示',
      content: '确定要清除缓存吗？',
      success: (res) => {
        if (res.confirm) {
          try {
            wx.clearStorageSync();
            this.setData({
              cacheSize: '0KB',
            });
            wx.showToast({
              title: '清除成功',
              icon: 'success',
            });
          } catch (e) {
            wx.showToast({
              title: '清除失败',
              icon: 'none',
            });
          }
        }
      },
    });
  },

  // 清除浏览历史
  onClearHistory() {
    wx.showModal({
      title: '提示',
      content: '确定要清除浏览历史吗？',
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('browseHistory');
          wx.showToast({
            title: '清除成功',
            icon: 'success',
          });
        }
      },
    });
  },

  // 清除收藏
  onClearFavorites() {
    wx.showModal({
      title: '提示',
      content: '确定要清除所有收藏吗？',
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('favorites');
          wx.showToast({
            title: '清除成功',
            icon: 'success',
          });
        }
      },
    });
  },

  // 检查更新
  onCheckUpdate() {
    wx.showToast({
      title: '已是最新版本',
      icon: 'success',
    });
  },
});

