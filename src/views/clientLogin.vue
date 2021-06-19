<template>
  <div class="client-login">
    <!-- 头部 -->
    <div class="heat-top">
      <div class="name">
        <span class="left">痘院士</span>
        <span class="R-copy">®</span>
      </div>
      <div class="line"></div>
      <div class="left">
        <p>问题性皮肤管理中心</p>
        <p>祛痘祛斑·全国连锁</p>
      </div>
    </div>
    <!-- 标题 -->
    <h1 class="title">客户登记表</h1>
    <!-- 个人基本信息 -->
    <div class="person-info">
      <!-- 时间 -->
      <div class="info-top">
        <div class="top-left">个人基本信息 <div class="bevel"></div>
        </div>
        <div class="top-right">
          <span class="top-date">
            日期：<input
              type="number"
              v-model="year"
              class="year"
            >年
            <input
              type="number"
              v-model="month"
            >月
            <input
              type="number"
              v-model="day"
            >日

          </span>
        </div>
      </div>
      <!-- 名字电话 -->
      <div class="info-common">
        <InputBox v-model="Uname" />
        性别: 男: <input
          type="radio"
          v-model="gender"
          value="man"
        /> 女: <input
          type="radio"
          v-model="gender"
          value="women"
          class="women"
        />
        <InputBox
          label="年龄"
          inputWidth="2rem"
          type="number"
          v-model="age"
        />
        <InputBox
          label="联系电话"
          inputWidth="7rem"
          type="number"
          v-model="phone"
        />
        <!-- <InputBox label="微信" inputWidth="3rem" /> -->
      </div>
      <!-- 地址 -->
      <div class="info-common">
        <InputBox
          label="微信"
          inputWidth="5rem"
          type="text"
          v-model="weChat"
        />
        <InputBox
          label="居住地"
          inputWidth="18rem"
          type="text"
          v-model="address"
        />
      </div>
      <!-- 来院途径 -->
      <div class="info-common way">
        来院途径:
        <input
          type="radio"
          value="团购"
          v-model="way"
        >团购
        <input
          type="radio"
          value="电话"
          v-model="way"
        >电话
        <input
          type="radio"
          value="QQ"
          v-model="way"
        >QQ
        <input
          type="radio"
          value="路过"
          v-model="way"
        >路过
        <input
          type="radio"
          value="户外广告"
          v-model="way"
        >户外广告
        <input
          type="radio"
          value="介绍"
          v-model="way"
        >介绍
        <input
          type="radio"
          value="其他"
          v-model="way"
        >其他
      </div>
      <!-- 护理项目 -->
      <div class="info-common health-project way">
        护理项目:
        <input
          type="checkbox"
          id="zhichuang"
          value="痔疮"
          v-model="healthProject"
        >
        <label for="zhichuang">痔疮</label>
        <input
          type="checkbox"
          id="zhichuang"
          value="痘坑"
          v-model="healthProject"
        >
        <label for="zhichuang">痘坑</label>
        <input
          type="checkbox"
          id="zhichuang"
          value="斑"
          v-model="healthProject"
        >
        <label for="zhichuang">斑</label>
        <input
          type="checkbox"
          id="zhichuang"
          value="敏感"
          v-model="healthProject"
        >
        <label for="zhichuang">敏感</label>
      </div>
      <!-- 从事职业 -->
      <div class="info-common way">
        从事职业:
        <input
          type="radio"
          value="学生"
          v-model="career"
        >学生
        <input
          type="radio"
          value="影视艺人"
          v-model="career"
        >影视艺人
        <input
          type="radio"
          value="企业职员"
          v-model="career"
        >企业职员
        <input
          type="radio"
          value="政府职员"
          v-model="career"
        >政府职员
        <input
          type="radio"
          value="私营业主"
          v-model="career"
        >私营业主
        <input
          type="radio"
          value="家庭主妇"
          v-model="career"
        >家庭主妇
        <input
          type="radio"
          value="自由职员"
          v-model="career"
        >自由职员
        <input
          type="radio"
          value="其他"
          v-model="career"
        >其他
      </div>
      <!-- 面部患处分布图 -->
      <div class="face-affect">
        <div class="face-content">
          <!-- 左 -->
          <div class="face-select">
            <div>
              <input
                type="checkbox"
                value="眉间部位"
                v-model="faceAffect"
              >眉间部位
            </div>
            <div>
              <input
                type="checkbox"
                value="鼻子部位"
                v-model="faceAffect"
              >鼻子部位
            </div>
            <div>
              <input
                type="checkbox"
                value="两颚部位"
                v-model="faceAffect"
              >两颚部位
            </div>
            <div>
              <input
                type="checkbox"
                value="上唇部位"
                v-model="faceAffect"
              >上唇部位
            </div>
          </div>
          <!-- 中间图片 -->
          <div class="face-img">
            <img
              src="../../src/assets/images/face.png"
              alt=""
            >
          </div>
          <!-- 右 -->
          <div class="face-select">
            <div>
              <input
                type="checkbox"
                value="额头部位"
                v-model="faceAffect"
              >额头部位
            </div>
            <div>
              <input
                type="checkbox"
                value="两颚部位2"
                v-model="faceAffect"
              >两颚部位
            </div>
            <div>
              <input
                type="checkbox"
                value="口周部位"
                v-model="faceAffect"
              >口周部位
            </div>
            <div>
              <input
                type="checkbox"
                value="下颚部位"
                v-model="faceAffect"
              >下颚部位
            </div>
          </div>
        </div>
        <p class="face-title">面部患处分布图</p>
      </div>
    </div>
    <!-- 顾客情况描述 -->
    <div class="client-desc">
      <!-- 时间 -->
      <div class="info-top">
        <div class="top-left">顾客情况描述 <div class="bevel"></div>
        </div>
        <div class="top-right">
        </div>
      </div>
      <!-- 皮肤总况 -->
      <div class="skin-condition">
        <div class="condition-left">
          皮肤总况：
        </div>
        <div class="condition-right">
          <!-- 痘 -->
          <div class="condition-item">
            痘：<span class="item-wrapper">
              <input
                type="checkbox"
                value="痤疮"
                v-model="skinCondition"
              >痤疮
              <input
                type="checkbox"
                value="囊肿"
                v-model="skinCondition"
              >囊肿
              <input
                type="checkbox"
                value="丘疹"
                v-model="skinCondition"
              >丘疹
              <input
                type="checkbox"
                value="脓包"
                v-model="skinCondition"
              >脓包
              <input
                type="checkbox"
                value="黑头"
                v-model="skinCondition"
              >黑头
              <input
                type="checkbox"
                value="白头"
                v-model="skinCondition"
              >白头
              <input
                type="checkbox"
                value="结节"
                v-model="skinCondition"
              >结节
              <input
                type="checkbox"
                value="痘印"
                v-model="skinCondition"
              >痘印
            </span>
          </div>
          <!-- 斑 -->
          <div class="condition-item">
            斑：<span class="item-wrapper">
              <input
                type="checkbox"
                value="雀斑"
                v-model="skinCondition"
              >雀斑
              <input
                type="checkbox"
                value="黄褐斑"
                v-model="skinCondition"
              >黄褐斑
              <input
                type="checkbox"
                value="晒斑"
                v-model="skinCondition"
              >晒斑
              <input
                type="checkbox"
                value="真皮斑"
                v-model="skinCondition"
              >真皮斑
              <input
                type="checkbox"
                value="表皮斑"
                v-model="skinCondition"
              >表皮斑
              <input
                type="checkbox"
                value="老年斑"
                v-model="skinCondition"
              >老年斑
            </span>
          </div>
          <!-- 敏 -->
          <div class="condition-item">
            敏：<span class="item-wrapper">
              <input
                type="checkbox"
                value="干敏"
                v-model="skinCondition"
              >干敏
              <input
                type="checkbox"
                value="激素敏感"
                v-model="skinCondition"
              >激素敏感
              <input
                type="checkbox"
                value="依赖性皮炎"
                v-model="skinCondition"
              >依赖性皮炎
              <input
                type="checkbox"
                value="湿疹"
                v-model="skinCondition"
              >湿疹
              <input
                type="checkbox"
                value="溢脂性皮炎"
                v-model="skinCondition"
              >溢脂性皮炎
              <input
                type="checkbox"
                value="毛囊炎"
                v-model="skinCondition"
              >毛囊炎
            </span>
          </div>
          <!-- 坑 -->
          <div class="condition-item">
            坑：<span class="item-wrapper">
              <input
                type="checkbox"
                value="局部性凹坑"
                v-model="skinCondition"
              >局部性凹坑
              <input
                type="checkbox"
                value="1度"
                v-model="skinCondition"
              >1度
              <input
                type="checkbox"
                value="2度"
                v-model="skinCondition"
              >2度
              <input
                type="checkbox"
                value="3度"
                v-model="skinCondition"
              >3度
              <input
                type="checkbox"
                value="密集型凹坑"
                v-model="skinCondition"
              >密集型凹坑
              <input
                type="checkbox"
                value="4度"
                v-model="skinCondition"
              >4度
              <input
                type="checkbox"
                value="5度"
                v-model="skinCondition"
              >5度
              <input
                type="checkbox"
                value="毛孔性凹坑"
                v-model="skinCondition"
              >毛孔性凹坑
            </span>
          </div>
        </div>
      </div>
      <!-- 皮肤性质 -->
      <div class="skin-type">
        皮肤性质：
        <input
          type="radio"
          value="干"
          v-model="skinType"
        >干
        <input
          type="radio"
          value="中性"
          v-model="skinType"
        >中性
        <input
          type="radio"
          value="油"
          v-model="skinType"
        >油
        <input
          type="radio"
          value="脓包"
          v-model="skinType"
        >脓包
        <InputBox
          label="发病时间"
          inputWidth="5rem"
          type="text"
          v-model="oneSetTime"
          class="input-box"
        />
        <InputBox
          label="其他"
          inputWidth="5rem"
          type="text"
          v-model="others"
          class="input-box"
        />
      </div>
      <!-- 特殊情况 -->
      <div class="skin-type">
        特殊情况：
        皮肤是否发痒：
        <input
          type="radio"
          value="是"
          v-model="skinItchy"
        >是
        <input
          type="radio"
          value="否"
          v-model="skinItchy"
        >否
        痘和痘之间是否发红：
        <input
          type="radio"
          value="是"
          v-model="skinRed"
        >是
        <input
          type="radio"
          value="否"
          v-model="skinRed"
        >否
      </div>
      <!-- 生活情况 -->
      <div class="common-wrapper">
        <div class="wrapper-left">
          生活情况:&nbsp;
        </div>
        <div class="wrapper-right">
          <input
            type="checkbox"
            v-model="abnormalSecretion"
          >分泌异常,荷尔蒙失调 &nbsp;
          <input
            type="checkbox"
            v-model="bodyHot"
          >火气旺盛 &nbsp;
          睡眠： <input
            type="radio"
            value="正常"
            v-model="sleepWell"
          >正常 &nbsp; <input
            type="radio"
            value="没规律(熬夜)"
            v-model="sleepWell"
          >没规律(熬夜) &nbsp;
          现在情况是否是最严重：<input
            type="radio"
            v-model="isBad"
            value="是"
          >是 &nbsp; <input
            type="radio"
            v-model="isBad"
            value="否"
          >否 &nbsp;
          <InputBox
            label="最严重时时什么时候"
            v-model="mostserious"
            inputWidth="7rem"
          />
        </div>
      </div>
      <!-- 治疗史 -->
      <div class="common-wrapper">
        <div class="wrapper-left">
          治疗史:&nbsp;
        </div>
        <div class="wrapper-right">
          <input
            type="radio"
            value="有"
            v-model="haveTreat"
          >有 &nbsp;
          <input
            type="radio"
            value="无"
            v-model="haveTreat"
          >无 &nbsp;
          <InputBox
            label="治疗情况"
            v-model="treatSituation"
            inputWidth="12rem"
          />
        </div>
      </div>
      <!-- 过敏史 -->
      <div class="common-wrapper">
        <div class="wrapper-left">
          过敏史:&nbsp;
        </div>
        <div class="wrapper-right">
          <input
            type="radio"
            value="食物过敏"
            v-model="allergies"
          >食物过敏 &nbsp;
          <input
            type="radio"
            value="气候变化过敏"
            v-model="allergies"
          >气候变化过敏 &nbsp;
          <input
            type="radio"
            value="换肤后遗症"
            v-model="allergies"
          >换肤后遗症 &nbsp;
          <input
            type="radio"
            value="天生性皮肤过敏"
            v-model="allergies"
          >天生性皮肤过敏 &nbsp;
          <input
            type="radio"
            value="化妆品"
            v-model="allergies"
          >化妆品 &nbsp;
          <InputBox
            label="其他"
            v-model="allergiesOther"
            inputWidth="12rem"
          />
        </div>
      </div>
      <!-- 其他情况 -->
      <div class="common-wrapper">
        <div class="wrapper-left">
          其他情况: &nbsp;
        </div>
        <div class="wrapper-right">
          <input
            type="checkbox"
            v-model="otheSituation"
            value="辐射影响"
          >辐射影响 &nbsp;
          <input
            type="checkbox"
            v-model="otheSituation"
            value="脂肪污物阻塞"
          >脂肪污物阻塞 &nbsp;
          <input
            type="checkbox"
            v-model="otheSituation"
            value="化妆品铅质阻塞"
          >化妆品铅质阻塞 &nbsp;
          <input
            type="checkbox"
            v-model="otheSituation"
            value="体内毒素堆积"
          >体内毒素堆积 &nbsp;
          <input
            type="checkbox"
            v-model="otheSituation"
            value="组织坏死"
          >组织坏死 &nbsp;
          <input
            type="checkbox"
            v-model="otheSituation"
            value="色素沉淀"
          >色素沉淀 &nbsp;
          <input
            type="checkbox"
            v-model="otheSituation"
            value="清洁保养不当"
          >清洁保养不当 &nbsp;
          <input
            type="checkbox"
            v-model="otheSituation"
            value="不规则痘印"
          >不规则痘印 &nbsp;
          <input
            type="checkbox"
            v-model="otheSituation"
            value="洗脸用品不当"
          >洗脸用品不当 &nbsp;
          <input
            type="checkbox"
            v-model="otheSituation"
            value="皮脂分泌旺盛"
          >皮脂分泌旺盛 &nbsp;
          <input
            type="checkbox"
            v-model="otheSituation"
            value="比较深"
          >比较深 &nbsp;
        </div>
      </div>
      <!-- 底部 -->
      <div class="bottom">
        建议回访情况:
        &nbsp;
        <input
          type="text"
          v-model="returnVisit"
          placeholder="回访情况"
        />
      </div>
      <!-- 提交按钮 -->
      <div class="btn_submit">
        <button
          class="btn"
          @click.stop="submitInfo"
        >提交</button>
      </div>
    </div>
  </div>
</template>

<script>
import InputBox from "common/input-box";

export default {
  name: "client-login",
  data() {
    return {
      year: "",
      month: "",
      day: "",
      name: "",
      gender: "",
      Uname: "",
      age: "",
      phone: "",
      weChat: "",
      address: "",
      way: "",
      healthProject: [], //护理项目
      career: "",
      faceAffect: [], //面部患处
      skinCondition: [], //皮肤总况
      skinType: "", //皮肤属性
      oneSetTime: "", //发病时间
      others: "",
      skinItchy: "", //皮肤是否发痒
      skinRed: "", //痘和痘之间是否发红
      abnormalSecretion: "", //分泌异常
      bodyHot: "", //火气旺盛
      sleepWell: "", //睡眠状态
      sleepBad: "", //睡眠状态
      isGood: "", //睡眠状态
      isBad: "", //睡眠状态
      mostserious: "", // 最严重的时候
      treatSituation: "", //治疗情况
      haveTreat: "", //有无治疗史
      allergies: [], //过敏史
      allergiesOther: "", //其他过敏情况
      otheSituation: [], //客户其他情况
      returnVisit: "", //回访情况
    };
  },
  components: {
    InputBox,
  },
  methods: {
    submitInfo() {
      let clientForm = {
        year: this.year,
        month: this.month,
        name: this.name,
        gender: this.gender,
        Uname: this.Uname,
        age: this.age,
        phone: this.phone,
        weChat: this.weChat,
        address: this.address,
        way: this.way,
        healthProject: this.healthProject,
        career: this.career,
        faceAffect: this.faceAffect,
        skinCondition: this.skinCondition,
        skinType: this.skinType,
        oneSetTime: this.oneSetTime,
        others: this.others,
        skinItchy: this.skinItchy,
        skinRed: this.skinRed,
        abnormalSecretion: this.abnormalSecretion,
        bodyHot: this.bodyHot,
        sleepWell: this.sleepWell,
        sleepBad: this.sleepBad,
        isGood: this.isGood,
        isBad: this.isBad,
        mostserious: this.mostserious,
        treatSituation: this.treatSituation,
        haveTreat: this.haveTreat,
        allergies: this.allergies,
        allergiesOther: this.allergiesOther,
        otheSituation: this.otheSituation,
        returnVisit: this.returnVisit,
      };
      console.log(clientForm);
    },
  },
};
</script>

<style lang="scss" scoped>
.client-login {
  padding: 1rem 0.5rem;
  .heat-top {
    display: flex;
    align-items: center;
    color: lightblue;
    .name {
      .left {
        font-size: 2rem;
        color: cornflowerblue;
      }
      .R-copy {
        vertical-align: top;
      }
    }
    .line {
      width: 0.01rem;
      height: 2rem;
      background-color: lightblue;
      margin: 0 0.3rem;
    }
  }
  // 标题
  .title {
    font-size: 1.5rem;
    text-align: center;
    line-height: 4rem;
  }
  // 个人基本信息
  .person-info {
    // 名字电话
    .info-common {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      // justify-content: space-between;
      flex-wrap: wrap;
      .women {
        margin-right: 0.2rem;
      }
    }
    .way {
      input {
        margin-left: 0.5rem;
      }
    }
    .health-project {
      color: red;
    }
    // 面部患处分布图
    .face-affect {
      position: relative;
      width: 100%;
      height: 20rem;
      margin-top: 0.5rem;
      .face-content {
        width: 90%;
        height: 90%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        .face-select {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          div {
            display: flex;
            align-items: center;
          }
        }
        .face-img {
          flex: 1;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .face-title {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        line-height: 2rem;
        font-size: 1.5rem;
        color: red;
      }
    }
  }
  //顾客情况描述
  .client-desc {
    .skin-condition {
      display: flex;
    }
    .skin-type {
      display: flex;
      align-items: center;
      margin-top: 0.2rem;
      flex-wrap: wrap;
      input {
        margin-left: 0.2rem;
      }
      .input-box {
        margin-left: 0.2rem;
      }
    }
  }
  .bottom {
    border-top: 1px solid burlywood;
    display: flex;
    line-height: 2.5rem;
    align-items: center;
    margin-top: 0.5rem;
    input {
      flex: 1;
      border: none;
      outline: none;
    }
  }
  // 底部提交
  .btn_submit {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 0.5rem;
    .btn {
      width: 8rem;
      line-height: 2rem;
      background-color: lightblue;
      border: none;
      border-radius: 1rem;
    }
  }
  // 公共样式
  // 头部时间
  .info-top {
    width: 100%;
    display: flex;
    align-items: center;
    height: 1.5rem;
    .top-left {
      background-color: #007bff;
      color: #fff;
      text-indent: 0.2rem;
      display: flex;
      align-items: center;

      .bevel {
        width: 1rem;
        height: 1.5rem;
        background: linear-gradient(
            to bottom left,
            #fff 0%,
            #fff,
            49.9%,
            #007bff 50%,
            #007bff 100%
          )
          no-repeat;
      }
    }
    .top-right {
      height: 90%;
      flex: 1;
      text-align: right;
      border-bottom: 1px solid #999;
      .top-date {
        input {
          width: 1.5rem;
          outline: none;
          border: none;
          // border-bottom: 1px solid #999;
        }
        .year {
          width: 2.5rem;
        }
      }
    }
  }
  .condition-item {
    display: flex;
    align-items: center;
    margin-top: 0.2rem;
    .item-wrapper {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      input {
        margin-left: 0.2rem;
      }
    }
  }
  .common-wrapper {
    width: 100%;
    display: flex;
    margin-top: 0.5rem;
    .wrapper-right {
      flex: 1;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
  }
}
</style>
