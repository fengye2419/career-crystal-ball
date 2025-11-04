// my.ts
Page({
  data: {
    userInfo: {
      nickName: '',
      avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    defaultAvatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
  },

  onLoad() {
    // 检查是否已登录
    this.checkLoginStatus();
  },

  onShow() {
    // 每次显示页面时检查登录状态
    this.checkLoginStatus();
    // 更新自定义 tabBar 选中状态
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1,
      });
    }
  },

  // 检查登录状态
  checkLoginStatus() {
    // 从本地存储读取用户信息
    const userInfo = wx.getStorageSync('userInfo');
    if (userInfo && userInfo.nickName) {
      this.setData({
        userInfo: userInfo,
        hasUserInfo: true,
      });
    }
  },

  // 登录
  onLogin() {
    if (this.data.canIUseGetUserProfile) {
      wx.getUserProfile({
        desc: '用于完善用户资料',
        success: (res) => {
          const userInfo = {
            nickName: res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl,
          };
          // 保存到本地存储
          wx.setStorageSync('userInfo', userInfo);
          this.setData({
            userInfo: userInfo,
            hasUserInfo: true,
          });
          wx.showToast({
            title: '登录成功',
            icon: 'success',
          });
        },
        fail: () => {
          wx.showToast({
            title: '登录失败',
            icon: 'none',
          });
        },
      });
    } else {
      wx.showToast({
        title: '请使用新版本微信',
        icon: 'none',
      });
    }
  },

  // 选择头像
  onChooseAvatar(e: any) {
    const { avatarUrl } = e.detail;
    const userInfo = {
      ...this.data.userInfo,
      avatarUrl: avatarUrl,
    };
    // 保存到本地存储
    wx.setStorageSync('userInfo', userInfo);
    this.setData({
      userInfo: userInfo,
      hasUserInfo: userInfo.nickName && avatarUrl && avatarUrl !== this.data.defaultAvatarUrl,
    });
  },

  // 输入昵称
  onInputChange(e: any) {
    const nickName = e.detail.value;
    const userInfo = {
      ...this.data.userInfo,
      nickName: nickName,
    };
    // 保存到本地存储
    wx.setStorageSync('userInfo', userInfo);
    this.setData({
      userInfo: userInfo,
      hasUserInfo: nickName && userInfo.avatarUrl && userInfo.avatarUrl !== this.data.defaultAvatarUrl,
    });
  },

  // 退出登录
  onLogout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          // 清除本地存储
          wx.removeStorageSync('userInfo');
          this.setData({
            userInfo: {
              nickName: '',
              avatarUrl: this.data.defaultAvatarUrl,
            },
            hasUserInfo: false,
          });
          wx.showToast({
            title: '已退出登录',
            icon: 'success',
          });
        }
      },
    });
  },

  // 其他功能点击
  onMenuItemTap(e: any) {
    const { type } = e.currentTarget.dataset;
    if (!this.data.hasUserInfo && type !== 'settings' && type !== 'about') {
      wx.showToast({
        title: '请先登录',
        icon: 'none',
      });
      return;
    }

    switch (type) {
      case 'favorites':
        wx.navigateTo({
          url: '/pages/favorites/favorites',
        });
        break;
      case 'history':
        wx.navigateTo({
          url: '/pages/history/history',
        });
        break;
      case 'settings':
        wx.navigateTo({
          url: '/pages/settings/settings',
        });
        break;
      case 'about':
        wx.navigateTo({
          url: '/pages/about/about',
        });
        break;
      default:
        wx.showToast({
          title: '功能开发中',
          icon: 'none',
        });
    }
  },
});
