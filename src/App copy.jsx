import { useState } from "react";
import "./App.css";

const services = [
  {
    title: "Tra cứu hạn",
    desc: "Kiểm tra thời hạn đăng kiểm và nhắc lịch trước khi xe đến hạn.",
    icon: "🔎",
  },
  {
    title: "Tư vấn hồ sơ",
    desc: "Hướng dẫn giấy tờ cần chuẩn bị trước khi đi đăng kiểm.",
    icon: "📄",
  },
  {
    title: "Tìm trung tâm",
    desc: "Gợi ý điểm đăng kiểm phù hợp theo khu vực và loại xe.",
    icon: "📍",
  },
  {
    title: "Nhắc lịch Zalo",
    desc: "Lưu thông tin xe và nhắc lịch trước ngày hết hạn.",
    icon: "⏰",
  },
  {
    title: "Kiểm tra lỗi",
    desc: "Tư vấn lỗi thường gặp như đèn, lốp, phanh, khí thải.",
    icon: "🛠️",
  },
  {
    title: "Cập nhật mới",
    desc: "Tổng hợp quy định và lưu ý cần biết khi đăng kiểm.",
    icon: "📰",
  },
];

const stats = [
  {
    value: "24/7",
    label: "Tiếp nhận thông tin",
  },
  {
    value: "10+",
    label: "Hỗ trợ tỉnh thành",
  },
  {
    value: "4 bước",
    label: "Quy trình dễ hiểu",
  },
];

const steps = [
  {
    title: "Nhập thông tin",
    desc: "Điền biển số, loại xe, ngày hết hạn và số điện thoại nhận tư vấn.",
  },
  {
    title: "Kiểm thời hạn",
    desc: "Đội ngũ hỗ trợ kiểm tra thông tin và nhắc lịch phù hợp.",
  },
  {
    title: "Chuẩn bị hồ sơ",
    desc: "Nhận hướng dẫn giấy tờ, lỗi thường gặp và các lưu ý trước khi đi.",
  },
  {
    title: "Đi đăng kiểm",
    desc: "Chủ động sắp xếp thời gian và đến trung tâm phù hợp.",
  },
];

const checklist = [
  "Giấy đăng ký xe",
  "Bảo hiểm TNDS còn hiệu lực",
  "Thông tin chủ xe",
  "Đèn, phanh, lốp, còi",
  "Lỗi phạt nguội nếu có",
];

const galleryImages = [
  {
    src: "/7.png",
    title: "Xe tải đường dài",
    desc: "Theo dõi hạn đăng kiểm cho xe vận tải hoạt động thường xuyên.",
  },
  {
    src: "/8.png",
    title: "Hồ sơ xe",
    desc: "Chuẩn bị giấy tờ rõ ràng trước khi đến trung tâm đăng kiểm.",
  },
  {
    src: "/9.png",
    title: "Kiểm tra kỹ thuật",
    desc: "Hỗ trợ chủ xe nắm các hạng mục cần kiểm tra trước.",
  },
  {
    src: "/10.png",
    title: "Lịch trình chủ động",
    desc: "Nhắc lịch trước hạn để tránh gián đoạn kế hoạch di chuyển.",
  },
  {
    src: "/11.png",
    title: "An toàn vận hành",
    desc: "Giúp xe sẵn sàng hơn trước mỗi kỳ đăng kiểm.",
  },
];

const faqs = [
  {
    q: "Website này có phải trang chính thức của Cục Đăng kiểm không?",
    a: "Không. Đây là website hỗ trợ thông tin và tư vấn dịch vụ, không phải cổng thông tin chính thức của Cục Đăng kiểm Việt Nam hoặc cơ quan nhà nước.",
  },
  {
    q: "Đi đăng kiểm cần chuẩn bị giấy tờ gì?",
    a: "Thông thường cần giấy đăng ký xe, bảo hiểm trách nhiệm dân sự còn hiệu lực và các giấy tờ liên quan tùy loại xe, mục đích sử dụng xe hoặc yêu cầu thực tế tại trung tâm đăng kiểm.",
  },
  {
    q: "Xe gần hết hạn đăng kiểm có thể nhận nhắc lịch không?",
    a: "Có. Bạn có thể để lại biển số, loại xe, ngày hết hạn và số điện thoại/Zalo để được nhắc lịch trước khi xe đến hạn.",
  },
  {
    q: "Website có hỗ trợ tìm trung tâm đăng kiểm gần khu vực của tôi không?",
    a: "Có. Bạn có thể để lại tỉnh/thành hoặc khu vực đang sinh sống để được gợi ý trung tâm phù hợp.",
  },
];

function App() {
  const [activePage, setActivePage] = useState("home");

  function scrollToSection(page, targetId) {
    setActivePage(page);

    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Đã nhận thông tin. Chúng tôi sẽ liên hệ hỗ trợ bạn sớm.");
    e.currentTarget.reset();
  }

  return (
    <main className="page">
      <header className="header">
        <a className="brand" href="#top" aria-label="Đăng Kiểm Việt">

  <img
    src="/logo_dangkiemviet.png"
    alt="Đăng Kiểm Việt"
    className="brandLogo"
  />

  <div className="brandText">
    <strong>Đăng Kiểm Việt</strong>
    <span>Hỗ trợ đăng kiểm xe</span>
  </div>

</a>
        <nav className="mainNav">
  <button
    className={activePage === "home" ? "active" : ""}
    onClick={() => scrollToSection("home", "top")}
  >
    Trang chủ
  </button>

  <button
    className={activePage === "about" ? "active" : ""}
    onClick={() => scrollToSection("about", "about")}
  >
    Giới thiệu
  </button>

  <button
    className={activePage === "procedure" ? "active" : ""}
    onClick={() => scrollToSection("procedure", "process")}
  >
    Quy trình
  </button>

  <button
    className={activePage === "legal" ? "active" : ""}
    onClick={() => scrollToSection("legal", "faq")}
  >
    Văn bản pháp luật
  </button>

  <button
    className={activePage === "news" ? "active" : ""}
    onClick={() => scrollToSection("news", "services")}
  >
    Tin tức
  </button>

  <button
    className={activePage === "contact" ? "active" : ""}
    onClick={() => scrollToSection("contact", "contact")}
  >
    Liên hệ
  </button>
</nav>

        <a className="hotline" href="tel:0900000000">
          0944 484 441
        </a>
      </header>

      <section className="hero" id="top">
        <div className="heroContent">
          <div className="eyebrow">Cổng hỗ trợ thông tin đăng kiểm xe cơ giới</div>

          <h1>
  Tra cứu,
  <br />
  nhắc lịch và
  <br />
  tư vấn đăng kiểm xe 
  <br />
  <span>NHANH CHÓNG</span>
</h1>

          <p>
            Hỗ trợ chủ xe kiểm tra thời hạn đăng kiểm, chuẩn bị hồ sơ,
            tìm trung tâm phù hợp và nhận nhắc lịch trước khi xe hết hạn.
          </p>

          <div className="heroActions">
            <a className="primaryBtn" href="#lookup">
              Tra cứu ngay
            </a>
            <a className="secondaryBtn" href="tel:0900000000">
              Gọi tư vấn
            </a>
          </div>

          <div className="trustRow">
            <span>✓ Tư vấn dễ hiểu</span>
            <span>✓ Nhắc lịch nhanh</span>
            <span>✓ Hỗ trợ toàn quốc</span>
          </div>
        </div>

        <div className="heroVisual">
          <div className="heroImage">
            <div className="imageShade" />
            <div className="imageBadge top">✓ Nhắc lịch trước hạn</div>
            <div className="imageBadge bottom">✓ Tư vấn hồ sơ nhanh</div>
          </div>

          <form className="lookupCard" id="lookup" onSubmit={handleSubmit}>
            <h2>Tra cứu nhanh</h2>
            <p>Để lại thông tin xe, đội ngũ tư vấn sẽ hỗ trợ bạn.</p>

            <div className="formGrid">
  <input required name="plate" placeholder="Nhập biển số xe" />

  <select required name="vehicleType">
    <option value="">Chọn loại xe</option>
    <option>Ô tô con</option>
    <option>Xe tải</option>
    <option>Xe khách</option>
    <option>Xe kinh doanh vận tải</option>
  </select>

  <input name="expiredDate" type="date" />

  <input required name="phone" placeholder="Số điện thoại/Zalo" />
</div>

            <button type="submit">Gửi thông tin</button>

            <small>
              Thông tin chỉ dùng để hỗ trợ tư vấn và nhắc lịch đăng kiểm.
            </small>
          </form>
        </div>
      </section>

          

<section className="vehicleGallery" id="about">
  <div className="galleryIntro">
    <span>Kinh nghiệm lâu năm</span>
    <h2>Hỗ trợ đăng kiểm đa dạng</h2>
    <p>
      Từ xe cá nhân đến xe vận tải, thông tin được trình bày trực quan để chủ xe
      dễ nắm hồ sơ, lịch hẹn và các bước cần chuẩn bị.
    </p>
  </div>

  <section className="statsBar" aria-label="Thống kê hỗ trợ">
        {stats.map((item) => (
          <div key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

  <div className="galleryGrid">
    {galleryImages.map((item, index) => (
      <article
        className={`galleryCard galleryCard${index + 1}`}
        key={item.src}
      >
        <img src={item.src} alt={item.title} />
        <div>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      </article>
    ))}
  </div>
</section>

      <section className="imageTextSection" id="checklist">
        <div className="supportImage">
          <div className="supportImageCard">
            <strong>Checklist hồ sơ</strong>
            <span>Chuẩn bị trước khi đi đăng kiểm</span>
          </div>
        </div>

        <div className="supportContent">
          <span className="miniLabel">Chuẩn bị trước</span>

<h2>Chuẩn bị GỌN, đăng kiểm NHẸ</h2>

<p>
  Kiểm tra trước giấy tờ và tình trạng xe giúp bạn hạn chế thiếu sót,
  tiết kiệm thời gian và chủ động lịch di chuyển.
</p>
          <ul className="checkList">
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <a className="primaryBtn" href="#lookup">
            Nhận tư vấn hồ sơ
          </a>
        </div>
      </section>

      <section className="process" id="process">
        <div className="sectionTitle light">
          <span>Quy trình</span>
          <h2>4 bước đơn giản</h2>
        </div>


        <div className="stepGrid">
          {steps.map((step, index) => (
            <div className="stepCard" key={step.title}>
              <strong>{index + 1}</strong>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

<section className="section" id="services">
        <div className="sectionTitle">
          <span>Dịch vụ</span>
          <h2>Hỗ trợ chủ xe từ lúc tra cứu đến khi hoàn tất đăng kiểm</h2>
        </div>

        <div className="serviceGrid">
          {services.map((item, index) => (
            <div className="serviceCard" key={item.title}>
              <div className="cardIcon">{item.icon}</div>
              <small>0{index + 1}</small>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section faqSection" id="faq">
        <div className="sectionTitle">
          <span>FAQ</span>
          <h2>Câu hỏi thường gặp</h2>
        </div>

        <div className="faqList">
          {faqs.map((faq) => (
            <details key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="ctaPattern" />
        <h2>Cần kiểm tra hạn đăng kiểm?</h2>
        <p>Gửi thông tin xe để được hỗ trợ tư vấn và nhắc lịch.</p>
        <a className="primaryBtn white" href="#lookup">
          Nhận hỗ trợ ngay
        </a>
      </section>

      <footer className="footer" id="contact">
  <div className="footerInner">
    <div className="footerBrand">
      <div className="footerLogoRow">
        <img
          src="/logo_dangkiemviet.png"
          alt="Đăng Kiểm Việt"
          className="footerLogo"
        />

        <div>
          <strong>ĐĂNG KIỂM VIỆT</strong>
          <span>dangkiemviet.vn</span>
        </div>
      </div>

      <p>
        Trung Tâm Hỗ Trợ Dịch vụ Đăng kiểm Việt DKV 50A - Cung cấp dịch vụ
        đăng kiểm hộ chuyên nghiệp, nhanh chóng và tin cậy cho mọi loại xe.
        Tiết kiệm thời gian, đảm bảo chất lượng.
      </p>

      <div className="footerMeta">
        <b>MST:</b> 00001
        <br />
        <b>Email:</b> dangkiemvietdkv@gmail.com
      </div>

      <div className="footerSocial">
        <a href="#top">f</a>
        <a href="#top">▶</a>
      </div>
    </div>

    <div className="footerLinks">
      <h3>Liên kết nhanh</h3>
      <a href="#top">Giới thiệu</a>
      <a href="#process">Quy trình đăng kiểm</a>
      <a href="#faq">Văn bản pháp luật</a>
      <a href="#services">Tin tức</a>
      <a href="#lookup">Bảng phí dịch vụ</a>
    </div>

    <div className="footerContact">
      <h3>Liên hệ</h3>

      <p>📍 262B Đường 34 Phường Thủ Đức,<br />TP. Thủ Đức, TP. HCM</p>
      <p>☎ 0944 484 441</p>
      <p>✉ dangkiemvietdkv@gmail.com</p>
    </div>
  </div>

  <div className="footerBottom">
    <p>
  © 2026 Công ty TNHH Tập đoàn Truyền thông và Giải trí 24h Media.
  <br />
  Mã số thuế: 0316969591
</p>

    <div>
      <a href="#top">Chính sách bảo mật</a>
      <a href="#top">Điều khoản sử dụng</a>
    </div>
  </div>
</footer>

      <div className="mobileFloatingCta">
  <a href="#lookup">Tra cứu ngay</a>
</div>
    </main>
  );
}

export default App;