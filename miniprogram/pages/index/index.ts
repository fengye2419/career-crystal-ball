// index.ts
import { hotCareers, Career } from '../../utils/careerData';

Page({
  data: {
    searchKeyword: '',
    hotCareers: [] as Career[],
  },

  onLoad() {
    this.setData({
      hotCareers: hotCareers,
    });
  },

  onShow() {
    // 更新自定义 tabBar 选中状态
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0,
      });
    }
  },

  // 搜索输入
  onSearchInput(e: any) {
    const keyword = e.detail || '';
    this.setData({
      searchKeyword: keyword,
    });
  },

  // 搜索确认
  onSearchConfirm(e: any) {
    const keyword = e.detail || '';
    if (keyword.trim()) {
      // 跳转到搜索结果页面
      wx.navigateTo({
        url: `/pages/search-result/search-result?keyword=${encodeURIComponent(keyword.trim())}`,
      });
    }
  },

  // 清除搜索
  onClearSearch() {
    this.setData({
      searchKeyword: '',
    });
  },

  // 点击职业
  onCareerTap(e: any) {
    const careerId = e.currentTarget.dataset.id;
    if (careerId) {
      wx.navigateTo({
        url: `/pages/detail/detail?id=${careerId}`,
      });
    }
  },
});
