import { useEffect, useMemo, useState } from "react";
import "./App.css";

const SITE_PASSWORD = "572001";

function TypingText({ text, speed = 35, className = "" }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));
      if (index >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p className={className}>{displayed}</p>;
}

export default function App() {
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [showLoader, setShowLoader] = useState(true);
  const [counter, setCounter] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const content = useMemo(
    () => ({
      heroName: "كوكي",
      heroSub: "Koki ❤️ أجمل حد في حياتي",
      heroText:
        "يا كوكي، بحبك جدًا وبحب كل تفصيلة فيكي، وجودك في حياتي خلّى كل حاجة أجمل وأهدى وأحن، وإنتي فعلًا أحلى نعمة في عمري ❤️",
      meetTitle: "أول يوم بينا ❤️",
      meetDate: "11/9/2023",
      timerTitle: "من أول يوم لحد دلوقتي ❤️",
      timerText:
        "من وقت ما دخلتي حياتي وأنا حاسس إن الدنيا بقت ألطف وأجمل، وكل لحظة معاكي بتأكدلي إنك أحلى حاجة حصلتلي ❤️",
      longMessage:
        "يا كوكي، إنتي مش مجرد حد بحبه، إنتي الراحة اللي كنت بدور عليها، والضحكة اللي بترجعلي روحي، والأمان اللي بحسه أول ما أسمع صوتك. وجودك في حياتي فرق معايا جدًا، وكل يوم بيعدي بيخليني أتأكد إني بحبك أكتر، وبتمناك تفضلي دايمًا أجمل وأقرب حد لقلبي ❤️",
      cuteText:
        "يا كوكي يا أجمل وأحن وألطف واحدة في الدنيا… الموقع ده معمول مخصوص ليكي إنتي وبس 💖",
      footerText: "بحبك يا كوكي ❤️🌷",
    }),
    []
  );

  const memoryCards = useMemo(
    () => [
      {
        id: 1,
        title: "أول بداية",
        image: "/1.jpg",
        date: "11/9/2023",
        text: "من أول يوم، حسيت إن كوكي ليها مكان مختلف وكبير جوا قلبي 💖",
      },
      {
        id: 2,
        title: "ضحكتك",
        image: "/2.jpg",
        date: "ذكرى جميلة",
        text: "ضحكتك يا كوكي كفاية لوحدها تخلّي يومي كله أحلى 💕",
      },
      {
        id: 3,
        title: "حنيتك",
        image: "/3.jpg",
        date: "لحظة مميزة",
        text: "في حنانك بلاقي راحتي، وفي كلامك بلاقي الأمان 💞",
      },
      {
        id: 4,
        title: "أقرب حد لقلبي",
        image: "/4.jpg",
        date: "6/1/2024",
        text: "إنتي أقرب إنسانة لقلبي، وأجمل حد ممكن الدنيا تهديهولي ❤️",
      },
      {
        id: 5,
        title: "كوكي وبس",
        image: "/5.jpg",
        date: "ذكرى حلوة",
        text: "كل تفصيلة فيكي بحبها، وكل حاجة فيكي ليها مكانة كبيرة عندي 💗",
      },
      {
        id: 6,
        title: "راحة قلبي",
        image: "/6.jpg",
        date: "يوم جميل",
        text: "إنتي راحة قلبي وهدوئي، ومعاكي كل حاجة بتبقى أهون وأجمل 🌷",
      },
      {
        id: 7,
        title: "أحلى نصيب",
        image: "/7.jpg",
        date: "ذكرى خاصة",
        text: "كوكي، إنتي أحلى نصيب وأجمل صدفة وأجمل حب دخل حياتي 💓",
      },
      {
        id: 8,
        title: "وجودك أمان",
        image: "/8.jpg",
        date: "21/3/2026",
        text: "وجودك في حياتي مخليني مطمّن وفرحان وحاسس إن الدنيا بخير ❤️",
      },
      {
        id: 9,
        title: "كل يوم أكتر",
        image: "/9.jpg",
        date: "كل يوم",
        text: "وكل يوم بيعدي بحبك أكتر، وبتعلقي في قلبي أكتر وأكتر 💘",
      },
      {
        id: 10,
        title: "أجمل حاجة",
        image: "/10.jpg",
        date: "دايمًا",
        text: "إنتي أجمل حاجة حصلتلي، وأحلى حكاية نفسي تكمل طول العمر يا كوكي ❤️",
      },
    ],
    []
  );

  const timelineItems = useMemo(
    () => [
      {
        title: "أول يوم بينا",
        date: "11/9/2023",
        text: "اليوم اللي بدأت فيه أجمل حكاية وأجمل إحساس.",
      },
      {
        title: "ذكرى مميزة",
        date: "6/1/2024",
        text: "يوم جميل ومهم فضل محفور في قلبي.",
      },
      {
        title: "وعد جميل",
        date: "21/3/2026",
        text: "تاريخ نفسي يفضل من أحلى الأيام اللي تجمعنا دايمًا.",
      },
      {
        title: "حب أكبر",
        date: "كل يوم",
        text: "وكل يوم بيعدي بحبك أكتر من اليوم اللي قبله.",
      },
    ],
    []
  );

  const cuteFacts = useMemo(
    () => [
      { title: "أجمل اسم", value: "كوكي" },
      { title: "عدد الصور", value: "10" },
      { title: "مستوى الحب", value: "∞" },
      { title: "الأمان", value: "معاكي" },
    ],
    []
  );

  const reasons = useMemo(
    () => ["ضحكتك", "حنانك", "طيبتك", "وجودك", "صوتك", "قلبك", "اهتمامك", "روحك"],
    []
  );

  useEffect(() => {
    const timeout = setTimeout(() => setShowLoader(false), 2200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const startDate = new Date("2023-09-11T00:00:00");

    const updateCounter = () => {
      const now = new Date().getTime();
      const start = startDate.getTime();
      const difference = now - start;

      if (difference <= 0) {
        setCounter({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCounter({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isUnlocked) return;

    const audio = document.getElementById("loveAudio");
    if (!audio) return;

    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    };

    playAudio();
  }, [isUnlocked]);

  const handleUnlock = async (e) => {
    e.preventDefault();

    if (enteredPassword === SITE_PASSWORD) {
      setIsUnlocked(true);
      setError("");

      setTimeout(async () => {
        const audio = document.getElementById("loveAudio");
        if (!audio) return;
        try {
          await audio.play();
          setIsPlaying(true);
        } catch {
          setIsPlaying(false);
        }
      }, 250);
    } else {
      setError("الباسورد غلط يا كوكي");
    }
  };

  const toggleMusic = async () => {
    const audio = document.getElementById("loveAudio");
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  if (showLoader) {
    return (
      <div className="loader-page" dir="rtl">
        <div className="loader-hearts">
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
        </div>
        <div className="loader-circle"></div>
        <h1>جارِ تجهيز أجمل مفاجأة لـ كوكي 💖</h1>
      </div>
    );
  }

  if (!isUnlocked) {
    return (
      <div className="password-page" dir="rtl">
        <audio id="loveAudio" loop preload="auto">
          <source src="/love.mp3" type="audio/mpeg" />
        </audio>

        <div className="bg-orb orb-1"></div>
        <div className="bg-orb orb-2"></div>
        <div className="bg-orb orb-3"></div>

        <div className="floating-hearts" aria-hidden="true">
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
          <span>❤</span>
        </div>

        <div className="password-card glass">
          <div className="password-top-image">
            <img src="/profile.jpg" alt="كوكي" />
            <div className="password-image-overlay"></div>
          </div>

          <div className="lock-icon">🔐</div>
          <div className="cute-badge">💖 خاص بـ كوكي</div>

          <h1>اكتبي كلمة السر يا كوكي</h1>

          <p className="password-subtext">
            الموقع ده معمول مخصوص ليكي يا كوكي، ومش هيفتح غير لما تكتبي كلمة السر ❤️
          </p>

          <form onSubmit={handleUnlock} className="password-form">
            <input
              type="password"
              placeholder="اكتبي كلمة السر هنا"
              value={enteredPassword}
              onChange={(e) => setEnteredPassword(e.target.value)}
            />
            <button type="submit">دخول للموقع ❤️</button>
          </form>

          {error && <div className="error-text">{error}</div>}
        </div>
      </div>
    );
  }

  return (
    <div className="page" dir="rtl">
      <audio id="loveAudio" loop preload="auto">
        <source src="/love.mp3" type="audio/mpeg" />
      </audio>

      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      <div className="floating-hearts" aria-hidden="true">
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
        <span>❤</span>
      </div>

      <main className="container">
        <section className="hero-banner glass">
          <div className="hero-banner-text">
            <span className="small-badge">✨ موقع خاص جدًا لـ كوكي</span>
            <h1>
              {content.heroName}
              <span>{content.heroSub}</span>
            </h1>
            <TypingText text={content.cuteText} className="typing-line" />
            <p>{content.heroText}</p>

            <div className="top-actions">
              <button className="btn btn-primary" onClick={toggleMusic}>
                {isPlaying ? "إيقاف الأغنية" : "تشغيل الأغنية"}
              </button>

              <button
                className="btn btn-secondary"
                onClick={() =>
                  document
                    .getElementById("counterSection")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                انزلي تحت
              </button>
            </div>
          </div>

          <div className="hero-banner-image">
            <img src="/profile.jpg" alt="كوكي" />
            <div className="hero-banner-overlay"></div>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card glass">
            <strong>{counter.days}</strong>
            <span>يوم حب</span>
          </div>
          <div className="stat-card glass cute-counter-card">
            <div className="pulse-ring"></div>
            <strong>{counter.hours}</strong>
            <span>ساعة قرب</span>
          </div>
          <div className="stat-card glass">
            <strong>{memoryCards.length}</strong>
            <span>ذكريات</span>
          </div>
          <div className="stat-card glass">
            <strong>∞</strong>
            <span>حب</span>
          </div>
        </section>

        <section className="cute-facts-grid">
          {cuteFacts.map((item, index) => (
            <div className="cute-fact-card glass" key={index}>
              <h4>{item.title}</h4>
              <strong>{item.value}</strong>
            </div>
          ))}
        </section>

        <section className="full-cover-section glass">
          <div className="full-cover-image">
            <img src="/profile.jpg" alt="كوكي" />
            <div className="full-cover-overlay"></div>
          </div>

          <div className="full-cover-content">
            <div className="scene-pill">{content.meetTitle}</div>
            <div className="scene-date">{content.meetDate}</div>
            <h2>{content.heroName}</h2>
            <h3>{content.heroSub}</h3>
            <p>{content.heroText}</p>
          </div>
        </section>

        <section className="huge-counter-section glass" id="counterSection">
          <span className="small-badge">⏳ عداد الحب</span>
          <h2>{content.timerTitle}</h2>
          <p>{content.timerText}</p>

          <div className="huge-counter-grid">
            <div className="huge-counter-box animated-counter">
              <strong>{counter.days}</strong>
              <span>يوم</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.hours}</strong>
              <span>ساعة</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.minutes}</strong>
              <span>دقيقة</span>
            </div>
            <div className="huge-counter-box animated-counter">
              <strong>{counter.seconds}</strong>
              <span>ثانية</span>
            </div>
          </div>

          <div className="music-mini-bar giant-music-bar">
            <div className="music-mini-left">
              <div className={`disc ${isPlaying ? "spin" : ""}`}>🎵</div>
              <div>
                <strong>أغنيتنا</strong>
                <small>هتشتغل لو المتصفح سمح</small>
              </div>
            </div>

            <button className="mini-play-btn" onClick={toggleMusic}>
              {isPlaying ? "Pause" : "Play"}
            </button>
          </div>
        </section>

        <section className="wide-message glass">
          <span className="small-badge">💌 رسالة كبيرة ليكي</span>
          <h2>كل الكلام ده ليكي يا كوكي</h2>
          <p>{content.longMessage}</p>
        </section>

        <section className="love-columns">
          <div className="love-column-card glass">
            <h3>حاجات بحبها فيكي</h3>
            <ul>
              {reasons.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="love-column-card glass">
            <h3>أنا لما بكون معاكي</h3>
            <ul>
              <li>مرتاح</li>
              <li>مبسوط</li>
              <li>مطمّن</li>
              <li>بحب الدنيا</li>
              <li>بضحك من قلبي</li>
              <li>حاسس بالأمان</li>
            </ul>
          </div>
        </section>

        <section className="timeline-section glass">
          <div className="section-head">
            <h3>Timeline الحكاية</h3>
            <p>ترتيب بسيط ولطيف للحظات المهمة</p>
          </div>

          <div className="timeline-list">
            {timelineItems.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <small>{item.date}</small>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reels-section glass">
          <div className="section-head slider-head">
            <div>
              <h3>الكروت المتحركة</h3>
              <p>10 صور وكل صورة ليها كلام جميل مخصوص لكوكي</p>
            </div>

            <div className="slider-buttons">
              <button
                className="slider-btn"
                onClick={() => {
                  const slider = document.getElementById("cardsSlider");
                  slider?.scrollBy({ left: 360, behavior: "smooth" });
                }}
              >
                ←
              </button>
              <button
                className="slider-btn"
                onClick={() => {
                  const slider = document.getElementById("cardsSlider");
                  slider?.scrollBy({ left: -360, behavior: "smooth" });
                }}
              >
                →
              </button>
            </div>
          </div>

          <div className="cards-slider" id="cardsSlider">
            {memoryCards.map((card, index) => (
              <button
                key={card.id}
                className="animated-text-card slider-card"
                onClick={() => setSelectedCard(card)}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="animated-card-image">
                  <img src={card.image} alt={card.title} />
                </div>

                <div className="animated-card-body">
                  <small>{card.date}</small>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="big-quotes-section glass">
          <div className="quote-box">
            “كوكي، من أول يوم وأنا حاسس إنك أجمل حاجة دخلت حياتي 💖”
          </div>
          <div className="quote-box">
            “وجودك أمان، وكلامك راحة، وقربك سعادة كبيرة لقلبي 💞”
          </div>
          <div className="quote-box">
            “بحبك يا كوكي، وكل يوم بيعدي بحبك أكتر من اللي قبله ❤️”
          </div>
        </section>

        <section className="gallery-grid-section glass">
          <div className="section-head">
            <h3>جاليري أكبر</h3>
            <p>10 صور بشكل أنضف وأوسع</p>
          </div>

          <div className="big-gallery-grid">
            {memoryCards.map((item) => (
              <button
                key={item.id}
                className="big-gallery-card"
                onClick={() => setSelectedCard(item)}
              >
                <img src={item.image} alt={item.title} />
                <div className="big-gallery-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="extra-love-section glass">
          <div className="extra-love-card glass">
            <h3>وجودك فرق</h3>
            <p>وجودك يا كوكي خلّى كل حاجة في حياتي أخف وأجمل وأهدى ❤️</p>
          </div>
          <div className="extra-love-card glass">
            <h3>قلبي مطمّن</h3>
            <p>لأنك موجودة فيه، ومفيش مكان لحد غيرك أبدًا 💖</p>
          </div>
          <div className="extra-love-card glass">
            <h3>أجمل نصيب</h3>
            <p>إنتي أحلى صدفة وأحلى نصيب وأجمل هدية في حياتي 🌷</p>
          </div>
        </section>

        <section className="final-cute-section glass">
          <h2>وفي الآخر…</h2>
          <p>إنتي يا كوكي أجمل حاجة حصلتلي، وأحلى قصة أنا عايشها ❤️</p>
        </section>

        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </main>

      {selectedCard && (
        <div className="modal" onClick={() => setSelectedCard(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedCard(null)}>
              ×
            </button>

            <div className="modal-image">
              <img src={selectedCard.image} alt={selectedCard.title} />
            </div>

            <div className="modal-content">
              <span className="modal-chip">💌 ذكرى مختارة</span>
              <small>{selectedCard.date || "ذكرى جميلة"}</small>
              <h3>{selectedCard.title}</h3>
              <p>{selectedCard.text}</p>
            </div>
          </div>
        </div>
      )}

      <footer className="footer-love">
        <p>{content.footerText}</p>
      </footer>
    </div>
  );
}