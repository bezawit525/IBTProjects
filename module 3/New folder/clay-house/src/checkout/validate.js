// Pure validation rules — easy to test, no React in here.
export function validate({ fullName, phone, address }) {
  const errors = {}
  if (fullName.trim().length < 2) errors.fullName = 'Enter your full name.'
  if (!/^\+?[\d\s()-]{7,}$/.test(phone.trim())) errors.phone = 'Enter a valid phone number (at least 7 digits).'
  if (address.trim().length < 8) errors.address = 'Enter a street address, city, etc.'
  return errors
}
