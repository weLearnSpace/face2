export default {
  menu: [
    {
      def: 'chezai/btn_chezai_nor.png',
      act: 'chezai/btn_chezai_nor.png'
    },
    {
      def: 'chezai/btn_diandanche_nor.png',
      act: 'chezai/btn_diandanche_sel.png'
    },
    {
      def: 'chezai/btn_ETC_nor.png',
      act: 'chezai/btn_ETC_sel.png'
    }
  ],
  content: [
    // --- part ---
    {
      bg: {
        url: 'chezai/pro1-bg.png',
        style: 'margin: 30px 0 0 0'
      },
      item: {
        style: 'margin-left: -80px;',
        body: { url: 'chezai/pro1.png', },
        bg: { url: 'chezai/pro1-guang.png' },
        light: { url: 'chezai/pro1-gaoguang.png' }
      }
    },
    // --- part ---
    {
      bg: {
        url: 'chezai/bg_chezaidingwei.png',
        style: 'margin: 30px 0 0 20px'
      },
      item: {
        // style: 'margin-left: -80px;',
        body: { url: 'chezai/chanpin-che.png', style: 'margin: -50px 0 0 0' },
        // bg: { url: 'chezai/pro1-guang.png' },
        light: { url: 'chezai/che_guang.png', style: 'margin: 0 0 0 146px' }
      }
    },
    // --- part ---
    {
      bg: {
        url: 'chezai/etc-bg.png',
        style: 'margin: 30px 0 0 20px'
      },
      item: {
        // style: 'margin-left: -80px;',
        body: { url: 'chezai/etc-pic.png', style: 'margin: 240px 0 0 280px' },
        bg: { url: 'chezai/etc-bg_faguang.png', style: 'margin: 210px 0px 0px 250px' },
        light: { url: 'chezai/etc-light.png', style: 'margin: 0 0 0 0' }
      }
    },
  ]
}
