import { useState } from 'react'
function Visible() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
        <button onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? 'Hide' : 'Show'} Text
        </button>

        {isVisible && (
            <p>
                Text
            </p>
        )}
    </div>
  );
}

export default Visible;
