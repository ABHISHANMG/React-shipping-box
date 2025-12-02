import { useBoxes } from '../hooks/useBoxes';
import './BoxList.css';

const BoxList = () => {
  const { boxes } = useBoxes();

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  const rgbToStyle = (rgb: string): string => {
    return `rgb(${rgb})`;
  };

  if (boxes.length === 0) {
    return (
      <div className="box-list-container">
        <div className="empty-state">
          <p>No boxes added yet. Add a box using the form!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="box-list-container">
      <div className="box-list-header">
        <h2>Shipping Boxes List</h2>
        <p className="box-count">Total: {boxes.length} box(es)</p>
      </div>
      <div className="table-wrapper">
        <table className="box-table">
          <thead>
            <tr>
              <th>Receiver Name</th>
              <th>Weight (kg)</th>
              <th>Box Colour</th>
              <th>Destination Country</th>
              <th>Shipping Cost</th>
            </tr>
          </thead>
          <tbody>
            {boxes.map((box) => (
              <tr key={box.id}>
                <td>{box.receiverName}</td>
                <td>{box.weight.toFixed(2)}</td>
                <td>
                  <div className="color-display">
                    <div
                      className="color-box"
                      style={{ backgroundColor: rgbToStyle(box.boxColor) }}
                    ></div>
                    <span className="color-rgb">({box.boxColor})</span>
                  </div>
                </td>
                <td>{box.destinationCountry}</td>
                <td className="cost-cell">{formatCurrency(box.shippingCost)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BoxList;

