export const site = {
  name: "Midwest Wash Partners",
  email: "esimons@midwestwashpartners.com",
  // No phone line yet. Replace when one exists.
  phone: "[PHONE]",
  serviceArea: [
    "Illinois",
    "Southern Wisconsin",
    "Northwest Indiana",
    "Southwest Michigan",
  ],
  url: "https://midwestwashpartners.com",
};

export const inquiryTypes = [
  { value: "selling", label: "I own a wash and am thinking about selling" },
  { value: "fuel", label: "I run a fuel station or C-store with a wash" },
  { value: "site", label: "I have a site or project in mind" },
  { value: "service", label: "I need service, equipment, or soap" },
  { value: "management", label: "I want someone to run my wash" },
  { value: "other", label: "Something else" },
] as const;

export type InquiryType = (typeof inquiryTypes)[number]["value"];
