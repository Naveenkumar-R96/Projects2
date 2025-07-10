import axios from 'axios';

function App() {
  const handleCheck = async () => {
    try {
      const res = await axios.post('http://localhost:5000/run-check');
      alert(res.data);
    } catch (err) {
      alert("❌ Failed: " + err.message);
    }
  };

  return (
    <div style={{ padding: 30 }}>
      <h2>📄 TN Result Checker</h2>
      <button onClick={handleCheck}>Check & Send All Results</button>
    </div>
  );
}

export default App;

