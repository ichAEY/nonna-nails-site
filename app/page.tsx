"use client";

import { useEffect, useRef, useState } from "react";

const hands = [
  {
    id: 26277760,
    name: "Комбо — маникюр + педикюр с покрытием",
    price: "6 800 ₽",
    duration: "3 ч",
    note: "Маникюр и педикюр с покрытием в одной записи. Экономия — 750 ₽. Фактическая продолжительность составляет 2–3 часа и зависит от сложности работы.",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s26277760",
  },
  {
    id: 19345530,
    name: "Наращивание ногтей",
    price: "5 500 ₽",
    duration: "2 ч",
    note: "Снятие предыдущего покрытия, маникюр, наращивание ногтей, покрытие гель-лаком и дизайн.",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s19345530",
  },
  {
    id: 19345536,
    name: "Коррекция наращённых ногтей",
    price: "4 700 ₽",
    duration: "2 ч",
    note: "Снятие предыдущего покрытия, маникюр, укрепление гелем, донаращивание при необходимости и покрытие.",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s19345536",
  },
  {
    id: 17329246,
    name: "Комплекс S",
    price: "3 000 ₽",
    duration: "1 ч 15 мин",
    note: "Маникюр и покрытие гель-лаком. Если есть старое покрытие, выберите «Комплекс M».",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s17329246",
  },
  {
    id: 17329251,
    name: "Комплекс M",
    price: "3 500 ₽",
    duration: "1 ч 30 мин",
    note: "Снятие, маникюр, покрытие, ремонт до двух ногтей и базовый дизайн. Френч, втирка, омбре и градиент не входят в стоимость.",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s17329251",
  },
  {
    id: 17329255,
    name: "Комплекс L",
    price: "4 500 ₽",
    duration: "2 ч",
    note: "Снятие, маникюр, укрепление гелем, покрытие и дизайн.",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s17329255",
  },
  {
    id: 13231053,
    name: "Покрытие гель-лаком",
    price: "1 800 ₽",
    duration: "45 мин",
    note: "Покрытие гель-лаком без маникюра.",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s13231053",
  },
  {
    id: 13230981,
    name: "Маникюр комбинированный / аппаратный",
    price: "1 800 ₽",
    duration: "1 ч",
    note: "Аппаратная или комбинированная обработка кутикулы и придание формы ногтям. Покрытие обычным лаком — дополнительно 300 ₽.",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s13230981",
  },
  {
    id: 20620785,
    name: "Лак лечебный / цветной",
    price: "500 ₽",
    duration: "15 мин",
    note: "Лечебное или цветное покрытие ногтей лаком.",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s20620785",
  },
  {
    id: 16414211,
    name: "Японский маникюр",
    price: "2 300 ₽",
    duration: "1 ч",
    note: "Придание формы, обработка кутикулы и японская полировка. Процедура выравнивает ногтевую пластину, придаёт естественный блеск и способствует укреплению ногтей.",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s16414211",
  },
  {
    id: 17350442,
    name: "Дизайны",
    price: "100–500 ₽",
    duration: "5 мин",
    note: "Кошачий глаз, втирка, градиент, френч или ручная роспись.",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s17350442",
  },
  {
    id: 13231069,
    name: "Наращивание одного ногтя",
    price: "350 ₽",
    duration: "20 мин",
    note: "Наращивание одного ногтя с восстановлением длины и формы.",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s13231069",
  },
  {
    id: 17627677,
    name: "Ремонт ногтя",
    price: "200–350 ₽",
    duration: "20 мин",
    note: "Ремонт одного ногтя с восстановлением целостности и формы.",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s17627677",
  },
  {
    id: 29517270,
    name: "Холодный парафин для рук",
    price: "500 ₽",
    duration: "15 мин",
    note: "Интенсивное увлажнение и питание кожи рук. Помогает уменьшить сухость и шелушение, делает кожу мягкой, гладкой и ухоженной.",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s29517270",
  },
];

const feet = [
  {
    id: 13231092,
    name: "Комплекс педикюр",
    price: "4 050 ₽",
    duration: "1 ч 30 мин",
    note: "Снятие, придание формы ногтям, обработка кутикулы и стоп, покрытие гель-лаком. Удаление вросшего ногтя — дополнительно 150 ₽ за палец.",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s13231092",
  },
  {
    id: 13231104,
    name: "Обработка пальцев ног с покрытием гель-лаком",
    price: "3 500 ₽",
    duration: "1 ч",
    note: "Придание формы ногтям, обработка кутикулы и покрытие гель-лаком на выбор. Стопы не обрабатываются.",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s13231104",
  },
  {
    id: 13231102,
    name: "Обработка стоп и ногтей без покрытия",
    price: "3 000 ₽",
    duration: "1 ч",
    note: "Полная обработка стоп и ногтей без покрытия гель-лаком.",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s13231102",
  },
  {
    id: 13231109,
    name: "Обработка пальцев ног",
    price: "1 800 ₽",
    duration: "1 ч",
    note: "Аппаратная или комбинированная обработка пальцев ног без обработки стоп.",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s13231109",
  },
  {
    id: 17350429,
    name: "Полное снятие гель-лака",
    price: "700 ₽",
    duration: "30 мин",
    note: "Полное снятие гель-лака без маникюра, с коррекцией формы ногтей.",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s17350429",
  },
  {
    id: 29517282,
    name: "Холодный парафин для ног",
    price: "700 ₽",
    duration: "15 мин",
    note: "Глубокое увлажнение кожи стоп. Смягчает огрубевшие участки, уменьшает сухость и возвращает ощущение комфорта и ухоженности.",
    href: "https://n962951.yclients.com/company/894717/personal/select-services?o=m5439528s29517282",
  },
];

const works = ["01", "02", "03", "04", "05", "06", "07"];

const calendarHref = "https://n962951.yclients.com/company/894717/personal/select-time?o=";
const calendarDataUrl = "https://n962951.yclients.com/company/894717/personal/select-time";

const reviews = [
  { name: "in-melik", text: "Очень внимательный мастер. Ногти выглядят эстетично и аккуратно, а в кабинете чисто и уютно.", tag: "Маникюр" },
  { name: "Вероника Оганезова", text: "Как мастер, особенно оценила стерильность и уверенную работу Нонны — без суеты и лишних движений.", tag: "Стерильность" },
  { name: "Anush Ануш", text: "Покрытие носилось больше трёх недель без единой отслойки. Нонна — настоящий профессионал.", tag: "Стойкое покрытие" },
  { name: "Johnny Cage", text: "Мужской маникюр прошёл без порезов и дискомфорта. Профессиональный подход и стерильность — на высшем уровне.", tag: "Мужской маникюр" },
  { name: "Zhanna A.", text: "Чистый маникюр, приятное общение и уютная атмосфера. Ногти держатся долго.", tag: "Маникюр" },
  { name: "Наталья Е.", text: "Маникюр и педикюр выполнены очень аккуратно и чисто. Чувствуется работа профессионального мастера.", tag: "Маникюр · педикюр" },
  { name: "Наталья Пашина", text: "Нонна сделала маникюр и педикюр на высоком уровне. Буду рекомендовать мастера знакомым.", tag: "Маникюр · педикюр" },
  { name: "Валерия", text: "Аккуратно, мягко и с учётом всех пожеланий. Очень приятный и доброжелательный мастер.", tag: "Маникюр" },
  { name: "flosaigul", text: "Прекрасный педикюр с идеальным френчем. Спасибо мастеру Нонне!", tag: "Педикюр · френч" },
];

export default function Home() {
  const [service, setService] = useState<"hands" | "feet">("hands");
  const [showMobileBooking, setShowMobileBooking] = useState(true);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<number | null>(null);
  const [isMobilePortfolio, setIsMobilePortfolio] = useState(false);
  const worksViewportRef = useRef<HTMLDivElement>(null);
  const worksRailRef = useRef<HTMLDivElement>(null);
  const worksOffsetRef = useRef(0);
  const worksMobileReadyRef = useRef(false);
  const worksTouchRef = useRef({ active: false, pointerId: -1, startX: 0, startY: 0, moved: false });
  const worksResumeAtRef = useRef(0);

  useEffect(() => {
    document.body.classList.add("is-ready");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.14 }
    );
    document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));

    const bookingScript = document.createElement("script");
    bookingScript.src = "https://w962951.yclients.com/widgetJS";
    bookingScript.type = "text/javascript";
    bookingScript.charset = "UTF-8";
    bookingScript.async = true;
    document.body.appendChild(bookingScript);

    const footer = document.querySelector("footer");
    const footerObserver = new IntersectionObserver(
      ([entry]) => setShowMobileBooking(!entry.isIntersecting),
      { threshold: 0.05 }
    );
    if (footer) footerObserver.observe(footer);

    const onScroll = () => document.documentElement.style.setProperty("--scroll", String(window.scrollY));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      observer.disconnect();
      footerObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      bookingScript.remove();
    };
  }, []);

  useEffect(() => {
    const mobilePortfolio = window.matchMedia("(max-width: 820px)");
    const updatePortfolioMode = () => {
      setIsMobilePortfolio(mobilePortfolio.matches);
      worksMobileReadyRef.current = false;
      if (!mobilePortfolio.matches) {
        worksTouchRef.current.active = false;
        worksTouchRef.current.moved = false;
        setSelectedWork(null);
      }
    };

    updatePortfolioMode();
    mobilePortfolio.addEventListener("change", updatePortfolioMode);
    return () => mobilePortfolio.removeEventListener("change", updatePortfolioMode);
  }, []);

  useEffect(() => {
    let animationFrame = 0;
    let previousTime = performance.now();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const normalizeOffset = (offset: number, cycleWidth: number) => {
      if (!cycleWidth) return 0;
      return ((offset % cycleWidth) - cycleWidth) % cycleWidth;
    };

    const animate = (time: number) => {
      const rail = worksRailRef.current;
      const viewport = worksViewportRef.current;
      if (rail && viewport) {
        const sets = rail.querySelectorAll<HTMLElement>(".worksSet");
        const cycleWidth = sets.length > 1 ? sets[1].offsetLeft - sets[0].offsetLeft : 0;

        if (isMobilePortfolio) {
          rail.style.transform = "none";
          if (cycleWidth) {
            if (!worksMobileReadyRef.current) {
              viewport.scrollLeft = cycleWidth;
              worksMobileReadyRef.current = true;
            }

            const canMove = !worksTouchRef.current.active && time >= worksResumeAtRef.current;
            if (canMove) {
              if (viewport.scrollLeft < cycleWidth * 0.5) viewport.scrollLeft += cycleWidth;
              if (viewport.scrollLeft > cycleWidth * 1.5) viewport.scrollLeft -= cycleWidth;
            }

            if (canMove && !reduceMotion) {
              viewport.scrollLeft += Math.min(time - previousTime, 50) * 0.032;
            }
          }
        } else {
          viewport.scrollLeft = 0;
          if (!reduceMotion) worksOffsetRef.current -= Math.min(time - previousTime, 50) * 0.032;
          worksOffsetRef.current = normalizeOffset(worksOffsetRef.current, cycleWidth);
          rail.style.transform = `translate3d(${worksOffsetRef.current}px, 0, 0)`;
        }
      }
      previousTime = time;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isMobilePortfolio]);

  useEffect(() => {
    if (!isGalleryOpen && selectedWork === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (selectedWork !== null) setSelectedWork(null);
        else setIsGalleryOpen(false);
      }
      if (event.key === "ArrowLeft") setSelectedWork((current) => current === null ? null : (current - 1 + works.length) % works.length);
      if (event.key === "ArrowRight") setSelectedWork((current) => current === null ? null : (current + 1) % works.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isGalleryOpen, selectedWork]);

  const handleWorksPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isMobilePortfolio || event.button !== 0) return;
    worksTouchRef.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      moved: false,
    };
    worksResumeAtRef.current = Number.POSITIVE_INFINITY;
  };

  const handleWorksPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const touch = worksTouchRef.current;
    if (!touch.active || touch.pointerId !== event.pointerId) return;
    if (Math.hypot(event.clientX - touch.startX, event.clientY - touch.startY) > 8) touch.moved = true;
  };

  const handleWorksPointerEnd = (event: React.PointerEvent<HTMLDivElement>) => {
    const touch = worksTouchRef.current;
    if (!touch.active || touch.pointerId !== event.pointerId) return;
    touch.active = false;
    worksResumeAtRef.current = performance.now() + 1400;
    window.setTimeout(() => { worksTouchRef.current.moved = false; }, 0);
  };

  const openWork = (index: number) => {
    if (isMobilePortfolio && !worksTouchRef.current.moved) setSelectedWork(index);
  };

  return (
    <main>
      <div className="intro" aria-hidden="true"><span>ClayTone</span></div>

      <header className="nav">
        <a className="brand" href="#top">ClayTone<small>nail studio</small></a>
        <nav aria-label="Основная навигация">
          <a href="#works">Работы</a>
          <a href="#prices">Услуги</a>
          <a href="#about">О мастере</a>
          <a href="#reviews">Отзывы</a>
        </nav>
        <a className="navBook ms_booking" href={calendarHref} data-url={calendarDataUrl} target="_blank" rel="noreferrer">Записаться</a>
      </header>

      <section className="hero" id="top">
        <div className="heroWords">
          <p className="heroKicker heroKickerDesktop">Нонна · дипломированный мастер · Москва</p>
          <div className="heroKickerMobile" aria-label="Нонна — дипломированный мастер, Москва, метро Спортивная">
            <div className="heroKickerTrack" aria-hidden="true">
              <span>Нонна · дипломированный мастер · Москва · м. Спортивная</span>
              <span>Нонна · дипломированный мастер · Москва · м. Спортивная</span>
            </div>
          </div>
          <h1>
            <span>Маникюр</span>
            <span className="heroAccentLine"><em>с вниманием</em></span>
            <span>к деталям</span>
          </h1>
          <p className="heroLead">Аккуратная работа, стерильные инструменты и спокойная атмосфера — без спешки и компромиссов.</p>
          <div className="heroActions">
            <a className="button primaryButton ms_booking" href={calendarHref} data-url={calendarDataUrl} target="_blank" rel="noreferrer">Выбрать время <span className="textArrow" aria-hidden="true">↗︎</span></a>
            <a className="textLink" href="#works">Посмотреть работы ↓</a>
          </div>
        </div>

        <div className="heroVisual" aria-label="Нонна, мастер ClayTone Nail Studio">
          <div className="portraitFrame"><img src="/assets/nonna-portrait.jpeg" alt="Нонна — мастер ClayTone Nail Studio" /></div>
          <div className="experience"><strong>8</strong><span>лет<br />опыта</span></div>
          <span className="softRing ringOne" /><span className="softRing ringTwo" />
        </div>
      </section>

      <div className="marquee" aria-label="Безопасность, стерильность, аккуратность и комфорт">
        <div className="marqueeTrack" aria-hidden="true">
          {[0, 1].map((set) => (
            <div className="marqueeSet" key={set}>
              {[0, 1, 2].map((repeat) => (
                <span key={repeat}>Безопасность <b>·</b> Стерильность <b>·</b> Аккуратность <b>·</b> Комфорт <b>·</b> </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="worksSection" id="works">
        <div className="sectionIntro reveal" data-reveal>
          <p>Портфолио</p>
          <h2>Работы, которые<br /><em>говорят сами за себя</em></h2>
          <span>Только реальные фотографии работ мастера</span>
        </div>
        <div
          className="worksViewport reveal"
          ref={worksViewportRef}
          data-reveal
          onPointerDown={isMobilePortfolio ? handleWorksPointerDown : undefined}
          onPointerMove={isMobilePortfolio ? handleWorksPointerMove : undefined}
          onPointerUp={isMobilePortfolio ? handleWorksPointerEnd : undefined}
          onPointerCancel={isMobilePortfolio ? handleWorksPointerEnd : undefined}
          aria-label="Галерея работ Нонны"
        >
          <div className="worksRail" ref={worksRailRef}>
            {[0, 1, 2].map((set) => (
              <div className="worksSet" aria-hidden={set > 0 ? true : undefined} key={set}>
                {works.map((work, index) => (
                  <figure className={`workCard workCard${index + 1}`} key={`${set}-${work}`}>
                    <button
                      className="imageWrap"
                      type="button"
                      onClick={() => openWork(index)}
                      disabled={!isMobilePortfolio}
                      tabIndex={set > 0 ? -1 : undefined}
                      aria-label={`Увеличить работу Нонны ${index + 1}`}
                    >
                      <img src={`/assets/work-${work}.webp`} alt={`Работа Нонны ${index + 1}`} loading={set > 0 || index > 2 ? "lazy" : undefined} draggable={false} />
                    </button>
                    <figcaption><span>ClayTone / 0{index + 1}</span><span>Маникюр</span></figcaption>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="worksGalleryAction reveal" data-reveal>
          <button className="galleryButton" type="button" onClick={() => setIsGalleryOpen(true)}>
            <span>Смотреть все работы</span>
            <span className="galleryButtonArrow" aria-hidden="true">↗︎</span>
          </button>
        </div>
      </section>

      {isGalleryOpen && (
        <div className="galleryModal" onClick={(event) => event.target === event.currentTarget && setIsGalleryOpen(false)}>
          <div className="galleryDialog" role="dialog" aria-modal="true" aria-labelledby="gallery-title">
            <div className="galleryHeader">
              <div><span>Портфолио ClayTone</span><h3 id="gallery-title">Все работы</h3></div>
              <button className="galleryClose" type="button" onClick={() => setIsGalleryOpen(false)} aria-label="Закрыть галерею">×</button>
            </div>
            <div className="galleryGrid">
              {works.map((work, index) => (
                <button className="galleryTile" type="button" key={work} onClick={() => setSelectedWork(index)} aria-label={`Увеличить работу Нонны ${index + 1}`}>
                  <img src={`/assets/work-${work}.webp`} alt={`Работа Нонны ${index + 1}`} loading={index > 2 ? "lazy" : undefined} />
                  <span>0{index + 1}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedWork !== null && (
        <div className="workLightbox" onClick={(event) => event.target === event.currentTarget && setSelectedWork(null)}>
          <div className="workLightboxDialog" role="dialog" aria-modal="true" aria-label={`Работа Нонны ${selectedWork + 1}`}>
            <button className="lightboxClose" type="button" onClick={() => setSelectedWork(null)} aria-label="Закрыть увеличенную фотографию">×</button>
            <button className="lightboxNav lightboxPrev" type="button" onClick={() => setSelectedWork((selectedWork - 1 + works.length) % works.length)} aria-label="Предыдущая работа">←</button>
            <img src={`/assets/work-${works[selectedWork]}.webp`} alt={`Работа Нонны ${selectedWork + 1} в увеличенном виде`} />
            <button className="lightboxNav lightboxNext" type="button" onClick={() => setSelectedWork((selectedWork + 1) % works.length)} aria-label="Следующая работа">→</button>
            <p><span>ClayTone</span><span>{String(selectedWork + 1).padStart(2, "0")} / {String(works.length).padStart(2, "0")}</span></p>
          </div>
        </div>
      )}

      <section className="pricesSection" id="prices">
        <div className="priceTitle reveal" data-reveal>
          <p>Услуги и цены</p>
          <h2><em>Просто.<br />Понятно.</em></h2>
          <span>Стоимость известна до записи. Предоплата не требуется.</span>
        </div>
        <div className="priceArea reveal" data-reveal>
          <div className="tabs" role="tablist" aria-label="Категории услуг">
            <button role="tab" aria-selected={service === "hands"} className={service === "hands" ? "active" : ""} onClick={() => setService("hands")}>Маникюр</button>
            <button role="tab" aria-selected={service === "feet"} className={service === "feet" ? "active" : ""} onClick={() => setService("feet")}>Педикюр</button>
          </div>
          {[{ id: "hands", items: hands }, { id: "feet", items: feet }].map((group) => (
            <div className="priceRows" key={group.id} hidden={service !== group.id}>
              {group.items.map(({ id, name, price, duration, note, href }, index) => {
                return (
                  <div className="priceRow" key={id} style={{ "--delay": `${Math.min(index, 8) * 55}ms` } as React.CSSProperties}>
                    <span className="priceIndex">{String(index + 1).padStart(2, "0")}</span>
                    <div className="priceDescription"><strong>{name}</strong><small>{note}</small></div>
                    <div className="priceAction">
                      <div className="priceFacts"><b>{price}</b><span>{duration}</span></div>
                      <a
                        className="serviceBook ms_booking"
                        href={href}
                        data-url={href.split("?")[0]}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Записаться к Нонне на услугу «${name}»`}
                      >
                        Записаться <span className="textArrow" aria-hidden="true">↗︎</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
          <a className="button outlineButton ms_booking" href={calendarHref} data-url={calendarDataUrl} target="_blank" rel="noreferrer">Посмотреть свободное время <span className="textArrow" aria-hidden="true">↗︎</span></a>
        </div>
      </section>

      <section className="aboutSection" id="about">
        <div className="aboutPortrait reveal" data-reveal><img src="/assets/nonna-about.webp" alt="Нонна, мастер маникюра и педикюра" loading="lazy" /></div>
        <div className="aboutText reveal" data-reveal>
          <p>О мастере</p>
          <h2>«Мне важно, чтобы вам было <em>спокойно</em> на каждом этапе»</h2>
          <div className="aboutBody">
            <p>Меня зовут Нонна. Более 8 лет я работаю мастером маникюра и педикюра. Для меня главное - безопасность, безупречная стерильность, аккуратность и ваш комфорт.<br /><br />Моя цель, чтобы вы уходили не только с красивым маникюром и педикюром, но и с приятными впечатлениями от посещения.</p>
            <ul><li>Дипломированный мастер</li><li>8 лет практического опыта</li><li>Индивидуальная работа с каждым клиентом</li></ul>
          </div>
        </div>
      </section>

      <section className="reviewsSection" id="reviews">
        <div className="reviewsIntro reveal" data-reveal>
          <p>Отзывы клиентов</p>
          <h2>После визита<br /><em>остаются эмоции</em></h2>
          <a className="reviewsScore" href="https://claytone-kooperativnaja-ulitsa.clients.site/" target="_blank" rel="noreferrer" aria-label="Посмотреть отзывы ClayTone на Яндекс Картах">
            <strong>5,0</strong>
            <span><b>★★★★★</b><small>95 оценок на Яндекс Картах <i className="textArrow" aria-hidden="true">↗︎</i></small></span>
          </a>
        </div>
        <div className="reviewsViewport" aria-label="Отзывы клиентов ClayTone">
          <div className="reviewsTrack">
            {[0, 1].map((set) => (
              <div className="reviewSet" aria-hidden={set === 1 ? true : undefined} key={set}>
                {reviews.map((review) => (
                  <article className="reviewCard" key={`${set}-${review.name}`}>
                    <div className="reviewCardInner">
                      <div className="reviewTop"><span>★★★★★</span><small>Яндекс Карты</small></div>
                      <blockquote>«{review.text}»</blockquote>
                      <div className="reviewMeta"><strong>{review.name}</strong><span>{review.tag}</span></div>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bookingSection">
        <div className="bookingGlow" />
        <p className="reveal" data-reveal>Онлайн-запись</p>
        <h2 className="reveal" data-reveal>Выберите удобное<br /><em>время для себя</em></h2>
        <p className="bookingCopy reveal" data-reveal>Запись занимает пару минут. Можно отменить или перенести в любое время.</p>
        <div className="bookingButtons reveal" data-reveal>
          <a className="button lightButton ms_booking" href={calendarHref} data-url={calendarDataUrl} target="_blank" rel="noreferrer">Выбрать время <span className="textArrow" aria-hidden="true">↗︎</span></a>
          <a className="button ghostButton telegramButton" href="https://t.me/nonnails" target="_blank" rel="noreferrer" aria-label="Написать мастеру Нонне в Telegram" title="Telegram"><span className="telegramIcon" aria-hidden="true" />Написать мастеру Нонне</a>
        </div>
      </section>

      <footer>
        <a className="footerBrand" href="#top">ClayTone<small>Nail Studio</small></a>
        <div><span>Адрес</span><p>Москва, Кооперативная улица, 4, корпус 9<br />м. Спортивная</p></div>
        <div><span>Часы работы</span><p>Пн–Вс<br />10:00–22:00</p></div>
        <div><span>Связаться</span><p><a href="tel:+79054141088">8-905-414-10-88</a><br /><a href="https://t.me/nonnails" target="_blank" rel="noreferrer">Telegram <i className="textArrow" aria-hidden="true">↗︎</i></a></p></div>
      </footer>

      <a
        className="floatingBooking ms_booking"
        href={calendarHref}
        data-url={calendarDataUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Записаться онлайн в календаре YCLIENTS"
      >
        <span className="bookingCtaDot" aria-hidden="true" />
        <span className="bookingCtaText"><small>Свободные окна</small><strong>Записаться онлайн</strong></span>
        <span className="bookingCtaArrow" aria-hidden="true">↗︎</span>
        <span className="bookingCtaShine" aria-hidden="true" />
      </a>

      <a
        className={`mobileBooking ms_booking${showMobileBooking ? "" : " mobileBookingHidden"}`}
        href={calendarHref}
        data-url={calendarDataUrl}
        target="_blank"
        rel="noreferrer"
      >
        <span className="bookingCtaDot" aria-hidden="true" />
        <span className="bookingCtaText"><strong>Записаться онлайн</strong><small>Календарь YCLIENTS</small></span>
        <span className="bookingCtaArrow" aria-hidden="true">↗︎</span>
        <span className="bookingCtaShine" aria-hidden="true" />
      </a>
    </main>
  );
}
