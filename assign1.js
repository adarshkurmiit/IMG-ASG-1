(function () {
    const track = document.querySelector('.Ach-track');
    const dots = document.querySelectorAll('.ach-dot');
    const slides = document.querySelectorAll('.Ach-slide');
    const prevBtn = document.querySelector('.Ach-prev');
    const nextBtn = document.querySelector('.Ach-next');
 
    if (!track || !slides.length) return;
 
    let current = 0;
    const total = slides.length;
 
    function goTo(index) {
        current = (index + total) % total;
        track.style.transform = `translateX(-${current * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }
 
    prevBtn && prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn && nextBtn.addEventListener('click', () => goTo(current + 1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
 
    setInterval(() => goTo(current + 1), 4000);
})();
 
 
(function () {
    const eventItems = document.querySelectorAll('.event-item[data-event]');
    const evImg = document.getElementById('ev-img');
    const evDots = document.querySelectorAll('.ev-dot');
    const prevBtn = document.querySelector('.Ev-prev');
    const nextBtn = document.querySelector('.Ev-next');
 
    if (!eventItems.length) return;
 
    const eventImages = [
        'images/Event.png',  // THOMSO
        'images/Event.png',  // IITRMS
        'images/Event.png',  // CONVOCATION
        'images/Event.png',  // COGNIZANCE
        'images/Event.png',  // TEDxIITRoorkee
        'images/Event.png',  // EUNOIA
        'images/Event.png',  // INTER-IIT
    ];
 
    let currentEvent = 3; 
 
    function setActiveEvent(index) {
        currentEvent = (index + eventItems.length) % eventItems.length;
 
        eventItems.forEach((item, i) => {
            item.classList.toggle('active', i === currentEvent);
        });
 
        evDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentEvent % evDots.length);
        });
 
        if (evImg) {
            evImg.src = eventImages[currentEvent] || 'images/Event.png';
        }
    }
 
    eventItems.forEach((item, i) => {
        item.addEventListener('click', () => setActiveEvent(i));
    });
 
    prevBtn && prevBtn.addEventListener('click', () => setActiveEvent(currentEvent - 1));
    nextBtn && nextBtn.addEventListener('click', () => setActiveEvent(currentEvent + 1));
 
    evDots.forEach((dot, i) => dot.addEventListener('click', () => setActiveEvent(i)));
})();
 
 
// ===== MILESTONES TIMELINE =====
(function () {
    const tlItems = document.querySelectorAll('.tl-item');
    const milTitle = document.querySelector('.mil-title');
    const milDesc = document.querySelector('.mil-desc');
    const milImg = document.querySelector('.mil-img');
    const prevBtn = document.querySelector('.Mil-prev');
    const nextBtn = document.querySelector('.Mil-next');
 
    if (!tlItems.length) return;
 
    const milestones = [
        {
            year: '2018',
            title: 'IIT Roorkee Establishes New Research Centers',
            desc: 'IIT Roorkee expanded its research infrastructure by establishing new cutting-edge research centers to boost innovation and interdisciplinary studies across engineering, science, and technology domains.',
            img: 'images/Archi no.1.png'
        },
        {
            year: '2019',
            title: 'IIT Roorkee Celebrates 175 Years of Excellence',
            desc: 'IIT Roorkee celebrated 175 glorious years of academic excellence, marking its journey from Thomason College of Civil Engineering to one of India\'s premier technological institutions.',
            img: 'images/Archi no.1.png'
        },
        {
            year: '2020',
            title: 'IIT Roorkee Launches Online Education Initiatives',
            desc: 'Amid global challenges, IIT Roorkee successfully transitioned to online education and launched new digital learning platforms to ensure uninterrupted academic continuity for students.',
            img: 'images/Archi no.1.png'
        },
        {
            year: '2021',
            title: 'IIT Roorkee Achieves Record Research Publications',
            desc: 'IIT Roorkee achieved a record number of research publications in high-impact international journals, reinforcing its position as a top research institution in India and globally.',
            img: 'images/Archi no.1.png'
        },
        {
            year: '2022',
            title: 'IIT Roorkee Ranks Among Top Global Universities',
            desc: 'IIT Roorkee secured a prominent position in the QS World University Rankings, reflecting its consistent growth in research output, faculty quality, and international collaborations.',
            img: 'images/Archi no.1.png'
        },
        {
            year: '2023',
            title: 'IITR\'s Architecture Department ranked 1st among all colleges in India',
            desc: 'Department of Architecture, IIT Roorkee remains unparalleled and has maintained its position as rank #1 in the National Institutional Ranking Framework (NIRF) Rankings for 2023. This is the third consecutive time IIT Roorkee has been ranked #1 in NIRF India ranking.',
            img: 'images/Archi no.1.png'
        },
        {
            year: '2024',
            title: 'IIT Roorkee Expands Industry Partnerships and Startups',
            desc: 'IIT Roorkee significantly expanded its industry partnership network and startup ecosystem, with several startups from TIDES Business Incubator receiving national and international recognition.',
            img: 'images/Archi no.1.png'
        }
    ];
 
    let currentMilestone = 5; // Default: 2023
 
    function setMilestone(index) {
        currentMilestone = (index + milestones.length) % milestones.length;
        const m = milestones[currentMilestone];
 
        tlItems.forEach((item, i) => {
            const yearEl = item.querySelector('.year');
            const dotEl = item.querySelector('.tl-dot');
            if (yearEl) yearEl.classList.toggle('active', i === currentMilestone);
            if (dotEl) dotEl.classList.toggle('active', i === currentMilestone);
        });
 
        if (milTitle) milTitle.innerHTML = m.title;
        if (milDesc) milDesc.textContent = m.desc;
        if (milImg) milImg.src = m.img;
    }
 
    tlItems.forEach((item, i) => {
        item.addEventListener('click', () => setMilestone(i));
    });
 
    prevBtn && prevBtn.addEventListener('click', () => setMilestone(currentMilestone - 1));
    nextBtn && nextBtn.addEventListener('click', () => setMilestone(currentMilestone + 1));
})();
 
 
// ===== PATENTS SLIDER =====
(function () {
    const prevBtn = document.querySelector('.Patents-prev');
    const nextBtn = document.querySelector('.Patents-next');
    const patentTitle = document.querySelector('.patent-title');
    const patentDesc = document.querySelector('.patent-desc');
    const patentImg = document.querySelector('.Patents-card-left img');
 
    if (!prevBtn || !nextBtn) return;
 
    const patents = [
        {
            title: 'REAL-TIME FOG REMOVAL SYSTEM AND ITS METHOD THEREOF',
            desc: 'The present invention provides a visible and near-infrared band\'s deep learning and pixel sharing-based system and method for image and video dehazing. It successfully restores hazy/foggy images with a wide range of haze/fog conditions. Unlike the prior art, the proposed invention utilized a wide electromagnetic spectrum for imaging from 400nm to 1400nm wavelength and performed dehazing/defogging in the entire range (visible and NIR bands). For this task, a data-driven approach is developed to learn appropriate features from the input image sequences. The spatial multiscale features are extracted using completely separable ID layers that allow pipeline stage insertion to enhance...',
            img: 'images/Patent Document.png'
        },
        {
            title: 'SMART WATER QUALITY MONITORING SYSTEM USING IoT AND AI',
            desc: 'The present invention discloses an integrated system for real-time water quality monitoring using Internet of Things (IoT) sensors and Artificial Intelligence algorithms. The system is capable of detecting pollutants, pH levels, turbidity, and microbial contamination in water bodies. A cloud-based dashboard provides continuous alerts and analytics to authorities for timely intervention.',
            img: 'images/Patent Document.png'
        },
        {
            title: 'EARTHQUAKE RESISTANT STRUCTURAL FRAME WITH ENERGY DISSIPATION',
            desc: 'This invention relates to an innovative earthquake-resistant structural frame incorporating advanced energy dissipation mechanisms. The frame utilizes viscoelastic dampers and shape memory alloys to absorb seismic energy, significantly reducing structural damage during high-magnitude earthquakes. The system is applicable to both new construction and retrofitting of existing structures.',
            img: 'images/Patent Document.png'
        }
    ];
 
    let currentPatent = 0;
 
    function showPatent(index) {
        currentPatent = (index + patents.length) % patents.length;
        const p = patents[currentPatent];
        if (patentTitle) patentTitle.textContent = p.title;
        if (patentDesc) patentDesc.textContent = p.desc;
        if (patentImg) patentImg.src = p.img;
    }
 
    prevBtn.addEventListener('click', () => showPatent(currentPatent - 1));
    nextBtn.addEventListener('click', () => showPatent(currentPatent + 1));
})();
 
 
// ===== FONT SIZE CONTROL =====
(function () {
    const fsSmall = document.querySelector('.fs-small');
    const fsMedium = document.querySelector('.fs-medium');
    const fsLarge = document.querySelector('.fs-large');
 
    const sizes = { small: '14px', medium: '16px', large: '18px' };
 
    function setFontSize(size) {
        document.body.style.fontSize = sizes[size];
    }
 
    fsSmall && fsSmall.addEventListener('click', () => setFontSize('small'));
    fsMedium && fsMedium.addEventListener('click', () => setFontSize('medium'));
    fsLarge && fsLarge.addEventListener('click', () => setFontSize('large'));
})();
 
 
// ===== LANGUAGE TOGGLE (A / Yellow A) =====
(function () {
    const boxes = document.querySelectorAll('.language-box');
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            boxes.forEach(b => b.classList.remove('yellow'));
            box.classList.add('yellow');
        });
    });
})();