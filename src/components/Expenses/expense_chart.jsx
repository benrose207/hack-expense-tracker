import React, { useEffect } from 'react';
import Chart from 'chart.js';

const ExpenseChart = ({ filteredData }) => {
  const buildChartData = () => {
    const expenses = Object.values(filteredData.expenses);
    const sorted = expenses.sort((a, b) => (
      new Date(a.date) - new Date(b.date)
    ));

    const labels = [];
    const dataSets = {};

    sorted.forEach((expense) => {
      if (dataSets[expense.categoryName] === undefined) {
        dataSets[expense.categoryName] = {
          label: expense.categoryName,
          data: [],
          backgroundColor: filteredData.categories[expense.category].color,
        };
      }
    });

    sorted.forEach((expense) => {
      if (!labels.length || labels[labels.length - 1] !== expense.date) {
        labels.push(expense.date);

        const sets = Object.keys(dataSets);
        for (let i = 0; i < sets.length; i += 1) {
          const category = sets[i];
          if (category === expense.categoryName) {
            dataSets[category].data.push(parseInt(expense.amount));
          } else {
            dataSets[category].data.push(0);
          }
        }
      } else {
        const sets = Object.keys(dataSets);
        for (let i = 0; i < sets.length; i += 1) {
          const category = sets[i];
          if (category === expense.categoryName) {
            const { data } = dataSets[category];
            data[data.length - 1] += parseInt(expense.amount);
          }
        }
      }
    });

    return { labels, dataSets };
  };

  useEffect(() => {
    const canvas = document.getElementById('expense-chart');
    canvas.remove();

    const chartContainer = document.getElementById('chart-container');
    const newCanvas = document.createElement('canvas');
    const attribute = document.createAttribute('id');
    attribute.value = 'expense-chart';
    newCanvas.setAttributeNode(attribute);
    chartContainer.appendChild(newCanvas);

    const ctx = document.getElementById('expense-chart').getContext('2d');

    const results = buildChartData();

    const chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: results.labels,
        datasets: Object.values(results.dataSets),
      },
      options: {
        scales: {
          xAxes: [{
            stacked: true,
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
            },
            stacked: true,
          }],
        },
      },
    });
  });

  return (
    <div id="chart-container">
      <canvas id="expense-chart"></canvas>
    </div>
  );
};

export default ExpenseChart;
