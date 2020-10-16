import React from 'react';
import Button from '../ui/Button';

const Subscribe = () => {
  return (
    <div className="subscribe">
      <input type="text" placeholder="Your email" />
      <select>
        <option value="">Select your country</option>
      </select>
      <div className="subscribe__agreement">
        <input type="checkbox" id="agreement" />
        <label htmlFor="agreement">
          By submitting my information above, I acknowledge that I have reviewed
          and hereby agree to the Privacy Policy and Terms of Use.
        </label>
      </div>
      <Button type="submit" text="Join" context="footer" />
    </div>
  );
};

export default Subscribe;
