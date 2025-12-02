import { AlbumConfig, Photo } from './types';

// ==========================================
// CONFIGURAZIONE GOOGLE DRIVE
// ==========================================
// LINK CARTELLE ORIGINALI (Riferimento):
// Adulti: https://drive.google.com/drive/folders/1d0v9fZFYKlVZY7AzKyWyKH7lJZsJ0jLo
// Ragazzi: https://drive.google.com/drive/folders/101TcCstw9cmLJlrK75WA6SrTqn0o1Q_r

export const createGoogleDrivePhoto = (id: string, caption?: string): Photo => ({
  id: id,
  // URL ottimizzato per la visualizzazione (più stabile di lh3.googleusercontent)
  url: `https://drive.google.com/thumbnail?id=${id}&sz=w1000`, 
  // URL per il download diretto
  downloadUrl: `https://drive.google.com/uc?export=download&id=${id}`,
  caption
});

// ==========================================
// LISTA ID FOTO
// ==========================================

const RAGAZZI_FILE_IDS: string[] = [
  '1Jr88_4ROCty0CyeEb10FwlrqFc5pZyZe', // Ragazzi_001.jpg
  '1Cj0Htsro1vSWYimabgq1KEdAYD9fKtqA', // Ragazzi_002.jpg
  '1tCc8sOFDTuZTvwXtrGx0o6EufTBuTZFC', // Ragazzi_003.jpg
  '1LrOxhiqB4OzZcSw14Xm7IAdi2AWLZ7tm', // Ragazzi_004.jpg
  '197WkRl7ZAdo4ml1ASDP81oiU_vwsC3vk', // Ragazzi_005.jpg
  '1lZCEyylR479vS3NB_XiQWHgpFM91zuYo', // Ragazzi_006.jpg
  '1AJ9yHgCIyRygQBlVPtvgTvqr-jRPjlM2', // Ragazzi_007.jpg
  '1U2oJKnRdMYT87J0ujR13CdpUYM60VPil', // Ragazzi_008.jpg
  '1bV_Do-DjihZvc5OM0sLuikFqRakVBrIh', // Ragazzi_009.jpg
  '1iUcyC4rITP9cMCskvIeAwkOs7NzuuHWu', // Ragazzi_010.jpg
  '16ofsZzoMv5vMXRDaOXGY5x7qx5dpPfOV', // Ragazzi_011.jpg
  '1NeNE4JXCFf-Pc25mC5meGaboGvKXcHTW', // Ragazzi_012.jpg
  '18fWf2dDNcbLMHtfh9qm96QPj-Uc3rKdN', // Ragazzi_013.jpg
  '1dtFml46vDX6LWa5GCzeTZ3vmcB8oPZR6', // Ragazzi_014.jpg
  '1FnObig7K5ZNGImXKo6gKyoVYlqx5VSHR', // Ragazzi_015.jpg
  '1ZOkjXv_IWv2T63V1u--Ulz4eLuOSKW8K', // Ragazzi_016.jpg
  '1eyyJP-Rx5QvoWre0f0By2iEYaSts0IA5', // Ragazzi_017.jpg
  '15U6au55K8HgupwODjURrMVv2_f5C5F5B', // Ragazzi_018.jpg
  '1BWeCXPqv5Nc6BziSbIgVsALnK95TxXBk', // Ragazzi_019.jpg
  '1isZUOuFeOwTR9F2K9zdKUfJLBA9lZvlC', // Ragazzi_020.jpg
  '1qL6vtXwkEeZvH4vvePSCGX5-AlwWrQTE', // Ragazzi_021.jpg
  '12bJRYNy5Q-W55R01etMnXskbvjbKG91M', // Ragazzi_022.jpg
  '1ZeS9nnlxCSULPeswTxPUOruSwOv14SI8', // Ragazzi_023.jpg
  '1ikZw3PR-M_Vl40VzomMTDRMZ2HS5Cvhx', // Ragazzi_024.jpg
  '1hy_vZrJi-Tw7Q5wj-A5JbjpPaLtU4i2d', // Ragazzi_025.jpg
  '1VaA608bNYfHRpBZE1wMuDy-seyGLriU9', // Ragazzi_026.jpg
  '1a2b3SUiyxcIhVnCj4YbZ16vz4yrcPEUS', // Ragazzi_027.jpg
  '1VLGl0Y4cXwBKC9NVTi_JAOdUAC1qQD6b', // Ragazzi_028.jpg
  '1aEHrs6tqMNexLwx0Q8j7S7s7tyUd4AYM', // Ragazzi_029.jpg
  '15H1gJP5YsdtVdMRVKqLoKUsnYrHQiWLF', // Ragazzi_030.jpg
  '1T9zv1_00OyggRsKEHcn6JAMf5MgvnQIv', // Ragazzi_031.jpg
  '1-CDOlBHN_yoaepSRnuOf68eiTzxN03Ue', // Ragazzi_032.jpg
  '1FO5oS3n8B_vY7mQt3wNwXDZ9hON0Q_oA', // Ragazzi_033.jpg
  '1TkmpQrm4jFTpSYMmmv43xQsmBwPRsuul', // Ragazzi_034.jpg
  '1Gy6cTQfotk8tbOVuCayJV-8kdUOCGwYB', // Ragazzi_035.jpg
  '15ROOYyb2uPEZ9OMvsExvMFQ1IO4qcb-p', // Ragazzi_036.jpg
  '1eO7QsNssNIqDMmtLF1N6CKNcC_Bsb5a5', // Ragazzi_037.jpg
  '1gElZE0GzotO2TrwNuX-WUTpXuZvgvR9u', // Ragazzi_038.jpg
  '13togCs06IoH8Vxc9Y3gZ9I22u5gsURim', // Ragazzi_039.jpg
  '17Nt5OSkyX_H_i8l_k-ro7_iHuWP65yeG', // Ragazzi_040.jpg
  '1ixmE2NjlYwa5hrsLHkOi91piVtpCnMXn', // Ragazzi_041.jpg
  '1SU71HG40rB5gMkkmmHa6Ihx5ZV2fbIhx', // Ragazzi_042.jpg
  '1JAnfyAzefvzRIQvx6YEHeXpXFJC9jIGL', // Ragazzi_043.jpg
  '1j_eRn3TLZAkHb4qNfLPlU1Zlj3hvPtWf', // Ragazzi_044.jpg
  '1aRc_kS4PxjIEav0M_qtz5IjDXu4u5JdW', // Ragazzi_045.jpg
  '1UnN4HeQjnUWwArwh8X63nzuEji261Mkf', // Ragazzi_046.jpg
  '1eg7heCb6BBLtJ1I3oMkDUJOjbQCbD0Wl', // Ragazzi_047.jpg
  '1OFC6uE-iypsuFZs96i_v4MjUARQNzW5v', // Ragazzi_048.jpg
  '1qVIxDiFHgZ42-M0He6YsylUSUQfMtUJ-', // Ragazzi_049.jpg
  '1d2ZPIaY9fhkXxVO6Q0IyfV2J4JZb31Ff', // Ragazzi_050.jpg
  '19T66DcF7q96W7OrAxM937ZJXDabzjsjj', // Ragazzi_051.jpg
  '1iP9G-O-GjaGQMaJ2MWcohE2oPmfRQZ7s', // Ragazzi_052.jpg
  '1hvta6ShmWX3OaWr4I1eFeoL7h45dURo4', // Ragazzi_053.jpg
  '1I8rv_ojGFoXFLMWMpi1h8WZQQmKd6pL_', // Ragazzi_054.jpg
  '12vEk7BBFTAem7jTKN-KUo8JLzY4Lf_wB', // Ragazzi_055.jpg
  '1cBJuG4QsG9xHh6QNey_eh5h25srHyau1', // Ragazzi_056.jpg
  '1RdCdxRW_hAJWC1fajP5_dzPkrfV39-Qt', // Ragazzi_057.jpg
  '1gUz10Yf-4wgqEzq1Z2v9zoo22vKITQMy', // Ragazzi_058.jpg
  '1LPBUZJJvzlvKdYlD_Vq8lehbaT7D9hdA', // Ragazzi_059.jpg
  '12GjUfE_SO4kz5p5_QCTEEcAErIxeHXsm', // Ragazzi_060.jpg
  '1AgpZgo1dsw94IAAc_Fn491dyqx9vQGsr', // Ragazzi_061.jpg
  '1yVI4Oj8UcAXc5FTNkTqUqjor2S1vsL0Z', // Ragazzi_062.jpg
  '18gpBg3kM2s0Lr9fiiI1Jppcd6IF9_Mb3', // Ragazzi_063.jpg
  '1uMQyv9A26LeTSIbH7SNQKjuGTaWuALwl', // Ragazzi_064.jpg
  '1Kt98TPXKfM5BxWtxIXuwbGrz7f7u9PJM', // Ragazzi_065.jpg
  '1qlCxkaQlqOzb-ieSm9zSaH3gAvG4XugJ', // Ragazzi_066.jpg
  '1JWsFzk9C2YjgP0QeJQ6aIxyAQAKI95l8', // Ragazzi_067.jpg
  '1eMzzAmmSOHll9N3YZOxGMYCoIBY86WDz', // Ragazzi_068.jpg
  '1SR9Fg0FSwcXFkL-WgPLgCG1tNA9USgvA', // Ragazzi_069.jpg
  '1bxSl39SxE4IU07SQ0QuYAqpcXNDXoXVq', // Ragazzi_070.jpg
  '1tQkvvJwsCr5RHe_xUR1s26dDOY6_yt8a', // Ragazzi_071.jpg
  '1BEQ332BBP7jxgGBPmS6I-5R7GUcUdy8G', // Ragazzi_072.jpg
  '1O383-3TVkVw4PvEu4Qoc8kyQKfGwwyJQ', // Ragazzi_073.jpg
  '1Qhwe7AcNrfjYwN2N_Onb_33HBWDDZXZZ', // Ragazzi_074.jpg
  '1h8ewXierrBKljlFM7D6Xq8IYZZiJq9m2', // Ragazzi_075.jpg
  '1YihghT0gzJ09qWO9hrAx0IK5rvV71t3p', // Ragazzi_076.jpg
  '1US3cwzEW-rOGScgTB2d4v-A_1YSsKwUI', // Ragazzi_077.jpg
  '1FvxJlutI-oh89JhhLkPjLLHGI9eTxbcs', // Ragazzi_078.jpg
  '15HP4Rj-ZZ0cbkMIqXbiERxHKbCN4Jxcl', // Ragazzi_079.jpg
  '190ukP0pN3zyvsz9lnHMs-srhfvkuwXSd', // Ragazzi_080.jpg
  '1oGv2TwMlUGJyqzcJOwKtu5_24YRcNCAv', // Ragazzi_081.jpg
  '18Fgc3c2c4cC7DEI7bbYlrc0f-z1j5im5', // Ragazzi_082.jpg
  '1tK_gr17Q-9J9xmcAyhO-mDgkhMc_v-0G', // Ragazzi_083.jpg
  '1s-bhemmBxlIpjhX31yCeZjqvi8hU5Vn1', // Ragazzi_084.jpg
  '17vPT15JipincRfV5nTYKHyFqZWi9pcmu', // Ragazzi_085.jpg
  '1I_oRl74kb3sDy6K32dJlv0lRrpjpIlP7', // Ragazzi_086.jpg
];

const GENITORI_FILE_IDS: string[] = [
  '1RkjrrWpA_eFCBXtFXd6iwbxg_xZBWh4N', // Adulti_001.jpg
  '1spwnoiD3xBxGti9D1_3F52UuvK1GdtLv', // Adulti_002.jpg
  '10ZkJP_9qJL0ivgeQOJFbKhW0KRWaOJV8', // Adulti_003.jpg
  '1Hsvbq3l0lplNBe2mjt_UqywvjuOYVzSl', // Adulti_004.jpg
  '1HBeKYv4ZKx8t3v2jhYDt4SWpaDZWATAt', // Adulti_005.jpg
  '1LDEOGjb1sfPPCL_VwpI07Q9Y-hgU8-l4', // Adulti_006.jpg
  '1xwFgUgchWb9Jq5q-yvW71FciJDvxfh85', // Adulti_007.jpg
  '1bv-_HLvOJY8Wf0Eeonce03lMVyGZ2e42', // Adulti_008.jpg
  '1CAya6brE2v7FqioJs4T_UuQEvbNMnlCp', // Adulti_009.jpg
  '1AsiF_lJJPfYlGK01qz0r4Jlwkz9Q2OeE', // Adulti_010.jpg
  '1rI1z8LCq-K_DiMLlC9G4_I2LYplknImX', // Adulti_011.jpg
  '1Zu9O3jyNmMmd5ahs2JRrHD7hdLBYledo', // Adulti_012.jpg
  '1bgDwM_xAgMJ_yhN8VkUjZdxANPwkS1qj', // Adulti_013.jpg
  '1dBmpwUbqZMgGIZtJWOYYK8hLhSinNcOw', // Adulti_014.jpg
  '1txBPhKWxQXiAWKg7kJ0EemNV4ldrfJyA', // Adulti_015.jpg
  '1TfxeMOpN5RLb9i3DAPnzhuWMnUHMA6mf', // Adulti_016.jpg
  '1yCy9hbIAcmCk4UgSRt2skKibP48W_kFq', // Adulti_017.jpg
  '1Xwxl3UNGJAeQjS-XY481PwDY3L-m5lQz', // Adulti_018.jpg
  '14xMYmKSzmupGry-MpNwzzG8BdNH9icvf', // Adulti_019.jpg
  '1bnT4d4DFz5cNledrihs9Tsq2kchzO2XP', // Adulti_020.jpg
  '1QZlGTfmptRF5PWZJ6eOCAplqG4XgCp98', // Adulti_021.jpg
  '1VEo-1SKhoCl-Y4He0zF4Ta2xpZE244u3', // Adulti_022.jpg
  '1nYJjNl0gozdNXgFv5rp6ryhzbSLUBZOH', // Adulti_023.jpg
  '1OEnzio_5pt5Gwca5veaEZPRLPbVv06G9', // Adulti_024.jpg
  '1JKkd-7QBjMMTKE1L1_iAWsGGs3cW4RC5', // Adulti_025.jpg
  '16ore1XbidZD6JQMgl7E-II5DCxZ-Fowx', // Adulti_026.jpg
  '1R3zuBn-E5_6YeZIojm7dYSmB4N76hTIX', // Adulti_027.jpg
  '11DId5br_Gz4hlP65jN9fCna3psEuLocr', // Adulti_028.jpg
  '11S962-C0py_BBuzsv-wugMaxeGs2cOw1', // Adulti_029.jpg
  '1kfZgA3Wmr45HNRdzpAK0k8whZGp0l5J1', // Adulti_030.jpg
  '1EZJh_kIoZ0wjX7u6uwBfYu5tkOkqAgKS', // Adulti_031.jpg
  '1XyAMoS46hxxvHoTZkPCV4Zikdi3Xqi7w', // Adulti_032.jpg
  '1Ntp_DdnLWiju_-9yXHu_oIVI2KPrBL5e', // Adulti_033.jpg
  '1RodU3GFIBczI65tGE3H4icwCgvsHR3r5', // Adulti_034.jpg
  '174VqUOM_bmPRoeSaRz1BpRTjV97ihmfG', // Adulti_035.jpg
  '1DIndJrAxluG1eHrpoMKkMIivo8nmkQrq', // Adulti_036.jpg
  '1YDSlXRfwoVb5RDOv9f6Gzp3sdDmQLPN8', // Adulti_037.jpg
  '1wxjoEoEGDZ4SKQ53ZdZvx7tb1nIrtkkB', // Adulti_038.jpg
  '1BImRRMfERDwhNinubIwTxg7yKTAVv4Ok', // Adulti_039.jpg
  '1Wb4QkRVd_YfzhuGt8V_tDc7jpONsZ-Fe', // Adulti_040.jpg
  '1Nx2Ap-eMrklJbzhO7qUnqb33duxkyGfK', // Adulti_041.jpg
  '1gGSCDFkkq0FwweRrP5ZPMZchcblUZ_rl', // Adulti_042.jpg
  '1IoOE23r9G1WLiRVJB9edWgWAP7GFwrnx', // Adulti_043.jpg
  '1MQvNsFEzxXw2OcxnMYq0aTPlvkJuQhp5', // Adulti_044.jpg
  '1rmExQVa4yDosJHjjiSJanrcC1EGkZsKh', // Adulti_045.jpg
  '1JDqyqwPd1H52ACJT2_x0FdtOatfDMPfc', // Adulti_046.jpg
  '1kQ4kgZvNPgIaWSMmVNNDaV-BVXTmnidX', // Adulti_047.jpg
  '1k6ZMr54_rMgqa6bH5jiWJc5sJeXDbixG', // Adulti_048.jpg
  '1DTt66eYomXWIH83SJ4HAkSgb2YLP9TPl', // Adulti_049.jpg
  '1nIMrJrjwym5REGYQaAnBXfts4oD-7Oo0', // Adulti_050.jpg
  '1wNE_8av8OvMEVPmHeQAA8fvTSigMpH1n', // Adulti_051.jpg
  '1J5ovW-0pAGIa-Vv6WV-g7sj7W7qbVqrq', // Adulti_052.jpg
  '1GsXWWrmXLB3gR60rANxG9DK6qWuOV_ca', // Adulti_053.jpg
  '1FYtGKqMi-y-b80-oMwnJRnerAo9Va4it', // Adulti_054.jpg
  '1YpSwaGVn6_JNCXOIugswGYML_glpTa6U', // Adulti_055.jpg
  '1SPV2xfBmqYrZgL9-eOGGkW9Zooq11Kgg', // Adulti_056.jpg
  '1qOJCnCt5THFLmksSVOEOMXWROLcjIfBW', // Adulti_057.jpg
  '1zL_9wHP5PkuTpX1LntOo0zD8y6mZZMdx', // Adulti_058.jpg
  '1WhmKCuHBnW2A-j6Xa8OSISGI04W2CBsZ', // Adulti_059.jpg
  '1gxM6D0S_h5fBKY26QZWpT6socj-OM1ah', // Adulti_060.jpg
  '1SVr7k7_lDcPs3N2_BaKVSj5p6iyY4GfM', // Adulti_061.jpg
  '1C1QEL_97dIrF1Aiy0WvXuyXL3QLgTX6p', // Adulti_062.jpg
  '1uJsSJb7HJxXDZqpB-0_-FG5ydWgGpS9n', // Adulti_063.jpg
  '1-YZ0ZsiBkIY_ocleZF1lsH7AjAqM0nA7', // Adulti_064.jpg
];

// Funzione helper per generare le foto o i placeholder se manca l'ID
const generatePhotos = (count: number, prefix: string, ids: string[]): Photo[] => {
  return Array.from({ length: count }).map((_, i) => {
    const num = String(i + 1).padStart(3, '0');
    const fileName = `${prefix}_${num}.jpg`;
    const driveId = ids[i];

    if (driveId) {
      // Se c'è l'ID, usa Google Drive
      return createGoogleDrivePhoto(driveId, fileName);
    } else {
      // Altrimenti usa un placeholder demo
      return {
        id: `demo-${prefix}-${i}`,
        url: `https://picsum.photos/600/800?random=${prefix}${i}`, // Immagine casuale
        downloadUrl: `https://picsum.photos/600/800?random=${prefix}${i}`,
        caption: fileName // Mostra il nome file come didascalia (es: Ragazzi_001.jpg)
      };
    }
  });
};

// ==========================================
// SEZIONE RAGAZZI (86 FOTO)
// ==========================================
export const RAGAZZI_PHOTOS: Photo[] = generatePhotos(86, 'Ragazzi', RAGAZZI_FILE_IDS);

// ==========================================
// SEZIONE GENITORI (64 FOTO)
// ==========================================
export const GENITORI_PHOTOS: Photo[] = generatePhotos(64, 'Adulti', GENITORI_FILE_IDS);

export const ALBUMS: Record<string, AlbumConfig> = {
  ragazzi: {
    title: "Area Ragazzi",
    subtitle: "Party & Vibes",
    description: "Musica alta, risate e momenti indimenticabili. La vera festa è qui!",
    theme: 'dark',
    password: 'R7X2P', // CODICE CASUALE RAGAZZI
    photos: RAGAZZI_PHOTOS
  },
  genitori: {
    title: "Area Famiglia",
    subtitle: "Ricordi Preziosi",
    description: "L'eleganza di una serata speciale. I momenti più emozionanti con parenti e amici di famiglia.",
    theme: 'light',
    password: 'G9L4M', // CODICE CASUALE GENITORI
    photos: GENITORI_PHOTOS
  }
};