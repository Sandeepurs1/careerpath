import React from 'react';
import { Container } from 'react-bootstrap';

function DataScientist() {
  return (
    <Container className="my-4">
          <h2 style={{ textAlign: 'center', marginTop: '20px' }}>DATA SCIENTIST ROADMAP</h2>

          <img
  src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010130.jpg?t=st=1744454694~exp=1744458294~hmac=4553dfc83df3cb0fe616b55d94f8920aa2e36d07bbcfdc0176e0836b942d4dbe&w=1380"
  alt="Backend"
  style={{ width: '100%', maxWidth: '600px', height: 'auto', display: 'block', margin: '20px auto' }}
/>
      <p style ={{fontWeight:800}}>🧠 What is a Data Scientist?</p>
      <p style ={{fontWeight:600}}>A Data Scientist is a data expert who builds algorithms, predictive models, and machine learning systems to solve complex problems and forecast future trends. They use data to drive decisions, optimize processes, and build intelligent systems.

While data analysts mostly look at what happened, data scientists focus on why it happened, what will happen, and how we can make it happen.</p>
<p style ={{fontWeight:800}}>🔍 What Does a Data Scientist Do?</p>

<p style ={{fontWeight:800}}>1.Data Collection</p>
      <p>Pull data from APIs, web scraping, databases, or sensors.</p>
      
<p style ={{fontWeight:800}}>2.Data Cleaning & Preprocessing</p>
      <p>Handle missing data, outliers, formatting issues.</p>
      <p>Tools: Pandas, NumPy, SQL.</p>

      <p style ={{fontWeight:800}}>3.Exploratory Data Analysis (EDA)</p>
      <p>Visualize and summarize data to discover patterns.</p>
      <p>Tools: Seaborn, Matplotlib, Plotly.</p>

      <p style ={{fontWeight:800}}>4.Feature Engineering</p>
      <p>Create and transform data into formats suitable for models.</p>

      <p style ={{fontWeight:800}}>5.Model Building</p>
      <p>Use machine learning to make predictions or classifications.</p>
      <p>Tools: scikit-learn, TensorFlow, PyTorch, XGBoost.</p>

      <p style ={{fontWeight:800}}>6.Model Evaluation & Tuning</p>
      <p>Test model performance and fine-tune for better accuracy.</p>

      <p style ={{fontWeight:800}}>7.Deployment</p>
      <p>Integrate models into real-world apps or platforms via APIs or pipelines.</p>

      <p style ={{fontWeight:800}}>8.Communication</p>

      <p>Translate complex results into actionable insights for stakeholders.</p>

      <p style ={{fontWeight:800}}>🛠️ Tools & Technologies</p>

      <p>Programming: Python, R</p>

      <p>Data Handling: Pandas, NumPy, SQL, Spark</p>

      <p>Machine Learning: scikit-learn, TensorFlow, PyTorch</p>

      <p>Data Visualization: Matplotlib, Seaborn, Plotly, Tableau</p>

      <p>Big Data: Hadoop, Spark, AWS/GCP/Azure</p>

      <p>MLOps: Docker, MLflow, FastAPI, Airflow</p>

      <p style ={{fontWeight:800}}>BELOW ARE THE YOUTUBE CLASSES LINKS ....GO CHECK IT OUT AND LEARN</p>
      <ul>
        <li><a href="https://www.youtube.com/watch?v=ua-CiDNNj30" target="_blank" rel="noreferrer">Intro to Data Science</a></li>
        <li><a href="https://www.youtube.com/watch?v=cKxRvEZd3Mw" target="_blank" rel="noreferrer">Machine Learning by Andrew Ng</a></li>
        <li><a href="https://www.youtube.com/watch?v=9ylj9NR0Lcg" target="_blank" rel="noreferrer">Data Analysis with Python</a></li>
        <li><a href="https://www.youtube.com/watch?v=xC-c7E5PK0Y" target="_blank" rel="noreferrer">Data Science Project Example</a></li>
      </ul>
    </Container>
  );
}

export default DataScientist;
