// memorialDay.ts
import Dialog from '@vant/weapp/dist/dialog/dialog';

// import {formatTime} from "../../utils/util"
// console.log('formatTime', formatTime)
Page({
  data: {
    slideButtons: [{
      type: 'warn',
      text: '删除',
      extClass: 'test',
    }],
    Dialog,
    dateList: [
      {

      }
    ],
    showAddDialog: false
  },
  slideButtonTap(e: any) {
    console.log('slide button tap', e.detail)
    // const { position, instance } = e.detail;
    // switch (position) {
    //   case 'left':
    //   case 'cell':
    //   case position == 'right':
    //     Dialog.confirm({
    //       message: '确定删除吗？',
    //     }).then(() => {
    //       instance.close();
    //     });
    //     break
    // }
  },
  openAddDialog() {
    this.setData({
      showAddDialog: true
    })
  },
  buttontap(e: any) {
    console.log(e)
  },
  onLoad() {
    
  }
})