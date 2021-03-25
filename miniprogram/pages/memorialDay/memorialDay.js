"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialog_1 = require("@vant/weapp/dist/dialog/dialog");
Page({
    data: {
        slideButtons: [{
                type: 'warn',
                text: '删除',
                extClass: 'test',
            }],
        Dialog: dialog_1.default,
        dateList: [
            {}
        ],
        showAddDialog: false
    },
    slideButtonTap: function (e) {
        console.log('slide button tap', e.detail);
    },
    openAddDialog: function () {
        this.setData({
            showAddDialog: true
        });
    },
    buttontap: function (e) {
        console.log(e);
    },
    onLoad: function () {
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtb3JpYWxEYXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW1vcmlhbERheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlEQUFvRDtBQUlwRCxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixZQUFZLEVBQUUsQ0FBQztnQkFDYixJQUFJLEVBQUUsTUFBTTtnQkFDWixJQUFJLEVBQUUsSUFBSTtnQkFDVixRQUFRLEVBQUUsTUFBTTthQUNqQixDQUFDO1FBQ0YsTUFBTSxrQkFBQTtRQUNOLFFBQVEsRUFBRTtZQUNSLEVBRUM7U0FDRjtRQUNELGFBQWEsRUFBRSxLQUFLO0tBQ3JCO0lBQ0QsY0FBYyxFQUFkLFVBQWUsQ0FBTTtRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQWEzQyxDQUFDO0lBQ0QsYUFBYTtRQUNYLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxhQUFhLEVBQUUsSUFBSTtTQUNwQixDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsU0FBUyxFQUFULFVBQVUsQ0FBTTtRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDaEIsQ0FBQztJQUNELE1BQU07SUFFTixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWVtb3JpYWxEYXkudHNcbmltcG9ydCBEaWFsb2cgZnJvbSAnQHZhbnQvd2VhcHAvZGlzdC9kaWFsb2cvZGlhbG9nJztcblxuLy8gaW1wb3J0IHtmb3JtYXRUaW1lfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbFwiXG4vLyBjb25zb2xlLmxvZygnZm9ybWF0VGltZScsIGZvcm1hdFRpbWUpXG5QYWdlKHtcbiAgZGF0YToge1xuICAgIHNsaWRlQnV0dG9uczogW3tcbiAgICAgIHR5cGU6ICd3YXJuJyxcbiAgICAgIHRleHQ6ICfliKDpmaQnLFxuICAgICAgZXh0Q2xhc3M6ICd0ZXN0JyxcbiAgICB9XSxcbiAgICBEaWFsb2csXG4gICAgZGF0ZUxpc3Q6IFtcbiAgICAgIHtcblxuICAgICAgfVxuICAgIF0sXG4gICAgc2hvd0FkZERpYWxvZzogZmFsc2VcbiAgfSxcbiAgc2xpZGVCdXR0b25UYXAoZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ3NsaWRlIGJ1dHRvbiB0YXAnLCBlLmRldGFpbClcbiAgICAvLyBjb25zdCB7IHBvc2l0aW9uLCBpbnN0YW5jZSB9ID0gZS5kZXRhaWw7XG4gICAgLy8gc3dpdGNoIChwb3NpdGlvbikge1xuICAgIC8vICAgY2FzZSAnbGVmdCc6XG4gICAgLy8gICBjYXNlICdjZWxsJzpcbiAgICAvLyAgIGNhc2UgcG9zaXRpb24gPT0gJ3JpZ2h0JzpcbiAgICAvLyAgICAgRGlhbG9nLmNvbmZpcm0oe1xuICAgIC8vICAgICAgIG1lc3NhZ2U6ICfnoa7lrprliKDpmaTlkJfvvJ8nLFxuICAgIC8vICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAvLyAgICAgICBpbnN0YW5jZS5jbG9zZSgpO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyAgICAgYnJlYWtcbiAgICAvLyB9XG4gIH0sXG4gIG9wZW5BZGREaWFsb2coKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHNob3dBZGREaWFsb2c6IHRydWVcbiAgICB9KVxuICB9LFxuICBidXR0b250YXAoZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIFxuICB9XG59KSJdfQ==