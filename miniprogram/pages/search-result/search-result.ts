// search-result.ts
import { searchCareers, Career } from '../../utils/careerData';

Page({
  data: {
    keyword: '',
    searchResults: [] as Career[],
  },

  onLoad(options: any) {
    const { keyword } = options;
    if (keyword && keyword.trim()) {
      // 解码 URL 编码的关键词
      const decodedKeyword = decodeURIComponent(keyword.trim());
      this.setData({
        keyword: decodedKeyword,
      });
      this.performSearch(decodedKeyword);
    } else {
      wx.showToast({
        title: '搜索关键词不能为空',
        icon: 'none',
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }
  },

  // 执行搜索
  performSearch(keyword: string) {
    const results = searchCareers(keyword);
    this.setData({
      searchResults: results,
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

