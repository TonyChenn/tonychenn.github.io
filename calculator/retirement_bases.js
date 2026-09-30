// 企业职工基本养老金计发基数的人工维护快照；填写规则见 retirement_bases.md。
// default 适用于本省其余城市，cities 按城市代码覆盖；null 表示尚无已核实数据。
window.retirementBaseConfig = {
  checkedAt: "2026-09-30",
  bases: {
    "11": { default: { year: 2025, base: 12049, source: "https://www.beijing.gov.cn/fwcj/jiage/yanglaofuwu1/65d2ed2811a82834a86396d1.html" } },
    "12": { default: { year: 2025, base: 9417, source: "https://www.tj.gov.cn/zwgk/zfxxgkzl/fdzdgknr/zdmsxx220316/yl_157354/zcwj_157367/202609/t20260914_7373588.html" } },
    "13": { default: { year: 2025, base: 7410, source: "https://rsj.chengde.gov.cn/art/2025/10/22/art_2829_1087786.html" } },
    "14": { default: null }, // 山西省：待核实
    "15": { default: null }, // 内蒙古自治区：待核实
    "21": {
      default: { year: 2025, base: 7346, source: "https://gtm-cn-2r42llmgk0b.liaoning.chinatax.gov.cn/art/2025/9/15/art_5869_7692.html" },
      cities: {
        "2101": { year: 2025, base: 8390, source: "https://gtm-cn-2r42llmgk0b.liaoning.chinatax.gov.cn/art/2025/9/15/art_5869_7692.html" },
        "2102": { year: 2025, base: 8956, source: "https://gtm-cn-2r42llmgk0b.liaoning.chinatax.gov.cn/art/2025/9/15/art_5869_7692.html" }
      }
    },
    "22": {
      default: { year: 2025, base: 7322.08, source: "https://xxgk.jl.gov.cn/zcbm/fgw_97992/xxgkmlqy/202509/t20250922_9324837.html", detail: "按 87865 元/年折算；农垦企业适用单列基数，请手动核对" },
      cities: { "2201": { year: 2025, base: 7978.25, source: "https://xxgk.jl.gov.cn/zcbm/fgw_97992/xxgkmlqy/202509/t20250922_9324837.html", detail: "按长春市 95739 元/年折算；农垦企业适用单列基数" } }
    },
    "23": { default: { year: 2026, base: 7705, source: "https://hrss.hlj.gov.cn/hrss/c116755/202603/31920862/files/2026%E5%B9%B4%E5%BA%A6%E5%85%A8%E7%9C%81%E5%9F%BA%E6%9C%AC%E5%85%BB%E8%80%81%E4%BF%9D%E9%99%A9%E4%BD%BF%E7%94%A8%E5%B7%A5%E8%B5%84%E5%9F%BA%E6%95%B0.pdf" } },
    "31": { default: { year: 2026, base: 12577, source: "https://rsj.sh.gov.cn/tshbx_17729/20260813/t0035_1443100.html", valueSource: "https://shanghai.chinatax.gov.cn/tax/zcfw/rdwd/202608/t481376.html", detail: "按上海 2026 年计发办法及官方公布的 2025 年平均工资计算" } },
    "32": { default: { year: 2025, base: 8917, source: "https://www.jinhu.gov.cn/col/1387_142711/index.html", detail: "江苏省基础养老金计发基数，由金湖县政府社会保障年报核对" } },
    "33": { default: { year: 2025, base: 8433, source: "https://zhejiang.chinatax.gov.cn/art/2025/12/11/art_13314_645797.html", detail: "按浙人社发〔2025〕52 号所用上年加权平均工资折算；官方答疑公布的缴费上限为其三倍" } },
    "34": { default: { year: 2025, base: 7999, source: "https://hrss.ah.gov.cn/public/6595721/80776356.html" } },
    "35": { default: { year: 2025, base: 7932, source: "https://rst.fj.gov.cn/zw/zfxxgk/zfxxgkml/zyywgz/ldgx/202509/t20250922_7013397.htm?iszzb=1" } },
    "36": { default: { year: 2025, base: 7054, source: "https://www.jxln.gov.cn/lnxxxgk/zcwjscbhg/202512/8aa82bef0c2c4fcca30840e9549bc177.shtml" } },
    "37": {
      default: { year: 2025, base: 7831, source: "http://hrss.shandong.gov.cn/articles/ch00378/202510/1e743c80-1abf-47a8-b62a-db2518c0820b.shtml" },
      cities: { "3717": null },
      cityNotes: { "3717": "山东省公布的 2025 年 7831 元不适用于菏泽市企业养老保险；请按菏泽当地文件手动填写。" }
    },
    "41": {
      default: null,
      note: "河南省计发基数尚缺可核对金额的官方公开文件；请按适用年度向当地社保经办机构核实后手动填写。",
      inquiry: { label: "河南省社会保险中心咨询方式", url: "https://shbx.hrss.henan.gov.cn/hnsi/lianxiwomen/A0206index_1.htm" }
    }, // 河南省：待核实
    "42": { default: null }, // 湖北省：待核实；可能有城市口径差异
    "43": { default: { year: 2025, base: 7694, source: "https://rst.hunan.gov.cn/rst/xxgk/zcfg/zcjd/202509/t20250922_33809946.html" } },
    "44": {
      default: { year: 2025, base: 9493, source: "https://www.shanwei.gov.cn/swrsj/zcfg/shbx/content/post_1211715.html" },
      cities: { "4403": { year: 2025, base: 11293, source: "https://hrss.sz.gov.cn/zmhd/cjwt/cjwt/shbz/content/post_12493488.html" } }
    },
    "45": { default: { year: 2025, base: 6983, source: "https://rst.gxzf.gov.cn/zwgk/xxgkzcfg/fgfxlm/t25993557.shtml" } },
    "46": { default: null }, // 海南省：待核实
    "50": { default: null }, // 重庆市：待核实
    "51": { default: null }, // 四川省：待核实
    "52": { default: { year: 2026, base: 7376.75, source: "https://www.bijie.gov.cn/bm/bjsrsj/zwgk/zcfg/shbx/ylbx/202607/t20260715_90622031.html", detail: "按官方公布的 88521 元/年折算" } },
    "53": { default: { year: 2025, base: 8265, source: "https://www.dhlc.gov.cn/hgx/Web/_F0_0_6C4RSW4X10BC743CE56C457EA9.htm" } },
    "54": { default: { year: 2026, base: 11954, source: "https://hrss.lasa.gov.cn/rsj/xxyw/202609/f4ff9e663eea434393afd44f3d85c9c8.shtml" } },
    "61": { default: null }, // 陕西省：待核实
    "62": { default: null }, // 甘肃省：待核实
    "63": { default: { year: 2025, base: 9056, source: "http://rsj.haibei.gov.cn/xwzx/tzgg/9282861.html" } },
    "64": { default: { year: 2025, base: 8366, source: "https://hrss.nx.gov.cn/xxgk/zcj/zcfg/shbz/202509/t20250921_5030586.html" } },
    "65": { default: null } // 新疆维吾尔自治区：待核实
  }
};
