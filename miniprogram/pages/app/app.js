"use strict";
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
    turnToPage: function (e) {
        console.log(e);
        var url = e.currentTarget.dataset.path;
        wx.navigateTo({
            url: url
        });
    },
    onLoad: function () {
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUU7WUFDUDtnQkFDRSxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsUUFBUSxFQUFFO29CQUNSO3dCQUNFLElBQUksRUFBRSxLQUFLO3dCQUNYLElBQUksRUFBRSxTQUFTO3dCQUNmLElBQUksRUFBRSw4QkFBOEI7d0JBQ3BDLElBQUksRUFBRSxnQ0FBZ0M7d0JBQ3RDLEtBQUssRUFBRSxPQUFPO3dCQUNkLE1BQU0sRUFBRSxPQUFPO3FCQUNoQjtvQkFDRDt3QkFDRSxJQUFJLEVBQUUsS0FBSzt3QkFDWCxJQUFJLEVBQUUsV0FBVzt3QkFDakIsSUFBSSxFQUFFLDhCQUE4Qjt3QkFDcEMsSUFBSSxFQUFFLGtDQUFrQzt3QkFDeEMsS0FBSyxFQUFFLE9BQU87d0JBQ2QsTUFBTSxFQUFFLE9BQU87cUJBQ2hCO2lCQUNGO2FBQ0Y7U0FDRjtLQUNGO0lBRUQsVUFBVSxFQUFWLFVBQVcsQ0FBTTtRQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDZCxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUE7UUFDdEMsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNaLEdBQUcsRUFBRSxHQUFHO1NBQ1QsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU07SUFJTixDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLnRzXG4vLyBpbXBvcnQgam5ySWNvbiBmcm9tICcuLi8uLi9pbWFnZS9hcHAvam5yX2ljb24ucG5nJ1xuLy8gaW1wb3J0IGpuY0ljb24gZnJvbSAnLi4vLi4vaW1hZ2UvYXBwL2puY19pY29uLnBuZydcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbmF2TGlzdDogW1xuICAgICAge1xuICAgICAgICBuYXZUaXRsZTogJ+WfuuacrOW6lOeUqCcsXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ+e6quW/teaXpScsXG4gICAgICAgICAgICBkZXNjOiAn5pyJNuS4qumHjeimgeaXpeacnycsXG4gICAgICAgICAgICBpY29uOiAnLi4vLi4vaW1hZ2UvYXBwL2pucl9pY29uLnBuZycsXG4gICAgICAgICAgICBwYXRoOiAnL3BhZ2VzL21lbW9yaWFsRGF5L21lbW9yaWFsRGF5JyxcbiAgICAgICAgICAgIHdpZHRoOiAnNjhycHgnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnNjhycHgnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAn57qq5b+15YaMJyxcbiAgICAgICAgICAgIGRlc2M6ICfmnIkxMjnlvKDnuqrlv7XnhafniYcnLFxuICAgICAgICAgICAgaWNvbjogJy4uLy4uL2ltYWdlL2FwcC9qbmNfaWNvbi5wbmcnLFxuICAgICAgICAgICAgcGF0aDogJy9wYWdlcy9tZW1vcmlhbEJvb2svbWVtb3JpYWxCb29rJyxcbiAgICAgICAgICAgIHdpZHRoOiAnNjhycHgnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnNjhycHgnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgIF1cbiAgfSxcbiAgLy8g5LqL5Lu25aSE55CGXG4gIHR1cm5Ub1BhZ2UoZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBsZXQgdXJsID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGF0aFxuICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgdXJsOiB1cmxcbiAgICB9KVxuICB9LFxuICBvbkxvYWQoKSB7XG4gICAgLy8gdGhpcy5zZXREYXRhKHtcbiAgICAgIFxuICAgIC8vIH0pXG4gIH0sXG59KSJdfQ==