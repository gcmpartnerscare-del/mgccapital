import React from "react";
import { Handshake } from "lucide-react";
import { Link } from "react-router-dom";

export default function PartnershipWithMGC() {
  return (
    <section className="py-20 px-4 md:px-10">
      <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 items-start gap-8 justify-between">
        {/* Header and CTA */}
        <div className="grid">
          <div className="flex items-center gap-4 mb-4">
            <p className="bg-white rounded-full shadow py-1 px-3 font-semibold text-primary-700">
              <Handshake />
            </p>
            <h3 className="text-primary-700">Partnership with GCM</h3>
          </div>
          <h2 className="text-3xl lg:text-5xl font-semibold max-w-xl leading-tight text-primary-700 mb-8">
            Let’s Build Global Success Together.
          </h2>

          <Link
            to="#ApplyNow"
            className="bg-primary-700 text-white max-w-96 text-center px-8 py-3 rounded-full font-semibold hover:bg-primary-800 transition"
          >
            Become a Partner
          </Link>
        </div>
        <div className="flex flex-col gap-6 max-w-xl mt-10">
          <div className="space-y-4">
            <h3
              style={{ fontFamily: "Marcellus" }}
              className="text-3xl font-semibold text-primary-700"
            >
              Ready to Partner with GCM?
            </h3>
            <p className="text-gray-600 mt-4 text-lg">
              Expand your client solutions. Grow your revenue. Offer world-class
              citizenship and residency services with a trusted global partner.
            </p>
          </div>
          <Link
            to="/resources#consultation"
            className="bg-white border border-primary-700 text-primary-700 px-8 py-3 rounded-full font-semibold hover:bg-primary-700 hover:text-white text-center transition"
          >
            Book a Consultation with Our Team
          </Link>
        </div>
      </div>

      {/* Partnership Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Immigration Companies */}
        <div className="mt-4">
          <img
            src="https://img.freepik.com/premium-photo/business-professionals-smart-casual-clothing-full-body-portrait-cheerful-expressions-sleek-office-backdrop_36897-20940.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
            alt="Immigration Companies"
            className="w-full mb-4 rounded-xl h-72 object-cover"
          />
          <h4 className="text-2xl font-semibold mb-2">Immigration Companies</h4>
          <p className="text-gray-700">
            Expand your offerings with EU citizenship and assured Pathways to a
            U.S. Green Card for globally-minded clients.
          </p>
          <p className="text-gray-700">
            We collaborate with licensed immigration consultancies who are
            helping clients pursue second citizenship, global mobility, or
            international relocation. Our partnership expands your service
            offerings with EU citizenship, U.S. Green Card and wealth access
            programs
          </p>
        </div>

        {/* Visa Application Centres */}
        <div className="mt-4">
          <img
            src="https://img.freepik.com/premium-photo/hands-young-african-american-male-applicant-passing-documents-passport_236854-55700.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
            alt="Visa Application Centres"
            className="w-full mb-4 rounded-xl h-72 object-cover"
          />
          <h4 className="text-2xl font-semibold mb-2">
            Visa Application Centres
          </h4>
          <p className="text-gray-700">
            Move beyond temporary visas. Help your clients secure long-term
            residency, citizenship, and wealth access globally.
          </p>
          <p className="text-gray-700">
            Partnering with GCM Partners allows visa centres to extend their services
            beyond short-term travel visas, offering clients long-term solutions
            like citizenship, permanent residency, and global investment
            opportunities
          </p>
        </div>

        {/* Legal Companies */}
        <div className="mt-4">
          <img
            src="https://img.freepik.com/premium-photo/now-thats-interesting-cropped-shot-diverse-group-businesspeople-sitting-boardroom-meeting_590464-54181.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
            alt="Legal Companies"
            className="w-full mb-4 rounded-xl h-72 object-cover object-top"
          />
          <h4 className="text-2xl font-semibold mb-2">Legal Companies</h4>
          <p className="text-gray-700">
            Enhance your legal practice with international citizenship solutions
            that complement estate, tax, and family law services.
          </p>
          <p className="text-gray-700">
            Law firms and legal consultancies can partner with GCM Partners to provide
            clients with citizenship, residency, and asset protection solutions
            that complement estate planning, tax, and family law services.
          </p>
        </div>

        {/* Tour Operators */}
        <div className="mt-4">
          <img
            src="https://img.freepik.com/premium-photo/black-couple-relax-smile-home-sofa-happiness-love-care-living-room-face-african-woman-man-together-affection-portrait-hug-comfort-happy-marriage_590464-243331.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
            alt="Immigration Companies"
            className="w-full mb-4 rounded-xl h-72 object-cover"
          />
          <h4 className="text-2xl font-semibold mb-2">Tour Operators</h4>
          <p className="text-gray-700">
            Transform travel dreams into life-changing relocation opportunities.
            Offer clients the next step in global living.
          </p>
          <p className="text-gray-700">
            Transform travel dreams into life-changing relocation opportunities.
            Offer clients the next step in global living.
          </p>
          <p className="text-gray-700">
            For travel companies catering to globally mobile clients, our
            partnership enables you to offer a seamless pathway from tourism to
            permanent residency or second citizenship, enhancing client value
          </p>
        </div>

        {/* Consulting Companies */}
        <div className="mt-4">
          <img
            src="https://img.freepik.com/free-photo/african-american-young-freelancers-couch-sharing-business-idea_482257-120237.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
            alt="Visa Application Centres"
            className="w-full mb-4 rounded-xl h-72 object-cover"
          />
          <h4 className="text-2xl font-semibold mb-2">Consulting Companies</h4>
          <p className="text-gray-700">
            Empower your clients with access to wealth preservation, asset
            diversification, and second citizenship programs.
          </p>
          <p className="text-gray-700">
            Business, wealth, and lifestyle consultants partner with GCM Partners to
            provide high-net-worth clients with solutions in global citizenship,
            wealth preservation, and international relocation — strengthening
            your advisory portfolio
          </p>
        </div>

        {/* Private Lawyers and Advocates */}
        <div className="mt-4">
          <img
            src="https://img.freepik.com/premium-photo/photograph-showcasing-happiness-multicultural-business-couple_958297-13390.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
            alt="Legal Companies"
            className="w-full mb-4 rounded-xl h-72 object-cover"
          />
          <h4 className="text-2xl font-semibold mb-2">
            Private Lawyers and Advocates
          </h4>
          <p className="text-gray-700">
            Expand your legal services into the lucrative global mobility space.
            Offer personalized citizenship and residency pathways
          </p>
          <p className="text-gray-700">
            Independent legal practitioners benefit from partnering with GCM Partners by
            extending legal services to include investment immigration,
            international residency, and EU citizenship opportunities for
            clients seeking cross-border solutions
          </p>
        </div>

        {/* Clients of GCM and Global Mobility Networks */}
        <div className="mt-4">
          <img
            src="https://img.freepik.com/premium-photo/portrait-father-daughter-laughing-being-happy-daughter-with-her-arm-around-her-father_928131-3.jpg?uid=R110204670&ga=GA1.1.302447274.1684498652&w=740&q=80"
            alt="Legal Companies"
            className="w-full mb-4 rounded-xl h-72 object-cover"
          />
          <h4 className="text-2xl font-semibold mb-2">
            Clients of GCM and Global Mobility Networks
          </h4>
          <p className="text-gray-700">
            Add value to globally mobile clients seeking freedom, flexibility,
            and international wealth security.
          </p>
          <p className="text-gray-700">
            If you are part of the international mobility ecosystem — from expatriate services to lifestyle management — partnering with GCM Partners provides your clients access to citizenship, investment, and wealth diversification programs in Europe and beyond.
          </p>
        </div>
      </div>
    </section>
  );
}
