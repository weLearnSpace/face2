export default {
  menu: [
    {
      def: 'dianzi/btn_MIFI_nor.png',
      act: 'dianzi/btn_MIFI_sel.png',
    },
    {
      def: 'dianzi/btn_NB_nor.png',
      act: 'dianzi/btn_NB_sel.png',
    },
    {
      def: 'dianzi/btn_pos_nor.png',
      act: 'dianzi/btn_pos_sel.png',
    }
  ],
  content: [
    // --- part ---
    {
      bg: {
        url: 'dianzi/bg_MIFI.png',
        style: 'margin: 30px 0 0 120px'
      },
      item: {
        style: 'margin-left: 70px;',
        body: { url: 'dianzi/pic_MIFI.png', },
        bg: { url: 'dianzi/bg_bglight_MIFI.png', style: 'margin: -22px 0 0 -32px' },
        // light: { url: 'dianzi/bg_bglight_MIFI.png' }
      }
    },
    // --- part ---
    {
      bg: {
        url: 'dianzi/bg_NB.png',
        style: 'margin: 70px 0 0 120px'
      },
      item: {
        // style: 'margin-left: -80px;',
        body: { url: 'dianzi/pic_NB.png', style: 'margin: 50px 0 0 0' },
        bg: { url: 'dianzi/bg_bglight_NB.png', style: 'margin: 26px 0px 0px -31px' },
        // light: { url: 'dianzi/che_guang.png', style: 'margin: 0 0 0 146px' }
      }
    },
    // --- part ---
    {
      bg: {
        url: 'dianzi/bg_pos.png',
        style: 'margin: 30px 0 0 20px'
      },
      item: {
        // style: 'margin-left: -80px;',
        body: { url: 'dianzi/pic_pos.png', style: 'margin: 240px 0 0 280px' },
        bg: { url: 'dianzi/bg_bglight_pos.png', style: 'margin: 166px 0px 0px 204px' },
        // light: { url: 'dianzi/etc-light.png', style: 'margin: 0 0 0 0' }
      }
    },
  ]
}
