import React from "react";
import { Link } from "react-router-dom";
import DynamicPageHeader from "../components/common/DynamicPageHeader";
import { ArrowUpRight } from "lucide-react";

const GlobalAccessSolutions = () => {
  return (
    <>
      <DynamicPageHeader />
      <section className="px-4 md:px-10 py-16 bg-white text-gray-800 leading-relaxed">
        {/* Header */}
        <div className="mb-12">
          <h1
            style={{ fontFamily: "Marcellus" }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            GLOBAL ACCESS SOLUTIONS
          </h1>
          <p className="text-gray-600">
            At Global Citizenship and Migration (GCM Partners), we believe
            global opportunities should be accessible, affordable, and secure.
            Whether you are planning for your family’s future, reclaiming your
            heritage, building a business abroad, or seeking a life of freedom
            and mobility, our solutions are designed to meet you where you are.
          </p>
          <p className="text-gray-600 mt-4">
            Our services are tailored to your specific goals, ensuring a smooth,
            transparent, and affordable process. From simple family-based
            pathways to premium investment programmes, we help you find the
            route that matches your aspirations and resources.
          </p>
          <p className="text-gray-600 mt-4">
            Working with a team of global partners, GCM simplifies the
            complexity of global migration, guiding you at every step — so you
            can move with confidence, clarity, and peace of mind.
          </p>
        </div>

        {/* HERITAGE & IDENTITY */}
        <div className="mb-16">
          <h2
            style={{ fontFamily: "Marcellus" }}
            className="text-3xl md:text-4xl font-bold mb-6 text-primary-800"
          >
            Heritage & Identity
          </h2>
          <p className="mb-4 text-gray-700">
            (Ancestry Citizenship, Birthright Citizenship, Diaspora
            Repatriation)
          </p>
          <p className="mb-8 text-gray-600">
            Designed for Africans and diasporans reclaiming heritage or
            establishing belonging through family, birth, or ancestral ties.
          </p>

          <div className="space-y-8">
            {/* RootsPass */}
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="border p-6 rounded-xl shadow-sm flex flex-col justify-center lg:order-2">
                <h3 className="font-semibold text-lg mb-2">RootsPass</h3>
                <p className="text-gray-600 mb-2">
                  Claim citizenship through parents, grandparents, or ancestral
                  lineage.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Timeline: 4–18 months depending on documentation.</li>
                  <li>Cost: Legal/documentation fees, ~€30,000 plus</li>
                  <li>
                    Residency Requirement: Often none; depends on country.
                  </li>
                  <li>
                    Notable Countries: Ireland, Slovenia, Italy, Poland, Ghana,
                    Benin
                  </li>
                  <li>
                    Key Benefit: Direct citizenship with little or no residency.
                  </li>
                  <li>
                    Country Access: Full EU rights (for European ancestry) +
                    over 180 country access or ECOWAS/free movement (for African
                    ancestry).
                  </li>
                </ul>
              </div>
              {/* Image */}
              <div className="w-full">
                <img
                  src="https://img.freepik.com/premium-photo/some-black-people_1187049-281.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_hybrid&w=740&q=80"
                  alt="GCM Partners mission"
                  className="w-full rounded-xl shadow-md object-center h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Birthright Advantage */}
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="border p-6 rounded-xl shadow-sm flex flex-col justify-center">
                <h3 className="font-semibold text-lg mb-2">
                  Birthright Advantage
                </h3>
                <p className="text-gray-600 mb-2">
                  Secure citizenship for children born in jus soli (birthright)
                  countries.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Timeline: At birth.</li>
                  <li>Cost: Medical and legal costs (~$15,000 plus).</li>
                  <li>
                    Residency Requirement: None for child; sometimes parents
                    must have status.
                  </li>
                  <li>
                    Notable Countries: USA, Canada, Brazil, Argentina, Paraguay.
                  </li>
                  <li>
                    Key Benefit: Citizenship by birth for the child, with family
                    migration pathways.
                  </li>
                  <li>
                    Country Access: USA – 180+ visa-free countries, Canada –
                    185+ visa-free countries.
                  </li>
                </ul>
              </div>
              {/* Image */}
              <div className="w-full">
                <img
                  src="https://img.freepik.com/free-photo/youth-day-celebration-black-white_23-2151715254.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_hybrid&w=740&q=80"
                  alt="GCM Partners mission"
                  className="w-full rounded-xl shadow-md object-center h-[400px] object-cover"
                />
                {/* <img
                  src="https://img.freepik.com/free-photo/front-view-coronavirus-concept-africa_23-2148777498.jpg"
                  alt="GCM Partners mission"
                  className="w-full rounded-xl shadow-md min-h-[400px] object-cover"
                /> */}
              </div>
            </div>

            {/* Homecoming Passport */}
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="border p-6 rounded-xl shadow-sm flex flex-col justify-center lg:order-2">
                <h3 className="font-semibold text-lg mb-2">
                  Homecoming Passport
                </h3>
                <p className="text-gray-600 mb-2">
                  Citizenship rights for African diasporans reconnecting with
                  their roots.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    Timeline: 6–12 months (Ghana), 6–18 months (Benin, Sierra
                    Leone).
                  </li>
                  <li>Cost: Application/legal fees, ~$10,000 plus.</li>
                  <li>
                    Residency Requirement: Usually waived for ancestry link.
                  </li>
                  <li>
                    Notable Countries: Ghana (“Beyond the Return”), Benin
                    (Afro-descendant law), Sierra Leone (DNA pathway).
                  </li>
                  <li>
                    Key Benefit: Reclaim African identity, enjoy local rights
                    and business opportunities.
                  </li>
                  <li>
                    Country Access: ECOWAS free movement, plus individual
                    national benefits.
                  </li>
                </ul>
              </div>
              {/* Image */}
              <div className="w-full">
                <img
                  src="https://img.freepik.com/free-photo/side-view-male-friends-hanging-out_23-2151203992.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_hybrid&w=740&q=80"
                  alt="GCM Partners mission"
                  className="w-full rounded-xl shadow-md object-center h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* WORK & TALENT MOBILITY */}
        <div className="mb-16">
          <h2
            style={{ fontFamily: "Marcellus" }}
            className="text-3xl md:text-4xl font-bold mb-6 text-primary-800"
          >
            Work & Talent Mobility
          </h2>
          <p className="mb-4 text-gray-700">
            (Digital Nomad Visa, Global Talent Visa, Start-Up Visa)
          </p>
          <p className="mb-8 text-gray-600">
            For professionals, entrepreneurs, and digital workers leveraging
            skills or business ideas to gain residency abroad.
          </p>

          <div className="space-y-8">
            {/* Work-from-Anywhere Pass */}
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="border p-6 rounded-xl shadow-sm flex flex-col justify-center lg:order-2">
                <h3 className="font-semibold text-lg mb-2">
                  Work-from-Anywhere Pass
                </h3>
                <p className="text-gray-600 mb-2">
                  Live abroad while working remotely for foreign or local
                  employers.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Timeline: 3–6 months.</li>
                  <li>
                    Cost: Proof of income (~€2,500–€3,500/month, varies by
                    country).
                  </li>
                  <li>Residency Requirement: 6–12 months stay, renewable.</li>
                  <li>
                    Notable Countries: Portugal, Spain, Croatia, Estonia, UAE,
                    Costa Rica.
                  </li>
                  <li>
                    Key Benefit: Flexible residency with global mobility for
                    remote professionals.
                  </li>
                  <li>
                    Country Access: EU Schengen (if based in EU), or respective
                    national benefits.
                  </li>
                </ul>
              </div>
              {/* Image */}
              <div className="w-full">
                <img
                  src="https://img.freepik.com/free-photo/people-traveling-enjoying-their-vacation_23-2151383039.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_hybrid&w=740&q=80"
                  alt="GCM Partners mission"
                  className="w-full rounded-xl shadow-md object-center h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Talent Without Borders */}
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="border p-6 rounded-xl shadow-sm flex flex-col justify-center ">
                <h3 className="font-semibold text-lg mb-2">
                  Talent Without Borders
                </h3>
                <p className="text-gray-600 mb-2">
                  Fast-track migration for highly skilled professionals,
                  entrepreneurs, and academics.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Timeline: 6–12 months.</li>
                  <li>Cost: Application & legal fees (~$10,000 plus).</li>
                  <li>
                    Residency Requirement: Typically must reside in destination.
                  </li>
                  <li>
                    Notable Countries: USA (EB-1, EB-2 NIW), UK (Global Talent),
                    Canada (Express Entry), Australia (Skilled Migration).
                  </li>
                  <li>
                    Key Benefit: Pathway to permanent residency and citizenship
                    through recognized talent.
                  </li>
                  <li>
                    Country Access: Full access to destination’s benefits and
                    eventual global mobility.
                  </li>
                </ul>
              </div>
              {/* Image */}
              <div className="w-full">
                <img
                  src="https://img.freepik.com/free-photo/young-businessmen-standing-together-holding-laptop-discussing-business_181624-46531.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_hybrid&w=740&q=80"
                  alt="GCM Partners mission"
                  className="w-full rounded-xl shadow-md object-right h-[400px] object-cover"
                />
              </div>
            </div>

            {/* BizLaunch Residency */}
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="border p-6 rounded-xl shadow-sm flex flex-col justify-center lg:order-2">
                <h3 className="font-semibold text-lg mb-2">
                  BizLaunch Residency
                </h3>
                <p className="text-gray-600 mb-2">
                  Residency through launching innovative businesses abroad.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Timeline: 6–12 months.</li>
                  <li>
                    Cost: Proof of funds (~€11,000 plus, varies by country).
                  </li>
                  <li>
                    Residency Requirement: Must operate/start business locally.
                  </li>
                  <li>
                    Notable Countries: Portugal (Start-Up Visa), Canada
                    (Start-Up Visa), Spain, France (Tech Visa).
                  </li>
                  <li>
                    Key Benefit: Residency for entrepreneurs leading to PR and
                    citizenship.
                  </li>
                  <li>Country Access: EU Schengen or destination specific.</li>
                </ul>
              </div>
              {/* Image */}
              <div className="w-full">
                <img
                  src="https://img.freepik.com/premium-photo/tablet-business-people-working-city-research-cape-town-entrepreneurship-professional-teamwork-urban-building-with-reading-technology-communication-career-app_590464-186799.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_hybrid&w=740&q=80"
                  alt="GCM Partners mission"
                  className="w-full rounded-xl shadow-md object-right h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* WEALTH & LEGACY */}
        <div className="mb-16">
          <h2
            style={{ fontFamily: "Marcellus" }}
            className="text-3xl md:text-4xl font-bold mb-6 text-primary-800"
          >
            Wealth & Legacy
          </h2>
          <p className="mb-4 text-gray-700">
            (Citizenship by Investment, Caribbeans, EU PR/Residency)
          </p>
          <p className="mb-8 text-gray-600">
            Premium pathways for high-net-worth individuals securing global
            mobility and legacy planning through investments.
          </p>

          <div className="space-y-8">
            {/* Legacy Citizenship */}
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="border p-6 rounded-xl shadow-sm flex flex-col justify-center">
                <h3 className="font-semibold text-lg mb-2">
                  Legacy Citizenship
                </h3>
                <p className="text-gray-600 mb-2">
                  Acquire second citizenship through financial investment.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Timeline: 3–6 months.</li>
                  <li>Cost: $100,000 plus depending on program.</li>
                  <li>Residency Requirement: None.</li>
                  <li>
                    Notable Countries: St. Kitts & Nevis, Antigua, Grenada,
                    Dominica, Malta.
                  </li>
                  <li>
                    Key Benefit: Quick access to strong passports and global
                    mobility.
                  </li>
                  <li>
                    Country Access: Caribbean passports = 140–150 visa-free
                    countries; Malta = full EU access.
                  </li>
                </ul>
              </div>
              {/* Image */}
              <div className="w-full">
                <img
                  src="https://img.freepik.com/premium-photo/three-black-business-professionals-suits_1345137-2164.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_hybrid&w=740&q=80"
                  alt="GCM Partners mission"
                  className="w-full rounded-xl shadow-md object-right h-[400px] object-cover"
                />
              </div>
            </div>

            {/* GlobalAccess Residency */}
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="border p-6 rounded-xl shadow-sm flex flex-col justify-center lg:order-2">
                <h3 className="font-semibold text-lg mb-2">
                  GlobalAccess Residency
                </h3>
                <p className="text-gray-600 mb-2">
                  Secure long-term residency rights through investment or
                  contribution.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Timeline: 6–12 months to residency.</li>
                  <li>Cost: €100,000 plus depending on country.</li>
                  <li>Residency Requirement: Minimal or partial stay.</li>
                  <li>
                    Notable Countries: Portugal, Greece, Malta, Spain, UAE,
                    Canada, Australia, Panama, Chile.
                  </li>
                  <li>
                    Key Benefit: Flexibility, security, education, healthcare,
                    and citizenship eligibility (5–10 years).
                  </li>
                  <li>
                    Country Access: EU Schengen Area or destination-specific
                    benefits.
                  </li>
                </ul>
              </div>
              {/* Image */}
              <div className="w-full">
                <img
                  src="https://img.freepik.com/premium-photo/senior-couple-discussing-invoices-home_13339-369450.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_hybrid&w=740&q=80"
                  alt="GCM Partners mission"
                  className="w-full rounded-xl shadow-md object-right h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* LIFESTYLE & TRAVEL */}
        <div className="mb-16">
          <h2
            style={{ fontFamily: "Marcellus" }}
            className="text-3xl md:text-4xl font-bold mb-6 text-primary-800"
          >
            Lifestyle & Travel
          </h2>
          <p className="mb-4 text-gray-700">
            (Retirement Visa, Long-Stay Visa, Tourist Visa)
          </p>
          <p className="mb-8 text-gray-600">
            For retirees, families, and travelers seeking comfort, adventure, or
            long-term stays abroad.
          </p>

          <div className="space-y-8">
            {/* Golden Years Residency */}
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="border p-6 rounded-xl shadow-sm flex flex-col justify-center lg:order-2">
              <h3 className="font-semibold text-lg mb-2">
                Golden Years Residency
              </h3>
              <p className="text-gray-600 mb-2">
                Residency for retirees and long-term residents with stable
                income.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>Timeline: 3–6 months.</li>
                <li>Cost: Proof of pension/income (~€2,000–€3,000/month).</li>
                <li>Residency Requirement: 6–12 months per year.</li>
                <li>
                  Notable Countries: Portugal (D7 Visa), Spain (Non-Lucrative
                  Visa), Panama (Pensionado).
                </li>
                <li>
                  Key Benefit: Affordable lifestyle abroad with access to
                  healthcare and security.
                </li>
                <li>
                  Country Access: Schengen (EU) or regional (Latin
                  America/Asia).
                </li>
              </ul>
            </div>
              {/* Image */}
              <div className="w-full">
                <img
                  src="https://img.freepik.com/free-photo/technology-integrated-everyday-life_23-2151887055.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_hybrid&w=740&q=80"
                  // src="https://img.freepik.com/free-photo/happy-young-african-american-guy-using-digital-tablet-wireless-headphones-while-sitting-hotel-lounge-area-looking-webcam-smiling-tourist-talking-by-video-with-family-while-travelling_482257-65023.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
                  // src="https://img.freepik.com/premium-photo/portrait-black-man-brainstorming-meeting-office-action-planning-debate-discussion-ideas-thoughts-business-people-team-with-paperwork-financial-strategy-happy_590464-357042.jpg"
                  alt="GCM Partners mission"
                  className="w-full rounded-xl shadow-md object-center h-[400px] object-cover"
                />
              </div>
            </div>
            

            {/* GlobePass */}
            <div className="grid lg:grid-cols-2 gap-4">
              <div className="border p-6 rounded-xl shadow-sm flex flex-col justify-center">
                <h3 className="font-semibold text-lg mb-2">GlobePass</h3>
                <p className="text-gray-600 mb-2">
                  Simplify global short-term travel for tourism, family visits,
                  and business trips.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Timeline: 1–3 months processing.</li>
                  <li>Cost: Varies by destination ($100 plus per visa).</li>
                  <li>Residency Requirement: Short stays (30–180 days).</li>
                  <li>
                    Notable Countries: Schengen states, USA, UK, UAE, Kenya,
                    Turkey.
                  </li>
                  <li>
                    Key Benefit: Hassle-free short-stay mobility for leisure or
                    business.
                  </li>
                  <li>
                    Country Access: Depends on visa type (Schengen = 27 EU
                    states; US/UK/UAE single country).
                  </li>
                </ul>
              </div>
              {/* Image */}
              <div className="w-full">
                <img
                  src="https://img.freepik.com/premium-photo/senior-black-couple-enjoying-pleasant-moment-together-while-engaging-online-shopping-with-laptop-credit-card-home_124865-112563.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_hybrid&w=740&q=80"
                  // src="https://img.freepik.com/free-photo/happy-young-african-american-guy-using-digital-tablet-wireless-headphones-while-sitting-hotel-lounge-area-looking-webcam-smiling-tourist-talking-by-video-with-family-while-travelling_482257-65023.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
                  // src="https://img.freepik.com/premium-photo/portrait-black-man-brainstorming-meeting-office-action-planning-debate-discussion-ideas-thoughts-business-people-team-with-paperwork-financial-strategy-happy_590464-357042.jpg"
                  alt="GCM Partners mission"
                  className="w-full rounded-xl shadow-md object-center h-[400px] object-cover"
                />
              </div>
            </div>


            {/* VisaSure */}
            <div className="grid lg:grid-cols-2 gap-4">
               <div className="border p-6 rounded-xl shadow-sm flex flex-col justify-center lg:order-2">
              <h3 className="font-semibold text-lg mb-2">VisaSure</h3>
              <p className="text-gray-600 mb-2">
                Visa Readiness & Advisory Service — because confidence begins
                before you apply.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  Timeline: Instant online assessment + 48 hrs advisory and
                  review.
                </li>
                <li>Cost: N50,000–N300,000 depending on service tier.</li>
                <li>Residency Requirement: Short stays (30–180 days).</li>
                <li>
                  Notable Countries: Schengen states, USA, UK, UAE, Canada.
                </li>
                <li>
                  Key Benefit: Reduces visa denial risk by identifying weak
                  points before applying.
                </li>
                <li>
                  Country Access: Applicable globally — tailored per destination
                  and visa type.
                </li>
                <li>
                  Cashback Assurance: 30% refund if your application is denied
                  after advisory completion.
                </li>
              </ul>
            </div>
              {/* Image */}
              <div className="w-full">
                <img
                  src="https://img.freepik.com/premium-photo/business-people-walking-city-with-talking-commute-travel-journey-conversation-finance-corporate-team-employees-sidewalk-discussion-planning-briefing-networking_590464-452261.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&semt=ais_hybrid&w=740&q=80"
                  alt="GCM Partners mission"
                  className="w-full rounded-xl shadow-md object-center h-[400px] object-cover"
                />
              </div>
            </div>
           
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-16">
          <Link
            to="/resources#consultation"
            className="bg-gradient-to-br w-full flex items-center gap-2 justify-center from-primary-500 to-primary-600 text-white md:w-max px-8 py-3 rounded-full font-semibold hover:from-primary-600 hover:to-primary-800 transition"
          >
            Schedule Consultation <ArrowUpRight size={18} />
          </Link>
          <Link
            to="/globalresidency-citizenship#onboardingform"
            className="border-primary-800 w-full flex items-center gap-2 justify-center border md:w-max px-8 py-3 rounded-full font-semibold hover:border-primary-600 hover:bg-primary-600 transition duration-200 hover:text-white"
          >
            Register Now <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default GlobalAccessSolutions;
