// detail.ts
import { getCareerById, Career } from '../../utils/careerData';

Page({
  data: {
    career: null as Career | null,
  },

  onLoad(options: any) {
    const { id } = options;
    if (id) {
      const career = getCareerById(id);
      if (career) {
        this.setData({
          career: career,
        });
        // 设置导航栏标题
        wx.setNavigationBarTitle({
          title: career.name,
        });
        // 记录浏览历史
        this.recordHistory(id);
      } else {
        wx.showToast({
          title: '职业信息不存在',
          icon: 'none',
        });
        setTimeout(() => {
          wx.navigateBack();
        }, 1500);
      }
    } else {
      wx.showToast({
        title: '参数错误',
        icon: 'none',
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }
  },

  // 记录浏览历史
  recordHistory(id: string) {
    try {
      const history = wx.getStorageSync('browseHistory') || [];
      const now = new Date();
      const timeStr = `${now.getMonth() + 1}月${now.getDate()}日 ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
      
      // 移除已存在的相同记录
      const filteredHistory = history.filter((item: any) => item.id !== id);
      
      // 添加到开头
      filteredHistory.unshift({
        id: id,
        viewTime: timeStr,
      });
      
      // 只保留最近50条记录
      const limitedHistory = filteredHistory.slice(0, 50);
      
      wx.setStorageSync('browseHistory', limitedHistory);
    } catch (e) {
      console.error('记录浏览历史失败:', e);
    }
  },

  // 分享功能
  onShareAppMessage() {
    const { career } = this.data;
    return {
      title: career ? `${career.name} - 职业百科` : '职业百科',
      path: `/pages/detail/detail?id=${career?.id}`,
    };
  },
});

