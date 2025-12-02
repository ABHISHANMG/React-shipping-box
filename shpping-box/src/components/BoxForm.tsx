import { useState, type FormEvent } from 'react';
import { useBoxes } from '../hooks/useBoxes';
import { COUNTRY_MULTIPLIERS } from '../types/Box';
import { hexToRgb } from '../utils/rgbConverter';
import './BoxForm.css';

const BoxForm = () => {
  const { saveBox } = useBoxes();
  const [formData, setFormData] = useState({
    receiverName: '',
    weight: '',
    boxColor: '#ffffff',
    destinationCountry: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.receiverName.trim()) {
      newErrors.receiverName = 'Receiver name is required';
    }

    if (!formData.weight) {
      newErrors.weight = 'Weight is required';
    } else {
      const weightNum = parseFloat(formData.weight);
      if (isNaN(weightNum) || weightNum < 0) {
        newErrors.weight = 'Weight must be a positive number';
      }
    }

    if (!formData.destinationCountry) {
      newErrors.destinationCountry = 'Destination country is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage('');

    if (!validateForm()) {
      return;
    }

    let weight = parseFloat(formData.weight);
    if (weight < 0) {
      weight = 0;
      setFormData((prev) => ({ ...prev, weight: '0' }));
    }

    const rgbColor = hexToRgb(formData.boxColor);

    try {
      await saveBox({
        receiverName: formData.receiverName.trim(),
        weight,
        boxColor: rgbColor,
        destinationCountry: formData.destinationCountry,
      });

      // Reset form
      setFormData({
        receiverName: '',
        weight: '',
        boxColor: '#ffffff',
        destinationCountry: '',
      });
      setErrors({});
      setSuccessMessage('Box saved successfully!');
    } catch (error) {
      setErrors({ submit: 'Failed to save box. Please try again.' });
    }
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, weight: value }));

    if (value && parseFloat(value) < 0) {
      setErrors((prev) => ({
        ...prev,
        weight: 'Negative values are not permitted. Defaulting to zero.',
      }));
      setTimeout(() => {
        setFormData((prev) => ({ ...prev, weight: '0' }));
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.weight;
          return newErrors;
        });
      }, 2000);
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.weight;
        return newErrors;
      });
    }
  };

  return (
    <div className="box-form-container">
      <div className="box-form-card">
        <h2>Add Shipping Box</h2>
        <form onSubmit={handleSubmit} className="box-form">
          <div className="form-group">
            <label htmlFor="receiverName">
              Receiver Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="receiverName"
              value={formData.receiverName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, receiverName: e.target.value }))
              }
              className={errors.receiverName ? 'error' : ''}
            />
            {errors.receiverName && (
              <span className="error-message">{errors.receiverName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="weight">
              Weight (kg) <span className="required">*</span>
            </label>
            <input
              type="number"
              id="weight"
              step="0.01"
              min="0"
              value={formData.weight}
              onChange={handleWeightChange}
              className={errors.weight ? 'error' : ''}
            />
            {errors.weight && (
              <span className="error-message">{errors.weight}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="boxColor">
              Box Colour <span className="required">*</span>
            </label>
            <div className="color-picker-container">
              <input
                type="color"
                id="boxColor"
                value={formData.boxColor}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, boxColor: e.target.value }))
                }
                className="color-picker"
              />
              <span className="color-value">
                RGB: ({hexToRgb(formData.boxColor)})
              </span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="destinationCountry">
              Destination Country <span className="required">*</span>
            </label>
            <select
              id="destinationCountry"
              value={formData.destinationCountry}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  destinationCountry: e.target.value,
                }))
              }
              className={errors.destinationCountry ? 'error' : ''}
            >
              <option value="">Select a country</option>
              {Object.entries(COUNTRY_MULTIPLIERS).map(([country, multiplier]) => (
                <option key={country} value={country}>
                  {country} ({multiplier} INR per kg)
                </option>
              ))}
            </select>
            {errors.destinationCountry && (
              <span className="error-message">{errors.destinationCountry}</span>
            )}
          </div>

          {successMessage && (
            <div className="success-message">{successMessage}</div>
          )}

          {errors.submit && (
            <div className="error-message">{errors.submit}</div>
          )}

          <button type="submit" className="submit-button">
            Save Box
          </button>
        </form>
      </div>
    </div>
  );
};

export default BoxForm;

