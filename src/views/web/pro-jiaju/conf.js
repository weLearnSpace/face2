export default {
  menu: [
    {
      def: 'jiaju/btn_zhinengchatou_nor.png',
      act: 'jiaju/btn_zhinengchatou_sel.png',
    },
    {
      def: 'jiaju/btn_zhinengjiaju_nor.png',
      act: 'jiaju/btn_zhinengjiaju_sel.png',
    },
    {
      def: 'jiaju/btn_zhinengmensuo_nor.png',
      act: 'jiaju/btn_zhinengmensuo_sel.png',
    }
  ],
  content: [
    // --- part ---
    {
      bg: {
        url: 'jiaju/bg_zhinengchatou.png',
        style: 'margin: 30px 0 0 -60px'
      },
      item: {
        style: 'margin-left: 70px;',
        body: { url: 'jiaju/pic_zhinenghatou.png', },
        bg: { url: 'jiaju/bg_bglight_zhinengchatou.png', style: 'margin: -83px 0px 0px -81px' },
        light: { url: 'jiaju/bg_light_zhinengchatou.png', style: 'margin: -46px 0 0 -93px' }
      }
    },
    // --- part ---
    {
      bg: {
        url: 'jiaju/bg_zhinengjiaju.png',
        style: 'margin: 60px 0px 0px 20px'
      },
      item: {
        // style: 'margin-left: -80px;',
        body: { url: 'jiaju/pic_zhinengjiaju.png', style: 'margin: 42px 0 0 0' },
        bg: { url: 'jiaju/bg_bglight_zhinengjiaju.png', style: 'margin: -39px 0px 0px -81px' },
        light: { url: 'jiaju/bg_light_zhinengjiaju.png', style: 'margin: 0 0 0 146px' }
      }
    },
    // --- part ---
    {
      bg: {
        url: 'jiaju/bg_zhinengmensuo.png',
        style: 'margin: 180px 0px 0px 110px'
      },
      item: {
        // style: 'margin-left: -80px;',
        body: { url: 'jiaju/pic_zhinengmensuo.png', style: 'margin: 160px 0px 0px 350px' },
        bg: { url: 'jiaju/bg_bglight_zhinengmensuo.png', style: 'margin: 145px 0px 0px 331px' },
        light: { url: 'jiaju/bg_light_zhinengmensuo.png', style: 'margin: 63px 0px 0px 306px' }
      }
    },
  ]
}
