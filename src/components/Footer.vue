<script>
export default {
  data() {
    return {
      items1: [
        "(주)오케이다이렉트대부중개2016-서울강동-00074(대부중개업) / TEL:1661-0670",
        "대출금리 : 최대 연 20%이내(연체금리 대출금리 + 3%p이내(연20%이내))",
        "대상고객 : 만 20세 이상 만 70세 미만",
      ],
      items2: [
        "단, 일부 담보대출 상품에 한해 저당설정, 해지비용과조기상환수수료가 발생할 수 있음(조기 상환수수료 0%~3.0%, 취급하는 금융사마다 차등적용)",
        "대출시 신용등급 또는 개인신용평점 하락으로다른 금융거래가 제약 받을 수 있습니다.",
        "과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다.",
        "이 사이트에서 광고되는 상품들의 상환기간은 모두 60일이상이며, 60개월 미만입니다.",
        "대출 총 비용 예시는 다음과 같습니다.1,000,000원을 12개월동안 이자 20%, 최대 연이자율 20%로원리금균등 상환시 총 상환금액은 1,111,560원 입니다.(대출 상품에 따라 달라질 수 있습니다.)",
        "채무의 조기상환수수료율 등 조기상환조건 없음.",
        "일정 기간 원리금이 연체 될 경우 기한의 이익을 상실할 수 있습니다.",
        "대출 계약 체결 전 상품 설명서 및 약관을 읽어보세요.",
        "대출계약을 체결하기 전에 관계법령에 따라 금융상품에 관한중요 사항을 설명 받을 수 있습니다.",
        "상품의 직접판매업자는 ㈜에이피엘파이낸셜대부, ㈜골든캐피탈대부, ㈜안전대부, ㈜오케이파이낸셜대부, 앤알캐피탈대부㈜, 엠에스아이대부 주식회사, 옐로우캐피탈대부㈜, 주식회사 미래크레디트대부, 주식회사 어드벤스대부, 주식회사 티플레인대부, 테크메이트코리아대부주식회사 이며,직접 중개계약을 통하여 ㈜오케이다이렉트대부중개에서 광고 및 중개업무를 담당하며, 중개시 계약 체결 권한은 없습니다.당사는 금융관계법률에 따라 등록되어 있는 금융상품판매대리, 중개업자 입니다.",
        "대표이사 : 任愛利 | 브랜드명 : 디자인론",
        "주소 : 서울 강동구 올림픽로 620, 4층(성내동, 예투빌딩)",
        "사업자등록번호 : 132-86-20549",
        "이메일 : okdirect@okdirectzone.com",
        "귀하의 대출신청에 대하여 당사는 신용판단을 위하여신용정보를 조회하고 있으며 신용등급 등 심사기준에 따라실제 대출금액은 달라질 수 있습니다.",
        "등록시도명칭 : 서울강동구청 일자리 창출과 (02-3425-5852)",
      ],
    };
  },
};
</script>

<template>
  <footer>
    <button>전국 대부업체 조회하기</button>
    <li v-for="(item, index) in items1" :key="index">{{ item }}</li>
    <li style="color: red">
      취급수수료 등 기타부대비용 없음. 중개수수료를 요구하거나받는 것은
      불법입니다.
    </li>
    <li v-for="(item, index) in items2" :key="index">{{ item }}</li>
  </footer>
</template>

<style scoped lang="sass">
footer
    position: relative
    z-index: 50
    background: #ebebeb
    padding-inline: 3%
    padding-block: 4%
    button
      width: 200px
      height: 40px
      margin-bottom: 1%
      font-size: 16px
</style>
