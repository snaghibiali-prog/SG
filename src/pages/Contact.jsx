import { useState } from 'react';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';

const ENQUIRY_TYPES = ['Platform Demo', 'Parts Procurement', 'Advisory Services', 'Distribution Rights', 'General Enquiry'];
const EQUIPMENT_TYPES = ['CAT Genset', 'CAT CHP', 'Jenbacher CHP', 'Mixed Fleet', 'Other', 'Not Applicable'];
const UNIT_COUNTS = ['1–5', '6–20', '21–50', '50+'];

const INITIAL_FORM = {
  fullName: '',
  companyName: '',
  country: '',
  email: '',
  phone: '',
  enquiryType: ENQUIRY_TYPES[0],
  equipmentType: EQUIPMENT_TYPES[0],
  unitCount: UNIT_COUNTS[0],
  message: '',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function Label({ children }) {
  return <label className="block text-gp-muted text-sm uppercase tracking-wider mb-2">{children}</label>;
}

const inputClass =
  'w-full bg-gp-card border border-gp-border text-gp-text px-4 py-3 focus:border-gp-accent outline-none';

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function setField(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate() {
    const errs = {};
    if (!form.fullName.trim()) errs.fullName = 'Full name is required.';
    if (!form.companyName.trim()) errs.companyName = 'Company name is required.';
    if (!form.country.trim()) errs.country = 'Country is required.';
    if (!form.email.trim()) errs.email = 'Email address is required.';
    else if (!EMAIL_RE.test(form.email.trim())) errs.email = 'Enter a valid email address.';
    if (!form.message.trim() || form.message.trim().length < 20) {
      errs.message = 'Message must be at least 20 characters.';
    }
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    // No backend in this build — Supabase or an email service will replace this
    // console.log in the next phase.
    console.log('Contact form submission', form);
    setSubmitted(true);
    setForm(INITIAL_FORM);
  }

  return (
    <>
      <PageHero
        headline="Contact Genprima."
        subheadline="Use the form below to submit a demo request, platform enquiry, procurement question, advisory enquiry, or distribution application. All submissions are reviewed and responded to within two business days."
      />

      <section className="bg-gp-dark py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {submitted && (
              <div className="border border-gp-accent bg-gp-accent/10 text-gp-accent p-4 mb-8 text-sm">
                Your enquiry has been received. The Genprima team will respond within two business days.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Full Name</Label>
                  <input
                    className={inputClass}
                    value={form.fullName}
                    onChange={(e) => setField('fullName', e.target.value)}
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-2">{errors.fullName}</p>}
                </div>
                <div>
                  <Label>Company Name</Label>
                  <input
                    className={inputClass}
                    value={form.companyName}
                    onChange={(e) => setField('companyName', e.target.value)}
                  />
                  {errors.companyName && <p className="text-red-500 text-xs mt-2">{errors.companyName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Country</Label>
                  <input
                    className={inputClass}
                    value={form.country}
                    onChange={(e) => setField('country', e.target.value)}
                  />
                  {errors.country && <p className="text-red-500 text-xs mt-2">{errors.country}</p>}
                </div>
                <div>
                  <Label>Email Address</Label>
                  <input
                    type="email"
                    className={inputClass}
                    value={form.email}
                    onChange={(e) => setField('email', e.target.value)}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Phone Number</Label>
                  <input
                    type="tel"
                    className={inputClass}
                    value={form.phone}
                    onChange={(e) => setField('phone', e.target.value)}
                  />
                </div>
                <div>
                  <Label>Enquiry Type</Label>
                  <select
                    className={inputClass}
                    value={form.enquiryType}
                    onChange={(e) => setField('enquiryType', e.target.value)}
                  >
                    {ENQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label>Equipment Type</Label>
                  <select
                    className={inputClass}
                    value={form.equipmentType}
                    onChange={(e) => setField('equipmentType', e.target.value)}
                  >
                    {EQUIPMENT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label>Number of Units</Label>
                  <select
                    className={inputClass}
                    value={form.unitCount}
                    onChange={(e) => setField('unitCount', e.target.value)}
                  >
                    {UNIT_COUNTS.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <Label>Message</Label>
                <textarea
                  className={`${inputClass} min-h-[140px]`}
                  value={form.message}
                  onChange={(e) => setField('message', e.target.value)}
                />
                {errors.message && <p className="text-red-500 text-xs mt-2">{errors.message}</p>}
              </div>

              <Button type="submit" variant="primary" className="w-full">
                Send Enquiry
              </Button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="border border-gp-border p-8">
              <p className="text-xs font-bold uppercase tracking-widest text-gp-accent mb-4">
                Response Expectation
              </p>
              <p className="text-sm text-gp-muted leading-relaxed">
                All enquiries are reviewed by the Genprima team. Demo requests are responded to with a proposed
                time within two business days. Advisory enquiries receive an initial scope discussion invitation.
                Distribution enquiries are assessed against current territory availability before a response is
                issued.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
