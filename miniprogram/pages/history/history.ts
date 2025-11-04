// history.ts
import { Career, getCareerById } from '../../utils/careerData';

interface HistoryItem extends Career {
  viewTime: string;
}

Page({
  data: {
    history: [] as HistoryItem[],
  },

  onLoad() {
    this.loadHistory();
  },

  onShow() {
    // 每次显示页面时重新加载历史记录
    this.loadHistory();
  },

  // 加载浏览历史
  loadHistory() {
    const historyData = wx.getStorageSync('browseHistory') || [];
    const history = historyData
      .map((item: { id: string; viewTime: string }) => {
        const career = getCareerById(item.id);
        if (career) {
          return {
            ...career,
            viewTime: item.viewTime,
          };
        }
        return null;
      })
      .filter((item: HistoryItem | null) => item !== null) as HistoryItem[];
    
    this.setData({
      history: history,
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

