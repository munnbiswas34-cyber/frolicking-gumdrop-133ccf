   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>INAYA ENTERPRISES - Authorised Currency Exchange | INR ↔ BDT ↔ USD</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet"/>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', sans-serif;
            background: #f8fafc;
            color: #0f172a;
            scroll-behavior: smooth;
            line-height: 1.6;
        }
        a { text-decoration: none; color: inherit; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        
        .section-title { font-size: 2.4rem; font-weight: 800; text-align: center; margin-bottom: 10px; color: #1e3a8a; }
        .section-subtitle { text-align: center; color: #64748b; margin-bottom: 48px; font-size: 1.1rem; }
        
        .btn { display: inline-block; padding: 14px 36px; border-radius: 50px; font-weight: 600; font-size: 1rem; transition: 0.3s; border: none; cursor: pointer; text-align: center; }
        .btn-primary { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: #fff; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,99,235,0.35); }
        .btn-outline { background: rgba(255,255,255,0.15); color: #fff; border: 2px solid #fff; backdrop-filter: blur(5px); }
        .btn-outline:hover { background: #fff; color: #1e3a8a; }
        .btn-whatsapp { background: #25d366; color: #fff; display: inline-flex; align-items: center; gap: 8px; }
        .btn-whatsapp:hover { background: #20ba5a; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(37,211,102,0.35); }

        /* ===== NAVBAR ===== */
        nav { position: fixed; top: 0; width: 100%; z-index: 1000; background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-bottom: 1px solid #e2e8f0; }
        nav .container { display: flex; align-items: center; justify-content: space-between; padding: 16px 24px; }
        .logo { display: flex; align-items: center; gap: 10px; font-size: 1.4rem; font-weight: 900; color: #2563eb; letter-spacing: 0.5px; }
        .nav-links { display: flex; gap: 32px; list-style: none; align-items: center; }
        .nav-links a { font-weight: 600; color: #334155; transition: 0.2s; font-size: 0.95rem; }
        .nav-links a:hover { color: #2563eb; }
        .nav-links .btn-primary { padding: 10px 24px; font-size: 0.9rem; }
        .hamburger { display: none; font-size: 1.6rem; cursor: pointer; color: #0f172a; }

        /* ===== HERO SECTION WITH "4114.png" BACKGROUND ===== */
        .hero { 
            margin-top: 75px; 
            position: relative;
            background: url('4114.png') no-repeat center center/cover; 
            padding: 140px 0 120px; 
            color: #fff; 
            overflow: hidden;
        }
        /* Gradient Overlay for high professionalism & readability */
        .hero::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 58, 138, 0.85) 100%);
            z-index: 1;
        }
        .hero .container { position: relative; z-index: 2; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 50px; align-items: center; }
        .hero-content h1 { font-size: 3.4rem; font-weight: 900; line-height: 1.2; margin-bottom: 18px; text-shadow: 0 2px 4px rgba(0,0,0,0.4); }
        .hero-content h1 span { color: #3b82f6; }
        .company-title-wrap { margin-bottom: 20px; }
        .company-name-en { font-size: 2.4rem; font-weight: 900; color: #3b82f6; letter-spacing: 1px; }
        .company-name-bn { font-size: 1.5rem; font-weight: 700; color: #cbd5e1; margin-top: 4px; }
        .hero-content p { font-size: 1.15rem; color: #cbd5e1; margin-bottom: 36px; max-width: 540px; }
        .hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }
        
        /* ===== SIDE SWIPE CAROUSEL WITH "1000032866.jpg" ELEMENTS ===== */
        .carousel-container {
            position: relative;
            width: 100%;
            height: 340px;
            overflow: hidden;
            border-radius: 24px;
            box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
            border: 1px solid rgba(255,255,255,0.2);
        }
        .carousel-track {
            display: flex;
            width: 300%;
            height: 100%;
            transition: transform 0.7s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .slide {
            width: 33.333%;
            height: 100%;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 40px;
            text-align: center;
            /* Blends the original 1000032866.jpg look seamlessly */
            background: url('1000032866.jpg') no-repeat center center/cover;
        }
        /* Specific translucent colored overlay for each slide type */
        .slide-usd::before { content:''; position:absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(135deg, rgba(4, 120, 87, 0.9), rgba(30, 58, 138, 0.95)); z-index: 1; }
        .slide-bdt::before { content:''; position:absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(135deg, rgba(185, 28, 28, 0.9), rgba(30, 58, 138, 0.95)); z-index: 1; }
        .slide-eur::before { content:''; position:absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(135deg, rgba(180, 83, 9, 0.9), rgba(30, 58, 138, 0.95)); z-index: 1; }

        .slide-content { position: relative; z-index: 2; }
        .slide-headline { font-size: 1.2rem; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #93c5fd; margin-bottom: 20px; }
        .currency-bg-fusion { display: flex; align-items: center; gap: 24px; margin-bottom: 20px; justify-content: center; }
        .currency-bg-fusion i { font-size: 3.8rem; text-shadow: 0 4px 12px rgba(0,0,0,0.3); }
        .icon-from { color: #fff; }
        .icon-sep { font-size: 2rem !important; color: #60a5fa; opacity: 0.7; }
        .icon-to { color: #f59e0b; }

        .slide-rate { font-size: 3.4rem; font-weight: 900; color: #fff; text-shadow: 0 4px 10px rgba(0,0,0,0.4); }
        .slide-status { display: inline-block; margin-top: 15px; background: rgba(16, 185, 129, 0.25); color: #34d399; padding: 6px 20px; border-radius: 50px; font-size: 0.85rem; font-weight: 600; border: 1px solid rgba(16, 185, 129, 0.4); }

        /* ===== LIVE RATES TABLE ===== */
        .rates-section { padding: 90px 0; background: #fff; }
        .rates-table-wrap { background: #f8fafc; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.04); border: 1px solid #e2e8f0; }
        .rates-table { width: 100%; border-collapse: collapse; }
        .rates-table thead { background: linear-gradient(135deg, #1e3a8a, #1e40af); color: #fff; }
        .rates-table th { padding: 20px 24px; text-align: left; font-weight: 600; font-size: 0.95rem; letter-spacing: 0.5px; }
        .rates-table td { padding: 18px 24px; border-bottom: 1px solid #e2e8f0; font-weight: 500; font-size: 1rem; color: #334155; }
        .rates-table tbody tr:hover { background: #f1f5f9; }
        .badge { display: inline-block; padding: 6px 16px; border-radius: 50px; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; }
        .badge-buy { background: #dcfce7; color: #15803d; }
        .update-note { text-align: center; padding: 16px; font-size: 0.9rem; color: #64748b; background: #fff; border-top: 1px solid #e2e8f0; }

        /* ===== CONVERTER SECTION ===== */
        .converter-section { padding: 90px 0; background: #f0f4ff; }
        .converter-wrap { max-width: 650px; margin: 0 auto; background: #fff; padding: 45px; border-radius: 28px; box-shadow: 0 20px 40px rgba(0,0,0,0.05); border: 1px solid #e2e8f0; }
        .conv-row { display: flex; gap: 16px; align-items: flex-end; margin-bottom: 28px; flex-wrap: wrap; }
        .conv-field { flex: 1; min-width: 140px; }
        .conv-field label { display: block; font-weight: 700; margin-bottom: 8px; color: #334155; font-size: 0.9rem; }
        .conv-field input, .conv-field select { width: 100%; padding: 16px; border: 1px solid #cbd5e1; border-radius: 14px; font-family: inherit; font-size: 1rem; background: #f8fafc; color: #0f172a; font-weight: 500; }
        .conv-field input:focus, .conv-field select:focus { outline: none; border-color: #2563eb; background: #fff; box-shadow: 0 0 0 4px rgba(37,99,235,0.1); }
        .conv-swap { width: 54px; height: 54px; background: linear-gradient(135deg, #2563eb, #1d4ed8); color: #fff; border: none; border-radius: 14px; cursor: pointer; font-size: 1.3rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: 0.3s; }
        .conv-swap:hover { transform: rotate(180deg); }
        .conv-result { background: #eff6ff; padding: 24px; border-radius: 18px; text-align: center; border: 1px solid #bfdbfe; }
        .conv-result p { font-size: 0.95rem; color: #475569; margin-bottom: 6px; font-weight: 500; }
        .conv-result .amount { font-size: 2.2rem; font-weight: 900; color: #1e40af; }

        /* ===== SPECIAL NEW SMART DEPOSIT SERVICES SECTION ===== */
        .services { padding: 90px 0; background: #fff; }
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; }
        .service-card { background: linear-gradient(135deg, #f8fafc, #ffffff); padding: 40px 30px; border-radius: 24px; text-align: center; border: 1px solid #e2e8f0; transition: 0.3s; position: relative; overflow: hidden; }
        .service-card::before { content:''; position:absolute; top:0; left:0; width:100%; height:5px; background:#2563eb; transform:scaleX(0); transition: 0.3s; }
        .service-card:hover { transform: translateY(-8px); border-color: #2563eb; box-shadow: 0 20px 40px rgba(37,99,235,0.08); }
        .service-card:hover::before { transform:scaleX(1); }
        .service-card i { font-size: 3rem; color: #2563eb; margin-bottom: 20px; }
        .service-card h4 { font-size: 1.3rem; font-weight: 800; margin-bottom: 12px; color: #1e3a8a; }
        .service-card p { color: #475569; font-size: 1rem; }
        
        /* Payment Icons Custom Badges Grid */
        .gateway-badges { display: flex; justify-content: center; gap: 8px; flex-wrap: wrap; margin-top: 16px; }
        .g-badge { background: #f1f5f9; padding: 6px 14px; border-radius: 8px; font-size: 0.8rem; font-weight: 700; color: #334155; border: 1px solid #e2e8f0; }
        .g-badge.inr { background: #e0f2fe; color: #0369a1; }
        .g-badge.bdt { background: #fce7f3; color: #be185d; }

        /* ===== CONTACT & DIRECTIONS ===== */
        .contact-section { padding: 90px 0; background: #f8fafc; }
        .contact-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 30px; }
        .contact-card { background: #fff; padding: 36px 30px; border-radius: 24px; text-align: center; border: 1px solid #e2e8f0; transition: 0.3s; }
        .contact-card:hover { transform: translateY(-4px); box-shadow: 0 12px 30px rgba(0,0,0,0.05); }
        .contact-card i { font-size: 2.4rem; color: #2563eb; margin-bottom: 16px; }
        .contact-card h4 { font-size: 1.15rem; font-weight: 800; margin-bottom: 10px; }
        .contact-card p, .contact-card a { color: #475569; font-weight: 600; font-size: 0.95rem; }
        .contact-card a:hover { color: #2563eb; }
        .btn-map { background: #1e293b; color: #fff; margin-top: 14px; padding: 10px 24px; font-size: 0.85rem; border-radius: 50px; display: inline-flex; align-items: center; gap: 6px; }
        .btn-map:hover { background: #0f172a; }

        /* ===== FOOTER ===== */
        footer { background: #0f172a; color: #94a3b8; padding: 70px 0 35px; border-top: 4px solid #2563eb; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 50px; margin-bottom: 50px; }
        .footer-brand h3 { font-size: 1.6rem; color: #fff; margin-bottom: 14px; font-weight: 900; }
        .footer-brand p { max-width: 360px; font-size: 0.95rem; line-height: 1.7; }
        .footer-links h4 { color: #fff; margin-bottom: 20px; font-weight: 700; font-size: 1.1rem; }
        .footer-links ul { list-style: none; }
        .footer-links ul li { margin-bottom: 12px; }
        .footer-links ul li a { transition: 0.2s; font-weight: 500; }
        .footer-links ul li a:hover { color: #3b82f6; }
        .footer-bottom { border-top: 1px solid #334155; padding-top: 35px; text-align: center; font-size: 0.9rem; color: #64748b; }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 992px) {
            .hero .container { grid-template-columns: 1fr; text-align: center; }
            .hero p { margin: 0 auto 32px; }
            .hero-btns { justify-content: center; }
            .carousel-container { max-width: 550px; margin: 30px auto 0; }
        }
        @media (max-width: 768px) {
            .hero-content h1 { font-size: 2.4rem; }
            .company-name-en { font-size: 1.9rem; }
            .hamburger { display: block; }
            .nav-links { display: none; flex-direction: column; position: absolute; top: 100%; left: 0; width: 100%; background: #fff; padding: 24px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); gap: 20px; }
            .nav-links.active { display: flex; }
            .conv-row { flex-direction: column; align-items: stretch; }
            .conv-swap { align-self: center; }
            .footer-grid { grid-template-columns: 1fr; gap: 32px; }
        }
    </style>
</head>
<body>

    <!-- ===== NAVBAR ===== -->
    <nav>
        <div class="container">
            <div class="logo">
                <i class="fa-solid fa-money-bill-transfer"></i>
                INAYA ENTERPRISES
            </div>
            <ul class="nav-links" id="navLinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#rates">Live Rates</a></li>
                <li><a href="#converter">Converter</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="https://wa.me/918942852223" class="btn btn-whatsapp" target="_blank"><i class="fa-brands fa-whatsapp"></i> Chat Now</a></li>
            </ul>
            <div class="hamburger" id="hamburger">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
    </nav>

    <!-- ===== HERO SECTION ===== -->
    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content">
                <div class="company-title-wrap">
                    <div class="company-name-en">INAYA ENTERPRISES</div>
                    <div class="company-name-bn">ইনায়া এন্টারপ্রাইজেস • ফরেন মানি এক্সচেঞ্জার</div>
                </div>
                <h1>Trusted Foreign <span>Money Exchange</span></h1>
                <p>We provide standard reliable exchange service across INR, BDT, and USD. Fully professional multi-gateway transactions with instant fulfillment.</p>
                <div class="hero-btns">
                    <a href="https://wa.me/918942852223" target="_blank" class="btn btn-whatsapp"><i class="fa-brands fa-whatsapp"></i> WhatsApp Order</a>
                    <a href="#rates" class="btn btn-outline">Check Today's Rates</a>
                </div>
            </div>
            
            <!-- ===== AUTO SWIPE CAROUSEL WITH PRESET GRAPHICS ===== -->
            <div class="carousel-container">
                <div class="carousel-track" id="carouselTrack">
                    <!-- Slide 1: BDT to INR -->
                    <div class="slide slide-bdt">
                        <div class="slide-content">
                            <div class="slide-headline">Today's BDT to Rupee Rate</div>
                            <div class="currency-bg-fusion">
                                <i class="fa-solid fa-money-bill-1-wave icon-from"></i>
                                <i class="fa-solid fa-right-long icon-sep"></i>
                                <i class="fa-solid fa-indian-rupee-sign icon-to"></i>
                            </div>
                            <div class="slide-rate">₹71.20</div>
                            <div class="slide-status"><i class="fa-solid fa-circle-check"></i> Standard Value (Per 100)</div>
                        </div>
                    </div>
                    
                    <!-- Slide 2: USD to INR -->
                    <div class="slide slide-usd">
                        <div class="slide-content">
                            <div class="slide-headline">Today's USD to Rupee Rate</div>
                            <div class="currency-bg-fusion">
                                <i class="fa-solid fa-circle-dollar-to-slot icon-from"></i>
                                <i class="fa-solid fa-right-long icon-sep"></i>
                                <i class="fa-solid fa-indian-rupee-sign icon-to"></i>
                            </div>
                            <div class="slide-rate">₹83.45</div>
                            <div class="slide-status"><i class="fa-solid fa-circle-check"></i> Live Dashboard Verified</div>
                        </div>
                    </div>
                    
                    <!-- Slide 3: EUR to INR -->
                    <div class="slide slide-eur">
                        <div class="slide-content">
                            <div class="slide-headline">Today's Euro to Rupee Rate</div>
                            <div class="currency-bg-fusion">
                                <i class="fa-solid fa-euro-sign icon-from"></i>
                                <i class="fa-solid fa-right-long icon-sep"></i>
                                <i class="fa-solid fa-indian-rupee-sign icon-to"></i>
                            </div>
                            <div class="slide-rate">₹89.80</div>
                            <div class="slide-status"><i class="fa-solid fa-circle-check"></i> Instant Booking Live</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== LIVE RATES TABLE ===== -->
    <section class="rates-section" id="rates">
        <div class="container">
            <h2 class="section-title">Today's Exchange Rates</h2>
            <p class="section-subtitle">Real-time desk rates. Contact our support line to freeze rates instantly.</p>
            
            <div class="rates-table-wrap">
                <table class="rates-table">
                    <thead>
                        <tr>
                            <th>Currency Name</th>
                            <th>Code</th>
                            <th>Our Buy Rate</th>
                            <th>Our Sell Rate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>US Dollar</td>
                            <td>USD</td>
                            <td>₹83.15</td>
                            <td>₹83.75</td>
                        </tr>
                        <tr>
                            <td>Bangladeshi Taka (Per 100)</td>
                            <td>BDT</td>
                            <td>₹70.50</td>
                            <td>₹71.90</td>
                        </tr>
                        <tr>
                            <td>Euro</td>
                            <td>EUR</td>
                            <td>₹89.20</td>
                            <td>₹90.40</td>
                        </tr>
                    </tbody>
                </table>
                <div class="update-note">
                    <i class="fa-solid fa-circle-info"></i> Highly subject to rapid market variations. Tap your request into our chat board.
                </div>
            </div>
        </div>
    </section>

    <!-- ===== CONVERTER SECTION ===== -->
    <section class="converter-section" id="converter">
        <div class="container">
            <h2 class="section-title">Smart Live Conversion</h2>
            <p class="section-subtitle">Quickly evaluate expected final payouts directly converted to INR desk scale values.</p>
            
            <div class="converter-wrap">
                <div class="conv-row">
                    <div class="conv-field">
                        <label>Enter Amount</label>
                        <input type="number" id="amountInput" value="100"/>
                    </div>
                    <div class="conv-field">
                        <label>Source Currency</label>
                        <select id="fromCurrency">
                            <option value="BDT">BDT - Bangladeshi Taka</option>
                            <option value="USD">USD - US Dollar</option>
                            <option value="EUR">EUR - Euro</option>
                        </select>
                    </div>
                    <button class="conv-swap" id="swapBtn"><i class="fa-solid fa-arrows-rotate"></i></button>
                    <div class="conv-field">
                        <label>Target Settlement</label>
                        <select id="toCurrency">
                            <option value="INR">INR - Indian Rupee</option>
                        </select>
                    </div>
                </div>
                
                <div class="conv-result">
                    <p>Estimated Total Payable Value</p>
                    <div class="amount" id="resultDisplay">₹71.20</div>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== SERVICES & SMART UPI-MOBILE DEPOSIT GATEWAYS ===== -->
    <section class="services" id="services">
        <div class="container">
            <h2 class="section-title">Professional Exchange Options</h2>
            <p class="section-subtitle">We seamlessly execute cross-border settlements with flexible local mobile channels.</p>
            <div class="services-grid">
                <!-- Service Card 1 -->
                <div class="service-card">
                    <i class="fa-solid fa-building-columns"></i>
                    <h4>UPI & Indian Bank Rupee</h4>
                    <p>আমরা অতি দ্রুততার সাথে UPI এবং যেকোনো ভারতীয় ব্যাংক অ্যাকাউন্টের মাধ্যমে Rupee গ্রহণ বা প্রদান করে থাকি।</p>
                    <div class="gateway-badges">
                        <span class="g-badge inr">UPI Pay</span>
                        <span class="g-badge inr">IMPS / NEFT</span>
                        <span class="g-badge inr">Bank Transfer</span>
                    </div>
                </div>
                <!-- Service Card 2 -->
                <div class="service-card">
                    <i class="fa-solid fa-mobile-screen-button"></i>
                    <h4>Bangladeshi Mobile Wallet</h4>
                    <p>বিকাশ, নগদ, রকেটের মাধ্যমে সরাসরি ইনস্ট্যান্ট টাকা পাঠানো এবং ব্যাংক ট্রান্সফার পেমেন্ট সেটেলমেন্টের সুব্যবস্থা রয়েছে।</p>
                    <div class="gateway-badges">
                        <span class="g-badge bdt">বিকাশ (Bkash)</span>
                        <span class="g-badge bdt">নগদ (Nagad)</span>
                        <span class="g-badge bdt">রকেট (Rocket)</span>
                    </div>
                </div>
                <!-- Service Card 3 -->
                <div class="service-card">
                    <i class="fa-solid fa-shield-halved"></i>
                    <h4>Secure Counter Handover</h4>
                    <p>তাত্ক্ষণিক ডকুমেন্টেশন ও শতভাগ বিশ্বস্ত সেবার সাথে কারেন্সি ক্যাশ লেনদেন সম্পন্ন করুন সরাসরি কাউন্টার ডেস্কে।</p>
                    <div class="gateway-badges">
                        <span class="g-badge">Spot Cash</span>
                        <span class="g-badge">Secure Desk</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== CONTACT & LIVE DIRECTIONS MAP ===== -->
    <section class="contact-section" id="contact">
        <div class="container">
            <h2 class="section-title">Official Branch Helpdesk</h2>
            <p class="section-subtitle">Connect with our executives or track our workspace coordinates over live maps.</p>
            <div class="contact-grid">
                <div class="contact-card">
                    <i class="fa-solid fa-map-location-dot"></i>
                    <h4>Branch Location</h4>
                    <p>Inaya EnterprisesCounter</p>
                    <a href="https://maps.app.goo.gl/ZWmjaEbreWts4JwF7?g_st=ac" target="_blank" class="btn btn-map"><i class="fa-solid fa-location-arrow"></i> View On Google Maps</a>
                </div>
                <div class="contact-card">
                    <i class="fa-solid fa-headset"></i>
                    <h4>Contact Support</h4>
                    <p style="margin-bottom: 4px;"><a href="tel:+918942852223">+91 89428 52223</a></p>
                    <p><a href="tel:+917364088048">+91 73640 88048</a></p>
                </div>
                <div class="contact-card">
                    <i class="fa-brands fa-whatsapp-square" style="color: #25d366;"></i>
                    <h4>WhatsApp Support</h4>
                    <p>Message for Booking</p>
                    <p style="margin-top: 8px;"><a href="https://wa.me/918942852223" style="color:#25d366; font-size:1.1rem;" target="_blank">+91 89428 52223</a></p>
                </div>
            </div>
        </div>
    </section>

    <!-- ===== FOOTER ===== -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <h3>INAYA ENTERPRISES</h3>
                    <p>Premier currency brokerage counter in India. Delivering professional transparency with instant execution on global remittance values.</p>
                </div>
                <div class="footer-links">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="#home">Home Base</a></li>
                        <li><a href="#rates">Live Rates</a></li>
                        <li><a href="#converter">Smart Converter</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Operations</h4>
                    <ul>
                        <li><a href="#">Privacy Protocol</a></li>
                        <li><a href="https://maps.app.goo.gl/ZWmjaEbreWts4JwF7?g_st=ac" target="_blank">Track Counter</a></li>
                        <li><a href="#">Compliance</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; 2026 Inaya Enterprises. All Rights Reserved. Proprietor Desk Operations.
            </div>
        </div>
    </footer>

    <!-- ===== JAVASCRIPT ENGINE ===== -->
    <script>
        // Responsive Mobile Menu
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        hamburger.addEventListener('click', () => { navLinks.classList.toggle('active'); });
        document.querySelectorAll('.nav-links a').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('active')));

        // Smooth Side Swipe Carousel Logic
        const track = document.getElementById('carouselTrack');
        let index = 0;
        setInterval(() => {
            index = (index + 1) % 3;
            track.style.transform = `translateX(-${index * 33.333}%)`;
        }, 4000);

        // Smart Calculator Engine
        const amountInput = document.getElementById('amountInput');
        const fromCurrency = document.getElementById('fromCurrency');
        const resultDisplay = document.getElementById('resultDisplay');

        const liveRates = {
            BDT: 0.712,  // 100 BDT = 71.20 INR -> 1 BDT = 0.712
            USD: 83.45,
            EUR: 89.80
        };

        function runCalculation() {
            const val = parseFloat(amountInput.value) || 0;
            const currency = fromCurrency.value;
            const targetRate = liveRates[currency] || 1;
            
            let total = val * targetRate;
            
            resultDisplay.textContent = '₹' + parseFloat(total.toFixed(2)).toLocaleString('en-IN', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }

        amountInput.addEventListener('input', runCalculation);
        fromCurrency.addEventListener('change', runCalculation);
        document.getElementById('swapBtn').addEventListener('click', (e) => { e.preventDefault(); runCalculation(); });
    </script>
</body>
</html>
         padding: 0 20px;
        }
        .section-title {
            font-size: 2.2rem;
            font-weight: 800;
            text-align: center;
            margin-bottom: 10px;
            color: #1a1a2e;
        }
        .section-subtitle {
            text-align: center;
            color: #6b7280;
            margin-bottom: 48px;
            font-size: 1.1rem;
        }
        .btn {
            display: inline-block;
            padding: 14px 36px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
        }
        .btn-primary {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            color: #fff;
        }
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(37,99,235,0.35);
        }
        .btn-outline {
            background: transparent;
            color: #fff;
            border: 2px solid #fff;
        }
        .btn-outline:hover {
            background: #fff;
            color: #1a1a2e;
        }

        /* ===== NAVBAR ===== */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(0,0,0,0.05);
            transition: all 0.3s;
        }
        nav .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 20px;
        }
        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.3rem;
            font-weight: 800;
            color: #2563eb;
        }
        .logo i {
            font-size: 1.6rem;
        }
        .nav-links {
            display: flex;
            gap: 32px;
            list-style: none;
            align-items: center;
        }
        .nav-links a {
            font-weight: 500;
            color: #374151;
            transition: color 0.2s;
            font-size: 0.95rem;
        }
        .nav-links a:hover { color: #2563eb; }
        .nav-links .btn-primary {
            padding: 10px 24px;
            font-size: 0.9rem;
        }
        .hamburger {
            display: none;
            font-size: 1.6rem;
            cursor: pointer;
            color: #1a1a2e;
        }

        /* ===== HERO ===== */
        .hero {
            margin-top: 70px;
            background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #1e40af 100%);
            color: #fff;
            padding: 100px 0 80px;
            position: relative;
            overflow: hidden;
        }
        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle at 30% 50%, rgba(37,99,235,0.08) 0%, transparent 60%);
            animation: float 20s infinite linear;
        }
        @keyframes float {
            0% { transform: translate(0,0); }
            50% { transform: translate(30px,-30px); }
            100% { transform: translate(0,0); }
        }
        .hero .container {
            position: relative;
            z-index: 1;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
        }
        .hero h1 {
            font-size: 3.2rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 20px;
        }
        .hero h1 span {
            color: #60a5fa;
        }
        .hero p {
            font-size: 1.15rem;
            color: #cbd5e1;
            margin-bottom: 32px;
            max-width: 500px;
        }
        .hero-btns {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
        }

        /* Hero Rate Cards */
        .hero-rates {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .rate-card {
            background: rgba(255,255,255,0.08);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.15);
            border-radius: 24px;
            padding: 28px;
            text-align: center;
        }
        .rate-card h3 {
            font-size: 0.9rem;
            font-weight: 600;
            color: #93c5fd;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 10px;
        }
        .rate-display {
            font-size: 2.5rem;
            font-weight: 800;
            color: #60a5fa;
            margin-bottom: 4px;
        }
        .rate-display small {
            font-size: 1.3rem;
            color: #93c5fd;
        }
        .rate-change {
            color: #86efac;
            font-size: 0.95rem;
            margin-bottom: 16px;
        }
        .rate-change i { margin-right: 4px; }

        /* ===== LIVE RATES TABLE ===== */
        .rates-section {
            padding: 80px 0;
            background: #fff;
        }
        .rates-table-wrap {
            background: #f8fafc;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.04);
            border: 1px solid #e2e8f0;
        }
        .rates-table {
            width: 100%;
            border-collapse: collapse;
        }
        .rates-table thead {
            background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
            color: #fff;
        }
        .rates-table th {
            padding: 18px 24px;
            text-align: left;
            font-weight: 600;
            font-size: 0.9rem;
            letter-spacing: 0.5px;
        }
        .rates-table td {
            padding: 16px 24px;
            border-bottom: 1px solid #e2e8f0;
            font-weight: 500;
        }
        .rates-table tbody tr:hover {
            background: #f1f5f9;
        }
        .rate-up { color: #16a34a; }
        .rate-down { color: #dc2626; }
        .badge {
            display: inline-block;
            padding: 5px 14px;
            border-radius: 50px;
            font-size: 0.75rem;
            font-weight: 600;
            margin-right: 6px;
        }
        .badge-buy { background: #dcfce7; color: #166534; }
        .badge-sell { background: #fee2e2; color: #991b1b; }
        .update-note {
            text-align: center;
            padding: 14px 24px;
            font-size: 0.85rem;
            color: #6b7280;
            background: #fff;
            border-top: 1px solid #e2e8f0;
        }
        .update-note i { margin-right: 6px; color: #2563eb; }

        /* ===== CONVERTER ===== */
        .converter-section {
            padding: 80px 0;
            background: #f5f7fa;
        }
        .converter-wrap {
            max-width: 600px;
            margin: 0 auto;
            background: #fff;
            padding: 40px;
            border-radius: 24px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.06);
            border: 1px solid #e2e8f0;
        }
        .converter-wrap h3 {
            text-align: center;
            font-size: 1.4rem;
            margin-bottom: 32px;
            color: #1a1a2e;
        }
        .converter-row {
            display: flex;
            gap: 16px;
            align-items: flex-end;
            margin-bottom: 24px;
        }
        .converter-input {
            flex: 1;
        }
        .converter-input label {
            display: block;
            font-weight: 600;
            margin-bottom: 8px;
            color: #374151;
            font-size: 0.9rem;
        }
        .converter-input input,
        .converter-input select {
            width: 100%;
            padding: 14px 16px;
            border: 1px solid #d1d5db;
            border-radius: 12px;
            font-family: inherit;
            font-size: 1rem;
            transition: all 0.2s;
            background: #f9fafb;
        }
        .converter-swap {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            color: #fff;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            font-size: 1.2rem;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .converter-swap:hover {
            transform: rotate(180deg);
            box-shadow: 0 4px 12px rgba(37,99,235,0.3);
        }
        .converter-result {
            background: #eff6ff;
            padding: 20px;
            border-radius: 12px;
            text-align: center;
            border: 1px solid #bfdbfe;
        }
        .converter-result p {
            font-size: 0.9rem;
            color: #6b7280;
            margin-bottom: 8px;
        }
        .converter-result .amount {
            font-size: 1.8rem;
            font-weight: 800;
            color: #1e40af;
        }

        /* ===== SERVICES ===== */
        .services {
            padding: 80px 0;
            background: #fff;
        }
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 28px;
        }
        .service-card {
            background: linear-gradient(135deg, #f0f9ff 0%, #f8fafc 100%);
            padding: 32px 24px;
            border-radius: 20px;
            text-align: center;
            transition: all 0.3s;
            border: 1px solid #e0e7ff;
        }
        .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 16px 48px rgba(37,99,235,0.1);
            border-color: #2563eb;
        }
        .service-card i {
            font-size: 2.8rem;
            color: #2563eb;
            margin-bottom: 16px;
        }
        .service-card h4 {
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: #1a1a2e;
        }
        .service-card p {
            color: #6b7280;
            font-size: 0.95rem;
        }

        /* ===== FOOTER ===== */
        footer {
            background: #111827;
            color: #f3f4f6;
            padding: 60px 0 30px;
        }
        .footer-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 40px;
            margin-bottom: 40px;
        }
        .footer-brand h3 {
            font-size: 1.5rem;
            color: #fff;
            margin-bottom: 16px;
        }
        .footer-brand p {
            color: #9ca3af;
            max-width: 320px;
            margin-bottom: 20px;
                }
        .footer-links h4 {
            color: #fff;
            margin-bottom: 16px;
            font-size: 1.1rem;
        }
        .footer-links ul {
            list-style: none;
        }
        .footer-links ul li {
            margin-bottom: 10px;
        }
        .footer-links ul li a {
            color: #9ca3af;
            transition: color 0.2s;
        }
        .footer-links ul li a:hover {
            color: #60a5fa;
        }
        .footer-bottom {
            border-top: 1px solid #374151;
            padding-top: 30px;
            text-align: center;
            color: #9ca3af;
            font-size: 0.9rem;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
            .hero .container { grid-template-columns: 1fr; gap: 40px; text-align: center; }
            .hero p { margin: 0 auto 32px; }
            .hero-btns { justify-content: center; }
            .hamburger { display: block; }
            .nav-links {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: #fff;
                padding: 20px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            }
            .nav-links.active { display: flex; }
            .converter-row { flex-direction: column; align-items: center; }
            .converter-swap { transform: rotate(90deg); margin: 10px 0; }
            .converter-swap:hover { transform: rotate(270deg); }
            .footer-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>

    <nav>
        <div class="container">
            <div class="logo">
                <i class="fa-solid fa-money-bill-transfer"></i>
                <span>INAYA ENTERPRISES</span>
            </div>
            <ul class="nav-links" id="navLinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#rates">Live Rates</a></li>
                <li><a href="#converter">Converter</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact" class="btn btn-primary">Contact Us</a></li>
            </ul>
            <div class="hamburger" id="hamburger">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
    </nav>

    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content">
                <h1>Best Currency Rates For <span>Your Business</span></h1>
                <p>Safe, fast and reliable foreign currency exchange services at INAYA ENTERPRISES. We deal with USD, INR, BDT, and EURO with minimum conversion fees.</p>
                <div class="hero-btns">
                    <a href="#converter" class="btn btn-primary">Convert Now</a>
                    <a href="#rates" class="btn btn-outline">View Rates</a>
                </div>
            </div>
            <div class="hero-rates">
                <div class="rate-card">
                    <h3>USD to INR</h3>
                    <div class="rate-display">83.50 <small>INR</small></div>
                    <div class="rate-change"><i class="fa-solid fa-caret-up"></i> +0.15%</div>
                </div>
                <div class="rate-card">
                    <h3>EURO to INR</h3>
                    <div class="rate-display">89.40 <small>INR</small></div>
                    <div class="rate-change"><i class="fa-solid fa-caret-up"></i> +0.08%</div>
                </div>
            </div>
        </div>
    </section>

    <section class="rates-section" id="rates">
        <div class="container">
            <h2 class="section-title">Live Exchange Rates (Base: INR)</h2>
            <p class="section-subtitle">Real-time buy and sell rates against Indian Rupee (INR)</p>
            <div class="rates-table-wrap">
                <table class="rates-table">
                    <thead>
                        <tr>
                            <th>Currency</th>
                            <th>Currency Code</th>
                            <th>Buying Rate</th>
                            <th>Selling Rate</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>US Dollar</td>
                            <td>USD</td>
                            <td><span class="badge badge-buy">Buy</span> 83.10 INR</td>
                            <td><span class="badge badge-sell">Sell</span> 83.90 INR</td>
                            <td class="rate-up"><i class="fa-solid fa-arrow-trend-up"></i> High</td>
                        </tr>
                        <tr>
                            <td>Bangladeshi Taka</td>
                            <td>BDT</td>
                            <td><span class="badge badge-buy">Buy</span> 0.70 INR</td>
                            <td><span class="badge badge-sell">Sell</span> 0.73 INR</td>
                            <td class="rate-up"><i class="fa-solid fa-arrow-trend-up"></i> Stable</td>
                        </tr>
                        <tr>
                            <td>Euro</td>
                            <td>EUR</td>
                            <td><span class="badge badge-buy">Buy</span> 89.00 INR</td>
                            <td><span class="badge badge-sell">Sell</span> 89.80 INR</td>
                            <td class="rate-down"><i class="fa-solid fa-arrow-trend-down"></i> Low</td>
                        </tr>
                    </tbody>
                </table>
                <div class="update-note">
                    <i class="fa-solid fa-clock"></i> Rates are updated regularly based on market conditions.
                </div>
            </div>
        </div>
    </section>

    <section class="converter-section" id="converter">
        <div class="container">
            <h2 class="section-title">Instant Currency Converter</h2>
            <p class="section-subtitle">Calculate your conversion amount easily</p>
            <div class="converter-wrap">
                <h3>Enter Amount & Choose Currencies</h3>
                <div class="converter-row">
                    <div class="converter-input">
                        <label for="amount">Amount</label>
                        <input type="number" id="amount" value="100" placeholder="Enter amount"/>
                    </div>
                    <div class="converter-input">
                        <label for="fromCurrency">From</label>
                        <select id="fromCurrency">
                            <option value="INR" selected>INR - Indian Rupee</option>
                            <option value="USD">USD - US Dollar</option>
                            <option value="BDT">BDT - Bangladeshi Taka</option>
                            <option value="EUR">EUR - Euro</option>
                        </select>
                    </div>
                    <button class="converter-swap" id="swapBtn">
                        <i class="fa-solid fa-arrows-rotate"></i>
                    </button>
                    <div class="converter-input">
                        <label for="toCurrency">To</label>
                        <select id="toCurrency">
                            <option value="INR">INR - Indian Rupee</option>
                            <option value="USD">USD - US Dollar</option>
                            <option value="BDT" selected>BDT - Bangladeshi Taka</option>
                            <option value="EUR">EUR - Euro</option>
                        </select>
                    </div>
                </div>
                <div class="converter-result">
                    <p>Converted Value</p>
                    <div class="amount" id="resultDisplay">142.00 BDT</div>
                </div>
            </div>
        </div>
    </section>

    <section class="services" id="services">
        <div class="container">
            <h2 class="section-title">Our Premier Services</h2>
            <p class="section-subtitle">Why choose INAYA ENTERPRISES for your money exchange needs</p>
            <div class="services-grid">
                <div class="service-card">
                    <i class="fa-solid fa-bolt"></i>
                    <h4>Instant Exchange</h4>
                    <p>No long queues. Get your foreign currency exchanged within minutes with minimal paper works.</p>
                </div>
                <div class="service-card">
                    <i class="fa-solid fa-shield-halved"></i>
                    <h4>Secure Transactions</h4>
                    <p>Your money and data safety is our highest priority. Fully legal and certified transactions.</p>
                </div>
                <div class="service-card">
                    <i class="fa-solid fa-percent"></i>
                    <h4>Best Market Rates</h4>
                    <p>We guarantee competitive and highly attractive conversion rates compared to standard banks.</p>
                </div>
            </div>
        </div>
    </section>

    <footer id="contact">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <h3>M/S INAYA ENTERPRISES</h3>
                    <p>Your trusted partner for currency exchange and secure remittance solutions.</p>
                    <p><i class="fa-solid fa-envelope"></i> info@inayaenterprise.com</p>
                </div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#rates">Live Rates</a></li>
                        <li><a href="#converter">Converter</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#contact">Contact Support</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; 2026 M/S INAYA ENTERPRISES. All Rights Reserved.
            </div>
        </div>
    </footer>

    <script>
        // Mobile Navigation Toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Conversion Rates Logic (Base Rates Against 1 INR)
        const exchangeRates = {
            INR: 1,       // Base Currency
            USD: 0.012,   // 1 INR = 0.012 USD
            BDT: 1.42,    // 1 INR = 1.42 BDT
            EUR: 0.011    // 1 INR = 0.011 EUR
        };

        const amountInput = document.getElementById('amount');
        const fromCurrency = document.getElementById('fromCurrency');
        const toCurrency = document.getElementById('toCurrency');
        const resultDisplay = document.getElementById('resultDisplay');
        const swapBtn = document.getElementById('swapBtn');

        function calculateConversion() {
            const amount = parseFloat(amountInput.value);
            if (isNaN(amount) || amount <= 0) {
                resultDisplay.innerText = "0.00 " + toCurrency.value;
                return;
            }

            // Convert input to Base currency (INR), then convert to target currency
            const amountInINR = amount / exchangeRates[fromCurrency.value];
            const finalResult = amountInINR * exchangeRates[toCurrency.value];

            resultDisplay.innerText = `${finalResult.toFixed(2)} ${toCurrency.value}`;
        }

        // Swap Currencies Event
        swapBtn.addEventListener('click', () => {
            const temp = fromCurrency.value;
            fromCurrency.value = toCurrency.value;
            toCurrency.value = temp;
            calculateConversion();
        });

        // Real-time Event Listeners
        amountInput.addEventListener('input', calculateConversion);
        fromCurrency.addEventListener('change', calculateConversion);
        toCurrency.addEventListener('change', calculateConversion);
    </script>
</body>
</html>
            line-height: 1.6;
        }
        a { text-decoration: none; color: inherit; }
        img { max-width: 100%; display: block; }

        /* ===== UTILITIES ===== */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        .section-title {
            font-size: 2.2rem;
            font-weight: 800;
            text-align: center;
            margin-bottom: 10px;
            color: #1a1a2e;
        }
        .section-subtitle {
            text-align: center;
            color: #6b7280;
            margin-bottom: 48px;
            font-size: 1.1rem;
        }
        .btn {
            display: inline-block;
            padding: 14px 36px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
        }
        .btn-primary {
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            color: #fff;
        }
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(37,99,235,0.35);
        }
        .btn-outline {
            background: transparent;
            color: #fff;
            border: 2px solid #fff;
        }
        .btn-outline:hover {
            background: #fff;
            color: #1a1a2e;
        }

        /* ===== NAVBAR ===== */
        nav {
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(255,255,255,0.95);
            backdrop-filter: blur(10px);
            border-bottom: 1px solid rgba(0,0,0,0.05);
            transition: all 0.3s;
        }
        nav .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 14px 20px;
        }
        .logo {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1.3rem;
            font-weight: 800;
            color: #2563eb;
        }
        .logo i {
            font-size: 1.6rem;
        }
        .nav-links {
            display: flex;
            gap: 32px;
            list-style: none;
            align-items: center;
        }
        .nav-links a {
            font-weight: 500;
            color: #374151;
            transition: color 0.2s;
            font-size: 0.95rem;
        }
        .nav-links a:hover { color: #2563eb; }
        .nav-links .btn-primary {
            padding: 10px 24px;
            font-size: 0.9rem;
        }
        .hamburger {
            display: none;
            font-size: 1.6rem;
            cursor: pointer;
            color: #1a1a2e;
        }

        /* ===== HERO ===== */
        .hero {
            margin-top: 70px;
            background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 50%, #1e40af 100%);
            color: #fff;
            padding: 100px 0 80px;
            position: relative;
            overflow: hidden;
        }
        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle at 30% 50%, rgba(37,99,235,0.08) 0%, transparent 60%);
            animation: float 20s infinite linear;
        }
        @keyframes float {
            0% { transform: translate(0,0); }
            50% { transform: translate(30px,-30px); }
            100% { transform: translate(0,0); }
        }
        .hero .container {
            position: relative;
            z-index: 1;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
        }
        .hero h1 {
            font-size: 3.2rem;
            font-weight: 800;
            line-height: 1.2;
            margin-bottom: 20px;
        }
        .hero h1 span {
            color: #60a5fa;
        }
        .hero p {
            font-size: 1.15rem;
            color: #cbd5e1;
            margin-bottom: 32px;
            max-width: 500px;
        }
        .hero-btns {
            display: flex;
            gap: 16px;
            flex-wrap: wrap;
        }

        /* Hero Rate Cards */
        .hero-rates {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }
        .rate-card {
            background: rgba(255,255,255,0.08);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255,255,255,0.15);
            border-radius: 24px;
            padding: 28px;
            text-align: center;
        }
        .rate-card h3 {
            font-size: 0.9rem;
            font-weight: 600;
            color: #93c5fd;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 10px;
        }
        .rate-display {
            font-size: 2.5rem;
            font-weight: 800;
            color: #60a5fa;
            margin-bottom: 4px;
        }
        .rate-display small {
            font-size: 1.3rem;
            color: #93c5fd;
        }
        .rate-change {
            color: #86efac;
            font-size: 0.95rem;
            margin-bottom: 16px;
        }
        .rate-change i { margin-right: 4px; }

        /* ===== LIVE RATES TABLE ===== */
        .rates-section {
            padding: 80px 0;
            background: #fff;
        }
        .rates-table-wrap {
            background: #f8fafc;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0,0,0,0.04);
            border: 1px solid #e2e8f0;
        }
        .rates-table {
            width: 100%;
            border-collapse: collapse;
        }
        .rates-table thead {
            background: linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%);
            color: #fff;
        }
        .rates-table th {
            padding: 18px 24px;
            text-align: left;
            font-weight: 600;
            font-size: 0.9rem;
            letter-spacing: 0.5px;
        }
        .rates-table td {
            padding: 16px 24px;
            border-bottom: 1px solid #e2e8f0;
            font-weight: 500;
        }
        .rates-table tbody tr:hover {
            background: #f1f5f9;
        }
        .rate-up { color: #16a34a; }
        .rate-down { color: #dc2626; }
        .badge {
            display: inline-block;
            padding: 5px 14px;
            border-radius: 50px;
            font-size: 0.75rem;
            font-weight: 600;
            margin-right: 6px;
        }
        .badge-buy { background: #dcfce7; color: #166534; }
        .badge-sell { background: #fee2e2; color: #991b1b; }
        .update-note {
            text-align: center;
            padding: 14px 24px;
            font-size: 0.85rem;
            color: #6b7280;
            background: #fff;
            border-top: 1px solid #e2e8f0;
        }
        .update-note i { margin-right: 6px; color: #2563eb; }

        /* ===== CONVERTER ===== */
        .converter-section {
            padding: 80px 0;
            background: #f5f7fa;
        }
        .converter-wrap {
            max-width: 600px;
            margin: 0 auto;
            background: #fff;
            padding: 40px;
            border-radius: 24px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.06);
            border: 1px solid #e2e8f0;
        }
        .converter-wrap h3 {
            text-align: center;
            font-size: 1.4rem;
            margin-bottom: 32px;
            color: #1a1a2e;
        }
        .converter-row {
            display: flex;
            gap: 16px;
            align-items: flex-end;
            margin-bottom: 24px;
        }
        .converter-input {
            flex: 1;
        }
        .converter-input label {
            display: block;
            font-weight: 600;
            margin-bottom: 8px;
            color: #374151;
            font-size: 0.9rem;
        }
        .converter-input input,
        .converter-input select {
            width: 100%;
            padding: 14px 16px;
            border: 1px solid #d1d5db;
            border-radius: 12px;
            font-family: inherit;
            font-size: 1rem;
            transition: all 0.2s;
            background: #f9fafb;
        }
        .converter-swap {
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
            color: #fff;
            border: none;
            border-radius: 12px;
            cursor: pointer;
            font-size: 1.2rem;
            transition: all 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .converter-swap:hover {
            transform: rotate(180deg);
            box-shadow: 0 4px 12px rgba(37,99,235,0.3);
        }
        .converter-result {
            background: #eff6ff;
            padding: 20px;
            border-radius: 12px;
            text-align: center;
            border: 1px solid #bfdbfe;
        }
        .converter-result p {
            font-size: 0.9rem;
            color: #6b7280;
            margin-bottom: 8px;
        }
        .converter-result .amount {
            font-size: 1.8rem;
            font-weight: 800;
            color: #1e40af;
        }

        /* ===== SERVICES ===== */
        .services {
            padding: 80px 0;
            background: #fff;
        }
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
            gap: 28px;
        }
        .service-card {
            background: linear-gradient(135deg, #f0f9ff 0%, #f8fafc 100%);
            padding: 32px 24px;
            border-radius: 20px;
            text-align: center;
            transition: all 0.3s;
            border: 1px solid #e0e7ff;
        }
        .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 16px 48px rgba(37,99,235,0.1);
            border-color: #2563eb;
        }
        .service-card i {
            font-size: 2.8rem;
            color: #2563eb;
            margin-bottom: 16px;
        }
        .service-card h4 {
            font-size: 1.2rem;
            font-weight: 700;
            margin-bottom: 10px;
            color: #1a1a2e;
        }
        .service-card p {
            color: #6b7280;
            font-size: 0.95rem;
        }

        /* ===== FOOTER ===== */
        footer {
            background: #111827;
            color: #f3f4f6;
            padding: 60px 0 30px;
        }
        .footer-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            gap: 40px;
            margin-bottom: 40px;
        }
        .footer-brand h3 {
            font-size: 1.5rem;
            color: #fff;
            margin-bottom: 16px;
        }
        .footer-brand p {
            color: #9ca3af;
            max-width: 320px;
            margin-bottom: 20px;
        }
        .footer-links h4 {
            color: #fff;
            margin-bottom: 16px;
            font-size: 1.1rem;
        }
        .footer-links ul {
            list-style: none;
        }
        .footer-links ul li {
            margin-bottom: 10px;
        }
        .footer-links ul li a {
            color: #9ca3af;
            transition: color 0.2s;
        }
        .footer-links ul li a:hover {
            color: #60a5fa;
        }
        .footer-bottom {
            border-top: 1px solid #374151;
            padding-top: 30px;
            text-align: center;
            color: #9ca3af;
            font-size: 0.9rem;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
            .hero .container { grid-template-columns: 1fr; gap: 40px; text-align: center; }
            .hero p { margin: 0 auto 32px; }
            .hero-btns { justify-content: center; }
            .hamburger { display: block; }
            .nav-links {
                display: none;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: #fff;
                padding: 20px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            }
            .nav-links.active { display: flex; }
            .converter-row { flex-direction: column; align-items: center; }
            .converter-swap { transform: rotate(90deg); margin: 10px 0; }
            .converter-swap:hover { transform: rotate(270deg); }
            .footer-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>

    <nav>
        <div class="container">
            <div class="logo">
                <i class="fa-solid fa-money-bill-transfer"></i>
                <span>INAYA ENTERPRISES</span>
            </div>
            <ul class="nav-links" id="navLinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#rates">Live Rates</a></li>
                <li><a href="#converter">Converter</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact" class="btn btn-primary">Contact Us</a></li>
            </ul>
            <div class="hamburger" id="hamburger">
                <i class="fa-solid fa-bars"></i>
            </div>
        </div>
    </nav>

    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content">
                <h1>Best Currency Rates For <span>Your Business</span></h1>
                <p>Safe, fast and reliable foreign currency exchange services at INAYA ENTERPRISES. We deal with USD, INR, BDT, and more with minimum conversion fees.</p>
                <div class="hero-btns">
                    <a href="#converter" class="btn btn-primary">Convert Now</a>
                    <a href="#rates" class="btn btn-outline">View Rates</a>
                </div>
            </div>
            <div class="hero-rates">
                <div class="rate-card">
                    <h3>USD to BDT</h3>
                    <div class="rate-display">118.50 <small>BDT</small></div>
                    <div class="rate-change"><i class="fa-solid fa-caret-up"></i> +0.25%</div>
                </div>
                <div class="rate-card">
                    <h3>INR to BDT</h3>
                    <div class="rate-display">1.42 <small>BDT</small></div>
                    <div class="rate-change"><i class="fa-solid fa-caret-up"></i> +0.12%</div>
                </div>
            </div>
        </div>
    </section>

    <section class="rates-section" id="rates">
        <div class="container">
            <h2 class="section-title">Live Exchange Rates</h2>
            <p class="section-subtitle">Real-time buy and sell rates for major currencies</p>
            <div class="rates-table-wrap">
                <table class="rates-table">
                    <thead>
                        <tr>
                            <th>Currency</th>
                            <th>Currency Code</th>
                            <th>Buying Rate</th>
                            <th>Selling Rate</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>US Dollar</td>
                            <td>USD</td>
                            <td><span class="badge badge-buy">Buy</span> 117.80 BDT</td>
                            <td><span class="badge badge-sell">Sell</span> 119.20 BDT</td>
                            <td class="rate-up"><i class="fa-solid fa-arrow-trend-up"></i> High</td>
                        </tr>
                        <tr>
                            <td>Indian Rupee</td>
                            <td>INR</td>
                            <td><span class="badge badge-buy">Buy</span> 1.40 BDT</td>
                            <td><span class="badge badge-sell">Sell</span> 1.45 BDT</td>
                            <td class="rate-up"><i class="fa-solid fa-arrow-trend-up"></i> Stable</td>
                        </tr>
                        <tr>
                            <td>Euro</td>
                            <td>EUR</td>
                            <td><span class="badge badge-buy">Buy</span> 126.50 BDT</td>
                            <td><span class="badge badge-sell">Sell</span> 128.90 BDT</td>
                            <td class="rate-down"><i class="fa-solid fa-arrow-trend-down"></i> Low</td>
                        </tr>
                    </tbody>
                </table>
                <div class="update-note">
                    <i class="fa-solid fa-clock"></i> Rates are updated regularly based on market conditions.
                </div>
            </div>
        </div>
    </section>

    <section class="converter-section" id="converter">
        <div class="container">
            <h2 class="section-title">Instant Currency Converter</h2>
            <p class="section-subtitle">Calculate your conversion amount easily</p>
            <div class="converter-wrap">
                <h3>Enter Amount & Choose Currencies</h3>
                <div class="converter-row">
                    <div class="converter-input">
                        <label for="amount">Amount</label>
                        <input type="number" id="amount" value="100" placeholder="Enter amount"/>
                    </div>
                    <div class="converter-input">
                        <label for="fromCurrency">From</label>
                        <select id="fromCurrency">
                            <option value="USD">USD - US Dollar</option>
                            <option value="INR" selected>INR - Indian Rupee</option>
                            <option value="BDT">BDT - Bangladeshi Taka</option>
                        </select>
                    </div>
                    <button class="converter-swap" id="swapBtn">
                        <i class="fa-solid fa-arrows-rotate"></i>
                    </button>
                    <div class="converter-input">
                        <label for="toCurrency">To</label>
                        <select id="toCurrency">
                            <option value="USD">USD - US Dollar</option>
                            <option value="INR">INR - Indian Rupee</option>
                            <option value="BDT" selected>BDT - Bangladeshi Taka</option>
                        </select>
                    </div>
                </div>
                <div class="converter-result">
                    <p>Converted Value</p>
                    <div class="amount" id="resultDisplay">142.00 BDT</div>
                </div>
            </div>
        </div>
    </section>

    <section class="services" id="services">
        <div class="container">
            <h2 class="section-title">Our Premier Services</h2>
            <p class="section-subtitle">Why choose INAYA ENTERPRISES for your money exchange needs</p>
            <div class="services-grid">
                <div class="service-card">
                    <i class="fa-solid fa-bolt"></i>
                    <h4>Instant Exchange</h4>
                    <p>No long queues. Get your foreign currency exchanged within minutes with minimal paper works.</p>
                </div>
                <div class="service-card">
                    <i class="fa-solid fa-shield-halved"></i>
                    <h4>Secure Transactions</h4>
                    <p>Your money and data safety is our highest priority. Fully legal and certified transactions.</p>
                </div>
                <div class="service-card">
                    <i class="fa-solid fa-percent"></i>
                    <h4>Best Market Rates</h4>
                    <p>We guarantee competitive and highly attractive conversion rates compared to standard banks.</p>
                </div>
            </div>
        </div>
    </section>

    <footer id="contact">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <h3>M/S INAYA ENTERPRISES</h3>
                    <p>Your trusted partner for currency exchange and secure remittance solutions.</p>
                    <p><i class="fa-solid fa-envelope"></i> info@inayaenterprise.com</p>
                </div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#rates">Live Rates</a></li>
                        <li><a href="#converter">Converter</a></li>
                    </ul>
                </div>
                <div class="footer-links">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#contact">Contact Support</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                &copy; 2026 M/S INAYA ENTERPRISES. All Rights Reserved.
            </div>
        </div>
    </footer>

    <script>
        // Mobile Navigation Toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Conversion Rates Logic (Base Rates Against 1 BDT dynamically structured)
        const exchangeRates = {
            USD: 118.50, // 1 USD = 118.50 BDT
            INR: 1.42,   // 1 INR = 1.42 BDT
            BDT: 1       // 1 BDT = 1 BDT
        };

        const amountInput = document.getElementById('amount');
        const fromCurrency = document.getElementById('fromCurrency');
        const toCurrency = document.getElementById('toCurrency');
        const resultDisplay = document.getElementById('resultDisplay');
        const swapBtn = document.getElementById('swapBtn');

        function calculateConversion() {
            const amount = parseFloat(amountInput.value);
            if (isNaN(amount) || amount <= 0) {
                resultDisplay.innerText = "0.00 " + toCurrency.value;
                return;
            }

            const fromRate = exchangeRates[fromCurrency.value];
            const toRate = exchangeRates[toCurrency.value];

            // Convert input to Base currency (BDT), then convert to target currency
            const amountInBDT = amount * fromRate;
            const finalResult = amountInBDT / toRate;

            resultDisplay.innerText = `${finalResult.toFixed(2)} ${toCurrency.value}`;
        }

        // Swap Currencies Event
        swapBtn.addEventListener('click', () => {
            const temp = fromCurrency.value;
            fromCurrency.value = toCurrency.value;
            toCurrency.value = temp;
            calculateConversion();
        });

        // Real-time Event Listeners
        amountInput.addEventListener('input', calculateConversion);
        fromCurrency.addEventListener('change', calculateConversion);
        toCurrency.addEventListener('change', calculateConversion);
    </script>
</body>
</html>

