// favorites.ts
import { Career, getCareerById } from '../../utils/careerData';

Page({
  data: {
    favorites: [] as Career[],
  },

  onLoad() {
    this.loadFavorites();
  },

  onShow() {
    // 每次显示页面时重新加载收藏列表
    this.loadFavorites();
  },

  // 加载收藏列表
  loadFavorites() {
    const favoriteIds = wx.getStorageSync('favorites') || [];
    const favorites = favoriteIds
      .map((id: string) => getCareerById(id))
      .filter((career: Career | null) => career !== null) as Career[];
    
    this.setData({
      favorites: favorites,
    });
  },

  // 点击职业项
  onCareerTap(e: any) {
    const { id } = e.currentTarget.dataset;
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
    });
  },
});

