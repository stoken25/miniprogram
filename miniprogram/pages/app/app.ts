// app.ts
// import jnrIcon from '../../image/app/jnr_icon.png'
// import jncIcon from '../../image/app/jnc_icon.png'
Page({
  data: {
    navList: [
      {
        navTitle: '基本应用',
        children: [
          {
            name: '纪念日',
            desc: '有6个重要日期',
            icon: '../../image/app/jnr_icon.png',
            path: '/pages/memorialDay/memorialDay',
            width: '68rpx',
            height: '68rpx'
          },
          {
            name: '纪念册',
            desc: '有129张纪念照片',
            icon: '../../image/app/jnc_icon.png',
            path: '/pages/memorialBook/memorialBook',
            width: '68rpx',
            height: '68rpx'
          }
        ]
      },
    ]
  },
  // 事件处理
  turnToPage(e: any) {
    console.log(e)
    let url = e.currentTarget.dataset.path
    wx.navigateTo({
      url: url
    })
  },
  onLoad() {
    // this.setData({
      
    // })
  },
})