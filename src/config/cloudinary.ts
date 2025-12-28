const CLOUDINARY_BASE_URL = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL ||  'https://res.cloudinary.com/OWNER_NAME/image/upload';

export const IMAGE_PRESETS = {
  hero: 'w_1920,h_1080,c_fill,q_auto,f_auto',
  category: 'w_600,h_400,c_fill,q_auto,f_auto',
  product: 'w_800,h_800,c_fill,q_auto,f_auto',
  thumbnail: 'w_400,h_400,c_fill,q_auto,f_auto',
};

export const IMAGES = {
  hero: {
    background: `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.hero}/heroimg_niv99b.jpg`,
    fallback: 'linear-gradient(135deg, #7c3339 0%, #8B6B7A 50%, #9d7c8a 100%)',
  },

  categories: {
    foam: `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.category}/headboard_hzeuoz.jpg`,
    furnishings: `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.category}/curtain_yv47mw.jpg`,
    carpets: `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.category}/floor_lptypa.jpg`,
    wallpapers: `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.category}/wallpaper_uyjqtg.jpg`,
    mattresses: `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.category}/bed_genhop.jpg`,
  },

  products: {
    foam: [
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0032_th3rq5.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0032_th3rq5.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0032_th3rq5.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0032_th3rq5.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0032_th3rq5.jpg`,
    ],
    carpets: [
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0021_fzhxtp.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0021_fzhxtp.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0021_fzhxtp.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0021_fzhxtp.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0021_fzhxtp.jpg`,
    ],
    mattresses: [
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0015_fufjvw.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0015_fufjvw.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0015_fufjvw.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0015_fufjvw.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0015_fufjvw.jpg`,
    ],
    furnishings: [
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/IMG-20250909-WA0024_nwhhj6.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/IMG-20250909-WA0026_rtl9b9.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/IMG-20250909-WA0028_uzivyt.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/IMG-20250909-WA0030_xb2cn8.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0037_gwlr1l.jpg`,
    ],
    wallpapers: [
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/IMG-20250909-WA0022_bwbxx3.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/IMG-20250106-WA0013_futntw.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/WhatsApp_Image_2025-12-21_at_3.27.38_PM_1_xq40wm.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/WhatsApp_Image_2025-12-21_at_3.27.36_PM_2_opd0ym.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1762414066/Vardhaman/IMG-20250909-WA0033_ohu6z7.jpg`,
    ],
  },

  about: {
    craftsmanship: `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.hero}/wallpaper1_kktgqi.jpg`,
  },

  pastWorks: {
      row1: [
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766752048/WhatsApp_Image_2025-12-21_at_3.27.18_PM_ykf7j2.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766752001/WhatsApp_Image_2025-12-21_at_3.27.37_PM_1_szy5vp.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766751957/IMG-20250909-WA0027_j9cuxe.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766751902/WhatsApp_Image_2025-12-21_at_3.26.10_PM_evmgcd.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766752057/IMG-20250909-WA0037_pwswgl.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766752064/IMG-20250909-WA0034_rjddet.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766751964/IMG-20250909-WA0012_xxo5ml.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766752064/IMG-20250909-WA0034_rjddet.jpg`,
      ],
      row2: [
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766751949/WhatsApp_Image_2025-12-20_at_3.28.15_PM_l9hwz4.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766751961/IMG-20250909-WA0015_z4fteb.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766751963/IMG-20250909-WA0014_xo3z3s.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766752033/WhatsApp_Image_2025-12-21_at_3.27.29_PM_1_hbdn8u.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766751940/IMG-20250909-WA0026_rtl9b9.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766752079/IMG-20250909-WA0022_bwbxx3.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766751939/IMG-20250909-WA0028_uzivyt.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766752064/IMG-20250909-WA0034_rjddet.jpg`,
      ],
      row3: [
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766751913/WhatsApp_Image_2025-12-21_at_3.26.03_PM_mzk32l.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766752023/WhatsApp_Image_2025-12-21_at_3.27.30_PM_2_mwghiz.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766752048/WhatsApp_Image_2025-12-21_at_3.27.18_PM_ykf7j2.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766751958/IMG-20250909-WA0020_spbex9.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766751970/IMG-20250909-WA0007_b1joea.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766752062/IMG-20250909-WA0035_bzognf.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766751927/WhatsApp_Image_2025-12-20_at_3.27.23_PM_1_udxfaz.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766752070/IMG-20250909-WA0033_gabj9w.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766751946/WhatsApp_Image_2025-12-20_at_3.28.15_PM_2_zafv8p.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766751874/WhatsApp_Image_2025-12-21_at_3.26.22_PM_l4c1fr.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766752035/WhatsApp_Image_2025-12-21_at_3.27.28_PM_lvyc44.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766751942/IMG-20250909-WA0024_nwhhj6.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766752016/WhatsApp_Image_2025-12-21_at_3.27.34_PM_1_rlkqcm.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766751938/IMG-20250909-WA0030_xb2cn8.jpg`,
      `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS.product}/v1766752053/IMG-20250106-WA0013_futntw.jpg`,
    ],
  }
};



export function getCloudinaryUrl(
  path: string,
  preset: keyof typeof IMAGE_PRESETS = 'product'
): string {
  return `${CLOUDINARY_BASE_URL}/${IMAGE_PRESETS[preset]}/${path}`;
}

export function isCloudinaryUrl(url: string): boolean {
  return url.includes('res.cloudinary.com');
}
