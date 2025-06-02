import { Container, Row, Col, Card } from 'react-bootstrap';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <Layout>
      <SEO 
        title="隱私政策" 
        description="了解Fracdigi如何收集、使用和保護您的個人資料，確保您的隱私權受到尊重和保障。" 
      />

      <main>
        <div className="bg-light py-5">
          <Container>
            <h1 className="text-center mb-5">隱私權政策</h1>
            <Row className="justify-content-center">
              <Col lg={10}>
                <Card className="border-0 shadow-sm p-4 mb-4">
                  <Card.Body>
                    <h2 className="h4 mb-3">資料收集與使用目的</h2>
                    <p>Fracdigi（以下簡稱「本公司」）重視您的隱私權並致力於保護您的個人資料。本隱私權政策說明我們如何收集、使用及保護您的個人資料。</p>
                    <p>當您與本公司接觸或使用我們的服務時，我們可能會收集以下個人資料：</p>
                    <ul>
                      <li>基本識別資料（姓名、電話、電子郵件地址等）</li>
                      <li>診所或機構資訊</li>
                      <li>網站使用行為資料（瀏覽紀錄、IP位址等）</li>
                      <li>廣告互動資料（廣告點擊、表單填寫等）</li>
                    </ul>
                    <p>我們收集這些資料的主要目的是：</p>
                    <ul>
                      <li>提供並改善我們的服務</li>
                      <li>分析廣告成效</li>
                      <li>提供客製化行銷建議</li>
                      <li>與您保持聯繫並回應您的詢問</li>
                    </ul>
                  </Card.Body>
                </Card>

                <Card className="border-0 shadow-sm p-4 mb-4">
                  <Card.Body>
                    <h2 className="h4 mb-3">廣告數據收集</h2>
                    <p>我們使用各種工具和技術（如Google Analytics、Facebook Pixel等）來收集有關我們廣告的互動數據，目的是：</p>
                    <ul>
                      <li>測量並分析廣告投放效果</li>
                      <li>了解目標受眾的特性和行為</li>
                      <li>優化廣告內容和投放策略</li>
                      <li>提升診所行銷投資報酬率</li>
                    </ul>
                    <p>收集的數據可能包括但不限於：廣告展示次數、點擊率、轉換率、互動時間等。這些數據主要用於分析目的，並以統計性和匿名性方式處理。</p>
                  </Card.Body>
                </Card>

                <Card className="border-0 shadow-sm p-4 mb-4">
                  <Card.Body>
                    <h2 className="h4 mb-3">資料保護措施</h2>
                    <p>本公司採取適當的技術和組織措施來保護您的個人資料，防止未經授權的存取、使用或披露。我們的資料保護措施包括：</p>
                    <ul>
                      <li>資料加密傳輸與儲存</li>
                      <li>定期安全評估和更新</li>
                      <li>員工保密義務和資料處理訓練</li>
                      <li>嚴格的資料存取控制</li>
                    </ul>
                  </Card.Body>
                </Card>

                <Card className="border-0 shadow-sm p-4 mb-4">
                  <Card.Body>
                    <h2 className="h4 mb-3">資料分享原則</h2>
                    <p>我們重視您的隱私，除非經過您的同意或法律要求，不會將您的個人資料分享給第三方。我們可能在以下情況下分享您的資料：</p>
                    <ul>
                      <li>取得您的明確同意</li>
                      <li>與我們的服務提供商合作（他們僅能根據我們的指示處理您的資料）</li>
                      <li>遵循法律義務或保護我們的權利</li>
                    </ul>
                    <p><strong>重要聲明：我們絕對不會將您的個人資料或客戶資料出售給第三方。</strong></p>
                  </Card.Body>
                </Card>

                <Card className="border-0 shadow-sm p-4 mb-4">
                  <Card.Body>
                    <h2 className="h4 mb-3">您的權利</h2>
                    <p>根據適用的資料保護法律，您擁有以下權利：</p>
                    <ul>
                      <li>查詢、閱覽、複製及請求製給複本</li>
                      <li>請求補充或更正個人資料</li>
                      <li>請求停止蒐集、處理、利用及刪除個人資料</li>
                    </ul>
                    <p>如您想行使上述權利，請透過以下聯絡方式與我們聯繫：</p>
                    <p>電子郵件：david@fracdigi.com<br />電話：0922-885-566</p>
                  </Card.Body>
                </Card>

                <Card className="border-0 shadow-sm p-4 mb-4">
                  <Card.Body>
                    <h2 className="h4 mb-3">WhatsApp Business API 服務說明</h2>
                    <p>本公司提供 WhatsApp Business API 整合服務，協助診所與患者進行即時溝通。在使用此服務時，我們會遵循以下原則：</p>
                    <h5 className="h6 mb-2">資料處理方式</h5>
                    <ul>
                      <li>僅處理必要的聯絡資訊（電話號碼、姓名）用於提供醫療預約及諮詢服務</li>
                      <li>所有對話內容均經過加密傳輸，確保通訊安全</li>
                      <li>不會儲存敏感的醫療資訊於 WhatsApp 平台</li>
                      <li>遵循 WhatsApp Business API 使用條款及隱私政策</li>
                    </ul>
                    <h5 className="h6 mb-2">服務用途</h5>
                    <ul>
                      <li>預約確認及提醒通知</li>
                      <li>診所服務資訊提供</li>
                      <li>客戶服務及諮詢回覆</li>
                      <li>診所營業時間及聯絡資訊告知</li>
                    </ul>
                    <h5 className="h6 mb-2">用戶權利</h5>
                    <ul>
                      <li>您可隨時選擇停止接收 WhatsApp 訊息</li>
                      <li>您有權要求刪除您的聯絡資訊</li>
                      <li>我們僅在獲得您明確同意後才會透過 WhatsApp 聯絡您</li>
                    </ul>
                    <p><strong>注意：</strong>我們不會透過 WhatsApp 討論詳細醫療診斷或治療計畫。如需討論醫療相關事宜，建議親自到診所或透過正式醫療諮詢管道進行。</p>
                  </Card.Body>
                </Card>

                <Card className="border-0 shadow-sm p-4 mb-4">
                  <Card.Body>
                    <h2 className="h4 mb-3">Cookie 使用政策</h2>
                    <p>我們的網站使用 Cookie 和類似技術來提供更好的瀏覽體驗、分析網站流量並優化行銷活動。您可以通過瀏覽器設置來控制 Cookie，但請注意，禁用某些 Cookie 可能會影響網站功能。</p>
                  </Card.Body>
                </Card>

                <Card className="border-0 shadow-sm p-4">
                  <Card.Body>
                    <h2 className="h4 mb-3">政策更新</h2>
                    <p>我們可能會不定期修改本隱私權政策，修改後的條款將在網站上公佈。建議您定期查閱本政策，以了解我們如何保護您的個人資料。</p>
                    <p className="mb-0">最後更新日期：2025年3月25日</p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </Layout>
  );
}