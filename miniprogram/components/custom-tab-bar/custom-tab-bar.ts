// custom-tab-bar.ts
Component({
  data: {
    selected: 0,
    list: [
      {
        pagePath: '/pages/index/index',
        text: '首页',
      },
      {
        pagePath: '/pages/my/my',
        text: '我的',
      },
    ],
  },

  lifetimes: {
    attached() {
      this.updateSelected();
    },
  },

  pageLifetimes: {
    show() {
      this.updateSelected();
    },
  },

  methods: {
    updateSelected() {
      // 获取当前页面路径
      const pages = getCurrentPages();
      if (pages.length === 0) return;
      
      const currentPage = pages[pages.length - 1];
      const url = `/${currentPage.route}`;

      // 设置选中的索引
      const selected = this.data.list.findIndex(item => item.pagePath === url);
      if (selected !== -1) {
        this.setData({
          selected,
        });
      }
    },

    switchTab(e: any) {
      const data = e.currentTarget.dataset;
      const url = data.path;
      
      wx.switchTab({
        url,
        success: () => {
          this.setData({
            selected: data.index,
          });
        },
      });
    },
  },
});

