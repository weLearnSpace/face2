export default {
  menu: [
    {
      def: 'yixve/btn_zhinengtingzhenqi_nor.png',
      act: 'yixve/btn_zhinengtingzhenqi_sel.png',
    },
    {
      def: 'yixve/btn_zhinengwenduji_nor.png',
      act: 'yixve/btn_zhinengwenduji_sel.png',
    },
    {
      def: 'yixve/btn_zhinengxueyaji_nor.png',
      act: 'yixve/btn_zhinengxueyaji_sel.png',
    }
  ],
  content: [
    // --- part ---
    {
      bg: {
        url: 'yixve/bg_zhinengtingzhenqi.png',
        style: 'margin: 45px 0px 0px 120px'
      },
      item: {
        style: 'margin-left: 70px;',
        body: { url: 'yixve/pic_zhinengtingzhenqi.png', style: 'margin: -40px 0 0 0' },
        bg: { url: 'yixve/bg_bglight_zhinengtingzhenqi.png', style: 'margin: -40px 0px 0px 1px' },
        light: { url: 'yixve/bg_light_zhinengtingzhenqi.png', style: 'margin: 258px 0 0 99px' }
      }
    },
    // --- part ---
    {
      bg: {
        url: 'yixve/bg_zhinengwenduji.png',
        style: 'margin: 60px 0px 0px -120px'
      },
      item: {
        // style: 'margin-left: -80px;',
        body: { url: 'yixve/pic_zhinengwenduji.png', style: 'margin: 12px 0px 0px -40px' },
        bg: { url: 'yixve/bg_bglight_zhinengwenduji.png', style: 'margin: -14px 0px 0px -65px' },
        light: { url: 'yixve/bg_light_zhinengwenduji.png', style: 'margin: 20px 0px 0px 35px' }
      }
    },
    // --- part ---
    {
      bg: {
        url: 'yixve/bg_zhinengwenduji.png',
        style: 'margin: 60px 0px 0px -120px'
      },
      item: {
        // style: 'margin-left: -80px;',
        body: { url: 'yixve/pic_zhinengxueyaji.png', style: 'margin: 180px 0px 0px 270px' },
        // bg: { url: 'yixve/bg_light_zhinengwenduji.png', style: 'margin: 145px 0px 0px 331px' },
        // light: { url: 'dianzi/etc-light.png', style: 'margin: 0 0 0 0' }
      }
    },
  ]
}
